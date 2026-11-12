"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/hotelData";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 text-white bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium">
            {currentItem.category}
          </span>
          <span className="text-xs text-neutral-300 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-full max-w-6xl max-h-[82vh] p-4 sm:p-8 flex items-center justify-center">
        <div className="relative w-full h-full rounded-[19px] overflow-hidden">
          <Image
            src={currentItem.image}
            alt={currentItem.alt || currentItem.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain rounded-[19px]"
            priority
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-black/40 hover:bg-black/80 border border-white/10 transition-colors z-20 focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-black/40 hover:bg-black/80 border border-white/10 transition-colors z-20 focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-center">
        <h3 className="text-sm sm:text-base font-serif text-white">{currentItem.title}</h3>
        {currentItem.description && (
          <p className="text-xs text-neutral-400 max-w-xl mx-auto mt-1 line-clamp-2">
            {currentItem.description}
          </p>
        )}
      </div>
    </div>
  );
}

