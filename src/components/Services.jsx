import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { useInView } from '../hooks/useInView';

export default function Services({ onOpenQuote }) {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  const getServiceDelay = (idx) => {
    switch (idx) {
      case 0: return 'delay-0';
      case 1: return 'delay-150';
      case 2: return 'delay-300';
      default: return 'delay-0';
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-brand-orange font-bold text-sm tracking-wider">//</span>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">What We Offer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Integrated Logistics Solutions for Business Growth
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-brand-body leading-relaxed">
            From domestic transportation to international freight coordination, 
            HarborSpan provides practical logistics solutions for modern businesses.
          </p>
        </div>

        {/* 3 Horizontal Photorealistic Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => {
            const delayClass = getServiceDelay(idx);
            return (
              <div
                key={service.id}
                onClick={onOpenQuote}
                className={`group relative h-[440px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden cursor-pointer shadow-[0_12px_36px_rgb(0,0,0,0.06)] transition-all duration-700 ${delayClass} hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,112,72,0.15)] transform ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Photorealistic Background Photography (Scale settles from 1.04 to 1) */}
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover object-center transform transition-all duration-1000 ${
                    inView ? 'scale-100 group-hover:scale-105' : 'scale-[1.04]'
                  }`}
                />

                {/* Multi-Stop Gradient Overlay for Optimal Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/30">
                    {service.badge}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-gray-200/90 leading-relaxed max-w-xs">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Floating Action Arrow */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Subtle Hover Callout */}
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-gray-300 font-medium">
                    <span>Schedule & Inquire</span>
                    <span className="text-brand-orange font-semibold group-hover:underline">Instant Quote →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
