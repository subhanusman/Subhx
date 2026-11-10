import React from 'react';
import { Award, Sparkles, ChefHat } from 'lucide-react';

export const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-24 sm:py-32 bg-[#0E0F12] border-b border-[#1E1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Chef Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 border border-[#3A3329] p-2 bg-[#121316]">
              <img
                src="/src/assets/images/executive_chef_portrait_1794223826767.jpg"
                alt="Executive Head Chef Jean-Luc Laurent finishing a dish at the kitchen pass"
                className="w-full h-[520px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#141519] border-t border-[#2A2620]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#FAF7F2]">Jean-Luc Laurent</h3>
                    <p className="text-xs text-[#DFBA73] font-serif italic">Executive Head Chef & Culinary Director</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A8174] font-mono">
                    Paris, FR
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#DFBA73]/5 blur-2xl -z-10" />
          </div>

          {/* Right: Chef Philosophy & Accolades */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] font-medium">
              <ChefHat className="w-4 h-4 text-[#DFBA73]" />
              <span>Master of Haute Gastronomy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight leading-tight">
              A Symphony of Discipline, <span className="italic text-[#DFBA73]">Reverence & Fire</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#C9BFB2] font-light leading-relaxed">
              <p>
                Trained in the legendary kitchens of Paris and Lyon under France&apos;s most formidable three-star culinary icons, Chef Jean-Luc Laurent brings more than two decades of unyielding gastronomic devotion to NEXTR Lumière Bistro.
              </p>
              <p className="text-[#968D7F]">
                His culinary vision strips away superfluous decoration in pursuit of pure, explosive flavor clarity. Whether slow-roasting Bresse pigeon with sour cherry reduction or crisping Mediterranean Loup de Mer over charcoal, Chef Laurent treats every ingredient with sovereign respect.
              </p>
            </div>

            {/* Accolades List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#221F1A]">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#DFBA73] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm text-[#FAF7F2]">Meilleur Ouvrier de France Finalist</h4>
                  <p className="text-xs text-[#7A7163]">Recognized for classical sauces and precision butchery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#DFBA73] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm text-[#FAF7F2]">Ordre du Mérite Agricole</h4>
                  <p className="text-xs text-[#7A7163]">Knighted for championing sustainable French terroir</p>
                </div>
              </div>
            </div>

            {/* Pastry Chef Co-Spotlight */}
            <div className="p-5 bg-[#141519] border border-[#27241E] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8174] font-mono block mb-1">
                  Haute Pâtisserie
                </span>
                <h4 className="font-serif text-base text-[#FAF7F2]">Hélène Mercier</h4>
                <p className="text-xs text-[#B5ABA0] font-light">
                  Executive Pastry Chef — Valrhona Grand Cru Confections & Tableside Soufflés
                </p>
              </div>
              <span className="text-xs font-serif italic text-[#DFBA73] shrink-0">
                Pâtisserie d&apos;Art
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
