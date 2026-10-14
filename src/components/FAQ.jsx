import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '../data/faqs';
import { useInView } from '../hooks/useInView';

export default function FAQ() {
  const [openId, setOpenId] = useState(1); // default open first item
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 md:mb-18 transition-all duration-700 ease-out transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-brand-orange font-bold text-sm tracking-wider">//</span>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
            Find answers to common questions about freight coordination, shipment planning, and logistics services.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {faqsData.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`bg-white rounded-2xl border transition-all duration-500 ease-out transform ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  isOpen
                    ? 'border-brand-orange/40 shadow-[0_8px_25px_rgba(255,112,72,0.06)]'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 sm:py-5 px-6 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-brand-dark tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-orangeLight text-brand-orange' : 'text-gray-400 bg-gray-50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </button>

                {/* Animated expandable content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-brand-body leading-relaxed border-t border-gray-50 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
