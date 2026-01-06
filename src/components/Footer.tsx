'use client';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [randomQuote, setRandomQuote] = useState<string>('Loading wisdom...');
  const [isMounted, setIsMounted] = useState(false);

  return (
    <footer className="w-full bg-charcoal py-12 mt-0">
        {/* Compliance Text */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-stone-800 pt-10 mt-4">
          <p className="font-mono text-xs text-stone-400">
            © {new Date().getFullYear()} A2Z Antifragility Foundation
          </p>
          <div className="flex flex-wrap justify-center gap-3">
             <span className="font-mono text-xs text-stone-300 px-3 py-1 bg-stone-800 rounded border border-stone-700">Section 8</span>
          </div>
        </div>
    </footer>
  );
}