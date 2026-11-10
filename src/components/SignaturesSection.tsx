import React from 'react';
import { Sparkles, Wine, ArrowRight, Eye } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface SignaturesSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const SignaturesSection: React.FC<SignaturesSectionProps> = ({
  onSelectDish,
  onOpenReservation
}) => {
  const signatures = MENU_ITEMS.filter((item) => item.category === 'signatures');

  return (
    <section id="signatures" className="py-20 sm:py-32 bg-[#0A0B0D] border-b border-[#1E1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>Chef&apos;s Repertoire</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight">
              Culinary <span className="italic text-[#DFBA73]">Masterpieces</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-[#A89F91] text-sm sm:text-base font-light">
              Iconic dishes representing our signature mastery of rare produce, meticulous tableside theater, and harmonic cellar pairings.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-6 py-3 border border-[#DFBA73] text-[#DFBA73] hover:bg-[#DFBA73] hover:text-[#0E0F12] text-xs uppercase tracking-widest transition-colors font-medium min-h-[44px]"
            >
              Reserve Chef&apos;s Table
            </button>
          </div>
        </div>

        {/* Featured Showcase: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signatures.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#121316] border border-[#25221D] hover:border-[#DFBA73]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Dish Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#18191D]">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    fallbackTitle={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Price Tag in Tabular Figures */}
                  <div className="absolute top-4 right-4 bg-[#0E0F12]/85 backdrop-blur-md px-3 py-1.5 border border-[#3A332A] text-xs font-semibold text-[#DFBA73] tabular-nums font-mono">
                    ${dish.price}
                  </div>

                  {/* French Name Subtitle Overlay */}
                  {dish.frenchName && (
                    <div className="absolute bottom-3 left-4 right-4 text-xs font-serif italic text-[#C5A880]/90 truncate">
                      {dish.frenchName}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] group-hover:text-[#DFBA73] transition-colors mb-3">
                    {dish.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9C9283] leading-relaxed line-clamp-3 mb-6 font-light">
                    {dish.description}
                  </p>

                  {/* Wine Pairing Note */}
                  <div className="pt-4 border-t border-[#1E1C18] flex items-start gap-2.5 text-xs text-[#C5A880]">
                    <Wine className="w-4 h-4 shrink-0 mt-0.5 text-[#DFBA73]" />
                    <span className="font-serif italic text-[13px] leading-snug">
                      Pairing: {dish.winePairing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectDish(dish)}
                  className="w-full py-2.5 px-4 bg-[#18191E] hover:bg-[#202228] border border-[#2D2A24] hover:border-[#DFBA73] text-xs uppercase tracking-widest text-[#E0D7CB] hover:text-[#DFBA73] transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-[#DFBA73]" />
                  <span>Inspect Dish Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
