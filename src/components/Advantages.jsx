import React from 'react';
import { ArrowUpRight, Smartphone, Globe2, Shield, CalendarCheck } from 'lucide-react';
import { advantagesData } from '../data/advantages';
import { useInView } from '../hooks/useInView';

export default function Advantages({ onOpenQuote }) {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  // Render distinct clean SVG / iconography for each advantage card
  const renderCardGraphic = (iconType) => {
    switch (iconType) {
      case 'tracking':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-50/80 border border-orange-100/70 p-3 flex flex-col justify-between group-hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <Smartphone className="w-5 h-5 text-brand-orange" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-10 bg-orange-200 rounded-full" />
              <div className="h-1.5 w-6 bg-orange-300 rounded-full" />
            </div>
          </div>
        );
      case 'globe':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-50/80 border border-orange-100/70 p-3 flex items-center justify-center relative group-hover:scale-105 transition-transform">
            <Globe2 className="w-9 h-9 text-brand-orange stroke-[1.6]" />
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-orange" />
          </div>
        );
      case 'security':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-50/80 border border-orange-100/70 p-3 flex items-center justify-center relative group-hover:scale-105 transition-transform">
            <Shield className="w-9 h-9 text-brand-orange stroke-[1.6]" />
            <span className="absolute text-[9px] font-bold text-brand-orange">100%</span>
          </div>
        );
      case 'delivery':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-50/80 border border-orange-100/70 p-3 flex items-center justify-center group-hover:scale-105 transition-transform">
            <CalendarCheck className="w-9 h-9 text-brand-orange stroke-[1.6]" />
          </div>
        );
      default:
        return null;
    }
  };

  const col1 = advantagesData.filter((item) => item.col === 1);
  const col2 = advantagesData.filter((item) => item.col === 2);

  // Helper for sequential card animation delay
  const getCardDelay = (cardId) => {
    switch (cardId) {
      case 1: return 'delay-0';
      case 2: return 'delay-100';
      case 3: return 'delay-200';
      case 4: return 'delay-300';
      default: return 'delay-0';
    }
  };

  return (
    <section id="advantages" ref={sectionRef} className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title on Left and Description + Button on Right */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-brand-orange font-bold text-sm tracking-wider">//</span>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Our Advantages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Why Businesses Choose Our Logistics Network
            </h2>
          </div>

          <div className="max-w-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm sm:text-base text-brand-body leading-relaxed">
              A simpler way to coordinate freight through modern shipment visibility, 
              flexible transport options, and attentive logistics support.
            </p>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-dark text-white text-xs font-semibold hover:bg-brand-orange transition-colors flex-shrink-0"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Staggered 2-Column Grid Composition matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Column 1 (Standard Top Alignment) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {col1.map((card) => {
              const delayClass = getCardDelay(card.id);
              return (
                <div
                  key={card.id}
                  className={`group bg-white rounded-3xl p-8 sm:p-9 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all duration-700 ${delayClass} hover:-translate-y-1 flex flex-col justify-between min-h-[260px] transform ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-dark tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm text-brand-body leading-relaxed max-w-sm">
                      {card.description}
                    </p>
                  </div>

                  {/* Graphic anchored lower right */}
                  <div className="mt-8 flex justify-end">
                    {renderCardGraphic(card.iconType)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2 (Staggered Downward Offset) */}
          <div className="flex flex-col gap-6 lg:gap-8 md:pt-14">
            {col2.map((card) => {
              const delayClass = getCardDelay(card.id);
              return (
                <div
                  key={card.id}
                  className={`group bg-white rounded-3xl p-8 sm:p-9 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all duration-700 ${delayClass} hover:-translate-y-1 flex flex-col justify-between min-h-[260px] transform ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-dark tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm text-brand-body leading-relaxed max-w-sm">
                      {card.description}
                    </p>
                  </div>

                  {/* Graphic anchored lower right */}
                  <div className="mt-8 flex justify-end">
                    {renderCardGraphic(card.iconType)}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
