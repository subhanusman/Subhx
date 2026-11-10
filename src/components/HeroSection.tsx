import React from 'react';
import { Calendar, ChevronDown, Sparkles, Award, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0B0D]">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_lumiere_dining_1794223824744.jpg"
          alt="NEXTR Lumière Bistro Grand Dining Salon with glowing chandeliers and fine linen tables"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered fine-dining scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/60 to-[#0E0F12]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F12]/80 via-transparent to-[#0E0F12]/70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 flex-1 flex flex-col justify-center items-center text-center">
        {/* Editorial Subtitle Kicker (Clean unboxed text) */}
        <div className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#DFBA73] mb-6 font-medium">
          <span className="h-[1px] w-8 sm:w-12 bg-[#DFBA73]/60" />
          <span>Haute French-Mediterranean Gastronomy</span>
          <span className="h-[1px] w-8 sm:w-12 bg-[#DFBA73]/60" />
        </div>

        {/* Grand Headline with text-wrap balance */}
        <h1
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#FAF7F2] tracking-tight leading-[1.1] max-w-5xl mb-6 break-words"
          style={{ textWrap: 'balance' }}
        >
          Where Culinary Artistry Meets <span className="italic font-light text-[#DFBA73]">Timeless Elegance</span>
        </h1>

        {/* Narrative Lead */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#D1C7BA] font-light leading-relaxed mb-8 sm:mb-10 px-2">
          An intimate Parisian sanctuary where seasonal terroir, rare vintage cellar pairings, and multi-sensory French-Mediterranean cuisine come alive under the guidance of Executive Chef Jean-Luc Laurent.
        </p>

        {/* Primary and Secondary Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] font-semibold text-xs uppercase tracking-widest transition-all duration-200 shadow-lg hover:shadow-[#DFBA73]/20 flex items-center justify-center gap-2.5 min-h-[44px]"
          >
            <Calendar className="w-4 h-4 text-[#0E0F12]" />
            <span>Book a Simulated Table</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 border border-[#524B40] hover:border-[#DFBA73] text-[#FAF7F2] hover:text-[#DFBA73] font-medium text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm bg-[#0E0F12]/30 min-h-[44px]"
          >
            <Compass className="w-4 h-4 text-[#DFBA73]" />
            <span>Explore Seasonal Menus</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 sm:mt-12 hidden md:block">
          <a
            href="#about"
            className="text-[#968D7F] hover:text-[#DFBA73] transition-colors flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest"
            aria-label="Scroll to discover the restaurant story"
          >
            <span>Discover The Experience</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#DFBA73]" />
          </a>
        </div>
      </div>

      {/* Proof & Distinction Strip: Full-Width Row Below Hero */}
      <div className="relative z-10 w-full border-t border-[#25221D] bg-[#0E0F12]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-2 sm:p-0">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#A3998A] font-medium mb-0.5 sm:mb-1">Recognition</span>
              <span className="font-serif text-xs sm:text-base text-[#FAF7F2] font-normal block">Michelin Guide Recommended</span>
            </div>
            <div className="p-2 sm:p-0 border-l border-[#221F1A]">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#A3998A] font-medium mb-0.5 sm:mb-1">Cellar Collection</span>
              <span className="font-serif text-xs sm:text-base text-[#FAF7F2] font-normal block">1,400+ Rare Vintage Labels</span>
            </div>
            <div className="p-2 sm:p-0 border-t md:border-t-0 md:border-l border-[#221F1A]">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#A3998A] font-medium mb-0.5 sm:mb-1">Culinary Direction</span>
              <span className="font-serif text-xs sm:text-base text-[#FAF7F2] font-normal block">Chef Jean-Luc Laurent</span>
            </div>
            <div className="p-2 sm:p-0 border-t md:border-t-0 border-l border-[#221F1A]">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#A3998A] font-medium mb-0.5 sm:mb-1">Atmosphere</span>
              <span className="font-serif text-xs sm:text-base text-[#FAF7F2] font-normal block">Grand Salon &amp; Terrace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
