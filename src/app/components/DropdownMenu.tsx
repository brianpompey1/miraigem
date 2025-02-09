"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
// import { usePathname } from 'next/navigation'; // No longer needed.

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const pathname = usePathname(); // No longer needed

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="text-white hover:text-amber-400 inline-flex justify-center items-center w-full"
          onClick={toggleDropdown}
        >
          Our Services
          <ChevronDownIcon className="h-5 w-5 ml-1" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              href="/web-design"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Web Design & Development
            </Link>
            <Link
              href="/seo"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Search Engine Optimization
            </Link>
            <Link
              href="/email-marketing"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Email and Social Media Marketing
            </Link>
            <Link
              href="/branding"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Branding and Paid Media
            </Link>
            <Link
              href="/it-consulting"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              IT Consulting
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;