import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'interior', label: 'Grand Salon' },
    { id: 'terrace', label: 'Starlit Terrace' },
    { id: 'kitchen', label: "Chef's Brigade" },
    { id: 'plating', label: 'Haute Plating' },
    { id: 'cellar', label: 'Private Cellar' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0A0B0D] border-b border-[#1E1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#DFBA73]" />
            <span>Visual Atmosphere</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight">
            The World of <span className="italic text-[#DFBA73]">Lumière Bistro</span>
          </h2>
          <p className="mt-4 text-[#A89F91] text-sm sm:text-base font-light">
            Glimpses into our vaulted dining salons, serene courtyard terrace, artisanal kitchen pass, and private reserve cellar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedPhotoIndex(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap shrink-0 transition-colors border ${
                activeCategory === cat.id
                  ? 'border-[#DFBA73] bg-[#DFBA73] text-[#0E0F12] font-semibold'
                  : 'border-[#24211B] text-[#9E9384] hover:border-[#3D372E] hover:text-[#FAF7F2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group cursor-pointer relative aspect-[4/3] bg-[#141519] overflow-hidden border border-[#221F1A] hover:border-[#DFBA73]/60 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12]/90 via-[#0E0F12]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#DFBA73] font-mono mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-[#FAF7F2] leading-snug">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#DFBA73]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge perspective</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 z-20 p-2.5 bg-[#121316]/80 text-[#FAF7F2] hover:text-[#DFBA73] border border-[#3A332A]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#121316]/80 hover:bg-[#121316] text-[#FAF7F2] hover:text-[#DFBA73] border border-[#3A332A] transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#121316]/80 hover:bg-[#121316] text-[#FAF7F2] hover:text-[#DFBA73] border border-[#3A332A] transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Card */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedPhotoIndex].image}
              alt={filteredItems[selectedPhotoIndex].title}
              className="max-h-[72vh] max-w-full object-contain border border-[#2D2821]"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-[#DFBA73] font-mono block mb-1">
                {filteredItems[selectedPhotoIndex].category} · {selectedPhotoIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] mb-1">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A89F91] font-light">
                {filteredItems[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
