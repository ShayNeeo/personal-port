"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.jpg" 
                alt="Neo's Logo" 
                width={32} 
                height={32}
                className="rounded-full mr-2"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Neo's Portfolio
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition duration-300">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition duration-300">
              Projects
            </Link>
            <Link href="/skills" className="text-gray-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition duration-300">
              Skills
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-black/80">
          <Link 
            href="/" 
            className="block py-2 px-3 text-gray-300 hover:text-white rounded-md transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block py-2 px-3 text-gray-300 hover:text-white rounded-md transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="block py-2 px-3 text-gray-300 hover:text-white rounded-md transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className="block py-2 px-3 text-gray-300 hover:text-white rounded-md transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

