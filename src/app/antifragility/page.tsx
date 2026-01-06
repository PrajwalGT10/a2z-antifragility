'use client';

import { Zap, Layers, Activity, Rocket, Infinity } from 'lucide-react';
import FragilityAccordion from '../../components/FragilityAccordion';
import ContactForm from '../../components/ContactForm'; // Import the form

export default function AntifragilityPage() {
  return (
    <main className="bg-ceramic">
      {/* --- SECTION 1: HERO / THE WHY --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">The Philosophy</span>
        <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-10 leading-tight">
          Fragility-proofing <br/>
          <span className="italic text-forest">Our Communities.</span>
        </h1>
        <p className="text-stone text-lg leading-relaxed mb-12">
          "I like to dream of things that never were and say - <span className="italic text-forest decoration-gold/40 underline decoration-2 underline-offset-4">Why not?"</span>
          <br/> — GB Shaw
        </p>
        
        <FragilityAccordion />
      </section>

      {/* --- SECTION 2: THE BOTTLENECK (Gap Analysis) --- */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="md:top-32">
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

      {/* --- SECTION 3: OUR FOCUS / SERVICES --- */}
      <section className="py-24 bg-ceramic">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">Capabilities</span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal">Innovation as a Service.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Capacity Building */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-forest shadow-sm hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-forest/10 rounded-lg flex items-center justify-center mb-6"><Zap className="w-8 h-8 text-forest" /></div>
              <h4 className="font-serif text-2xl text-charcoal mb-4">Capacity Building</h4>
              <p className="text-stone text-sm leading-relaxed mb-6">We train CSO teams to embed innovation thinking into daily operations.</p>
              <ul className="text-sm text-stone-600 space-y-3 font-mono border-t border-slate-100 pt-6">
                <li>Design Thinking Workshops</li>
                <li>M&E Frameworks</li>
                <li>Culture of Experimentation</li>
              </ul>
            </div>

            {/* 2. Function Setup */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-gold shadow-sm hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6"><Layers className="w-8 h-8 text-gold" /></div>
              <h4 className="font-serif text-2xl text-charcoal mb-4">Function Setup</h4>
              <p className="text-stone text-sm leading-relaxed mb-6">For organizations ready to institutionalize capabilities, we design formal departments.</p>
              <ul className="text-sm text-stone-600 space-y-3 font-mono border-t border-slate-100 pt-6">
                <li>Defining Roles & Processes</li>
                <li>Tech Infrastructure</li>
                <li>Governance Structures</li>
              </ul>
            </div>

            {/* 3. Managed Services */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-charcoal shadow-sm hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-charcoal/10 rounded-lg flex items-center justify-center mb-6"><Activity className="w-8 h-8 text-charcoal" /></div>
              <h4 className="font-serif text-2xl text-charcoal mb-4">Managed Services</h4>
              <p className="text-stone text-sm leading-relaxed mb-6">Lack internal resources? We provide outsourced Innovation & Learning services.</p>
              <ul className="text-sm text-stone-600 space-y-3 font-mono border-t border-slate-100 pt-6">
                <li>Impact Evaluations</li>
                <li>Innovation Sprints</li>
                <li>Knowledge Management</li>
                <li>Program Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4: CONTACT / CTA */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-sand">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">Get Started</span>
          <h2 className="font-serif text-4xl text-charcoal mb-6">Build your Digital Spine.</h2>
          <p className="text-stone mb-12">Reach out to discuss how we can help your organization grow stronger through the challenges of the last mile.</p>
          
          <div className="bg-ceramic p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}