'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Activity, Layers, Microscope, Rocket, Infinity, WifiOff, Volume2, MousePointerClick, MemoryStick, Map, BarChart3, Landmark } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import FragilityAccordion from '../components/FragilityAccordion';

  export default function HomePage() {
  const [index, setIndex] = useState(0);

  // The 3 messages to loop through
  const messages = [
    {
      text: "Wind extinguishes a candle...",
      highlight: "candle",
      color: "text-slate-300" 
    },
    {
      text: "...and energizes Fire.",
      highlight: "Fire.",
      color: "text-teal" 
    },
    {
      text: "Be the Fire and wish for the Wind",
      highlight: "Wind",
      color: "text-white"
    }
  ];

  // Cycle through messages every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ---------------------------------------------------------
          SECTION 1: HERO (Looping Narrative)
         ---------------------------------------------------------- */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black py-20">
        
        {/* BACKGROUND AMBIANCE */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-teal/20 blur-[100px] rounded-full opacity-30" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-blue-500/10 blur-[100px] rounded-full opacity-30 mix-blend-screen" />
        </div>

        {/* VIDEO CONTAINER */}
        <div className="relative z-20 w-full max-w-6xl aspect-video shadow-2xl rounded-lg overflow-hidden border border-white/5 mx-0 md:mx-0 bg-black">
          
          
          
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />

          {/* LOOPING TEXT OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl leading-tight max-w-4xl"
              >
                {messages[index].text.split(' ').map((word, i) => {
                  // Clean the word of punctuation for matching
                  const cleanWord = word.replace(/[^a-zA-Z]/g, '');
                  const isHighlight = messages[index].highlight.includes(cleanWord);
                  return (
                    <span key={i} className={isHighlight ? `italic ${messages[index].color}` : ""}>
                      {word}{' '}
                    </span>
                  );
                })}
              </motion.h1>
            </AnimatePresence>
          </div>

        </div>

        {/* Author Attribution */}
            <p className="font-mono text-lg text-slate-500 uppercase tracking-[0.25em] mt-8 opacity-60">
              - Nassim Taleb
            </p>

        {/* BOTTOM BUTTONS (Outside Video) */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 text-center mt-10">
             <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full md:w-auto">
                <Link 
                  href="#contact"
                  className="w-full md:w-auto text-center px-8 py-3 md:px-10 md:py-4 bg-white text-black font-sans font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] text-sm md:text-base"
                >
                  Start Your Journey
                </Link>
                
                <Link 
                  href="#manifesto"
                  className="w-full md:w-auto text-center px-8 py-3 md:px-10 md:py-4 backdrop-blur-md bg-white/5 border border-white/20 text-white font-sans font-medium rounded-full hover:bg-white/10 transition-all text-sm md:text-base"
                >
                  Read Manifesto
                </Link>
            </div>
            
            
        </div>

      </section>

      {/* ---------------------------------------------------------
          SECTION 2: THE PHILOSOPHY
      ---------------------------------------------------------- */}
      <section id="manifesto" className="py-32 px-6 max-w-4xl mx-auto text-center scroll-mt-20">
        <h3 className="font-serif text-3xl md:text-5xl text-charcoal mb-10 leading-relaxed">
          "I like to dream of things that never were and say - <span className="italic text-forest decoration-gold/40">Why not ?"</span>
        </h3>
        <h3 className="font-serif text-3xl md:text-5xl text-charcoal mb-10 leading-relaxed">
          - GB Shaw
        </h3>
        <p className="font-mono text-stone text-xs uppercase tracking-[0.2em] border-t border-stone-200 pt-8 inline-block">
          Antifragility Foundation - Friends of Good Ideas.
        </p>
        <FragilityAccordion />
      </section>
      

      {/* ---------------------------------------------------------
          SECTION 3: THE GAP ANALYSIS
      ---------------------------------------------------------- */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="top-32">
            <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">The Bottleneck</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Great work happens in silos.</h2>
            <p className="text-stone text-lg leading-relaxed mb-8">
              Most NGOs are doing the hard work on the ground. But even the most impactful work struggles with limited visibility, technology gaps, and scaling bottlenecks.
              <br/><br/>
              We build the <strong>Digital Spine</strong> that lets them stand taller.
            </p>
          </div>
          
          <div className="space-y-8">
             <div className="p-8 border-l-4 border-forest bg-ceramic shadow-sm hover:shadow-md transition duration-300">
               <Layers className="w-8 h-8 text-forest mb-4" />
               <h4 className="font-bold text-xl text-charcoal mb-2">Visibility</h4>
               <p className="text-stone">Amplifying your surface area to attract global support and funding.</p>
             </div>
             <div className="p-8 border-l-4 border-gold bg-ceramic shadow-sm hover:shadow-md transition duration-300">
               <Rocket className="w-8 h-8 text-gold mb-4" />
               <h4 className="font-bold text-xl text-charcoal mb-2">Technology</h4>
               <p className="text-stone">Bridging the divide between manual field operations and AI-driven efficiency.</p>
             </div>
             <div className="p-8 border-l-4 border-stone bg-ceramic shadow-sm hover:shadow-md transition duration-300">
               <Infinity className="w-8 h-8 text-charcoal mb-4" />
               <h4 className="font-bold text-xl text-charcoal mb-2">Scale</h4>
               <p className="text-stone">Transforming proven pilot programs into systems that can serve millions.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          SECTION 4: OUR SERVICES
      ---------------------------------------------------------- */}
      <section id="services" className="py-24 bg-ceramic relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">What We Do</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Innovation as a Capability.</h2>
            <p className="font-sans text-stone text-lg leading-relaxed">
              We don&apos;t just execute projects. We build the <strong>technological muscle</strong> for CSOs to learn, adapt, and scale continuously.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* 1. Capacity Building */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-forest shadow-sm hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-forest/10 rounded-lg flex items-center justify-center mb-6"><Zap className="w-8 h-8 text-forest" /></div>
              <h4 className="font-serif text-2xl text-charcoal mb-4">Capacity Building</h4>
              <p className="text-stone text-sm leading-relaxed mb-6">We train CSO teams to embed innovation thinking into daily operations.</p>
              <ul className="text-sm text-stone-600 space-y-3 font-mono border-t border-slate-100 pt-6">
                <li>Design Thinking Workshops</li><li>M&E Frameworks</li><li>Culture of Experimentation</li>
              </ul>
            </div>
            {/* 2. Function Setup */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-gold shadow-sm hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6"><Layers className="w-8 h-8 text-gold" /></div>
              <h4 className="font-serif text-2xl text-charcoal mb-4">Function Setup</h4>
              <p className="text-stone text-sm leading-relaxed mb-6">For organizations ready to institutionalize capabilities, we design formal departments.</p>
              <ul className="text-sm text-stone-600 space-y-3 font-mono border-t border-slate-100 pt-6">
                <li>Defining Roles & Processes</li><li>Tech Infrastructure</li><li>Governance Structures</li>
              </ul>
            </div>
            {/* 3. Managed Services */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-charcoal shadow-sm hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-charcoal/10 rounded-lg flex items-center justify-center mb-6"><Activity className="w-8 h-8 text-charcoal" /></div>
              <h4 className="font-serif text-2xl text-charcoal mb-4">Managed Services</h4>
              <p className="text-stone text-sm leading-relaxed mb-6">Lack internal resources? We provide outsourced Innovation & Learning services.</p>
              <ul className="text-sm text-stone-600 space-y-3 font-mono border-t border-slate-100 pt-6">
                <li>Impact Evaluations</li><li>Innovation Sprints</li><li>Knowledge Management</li><li>Program Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          SECTION 5: PRODUCT SPOTLIGHT (AURAL) - NEW!
      ---------------------------------------------------------- */}
      <section id="product" className="py-24 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/aural-device.png" 
                alt="Aural AI Tutor Device" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10 transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content Side */}
            <div>
              <span className="text-stone-500 font-mono text-xs uppercase tracking-widest mb-4 block">Our Innovation Lab</span>
              <h2 className="font-serif text-stone-500 text-4xl md:text-5xl mb-6 leading-tight">
                The Teacher That Never Sleeps. <br/>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                Meet <strong>Aural</strong>. The first AI-driven, screen-free audio tutor designed for last-mile learners. 
              <br /><br />
              We turn a serious challenge — <b>the lack of trained teachers </b> — into a scalable advantage.  
              Aural shifts the educator's role from the <em>"Sage on the Stage"</em> to a <em>"Guide for the Ride,"</em> 
              proving that high-tech doesn't have to mean high-cost.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><WifiOff className="w-6 h-6 text-stone-500" /></div>
                  <div>
                    <h4 className="font-bold text-stone-500">Offline First</h4>
                    <p className="text-sm text-stone-500">No internet required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><Volume2 className="w-6 h-6 text-stone-500" /></div>
                  <div>
                    <h4 className="font-bold text-stone-500">Voice-First Interface</h4>
                    <p className="text-sm text-stone-500">Learn by conversing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><MemoryStick className="w-6 h-6 text-stone-500" /></div>
                  <div>
                    <h4 className="font-bold text-stone-500">Built in Storage</h4>
                    <p className="text-sm text-stone-500">Endless content to learn from</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------
          SECTION 6: AURAL ROADMAP (Fixed Layout & Visibility)
      ---------------------------------------------------------- */}
      <section id="next" className="py-24 bg-white border-t border-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">What&apos;s Next</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">From Prototype to Policy.</h2>
          </div>

          <div className="relative">
            {/* The Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-1 bg-stone-100 rounded-full z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              
              {/* Phase 1: Pilot */}
              <div className="flex flex-col items-center group">
                {/* Marker Icon */}
                <div className="w-24 h-24 bg-ceramic border-4 border-forest rounded-full flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover:scale-110">
                  <Map className="w-10 h-10 text-forest" />
                </div>
                
                {/* Step Label (Moved Below & Colored for Visibility) */}
                <div className="mt-4 mb-6">
                  <span className="px-4 py-1 bg-forest/10 text-forest text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-forest/20">
                    Step 1
                  </span>
                </div>
                
                {/* Content Card */}
                <div className="bg-ceramic p-8 rounded-2xl border border-forest/20 shadow-sm flex-grow w-full hover:shadow-md transition-all">
                  <div className="mb-4 text-center">
                    <span className="inline-block px-3 py-1 bg-forest text-white text-[10px] font-mono font-bold rounded-full mb-2">Months 1–24</span>
                    <h3 className="font-serif text-2xl text-charcoal">Pilot Phase</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-stone-600 font-sans border-t border-forest/10 pt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-forest font-bold">✓</span> 
                      <span><strong>5k–10k devices</strong> across multiple states.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-forest font-bold">✓</span> 
                      <span>Collect interaction data, teacher feedback, and pre/post listening outcomes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <BarChart3 className="w-5 h-5 text-forest shrink-0" />
                       <span><strong>Success Metrics:</strong> Usage &gt;3 sessions/wk, Score improvements &gt;0.5 SD.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 2: Scale */}
              <div className="flex flex-col items-center group">
                {/* Marker Icon */}
                <div className="w-24 h-24 bg-ceramic border-4 border-gold rounded-full flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover:scale-110">
                  <Rocket className="w-10 h-10 text-gold" />
                </div>

                {/* Step Label (Moved Below) */}
                <div className="mt-4 mb-6">
                  <span className="px-4 py-1 bg-gold/10 text-gold text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-gold/20">
                    Step 2
                  </span>
                </div>
                
                {/* Content Card */}
                <div className="bg-ceramic p-8 rounded-2xl border border-gold/20 shadow-sm flex-grow w-full hover:shadow-md transition-all">
                  <div className="mb-4 text-center">
                    <span className="inline-block px-3 py-1 bg-gold text-white text-[10px] font-mono font-bold rounded-full mb-2">Months 25–48</span>
                    <h3 className="font-serif text-2xl text-charcoal">Scale Phase</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-stone-600 font-sans border-t border-gold/10 pt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-gold font-bold">✓</span> 
                      <span><strong>50k–1M devices</strong> with partners like JEF & CMCA.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Landmark className="w-5 h-5 text-gold shrink-0" />
                      <span>Outcome-linked contracts with state education departments.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 3: Long-term */}
              <div className="flex flex-col items-center group">
                {/* Marker Icon */}
                <div className="w-24 h-24 bg-ceramic border-4 border-charcoal rounded-full flex items-center justify-center shadow-xl z-20 transition-transform duration-300 group-hover:scale-110">
                  <Infinity className="w-10 h-10 text-charcoal" />
                </div>

                {/* Step Label (Moved Below) */}
                <div className="mt-4 mb-6">
                  <span className="px-4 py-1 bg-charcoal/10 text-charcoal text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-charcoal/20">
                    Step 3
                  </span>
                </div>
                
                {/* Content Card */}
                <div className="bg-ceramic p-8 rounded-2xl border border-charcoal/20 shadow-sm flex-grow w-full hover:shadow-md transition-all">
                  <div className="mb-4 text-center">
                    <span className="inline-block px-3 py-1 bg-charcoal text-white text-[10px] font-mono font-bold rounded-full mb-2">Year 4+</span>
                    <h3 className="font-serif text-2xl text-charcoal">Institutional</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-stone-600 font-sans border-t border-charcoal/10 pt-4">
                    <li className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-charcoal shrink-0" />
                      <span>Embed in <strong>DIKSHA / NDEAR</strong> infrastructure.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-charcoal font-bold">✓</span> 
                      <span>Open-source model weights/APIs for global adaptation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-charcoal font-bold">✓</span> 
                      <span>Scale via government procurement & multilateral financing.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------
          SECTION 7: CTA (The Contact Form)
      ---------------------------------------------------------- */}
      <section id="contact" className="py-32 bg-ceramic px-6 border-t border-sand">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Reach out to us.
            </h2>
          </div>

          <div className="bg-sand/30 p-8 md:p-12 rounded-xl border border-stone-200">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}