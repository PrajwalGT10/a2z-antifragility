'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Phase 2 Sitemap
  const navLinks = [
    { label: 'The Why', href: '/#manifesto' },
    { label: 'Our Focus', href: '/#services' },
    { label: 'The How', href: '/#product' }, // You will need to add id="model" to the "Our Model" section in page.tsx
    { label: 'The Future', href: '/#next' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-stone-200 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            className="w-8 h-8 text-forest group-hover:text-gold transition duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
             {/* Symbol: Abstract A / Pyramid */}
             <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
          </svg>
          <span className="font-serif text-lg font-bold text-charcoal tracking-wide group-hover:text-forest transition">
            A2Z Antifragility
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-stone-600 hover:text-forest transition font-sans text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* CTA Button */}
          <li>
            <Link 
              href="/#contact"
              className="px-5 py-2 bg-charcoal text-forest text-sm font-bold rounded hover:bg-teal-700 transition shadow-sm"
            >
              Partner With Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-charcoal hover:text-forest transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 absolute w-full left-0 top-full shadow-xl">
          <ul className="flex flex-col gap-0">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-stone-100 last:border-none">
                <Link
                  href={link.href}
                  className="text-stone-700 hover:text-forest hover:bg-stone-50 transition font-sans text-sm block px-6 py-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}