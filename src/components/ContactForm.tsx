"use client";

import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { HOTEL_CONFIG } from "@/data/hotelData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [successMessage, setSuccessMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (minimum 2 characters).";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim() || phoneDigits.length < 8) {
      newErrors.phone = "Please enter a valid phone number (at least 8 digits).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Please write a message with at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setSuccessMessage(data.message);
        setReferenceId(data.referenceId || "");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white border border-neutral-200 p-6 sm:p-10 shadow-xs">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium block">
          Send An Enquiry
        </span>
        <h3 className="text-xl sm:text-2xl font-serif text-neutral-950 mt-1">
          How May We Assist You?
        </h3>
        <p className="text-xs text-neutral-500 mt-1">
          Fill out the details below. Our hospitality desk will respond within a few hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-3 text-neutral-900">
            <CheckCircle2 className="w-5 h-5 text-neutral-900" />
            <h4 className="font-serif text-lg">Message Delivered Successfully</h4>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {successMessage || "Thank you for contacting THE VINES ROOMS. We have logged your request and our management will contact you shortly."}
          </p>
          {referenceId && (
            <p className="text-[11px] font-mono text-neutral-500">
              Reference: <span className="font-bold text-neutral-800">{referenceId}</span>
            </p>
          )}

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setStatus("idle")}
              className="px-5 py-2.5 text-xs uppercase tracking-wider border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              Send Another Enquiry
            </button>
            <a
              href={`https://wa.me/${HOTEL_CONFIG.contact.whatsAppNumber}?text=${encodeURIComponent(
                `Hello THE VINES ROOMS, I just submitted an enquiry (Ref: ${referenceId}). Following up on WhatsApp.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs uppercase tracking-wider bg-[#383838] text-white font-medium hover:bg-[#484848] transition-colors flex items-center justify-center gap-2"
            >
              <span>Instant Follow-Up on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {status === "error" && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>Could not send message. Please check the details below and try again.</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                }}
                placeholder="Muhammed Ansil"
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 ${
                  errors.name ? "border-red-400 bg-red-50/20" : "border-neutral-200"
                }`}
              />
            </div>
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 ${
                    errors.email ? "border-red-400 bg-red-50/20" : "border-neutral-200"
                  }`}
                />
              </div>
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, phone: e.target.value }));
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  placeholder="+91 79944 31227"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 ${
                    errors.phone ? "border-red-400 bg-red-50/20" : "border-neutral-200"
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-neutral-700 mb-1">
              Message / Inquiries <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, message: e.target.value }));
                  if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                }}
                placeholder="Tell us about your planned arrival, questions regarding amenities, or special requests..."
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border transition-colors focus:bg-white focus:outline-none focus:border-neutral-900 resize-none ${
                  errors.message ? "border-red-400 bg-red-50/20" : "border-neutral-200"
                }`}
              />
            </div>
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#383838] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#484848] transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

