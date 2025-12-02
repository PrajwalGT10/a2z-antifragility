'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a submission for now (Antifragile: Tinkering mode)
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1000);
  };

  if (status === 'success') {
    return (
      <div className="p-8 border border-teal/20 bg-teal/5 rounded-lg text-center">
        <h3 className="font-serif text-2xl text-teal mb-2">Signal Received.</h3>
        <p className="font-mono text-sm text-slate-light/60">
          We will process your input and respond if it aligns with the mission.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs font-mono text-teal underline hover:text-teal/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Box 1: Name */}
      <div>
        <label htmlFor="name" className="block font-mono text-xs text-teal uppercase tracking-widest mb-2">
          Identity / Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full bg-navy/50 border border-slate-700 text-slate-light p-4 rounded focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal font-mono transition-colors"
          placeholder="Who is sending this signal?"
        />
      </div>

      {/* Box 2: Contact Info */}
      <div>
        <label htmlFor="contact" className="block font-mono text-xs text-teal uppercase tracking-widest mb-2">
          Coordinates (Email or Phone)
        </label>
        <input
          type="text"
          id="contact"
          required
          className="w-full bg-navy/50 border border-slate-700 text-slate-light p-4 rounded focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal font-mono transition-colors"
          placeholder="How do we reach you?"
        />
      </div>

      {/* Box 3: Thoughts */}
      <div>
        <label htmlFor="message" className="block font-mono text-xs text-teal uppercase tracking-widest mb-2">
          Input / Inquiry
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full bg-navy/50 border border-slate-700 text-slate-light p-4 rounded focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal font-mono transition-colors"
          placeholder="Describe the redundancy or tinkering you propose..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-teal text-navy font-mono font-bold py-4 rounded hover:bg-teal/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Transmitting...' : 'Transmit Signal'}
      </button>
    </form>
  );
}