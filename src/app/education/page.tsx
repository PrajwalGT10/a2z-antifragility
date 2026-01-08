'use client';

import Image from 'next/image';
import { 
  WifiOff, Volume2, MemoryStick, Map, Rocket, 
  Infinity, BarChart3, Landmark, Layers 
} from 'lucide-react';
import ContactForm from '../../components/ContactForm'; // Import the form

export default function EducationPage() {
  return (
    <main className="bg-charcoal text-stone-500">
      {/* --- SECTION 1: PRODUCT SPOTLIGHT (AURAL) --- */}
      <section id="product" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-stone-500 font-mono text-xs uppercase tracking-widest mb-4 block">Our Innovation Lab</span>
            <h1 className="font-serif text-4xl text-stone-500 md:text-6xl mb-6 leading-tight">
              The Teacher That <br/>
              <span className="text-stone-500 italic">Never Sleeps.</span>
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Meet <strong>Aural</strong>. The first AI-driven, screen-free audio tutor designed for last-mile learners. 
              <br /><br />
              We turn a serious challenge — <b>the lack of trained teachers</b> — into a scalable advantage.  
              Aural shifts the educator's role from the <em>"Sage on the Stage"</em> to a <em>"Guide for the Ride", </em> 
              proving that high-tech doesn't have to mean high-cost.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2 bg-white/10 rounded-lg"><WifiOff className="w-6 h-6 text-stone-500" /></div>
                <div>
                  <h4 className="font-bold text-stone-300">Offline First</h4>
                  <p className="text-sm text-stone-500">No internet required. Works in the deepest rural pockets.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2 bg-white/10 rounded-lg"><Volume2 className="w-6 h-6 text-stone-500" /></div>
                <div>
                  <h4 className="font-bold text-stone-300">Voice-First Interface</h4>
                  <p className="text-sm text-stone-500">Learn by conversing. Natural, intuitive, and accessible for all literacy levels.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2 bg-white/10 rounded-lg"><MemoryStick className="w-6 h-6 text-stone-500" /></div>
                <div>
                  <h4 className="font-bold text-stone-300">Built-in Storage</h4>
                  <p className="text-sm text-stone-500">Endless content to learn from, pre-loaded for offline accessibility.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative z-10 aspect-square rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
               <Image 
                 src="aural-device.png" 
                 alt="Aural AI Tutor Prototype"
                 fill
                 className="object-cover group-hover:scale-105 transition duration-700"
                 priority
               />
               <div className="absolute z-20 top-6 right-6 px-4 py-1 bg-black/60 text-stone-300 font-mono text-xs border border-white/10 rounded-full backdrop-blur-md">
                 Prototype v1.0
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          SECTION 2: THE FUTURE (AURAL ROADMAP)
          Restored to exact v2.3 visual specifications.
      ---------------------------------------------------------- */}
      <section id="next" className="py-24 bg-white text-charcoal border-t border-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">What&apos;s Next</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">From Prototype to Policy.</h2>
          </div>

          <div className="relative">
            {/* The Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-1 bg-stone-100 rounded-full z-0"></div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              
              {/* --- STEP 1: PILOT --- */}
              <div className="flex flex-col items-center group">
                {/* Marker Icon */}
                <div className="w-24 h-24 bg-ceramic border-4 border-forest rounded-full flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover:scale-110">
                  <Map className="w-10 h-10 text-forest" />
                </div>
                
                {/* Step Marker Label */}
                <div className="mt-4 mb-6">
                  <span className="px-4 py-1 bg-forest/10 text-forest text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-forest/20">
                    Step 1
                  </span>
                </div>
                
                {/* Card */}
                <div className="bg-ceramic p-8 rounded-2xl border border-forest/20 shadow-sm flex-grow w-full hover:shadow-md transition-all">
                  <div className="mb-4 text-center">
                    <h3 className="font-serif text-2xl text-charcoal">Pilot Phase</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-stone-600 font-sans border-t border-forest/10 pt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-forest font-bold">✓</span> 
                      <span><strong>5k–10k devices</strong> across multiple states.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-forest font-bold">✓</span> 
                      <span>Collect interaction data and listening outcomes.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --- STEP 2: SCALE --- */}
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-ceramic border-4 border-gold rounded-full flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover:scale-110">
                  <Rocket className="w-10 h-10 text-gold" />
                </div>

                <div className="mt-4 mb-6">
                  <span className="px-4 py-1 bg-gold/10 text-gold text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-gold/20">
                    Step 2
                  </span>
                </div>
                
                <div className="bg-ceramic p-8 rounded-2xl border border-gold/20 shadow-sm flex-grow w-full hover:shadow-md transition-all">
                  <div className="mb-4 text-center">
                    <h3 className="font-serif text-2xl text-charcoal">Scale Phase</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-stone-600 font-sans border-t border-gold/10 pt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-gold font-bold">✓</span> 
                      <span><strong>50k–1M devices</strong> with Educational CSOs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Landmark className="w-5 h-5 text-gold shrink-0" />
                      <span>Outcome-linked contracts with state departments.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --- STEP 3: INSTITUTIONAL --- */}
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-ceramic border-4 border-charcoal rounded-full flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover:scale-110">
                  <Infinity className="w-10 h-10 text-charcoal" />
                </div>

                <div className="mt-4 mb-6">
                  <span className="px-4 py-1 bg-charcoal/10 text-charcoal text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-charcoal/20">
                    Step 3
                  </span>
                </div>
                
                <div className="bg-ceramic p-8 rounded-2xl border border-charcoal/20 shadow-sm flex-grow w-full hover:shadow-md transition-all">
                  <div className="mb-4 text-center">
                    <h3 className="font-serif text-2xl text-charcoal">Institutional</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-stone-600 font-sans border-t border-charcoal/10 pt-4">
                    <li className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-charcoal shrink-0" />
                      <span>Embed in <strong>DIKSHA / NDEAR</strong> infrastructure.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-charcoal font-bold">✓</span> 
                      <span>Open-source weights for global adaptation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3: PILOT PARTNERSHIP INTAKE */}
      <section id="contact" className="py-24 px-6 bg-ceramic text-charcoal">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">Collaboration</span>
            <h2 className="font-serif text-4xl text-charcoal mb-6">Partner for the Pilot.</h2>
            <p className="text-stone">We are looking for partners to help us achieve our goal of "Teach a Billion, Reach a Billion".</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}