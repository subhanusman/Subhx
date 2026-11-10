import React from 'react';
import { Wine, Sparkles, Clock, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#0E0F12] border-b border-[#1E1C18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
            <span>Our Heritage &amp; Philosophy</span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            The Culinary Soul of <span className="italic text-[#DFBA73]">NEXTR Lumière Bistro</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#DFBA73]/50 mx-auto mt-6" />
        </div>

        {/* 2-Column Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-4 sm:space-y-5 text-[#C9BFB2] font-light leading-relaxed text-base sm:text-lg">
              <p>
                Founded on Place Vendôme, <strong className="text-[#FAF7F2] font-medium">{RESTAURANT_INFO.brandName}</strong> is a temple of modern culinary expression. Our kitchen bridges classical French technique with the bright, aromatic vitality of the sun-drenched Mediterranean coast.
              </p>
              <p className="text-sm sm:text-base text-[#9C9283]">
                Every dawn, our culinary brigade curates wild Brittany blue lobsters landed at daybreak, biodynamic vegetables hand-harvested in the Loire Valley, and prized Miyazaki A5 Wagyu aged to perfection. No flavor is accidental; every reduction, infusion, and emulsion is calibrated to ignite pure sensory memory.
              </p>
            </div>

            {/* Chef Quote Card */}
            <div className="p-5 sm:p-8 bg-[#141519] border border-[#2A2620] relative">
              <p className="font-serif italic text-base sm:text-xl text-[#F0EBE1] leading-relaxed mb-4">
                &ldquo;Haute cuisine should never be intimidating. It must feel like an intimate secret shared between the artisan and the guest—where light, aroma, and flavor converge into something unforgettable.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#24211B] text-xs">
                <div>
                  <span className="font-medium text-[#FAF7F2] uppercase tracking-wider block">Jean-Luc Laurent</span>
                  <span className="text-[#8F8576]">Executive Head Chef &amp; Maître Cuisinier</span>
                </div>
                <span className="text-[#DFBA73] font-serif italic text-sm">Paris</span>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 sm:pt-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#DFBA73] font-mono">01. Terroir</span>
                <h3 className="font-serif text-lg text-[#FAF7F2]">Pristine Provenance</h3>
                <p className="text-xs text-[#8F8576] leading-normal">
                  Direct micro-farm partnerships and wild ocean day-boat sourcing.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#DFBA73] font-mono">02. Cellar</span>
                <h3 className="font-serif text-lg text-[#FAF7F2]">1,400 Grand Crus</h3>
                <p className="text-xs text-[#8F8576] leading-normal">
                  Curated biodynamic vintages, rare Champagnes, and sommelier flight pairings.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#DFBA73] font-mono">03. Tableside</span>
                <h3 className="font-serif text-lg text-[#FAF7F2]">Sensory Theater</h3>
                <p className="text-xs text-[#8F8576] leading-normal">
                  Carving, flambé, and warm bouillon poured tableside for complete engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with ImageWithFallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 border border-[#3A3329] p-2 bg-[#121316]">
              <ImageWithFallback
                src="/src/assets/images/patio_terrace_evening_1794223825649.jpg"
                alt="NEXTR Lumière Bistro evening patio terrace with ambient candlelight and dining tables"
                fallbackTitle="Le Jardin Étoilé Terrace"
                className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
              />
              <div className="p-3.5 sm:p-4 bg-[#141519] border-t border-[#2A2620] flex items-center justify-between text-xs text-[#A89F91]">
                <span className="font-serif italic text-sm text-[#DFBA73]">Le Jardin Étoilé Terrace</span>
                <span>Open for Evening Service</span>
              </div>
            </div>
            {/* Background subtle gold glow accent */}
            <div className="absolute -inset-4 bg-[#DFBA73]/5 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
