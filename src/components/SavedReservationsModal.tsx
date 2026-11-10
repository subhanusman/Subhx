import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Trash2, Download, Copy, Check, Info, ArrowRight } from 'lucide-react';
import { ReservationData } from './ReservationConfirmationModal';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface SavedReservationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewBookingClick: () => void;
}

export const SavedReservationsModal: React.FC<SavedReservationsModalProps> = ({
  isOpen,
  onClose,
  onNewBookingClick,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const getReservations = (): ReservationData[] => {
    try {
      const data = localStorage.getItem('lumiere_demo_reservations');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const [reservations, setReservations] = useState<ReservationData[]>(getReservations());

  const handleDelete = (id: string) => {
    const updated = reservations.filter((r) => r.id !== id);
    setReservations(updated);
    try {
      localStorage.setItem('lumiere_demo_reservations', JSON.stringify(updated));
    } catch {
      // safe
    }
  };

  const handleClearAll = () => {
    setReservations([]);
    try {
      localStorage.removeItem('lumiere_demo_reservations');
    } catch {
      // safe
    }
  };

  const handleCopy = (r: ReservationData) => {
    const text = `NEXTR Lumière Bistro Demo Booking\nRef: ${r.id}\nGuest: ${r.name}\nParty: ${r.guests} Guests\nDate: ${r.date} at ${r.time}\nSeating: ${r.seatingArea}\nOccasion: ${r.occasion}\n*Simulated demonstration by NEXTR Digital Solutions & Services*`;
    navigator.clipboard.writeText(text);
    setCopiedId(r.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadIcs = (r: ReservationData) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NEXTR Digital Solutions//NEXTR Lumière Bistro Demo//EN',
      'BEGIN:VEVENT',
      `UID:${r.id}@nextrsolutions.com`,
      `SUMMARY:NEXTR Lumière Bistro Demo Reservation (${r.seatingArea})`,
      `DESCRIPTION:Simulated dining experience for ${r.guests} guests. Occasion: ${r.occasion}. Demonstration created by NEXTR Digital Solutions & Services.`,
      `LOCATION:${RESTAURANT_INFO.address}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Lumiere_Reservation_${r.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#121316] border border-[#3A332A] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#24211B] flex items-center justify-between bg-[#15161C] shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#DFBA73] font-mono block">
              Local Browser Cache
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
              My Simulated Bookings ({reservations.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9E9384] hover:text-[#FAF7F2] rounded-full hover:bg-[#1E1F26]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="px-6 py-3 bg-[#18191E] border-b border-[#24211B] flex items-center gap-2 text-xs text-[#C5A880] shrink-0">
          <Info className="w-4 h-4 shrink-0 text-[#DFBA73]" />
          <span>These are local demonstration reservations created during your session.</span>
        </div>

        {/* Content list */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {reservations.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-[#24211B] p-6">
              <Calendar className="w-8 h-8 text-[#5E5649] mx-auto mb-3" />
              <p className="font-serif text-lg text-[#FAF7F2]">No demo bookings found</p>
              <p className="text-xs text-[#8A8174] mt-1 mb-6 max-w-sm mx-auto">
                You haven&apos;t simulated any table bookings yet. Try our interactive reservation form!
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNewBookingClick();
                }}
                className="px-5 py-2.5 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-1.5"
              >
                <span>Book a Demo Table</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            reservations.map((res) => (
              <div
                key={res.id}
                className="bg-[#16171D] border border-[#26231E] p-4 sm:p-5 transition-colors hover:border-[#3D372E]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#211E19] gap-2">
                  <div>
                    <span className="font-mono text-xs text-[#DFBA73] font-semibold">{res.id}</span>
                    <h4 className="font-serif text-base text-[#FAF7F2] mt-0.5">{res.name}</h4>
                  </div>
                  <span className="text-xs text-[#8A8174] font-medium self-start sm:self-auto">
                    {res.guests} {res.guests === 1 ? 'Guest' : 'Guests'} · {res.seatingArea}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#A89F91] py-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#665F53] block">Date</span>
                    <span className="text-[#FAF7F2]">{res.date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#665F53] block">Time</span>
                    <span className="text-[#FAF7F2]">{res.time}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#665F53] block">Occasion</span>
                    <span className="text-[#FAF7F2] truncate block">{res.occasion}</span>
                  </div>
                </div>

                {res.specialRequests && (
                  <p className="text-xs text-[#8A8174] italic pb-3">
                    Note: &ldquo;{res.specialRequests}&rdquo;
                  </p>
                )}

                <div className="pt-3 border-t border-[#211E19] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(res)}
                      className="px-3 py-1.5 bg-[#1C1D24] hover:bg-[#252630] border border-[#2E2B25] text-xs text-[#FAF7F2] flex items-center gap-1.5 transition-colors"
                      title="Copy summary"
                    >
                      {copiedId === res.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[11px] text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#DFBA73]" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handleDownloadIcs(res)}
                      className="px-3 py-1.5 bg-[#1C1D24] hover:bg-[#252630] border border-[#2E2B25] text-xs text-[#FAF7F2] flex items-center gap-1.5 transition-colors"
                      title="Download .ICS invite"
                    >
                      <Download className="w-3.5 h-3.5 text-[#DFBA73]" />
                      <span className="text-[11px]">.ICS</span>
                    </button>
                  </div>

                  <button
                    onClick={() => handleDelete(res.id)}
                    className="p-1.5 text-[#736B5E] hover:text-rose-400 transition-colors"
                    title="Remove from history"
                    aria-label="Delete reservation"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {reservations.length > 0 && (
          <div className="p-4 bg-[#15161C] border-t border-[#24211B] flex items-center justify-between shrink-0">
            <button
              onClick={handleClearAll}
              className="text-xs text-[#8A8174] hover:text-rose-400 transition-colors"
            >
              Clear All Demo History
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#3A332A] hover:border-[#DFBA73] text-xs uppercase tracking-wider text-[#FAF7F2] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
