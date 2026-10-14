import React, { useState, useEffect } from 'react';
import { useInView, useCounter } from '../hooks/useInView';

export default function AboutUs() {
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const [boatEntered, setBoatEntered] = useState(false);
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    if (inView) {
      // Boat reveal starts immediately
      const timerBoat = setTimeout(() => {
        setBoatEntered(true);
      }, 700);

      // Dot appears shortly after the boat reveal
      const timerDot = setTimeout(() => {
        setShowDot(true);
      }, 500);

      return () => {
        clearTimeout(timerBoat);
        clearTimeout(timerDot);
      };
    }
  }, [inView]);

  // Statistics counters (animated from 0 when inView triggers)
  const count1 = useCounter(12, inView, 1400, 0);
  const count2 = useCounter(350, inView, 1600, 0);
  const count3 = useCounter(99.2, inView, 1800, 1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow, Restored Boat Illustration & Updated Caption */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-brand-orange font-bold text-sm tracking-wider">//</span>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">ABOUT US</span>
            </div>

            {/* Restored Minimalist Boat Illustration */}
            <div className="relative w-full max-w-xs flex flex-col items-center sm:items-start py-2">
              <div
                className={`transition-all duration-700 ease-out transform ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {/* Floating animation container (active after entrance reveal) */}
                <div className={boatEntered ? 'animate-boat-float' : ''}>
                  <svg
                    viewBox="0 0 200 200"
                    className="w-52 h-52 text-gray-200/90 transform -scale-x-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-label="Minimalist maritime sailing vessel illustration"
                  >
                    {/* Boat Hull */}
                    <path
                      d="M40 145 C60 165, 140 165, 175 145 C150 155, 65 155, 40 145 Z"
                      fill="#F4F4F4"
                      stroke="currentColor"
                    />

                    {/* Central Mast */}
                    <path d="M100 30 L100 140" strokeWidth="2" />

                    {/* Mainsail (Right / Starboard) */}
                    <path
                      d="M100 35 C135 60, 150 100, 150 135 L100 135 Z"
                      fill="#FAFAFA"
                      stroke="currentColor"
                    />

                    {/* Headsail / Jib (Left / Port) */}
                    <path
                      d="M95 48 C70 70, 58 102, 58 135 L95 135 Z"
                      fill="#F7F7F7"
                      stroke="currentColor"
                    />

                    {/* Subtle Waterline Dashed Reflection */}
                    <path
                      d="M25 155 C55 162, 90 158, 120 158 C150 158, 175 162, 190 155"
                      strokeDasharray="3 3"
                    />

                    {/* Orange Accent Dot above the Mast (Reveals shortly after boat) */}
                    <circle
                      cx="100"
                      cy="30"
                      r="3.5"
                      fill="#FF7048"
                      stroke="none"
                      className={`transition-all duration-500 ease-out transform origin-center ${
                        showDot ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                    />
                  </svg>
                </div>
              </div>

              {/* Updated Replacement Caption */}
              <p
                className={`text-xs text-brand-muted text-left mt-3 max-w-xs leading-relaxed transition-all duration-700 delay-200 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                Connecting businesses through smarter freight networks, from Houston to destinations worldwide.
              </p>
            </div>

          </div>

          {/* Right Column: Narrative & Animated Statistics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Heading with gentle upward fade */}
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-[1.25] transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              At HarborSpan, we connect businesses through smarter freight solutions.
            </h2>

            {/* Paragraphs with gentle upward fade */}
            <p
              className={`mt-5 text-base sm:text-lg text-brand-body leading-relaxed transition-all duration-700 delay-100 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We coordinate road, air, and ocean freight with a focus on efficient planning, 
              shipment visibility, and dependable service. Our approach brings transportation 
              and logistics support together in one streamlined experience.
            </p>

            <p
              className={`mt-4 text-sm text-brand-muted leading-relaxed transition-all duration-700 delay-200 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Whether orchestrating continuous cross-country dry van corridors, time-critical 
              air cargo charters, or multi-modal ocean container transfers through the Port of Houston, 
              our team pairs proactive communication with reliable logistics execution.
            </p>

            {/* Animated Statistics Row */}
            <div
              className={`mt-10 pt-8 border-t border-gray-100 transition-all duration-700 delay-300 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                
                {/* Metric 1: 12K+ */}
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight tabular-nums">
                      {count1}K
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-orange ml-0.5">
                      +
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-brand-body mt-2">
                    Shipments Coordinated
                  </span>
                </div>

                {/* Metric 2: 350+ */}
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight tabular-nums">
                      {count2}
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-orange ml-0.5">
                      +
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-brand-body mt-2">
                    Business Relationships
                  </span>
                </div>

                {/* Metric 3: 99.2% */}
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight tabular-nums">
                      {count3}
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-orange ml-0.5">
                      %
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-brand-body mt-2">
                    On-Time Delivery Rate
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
