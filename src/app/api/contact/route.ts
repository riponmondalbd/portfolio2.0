import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation (optional but recommended)
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

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
Phone: ${body.phone || "N/A"}
Service: ${body.service || "N/A"}
Message: ${body.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Email error:", error);
      return NextResponse.json(
        { message: `Email failed to send: ${error.message}` },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json(
        { message: "Email failed to send: Unknown error occurred." },
        { status: 500 }
      );
    }
  }
}
