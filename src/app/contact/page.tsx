"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { HOTEL_CONFIG } from "@/data/hotelData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation as NavigationIcon,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-neutral-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get in Touch"
            title="Contact THE VINES ROOMS"
            subtitle="Whether you have questions regarding room availability, location directions, special check-in arrangements, or group inquiries, our team is here to assist."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
                  Property Location
                </span>
                <h3 className="text-xl font-serif text-neutral-900 mt-1">THE VINES ROOMS</h3>
                <div className="flex items-start gap-3 mt-3 text-xs text-neutral-600 leading-relaxed">
                  <MapPin className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                  <span>{HOTEL_CONFIG.contact.address}</span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-neutral-100 space-y-3.5 text-xs text-neutral-700">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      Primary Phone
                    </span>
                    <a
                      href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                      className="font-medium hover:text-black hover:underline"
                    >
                      {HOTEL_CONFIG.contact.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      Secondary Phone
                    </span>
                    <a
                      href={`tel:${HOTEL_CONFIG.contact.secondaryPhoneRaw}`}
                      className="font-medium hover:text-black hover:underline"
                    >
                      {HOTEL_CONFIG.contact.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${HOTEL_CONFIG.contact.email}`}
                      className="font-medium hover:text-black hover:underline"
                    >
                      {HOTEL_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      Check-in & Check-out
                    </span>
                    <span>Check-in: {HOTEL_CONFIG.policies.checkIn} · Check-out: {HOTEL_CONFIG.policies.checkOut}</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#383838] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#484848] transition-colors shadow-xs group"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Desk</span>
                </a>

                <a
                  href={HOTEL_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest font-medium hover:bg-neutral-50 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white border border-neutral-200 p-2 shadow-xs">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <iframe
                  title="The Vines Rooms Google Map"
                  src={HOTEL_CONFIG.contact.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125"
                />
              </div>
              <div className="p-3 text-center">
                <a
                  href={HOTEL_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-600 hover:text-black font-medium underline underline-offset-4"
                >
                  Click to open navigation in Google Maps app →
                </a>
              </div>
            </div>
          </div>

          {/* Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />

            {/* Travel Directions Note */}
            <div className="mt-8 p-6 bg-white border border-neutral-200">
              <div className="flex items-center gap-2.5 mb-3 text-neutral-900">
                <NavigationIcon className="w-4 h-4 text-neutral-900" />
                <h4 className="font-serif text-base font-medium">Getting to The Vines Rooms</h4>
              </div>
              <ul className="text-xs text-neutral-600 space-y-2 leading-relaxed">
                <li>
                  • <strong>By Road:</strong> Situated along the Pazhayannur - Thiruvilwamala Highway, directly facing
                  the 2nd Entrance Gate of Punarjani Gardens. Ample on-site car and bus parking available.
                </li>
                <li>
                  • <strong>Nearest Railway Stations:</strong> Ottapalam Railway Station (~14 km) and Shoranur
                  Railway Junction (~24 km). Regular auto-rickshaws and taxis are readily accessible.
                </li>
                <li>
                  • <strong>Nearby Landmarks:</strong> Thiruvilwamala Sree Vilwadrinatha Temple (7 min), Kuthampully
                  Handloom Village (12 min).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

