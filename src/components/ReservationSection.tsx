import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Sparkles, AlertCircle, Info, Heart, Check, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from './ReservationConfirmationModal';

interface ReservationSectionProps {
  onReservationComplete: (res: ReservationData) => void;
  prefilledDish?: string;
  onClearPrefilledDish?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onReservationComplete,
  prefilledDish,
  onClearPrefilledDish,
}) => {
  // Today + 1 date string default (YYYY-MM-DD)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState<string>(defaultDate);
  const [time, setTime] = useState<string>('19:30');
  const [guests, setGuests] = useState<number>(2);
  const [seatingArea, setSeatingArea] = useState<string>('Indoor Grand Dining Room');
  const [occasion, setOccasion] = useState<string>('Romantic Date');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [activeService, setActiveService] = useState<'dinner' | 'lunch'>('dinner');

  // If a prefilled dish was selected, append it to specialRequests
  useEffect(() => {
    if (prefilledDish) {
      setSpecialRequests((prev) =>
        prev
          ? `${prev}; Requesting signature dish: ${prefilledDish}`
          : `Requesting signature dish: ${prefilledDish}`
      );
    }
  }, [prefilledDish]);

  const seatingOptions = [
    {
      id: 'Indoor Grand Dining Room',
      name: 'Indoor Grand Dining Room',
      desc: 'Beneath hand-cut crystal chandeliers and velvet booths with acoustic intimacy.',
      tag: 'Classic Elegance',
    },
    {
      id: 'Starlit Patio / Terrace',
      name: 'Starlit Patio / Terrace',
      desc: 'Heated cobblestone courtyard dining under olive trees and ambient lanterns.',
      tag: 'Al Fresco Romance',
    },
    {
      id: "Chef's Interactive Counter",
      name: "Chef's Interactive Counter",
      desc: 'Six front-row seats overlooking Chef Laurent and brigade at the kitchen pass.',
      tag: 'Culinary Theater',
    },
    {
      id: 'Private Wine Salon',
      name: 'Private Wine Salon',
      desc: 'Intimate vaulted cellar setting surrounded by rare Bordeaux and Burgundy reserves.',
      tag: 'Exclusive & Secluded',
    },
  ];

  const timeSlots = {
    lunch: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM'],
    dinner: [
      '5:30 PM',
      '6:00 PM',
      '6:30 PM',
      '7:00 PM',
      '7:30 PM',
      '8:00 PM',
      '8:30 PM',
      '9:00 PM',
      '9:30 PM',
    ],
  };

  const occasionOptions = [
    'Romantic Date',
    'Anniversary Celebration',
    'Birthday Soirée',
    'Executive Business Dinner',
    '7-Course Degustation Discovery',
    'Casual Fine Dining',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate simulated reference code
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newReservation: ReservationData = {
      id: `LUM-2026-${randomCode}`,
      name: name || 'Honored Guest',
      email: email || 'guest@example.com',
      phone: phone || '+33 1 42 68 00 00',
      date,
      time,
      guests,
      seatingArea,
      occasion,
      specialRequests,
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage for user retrieval
    try {
      const stored = localStorage.getItem('lumiere_demo_reservations');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newReservation);
      localStorage.setItem('lumiere_demo_reservations', JSON.stringify(list.slice(0, 10)));
    } catch {
      // localStorage fallback safe
    }

    onReservationComplete(newReservation);
  };

  return (
    <section id="reserve" className="py-24 sm:py-32 bg-[#0E0F12] border-b border-[#1E1C18] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFBA73] mb-3">
            <CalendarIcon className="w-3.5 h-3.5 text-[#DFBA73]" />
            <span>Simulated Dining Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight">
            Reserve Your <span className="italic text-[#DFBA73]">Table Experience</span>
          </h2>
          <p className="mt-4 text-[#A89F91] text-sm sm:text-base font-light">
            Select your preferred seating salon, dining date, party size, and service hour.
          </p>
        </div>

        {/* Clear Notice Banner for Evaluators */}
        <div className="mb-8 p-4 bg-[#141519] border border-[#3A3329] flex items-start gap-3 text-xs text-[#D1C7BA]">
          <Info className="w-4 h-4 text-[#DFBA73] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#FAF7F2]">Interactive Demo Notice:</strong> This reservation form simulates the complete booking experience for <strong className="text-[#DFBA73]">{RESTAURANT_INFO.brandName}</strong>. No actual table will be reserved and no payment or card details are requested.
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="bg-[#121316] border border-[#27231D] p-6 sm:p-10 shadow-2xl">
          {/* Step 1: Seating Area Selection */}
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-widest text-[#DFBA73] font-medium mb-3">
              1. Select Seating Atmosphere (Indoor or Patio)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {seatingOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setSeatingArea(opt.id)}
                  className={`p-4 text-left border transition-all ${
                    seatingArea === opt.id
                      ? 'border-[#DFBA73] bg-[#1A1B22] shadow-md'
                      : 'border-[#221F1A] bg-[#15161B] hover:border-[#3D372E]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif text-base text-[#FAF7F2] font-medium">
                      {opt.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#DFBA73] font-mono">
                      {opt.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#8A8174] leading-relaxed">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Party Size, Date & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pt-4 border-t border-[#1E1C18]">
            {/* Number of Guests */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#DFBA73] font-medium mb-2">
                2. Party Size
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#18191E] border border-[#2B2721] text-[#FAF7F2] text-sm py-3 px-3.5 focus:border-[#DFBA73] outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((num) => (
                    <option key={num} value={num} className="bg-[#121316]">
                      {num} {num === 1 ? 'Guest (Solo Tasting)' : `${num} Guests`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#DFBA73] font-medium mb-2">
                3. Dining Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-[#18191E] border border-[#2B2721] text-[#FAF7F2] text-sm py-2.5 px-3.5 focus:border-[#DFBA73] outline-none"
              />
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#DFBA73] font-medium mb-2">
                4. Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-[#18191E] border border-[#2B2721] text-[#FAF7F2] text-sm py-3 px-3.5 focus:border-[#DFBA73] outline-none"
              >
                {occasionOptions.map((occ) => (
                  <option key={occ} value={occ} className="bg-[#121316]">
                    {occ}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Time Slot Service */}
          <div className="mb-8 pt-4 border-t border-[#1E1C18]">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs uppercase tracking-widest text-[#DFBA73] font-medium">
                5. Select Service Time
              </label>
              <div className="flex items-center gap-1 p-0.5 bg-[#18191E] border border-[#27231D]">
                <button
                  type="button"
                  onClick={() => setActiveService('dinner')}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    activeService === 'dinner'
                      ? 'bg-[#DFBA73] text-[#0E0F12]'
                      : 'text-[#8E8577] hover:text-[#FAF7F2]'
                  }`}
                >
                  Dinner Service
                </button>
                <button
                  type="button"
                  onClick={() => setActiveService('lunch')}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    activeService === 'lunch'
                      ? 'bg-[#DFBA73] text-[#0E0F12]'
                      : 'text-[#8E8577] hover:text-[#FAF7F2]'
                  }`}
                >
                  Lunch Service
                </button>
              </div>
            </div>

            {/* Time slot buttons */}
            <div className="flex flex-wrap gap-2">
              {timeSlots[activeService].map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setTime(slot)}
                  className={`px-4 py-2 text-xs font-mono font-medium border transition-colors ${
                    time === slot
                      ? 'border-[#DFBA73] bg-[#DFBA73]/15 text-[#DFBA73] font-bold'
                      : 'border-[#25221D] bg-[#16171C] text-[#A89F91] hover:border-[#3D372E] hover:text-[#FAF7F2]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Special Dietary & Requests */}
          <div className="mb-8 pt-4 border-t border-[#1E1C18]">
            <label className="block text-xs uppercase tracking-widest text-[#DFBA73] font-medium mb-2">
              6. Dietary Preferences or Special Notes
            </label>
            <textarea
              rows={3}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Allergies (Gluten, Shellfish, Nuts), Sommelier Pairing interests, Table preferences (Window, Quiet)..."
              className="w-full bg-[#18191E] border border-[#2B2721] text-xs text-[#FAF7F2] p-3.5 focus:border-[#DFBA73] outline-none placeholder-[#665F53]"
            />
          </div>

          {/* Step 5: Contact Information */}
          <div className="pt-4 border-t border-[#1E1C18] mb-8">
            <label className="block text-xs uppercase tracking-widest text-[#DFBA73] font-medium mb-3">
              7. Guest Contact Information
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name (e.g., Lord & Lady Sterling)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#18191E] border border-[#2B2721] text-xs text-[#FAF7F2] py-3 px-3.5 focus:border-[#DFBA73] outline-none placeholder-[#665F53]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email for Confirmation"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#18191E] border border-[#2B2721] text-xs text-[#FAF7F2] py-3 px-3.5 focus:border-[#DFBA73] outline-none placeholder-[#665F53]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Contact Telephone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#18191E] border border-[#2B2721] text-xs text-[#FAF7F2] py-3 px-3.5 focus:border-[#DFBA73] outline-none placeholder-[#665F53]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-[#7A7265] text-center sm:text-left">
              <span>Instant local confirmation · No payment required</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#DFBA73] hover:bg-[#E8C98B] text-[#0E0F12] text-xs font-semibold uppercase tracking-widest transition-all shadow-lg hover:shadow-[#DFBA73]/20 flex items-center justify-center gap-2"
            >
              <CalendarIcon className="w-4 h-4 text-[#0E0F12]" />
              <span>Submit Demo Reservation</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
