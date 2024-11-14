import nodemailer from "nodemailer";
import { z } from "zod";
import { AppError } from "~/util/AppError";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);

  const contactSchema = z.object({
    from: z
      .string()
      .trim()
      .min(1, "From too short")
      .max(200, "From string to long."),
    subject: z
      .string()
      .trim()
      .min(1, "Subject too short")
      .max(200, "Subject to long."),
    text: z
      .string()
      .trim()
      .min(1, "Message is too short.")
      .max(2000, "Message too long."),
  });

  contactSchema.required({
    from: true,
    subject: true,
    text: true,
  });

  const isBodySafe = await contactSchema.safeParseAsync(body);

  if (!isBodySafe.success) {
    console.log(body.From);
    throw new AppError("Something wrong with your input.", 400);
  }

  const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: useRuntimeConfig().emailUser,
      pass: useRuntimeConfig().emailPassword,
    },
  });

  const mailOptions = {
    from: body.from,
    to: useRuntimeConfig().emailUser,
    subject: body.subject,
    text: body.text,
  };

  try {
    await mailer.sendMail(mailOptions);
  } catch (error) {
    throw new AppError("This one is my problem.", 500);
  }
});
