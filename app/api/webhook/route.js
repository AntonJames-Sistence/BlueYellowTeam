// import { buffer } from 'micro';
import { NextResponse } from 'next/server';
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  
    const sig = request.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      // Sending a response back to the frontend
      // return NextResponse.json({ message: 'hi from backend' });
    } catch (error) {
      return NextResponse.json({
        message: `Webhook Error: ${error.message}`
      }, {
        status: 400,
      });
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        // let customerEmail = paymentIntentSucceeded.receipt_email;
        
        break;

      case 'checkout.session.completed':
        const checkoutSessionCompleted = event.data.object;
        let customerEmail = checkoutSessionCompleted.receipt_email;

        return NextResponse.json({ message: 'customerEmail' });
        // sendThankYouEmail(customerEmail);

        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({
      status: 200,
    });
};