import React from 'react';
import { X, Wine, Clock, Flame, AlertCircle, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onRequestReservation: (dishName: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onRequestReservation,
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#121316] border border-[#3A332A] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#0E0F12]/80 hover:bg-[#0E0F12] text-[#C9BFB2] hover:text-[#FAF7F2] transition-colors rounded-full border border-[#2D2821]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Visual Column */}
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto bg-[#18191E] min-h-[260px]">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent md:hidden" />
            
            {/* Price overlay on image */}
            <div className="absolute bottom-4 left-4 bg-[#0E0F12]/90 backdrop-blur-md px-3 py-1.5 border border-[#3A332A] text-sm font-semibold text-[#DFBA73] tabular-nums font-mono">
              ${dish.price}
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#DFBA73] mb-1 font-mono">
                <span>{dish.category}</span>
                <span aria-hidden="true">·</span>
                <span>Haute Gastronomie</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-normal mb-1">
                {dish.name}
              </h3>

              {dish.frenchName && (
                <p className="font-serif italic text-sm text-[#C5A880] mb-4">
                  {dish.frenchName}
                </p>
              )}

              <p className="text-xs sm:text-sm text-[#B8AD9E] font-light leading-relaxed mb-6">
                {dish.description}
              </p>

              {/* Ingredients List */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider text-[#7A7264] block mb-2 font-medium">
                  Artisanal Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#E0D7CB]">
                  {dish.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-2.5 py-1 bg-[#18191E] border border-[#26231D] text-[11px]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sommelier Pairing */}
              <div className="p-3.5 bg-[#17181D] border border-[#2D2821] mb-6">
                <div className="flex items-start gap-2.5 text-xs text-[#C5A880]">
                  <Wine className="w-4 h-4 shrink-0 mt-0.5 text-[#DFBA73]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8072] block font-sans">
                      Sommelier Cellar Recommendation:
                    </span>
                    <span className="font-serif italic text-sm text-[#FAF7F2]">
                      {dish.winePairing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dietary & Details Row */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#8A8072] mb-6 pt-3 border-t border-[#1E1C18]">
                {dish.preparationTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#DFBA73]" />
                    <span>Prep: {dish.preparationTime}</span>
                  </div>
                )}
                {dish.calories && (
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#DFBA73]" />
                    <span>Est. {dish.calories}</span>
                  </div>
                )}
                {dish.allergens.length > 0 && (
                  <div className="col-span-2 flex items-center gap-1.5 text-[#D4AF37]/90 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5 text-[#DFBA73] shrink-0" />
                    <span>Allergens: {dish.allergens.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#221F1A]">
              <button
                onClick={() => {
                  onRequestReservation(dish.name);
                  onClose();
                }}
                className="flex-1 py-3 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve with this Dish</span>
              </button>

              <button
                onClick={onClose}
                className="py-3 px-4 border border-[#3A332A] hover:border-[#DFBA73] text-xs uppercase tracking-wider text-[#A89F91] hover:text-[#FAF7F2] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
