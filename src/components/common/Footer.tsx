import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#fff0db] py-12 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Column 1: Company Description */}
          <div className="space-y-3 md:col-span-1 flex flex-col items-center">
            <Link
              href="/"
              className="flex flex-col items-center space-y-1"
              prefetch={false}
            >
              <Image
                src="/dharita-logo.png"
                alt="Dharita Logo"
                width={80}
                height={80}
                className="h-[80px] w-[80px]"
              />
              <span className="text-2xl font-bold text-primary uppercase">
                DHARITA
              </span>
            </Link>
            <p className="text-base font-normal text-primary text-center">
              Where Technology Builds What Heart Imagine.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                  prefetch={false}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                  prefetch={false}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                  prefetch={false}
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="text-lg font-semibold text-primary">
              Connect With Us
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-primary">Email: founder@dharita.in</p>
              <p className="text-sm text-primary">
                Address: Pulak City, Silicon City, Indore
              </p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/dharita_21?igsh=MWZvNzQyd2N5ODBrZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@DHARITA-b7k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://www.linkedin.com/company/dharita/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-muted mb-8" />

        <div className="flex flex-col md:flex-row md:justify-start items-center text-xs">
          <p className="text-primary">
            &copy; Dharita, All Rights Reserved 2025.
          </p>
        </div>
      </div>
    </footer>
  );
}
