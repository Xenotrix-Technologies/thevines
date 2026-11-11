"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RoomType } from "@/types/hotel.types";
import { useBooking } from "@/components/BookingContext";
import { HOTEL_CONFIG } from "@/config/hotel.config";
import {
  Users,
  BedDouble,
  Snowflake,
  Wifi,
  Tv,
  Coffee,
  Maximize,
  ShowerHead,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  ArrowRight,
  Car,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface RoomDetailClientProps {
  room: RoomType;
  relatedRooms: RoomType[];
}

const renderAmenityIcon = (iconName: string) => {
  switch (iconName) {
    case "Snowflake":
      return <Snowflake className="w-4 h-4" />;
    case "Wifi":
      return <Wifi className="w-4 h-4" />;
    case "Tv":
      return <Tv className="w-4 h-4" />;
    case "Coffee":
      return <Coffee className="w-4 h-4" />;
    case "Maximize":
      return <Maximize className="w-4 h-4" />;
    case "ShowerHead":
      return <ShowerHead className="w-4 h-4" />;
    case "Sparkles":
      return <Sparkles className="w-4 h-4" />;
    case "Car":
      return <Car className="w-4 h-4" />;
    case "BedDouble":
      return <BedDouble className="w-4 h-4" />;
    default:
      return <Check className="w-4 h-4" />;
  }
};

export default function RoomDetailClient({ room, relatedRooms }: RoomDetailClientProps) {
  const { openBooking } = useBooking();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 text-xs text-neutral-500 flex items-center gap-2 border-b border-neutral-100">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/rooms" className="hover:text-neutral-900 transition-colors">
          Rooms
        </Link>
        <span>/</span>
        <span className="text-neutral-900 font-medium">{room.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Grid: Gallery (7 cols) + Booking Details (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Photos & Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage */}
            <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden border border-neutral-200 group">
              <Image
                src={room.images[activeImageIndex]?.url || room.coverImage}
                alt={room.images[activeImageIndex]?.alt || room.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-all duration-500"
              />

              {/* Slider Arrows */}
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-opacity"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-opacity"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Caption */}
              {room.images[activeImageIndex]?.caption && (
                <div className="absolute bottom-3 left-3 right-3 p-2 bg-black/70 backdrop-blur-xs text-xs text-white max-w-max">
                  {room.images[activeImageIndex].caption}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {room.images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[4/3] overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? "border-neutral-950 opacity-100 scale-102"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.url} alt={img.alt} fill sizes="15vw" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Actions Sidebar */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-500 uppercase tracking-widest pb-3 border-b border-neutral-200">
                <span>{room.bedType}</span>
                <span className="font-semibold text-neutral-900">{room.occupancy}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif text-neutral-950 mt-4">{room.name}</h1>
              <p className="text-xs text-neutral-500 tracking-wide mt-1">{room.tagline}</p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-4">
                {room.description}
              </p>
            </div>

            {/* Inclusions */}
            <div className="pt-4 border-t border-neutral-200">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-900 block mb-2.5">
                Key Inclusions
              </span>
              <ul className="space-y-1.5 text-xs text-neutral-700">
                {room.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing note */}
            <div className="pt-4 border-t border-neutral-200">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                Direct Hotel Tariff
              </span>
              <span className="text-sm font-medium text-neutral-900">
                {room.pricePlaceholder || "Direct tariff available upon enquiry"}
              </span>
            </div>

            {/* Direct Booking CTA */}
            <div className="pt-2">
              <button
                onClick={() => openBooking(room.name)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors shadow-sm group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Book This Room on WhatsApp</span>
              </button>
              <p className="text-[11px] text-neutral-400 text-center mt-2">
                Sends an immediate enquiry to our Thiruvilwamala desk.
              </p>
            </div>
          </div>
        </div>

        {/* Full In-Room Amenities Grid */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <h2 className="text-2xl font-serif text-neutral-950 mb-6">In-Room Amenities & Facilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {room.amenities.map((amenity, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-neutral-50 border border-neutral-100 text-xs text-neutral-800"
              >
                <span className="text-neutral-600">{renderAmenityIcon(amenity.icon)}</span>
                <span className="font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stay Guidelines */}
        <div className="mt-12 p-8 bg-neutral-50 border border-neutral-200">
          <h3 className="text-lg font-serif text-neutral-950 mb-4">Stay Guidelines & Timings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-600">
            <div>
              <strong className="text-neutral-900 block mb-1">Check-in: 12:00 PM</strong>
              Standard check-in starts at 12 noon. Early check-in can be requested via WhatsApp.
            </div>
            <div>
              <strong className="text-neutral-900 block mb-1">Check-out: 11:00 AM</strong>
              Standard check-out is by 11:00 AM to allow room sanitization for incoming guests.
            </div>
            <div>
              <strong className="text-neutral-900 block mb-1">Security & Power</strong>
              24-hour generator power backup and premises monitoring for uninterrupted comfort.
            </div>
          </div>
        </div>

        {/* Related Rooms */}
        {relatedRooms.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl font-serif text-neutral-950 mb-6">Other Available Accommodations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedRooms.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/rooms/${rel.slug}`}
                  className="group bg-white border border-neutral-200 overflow-hidden hover-lift"
                >
                  <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                    <Image
                      src={rel.coverImage}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 uppercase tracking-widest mb-1">
                      <span>{rel.bedType}</span>
                      <span>{rel.occupancy}</span>
                    </div>
                    <h3 className="text-xl font-serif text-neutral-950">{rel.name}</h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 mt-2 leading-relaxed">
                      {rel.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-neutral-900 font-semibold uppercase tracking-wider">
                      <span>View Room Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
