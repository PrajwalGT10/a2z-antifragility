import Link from 'next/link';
import { Wind, Shield, TrendingUp, AlertCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm'; // <--- Import the new form

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-navy via-navy to-navy/90 flex items-center justify-center relative overflow-hidden">
        {/* Branching Line SVG (Hydra Pattern) */}
        <svg
          className="absolute top-20 left-0 w-full h-64 opacity-10"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <path
            d="M500,0 Q450,50 400,100 M500,0 Q500,50 500,100 M500,0 Q550,50 600,100 M400,100 Q350,150 300,200 M400,100 Q400,150 400,200 M400,100 Q450,150 500,200 M600,100 Q550,150 500,200 M600,100 Q600,150 600,200 M600,100 Q650,150 700,200"
            stroke="currentColor"
            className="text-teal"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-slate-light mb-6">
            Do You Break, or Do You Grow?
          </h1>
          <p className="font-mono text-lg text-teal mb-12">
            Antifragility isn&apos;t about surviving stress&mdash;it&apos;s about thriving
            through it.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* 1. Changed <button> to <Link> and added href="#manifesto" */}
            <Link 
              href="#manifesto"
              className="px-8 py-3 bg-teal text-navy font-mono font-bold rounded hover:bg-teal/80 transition inline-block">
              Explore Manifesto
            </Link>
            {/* 2. Wired up the second button to the Contact/Ecosystem section */}
            <Link 
              href="#contact"
              className="px-8 py-3 border-2 border-teal text-teal font-mono font-bold rounded hover:bg-teal/10 transition inline-block">
              Join Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      {/* Added id="manifesto" so the button knows where to scroll */}
      <section id="manifesto" className="py-24 px-6 bg-navy scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-4xl md:text-5xl text-teal italic mb-6">
            &ldquo;Wind extinguishes a candle and energizes fire. Likewise, with
            randomness and volatility, you want to be the fire and wish for the
            wind.&rdquo;
          </blockquote>
          <p className="font-mono text-slate-light">— Nassim Nicholas Taleb</p>
        </div>
      </section>

      {/* Triad Cards Section */}
      <section id="initiatives" className="py-24 px-6 bg-navy/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-slate-light mb-16 text-center">
            The Triad
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fragile Card */}
            <div className="p-8 bg-navy border border-slate-light/20 rounded-lg hover:border-slate-light/50 transition">
              <AlertCircle className="w-12 h-12 text-slate-light mb-4" />
              <h3 className="font-serif text-2xl font-bold text-slate-light mb-4">
                Fragile
              </h3>
              <p className="font-mono text-sm text-slate-light/80">
                Breaks under stress. Loses from disorder. Each shock diminishes
                capability.
              </p>
            </div>

            {/* Robust Card */}
            <div className="p-8 bg-navy border border-slate-light/20 rounded-lg hover:border-slate-light/50 transition">
              <Shield className="w-12 h-12 text-slate-light mb-4" />
              <h3 className="font-serif text-2xl font-bold text-slate-light mb-4">
                Robust
              </h3>
              <p className="font-mono text-sm text-slate-light/80">
                Resists stress. Neutral to disorder. Maintains stability through
                shock.
              </p>
            </div>

            {/* Antifragile Card */}
            <div className="p-8 bg-navy border-2 border-teal rounded-lg hover:border-teal/80 transition">
              <TrendingUp className="w-12 h-12 text-teal mb-4" />
              <h3 className="font-serif text-2xl font-bold text-teal mb-4">
                Antifragile
              </h3>
              <p className="font-mono text-sm text-teal/90">
                Gains from stress. Thrives on disorder. Each shock increases
                capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Barbell Strategy Section */}
      <section id="ecosystem" className="py-24 px-6 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-slate-light mb-16 text-center">
            The Barbell Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Safety Pillar */}
            <div className="text-center">
              <Shield className="w-16 h-16 text-teal mx-auto mb-6" />
              <h3 className="font-serif text-3xl font-bold text-slate-light mb-4">
                90% Safety
              </h3>
              <p className="font-mono text-sm text-slate-light/80">
                Secure your downside. Build foundations. Protect core assets.
              </p>
            </div>

            {/* Risk Pillar */}
            <div className="text-center">
              <Wind className="w-16 h-16 text-teal mx-auto mb-6" />
              <h3 className="font-serif text-3xl font-bold text-slate-light mb-4">
                10% Risk
              </h3>
              <p className="font-mono text-sm text-slate-light/80">
                Unlimited upside. Small controlled bets. Optionality in chaos.
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="relative h-24 flex items-center justify-center">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent" />
            <div className="relative z-10 bg-navy px-6">
              <p className="font-mono text-teal font-bold">
                Avoid the Mediocre Middle
              </p>
            </div>
          </div>

          {/* Context */}
          <p className="text-center font-mono text-sm text-slate-light/80 mt-8">
            No compromise. No middle ground. Expose yourself to big gains while
            protecting from catastrophic loss.
          </p>
        </div>
      </section>

      {/* Contact Section - Replaced with Form */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-navy to-navy/80 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-slate-light mb-4">
              Initiate Contact
            </h2>
            <p className="font-mono text-sm text-slate-light/60">
              Direct line. No noise.
            </p>
          </div>

          <div className="bg-slate-800/30 p-8 md:p-12 rounded-xl border border-teal/10 backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
