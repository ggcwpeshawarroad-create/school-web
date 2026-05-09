import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || '"GGC Website" <info@ggcstr.edu.pk>',
      to: process.env.SMTP_TO || process.env.SMTP_USER || 'info@ggcstr.edu.pk',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from the contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p>You have a new message from the contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please check your SMTP configuration.' }, { status: 500 });
  }
}
