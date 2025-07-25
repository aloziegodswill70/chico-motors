'use client';
import { useCart } from '../context/cartContext';

export default function CarCard({ car }) {
  const { addToCart } = useCart(); // ✅ get addToCart from context

  return (
    <div className="border rounded-xl shadow p-4 flex flex-col hover:shadow-lg transition-shadow">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-bold">{car.name}</h2>
      {car.description && (
        <p className="text-gray-600 flex-1">{car.description}</p>
      )}
      {car.price && (
        <p className="mt-2 text-green-700 font-semibold">
          ₦{car.price.toLocaleString()}
        </p>
      )}
      <button
        onClick={() => {
          addToCart(car); // ✅ use context
          alert(`${car.name} added to cart!`);
        }}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
