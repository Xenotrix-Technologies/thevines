"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HOTEL_CONFIG,
  ROOMS,
  GALLERY_ITEMS,
  REVIEWS,
  NEARBY_ATTRACTIONS,
} from "@/data/hotelData";
import { useBooking } from "@/components/BookingContext";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import FaqSection from "@/components/home/FaqSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
  Snowflake,
  Wifi,
  ShieldCheck,
  Zap,
  Sparkles,
  Car,
  UtensilsCrossed,
  Compass,
  ArrowRight,
  MapPin,
  Star,
  Clock,
  Phone,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

// Highlights icon mapper
const getHighlightIcon = (iconName: string) => {
  switch (iconName) {
    case "Snowflake":
      return <Snowflake className="w-6 h-6" />;
    case "Wifi":
      return <Wifi className="w-6 h-6" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6" />;
    case "Zap":
      return <Zap className="w-6 h-6" />;
    case "Sparkles":
      return <Sparkles className="w-6 h-6" />;
    case "Car":
      return <Car className="w-6 h-6" />;
    case "UtensilsCrossed":
      return <UtensilsCrossed className="w-6 h-6" />;
    case "Compass":
      return <Compass className="w-6 h-6" />;
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#383838] text-white overflow-hidden">
        {/* Immersive background photograph with parallax feel */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/01JR0Z520PTM0FF5TE72P145EV.jpg"
            alt="THE VINES ROOMS Property Exterior and Front Driveway"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center scale-105 animate-pulse duration-[12000ms] opacity-60"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#383838] via-[#383838]/70 to-[#383838]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          {/* Overline branding */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/20 bg-white/5 backdrop-blur-sm mb-6 text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-medium">
              Thiruvilwamala, Kerala · Opposite Punarjani Gardens
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white max-w-4xl leading-[1.12]">
            A Calm Stay. <br />
            <span className="italic font-light text-neutral-300">A Better Experience.</span>
          </h1>

          {/* Property Intro */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed">
            Welcome to <strong>THE VINES ROOMS</strong>, a peaceful and comfortable hospitality retreat nestled in
            Thiruvilwamala, Kerala. Designed for short visits, pilgrim journeys, and extended relaxation with
            air-conditioned rooms and authentic care.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/40 text-white text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors backdrop-blur-xs group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>

          {/* Quick Stats Bar in Hero */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-full max-w-3xl text-center">
            {HOTEL_CONFIG.stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-lg sm:text-2xl font-serif font-medium text-white">{s.value}</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-neutral-400 text-[10px] uppercase tracking-widest gap-2">
          <span>Scroll to Discover</span>
          <div className="w-[1px] h-6 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT PREVIEW                                             */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visuals Layout (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/images/01JQDD89CKAFP6D3JZSNDECK4A.jpeg"
                  alt="The Vines Rooms Courtyard and Garden Path"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Inset Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-1/2 aspect-[4/3] bg-neutral-200 border-4 border-white shadow-xl overflow-hidden">
                <Image
                  src="/images/01JQDD9YE366SE95M9DB6RJBZH.jpeg"
                  alt="The Vines Rooms Architecture and Green Surroundings"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block">
                Homely Comfort in Thiruvilwamala
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950 tracking-tight leading-snug">
                A Peaceful Kerala Retreat Near Punarjani Gardens
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Set in the scenic historic town of Thiruvilwamala, Kerala, <strong>THE VINES ROOMS</strong> offers a
                peaceful, homely atmosphere right opposite the 2nd Gate of Punarjani Gardens.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Whether you are visiting for spiritual darshan at the revered Sree Vilwadrinatha Temple, exploring the
                famous Kuthampully Handloom Village, attending a family gathering, or enjoying a quiet getaway, our
                property is equipped with air conditioning, high-speed Wi-Fi, 24-hour security, and attentive service
                to make your visit effortless.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-neutral-950 border-b-2 border-neutral-950 pb-1 hover:text-neutral-600 transition-colors"
                >
                  <span>Learn More About The Vines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="text-xs text-neutral-500 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Opp: 2nd Gate, Punarjani Gardens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. HOTEL HIGHLIGHTS / FACILITIES                             */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Hospitality Amenities"
            title="Designed for Your Comfort and Peace"
            subtitle="Carefully considered facilities ensure every guest enjoys seamless relaxation, security, and attentive care."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_CONFIG.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 border border-neutral-200/80 rounded-[19px] overflow-hidden shadow-xs hover:shadow-md hover-lift transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 text-neutral-900 mb-5 border border-neutral-200 rounded-[12px]">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <h3 className="text-base font-serif font-medium text-neutral-950 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <span>0{idx + 1}</span>
                  <span className="w-4 h-[1px] bg-neutral-200" />
                  <span className="uppercase text-[9px]">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FEATURED ROOMS                                            */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-2">
                Accommodations
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950 tracking-tight">
                Featured Room Categories
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl">
                Choose between our well-appointed room categories, tailored for couples, solo travelers, and larger
                families.
              </p>
            </div>

            <Link
              href="/rooms"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <span>View All 3 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} layout="grid" />
            ))}
          </div>

          {/* Policy notes banner */}
          <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-[19px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-neutral-900 flex-shrink-0" />
              <span>
                Standard Check-in: <strong>12:00 PM</strong> · Standard Check-out: <strong>11:00 AM</strong>.
                Early check-in subject to room availability upon WhatsApp enquiry.
              </span>
            </div>
            <button
              onClick={() => openBooking()}
              className="text-neutral-950 font-semibold underline underline-offset-4 whitespace-nowrap hover:text-neutral-600"
            >
              Check Availability →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. GALLERY PREVIEW                                           */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-[#383838] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Visual Gallery"
            title="A Curated Look at Spaces & Atmosphere"
            subtitle="Authentic photographs of The Vines Rooms, peaceful courtyards, guest accommodations, and local landscapes."
            light
          />

          {/* Grid of original photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {GALLERY_ITEMS.slice(0, 8).map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative overflow-hidden bg-[#2d2d2d] border border-[#4a4a4a] rounded-[19px] aspect-[4/3] shadow-md hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1.5 transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-300">
                    {item.category}
                  </span>
                  <p className="text-xs font-serif text-white font-medium truncate mt-0.5">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Explore Full Gallery (24+ Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. LOCATION & NEARBY ATTRACTIONS                             */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Location"
            title="Explore Thiruvilwamala & Surroundings"
            subtitle="Conveniently situated along the Pazhayannur Highway right opposite Punarjani Gardens 2nd Gate, close to renowned temples, heritage sites, and riverbanks."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Attractions List (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {NEARBY_ATTRACTIONS.map((att) => (
                <div
                  key={att.id}
                  className="p-5 bg-neutral-50 border border-neutral-200 rounded-[19px] overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-neutral-200 mb-3.5">
                      <Image
                        src={att.image}
                        alt={att.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block">
                      {att.distanceOrType}
                    </span>
                    <h3 className="text-sm font-serif font-medium text-neutral-900 mt-1">
                      {att.name}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                      {att.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Map Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#383838] text-white p-6 sm:p-8 border border-[#4a4a4a] rounded-[19px] overflow-hidden shadow-md space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-300 block font-medium">
                  Property Address
                </span>
                <h3 className="text-xl font-serif text-white mt-1">THE VINES ROOMS</h3>
                <p className="text-xs text-neutral-200 mt-2 leading-relaxed">
                  {HOTEL_CONFIG.contact.address}
                </p>
              </div>

              {/* Embedded Interactive Map */}
              <div className="relative w-full aspect-[4/3] bg-[#2d2d2d] overflow-hidden rounded-[14px] border border-[#4a4a4a]">
                <iframe
                  title="The Vines Rooms Location Map"
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

              <div className="space-y-3 pt-2 text-xs text-neutral-200">
                <div className="flex items-center justify-between pb-2 border-b border-[#4a4a4a]">
                  <span className="text-neutral-300">Primary Contact:</span>
                  <a href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`} className="text-white hover:underline">
                    {HOTEL_CONFIG.contact.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#4a4a4a]">
                  <span className="text-neutral-300">Email:</span>
                  <a href={`mailto:${HOTEL_CONFIG.contact.email}`} className="text-white hover:underline">
                    {HOTEL_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={HOTEL_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors rounded-lg"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. GUEST EXPERIENCE / TESTIMONIALS                           */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Guest Feedback"
            title="Real Experiences from Visitors"
            subtitle="Authentic reviews submitted by travelers and families who experienced our hospitality in Thiruvilwamala."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 sm:p-8 border border-neutral-200 rounded-[19px] overflow-hidden shadow-xs hover:shadow-md flex flex-col justify-between hover-lift transition-all duration-300"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-neutral-900 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-900 font-serif">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-neutral-400 block">{review.date}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQS)                         */}
      {/* ============================================================ */}
      <FaqSection />

      {/* ============================================================ */}
      {/* 9. FINAL CALL TO ACTION                                      */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#383838] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-300 font-medium block mb-3">
            Reserve Your Visit
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Your Comfortable Stay Starts Here.
          </h2>

          <p className="mt-4 text-xs sm:text-base text-neutral-200 max-w-xl mx-auto font-light leading-relaxed">
            Reach out through WhatsApp to check instant room availability, discuss custom check-in requirements, or
            secure your dates at The Vines Rooms.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-all shadow-md group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Enquire on WhatsApp</span>
            </button>

            <a
              href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#555555] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#484848] transition-colors"
            >
              <Phone className="w-4 h-4 text-neutral-300" />
              <span>Call +91 79944 31227</span>
            </a>
          </div>

          <div className="mt-8 text-[11px] text-neutral-400">
            Opp: 2nd Gate, Punarjani Gardens, Highway, Pazhayannur, Thiruvilwamala, Kerala 680588
          </div>
        </div>
      </section>
    </div>
  );
}

