// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_TEST);

export async function POST(req, res) {
  const url = '/create-checkout-session';
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

  res.redirect(303, session.url);
}

app.listen(4242, () => console.log('Running on port 4242'));
