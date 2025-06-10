
"use client";

import { useState } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ContactModal } from '@/components/common/ContactModal';

export default function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onContactUsClick={handleOpenContactModal} />
      <main
        className="flex-grow bg-background py-12 md:py-20 lg:py-28"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--border)) 0.5px, transparent 0.5px), linear-gradient(to right, hsl(var(--border)) 0.5px, transparent 0.5px)',
          backgroundSize: '15px 15px',
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary uppercase">
                About Dharita
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl text-lg">
                We stand at the intersection of innovation and real estate where dreams take shape and technology brings imagination to life.
                <br />
                Driven by purpose and powered by creativity, we’re transforming how spaces are built, secured, and experienced not just creating properties, but possibilities, where technology builds what the heart imagines.
              </p>
            </div>

            <div className="grid gap-10 md:gap-12 lg:gap-16">
              <div className="space-y-6 p-6 md:p-8 bg-card rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-primary">Who We Are</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We’re a team of passionate innovators, skilled engineers, and experienced property professionals all working together with one mission:
                  <br />
                  To transform how properties are designed, built, secured, and experienced.
                  <br /><br />
                  We understand that real estate isn’t just about structures  it’s about people, aspirations, and the everyday experiences tied to spaces. That’s why we blend deep industry knowledge with cutting-edge technology to create smart, reliable, and future-ready solutions.
                  <br /><br />
                  Whether it’s virtual property tours, advanced site security, or end-to-end construction services, everything we build is designed to solve real problems and unlock new possibilities.
                  <br /><br />
                  At Dharita, we don’t just keep up with change — we lead it.
                  <br />
                  Because for us, technology isn’t just a tool — it’s the bridge between imagination and reality.
                  <br />
                  This is where technology builds what the heart imagines.
                </p>
              </div>

              <div className="space-y-6 p-6 md:p-8 bg-card rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-primary">What We Do</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Dharita, we bring together innovation and real-world expertise to simplify and elevate every step of your real estate journey. Our solutions span three core areas:
                </p>
                <ul className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <li>
                    <h3 className="font-semibold text-xl text-primary/90 mb-1">
                      🏗️ <strong>On-Demand Construction</strong>
                    </h3>
                    <p className="italic text-primary/80 mb-2">Build with confidence.</p>
                    <p>
                      We make it easy to bring your dream project to life by connecting you with a trusted network of architects, engineers, and contractors. From smart design and detailed planning to live progress updates and quality checks, our digital platform puts everything you need at your fingertips — keeping your construction journey smooth, transparent, and stress-free.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-semibold text-xl text-primary/90 mb-1">
                      🔐 <strong>Smart Security Solutions</strong>
                    </h3>
                    <p className="italic text-primary/80 mb-2">Safety made smarter.</p>
                    <p>
                      Protecting homes and communities is at the heart of what we do. Our intelligent security systems offer features like OTP-based visitor entry, emergency alert tools, and complete access control — all managed through a user-friendly app. Whether you&apos;re a resident or a property manager, we put peace of mind in your pocket.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-semibold text-xl text-primary/90 mb-1">
                      🏡 <strong>Virtual Property Experiences</strong>
                    </h3>
                    <p className="italic text-primary/80 mb-2">See it. Feel it. Experience it — from anywhere.</p>
                    <p>
                      We create immersive VR and AR property tours that let buyers and tenants explore spaces without stepping outside. From digital walkthroughs to stunning virtual staging, we help real estate professionals market properties in a modern, impactful way — turning interest into action.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 p-6 md:p-8 bg-card rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Dharita, we envision a world where real estate is not just built it&apos;s imagined, inspired, and intelligently brought to life. A world where homes and communities reflect the dreams of those who live in them, and where technology builds what the heart imagines.
                  <br /><br />
                  We’re here to lead a new era one where innovation touches every part of the property journey, making it simpler, faster, more sustainable, and deeply human. From how homes are designed and constructed to how they’re secured and experienced, our mission is to make real estate more accessible, efficient, and meaningful for everyone.
                  <br /><br />
                  We believe technology should be more than smart it should be intuitive, empowering, and seamlessly woven into the way we live and work. Our solutions are built not just with code, but with care bridging the gap between aspiration and reality.
                  <br /><br />
                  This is the future we’re building at Dharita:
                  <br />
                  A future where technology doesn’t replace human vision it brings it to life.
                  <br />
                  A future where technology builds what the heart imagines.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-[#ff5733] rounded-[5px] text-base">
                <Link href="/#services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
      />
    </div>
  );
}
