// app/components/Footer.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './SocialIcons'; // Import the SocialIcons component

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-16 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Side */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Mirai</h2>
          <Link href="/about" className="text-gray-400 hover:text-amber-400 mb-2">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-amber-400 mb-2">
            Contact Us
          </Link>
          <div className="mb-4">
             <SocialIcons />
          </div>

          <Link href="/terms" className="text-gray-400 hover:text-amber-400">
            Terms of Use & Privacy Policy
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end">
          <Image
            src="/mirai-small-logo.svg" // Use the same small logo
            alt="MIRAI Logo"
            width={100}
            height={50}
            className="mb-2"
          />
          <p className="text-gray-400">©2025 Mirai Group LLC. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;