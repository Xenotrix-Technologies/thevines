import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HOTEL_CONFIG } from "@/data/hotelData";
import { Phone, Mail, MapPin, Clock, ExternalLink, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      {/* Top Banner / Callout */}
      <div className="border-b border-neutral-900 py-10 bg-neutral-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
                Hospitality in Thiruvilwamala
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
                Plan Your Peaceful Stay Near Punarjani Gardens
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Intro */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-black border border-neutral-800 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="THE VINES ROOMS Official Logo"
                  fill
                  sizes="56px"
                  className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="font-serif tracking-widest text-2xl font-semibold uppercase text-white block group-hover:text-neutral-200 transition-colors">
                  THE VINES
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 block -mt-0.5">
                  ROOMS · THIRUVILWAMALA
                </span>
              </div>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              A serene and private accommodation in Thiruvilwamala, Kerala. Designed to provide a comfortable,
              homely experience with air-conditioned rooms, modern amenities, and genuine Kerala hospitality.
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>Check-in: <strong>{HOTEL_CONFIG.policies.checkIn}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>Check-out: <strong>{HOTEL_CONFIG.policies.checkOut}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4 pb-2 border-b border-neutral-800">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Gallery</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Rooms & Suites</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Room Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4 pb-2 border-b border-neutral-800">
              Accommodations
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <Link href="/rooms#standard-double" className="hover:text-white transition-colors block">
                  <span className="text-neutral-200 block font-medium">Standard Double Room</span>
                  <span className="text-[11px] text-neutral-500">AC, Attached Bath, Wi-Fi, Double Bed</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms#premium-room" className="hover:text-white transition-colors block">
                  <span className="text-neutral-200 block font-medium">Premium Room</span>
                  <span className="text-[11px] text-neutral-500">Open Balcony, Electric Kettle, AC</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms#executive-room" className="hover:text-white transition-colors block">
                  <span className="text-neutral-200 block font-medium">Executive Room</span>
                  <span className="text-[11px] text-neutral-500">Up to 6 Guests, Android TV, Family Suite</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4 pb-2 border-b border-neutral-800">
              Contact & Location
            </h4>
            <address className="not-italic text-xs text-neutral-400 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {HOTEL_CONFIG.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`} className="hover:text-white">
                    {HOTEL_CONFIG.contact.primaryPhone}
                  </a>
                  <span>/</span>
                  <a href={`tel:${HOTEL_CONFIG.contact.secondaryPhoneRaw}`} className="hover:text-white">
                    {HOTEL_CONFIG.contact.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <a href={`mailto:${HOTEL_CONFIG.contact.email}`} className="hover:text-white">
                  {HOTEL_CONFIG.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={HOTEL_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white underline underline-offset-4"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} THE VINES ROOMS. All rights reserved.</p>
          <p className="tracking-wide">
            Thiruvilwamala · Thrissur District · Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}

