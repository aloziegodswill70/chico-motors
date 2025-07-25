import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY; // your secret key
    const body = await req.text(); // raw body

    // Verify signature
    const crypto = require('crypto');
    const hash = crypto
      .createHmac('sha512', secret)
      .update(body)
      .digest('hex');

    const paystackSignature = req.headers.get('x-paystack-signature');
    if (hash !== paystackSignature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(body);
    if (event.event === 'charge.success') {
      const data = event.data;

      // ✅ Payment verified: you can save order details to database here later
      console.log('💰 Payment verified for reference:', data.reference);
      console.log('✅ Paid by:', data.customer.email);
      console.log('💵 Amount:', data.amount / 100);

      // TODO: Save to DB (when you set up Prisma/Railway later)
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// ✅ Ensure Next.js does not parse body automatically (required for signature check)
export const config = {
  api: {
    bodyParser: false,
  },
};
