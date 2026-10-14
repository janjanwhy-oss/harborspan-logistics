import React, { useState } from 'react';
import { X, Truck, Plane, Ship, ArrowRight, CheckCircle, Calculator } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [freightType, setFreightType] = useState('road');
  const [origin, setOrigin] = useState('Houston, TX');
  const [destination, setDestination] = useState('Chicago, IL');
  const [weight, setWeight] = useState('8500');
  const [calculatedQuote, setCalculatedQuote] = useState(null);

  if (!isOpen) return null;

  const handleCalculate = (e) => {
    e.preventDefault();
    const w = parseFloat(weight) || 5000;
    let baseRate = 1200;
    if (freightType === 'road') baseRate = 1450 + (w * 0.12);
    if (freightType === 'air') baseRate = 3200 + (w * 0.85);
    if (freightType === 'ocean') baseRate = 2800 + (w * 0.05);

    setCalculatedQuote({
      rate: Math.round(baseRate),
      transitDays: freightType === 'air' ? '1–2 Days' : freightType === 'road' ? '2–4 Days' : '12–18 Days',
      mode: freightType.toUpperCase()
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-dark flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-brand-orangeLight text-brand-orange flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
            Instant Estimate
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
          Request a Demonstration Freight Quote
        </h3>
        <p className="text-xs sm:text-sm text-brand-body mt-1">
          Select your shipping requirements to view an instant illustrative estimate.
        </p>

        {calculatedQuote ? (
          <div className="mt-6 p-6 rounded-2xl bg-orange-50/60 border border-brand-orange/30 text-center animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-brand-orange text-white mx-auto flex items-center justify-center mb-3">
              <CheckCircle className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-wider text-brand-orange font-bold">
              Estimated Freight Range
            </p>
            <div className="text-3xl sm:text-4xl font-black text-brand-dark mt-1">
              ${calculatedQuote.rate.toLocaleString()}{' '}
              <span className="text-xs font-semibold text-gray-500">USD (Demo)</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-4 text-xs font-semibold text-gray-600 bg-white px-4 py-1.5 rounded-full border border-gray-200">
              <span>Transit: {calculatedQuote.transitDays}</span>
              <span>•</span>
              <span>Mode: {calculatedQuote.mode}</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
              * Demonstration estimate for portfolio evaluation only. Actual freight rates depend on carrier capacity, fuel surcharges, and lane availability.
            </p>
            <div className="mt-5 flex gap-3 justify-center">
              <button
                onClick={() => setCalculatedQuote(null)}
                className="px-5 py-2 rounded-full border border-gray-300 text-xs font-semibold text-brand-dark hover:bg-white"
              >
                Modify Details
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-brand-dark text-white text-xs font-semibold hover:bg-brand-orange transition-colors"
              >
                Close Estimator
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCalculate} className="mt-6 space-y-4">
            
            {/* Freight Mode Selector */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark mb-2">
                Transportation Channel
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'road', name: 'Road Freight', icon: Truck },
                  { id: 'air', name: 'Air Freight', icon: Plane },
                  { id: 'ocean', name: 'Ocean Freight', icon: Ship },
                ].map((mode) => {
                  const Icon = mode.icon;
                  const isSelected = freightType === mode.id;
                  return (
                    <button
                      type="button"
                      key={mode.id}
                      onClick={() => setFreightType(mode.id)}
                      className={`py-3 px-2 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'border-brand-orange bg-orange-50/50 text-brand-orange font-bold shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-[11px]">{mode.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Origin (City, State / Port)
                </label>
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-orange"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Destination (City, State / Port)
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-orange"
                  required
                />
              </div>
            </div>

            {/* Cargo Weight */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark mb-1">
                Estimated Cargo Weight (lbs)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-orange"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-3 py-3 rounded-full bg-brand-dark text-white font-semibold text-xs sm:text-sm hover:bg-brand-orange transition-colors flex items-center justify-center gap-2 shadow"
            >
              <span>Calculate Demonstration Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
