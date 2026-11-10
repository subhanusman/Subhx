import React, { useState } from 'react';
import { ChevronDown, Mail, MapPin, Send, MessageSquare, ArrowUpRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { FAQS, RESTAURANT_INFO } from '../data/restaurantData';

export const FaqAndContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-dress');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0B0D] border-b border-[#1E1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Interactive FAQs */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>Questions & Dining Guidance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight mb-8">
              Frequently Asked <span className="italic text-[#DFBA73]">Questions</span>
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-[#221F1A] bg-[#121316] transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-serif text-base sm:text-lg text-[#FAF7F2] font-normal">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#DFBA73] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#A89F91] leading-relaxed border-t border-[#1C1A16] pt-4 font-light">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Concierge & WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-[#DFBA73]" />
                <span>Private Concierge</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF7F2] tracking-tight mb-6">
                Inquiries & <span className="italic text-[#DFBA73]">Private Events</span>
              </h2>

              {/* Direct Details Box */}
              <div className="p-6 bg-[#121316] border border-[#27231D] space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#DFBA73] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-[#8A8174] uppercase tracking-wider block text-[10px]">Location</span>
                    <span className="text-[#FAF7F2]">{RESTAURANT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#1C1A16]">
                  <Mail className="w-4 h-4 text-[#DFBA73] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-[#8A8174] uppercase tracking-wider block text-[10px]">Direct Email</span>
                    <a
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="text-[#FAF7F2] hover:text-[#DFBA73] transition-colors"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Action with MANDATORY exact text "Visit" and NO phone number displayed */}
                <div className="pt-3 border-t border-[#1C1A16] flex items-center justify-between">
                  <span className="text-xs text-[#8A8174]">Instant Messaging Concierge</span>
                  <a
                    href={RESTAURANT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                  >
                    <span>{RESTAURANT_INFO.whatsappButtonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0E0F12]" />
                  </a>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <div className="p-6 bg-[#121316] border border-[#27231D]">
                <h3 className="font-serif text-lg text-[#FAF7F2] mb-3">
                  Send a Direct Concierge Note
                </h3>

                {submitted ? (
                  <div className="p-4 bg-[#18191E] border border-[#DFBA73]/40 text-center">
                    <CheckCircle2 className="w-6 h-6 text-[#DFBA73] mx-auto mb-2" />
                    <p className="font-serif text-sm text-[#FAF7F2]">Note Received</p>
                    <p className="text-xs text-[#8E8577] mt-1">Our Maître d'hôtel will reply to your demonstration inquiry promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      required
                      className="w-full bg-[#18191E] border border-[#29251F] text-xs text-[#FAF7F2] p-3 focus:border-[#DFBA73] outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      required
                      className="w-full bg-[#18191E] border border-[#29251F] text-xs text-[#FAF7F2] p-3 focus:border-[#DFBA73] outline-none"
                    />
                    <textarea
                      rows={3}
                      placeholder="Tell us about your event, buyout inquiry, or guest requirements..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      required
                      className="w-full bg-[#18191E] border border-[#29251F] text-xs text-[#FAF7F2] p-3 focus:border-[#DFBA73] outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 border border-[#DFBA73] text-[#DFBA73] hover:bg-[#DFBA73] hover:text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Note</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
