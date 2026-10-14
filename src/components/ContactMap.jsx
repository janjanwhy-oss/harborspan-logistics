import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ContactMap() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    service: 'Road Freight',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.details.trim()) errs.details = 'Please describe your shipment requirements';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate demo submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-14 md:mb-18 transition-all duration-700 ease-out transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-brand-orange font-bold text-sm tracking-wider">//</span>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Find Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Connected From Houston to the World
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
            Our demonstration headquarters is based in Houston, Texas, a major center for commercial freight, 
            maritime trade, and transportation.
          </p>
        </div>

        {/* 2-Column Grid: Map & Contact Info Left, Inquiry Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Houston Google Map & Contact Details */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-700 delay-100 ease-out transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            
            {/* Responsive Google Maps Embed (Houston, TX) */}
            <div className="w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative bg-gray-100">
              <iframe
                title="HarborSpan Logistics Demonstration Headquarters in Houston, Texas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221841.44686419084!2d-95.54484042898734!3d29.817478204683515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Quick Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-brand-dark mt-0.5">Houston, Texas, USA</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Commercial Intermodal Gateway</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Phone (Demo)</h4>
                  <p className="text-sm font-semibold text-brand-dark mt-0.5">+1 (713) 555-0148</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Demonstration line</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Email (Demo)</h4>
                  <p className="text-sm font-semibold text-brand-dark mt-0.5 truncate">hello@harborspanlogistics.com</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Sample contact inbox</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Business Hours</h4>
                  <p className="text-xs font-semibold text-brand-dark mt-0.5">Mon–Fri: 8 AM–7 PM</p>
                  <p className="text-xs font-semibold text-brand-dark">Sat: 9 AM–2 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Business Inquiry Form */}
          <div
            className={`lg:col-span-6 bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-[0_10px_35px_rgb(0,0,0,0.03)] transition-all duration-700 delay-200 ease-out transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <h3 className="text-xl font-bold text-brand-dark tracking-tight">
              Submit a Freight Inquiry
            </h3>
            <p className="mt-1 text-xs text-brand-body">
              Fill out your transport details below for a tailored response.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold">Inquiry Received (Demo)</h4>
                <p className="text-xs sm:text-sm mt-1.5 text-emerald-700">
                  Thank you! Your simulated freight inquiry for <strong>{formData.companyName}</strong> has been processed in demonstration mode.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      companyName: '',
                      phone: '',
                      service: 'Road Freight',
                      details: ''
                    });
                  }}
                  className="mt-5 px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-brand-dark focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-brand-orange'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-brand-dark focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-brand-orange'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Manufacturing LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-brand-dark focus:outline-none transition-colors ${
                        errors.companyName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-brand-orange'
                      }`}
                    />
                    {errors.companyName && <p className="text-[11px] text-red-500 mt-1">{errors.companyName}</p>}
                  </div>

                  {/* Phone Number (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-brand-dark focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* Freight Service */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Freight Transportation Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-brand-dark focus:outline-none focus:border-brand-orange transition-colors"
                  >
                    <option value="Road Freight">Road Freight (FTL / LTL)</option>
                    <option value="Air Freight">Air Freight (Expedited / Charter)</option>
                    <option value="Ocean Freight">Ocean Freight (FCL / LCL)</option>
                    <option value="Intermodal Coordination">Intermodal & Transloading Hub</option>
                  </select>
                </div>

                {/* Shipment Details */}
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Shipment Details & Route *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Origin, destination, estimated weight, dimensions, and preferred timeline..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-brand-dark focus:outline-none transition-colors ${
                      errors.details ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-brand-orange'
                    }`}
                  />
                  {errors.details && <p className="text-[11px] text-red-500 mt-1">{errors.details}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 rounded-full bg-brand-dark text-white font-medium text-sm hover:bg-brand-orange transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Processing Demo...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
