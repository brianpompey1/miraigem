// app/components/Header.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import DropdownMenu from './DropdownMenu';
import { useState } from 'react';
import MobileDropdownMenu from './MobileDropdownMenu';
import { usePathname } from 'next/navigation'; // Import usePathname

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomePage = pathname === '/'; // Check if it's the homepage

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
        {/* Conditionally render the DropdownMenu */}
        {!isHomePage && <DropdownMenu />}
        {/* <Link href="/work-with-us" className="text-white hover:text-amber-400">
          Work With Us
        </Link> */}
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
           {/* Our Services Dropdown for Mobile */}
            <div className="relative inline-block text-left group">
                <Link href="/our-services" className="text-white hover:text-amber-400 inline-flex justify-center items-center w-full text-xl">
                    Our Services
                </Link>
                <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 focus:outline-none ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    <div className="py-1">
                        <Link href="/web-design" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" >Web Design & Development</Link>
                        <Link href="/seo" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" >Search Engine Optimization</Link>
                        <Link href="/email-marketing" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Email and Social Media Marketing</Link>
                        <Link href="/branding" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" >Branding and Paid Media</Link>
                        <Link href="/it-consulting" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">IT Consulting</Link>
                    </div>
                </div>
          </div>
          {/* <Link href="/work-with-us" className="text-white hover:text-amber-400 text-xl" onClick={toggleMobileMenu}>
            Work With Us
          </Link> */}
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