import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const endpointSecret = process.env.LOCAL_STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handleEmailSend = async (customerEmail) => {
  console.log('step 2 completed')
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

  const text = `Dear Donor,

I hope this message finds you well. I am writing to express our deepest gratitude for your generous donation to the Blue & Yellow Foundation. Your support means the world to us and plays a pivotal role in our mission to help Ukrainians.

Your contribution will directly impact lives, allowing us to [mention specific actions or projects]. It's through the kindness and generosity of individuals like you that we are able to make a significant difference.

We are committed to transparency and accountability, and we will ensure that every penny of your donation is utilized effectively to create a meaningful and lasting impact.

Once again, thank you for your unwavering support and belief in our cause. If you have any questions or would like further information about our projects and initiatives, please don't hesitate to reach out. Your ongoing support is invaluable to us.

Warm regards,
Anton James
Blue & Yellow Foundation

Website: https://blueyellowfoundation.org/
Facebook: https://www.facebook.com/BlueYellowFoundation
Instagram: https://www.instagram.com/blueyellowfoundation/`;

  const mailOptions = {
    from: 'blue.yellow.foundation.d@gmail.com',
    to: customerEmail,
    subject: 'Thank You for Your Donation!',
    text: text,
  };

  const info = await transporter.sendMail(mailOptions);
  return info.messageId;
};

export async function POST(req) {
  // super important, need to get raw body for stripe
  
  let event
  const text = await req.text();
  const stripeSignature = req.headers.get("Stripe-Signature");
  
  try {
    event = stripe.webhooks.constructEvent(
        text,
        stripeSignature,
        endpointSecret
      );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Webhook signature verification failed",
      },
      {
        status: 400,
      }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // const customerEmail = paymentIntentSucceeded.receipt_email;
      const customerEmail = 'anton.james.ja@gmail.com';
      if (paymentIntentSucceeded){
          try {
            console.log('step 1 completed')
            // const response = await fetch('/api/email', {
            //   method: 'POST',
            //   headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   body: JSON.stringify({ email: customerEmail }),
            // });
            const data = handleEmailSend(customerEmail);


            return NextResponse.json(
              {
                message: data,
              },
              {
                status: 200,
              }
            );
          } catch (error) {
            return NextResponse.json(
              {
                message: error,
              },
              {
                status: 400,
              }
            );
          }
      }

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({
    status: 200,
  });
};

