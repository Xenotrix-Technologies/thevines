"use client";

import React from "react";
import { ROOMS, HOTEL_CONFIG } from "@/data/hotelData";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import { useBooking } from "@/components/BookingContext";
import {
  Clock,
  ShieldCheck,
  Zap,
  Check,
  Minus,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function RoomsPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-b border-neutral-200">
        <SectionHeading
          badge="Accommodations"
          title="Comfortable & Private Rooms"
          subtitle="Explore our thoughtfully designed room categories in Thiruvilwamala. Whether for an individual retreat, family pilgrimage, or leisure journey, find your ideal stay."
        />

        {/* Quick Room Jump Nav */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {ROOMS.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="px-4 py-2 text-xs uppercase tracking-wider bg-neutral-50 text-neutral-800 border border-neutral-200 hover:border-neutral-900 transition-colors font-medium"
            >
              {r.name}
            </a>
          ))}
        </div>
      </div>

      {/* Detailed Room Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {ROOMS.map((room) => (
          <RoomCard key={room.id} room={room} layout="detailed" />
        ))}

        {/* ============================================================ */}
        {/* ROOM COMPARISON TABLE                                        */}
        {/* ============================================================ */}
        <div className="pt-12 border-t border-neutral-200">
          <SectionHeading
            badge="Overview"
            title="Room Features & Inclusions Comparison"
            subtitle="Side-by-side comparison of amenities and capacity across our 3 room categories."
          />

          <div className="overflow-x-auto border border-neutral-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-neutral-950 text-white">
                  <th className="p-4 uppercase tracking-widest font-semibold border-b border-neutral-800 w-1/4">
                    Feature / Facility
                  </th>
                  <th className="p-4 uppercase tracking-widest font-semibold border-b border-neutral-800 text-center w-1/4">
                    Standard Double Room
                  </th>
                  <th className="p-4 uppercase tracking-widest font-semibold border-b border-neutral-800 text-center w-1/4 bg-neutral-900">
                    Premium Room
                  </th>
                  <th className="p-4 uppercase tracking-widest font-semibold border-b border-neutral-800 text-center w-1/4">
                    Executive Room
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Maximum Occupancy</td>
                  <td className="p-4 text-center">3 Guests</td>
                  <td className="p-4 text-center bg-neutral-50/50 font-medium">3 Guests</td>
                  <td className="p-4 text-center font-bold text-neutral-950">6 Guests (Family)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Bed Configuration</td>
                  <td className="p-4 text-center">Double Bed</td>
                  <td className="p-4 text-center bg-neutral-50/50">Double Bed + Premium Bedding</td>
                  <td className="p-4 text-center">Double Bed + Flexible Setup</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Air Conditioning</td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center bg-neutral-50/50 text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Attached Bathroom</td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center bg-neutral-50/50 text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">High-Speed Wi-Fi</td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center bg-neutral-50/50 text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Open Balcony</td>
                  <td className="p-4 text-center text-neutral-400"><Minus className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center bg-neutral-50/50 text-emerald-600 font-semibold"><Check className="w-4 h-4 mx-auto" /> Private Balcony</td>
                  <td className="p-4 text-center text-neutral-400"><Minus className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Electric Kettle & Tea Setup</td>
                  <td className="p-4 text-center text-neutral-400"><Minus className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center bg-neutral-50/50 text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center text-neutral-400"><Minus className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Entertainment Display</td>
                  <td className="p-4 text-center">Smart LED TV</td>
                  <td className="p-4 text-center bg-neutral-50/50">Android TV</td>
                  <td className="p-4 text-center">Large Android TV</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Toiletries & Mineral Water</td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center bg-neutral-50/50 text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                  <td className="p-4 text-center text-neutral-900"><Check className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Booking Action</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => openBooking("Standard Double Room")}
                      className="px-3 py-1.5 bg-neutral-900 text-white uppercase tracking-wider text-[10px] font-medium hover:bg-black"
                    >
                      Enquire
                    </button>
                  </td>
                  <td className="p-4 text-center bg-neutral-50/50">
                    <button
                      onClick={() => openBooking("Premium Room")}
                      className="px-3 py-1.5 bg-neutral-900 text-white uppercase tracking-wider text-[10px] font-medium hover:bg-black"
                    >
                      Enquire
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => openBooking("Executive Room")}
                      className="px-3 py-1.5 bg-neutral-900 text-white uppercase tracking-wider text-[10px] font-medium hover:bg-black"
                    >
                      Enquire
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ============================================================ */}
        {/* HOTEL STAY POLICIES                                          */}
        {/* ============================================================ */}
        <div className="p-8 bg-neutral-50 border border-neutral-200">
          <h3 className="text-xl font-serif text-neutral-950 mb-4">
            Guest Stay Guidelines & Policies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-600 leading-relaxed">
            <div className="space-y-2">
              <span className="font-semibold text-neutral-900 uppercase tracking-wider block">
                Timings
              </span>
              <p>• Standard Check-in is from 12:00 PM onwards.</p>
              <p>• Standard Check-out is by 11:00 AM.</p>
              <p>• Early arrival or late departure requests can be accommodated based on prior WhatsApp notice.</p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-neutral-900 uppercase tracking-wider block">
                Identification & Guests
              </span>
              <p>• Valid government photo identification (Aadhaar, Passport, or Driving License) is required at check-in.</p>
              <p>• Please specify correct guest and child count when sending your WhatsApp enquiry.</p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-neutral-900 uppercase tracking-wider block">
                Facilities & Backup
              </span>
              <p>• 24-hour generator power backup supports in-room lighting and fans during local outages.</p>
              <p>• Free parking is available for two-wheelers and passenger vehicles on premises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

