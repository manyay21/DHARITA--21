
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

const wordsToAnimate = ['CONSTRUCTION', 'SECURITY', 'VR WALK THROUGH'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 1000;
const PAUSE_BEFORE_NEXT_WORD = 500;

export function HeroSection({ onOpenContactModal }: HeroSectionProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = wordsToAnimate[wordIndex];
      if (isDeleting) {
        // Deleting
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        setTypingDelay(DELETING_SPEED);
        if (displayedText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % wordsToAnimate.length);
          setTypingDelay(PAUSE_BEFORE_NEXT_WORD); 
        }
      } else {
        // Typing
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
        setTypingDelay(TYPING_SPEED);
        if (displayedText === currentWord) {
          setIsDeleting(true);
          setTypingDelay(PAUSE_AFTER_TYPING);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, typingDelay]);

  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-background"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--border)) 0.5px, transparent 0.5px), linear-gradient(to right, hsl(var(--border)) 0.5px, transparent 0.5px)',
        backgroundSize: '10px 10px',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col justify-center space-y-4 max-w-3xl">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary uppercase font-sans">
                DHARITA
              </h2>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary font-sans">
                INNOVATIVE SOLUTIONS FOR
                <span className="block"> {/* This span will take full width and push animated text to new line */}
                  <span className="inline-block min-h-[1.2em]">{/* min-h to prevent collapse during deletion */}
                    {displayedText}
                  </span>
                  <span className="animate-pulse">|</span> {/* Blinking cursor */}
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-xl md:text-2xl font-sans font-semibold mx-auto">
              Where Technology Builds What Heart Imagine.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[5px] text-lg"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-background border-primary text-primary hover:bg-[#ff8c66] hover:text-primary rounded-[5px] text-lg"
                onClick={() => onOpenContactModal()}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

