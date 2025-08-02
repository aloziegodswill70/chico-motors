'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/cartContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold">
          De Real Chico Motors
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
          <Link href="/legal" className="hover:text-gray-300 transition-colors">We're Legal</Link>
          <Link href="/cart" className="relative inline-block">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-gray-700 px-4 pb-4">
          <Link
            href="/about"
            className="block py-2 border-b border-gray-600 hover:text-gray-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-2 border-b border-gray-600 hover:text-gray-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="block py-2 border-b border-gray-600 hover:text-gray-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
               <Link
            href="/legal"
            className="block py-2 border-b border-gray-600 hover:text-gray-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            We're Legal
          </Link>
          <Link
            href="/cart"
            className="block py-2 hover:text-gray-300 transition-colors relative"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2 relative">
              <FaShoppingCart className="text-lg" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="ml-auto bg-red-600 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
