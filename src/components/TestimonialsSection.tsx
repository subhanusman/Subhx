import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0B0D] border-b border-[#1E1C18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
            <Quote className="w-3.5 h-3.5 text-[#DFBA73]" />
            <span>Critical Reflections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight">
            Acclaim & <span className="italic text-[#DFBA73]">Guest Reflections</span>
          </h2>

          {/* Clear Illustrative Tag as required */}
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-[#141519] border border-[#2F2920] text-[11px] text-[#C5A880] tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFBA73]" />
            <span>Illustrative Demonstrations · Created for Showcase</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#121316] border border-[#25221D] p-8 flex flex-col justify-between hover:border-[#DFBA73]/40 transition-colors relative"
            >
              <div>
                {/* 5-Star Rating Indicator */}
                <div className="flex items-center gap-1 mb-6 text-[#DFBA73]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#DFBA73]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-base sm:text-lg text-[#E8DFD1] leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Source */}
              <div className="pt-6 border-t border-[#1E1C18] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm text-[#FAF7F2] font-medium">{item.author}</h4>
                  <p className="text-xs text-[#8A8173]">{item.title}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFBA73] font-mono block">
                    {item.source}
                  </span>
                  <span className="text-[10px] text-[#696257]">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
