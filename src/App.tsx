import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SignaturesSection } from './components/SignaturesSection';
import { MenuSection } from './components/MenuSection';
import { DishDetailModal } from './components/DishDetailModal';
import { GallerySection } from './components/GallerySection';
import { ChefSection } from './components/ChefSection';
import { ReservationSection } from './components/ReservationSection';
import { ReservationConfirmationModal, ReservationData } from './components/ReservationConfirmationModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HoursAndEtiquetteSection } from './components/HoursAndEtiquetteSection';
import { FaqAndContactSection } from './components/FaqAndContactSection';
import { Footer } from './components/Footer';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [prefilledDish, setPrefilledDish] = useState<string | undefined>(undefined);
  const [activeReservation, setActiveReservation] = useState<ReservationData | null>(null);

  const scrollToReservation = () => {
    const section = document.getElementById('reserve');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestDishReservation = (dishName: string) => {
    setPrefilledDish(dishName);
    scrollToReservation();
  };

  const handleReservationComplete = (reservation: ReservationData) => {
    setActiveReservation(reservation);
  };

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#F3EFEA] flex flex-col font-sans selection:bg-[#DFBA73]/30 selection:text-[#FAF7F2]">
      {/* Top Navigation */}
      <Navbar onOpenReservation={scrollToReservation} />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection onOpenReservation={scrollToReservation} />

        {/* About Restaurant & Heritage */}
        <AboutSection />

        {/* Signature Dishes Showcase */}
        <SignaturesSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={scrollToReservation}
        />

        {/* Complete Food & Drinks Menu with Category Filters */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={scrollToReservation}
        />

        {/* Interactive Gallery & Lightbox */}
        <GallerySection />

        {/* Chef Introduction */}
        <ChefSection />

        {/* Table Reservation Interface */}
        <ReservationSection
          onReservationComplete={handleReservationComplete}
          prefilledDish={prefilledDish}
          onClearPrefilledDish={() => setPrefilledDish(undefined)}
        />

        {/* Guest Testimonials (Clearly identified as Illustrative) */}
        <TestimonialsSection />

        {/* Service Hours & Etiquette */}
        <HoursAndEtiquetteSection />

        {/* FAQ & Contact Section */}
        <FaqAndContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={scrollToReservation} />

      {/* Modals */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onRequestReservation={handleRequestDishReservation}
      />

      <ReservationConfirmationModal
        reservation={activeReservation}
        onClose={() => setActiveReservation(null)}
        onNewBooking={() => {
          setActiveReservation(null);
          scrollToReservation();
        }}
      />
    </div>
  );
}
