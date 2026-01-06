'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Antifragility', href: '/antifragility' },
    { name: 'Education', href: '/education' },
    { name: 'Water', href: '/water' },
  ];

  return (
    /* h-20 (80px) is our fixed reference height */
    <nav className="fixed top-0 w-full z-50 bg-ceramic/80 backdrop-blur-md border-b border-stone-100 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-serif text-2xl text-charcoal tracking-tight flex items-center gap-2">
          <span className="font-bold">A2Z</span>
          <span className="text-stone-400 font-light">Antifragility</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-stone-600 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/antifragility#contact" 
            className="px-5 py-2 bg-charcoal text-black text-sm font-bold rounded hover:bg-forest transition shadow-sm">
            Partner With Us
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden p-2 text-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-stone-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-serif text-charcoal">
              {link.name}
            </Link>
          ))}
          <Link 
            href="/antifragility#contact" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-4 bg-charcoal text-black font-bold rounded-lg">
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  );
}