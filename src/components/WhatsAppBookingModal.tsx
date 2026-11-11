"use client";

import React, { useState, useEffect } from "react";
import { useBooking } from "./BookingContext";
import { HOTEL_CONFIG, ROOMS } from "@/data/hotelData";
import { getWhatsAppBookingUrl, BookingEnquiryData } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { X, Calendar, User, Users, BedDouble, MessageSquare, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhatsAppBookingModal() {
  const { isOpen, selectedRoom, closeBooking, openBooking } = useBooking();

  // Form states
  const [guestName, setGuestName] = useState("");
  const [roomType, setRoomType] = useState(selectedRoom);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync roomType with context
  useEffect(() => {
    if (selectedRoom) {
      setRoomType(selectedRoom);
    }
  }, [selectedRoom]);

  // Set default dates (today and tomorrow)
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (d: Date) => d.toISOString().split("T")[0];

    if (!checkIn) setCheckIn(formatDate(today));
    if (!checkOut) setCheckOut(formatDate(tomorrow));
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBooking();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!guestName.trim()) {
      newErrors.guestName = "Guest name is required.";
    } else if (guestName.trim().length < 2) {
      newErrors.guestName = "Please enter a valid full name.";
    }

    if (!roomType) {
      newErrors.roomType = "Please select a room type.";
    }

    if (!checkIn) {
      newErrors.checkIn = "Check-in date is required.";
    }

    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required.";
    } else if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      newErrors.checkOut = "Check-out must be after check-in date.";
    }

    if (!guests || Number(guests) < 1) {
      newErrors.guests = "At least 1 guest required.";
    }

    if (!rooms || Number(rooms) < 1) {
      newErrors.rooms = "At least 1 room required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const enquiryData: BookingEnquiryData = {
      guestName,
      roomType,
      checkIn,
      checkOut,
      guests,
      rooms,
      additionalRequirements: additionalRequirements.trim(),
    };

    const url = getWhatsAppBookingUrl(enquiryData);

    // Open WhatsApp in new tab / app
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSubmitting(false);
      closeBooking();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={closeBooking} />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-none border border-neutral-200 shadow-2xl z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-neutral-50/50">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium block">
              Reservation Enquiry
            </span>
            <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-serif text-neutral-900 mt-1 flex items-center gap-2">
              <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </h2>
          </div>
          <button
            onClick={closeBooking}
            className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors rounded-full"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="px-6 py-3 bg-neutral-100/70 border-b border-neutral-200/60 flex items-start gap-2.5 text-xs text-neutral-600">
          <AlertCircle className="w-4 h-4 text-neutral-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Note:</strong> This generates a direct booking enquiry sent to our WhatsApp desk.
            Room allocation is subject to availability and will be confirmed promptly by hotel staff.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Guest Name */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-neutral-700 mb-1.5">
              Guest Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={guestName}
                onChange={(e) => {
                  setGuestName(e.target.value);
                  if (errors.guestName) setErrors((prev) => ({ ...prev, guestName: "" }));
                }}
                placeholder="Enter your full name"
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border rounded-none transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 ${
                  errors.guestName ? "border-red-400 bg-red-50/30" : "border-neutral-200"
                }`}
              />
            </div>
            {errors.guestName && <p className="text-xs text-red-600 mt-1">{errors.guestName}</p>}
          </div>

          {/* Room Type Selector */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-neutral-700 mb-1.5">
              Room Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <BedDouble className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <select
                value={roomType}
                onChange={(e) => {
                  setRoomType(e.target.value);
                  if (errors.roomType) setErrors((prev) => ({ ...prev, roomType: "" }));
                }}
                className={`w-full pl-10 pr-8 py-2.5 text-sm bg-neutral-50 border rounded-none transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 appearance-none cursor-pointer ${
                  errors.roomType ? "border-red-400" : "border-neutral-200"
                }`}
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name} ({r.occupancy})
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
                ▼
              </div>
            </div>
            {errors.roomType && <p className="text-xs text-red-600 mt-1">{errors.roomType}</p>}
          </div>

          {/* Dates: Check-in & Check-out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-neutral-700 mb-1.5">
                Check-in Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="date"
                  value={checkIn}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (errors.checkIn) setErrors((prev) => ({ ...prev, checkIn: "" }));
                  }}
                  className={`w-full pl-10 pr-3 py-2.5 text-sm bg-neutral-50 border rounded-none transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 ${
                    errors.checkIn ? "border-red-400" : "border-neutral-200"
                  }`}
                />
              </div>
              {errors.checkIn && <p className="text-xs text-red-600 mt-1">{errors.checkIn}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-neutral-700 mb-1.5">
                Check-out Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                    if (errors.checkOut) setErrors((prev) => ({ ...prev, checkOut: "" }));
                  }}
                  className={`w-full pl-10 pr-3 py-2.5 text-sm bg-neutral-50 border rounded-none transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 ${
                    errors.checkOut ? "border-red-400" : "border-neutral-200"
                  }`}
                />
              </div>
              {errors.checkOut && <p className="text-xs text-red-600 mt-1">{errors.checkOut}</p>}
            </div>
          </div>

          {/* Guests & Rooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-neutral-700 mb-1.5">
                Number of Guests <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:bg-white focus:outline-none focus:border-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-neutral-700 mb-1.5">
                Number of Rooms <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <BedDouble className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={rooms}
                  onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:bg-white focus:outline-none focus:border-neutral-900"
                />
              </div>
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-neutral-700 mb-1.5">
              Additional Requirements (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
              <textarea
                rows={3}
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
                placeholder="e.g. Early check-in request, extra mattress, ground floor preference..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:bg-white focus:outline-none focus:border-neutral-900 resize-none"
              />
            </div>
          </div>


          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-neutral-900 text-white text-xs uppercase tracking-widest font-medium hover:bg-black transition-all disabled:opacity-50 group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Continue to WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={closeBooking}
              className="px-5 py-3.5 text-xs uppercase tracking-widest text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-400 transition-colors"
            >
              Cancel
            </button>
          </div>

          <div className="text-center">
            <span className="text-[11px] text-neutral-500">
              WhatsApp Desk: <span className="text-neutral-800 font-medium">{HOTEL_CONFIG.contact.whatsAppDisplay}</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

