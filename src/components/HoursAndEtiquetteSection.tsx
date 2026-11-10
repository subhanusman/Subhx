import React from 'react';
import { Clock, ShieldCheck, Car, Sparkles } from 'lucide-react';
import { SERVICE_HOURS, RESTAURANT_INFO } from '../data/restaurantData';

export const HoursAndEtiquetteSection: React.FC = () => {
  return (
    <section id="hours" className="py-24 sm:py-32 bg-[#0E0F12] border-b border-[#1E1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Service Hours Schedule */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
              <Clock className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>Service Schedule</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight mb-8">
              Hours of <span className="italic text-[#DFBA73]">Hospitality</span>
            </h2>

            <div className="divide-y divide-[#24211B] border-y border-[#24211B]">
              {SERVICE_HOURS.map((sh) => (
                <div key={sh.day} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg text-[#FAF7F2] font-normal">{sh.day}</h3>
                    <p className="text-xs text-[#8A8174] font-serif italic mt-0.5">{sh.note}</p>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs">
                    {sh.lunch !== 'Closed' ? (
                      <>
                        <div className="text-[#C5A880]">
                          <span className="text-[#736B5F] uppercase tracking-wider text-[10px] mr-2">Lunch:</span>
                          <span className="tabular-nums text-[#FAF7F2]">{sh.lunch}</span>
                        </div>
                        <div className="text-[#C5A880] mt-1">
                          <span className="text-[#736B5F] uppercase tracking-wider text-[10px] mr-2">Dinner:</span>
                          <span className="tabular-nums text-[#FAF7F2]">{sh.dinner}</span>
                        </div>
                      </>
                    ) : (
                      <span className="text-[#8A8174] uppercase tracking-wider font-sans text-xs">
                        Private Salons & Cellar Only
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#7A7265] mt-6">
              * Last seating for the 7-course Degustation Tasting is at 8:45 PM to allow an unhurried 3-hour experience.
            </p>
          </div>

          {/* Right: Dress Code & Valet Etiquette */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dress Code Card */}
            <div className="p-6 sm:p-8 bg-[#141519] border border-[#2B2720]">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#DFBA73] mb-3">
                <ShieldCheck className="w-4 h-4 text-[#DFBA73]" />
                <span>Dining Etiquette</span>
              </div>
              <h3 className="font-serif text-xl text-[#FAF7F2] mb-3">
                Smart Elegant Dress Code
              </h3>
              <p className="text-xs sm:text-sm text-[#A89F91] leading-relaxed font-light mb-4">
                We celebrate the ceremonial joy of fine dining. Tailored shirts and collared attire are customary for gentlemen; evening jackets are warmly encouraged. We politely ask guests to abstain from athletic sportswear, sandals, and beach attire in our grand salons.
              </p>
              <div className="pt-3 border-t border-[#201D18] flex items-center justify-between text-[11px] text-[#807669]">
                <span>Photography: Silent & Ambient</span>
                <span>Cell Phones: Discretion Requested</span>
              </div>
            </div>

            {/* Valet Parking Card */}
            <div className="p-6 bg-[#141519] border border-[#2B2720] flex items-start gap-4">
              <Car className="w-5 h-5 text-[#DFBA73] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base text-[#FAF7F2] mb-1">
                  Complimentary Valet Concierge
                </h4>
                <p className="text-xs text-[#9E9384] leading-relaxed">
                  White-glove valet attendants receive your carriage at the main portico on Place Vendôme 30 minutes prior to every seating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
