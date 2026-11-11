export interface AmenityItem {
  name: string;
  icon: string;
}

export interface RoomImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface RoomType {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  occupancy: string;
  bedType: string;
  roomCount: number;
  featured: boolean;
  coverImage: string;
  images: RoomImage[];
  description: string;
  highlights: string[];
  amenities: AmenityItem[];
  pricePlaceholder?: string;
}

export interface HotelHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface HotelContact {
  address: string;
  landmark: string;
  locality: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
  primaryPhone: string;
  primaryPhoneRaw: string;
  secondaryPhone: string;
  secondaryPhoneRaw: string;
  email: string;
  whatsAppNumber: string;
  whatsAppDisplay: string;
  googleMapsUrl: string;
  geo: {
    lat: number;
    lng: number;
  };
  googleMapsEmbed: string;
}

export interface HotelPolicies {
  checkIn: string;
  checkOut: string;
  petPolicy: string;
  cancellation: string;
}

export interface HotelStat {
  label: string;
  value: string;
}

export interface HotelConfiguration {
  name: string;
  shortName: string;
  tagline: string;
  subheadline: string;
  establishedNote: string;
  contact: HotelContact;
  policies: HotelPolicies;
  highlights: HotelHighlight[];
  stats: HotelStat[];
}

export interface ReviewItem {
  id: string;
  name: string;
  date: string;
  source: string;
  rating: number;
  avatar?: string;
  quote: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  distanceOrType: string;
  description: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

