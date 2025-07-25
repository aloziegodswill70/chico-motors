export default function Legal() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Legal Information</h1>
      <p className="text-lg leading-relaxed text-center mb-6">
        Dereal Chico Cars is a registered business in Nigeria. Below is our official CAC
        (Corporate Affairs Commission) certificate as proof of our registration and
        authenticity.
      </p>

      <div className="flex justify-center">
        <img
          src="YOUR_CAC_IMAGE_URL"
          alt="CAC Certificate"
          className="max-w-full rounded-lg shadow-md border"
        />
      </div>

      <p className="text-sm text-gray-600 mt-6 text-center">
        ✅ Tested & Trusted | 📍 Located in Aba, Abia State | 💯 Guaranteed Sales
      </p>
    </main>
  );
}
