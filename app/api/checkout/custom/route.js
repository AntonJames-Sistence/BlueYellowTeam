import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json(); // change for amount fetch
    let amount = data.amount;
    let name = data.name;
    let description = data.description;

    const product = await stripe.products.create({
        name: name,
        description: description,
        images: ['https://blueyellowfoundation.org/wp-content/uploads/2023/03/2023-03-19-09.32.51-1024x683.jpg'], // change image ./causes-children.jpeg
    });

    const price = await stripe.prices.create({
        product: product.id,
        unit_amount: amount * 100, // change to amount got from data
        currency: 'usd',
    });
  
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price: price.id,
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://blue-yellow-foundation.vercel.app/', // change for thanks message
        cancel_url: 'https://blue-yellow-foundation.vercel.app/', // return to donate page
    });
  
    return NextResponse.json(session.url);
  }
  