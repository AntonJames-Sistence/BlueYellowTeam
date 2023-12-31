import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    let data = await req.json();
    const email = data.email;

    try {
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD,
            }
        });

const text = `Dear Donor,

I trust this message finds you in good health. I am writing to express our deepest gratitude for your generous donation to the Blue & Yellow Foundation. Your support means the world to us and plays a pivotal role in our mission to aid Ukrainians.

Your contribution will directly impact lives, enabling us to extend our assistance to those in need. It is through the kindness and generosity of individuals like you that we are able to make a significant difference.

We uphold our commitment to transparency and accountability. Rest assured, every penny of your donation will be utilized effectively to create a meaningful and lasting impact.

Once again, thank you for your unwavering support and belief in our cause. Should you have any inquiries or seek further information about our projects and initiatives, please feel free to reach out. Your ongoing support is invaluable to us.

Warm regards,
Anton James
Blue & Yellow Foundation

Website: https://blueyellowfoundation.org/
Facebook: https://www.facebook.com/BlueYellowFoundation
Instagram: https://www.instagram.com/blueyellowfoundation/`;


        const mailOptions = {
            from: 'blue.yellow.foundation.d@gmail.com',
            to: email,
            subject: 'Thank You for Your Donation!',
            text: text,
        };
        transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' }, 
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Error sending email' }, 
            { status: 500 }
        );
    }
}