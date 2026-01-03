import { CreateEmailOptions, Resend } from "resend";
import { z } from "zod";
import { AppError } from "../../util/AppError";

type RecaptchaResponse = {
  success: boolean;
  errorCodes: string[];
};

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name too short")
    .max(200, "Name string to long."),
  from: z
    .string()
    .trim()
    .min(1, "From too short")
    .max(200, "From string to long."),
  message: z
    .string()
    .trim()
    .min(1, "Message is too short.")
    .max(2000, "Message too long."),
  recaptchaToken: z.string().min(1, "Recaptcha token is required."),
});

contactSchema.required({
  name: true,
  from: true,
  message: true,
  recaptchaToken: true,
});

export default defineEventHandler(async (event) => {
  let body = await readBody(event);

  const isBodySafe = await contactSchema.safeParseAsync(body);

  if (!isBodySafe.success) {
    throw new AppError("Something wrong with your input.", 400);
  }

  const recaptchaToken = body.recaptchaToken;
  const recaptchaResponse = await $fetch<RecaptchaResponse>(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${useRuntimeConfig().recaptchaSecretKey}&response=${recaptchaToken}`,
    },
  );

  if (!recaptchaResponse.success) {
    let errors = "";
    if (
      recaptchaResponse.errorCodes &&
      Array.isArray(recaptchaResponse.errorCodes)
    ) {
      errors = recaptchaResponse.errorCodes.join(", ");
    } else if (
      recaptchaResponse.errorCodes &&
      typeof recaptchaResponse.errorCodes === "string"
    ) {
      errors = recaptchaResponse.errorCodes;
    } else if (
      recaptchaResponse.errorCodes &&
      typeof recaptchaResponse.errorCodes === "object"
    ) {
      errors = Object.values(recaptchaResponse.errorCodes).join(", ");
    } else {
      errors = "Unknown error";
    }
    console.error(
      `Recaptcha verification failed: ${errors}`,
      recaptchaResponse,
      useRuntimeConfig().recaptchaSecretKey,
      useRuntimeConfig().public.recaptchaSiteKey,
    );
    event.respondWith(
      new Response(
        JSON.stringify({ message: `Recaptcha verification failed: ${errors}` }),
        { status: 400 },
      ),
    );
    return;
  }

  const mailer = new Resend(useRuntimeConfig().resendApiKey);

  const mailOptions = {
    from: `${isBodySafe.data.name} through portfolio <career@haileabtesfaye.dev>`,
    to: useRuntimeConfig().emailUser,
    tags: [{ name: "Media", value: "Portfolio" }],
    subject: `${isBodySafe.data.name} wants to work with you`,
    text: `${isBodySafe.data.name} with ${isBodySafe.data.from} says:
    "${isBodySafe.data.message}"
    `,
  } as CreateEmailOptions;

  try {
    await mailer.emails.send(mailOptions);
  } catch (error) {
    throw new AppError("This one is my problem.", 500);
  }
});
