import React from 'react';
import { FileText, Route, PackageCheck } from 'lucide-react';
import { processSteps } from '../data/process';
import { useInView } from '../hooks/useInView';

export default function Process() {
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'file-text':
        return <FileText className="w-7 h-7 text-brand-orange stroke-[1.8]" />;
      case 'navigation':
        return <Route className="w-7 h-7 text-brand-orange stroke-[1.8]" />;
      case 'package-check':
        return <PackageCheck className="w-7 h-7 text-brand-orange stroke-[1.8]" />;
      default:
        return null;
    }
  };

  const getStepDelay = (idx) => {
    switch (idx) {
      case 0: return 'delay-0';
      case 1: return 'delay-200';
      case 2: return 'delay-400';
      default: return 'delay-0';
    }
  };

  return (
    <section id="process" ref={sectionRef} className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-24 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-brand-orange font-bold text-sm tracking-wider">//</span>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">The Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            How Our Logistics Process Works
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
            A clear, coordinated approach to moving freight from initial inquiry to final delivery.
          </p>
        </div>

        {/* 3-Step Horizontal Process with Connector Dotted Curves */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const delayClass = getStepDelay(idx);
              return (
                <div
                  key={step.step}
                  className={`flex flex-col items-center text-center relative group transition-all duration-700 ${delayClass} transform ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* Soft Orange Elliptical Badge Container */}
                  <div
                    className={`relative w-28 h-20 sm:w-32 sm:h-24 rounded-[36px] bg-[#FFF3EF] flex items-center justify-center border border-orange-100 shadow-sm group-hover:scale-105 group-hover:bg-orange-100/70 transition-all duration-500 transform ${
                      inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                    }`}
                  >
                    {getStepIcon(step.icon)}
                    
                    {/* Step Number Tag */}
                    <span className="absolute -top-2.5 -right-2 w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg sm:text-xl font-bold text-brand-dark tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-brand-body leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Mobile Flow Indicator */}
                  {idx < processSteps.length - 1 && (
                    <div className="md:hidden mt-6 text-brand-orange animate-bounce">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Curved Dotted Connectors between steps (Progressively Animated) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 pointer-events-none z-0">
            <svg className="w-full h-12" viewBox="0 0 1000 60" fill="none" preserveAspectRatio="none">
              {/* Curve from Step 1 to Step 2 */}
              <g className={`transition-opacity duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <path
                  d="M 230 25 C 290 5, 370 5, 430 25"
                  stroke="#FF7048"
                  strokeWidth="1.8"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  className="opacity-50"
                />
                <polygon points="432,25 423,20 423,30" fill="#FF7048" className="opacity-70" />
              </g>

              {/* Curve from Step 2 to Step 3 */}
              <g className={`transition-opacity duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <path
                  d="M 570 25 C 630 5, 710 5, 770 25"
                  stroke="#FF7048"
                  strokeWidth="1.8"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  className="opacity-50"
                />
                <polygon points="772,25 763,20 763,30" fill="#FF7048" className="opacity-70" />
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
