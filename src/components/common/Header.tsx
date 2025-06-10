
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface HeaderProps {
  onContactUsClick?: () => void;
}

export function Header({ onContactUsClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handler once on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-[#fff0db]/80 backdrop-blur-md shadow-lg' : 'bg-[#fff0db] shadow-sm'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-baseline" prefetch={false}>
          <Image
            src="/dharita-logo.png"
            alt="Dharita Logo"
            width={90}
            height={90}
            className="h-[90px] w-[90px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-2xl font-sans">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors font-bold" prefetch={false}>
            Home
          </Link>
          <Link href="/#services" className="text-primary hover:text-primary/80 transition-colors font-bold" prefetch={false}>
            Services
          </Link>
          <Link href="/about" className="text-primary hover:text-primary/80 transition-colors font-bold" prefetch={false}>
            About
          </Link>
          <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors font-bold" prefetch={false}>
            Blog
          </Link>
        </nav>

        {/* Contact Us Button (always visible) & Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-4">
          {onContactUsClick ? (
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-[#ff8c66] hover:text-primary rounded-[5px] text-2xl"
              onClick={onContactUsClick}
            >
              Contact Us
            </Button>
          ) : (
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-[#ff8c66] hover:text-primary rounded-[5px] text-2xl"
            >
              <Link href="/#contact" prefetch={false}>Contact Us</Link>
            </Button>
          )}

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <Menu className="h-8 w-8" /> {/* Changed size from h-16 w-16 to h-8 w-8 */}
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-[#fff0db] p-6 pt-10">
                <SheetHeader className="mb-4 text-left">
                  <SheetTitle className="text-primary text-xl">Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-5">
                  <SheetClose asChild>
                    <Link href="/" className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg py-2" prefetch={false}>
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#services" className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg py-2" prefetch={false}>
                      Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about" className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg py-2" prefetch={false}>
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg py-2" prefetch={false}>
                      Blog
                    </Link>
                  </SheetClose>
                  {/* Contact Us button removed from sheet as it's always visible in the header now */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
