"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/hotelData";
import SectionHeading from "@/components/SectionHeading";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useBooking } from "@/components/BookingContext";
import { Maximize2, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

type CategoryFilter = "All" | "Property" | "Rooms" | "Facilities" | "Surroundings";

const CATEGORIES: CategoryFilter[] = ["All", "Property", "Rooms", "Facilities", "Surroundings"];

export default function GalleryPage() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightboxAtIndex = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Gallery Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-b border-neutral-200">
        <SectionHeading
          badge="Property & Surroundings"
          title="The Vines Visual Showcase"
          subtitle="Explore authentic photography of our hotel premises, comfortable guest suites, dining spaces, and scenic Kerala destinations."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all ${
                  isActive
                    ? "bg-neutral-950 text-white font-semibold shadow-xs"
                    : "bg-neutral-50 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightboxAtIndex(index)}
              className="group relative bg-neutral-900 border border-neutral-200 overflow-hidden cursor-pointer hover-lift"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-widest font-medium text-neutral-900 border border-neutral-200">
                  {item.category}
                </div>

                {/* View Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption / Title */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-sm font-serif text-white font-medium truncate">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[11px] text-neutral-300 line-clamp-1 mt-0.5 opacity-90">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-16 p-8 bg-neutral-50 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Experience It In Person
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-neutral-950 mt-1">
              Like What You See? Reserve Your Room Today.
            </h3>
            <p className="text-xs text-neutral-600 mt-1">
              WhatsApp our desk for current seasonal tariffs, group stays, and immediate booking enquiries.
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={() => openBooking()}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(newIdx) => setCurrentIndex(newIdx)}
      />
    </div>
  );
}

