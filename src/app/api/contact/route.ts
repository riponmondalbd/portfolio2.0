import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${body.firstName} ${body.lastName}`,
      text: `
You received a new message from your contact form:

Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Phone: ${body.phone}
Service: ${body.service}
Message: ${body.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: `Email failed to send: ${error.message || error}` },
      { status: 500 }
    );
  }
}
