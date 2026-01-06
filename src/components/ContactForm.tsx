'use client';

import { useState } from 'react';
import { Send, CheckCircle, RefreshCcw } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate an API call (e.g., to Web3Forms or a custom backend)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-forest" />
        </div>
        <h3 className="font-serif text-3xl text-charcoal mb-4">Signal Received.</h3>
        <p className="text-stone mb-10 max-w-sm mx-auto">
          Thank you for reaching out. A member of the A2Z Antifragility team will review your message and respond shortly.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 text-gold font-bold hover:text-charcoal transition-colors group"
        >
          <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          Submit another query
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Identity / Name */}
        <div className="group">
          <label htmlFor="name" className="block font-mono text-[10px] text-gold uppercase tracking-widest mb-2">Identity / Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:border-gold outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="group">
          <label htmlFor="email" className="block font-mono text-[10px] text-gold uppercase tracking-widest mb-2">Coordinates / Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:border-gold outline-none transition-colors"
            placeholder="email@example.com"
          />
        </div>
      </div>

      {/* Persona Selection */}
      <div className="group">
        <label htmlFor="role" className="block font-mono text-[10px] text-gold uppercase tracking-widest mb-2">I represent a...</label>
        <select 
          id="role" 
          name="role" 
          required 
          className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:border-gold outline-none font-sans appearance-none"
        >
          <option value="NGO">Non-Governmental Organization (NGO)</option>
          <option value="CSO">Civil Society Organization (CSO)</option>
          <option value="Volunteer">Individual / Volunteer</option>
          <option value="Partner">Corporate / Funding Partner</option>
        </select>
      </div>

      {/* Message Section */}
      <div className="group">
        <label htmlFor="message" className="block font-mono text-[10px] text-gold uppercase tracking-widest mb-2">Query / Message</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={5}
          className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:border-gold outline-none transition-colors resize-none"
          placeholder="Describe how we can build resilience together..."
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-gold text-charcoal font-bold py-5 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 text-lg shadow-lg shadow-gold/10"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send your Message
          </>
        )}
      </button>
    </form>
  );
}