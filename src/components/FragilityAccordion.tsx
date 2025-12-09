'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FragilityAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-32 border-t border-b border-charcoal/10">
      {/* The Clickable Header (Title) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // FIX: Added 'gap-6' to force space between text and arrow on mobile
        className="w-full py-10 flex items-center justify-between gap-6 md:gap-12 group text-left focus:outline-none"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-charcoal group-hover:text-forest transition-colors leading-tight">
          Fragility is all around us.
        </h2>
        
        {/* Icon Container: Added 'shrink-0' so it never gets squished */}
        <div className="p-2 rounded-full border border-charcoal/20 group-hover:border-forest group-hover:bg-forest/5 transition-all shrink-0">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-forest" />
          ) : (
            <ChevronDown className="w-6 h-6 text-charcoal/50 group-hover:text-forest" />
          )}
        </div>
      </button>

      {/* The Dropdown Content */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[1200px] opacity-100 mb-12' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center pt-6">
          
          {/* Left: The Text */}
          <div>
            <p className="font-serif text-lg text-charcoal/80 leading-relaxed mb-8">
              Almost all the forces we see around us—driven by Geopolitics, Markets, or Technology—seem to make our institutions more brittle. 
              <br /><br />
              There is an urgent need to understand, measure, and <span className="text-forest decoration-gold/40"><b>Fragile-proof</b></span> our communities.
            </p>
          </div>

          {/* Right: The Solution Box */}
          <div className="relative p-10 border-l-4 border-forest/20 bg-white shadow-sm rounded-r-xl mt-8 md:mt-0">
            <p className="font-mono text-stone text-xs uppercase tracking-[0.2em] mb-6">
              The Framework
            </p>
            <h3 className="font-serif text-2xl text-forest mb-4">
              Nassim Taleb's Antifragile
            </h3>
            <p className="font-serif text-base text-charcoal/70 leading-relaxed mb-6">
              The bulk of this responsibility lies on the shoulders of millions working in CSOs. 
              We partner with them to ensure donors get a better <span className="font-bold text-charcoal decoration-gold/60"> bang for their buck.</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}