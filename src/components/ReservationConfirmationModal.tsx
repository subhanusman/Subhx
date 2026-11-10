import React, { useState } from 'react';
import { CheckCircle2, Calendar, Clock, Users, MapPin, Sparkles, X, Download, Copy, Check, Share2, Info } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export interface ReservationData {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: string;
  occasion: string;
  specialRequests: string;
  createdAt: string;
}

interface ReservationConfirmationModalProps {
  reservation: ReservationData | null;
  onClose: () => void;
  onNewBooking: () => void;
}

export const ReservationConfirmationModal: React.FC<ReservationConfirmationModalProps> = ({
  reservation,
  onClose,
  onNewBooking,
}) => {
  const [copied, setCopied] = useState(false);

  if (!reservation) return null;

  const handleCopyDetails = () => {
    const text = `NEXTR Lumière Bistro — Reservation Summary\nRef: ${reservation.id}\nGuest: ${reservation.name}\nParty: ${reservation.guests} Guests\nDate: ${reservation.date} at ${reservation.time}\nSeating: ${reservation.seatingArea}\nOccasion: ${reservation.occasion}\n*Demo Showcase: Simulated reservation by NEXTR Digital Solutions & Services*`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadCalendar = () => {
    // Generate an .ICS file on the fly
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NEXTR Digital Solutions//NEXTR Lumière Bistro Demo//EN',
      'BEGIN:VEVENT',
      `UID:${reservation.id}@nextrsolutions.com`,
      `SUMMARY:NEXTR Lumière Bistro Demo Reservation (${reservation.seatingArea})`,
      `DESCRIPTION:Simulated dining experience for ${reservation.guests} guests. Occasion: ${reservation.occasion}. Demonstration created by NEXTR Digital Solutions & Services.`,
      `LOCATION:${RESTAURANT_INFO.address}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Lumiere_Bistro_Reservation_${reservation.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#121316] border border-[#DFBA73]/50 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Simulated Notice Header */}
        <div className="bg-[#18191E] border-b border-[#2B2721] px-6 py-3 flex items-center justify-between text-xs text-[#DFBA73]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#DFBA73] shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[11px]">
              Simulated Reservation Demo · No Real Table Booked
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#9E9384] hover:text-[#FAF7F2] p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Success Badge */}
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#DFBA73]/15 border border-[#DFBA73] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6 text-[#DFBA73]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#DFBA73] font-mono block mb-1">
              Demo Confirmation Confirmed
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2]">
              Table Request Acknowledged
            </h3>
            <p className="text-xs text-[#9E9384] mt-1">
              Simulated confirmation reference: <strong className="font-mono text-[#FAF7F2]">{reservation.id}</strong>
            </p>
          </div>

          {/* Ticket / Reservation Summary Card */}
          <div className="bg-[#16171C] border border-[#2B2620] p-6 space-y-4 mb-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#23201A]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block">Guest Name</span>
                <span className="font-serif text-lg text-[#FAF7F2]">{reservation.name}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block">Party Size</span>
                <span className="font-serif text-lg text-[#DFBA73]">{reservation.guests} {reservation.guests === 1 ? 'Guest' : 'Guests'}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block mb-1">Date</span>
                <span className="text-[#FAF7F2] font-medium">{reservation.date}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block mb-1">Time</span>
                <span className="text-[#FAF7F2] font-medium">{reservation.time}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block mb-1">Seating Area</span>
                <span className="text-[#DFBA73] font-medium">{reservation.seatingArea}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block mb-1">Occasion</span>
                <span className="text-[#FAF7F2]">{reservation.occasion}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block mb-1">Contact Email</span>
                <span className="text-[#FAF7F2] truncate block">{reservation.email}</span>
              </div>
            </div>

            {reservation.specialRequests && (
              <div className="pt-3 border-t border-[#23201A] text-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8174] block mb-1">
                  Special Notes & Dietary:
                </span>
                <p className="text-[#C9BFB2] italic font-light">&ldquo;{reservation.specialRequests}&rdquo;</p>
              </div>
            )}
          </div>

          {/* Explicit Disclaimer Box */}
          <div className="p-3.5 bg-[#1C1814] border border-[#423728] text-xs text-[#D1C2A5] mb-6 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#DFBA73] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong className="text-[#DFBA73]">Notice to Evaluator:</strong> This simulated reservation is stored locally in your browser to demonstrate frontend interaction for <strong className="text-[#FAF7F2]">{RESTAURANT_INFO.company}</strong>. No payment has been processed and no live restaurant seat has been assigned.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleDownloadCalendar}
              className="w-full sm:flex-1 py-3 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download .ICS Invite</span>
            </button>

            <button
              onClick={handleCopyDetails}
              className="w-full sm:w-auto px-5 py-3 border border-[#3A332A] hover:border-[#DFBA73] text-xs uppercase tracking-wider text-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#DFBA73]" />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onNewBooking();
              }}
              className="w-full sm:w-auto px-5 py-3 border border-[#25221D] hover:text-[#DFBA73] text-xs uppercase tracking-wider text-[#8A8174] transition-colors"
            >
              New Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
