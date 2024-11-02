import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log(body);

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
    console.log(error);
  }
});
