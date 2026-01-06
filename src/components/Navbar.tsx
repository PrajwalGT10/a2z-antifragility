'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Education', href: '/education' },
    { label: 'Water Management', href: '/water-management' },
    { label: 'What is Antifragility?', href: '/antifragility' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-stone-200 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Always leads Home */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-8 h-8 text-forest group-hover:text-gold transition duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
             <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
          </svg>
          <span className="font-serif text-lg font-bold text-charcoal tracking-wide">A2Z Antifragility</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-stone-600 hover:text-forest transition font-sans text-sm font-medium tracking-wide">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" className="px-5 py-2 bg-charcoal text-white text-sm font-bold rounded hover:bg-forest transition shadow-sm">
              Partner With Us
            </Link>
          </li>
        </ul>
        
        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-charcoal">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 absolute w-full left-0 top-full shadow-xl">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-stone-100 last:border-none">
                <Link href={link.href} className="text-stone-700 hover:text-forest block px-6 py-4" onClick={() => setIsOpen(false)}>
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