'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    /* h-screen and overflow-hidden ensures the entire experience, 
       including the footer, fits in one view on desktop.
    */
    <main className="h-screen bg-ceramic flex flex-col relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Main Content Container 
          - pt-20 clears the 80px Navbar.
          - pb-16 (desktop) / pb-24 (mobile) leaves space for the Footer.
      */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 md:pt-24 flex-grow flex flex-col items-center justify-center md:justify-around min-h-0">
        
        {/* CONCEPT IMAGE 
            - max-h-[35vh] (mobile) vs max-h-[50vh] (desktop)
            - We use justify-center on mobile with a negative margin to pull the tagline up.
        */}
        <div className="w-full flex-grow relative flex items-center justify-center min-h-0 md:mb-0 -mb-10">
          <div className="relative w-full h-full max-h-[35vh] md:max-h-[50vh] aspect-[21/9]">
            <Image
              src="hero-concept.png"
              alt="A2Z Antifragility Ecosystem"
              fill
              className="object-contain" 
              priority
            />
          </div>
        </div>

        {/* TAGLINE & NAVIGATION 
            - Grouped tightly together.
        */}
        <div className="w-full flex flex-col items-center shrink-0">
          <div className="text-center mb-4 md:mb-8">
            <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl text-charcoal mb-16 md:mb-4 tracking-tight leading-tight">
              Empowering Communities. <br />
              <span className="text-forest italic font-normal">Building Resilience.</span>
            </h1>
            <div className="w-12 md:w-24 h-1 bg-gold mx-auto rounded-full opacity-80" />
          </div>

          {/* CTAs: Now explicitly visible and styled for high contrast */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full md:w-auto px-10 md:px-0">
            <Link 
              href="/antifragility" 
              className="px-6 py-3 md:px-8 md:py-4 bg-charcoal border-2 border-stone-200 text-charcoal rounded-lg font-bold hover:bg-forest transition-all shadow-lg text-center text-sm md:text-base">
              Our Philosophy
            </Link>
            <Link 
              href="/education" 
              className="px-6 py-3 md:px-8 md:py-4 bg-charcoal border-2 border-stone-200 text-charcoal rounded-lg font-bold hover:border-gold transition-all text-center text-sm md:text-base">
              Explore Aural
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER: Integrated directly into the h-screen view.
          Ensure your layout.tsx doesn't add another footer if you want it purely here.
      */}
      <footer className="relative z-20 w-full py-4 bg-ceramic border-t border-stone-100 shrink-0">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] md:text-xs text-Charcoal font-mono tracking-widest uppercase">
          <p>© 2026 A2Z Antifragility Foundation</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>

    </main>
  );
}