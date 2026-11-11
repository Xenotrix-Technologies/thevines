"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useBooking } from "./BookingContext";
import { HOTEL_CONFIG } from "@/data/hotelData";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Rooms", href: "/rooms" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Determine header appearance
  const isTransparent = isHomepage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent text-white py-5"
            : "bg-white text-neutral-900 py-3.5 border-b border-neutral-200/80 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex flex-col focus:outline-none"
              aria-label="THE VINES ROOMS - Home"
            >
              <span
                className={`font-serif tracking-widest text-lg sm:text-xl font-semibold uppercase transition-colors ${
                  isTransparent ? "text-white" : "text-neutral-950"
                }`}
              >
                THE VINES
              </span>
              <span
                className={`text-[9px] tracking-[0.28em] uppercase -mt-0.5 transition-colors ${
                  isTransparent ? "text-neutral-300" : "text-neutral-500"
                }`}
              >
                ROOMS · THIRUVILWAMALA
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs uppercase tracking-widest transition-all relative py-1 ${
                      isTransparent
                        ? isActive
                          ? "text-white font-semibold"
                          : "text-neutral-200 hover:text-white"
                        : isActive
                        ? "text-neutral-950 font-semibold"
                        : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] ${
                          isTransparent ? "bg-white" : "bg-neutral-900"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                className={`text-xs tracking-wider flex items-center gap-1.5 transition-colors ${
                  isTransparent ? "text-neutral-200 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{HOTEL_CONFIG.contact.primaryPhone}</span>
              </a>

              <button
                onClick={() => openBooking()}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all group ${
                  isTransparent
                    ? "bg-white text-neutral-950 hover:bg-neutral-100"
                    : "bg-neutral-950 text-white hover:bg-neutral-800"
                }`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Booking</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => openBooking()}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold ${
                  isTransparent ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"
                }`}
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`p-2 transition-colors ${
                  isTransparent ? "text-white hover:text-neutral-200" : "text-neutral-900 hover:text-neutral-600"
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white text-neutral-900 shadow-2xl flex flex-col justify-between p-6">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                <div>
                  <span className="font-serif tracking-widest text-lg font-semibold uppercase text-neutral-950 block">
                    THE VINES
                  </span>
                  <span className="text-[9px] tracking-[0.25em] text-neutral-500 uppercase">
                    ROOMS · THIRUVILWAMALA
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-4">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block text-sm uppercase tracking-widest py-2 transition-colors border-b border-neutral-50 ${
                        isActive ? "font-bold text-neutral-950 border-neutral-950" : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-neutral-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-neutral-600 space-y-2 pt-2">
                <a
                  href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                  className="flex items-center gap-2 hover:text-neutral-950"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{HOTEL_CONFIG.contact.primaryPhone}</span>
                </a>
                <a
                  href={`tel:${HOTEL_CONFIG.contact.secondaryPhoneRaw}`}
                  className="flex items-center gap-2 hover:text-neutral-950"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{HOTEL_CONFIG.contact.secondaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

