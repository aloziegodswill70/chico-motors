import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dereal Chico Cars",
  description: "Get faily used cars in the city of Aba, from anywhere in Nigeria. We are legal, trusted and tested.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <script src="https://js.paystack.co/v1/inline.js"></script>
        </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
        <Navbar />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
