'use client';
import { useState, useEffect } from 'react';
import cars from '../data/carsdata';
import CarCard from '../components/carcard';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [extraImages, setExtraImages] = useState([]);

  // fetch uploaded images from API on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/images');
        if (res.ok) {
          const data = await res.json();
          // map each image url to a dummy car object
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

  // merge static cars with uploaded images
  const allCars = [...cars, ...extraImages];

  // filter combined list
  const filteredCars = allCars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'low' && car.price <= 4000000) ||
      (priceFilter === 'mid' && car.price > 4000000 && car.price <= 8000000) ||
      (priceFilter === 'high' && car.price > 8000000);

    return matchesSearch && matchesPrice;
  });

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Dereal Chico Cars</h1>

      {/* Search & Filter Controls */}
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

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {filteredCars.length === 0 && (
        <p className="text-center mt-6 text-gray-500">No cars match your search or filter.</p>
      )}
    </main>
  );
}
