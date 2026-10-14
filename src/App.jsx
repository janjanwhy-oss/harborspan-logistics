import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactMap from './components/ContactMap';
import FinalCTA from './components/FinalCTA';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => setQuoteModalOpen(true);
  const handleCloseQuote = () => setQuoteModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-brand-dark selection:bg-brand-orange selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Single-Page Sections */}
      <main className="flex-grow">
        <Hero onOpenQuote={handleOpenQuote} />
        <AboutUs />
        <Advantages onOpenQuote={handleOpenQuote} />
        <Services onOpenQuote={handleOpenQuote} />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactMap />
        <FinalCTA onOpenQuote={handleOpenQuote} />
      </main>

      {/* Interactive Freight Quote Estimator Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
