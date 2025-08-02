'use client';
import { FaFacebookF, FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 text-3xl mb-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/2348062180843"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+2348062180843"
          className="hover:text-yellow-500 transition-colors"
          aria-label="Phone"
        >
          <FaPhone />
        </a>
      </div>

      {/* Contact Details */}
      <div className="text-center space-y-4">
        <p className="text-lg">
          📧 Email:{' '}
          <a
            href="mailto:chico@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            derealchicoventures@gmail.com
          </a>
        </p>
        <p className="text-base leading-relaxed">
          We are always available to help you choose the perfect car.
          <br />
          Feel free to reach out to us anytime!
        </p>
      </div>
    </main>
  );
}
