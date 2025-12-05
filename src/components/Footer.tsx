'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [randomQuote, setRandomQuote] = useState<string>('Loading Antifragile wisdom...');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const quotes = [
      'Solutions need to be simpler than the problems.',
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <footer className="w-full bg-charcoal border-t border-stone-800 py-16 mt-0">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heuristic Generator - Centered Version */}
        <div className={`transition-opacity duration-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
           <div className="mb-12 p-8 bg-stone-900 rounded-lg border-t-4 border-gold max-w-3xl mx-auto text-center shadow-lg">
              <p className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-1">
                Heuristic of the Moment
              </p>
              <p className="font-serif text-2xl md:text-3xl text-stone-100 italic leading-relaxed">
                &ldquo;{randomQuote}&rdquo;
              </p>
           </div>
        </div>

        {/* Compliance Text */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-stone-800 pt-10 mt-4">
          <p className="font-mono text-xs text-stone-400">
            © {new Date().getFullYear()} A2Z Antifragility Foundation
          </p>
          <div className="flex flex-wrap justify-center gap-3">
             <span className="font-mono text-xs text-stone-300 px-3 py-1 bg-stone-800 rounded border border-stone-700">Section 8</span>
          </div>
        </div>
      </div>
    </footer>
  );
}