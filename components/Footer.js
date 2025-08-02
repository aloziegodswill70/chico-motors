import { FaFacebookF, FaWhatsapp, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} De Real Chico Motors. All rights reserved. Developed by: Dr. Alozie Godswill</p>
        <div className="flex items-center gap-4 text-xl">
          <a href="https://facebook.com/share/1B5n33nbbJ2/" target="_blank" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/2348062180843" target="_blank" className="hover:text-green-400">
            <FaWhatsapp />
          </a>
          <a href="tel:+2348062180843" className="hover:text-yellow-400">
            <FaPhone />
          </a>
             <Link href="/admin" className="hover:text-gray-300 transition-colors">AM</Link>
        </div>
      </div>
    </footer>
  );
}
