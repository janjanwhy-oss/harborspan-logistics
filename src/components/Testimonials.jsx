import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { useInView } from '../hooks/useInView';

export default function Testimonials() {
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[currentIndex];
  const prevItem = testimonialsData[(currentIndex - 1 + testimonialsData.length) % testimonialsData.length];
  const nextItem = testimonialsData[(currentIndex + 1) % testimonialsData.length];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 md:mb-20 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-brand-orange font-bold text-sm tracking-wider">//</span>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Client Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Built Around the Businesses We Serve
          </h2>
        </div>

        {/* Overlapping 3D Card Stack Composition matching Reference */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center py-6 px-4">
          
          {/* Background Left Peeking Card (Desktop only) */}
          <div
            className={`hidden md:block absolute left-4 w-72 lg:w-80 h-72 rounded-3xl bg-gray-50 border border-gray-100 p-6 shadow-sm transform -rotate-3 scale-90 select-none pointer-events-none transition-all duration-700 delay-150 ${
              inView ? 'opacity-60 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={prevItem.avatar} alt={prevItem.author} className="w-10 h-10 rounded-full object-cover grayscale" />
              <div>
                <p className="text-xs font-bold text-gray-700">{prevItem.author}</p>
                <p className="text-[10px] text-gray-400">{prevItem.company}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 line-clamp-4 italic">
              "{prevItem.quote}"
            </p>
          </div>

          {/* Background Right Peeking Card (Desktop only) */}
          <div
            className={`hidden md:block absolute right-4 w-72 lg:w-80 h-72 rounded-3xl bg-gray-50 border border-gray-100 p-6 shadow-sm transform rotate-3 scale-90 select-none pointer-events-none transition-all duration-700 delay-150 ${
              inView ? 'opacity-60 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={nextItem.avatar} alt={nextItem.author} className="w-10 h-10 rounded-full object-cover grayscale" />
              <div>
                <p className="text-xs font-bold text-gray-700">{nextItem.author}</p>
                <p className="text-[10px] text-gray-400">{nextItem.company}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 line-clamp-4 italic">
              "{nextItem.quote}"
            </p>
          </div>

          {/* Central Prominent Orange Card (Scale 0.97 to 1 + fade) */}
          <div
            className={`relative z-20 w-full max-w-md sm:max-w-lg rounded-3xl bg-gradient-to-br from-[#FF7048] to-[#FF5420] p-8 sm:p-10 shadow-[0_20px_50px_rgba(255,112,72,0.35)] text-white transition-all duration-700 ease-out transform ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
            }`}
          >
            {/* Top Row: User Avatar & Role Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3.5">
                <div className="relative">
                  <img
                    src={active.avatar}
                    alt={active.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/60 shadow"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white text-brand-orange flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight leading-tight">
                    {active.author}
                  </h4>
                  <p className="text-xs text-orange-100 font-medium">
                    {active.role} • {active.company}
                  </p>
                </div>
              </div>

              {/* Minimal Quote Glyph */}
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                <Quote className="w-4 h-4 fill-white" />
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
              "{active.quote}"
            </p>

            {/* Rating */}
            <div className="mt-8 pt-5 border-t border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-brand-dark transition-colors shadow-sm"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-brand-orange' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-brand-dark transition-colors shadow-sm"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
