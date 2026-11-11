"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { HOTEL_CONFIG, NEARBY_ATTRACTIONS } from "@/data/hotelData";
import { useBooking } from "@/components/BookingContext";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  MapPin,
  UtensilsCrossed,
  Clock,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 border-b border-neutral-200">
        <SectionHeading
          badge="Our Story & Philosophy"
          title="Hospitality Rooted in Calm & Privacy"
          subtitle="Discover THE VINES ROOMS — a comfortable, homely accommodation located in Thiruvilwamala, Kerala, offering a relaxed environment for mindful travelers."
        />
      </div>

      {/* Main Editorial Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Photo Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm">
              <Image
                src="https://d2gx18f76jq9dw.cloudfront.net/13124/01JR0Z520PTM0FF5TE72P145EV.jpg"
                alt="The Vines Rooms Property Exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 border border-neutral-200">
                <Image
                  src="https://d2gx18f76jq9dw.cloudfront.net/12515/01JQDD89CKAFP6D3JZSNDECK4A.jpeg"
                  alt="Courtyard and walkway at The Vines Rooms"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 border border-neutral-200">
                <Image
                  src="https://d2gx18f76jq9dw.cloudfront.net/13167/01JR1015ZE6JG3WWQJQEXNBC3H.jpg"
                  alt="Dine-in area at The Vines Rooms"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Narrative Story (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-2">
                About The Property
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950 tracking-tight leading-snug">
                Comfort and Quiet in the Heart of Thiruvilwamala
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <strong>THE VINES ROOMS</strong> was established with a singular objective: to provide visitors to
              Thiruvilwamala with a dependable, spotless, and peaceful lodging option where privacy and comfort are
              uncompromised.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Positioned conveniently opposite the second gate of Punarjani Gardens along the Pazhayannur Highway,
              our boutique property hosts 7 thoughtfully appointed guest rooms. From spacious family suites to
              breezy balcony rooms and standard double options, each space is maintained with rigorous cleanliness
              standards.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              We cater to pilgrims seeking early morning darshan at historic temples, travelers discovering the
              artisan heritage of Kuthampully handloom weavers, and guests celebrating family milestones in the
              Thiruvilwamala and Pazhayannur region.
            </p>

            <div className="pt-4 border-t border-neutral-100 grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-neutral-50 border border-neutral-100">
                <span className="font-serif text-lg font-medium text-neutral-900 block">7 Rooms</span>
                <span className="text-[11px] text-neutral-500">Intimate & manageable scale</span>
              </div>
              <div className="p-3.5 bg-neutral-50 border border-neutral-100">
                <span className="font-serif text-lg font-medium text-neutral-900 block">24/7 Security</span>
                <span className="text-[11px] text-neutral-500">Monitored peaceful premises</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PHILOSOPHY & VALUES                                          */}
      {/* ============================================================ */}
      <div className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Hospitality Philosophy"
            title="The Principles That Guide Our Service"
            subtitle="We believe memorable hospitality is built on simple, honest fundamentals: cleanliness, genuine care, and dependable facilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 shadow-xs space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 border border-neutral-200 text-neutral-900">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900">Uncompromised Privacy & Safety</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We respect our guests&apos; personal space. With 24-hour premises security, private attached bathrooms,
                and a calm courtyard, you can rest with total peace of mind.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-xs space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 border border-neutral-200 text-neutral-900">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900">Spotless Hygiene & Linens</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every room undergoes diligent daily housekeeping. From sanitized bedding to sparkling fixtures and
                complimentary toiletries, cleanliness is our highest priority.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-xs space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 border border-neutral-200 text-neutral-900">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900">Attentive, Homely Care</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                As highlighted by our verified guest reviews, our staff treats every visitor with genuine Kerala
                warmth, assisting with local guidance, meal arrangements, and travel needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FACILITIES OVERVIEW                                          */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block">
              Guest Amenities
            </span>
            <h2 className="text-3xl font-serif text-neutral-950">
              Modern Amenities in a Peaceful Setting
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              We ensure our guests stay refreshed and connected without friction. All rooms are equipped with
              individual split air conditioners, high-speed Wi-Fi, LED TVs, and dependable power backup.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-neutral-700">
                <div className="w-6 h-6 flex items-center justify-center bg-neutral-100 rounded-full flex-shrink-0 mt-0.5">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-neutral-800" />
                </div>
                <div>
                  <strong className="text-neutral-900">Dine-in Facility:</strong> An inviting dining area serving
                  homestyle meals for breakfast, lunch, and dinner upon guest request.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-neutral-700">
                <div className="w-6 h-6 flex items-center justify-center bg-neutral-100 rounded-full flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-800" />
                </div>
                <div>
                  <strong className="text-neutral-900">Round-the-Clock Support:</strong> Front desk assistance ready
                  to help with early departures, temple schedules, or local taxi coordination.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-neutral-700">
                <div className="w-6 h-6 flex items-center justify-center bg-neutral-100 rounded-full flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-800" />
                </div>
                <div>
                  <strong className="text-neutral-900">Ample On-Site Parking:</strong> Secure vehicle space for family
                  cars, tour travelers, and two-wheelers.
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Enquire About Your Stay</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] bg-neutral-900 border border-neutral-200 overflow-hidden shadow-sm">
            <Image
              src="https://d2gx18f76jq9dw.cloudfront.net/13168/01JR101HHBKAECA24EJTZA1XYW.jpg"
              alt="Dining atmosphere and common lounge at The Vines Rooms"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

