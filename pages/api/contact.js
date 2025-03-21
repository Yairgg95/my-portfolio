import nodemailer from "nodemailer";
import createError from "http-errors";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sanitizeInput = (input, maxLength) => {
  if (typeof input !== "string" || input.length > maxLength) return null;

  const sanitized = input
    .replace(/<[^>]*>?/gm, "")
    .replace(/(script|eval|javascript|onerror|onload)/gi, "");

    return sanitized.trim();
};

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      throw createError(405, "Method Not Allowed");
    }

    let { name, email, message } = req.body;

    name = sanitizeInput(name,50);
    email =sanitizeInput(email,100);
    message = sanitizeInput(message,500);

    if (!name || !email || !message) {
      throw createError(
        400,
        "All fields are required (name | email | message)"
      );
    }

    if(!isValidEmail(email)){
        throw createError(400, "Invalid email format.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "yair.g.guadarrama@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      error: error.message,
    });
  }
}
