import { HotelConfiguration } from "@/types/hotel.types";

export const HOTEL_CONFIG: HotelConfiguration = {
  name: "THE VINES ROOMS",
  shortName: "The Vines",
  tagline: "A Calm Stay. A Better Experience.",
  subheadline: "A peaceful Kerala retreat near Punarjani Gardens with modern hospitality essentials.",
  establishedNote: "Thiruvilwamala, Thrissur, Kerala",

  // Contact details & Google Maps
  contact: {
    address: "Opp: 2nd Gate, Punarjani Gardens, Highway, Pazhayannur, Thiruvilwamala, Kerala 680588, India",
    landmark: "Opposite 2nd Gate, Punarjani Gardens",
    locality: "Thiruvilwamala",
    district: "Thrissur",
    state: "Kerala",
    pincode: "680588",
    country: "India",
    primaryPhone: "+91 79944 31227",
    primaryPhoneRaw: "7994431227",
    secondaryPhone: "+91 97455 01726",
    secondaryPhoneRaw: "9745501726",
    email: "thevines1227@gmail.com",
    whatsAppNumber: "917994431227",
    whatsAppDisplay: "+91 79944 31227",
    googleMapsUrl: "https://maps.app.goo.gl/eHxTzBukZ9Va5X8k8",
    geo: {
      lat: 10.7109966,
      lng: 76.428338,
    },
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.407945037682!2d76.42576307584742!3d10.71099659236585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d56e06b7d2eb%3A0xe54b8d7a1e0b57ea!2sThe%20Vines%20Rooms!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  policies: {
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Contact management for pet guidelines",
    cancellation: "Subject to booking terms upon enquiry",
  },

  highlights: [
    {
      title: "Air-Conditioned Rooms",
      description: "Individual climate control in all rooms for optimum comfort in Kerala's tropical climate.",
      icon: "Snowflake",
    },
    {
      title: "High-Speed Free Wi-Fi",
      description: "Fast, dependable internet access across the property for work or leisure streaming.",
      icon: "Wifi",
    },
    {
      title: "24-Hour Security",
      description: "Round-the-clock security and monitored premises ensuring complete peace of mind.",
      icon: "ShieldCheck",
    },
    {
      title: "Power Backup",
      description: "Continuous generator backup ensuring uninterrupted lighting and cooling.",
      icon: "Zap",
    },
    {
      title: "Dedicated Housekeeping",
      description: "Daily room upkeep, pristine linens, and fresh sanitized amenities.",
      icon: "Sparkles",
    },
    {
      title: "Free On-Site Parking",
      description: "Secure, accessible parking space for cars and bikes within hotel premises.",
      icon: "Car",
    },
    {
      title: "Dine-in Facility",
      description: "A comfortable, welcoming dining space providing delicious homestyle meals.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Travel Amenities & Support",
      description: "Local guidance, travel assistance, and attentive concierge support.",
      icon: "Compass",
    },
  ],

  stats: [
    { label: "Comfortable Rooms", value: "7" },
    { label: "Guest Satisfaction", value: "5.0 ★" },
    { label: "Security & Assistance", value: "24/7" },
    { label: "Serene Location", value: "Punarjani" },
  ],
};

