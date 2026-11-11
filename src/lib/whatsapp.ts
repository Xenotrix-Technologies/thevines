import { HOTEL_CONFIG } from "@/data/hotelData";

export interface BookingEnquiryData {
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number | string;
  rooms: number | string;
  phone?: string;
  additionalRequirements?: string;
}

/**
 * Builds the verified WhatsApp booking enquiry message matching the project specification.
 */
export function buildBookingWhatsAppMessage(data: BookingEnquiryData): string {
  const requirements = data.additionalRequirements?.trim() || "None";

  return `Hello THE VINES ROOMS,

I would like to enquire about a room booking.

Guest Name: ${data.guestName.trim()}
Room Type: ${data.roomType}
Check-in: ${data.checkIn}
Check-out: ${data.checkOut}
Guests: ${data.guests}
Rooms: ${data.rooms}
Additional Requirements: ${requirements}

Please share the availability and booking details.

Thank you.`;
}

/**
 * Generates the WhatsApp Click-to-Chat URL with URL-encoded message.
 * Supports custom number override via environment variable or default verified number.
 */
export function getWhatsAppBookingUrl(data: BookingEnquiryData): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || HOTEL_CONFIG.contact.whatsAppNumber;
  const message = buildBookingWhatsAppMessage(data);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a direct WhatsApp enquiry URL for general queries.
 */
export function getGeneralWhatsAppUrl(customNote?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || HOTEL_CONFIG.contact.whatsAppNumber;
  const defaultText = customNote
    ? `Hello THE VINES ROOMS, ${customNote}`
    : `Hello THE VINES ROOMS,\n\nI would like to enquire about room availability and services at your property in Thiruvilwamala.\n\nThank you.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
}

