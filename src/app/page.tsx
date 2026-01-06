'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-ceramic flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* --- BACKGROUND DECOR / OPTIONAL --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* CONCEPT IMAGE */}
        <div className="w-full relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-stone-200 group bg-white">
          <Image
            src="hero-concept.png"
            alt="A2Z Antifragility - Education and Water Management Ecosystem"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          {/* Subtle Overlay to make it feel integrated */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
        </div>
        
        {/* --- HERO CONTENT --- */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* TAGLINE */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-.5 tracking-tight">
            Empowering Communities. <br />
            <span className="text-forest italic font-normal">Building Resilience.</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-80" />
        </div>

        {/* QUICK NAVIGATION / CALL TO ACTION */}
        <div className="mt-1 flex flex-wrap justify-center gap-6">
          <Link href="/antifragility" className="px-8 py-4 bg-white border-stone-200 text-charcoal rounded-lg font-bold hover:bg-forest transition-all shadow-lg hover:shadow-forest/20">
            Our Philosophy
          </Link>
          <Link href="/education" className="px-8 py-4 bg-white border-2 border-stone-200 text-charcoal rounded-lg font-bold hover:border-gold transition-all">
            Explore Aural
          </Link>
        </div>
      </section>
    </main>
  );
}