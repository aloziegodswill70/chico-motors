export default function About() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">About Dereal Chico Cars</h1>

      <p className="text-lg leading-relaxed mb-4 text-center">
        Welcome to <span className="font-semibold">Dereal Chico Cars</span>, your trusted destination
        for fairly used cars in Nigeria. We are proudly located in the vibrant city of{" "}
        <span className="font-semibold">Aba, Abia State</span>.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-center">
        At Dereal Chico Cars, we are <span className="font-semibold">tested and trusted</span>.
        Every car we sell is carefully inspected, sound, and healthy — because your peace of mind is
        our priority.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-center">
        We only buy and sell cars that are not more than one year used, either{" "}
        <span className="font-semibold">UK-used</span> or{" "}
        <span className="font-semibold">Nigerian-used</span>, giving you the confidence that you’re
        getting vehicles still in excellent condition.
      </p>
      <p className="text-lg leading-relaxed mb-8 text-center">
        We stand by every sale with <span className="font-semibold">guarantees</span>, because your
        trust and satisfaction mean everything to us. Whether it’s your first car or your next car,
        Dereal Chico Cars is here to make sure you drive home happy.
      </p>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {/* Replace src with your uploaded image paths or URLs */}
        <img
          src="/images/chico1.jpeg"
          alt="Showroom"
          className="w-full h-60 object-cover rounded shadow"
        />
        <img
          src="/images/chico2.jpeg"
          alt="Car lot"
          className="w-full h-60 object-cover rounded shadow"
        />
        <img
          src="/images/chico3.jpeg"
          alt="Happy customer"
          className="w-full h-60 object-cover rounded shadow"
        />
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <a
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
        >
          🚗 Browse Our Cars
        </a>
      </div>
    </main>
  );
}
