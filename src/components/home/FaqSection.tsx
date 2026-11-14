"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/hotelData";
import SectionHeading from "@/components/SectionHeading";
import { Plus, Minus } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function FaqSection() {
  // Allow multiple FAQs to be toggled open simultaneously, defaulting to first FAQ open
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Essential Answers for Your Visit"
          subtitle="Everything you need to know about arrival timings, on-site dining, facilities, and property policies in Thiruvilwamala."
        />

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`border rounded-[19px] overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-neutral-400 bg-white shadow-xs"
                    : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif text-neutral-900 font-medium group-hover:text-neutral-700 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 flex items-center justify-center bg-white border border-neutral-200 text-neutral-700 rounded-full flex-shrink-0 transition-all duration-200 group-hover:border-neutral-400 group-hover:bg-neutral-50 ${
                      isOpen ? "bg-neutral-900 text-white border-neutral-900" : ""
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 pointer-events-none" />
                    ) : (
                      <Plus className="w-4 h-4 pointer-events-none" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-white animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Note */}
        <div className="mt-10 p-6 bg-neutral-50 border border-neutral-200 rounded-[19px] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-serif font-medium text-neutral-900">
              Have a special request or unlisted question?
            </h4>
            <p className="text-xs text-neutral-500 mt-0.5">
              Our 24-hour hospitality team is available on WhatsApp to assist right away.
            </p>
          </div>
          <a
            href={getGeneralWhatsAppUrl("I have a quick query before reserving a room.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#383838] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#484848] transition-colors whitespace-nowrap group rounded-lg"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

