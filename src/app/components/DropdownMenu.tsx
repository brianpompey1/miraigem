// app/components/Header.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
// import DropdownMenu from './DropdownMenu'; // REMOVE THIS
import { useState } from 'react';
import MobileDropdownMenu from './MobileDropdownMenu';

const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black p-4 flex items-center justify-between relative z-30">
      <Link href="/">
        <Image
          src="/mirai-small-logo.svg"
          alt="MIRAI Logo"
          width={100}
          height={50}
          className="cursor-pointer z-40"
        />
      </Link>

      {/* Desktop Navigation (hidden on mobile) */}
      <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <Link href="/about" className="text-white hover:text-amber-400">
          About Us
        </Link>
        {/* <DropdownMenu /> REMOVE THIS */}
        <Link href="/work-with-us" className="text-white hover:text-amber-400">
          Work With Us
        </Link>
        <Link href="/blog" className="text-white hover:text-amber-400">
          Blog
        </Link>
        <Link href="/contact" className="text-white hover:text-amber-400">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-40"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {/* Mobile Menu (hidden on desktop) */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-black z-20 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={toggleMobileMenu}
        >
          &times;
        </button>
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          <Link href="/about" className="text-white hover:text-amber-400 text-xl" onClick={toggleMobileMenu}>
            About Us
          </Link>
            <Link href="/our-services" className="text-white hover:text-amber-400 text-xl" onClick={toggleMobileMenu}>
                Our Services
            </Link>
          <Link href="/work-with-us" className="text-white hover:text-amber-400 text-xl" onClick={toggleMobileMenu}>
            Work With Us
          </Link>
          <Link href="/blog" className="text-white hover:text-amber-400 text-xl" onClick={toggleMobileMenu}>
            Blog
          </Link>
          <Link href="/contact" className="text-white hover:text-amber-400 text-xl" onClick={toggleMobileMenu}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;