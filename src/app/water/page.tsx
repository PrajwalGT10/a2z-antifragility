'use client';

import Link from 'next/link';
import { Droplets, ArrowLeft } from 'lucide-react';

export default function WaterPage() {
  return (
    /* h-screen locks the view to prevent scrolling on this placeholder */
    /* pt-20 ensures we clear the 80px (h-20) fixed Navbar */
    <main className="h-screen bg-ceramic flex flex-col items-center justify-center relative overflow-hidden text-center px-6 pt-20">
      
      {/* Background Decor matches the main Hub */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <section className="relative z-10 max-w-2xl">
        {/* Visual Icon */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-sm border border-stone-100 flex items-center justify-center animate-pulse">
            <Droplets className="w-8 h-8 md:w-10 md:h-10 text-gold" />
          </div>
        </div>

        {/* Content linking back to the "Water Spine" in the hero image */}
        <span className="text-gold font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">
          Infrastructure Pillar 02
        </span>
        <h1 className="font-serif text-3xl md:text-6xl text-charcoal mb-4 md:mb-6 tracking-tight">
          The Water <span className="text-forest italic">Spine.</span>
        </h1>
        <p className="text-stone-500 text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-lg mx-auto">
          We are currently engineering the sensor-linked water ecosystems for our 2026 water resilience pilots. Stay tuned for more.
        </p>

        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-charcoal font-bold hover:text-forest transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>
      </section>

      {/* Integrated Footer matches the Landing Page footer position */}
      <div className="absolute bottom-8 w-full text-center px-6">
        <p className="text-[10px] text-stone-400 font-mono tracking-widest uppercase">
          A2Z Antifragility Foundation • Deployment Scheduled Q2 2026
        </p>
      </div>
    </main>
  );
}