import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleScroll = () => {
      // Only track scroll within hero range (0 - 600px)
      if (window.scrollY < 800) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle upward movement of approximately 30-38px over hero scroll range
  const parallaxOffset = Math.min(38, scrollY * 0.08);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FFF9F6] via-[#FAF8F7] to-[#FAFAFA]">
      {/* Background Soft Port Atmosphere Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Giant Typographic Watermark Behind Hero */}
      <div 
        className="absolute top-10 sm:top-14 md:top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center z-0"
        aria-hidden="true"
      >
        <span className="text-[12vw] font-black tracking-tighter text-[#FF7048]/[0.07] leading-none uppercase inline-block whitespace-nowrap">
          HarborSpan
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Headline, Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-brand-dark leading-[1.12]">
              <span className="text-brand-orange">Smart Logistics</span> for{' '}
              <br className="hidden sm:inline" />
              Faster, Reliable Deliveries
            </h1>

            <p className="mt-5 text-base sm:text-lg text-brand-body leading-relaxed max-w-xl">
              A modern commercial freight partner connecting highway corridors, 
              air cargo gateways, and maritime trade routes with precision scheduling 
              and real-time visibility.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-dark text-white text-sm font-medium hover:bg-brand-orange transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Explore Freight Coordination</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-300 text-brand-dark text-sm font-medium hover:border-brand-dark transition-colors"
              >
                <span>Our Approach</span>
              </a>
            </div>

            {/* Quick verification points */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                <span>Nationwide FTL & LTL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                <span>International Air & Ocean</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                <span>Houston HQ Coordination</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Standalone Suspended Shipping Container Visual (Increased 15-20% with subtle parallax) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center relative py-6 lg:py-0">
            <div 
              className="relative w-full max-w-lg sm:max-w-xl lg:max-w-none transform lg:scale-[1.20] xl:scale-[1.24] lg:translate-x-3 transition-transform duration-100 ease-out will-change-transform"
              style={{
                transform: `translateY(-${parallaxOffset}px)`
              }}
            >
              <img
                src="/assets/hero/suspended-container.png"
                alt="Photorealistic coral-orange HarborSpan shipping container suspended by crane cables"
                className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(255,112,72,0.18)]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
