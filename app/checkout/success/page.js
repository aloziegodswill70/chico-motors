export default function Success() {
  return (
    <main className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">✅ Payment Successful!</h1>
      <p className="text-lg mb-6">
        Thank you for shopping with Dereal Chico Cars. Your payment has been received.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </a>
    </main>
  );
}
