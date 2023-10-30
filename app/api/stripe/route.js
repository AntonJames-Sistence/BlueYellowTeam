import { NextResponse } from 'next/server';

const stripe = process.env.STRIPE_TEST;

export async function POST() {
  const url = '/create-checkout-session';
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    NextResponse.redirect(303, session.url);
  } catch (error) {
    return NextResponse.error();
  }
}
