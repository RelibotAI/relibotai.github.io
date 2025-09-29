import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'relibotai25@gmail.com',
        pass: 'nulnfcytlenasafe',
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.verify();

    const mailOptions = {
      from: 'relibotai25@gmail.com',
      to: 'office@relibotai.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true });
} catch (error) {
  console.error('Detailed error:', error);
  let errorMessage = 'Unknown error';
  
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }
  
  return NextResponse.json({ 
    error: `Failed to send email: ${errorMessage}` 
  }, { status: 500 });
}
}