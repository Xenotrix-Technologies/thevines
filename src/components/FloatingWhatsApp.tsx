"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useBooking } from "./BookingContext";
import { HOTEL_CONFIG } from "@/data/hotelData";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const { openBooking } = useBooking();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Popover Card */}
      {showTooltip && (
        <div className="bg-[#383838] text-white p-4 max-w-xs shadow-2xl border border-[#4a4a4a] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#4a4a4a] mb-2">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium flex items-center gap-1.5">
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>The Vines WhatsApp Desk</span>
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-white"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-3">
            Have questions about room availability, rates, or local temples? Chat directly with our front desk.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setShowTooltip(false);
                openBooking();
              }}
              className="flex-1 text-[11px] uppercase tracking-wider py-1.5 px-2.5 bg-white text-neutral-900 font-medium text-center hover:bg-neutral-200 transition-colors"
            >
              Book Room
            </button>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-[11px] uppercase tracking-wider py-1.5 px-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-center transition-colors flex items-center justify-center gap-1"
            >
              <WhatsAppIcon className="w-3 h-3 text-white" />
              <span>Chat Now</span>
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button - Official WhatsApp Button */}
      <div className="relative group">
        <button
          onClick={() => setShowTooltip((prev) => !prev)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-200 hover:scale-110 active:scale-95"
          aria-label="Contact THE VINES ROOMS on WhatsApp"
        >
          {/* Active status pulse */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
          </span>

          <WhatsAppIcon className="w-7 h-7" variant="monochrome" color="#FFFFFF" />
        </button>

        {/* Hover pill */}
        {!showTooltip && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-3 py-1.5 bg-[#383838] text-white text-xs whitespace-nowrap shadow-lg border border-[#4a4a4a] pointer-events-none rounded-none">
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] mr-1.5" />
            <span>Enquire on WhatsApp</span>
            <span className="ml-1.5 text-neutral-400 text-[10px]">· 24/7 Desk</span>
          </div>
        )}
      </div>
    </div>
  );
}
