import React, { useState, useMemo } from 'react';
import { Search, Filter, Wine, Sparkles, ChevronRight, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

type MenuCategory = 'all' | 'starters' | 'mains' | 'signatures' | 'desserts' | 'drinks';

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish, onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'signatures', label: "Chef's Signatures" },
    { id: 'starters', label: "Hors d'œuvres" },
    { id: 'mains', label: 'Les Plats Principaux' },
    { id: 'desserts', label: 'Douceurs & Desserts' },
    { id: 'drinks', label: 'Cocktails & Cellar' },
  ];

  const dietaryFilters = [
    { id: 'all', label: 'All Diets' },
    { id: 'Gluten-Free', label: 'Gluten-Free' },
    { id: 'Vegetarian', label: 'Vegetarian' },
    { id: 'Chef Selection', label: "Chef's Pick" },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.frenchName && item.frenchName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDietary =
        selectedDietary === 'all' || item.dietary.includes(selectedDietary as any);

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0E0F12] border-b border-[#1E1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
            <span>Gastronomic Tasting & À La Carte</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight">
            The Seasonal <span className="italic text-[#DFBA73]">Carte & Cellar</span>
          </h2>
          <p className="mt-4 text-[#A89F91] text-sm sm:text-base font-light">
            Crafted daily using micro-seasonal ingredients, delicate reductions, and artisanal pairings.
          </p>
        </div>

        {/* Filter Controls: Category Segmented Bar & Dietary Options */}
        <div className="mb-12 space-y-6">
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 border-b border-[#221F1A]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MenuCategory)}
                className={`px-4 sm:px-5 py-2.5 text-xs uppercase tracking-wider font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 -mb-[2px] ${
                  activeCategory === cat.id
                    ? 'border-[#DFBA73] text-[#FAF7F2] font-semibold bg-[#18191E]'
                    : 'border-transparent text-[#8E8577] hover:text-[#D4C8B8] hover:border-[#4A4235]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar & Dietary toggle row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7A7265] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes, truffle, wagyu, caviar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121316] border border-[#25221D] focus:border-[#DFBA73] text-xs text-[#FAF7F2] placeholder-[#6A6255] pl-10 pr-4 py-2.5 outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7A7265] hover:text-[#FAF7F2]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Segment */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-[11px] uppercase tracking-wider text-[#736B5F] whitespace-nowrap shrink-0">
                Dietary:
              </span>
              {dietaryFilters.map((df) => (
                <button
                  key={df.id}
                  onClick={() => setSelectedDietary(df.id)}
                  className={`px-3 py-1 text-xs whitespace-nowrap shrink-0 border transition-colors ${
                    selectedDietary === df.id
                      ? 'border-[#DFBA73] bg-[#DFBA73]/10 text-[#DFBA73]'
                      : 'border-[#24211B] text-[#8C8274] hover:border-[#3D372E] hover:text-[#FAF7F2]'
                  }`}
                >
                  {df.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-[#24211B] bg-[#121316]/50 p-8">
            <p className="font-serif text-xl text-[#FAF7F2] mb-2">No culinary items match your criteria</p>
            <p className="text-xs text-[#8C8274] mb-4">Try clearing the search query or selecting another dietary preference.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDietary('all');
                setActiveCategory('all');
              }}
              className="px-4 py-2 text-xs uppercase tracking-widest text-[#0E0F12] bg-[#DFBA73]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                onClick={() => onSelectDish(dish)}
                className="group cursor-pointer bg-[#121316] border border-[#221F1A] hover:border-[#DFBA73]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Dish Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#18191D]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-70" />

                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-[#0E0F12]/90 backdrop-blur-sm px-2.5 py-1 border border-[#3A332A] text-xs font-semibold text-[#DFBA73] tabular-nums font-mono">
                      ${dish.price}
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-2.5 left-3 text-[10px] uppercase tracking-widest text-[#C5A880]/90">
                      {dish.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F2] group-hover:text-[#DFBA73] transition-colors">
                        {dish.name}
                      </h3>
                    </div>

                    {dish.frenchName && (
                      <p className="font-serif italic text-xs text-[#8E8475] mb-2 truncate">
                        {dish.frenchName}
                      </p>
                    )}

                    <p className="text-xs text-[#A89F91] leading-relaxed line-clamp-2 mb-4 font-light">
                      {dish.description}
                    </p>

                    {/* Clean unboxed metadata: Ingredients preview */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#786F62] pt-3 border-t border-[#1C1A16]">
                      {dish.ingredients.slice(0, 3).map((ing, i) => (
                        <span key={ing} className="flex items-center gap-1">
                          <span>{ing}</span>
                          {i < Math.min(dish.ingredients.length, 3) - 1 && (
                            <span aria-hidden="true" className="text-[#4A4338]">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs text-[#DFBA73] font-medium border-t border-transparent group-hover:border-[#1E1C18]">
                  <span className="group-hover:underline">View details & pairing</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Degustation Note & Reservation CTA */}
        <div className="mt-16 p-8 sm:p-10 border border-[#2D2821] bg-[#121316] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#DFBA73] font-medium block">
              7-Course Grand Degustation Menu
            </span>
            <h3 className="font-serif text-2xl text-[#FAF7F2]">
              Chef Laurent&apos;s Blind Tasting Experience ($220 / guest)
            </h3>
            <p className="text-xs sm:text-sm text-[#9C9283] max-w-xl">
              An unscripted seven-course gastronomic journey paired with rare Premier Cru wines selected tableside by our Head Sommelier.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="px-6 py-3.5 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-colors shrink-0 whitespace-nowrap"
          >
            Inquire for Tasting
          </button>
        </div>
      </div>
    </section>
  );
};
