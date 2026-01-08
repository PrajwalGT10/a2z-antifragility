'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Droplets, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  // Data structure for the v2.5 Gateway Tiles
  const pillars = [
    
    {
      title: 'Education',
      subheading: 'Explore Aural and offline-first learning.',
      icon: BookOpen,
      href: '/education',
      color: 'hover:border-forest/50 hover:bg-forest/5',
    },
    {
      title: 'Water Management',
      subheading: 'Equitable Water access & security.',
      icon: Droplets,
      href: '/water',
      color: 'hover:border-gold/50 hover:bg-gold/5',
    },
    {
      title: 'Antifragility',
      subheading: 'The core philosophy building resilient systems.',
      icon: ShieldCheck,
      href: '/antifragility',
      color: 'hover:border-charcoal/50 hover:bg-charcoal/5',
    },
  ];

  return (
    // Changed from h-screen to min-h-screen to allow scrolling on smaller devices if tiles wrap
    <main className="min-h-screen bg-ceramic flex flex-col relative overflow-x-hidden pt-20">
      
      {/* Background Decor (Unchanged) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Main Content Container */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col items-center justify-start py-8 gap-8">
        
        {/* HERO IMAGE SECTION */}
        <div className="w-full flex-grow relative flex items-center justify-center min-h-0 -mb-2 md:mb-0">
          {/* Add 'rounded-3xl' and 'overflow-hidden' to this div */}
          <div className="relative w-full h-full max-h-[35vh] md:max-h-[45vh] lg:max-h-[50vh] aspect-[21/9] rounded-3xl overflow-hidden shadow-sm">
            <Image 
              src="hero-concept-final.png" // Make sure new image is saved here
              alt="A2Z v2.5 Ecosystem supporting three pillars" 
              fill 
              className="object-cover" // Changed to cover to ensure art fills the rounded container
              priority 
            />
          </div>
        </div>

        {/* TAGLINE (Slightly reduced margin) */}
        <div className="text-center shrink-0">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-charcoal mb-3 tracking-tight leading-tight">
            Empowering Communities. <br />
            <span className="text-forest italic font-normal">Building Resilience.</span>
          </h1>
          <div className="w-12 md:w-24 h-1 bg-gold mx-auto rounded-full opacity-80" />
        </div>

        {/* v2.5 GATEWAY TILES SECTION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 mb-8">
          {pillars.map((pillar) => (
            <Link 
              key={pillar.title}
              href={pillar.href}
              className={`group relative p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 ${pillar.color} flex flex-col items-start gap-4`}>
              {/* Icon & Title Row */}
              <div className="flex items-center gap-3 w-full">
                <div className="p-3 bg-ceramic rounded-xl text-charcoal group-hover:scale-110 transition-transform">
                  <pillar.icon strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl text-charcoal">{pillar.title}</h2>
              </div>
              
              {/* Subheading */}
              <p className="text-stone-500 text-sm md:text-base leading-relaxed pr-8">
                {pillar.subheading}
              </p>

              {/* Hover Arrow Indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-stone-400">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer (Unchanged) */}
      <footer className="h-14 border-t border-stone-100 flex items-center justify-center px-6 shrink-0 bg-ceramic/50 relative z-20">
        <p className="text-[10px] text-stone-400 font-mono tracking-widest uppercase">
          © 2026 A2Z Antifragility Foundation
        </p>
      </footer>
    </main>
  );
}