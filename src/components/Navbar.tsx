'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Education', href: '/education' },
    { name: 'Water', href: '/water' },
    { name: 'Antifragility', href: '/antifragility' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-ceramic/80 backdrop-blur-md border-b border-stone-100 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        
        {/* LOGO: Always points home */}
        <Link href="/" className="font-serif text-2xl text-charcoal tracking-tight flex items-center gap-2">
          <span className="font-bold">A2Z</span>
          <span className="text-stone-400 font-light">Antifragility</span>
        </Link>

        {/* DESKTOP NAV: No more redundant links */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/antifragility#contact" 
            className="px-8 py-2.5 bg-charcoal text-charcoal text-sm font-bold rounded-full hover:bg-forest transition-all shadow-lg hover:shadow-forest/20 active:scale-95"
          >
            Partner With Us
          </Link>
        </div>

        {/* MOBILE TOGGLE: Critical for navigation on small screens */}
        <button className="md:hidden p-2 text-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU: Full navigation utility remains here */}
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
            className="w-full text-center py-4 bg-charcoal text-charcoal font-bold rounded-lg"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  );
}