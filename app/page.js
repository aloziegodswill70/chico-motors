'use client';
import { useState, useEffect } from 'react';
import cars from '../data/carsdata';
import CarCard from '../components/carcard';
import { FaPhone } from 'react-icons/fa';

const quotes = [
  { id: 'quote1', type: 'quote', text: 'Drive your dream car today!' },
  { id: 'quote2', type: 'quote', text: 'Luxury within reach – choose Dereal Chico Motors' },
  { id: 'quote3', type: 'quote', text: 'Affordable elegance on four wheels' },
  { id: 'quote4', type: 'quote', text: 'The ride you deserve is one click away' },
  { id: 'quote5', type: 'quote', text: 'Power, Performance, Prestige' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [extraImages, setExtraImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/images');
        if (res.ok) {
          const data = await res.json();
          const uploadedCars = data.map((url, idx) => ({
            id: `uploaded-${idx}`,
            name: 'New Car',
            price: 0,
            image: url,
          }));
          setExtraImages(uploadedCars);
        }
      } catch (error) {
        console.error('Error fetching uploaded images:', error);
      }
    };
    fetchImages();
  }, []);

  const allCars = [...cars, ...extraImages];
  const combined = [...allCars, ...quotes];

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const mixedItems = shuffleArray(combined).filter((item) => {
    if (item.type === 'quote') return true;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'low' && item.price <= 4000000) ||
      (priceFilter === 'mid' && item.price > 4000000 && item.price <= 8000000) ||
      (priceFilter === 'high' && item.price > 8000000);
    return matchesSearch && matchesPrice;
  });

  return (
    <main className="p-4 sm:p-6">
      {/* Responsive Header */}
      <header className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 mb-8 bg-gradient-to-r from-blue-700 via-red-600 to-yellow-500 text-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-center sm:text-left">
          De Real Chico Motors
        </h1>
        <a
          href="tel:+2348062180843"
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
        >
          <FaPhone className="text-lg sm:text-xl" />
          <span className="hidden sm:inline">Call Us Now!</span>
          <span className="sm:hidden">Call</span>
        </a>
      </header>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
        <input
          type="text"
          placeholder="Search car by name..."
          className="border p-2 rounded w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full md:w-1/4"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="low">₦0 – ₦4,000,000</option>
          <option value="mid">₦4,000,001 – ₦8,000,000</option>
          <option value="high">Above ₦8,000,000</option>
        </select>
      </div>

      {/* Mixed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mixedItems.map((item) =>
          item.type === 'quote' ? (
            <div
              key={item.id}
              className="bg-gradient-to-br from-blue-500 to-red-500 text-white text-center p-6 rounded-lg shadow-md"
            >
              <p className="text-lg italic font-semibold">"{item.text}"</p>
            </div>
          ) : (
            <CarCard key={item.id} car={item} />
          )
        )}
      </div>

      {mixedItems.filter((item) => item.type !== 'quote').length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No cars match your search or filter.
        </p>
      )}
    </main>
  );
}
