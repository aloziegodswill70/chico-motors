'use client';
import { useCart } from '../../context/cartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Checkout() {
  const { cart } = useCart();
  const router = useRouter();
  const [email, setEmail] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    // ✅ Paystack inline integration
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // from .env.local
      email,
      amount: total * 100, // amount in kobo
      currency: 'NGN',
      callback: function (response) {
        // ✅ Payment was successful
        alert('Payment successful! Reference: ' + response.reference);
        router.push('/checkout/success?ref=' + response.reference);
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });

    handler.openIframe();
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4 space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="border p-2 rounded">
                <strong>{item.name}</strong> – ₦{item.price.toLocaleString()}
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold mb-2">
            Total: ₦{total.toLocaleString()}
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />

          <button
            onClick={handlePayment}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Place Order & Pay
          </button>
        </>
      )}
    </main>
  );
}
