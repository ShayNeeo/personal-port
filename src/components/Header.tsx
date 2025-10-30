"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
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
              <span className="site-logo">
                Neo&apos;s Portfolio
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/skills" className="nav-link">
              Skills
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle"
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
        <div className="mobile-menu">
          <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/projects" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/skills" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

