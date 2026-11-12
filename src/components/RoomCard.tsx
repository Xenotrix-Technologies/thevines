"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RoomType } from "@/data/hotelData";
import { useBooking } from "./BookingContext";
import {
  Users,
  Bed,
  Wifi,
  Snowflake,
  Tv,
  Coffee,
  Maximize,
  ShowerHead,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface RoomCardProps {
  room: RoomType;
  layout?: "grid" | "detailed";
}

// Icon helper
const renderAmenityIcon = (iconName: string) => {
  switch (iconName) {
    case "Snowflake":
      return <Snowflake className="w-3.5 h-3.5" />;
    case "Wifi":
      return <Wifi className="w-3.5 h-3.5" />;
    case "Tv":
      return <Tv className="w-3.5 h-3.5" />;
    case "Coffee":
      return <Coffee className="w-3.5 h-3.5" />;
    case "Maximize":
      return <Maximize className="w-3.5 h-3.5" />;
    case "ShowerHead":
      return <ShowerHead className="w-3.5 h-3.5" />;
    case "Sparkles":
      return <Sparkles className="w-3.5 h-3.5" />;
    default:
      return <Check className="w-3.5 h-3.5" />;
  }
};

export default function RoomCard({ room, layout = "grid" }: RoomCardProps) {
  const { openBooking } = useBooking();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  if (layout === "detailed") {
    return (
      <div
        id={room.id}
        className="scroll-mt-24 bg-white border border-neutral-200 rounded-[19px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Room Photos Slider (7 cols) */}
          <div className="lg:col-span-7 relative bg-[#383838] group min-h-[360px] sm:min-h-[460px]">
            <Image
              src={room.images[activeImageIndex]?.url || room.coverImage}
              alt={room.images[activeImageIndex]?.alt || room.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-all duration-500"
              priority={activeImageIndex === 0}
            />

            {/* Slider arrows */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black text-white rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous room photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black text-white rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                  aria-label="Next room photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Thumb dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                  {room.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveImageIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        activeImageIndex === idx ? "w-5 bg-white" : "w-1.5 bg-white/50"
                      }`}
                      aria-label={`Jump to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image caption */}
            {room.images[activeImageIndex]?.caption && (
              <div className="absolute top-4 left-4 right-4 text-xs text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 inline-block max-w-max">
                {room.images[activeImageIndex].caption}
              </div>
            )}
          </div>

          {/* Room Details Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-500 uppercase tracking-widest pb-2 border-b border-neutral-100">
                <span>{room.bedType}</span>
                <span className="font-semibold text-neutral-900">{room.occupancy}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-neutral-950 mt-4">
                {room.name}
              </h3>
              <p className="text-xs text-neutral-500 tracking-wide mt-1">
                {room.tagline}
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-4">
                {room.description}
              </p>

              {/* Room highlights */}
              <div className="mt-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-900 block mb-2">
                  Key Inclusions
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {room.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Amenities Grid */}
              <div className="mt-6 pt-5 border-t border-neutral-100">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-900 block mb-3">
                  In-Room Amenities
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {room.amenities.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-100 text-[11px] text-neutral-700"
                    >
                      <span className="text-neutral-500">{renderAmenityIcon(a.icon)}</span>
                      <span className="truncate">{a.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Note & Actions */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                    Direct Tariff
                  </span>
                  <span className="text-sm font-medium text-neutral-900">
                    {room.pricePlaceholder || "Available on enquiry"}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => openBooking(room.name)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#383838] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#484848] transition-colors shadow-sm group"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid layout (for Homepage Featured Rooms)
  return (
    <article className="group bg-white border border-neutral-200 rounded-[19px] overflow-hidden flex flex-col justify-between hover-lift">
      {/* Room Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#383838]">
        <Image
          src={room.coverImage}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Occupancy pill */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-widest font-medium text-neutral-900 border border-neutral-100">
          {room.occupancy}
        </div>

        {/* Room name on image */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] uppercase tracking-widest text-neutral-300 block">
            {room.bedType}
          </span>
          <h3 className="text-xl font-serif text-white tracking-wide">{room.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
            {room.description}
          </p>

          {/* Key Facilities icons */}
          <div className="space-y-1.5 py-3 border-y border-neutral-100">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
              Key Facilities
            </span>
            <div className="flex flex-wrap gap-2">
              {room.highlights.slice(0, 3).map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-[11px] text-neutral-700 bg-neutral-50 px-2 py-1 border border-neutral-100"
                >
                  <Check className="w-3 h-3 text-neutral-500" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card CTA Buttons */}
        <div className="mt-6 pt-2 grid grid-cols-2 gap-2">
          <Link
            href={`/rooms#${room.id}`}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs uppercase tracking-wider text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 transition-colors text-center font-medium"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => openBooking(room.name)}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs uppercase tracking-wider bg-[#383838] text-white hover:bg-[#484848] transition-colors text-center font-medium shadow-xs group"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Book Room</span>
          </button>
        </div>
      </div>
    </article>
  );
}

