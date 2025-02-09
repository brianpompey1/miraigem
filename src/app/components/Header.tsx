// app/components/Header.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import DropdownMenu from '../components/DropdownMenu';

const Header = () => {

  return (
    <header className="bg-black p-4 flex items-center justify-between relative">
      <Link href="/">
        <Image
          src="/mirai-small-logo.svg"
          alt="MIRAI Logo"
          width={100}
          height={50}
          className="cursor-pointer z-10"
        />
      </Link>

      {/* Absolute Centering for Nav - Corrected Container */}
      <div className="flex-grow flex justify-center">
        <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/about" className="text-white hover:text-amber-400">
            About Us
          </Link>
          <DropdownMenu />
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
      </div>

      <button className="md:hidden text-white z-10">
        ☰
      </button>
    </header>
  );
};

export default Header;