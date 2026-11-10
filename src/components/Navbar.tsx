import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Calendar, Wine, Mail, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenSavedBookings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenSavedBookings }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Chef', href: '#chef' },
    { name: 'Hours', href: '#hours' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner: Fine-Dining Notice */}
      <div className="bg-[#121316] border-b border-[#2A2722] text-[#C5A880] text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 text-center tracking-wider uppercase font-medium">
        <span>Haute French-Mediterranean Gastronomy · Place Vendôme, Paris</span>
        <span className="mx-2 hidden sm:inline text-[#554D42]">·</span>
        <span className="hidden sm:inline text-[#E8DFD1]/80">Demonstration for NEXTR Digital Solutions &amp; Services</span>
      </div>

      {/* Top Navigation Bar: One-Row, Three-Zone Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0F12]/95 backdrop-blur-md border-b border-[#25221D] shadow-xl py-3'
            : 'bg-[#0E0F12]/85 backdrop-blur-sm border-b border-[#25221D]/50 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark (Single Text Element) */}
          <a
            href="#"
            className="flex items-center gap-1.5 group whitespace-nowrap shrink-0 text-decoration-none min-w-0"
          >
            <span className="font-serif text-lg sm:text-2xl font-normal tracking-wide text-[#FAF7F2] group-hover:text-[#DFBA73] transition-colors truncate max-w-[200px] xs:max-w-none">
              NEXTR <span className="italic text-[#DFBA73]">Lumière</span> Bistro
            </span>
          </a>

          {/* Zone 2: Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs tracking-widest uppercase font-medium text-[#D1C7BA]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#DFBA73] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* View demo bookings */}
            <button
              onClick={onOpenSavedBookings}
              className="text-xs uppercase tracking-wider text-[#A89F91] hover:text-[#FAF7F2] px-3 py-2 border border-[#2A2620] hover:border-[#DFBA73] transition-colors whitespace-nowrap shrink-0"
              title="View your saved demo bookings"
            >
              My Bookings
            </button>

            {/* WhatsApp Link with STRICT text "Visit" */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit NEXTR WhatsApp concierge"
              className="text-xs uppercase tracking-wider text-[#C5A880] hover:text-[#FAF7F2] px-3 py-2 border border-[#3A332A] rounded-none hover:border-[#C5A880] transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>{RESTAURANT_INFO.whatsappButtonText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Reserve CTA */}
            <button
              onClick={onOpenReservation}
              className="px-4 lg:px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#0E0F12] bg-[#DFBA73] hover:bg-[#E8C98B] transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0E0F12]" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile menu trigger & reserve button */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <button
              onClick={onOpenReservation}
              className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0E0F12] bg-[#DFBA73] hover:bg-[#E8C98B] whitespace-nowrap shrink-0"
            >
              Reserve
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#D1C7BA] hover:text-[#DFBA73] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#0E0F12]/98 backdrop-blur-lg flex flex-col justify-between p-6 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#25221D]">
              <span className="font-serif text-2xl text-[#FAF7F2]">
                NEXTR <span className="italic text-[#DFBA73]">Lumière</span> Bistro
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#A89F91] hover:text-[#FAF7F2]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-5 text-base tracking-widest uppercase font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#E0D7CB] hover:text-[#DFBA73] py-2 border-b border-[#1E1C18] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#7A7265] font-serif italic">Explore</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#25221D] flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-[#0E0F12] bg-[#DFBA73] hover:bg-[#E8C98B] flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-[#0E0F12]" />
              <span>Reserve a Table</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSavedBookings();
              }}
              className="w-full py-2.5 text-center text-xs uppercase tracking-wider text-[#FAF7F2] border border-[#2D2923] hover:border-[#DFBA73] flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>View My Demo Bookings</span>
            </button>

            <div className="flex items-center justify-between gap-3 pt-1">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center text-xs uppercase tracking-wider text-[#DFBA73] border border-[#3A332A] hover:border-[#DFBA73] transition-colors min-h-[44px] flex items-center justify-center"
              >
                {RESTAURANT_INFO.whatsappButtonText}
              </a>
              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="flex-1 py-2.5 text-center text-xs uppercase tracking-wider text-[#A89F91] border border-[#25221D] hover:text-[#FAF7F2] min-h-[44px] flex items-center justify-center"
              >
                Inquire
              </a>
            </div>

            <p className="text-[11px] text-center text-[#6A6356] pt-1">
              {RESTAURANT_INFO.footerCredit}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
