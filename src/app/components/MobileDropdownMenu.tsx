// app/components/MobileDropdownMenu.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const MobileDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-left">
      <div>
        <button
          type="button"
          className="text-white hover:text-amber-400 inline-flex justify-center items-center w-full text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          Our Services
          <ChevronDownIcon className="h-5 w-5 ml-1" />
        </button>
      </div>

      <div  // Corrected class application
        className={`w-full rounded-md bg-black focus:outline-none ${
          isOpen ? '' : 'hidden'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <Link href="/web-design" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Web Design & Development</Link>
          <Link href="/seo" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Search Engine Optimization</Link>
          <Link href="/email-marketing" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Email and Social Media Marketing</Link>
          <Link href="/branding" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Branding and Paid Media</Link>
          <Link href="/it-consulting" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">IT Consulting</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdownMenu;