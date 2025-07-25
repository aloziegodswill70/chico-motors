export default function FAQ() {
  const faqs = [
    { q: "How do I buy a car?", a: "Browse our cars, add to cart, and proceed to checkout." },
    { q: "Do you offer warranty?", a: "Yes, we offer warranty on selected cars." },
    { q: "Can I return a car?", a: "Please contact our support team for returns or complaints." },
  ];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqs.map((item, idx) => (
        <div key={idx} className="mb-4">
          <h2 className="text-xl font-semibold">{item.q}</h2>
          <p className="text-gray-700">{item.a}</p>
        </div>
      ))}
    </main>
  );
}
