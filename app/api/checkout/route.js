import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json(); // data passed from frontend
    let amount = data.amount;
    let name = data.name;
    let description = data.description;
    let interval = data.interval;

    // create product id
    const product = await stripe.products.create({
        name: name,
        description: description,
        images: ['https://blueyellowfoundation.org/wp-content/uploads/2023/03/2023-03-19-09.32.51-1024x683.jpg'], // change image ./causes-children.jpeg
    });

    if (typeof interval === 'string') {
        // subscription option
        const recurring = await stripe.prices.create({
            product: product.id,
            unit_amount: amount * 100,
            recurring: {interval: interval},
            currency: 'usd',
        });

        // create checkout link for subscription
        const recurringSession = await stripe.checkout.sessions.create({
            line_items: [{
                price: recurring.id,
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: 'https://blue-yellow-foundation.vercel.app/', // change for thanks message
            cancel_url: 'https://blue-yellow-foundation.vercel.app/', // return to donate page
        });

        return NextResponse.json(recurringSession.url);
    } else {
        // single payment option
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: amount * 100, // change to amount got from data
            currency: 'usd',
        });

        // create checkout link for single donation
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
}
  