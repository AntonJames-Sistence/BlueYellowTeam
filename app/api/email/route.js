import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
// import data from '@/data.json';

export async function POST(req) {
    let data = await req.json();
    const email = data.email;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
              clientId: process.env.OAUTH_CLIENTID,
              clientSecret: process.env.OAUTH_CLIENT_SECRET,
              refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
        });

        const mailOptions = {
        from: 'blue.yellow.foundation.d@gmail.com',
        to: email,
        subject: 'Thank You for Your Donation!',
        text: 'Thank you for your purchase. We appreciate your business!',
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent:', info.messageId);
        return NextResponse.json(
                { message: 'Email sent successfully' }, 
                { status: 200 }
            );
    } catch (error) {
        console.error('Error sending email:', error.message);
        return NextResponse.json(
            { message: 'Error sending email' }, 
            { status: 500 }
        );
    }
}
