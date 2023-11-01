import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let data = await request.json();
  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    // custom_fields: [
    //     {

    //     }
    // ]
    mode: "payment",
    success_url: "http://localhost:3000", // change before production
    cancel_url: "http://localhost:3000", // change before production
  });

  return NextResponse.json(session.url);
}
