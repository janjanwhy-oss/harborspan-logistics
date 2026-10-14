import React from 'react';
import { ArrowUpRight, Box, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function FinalCTA({ onOpenQuote }) {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF2ED] via-[#FFEAE3] to-[#FFDDD2] overflow-hidden">
      
      {/* Soft Ambient Radial Blur Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Large Rounded White Card matching Reference */}
        <div
          className={`bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-14 lg:p-16 shadow-[0_20px_60px_-15px_rgba(255,112,72,0.18)] border border-white text-center transition-all duration-700 ease-out transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          
          {/* Centered Orange Logistics Brand Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-orange-100 shadow-sm p-3 hover:scale-105 transition-transform duration-300">
            <img src="/favicon.png" alt="HarborSpan Brand Mark" className="w-full h-full object-contain" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Simplify Your Shipping Operations?
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-brand-body max-w-xl mx-auto leading-relaxed">
            Explore smarter freight coordination and flexible logistics solutions for your business.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-dark text-white text-sm font-semibold hover:bg-brand-orange hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-[0_8px_20px_rgba(255,112,72,0.3)] group"
            >
              <span>Get Started Today</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 text-brand-dark text-sm font-semibold hover:border-brand-dark hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Minimal Bottom Bar: Social Icons & Copyright */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-brand-orange hover:bg-orange-50 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-brand-orange hover:bg-orange-50 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-brand-orange hover:bg-orange-50 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-brand-orange hover:bg-orange-50 transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </span>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="font-medium text-gray-600">
                © 2026 HarborSpan Logistics. All rights reserved.
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Houston, Texas
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
