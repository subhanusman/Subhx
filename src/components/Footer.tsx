import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-[#0A0B0D] text-[#D1C7BA] border-t border-[#1E1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-[#1A1815]">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-normal tracking-wide block">
              NEXTR <span className="italic text-[#DFBA73]">Lumière</span> Bistro
            </span>
            <p className="text-xs sm:text-sm text-[#8C8375] font-light leading-relaxed max-w-sm">
              An haute French-Mediterranean culinary sanctuary on Place Vendôme. Celebrating seasonal terroir, 1,400 cellar vintages, and timeless hospitality.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{RESTAURANT_INFO.whatsappButtonText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0E0F12]" />
              </a>

              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="px-4 py-2 border border-[#2F2A22] hover:border-[#DFBA73] text-xs text-[#FAF7F2] uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#DFBA73]" />
                <span>Email Concierge</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DFBA73] font-medium">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#A89F91]">
              <li><a href="#about" className="hover:text-[#FAF7F2] transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-[#FAF7F2] transition-colors">Seasonal Menu</a></li>
              <li><a href="#signatures" className="hover:text-[#FAF7F2] transition-colors">Signatures</a></li>
              <li><a href="#gallery" className="hover:text-[#FAF7F2] transition-colors">Gallery</a></li>
              <li><a href="#chef" className="hover:text-[#FAF7F2] transition-colors">Chef Laurent</a></li>
              <li><a href="#hours" className="hover:text-[#FAF7F2] transition-colors">Service Hours</a></li>
              <li><a href="#contact" className="hover:text-[#FAF7F2] transition-colors">Contact Concierge</a></li>
            </ul>
          </div>

          {/* Experience Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DFBA73] font-medium">Gastronomy</h4>
            <ul className="space-y-2 text-xs text-[#A89F91]">
              <li><button onClick={onOpenReservation} className="hover:text-[#FAF7F2] text-left">Table Reservations</button></li>
              <li><span className="text-[#6D6559]">Grand Salon Dining</span></li>
              <li><span className="text-[#6D6559]">Le Starlit Terrace</span></li>
              <li><span className="text-[#6D6559]">Chef's Counter</span></li>
              <li><span className="text-[#6D6559]">Sommelier Tastings</span></li>
              <li><span className="text-[#6D6559]">Private Buyouts</span></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DFBA73] font-medium">Paris Address</h4>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              {RESTAURANT_INFO.address}<br />
              Valet portico open during all services.
            </p>
            <div className="pt-2 text-xs text-[#8A8174]">
              <span className="block text-[#FAF7F2] font-medium">Direct Inquiries:</span>
              <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#DFBA73] hover:underline">
                {RESTAURANT_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Demo Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6356]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {RESTAURANT_INFO.brandName}. All rights reserved.
          </p>

          <p className="font-medium text-[#C5A880] text-center sm:text-right">
            {RESTAURANT_INFO.footerCredit}
          </p>
        </div>

        <div className="mt-4 text-[11px] text-[#554E43] text-center">
          Interactive fine-dining website demonstration crafted for portfolio evaluation. All reservations are simulated.
        </div>
      </div>
    </footer>
  );
};
