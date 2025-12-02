'use client';

import { useEffect, useState } from 'react';
export default function Footer() {
  const [randomQuote, setRandomQuote] = useState<string>('');
  useEffect(() => {
    const quotes = [
      'Fail cheap, fail quick, fail often.',
      'Avoidance of boredom is the only worthy mode of action.',
      'Wind extinguishes a candle and energizes fire.',
      'Solutions need to be simpler than the problems.',
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);
  return (
    <footer className="bg-navy/50 border-t border-teal/20 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heuristic Generator */}
        {randomQuote && (
          <div className="mb-8 p-4 border-l-2 border-teal">
            <p className="font-mono text-sm text-teal italic">&ldquo;{randomQuote}&rdquo;</p>
          </div>
        )}
        {/* Compliance Text */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-teal/10 pt-6">
          <p className="font-mono text-xs text-slate-light">
            © 2025 A2Z Antifragility Foundation
          </p>
          <p className="font-mono text-xs text-slate-light">
            Section 8 | 12A | 80G | CSR-1 Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}