"use client"; // Add this because of useState

import { useState } from 'react'; // Import useState
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { Footer } from '@/components/common/Footer';
import { ContactSection } from '@/components/landing/ContactSection';
import { ContactModal } from '@/components/common/ContactModal'; // Import ContactModal

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);

  const handleOpenContactModal = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedServiceTitle(undefined); // Clear the service title when closing
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onContactUsClick={() => handleOpenContactModal()} />
      <main className="flex-grow">
        <HeroSection onOpenContactModal={handleOpenContactModal} />
        <ServicesSection onOpenContactModal={handleOpenContactModal} />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        serviceTitle={selectedServiceTitle}
      />
    </div>
  );
}
