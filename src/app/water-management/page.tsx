'use client';

import { Droplets } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export default function WaterManagementPage() {
  return (
    <main className="bg-ceramic min-h-screen flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-8">
        <Droplets className="w-10 h-10 text-gold animate-pulse" />
      </div>
      <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-6">Resilient Water Systems.</h1>
      <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-12">Project Under Development</p>
      
      <div className="max-w-xl w-full bg-sand/30 p-8 rounded-xl border border-stone-200">
        <p className="text-stone-600 mb-8 font-sans">
          We are currently engineering the digital spine for community-led water conservation. 
          Leave your coordinates to be part of the pilot phase.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}