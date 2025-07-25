'use client';
import { useCart } from '../../context/cartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [email, setEmail] = useState('');

  // calculate total
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handlePay = () => {
    if (!email) {
      alert('Please enter your email before placing order.');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    // ✅ Paystack Inline
    if (typeof window !== 'undefined') {
      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // public key from .env.local
        email,
        amount: total * 100, // amount in kobo
        currency: 'NGN',
        callback: function (response) {
          alert('✅ Payment successful! Ref: ' + response.reference);
          // You can redirect to a success page
          window.location.href = `/checkout/success?ref=${response.reference}`;
        },
        onClose: function () {
          alert('❌ Payment window closed.');
        },
      });
      handler.openIframe();
    }
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go back to shop
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((car, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border p-4 rounded-md shadow-sm"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{car.name}</h2>
                {car.price && (
                  <p className="text-green-700 font-medium">
                    ₦{car.price.toLocaleString()}
                  </p>
                )}
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-600 font-bold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="mt-6 p-4 border-t space-y-4">
            <p className="text-xl font-semibold">
              Total: <span className="text-green-700">₦{total.toLocaleString()}</span>
            </p>

            <input
              type="email"
              placeholder="Enter your email for receipt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <button
              onClick={handlePay}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Place Order & Pay with Paystack
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
