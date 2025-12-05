'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    // Replace this with your actual Access Key from Web3Forms
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('idle');
      }
    } catch (error) {
      setStatus('idle');
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 border border-gold/20 bg-gold/5 rounded-lg text-center">
        <h3 className="font-serif text-2xl text-gold mb-2">Signal Received.</h3>
        <p className="font-sans text-stone-600 text-sm">
          We will process your input and get in touch shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs font-mono text-forest underline hover:text-forest/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left">
      
      {/* 1. Identity / Name */}
      <div className="group">
        <label htmlFor="name" className="block font-mono text-xs text-gold uppercase tracking-widest mb-3">
          Identity / Name
        </label>
        <input
          type="text"
          id="name"
          name="name" 
          required
          className="w-full bg-white border-2 border-stone-200 text-charcoal p-4 rounded-lg focus:border-gold focus:outline-none focus:ring-0 transition-colors font-sans text-lg placeholder:text-stone-300"
          placeholder="Enter your name or organization"
        />
      </div>

      {/* 2. Coordinates (Email) */}
      <div className="group">
        <label htmlFor="email" className="block font-mono text-xs text-gold uppercase tracking-widest mb-3">
          Coordinates (Email)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white border-2 border-stone-200 text-charcoal p-4 rounded-lg focus:border-gold focus:outline-none focus:ring-0 transition-colors font-sans text-lg placeholder:text-stone-300"
          placeholder="name@organization.org"
        />
      </div>

      {/* 3. Input / Inquiry */}
      <div className="group">
        <label htmlFor="message" className="block font-mono text-xs text-gold uppercase tracking-widest mb-3">
          Input / Inquiry
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-white border-2 border-stone-200 text-charcoal p-4 rounded-lg focus:border-gold focus:outline-none focus:ring-0 transition-colors font-sans text-lg placeholder:text-stone-300"
          placeholder="Share your thoughts"
        />
      </div>

      {/* Spam Prevention */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gold text-gold font-bold py-5 rounded-lg hover:bg-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold/20 text-lg tracking-wide"
      >
        {status === 'submitting' ? 'Transmitting...' : 'Transmit Signal'}
      </button>
    </form>
  );
}