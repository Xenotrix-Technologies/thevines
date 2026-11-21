// Re-export types
export * from "@/types/hotel.types";
export * from "@/types/gallery.types";
export * from "@/types/booking.types";

// Re-export central config
export { HOTEL_CONFIG } from "@/config/hotel.config";

// Re-export FAQs
export { FAQS } from "./faqs.data";

// Detailed Room Categories
import { RoomType } from "@/types/hotel.types";
import { GalleryItem } from "@/types/gallery.types";
import { ReviewItem, AttractionItem } from "@/types/hotel.types";

export const ROOMS: RoomType[] = [
  {
    id: "standard-double",
    slug: "standard-double-room",
    name: "Standard Double Room",
    tagline: "Homely Comfort with Modern Essentials",
    occupancy: "Up to 3 Guests",
    bedType: "Double Bed",
    roomCount: 4,
    featured: true,
    coverImage: "/images/01JQX8P68F6F9ENXAX1G06NE9N.jpg",
    images: [
      {
        url: "/images/01JQX8P68F6F9ENXAX1G06NE9N.jpg",
        alt: "Standard Double Room Bed & Interior - The Vines Rooms",
        caption: "Inviting double bed with comfortable linens and natural lighting",
      },
      {
        url: "/images/01JQDFK90A68M2KVJ68KNQX1FK.jpg",
        alt: "Standard Double Room Wardrobe and layout",
        caption: "Spacious room arrangement with dedicated storage wardrobe",
      },
      {
        url: "/images/01JQDFK9RNYB6Z05QG9610HPC2.jpg",
        alt: "Standard Double Room Side Angle",
        caption: "Clean, uncluttered layout designed for a restful stay",
      },
      {
        url: "/images/01JQDFKAHX9A23YD33T3KAD6Y4.jpg",
        alt: "Standard Double Room TV & Seating",
        caption: "Entertainment corner with smart TV and seating",
      },
      {
        url: "/images/01JQDFKBAQTH4K4KEZMRB6EP53.jpg",
        alt: "Standard Double Room Attached Bathroom",
        caption: "Attached sanitary bathroom with modern fixtures",
      },
      {
        url: "/images/01JQDFKDAJ541WCJQFH1XXET35.jpg",
        alt: "Standard Double Room Bathroom Fittings",
        caption: "Shower setup with complimentary toiletries",
      },
    ],
    description:
      "Our Standard Double Room offers an ideal sanctuary for travelers and couples seeking calm, clean, and private accommodation in Thiruvilwamala. Featuring an inviting double bed, whisper-quiet air conditioning, an attached private bathroom, and entertainment essentials, it delivers dependable comfort and great value.",
    highlights: [
      "Comfortable Double Bed",
      "Attached Private Bathroom",
      "Individual Climate Control AC",
      "High-Speed Free Wi-Fi",
      "Complimentary Mineral Water & Toiletries",
    ],
    amenities: [
      { name: "Double Bed", icon: "BedDouble" },
      { name: "Attached Bathroom", icon: "ShowerHead" },
      { name: "Free Wi-Fi", icon: "Wifi" },
      { name: "Air Conditioning", icon: "Snowflake" },
      { name: "Mineral Water", icon: "GlassWater" },
      { name: "Soap & Shampoo", icon: "Sparkles" },
      { name: "Wardrobe / Closet", icon: "DoorClosed" },
      { name: "LED Smart TV", icon: "Tv" },
      { name: "Bedside Power Sockets", icon: "PlugZap" },
      { name: "Room Chair & Fan", icon: "Armchair" },
      { name: "Free On-Site Parking", icon: "Car" },
      { name: "Daily Housekeeping", icon: "SprayCan" },
    ],
    pricePlaceholder: "Direct tariff available upon enquiry",
  },
  {
    id: "premium-room",
    slug: "premium-room",
    name: "Premium Room",
    tagline: "Airy Space with Open Balcony & Refreshing Breezes",
    occupancy: "Up to 3 Guests",
    bedType: "Double Bed",
    roomCount: 2,
    featured: true,
    coverImage: "/images/01JR0ZHXCCTS132SPBZ9WM7633.jpg",
    images: [
      {
        url: "/images/01JR0ZHXCCTS132SPBZ9WM7633.jpg",
        alt: "Premium Room Master Bedroom - The Vines Rooms",
        caption: "Serene bedroom with plush bedding and private balcony access",
      },
      {
        url: "/images/01JQDFSG9TAWDZT3361NR2WYQZ.jpg",
        alt: "Premium Room Balcony View & Natural Light",
        caption: "Ample natural daylight filtering into the calm suite",
      },
      {
        url: "/images/01JQDFSVW8SQ4P3VNSQWGNRQ0P.jpg",
        alt: "Premium Room Desk & Kettle Station",
        caption: "Electric kettle tea station and wardrobe storage",
      },
      {
        url: "/images/01JQDFSY4DE44J36WF822EDE52.jpg",
        alt: "Premium Room Seating and Comfort",
        caption: "Comfortable seating area for relaxed mornings",
      },
      {
        url: "/images/01JQDFSZ5R79N591DQ7TV08X7H.jpg",
        alt: "Premium Room Android TV Setup",
        caption: "Android TV entertainment setup and wireless internet",
      },
      {
        url: "/images/01JQDFT0DDAWE3H5D24CRPJ21D.jpg",
        alt: "Premium Room Attached Bathroom",
        caption: "Spacious attached bathroom with hot water shower",
      },
      {
        url: "/images/01JQDFT3Q9ER8B1TM7EN5P736K.jpg",
        alt: "Premium Room Detail 1",
        caption: "Neatly maintained amenities and spotless finishes",
      },
      {
        url: "/images/01JQDFT4YGRMWZ3M0AT3FWT1N6.jpg",
        alt: "Premium Room Detail 2",
        caption: "Thoughtful hospitality touches throughout the room",
      },
    ],
    description:
      "Step into enhanced relaxation in our Premium Room. Featuring a private open balcony that captures the refreshing Kerala breeze, this room comes outfitted with an electric kettle, dedicated dining table, premium bedding, and a peaceful ambiance tailored for restorative retreats.",
    highlights: [
      "Private Open Balcony",
      "In-Room Electric Kettle for Tea & Coffee",
      "Premium Bedding & Linens",
      "Attached Bathroom with Modern Fittings",
      "High-Speed Wi-Fi & Android TV",
    ],
    amenities: [
      { name: "Double Bed", icon: "BedDouble" },
      { name: "Open Balcony", icon: "Maximize" },
      { name: "Air Conditioning", icon: "Snowflake" },
      { name: "Electric Kettle", icon: "Coffee" },
      { name: "Wardrobe or Closet", icon: "DoorClosed" },
      { name: "Free Wi-Fi", icon: "Wifi" },
      { name: "Android TV", icon: "Tv" },
      { name: "Attached Bathroom", icon: "ShowerHead" },
      { name: "Dining Table & Chairs", icon: "Utensils" },
      { name: "Premium Bedding", icon: "Moon" },
      { name: "Mineral Water", icon: "GlassWater" },
      { name: "Soap & Shampoo", icon: "Sparkles" },
    ],
    pricePlaceholder: "Direct tariff available upon enquiry",
  },
  {
    id: "executive-room",
    slug: "executive-room",
    name: "Executive Room",
    tagline: "Expansive Accommodation Ideal for Families & Groups",
    occupancy: "Up to 6 Guests",
    bedType: "Double Bed / Flexible Setup",
    roomCount: 1,
    featured: true,
    coverImage: "/images/01JQDFWP5W2K7B65H9Q90XC74R.jpg",
    images: [
      {
        url: "/images/01JQDFWP5W2K7B65H9Q90XC74R.jpg",
        alt: "Executive Room Main View - The Vines Rooms",
        caption: "Generous suite layout accommodating up to 6 guests with ease",
      },
      {
        url: "/images/01JQDFYN6A57Y1BQA966Z3TZ3S.jpg",
        alt: "Executive Room Interior & Furniture",
        caption: "Refined decor, premium furnishings, and dining setup",
      },
      {
        url: "/images/01JQDFYHK097NW53SCM2HKT9B4.jpg",
        alt: "Executive Room Bathroom & Amenities",
        caption: "Attached sanitary bathroom with continuous water and power backup",
      },
    ],
    description:
      "Designed for families, extended travel parties, and guests seeking superior space, the Executive Room accommodates up to 6 guests comfortably. Enjoy a spacious living environment, Android TV, attached bathroom, dining area, and dedicated hospitality assistance throughout your stay.",
    highlights: [
      "Accommodates up to 6 Guests",
      "Spacious Living & Bedroom Layout",
      "Large Android Smart TV",
      "Attached Bathroom with Modern Amenities",
      "Power Backup & 24/7 Security",
    ],
    amenities: [
      { name: "Double Bed Setup", icon: "BedDouble" },
      { name: "Air Conditioning", icon: "Snowflake" },
      { name: "Attached Bathroom", icon: "ShowerHead" },
      { name: "Free Wi-Fi", icon: "Wifi" },
      { name: "Android TV", icon: "Tv" },
      { name: "Dining Table & Chairs", icon: "Utensils" },
      { name: "Wardrobe or Closet", icon: "DoorClosed" },
      { name: "Soap & Shampoo", icon: "Sparkles" },
      { name: "Bedside Power Sockets", icon: "PlugZap" },
      { name: "Mineral Water", icon: "GlassWater" },
      { name: "Free On-Site Parking", icon: "Car" },
      { name: "Daily Housekeeping", icon: "SprayCan" },
    ],
    pricePlaceholder: "Direct tariff available upon enquiry",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Property
  {
    id: "prop-1",
    title: "Property Facade & Arrival Gate",
    category: "Property",
    image: "/images/01JR0Z520PTM0FF5TE72P145EV.jpg",
    alt: "The Vines Rooms exterior architecture and driveway",
    description: "Serene building facade set along the peaceful highway opposite Punarjani Gardens.",
  },
  {
    id: "prop-2",
    title: "Property Courtyard & Entrance",
    category: "Property",
    image: "/images/01JQDD89CKAFP6D3JZSNDECK4A.jpeg",
    alt: "The Vines Rooms courtyard and building entrance",
    description: "Warm and inviting entrance welcoming travelers into a peaceful oasis.",
  },
  {
    id: "prop-3",
    title: "Property Garden Pathway",
    category: "Property",
    image: "/images/01JQDD9YE366SE95M9DB6RJBZH.jpeg",
    alt: "Walkway and greenery outside The Vines Rooms",
    description: "Quiet surroundings with fresh air and green Kerala landscape.",
  },
  {
    id: "prop-4",
    title: "Front Porch & Architecture",
    category: "Property",
    image: "/images/01JQDDBJ0YQCB5PM5G424WBH96.jpeg",
    alt: "Porch and exterior design of The Vines Rooms",
    description: "Clean architectural lines offering privacy and security.",
  },
  {
    id: "prop-5",
    title: "Terrace & Property Perspective",
    category: "Property",
    image: "/images/01JQDDBNAEF6TD4PWTY6SDA4WA.jpeg",
    alt: "Property perspective showing balconies and privacy",
    description: "Spacious layout with generous open balconies and privacy.",
  },

  // Rooms
  {
    id: "room-g-1",
    title: "Standard Double Room Bedroom",
    category: "Rooms",
    image: "/images/01JQX8P68F6F9ENXAX1G06NE9N.jpg",
    alt: "Standard Double Room with clean white linens",
    description: "Well-appointed double bed with clean lines and calm lighting.",
  },
  {
    id: "room-g-2",
    title: "Premium Room Balcony Suite",
    category: "Rooms",
    image: "/images/01JR0ZHXCCTS132SPBZ9WM7633.jpg",
    alt: "Premium Room with private balcony",
    description: "Airy bedroom enjoying direct natural ventilation and balcony access.",
  },
  {
    id: "room-g-3",
    title: "Executive Suite Living & Sleeping",
    category: "Rooms",
    image: "/images/01JQDFWP5W2K7B65H9Q90XC74R.jpg",
    alt: "Executive room with large layout for 6 guests",
    description: "Extensive room footprint suited for family occasions and groups.",
  },
  {
    id: "room-g-4",
    title: "Room Wardrobe & Organization",
    category: "Rooms",
    image: "/images/01JQDFK90A68M2KVJ68KNQX1FK.jpg",
    alt: "Storage and wardrobe space in guest rooms",
    description: "Practical wardrobe storage for short visits and long stays.",
  },
  {
    id: "room-g-5",
    title: "Clean Sanitized Bathroom",
    category: "Rooms",
    image: "/images/01JQDFKBAQTH4K4KEZMRB6EP53.jpg",
    alt: "Attached bathroom with shower and vanity",
    description: "Pristine attached bathrooms with water heater and quality fixtures.",
  },
  {
    id: "room-g-6",
    title: "Guest Room Daylight View",
    category: "Rooms",
    image: "/images/01JQDFSVW8SQ4P3VNSQWGNRQ0P.jpg",
    alt: "Bright guest bedroom interior",
    description: "Sunlit room interior with bedside lamp and tea-making station.",
  },

  // Facilities
  {
    id: "fac-1",
    title: "Dine-in Facility & Breakfast Hall",
    category: "Facilities",
    image: "/images/01JR1015ZE6JG3WWQJQEXNBC3H.jpg",
    alt: "Dine-in area at The Vines Rooms",
    description: "Warm, comfortable dining space serving delicious meals to in-house guests.",
  },
  {
    id: "fac-2",
    title: "Dining Setup & Atmosphere",
    category: "Facilities",
    image: "/images/01JR101HHBKAECA24EJTZA1XYW.jpg",
    alt: "Dining room furniture and ambiance",
    description: "Neat dining tables prepared for family meals and relaxed morning tea.",
  },
  {
    id: "fac-3",
    title: "Property Lounge & Reception Space",
    category: "Facilities",
    image: "/images/01JR0ZTK32EXSM8FX29A0HB15A.jpg",
    alt: "Lounge and guest reception at The Vines Rooms",
    description: "Welcoming reception area with on-demand concierge assistance.",
  },
  {
    id: "fac-4",
    title: "Corridors & Guest Access",
    category: "Facilities",
    image: "/images/01JR0ZYJQDJ10MB2WSFFNP4EFS.jpg",
    alt: "Wide, well-lit guest corridors",
    description: "Safe, well-illuminated hallways with 24-hour surveillance cameras.",
  },
  {
    id: "fac-5",
    title: "Common Area & Seating",
    category: "Facilities",
    image: "/images/01JR0ZYMPQVT6VQ5VJAR84HG6X.jpg",
    alt: "Common seating area for travelers",
    description: "Peaceful common zones for unwinding with a book or cup of chai.",
  },
  {
    id: "fac-6",
    title: "Travel Amenities & Parking Area",
    category: "Facilities",
    image: "/images/01JR0Z9D0SE15CFRBW3SPSBS0W.jpg",
    alt: "Parking and vehicle access on property grounds",
    description: "Spacious parking grounds for safe overnight vehicle storage.",
  },

  // Surroundings
  {
    id: "sur-1",
    title: "Thiruvilwamala Sree Vilwadrinatha Temple",
    category: "Surroundings",
    image: "/images/thiruvilwamala-sree-vilwadrinatha-temple-pidffpxq.jpg",
    alt: "Thiruvilwamala Sree Vilwadrinatha Temple",
    description: "Prominent historic Hindu temple dedicated to Lord Vilwadrinatha, set on a calm hill.",
  },
  {
    id: "sur-2",
    title: "Kuthampully Handloom Village",
    category: "Surroundings",
    image: "/images/traditional-handloom-workshop-weaving.png",
    alt: "Traditional handloom workshop weaving at Kuthampully Handloom Village",
    description: "Famous heritage village renowned across India for traditional Kasavu handwoven sarees and artisan pit loom weaving.",
  },
  {
    id: "sur-3",
    title: "Pambady Ivormadom Sree Krishna Temple",
    category: "Surroundings",
    image: "/images/pambady-ivormadom-sreekrishna-temple-pha1lsww.jpg",
    alt: "Pambady Ivormadom Sree Krishna Temple",
    description: "Revered spiritual temple located along the sacred banks of the Bharathapuzha river.",
  },
  {
    id: "sur-4",
    title: "Cheerakuzhy Dam & Reservoir",
    category: "Surroundings",
    image: "/images/Cheerakuzhi-dam.webp",
    alt: "Scenic masonry weir and reservoir waters at Cheerakuzhy Dam in Pazhayannur",
    description: "Peaceful irrigation dam and masonry weir across Gayathripuzha river in Pazhayannur, known for calm waters and tranquil green surroundings.",
  },
  {
    id: "sur-5",
    title: "Kunchan Nambiar Smarakam",
    category: "Surroundings",
    image: "/images/kunjan-nambiar-smarakam.webp",
    alt: "Kunchan Nambiar Smarakam memorial and cultural center in Killikkurussimangalam",
    description: "Historic memorial at Kalakkath House, the birthplace of legendary satirist Kunchan Nambiar, featuring an active Kalithattu stage, museum, and Ottan Thullal cultural exhibits.",
  },
  {
    id: "sur-6",
    title: "Varikkasseri Mana Heritage Illam",
    category: "Surroundings",
    image: "/images/varikkasseri-mana.jpg",
    alt: "Traditional Kerala architecture of Varikkasseri Mana in Manissery",
    description: "Magnificent three-storied 1902 Nalukettu mansion in Manissery, famed as the quintessential heritage home in Malayalam cinema.",
  },
  {
    id: "sur-7",
    title: "Chulanur Peafowl Sanctuary",
    category: "Surroundings",
    image: "/images/Chulannur.jpg",
    alt: "Wild peafowls and nature trails at Chulanur Peafowl Sanctuary Mayiladumpara",
    description: "Kerala's only dedicated peafowl sanctuary in Mayiladumpara, famed for free-roaming Indian peafowls, canopy watchtowers, and serene deciduous forest trails.",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Muhammed Ansil",
    date: "November 2025",
    source: "Google Verified Review",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK2bRUFYhXIbm6Ux15IbDdJvg5SDy9m0nos3aiaOjMQQPFbHQ=s128-c0x00000000-cc-rp-mo",
    quote:
      "I had a wonderful stay at these rooms, which were good and have a nice environment. The staff were welcoming and treated us well. I’d happily recommend this place to anyone looking for a comfortable and peaceful stay.",
  },
  {
    id: "rev-2",
    name: "AJAY RAJ",
    date: "November 2025",
    source: "Google Verified Review",
    rating: 5,
    quote:
      "The Vines welcoming stay with beautifully maintained rooms, excellent food, and truly exceptional hospitality. The peaceful surroundings and comfortable amenities make it perfect for me and my friends. We got caring hospitality throughout.",
  },
  {
    id: "rev-3",
    name: "Vaishnavy PV",
    date: "November 2025",
    source: "Google Verified Review",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVkff6qZ6UkmhKoYpBghKghTFbBf1iFGUHgz1DPf1vYhdL-0tF1Iw=s128-c0x00000000-cc-rp",
    quote:
      "My family and I really enjoyed our stay here. The room was neat, well-kept, and comfortable for all of us. The staff were kind, welcoming, and very supportive throughout our stay. We were happy with the calm atmosphere and safety.",
  },
  {
    id: "rev-4",
    name: "ARJUN OR",
    date: "November 2025",
    source: "Google Verified Review",
    rating: 5,
    quote:
      "I had an exceptional stay—the room was spotless, the staff were incredibly welcoming, and the amenities were top-notch. I’d happily return and highly recommend this hotel to anyone looking for comfort and great service.",
  },
  {
    id: "rev-5",
    name: "Abhi Ram",
    date: "November 2025",
    source: "Google Verified Review",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWAgtBBDz-DqZsGhz4VfrqzEfveOPjxx3k6q6pUJvzF_UZlhw4=s128-c0x00000000-cc-rp-mo",
    quote:
      "My family and I had a wonderful 3-day stay at this place during a family occasion. The rooms truly stand out in the locality for safety, privacy, cleanliness, and quality standards. The staff were exceptional and available whenever needed.",
  },
  {
    id: "rev-6",
    name: "KL RANGER GAMER",
    date: "November 2025",
    source: "Google Verified Review",
    rating: 5,
    quote:
      "I had a great experience with the service. The rooms were very tidy, and the price was reasonable. We had a nice stay. Very calm surroundings!",
  },
];

export const NEARBY_ATTRACTIONS: AttractionItem[] = [
  {
    id: "punarjani-gardens",
    name: "Punarjani Gardens",
    distanceOrType: "Right Opposite (1 min walk)",
    description: "Located directly opposite the hotel's 2nd gate. A lush recreational spot for quiet walks and natural relaxation.",
    image: "/images/01JQDD9YE366SE95M9DB6RJBZH.jpeg",
  },
  {
    id: "vilwadrinatha-temple",
    name: "Thiruvilwamala Sree Vilwadrinatha Temple",
    distanceOrType: "3.2 km (7 min drive)",
    description: "Historic hilltop Hindu temple dedicated to Lord Vilwadrinatha, famed for traditional festivals and spiritual tranquility.",
    image: "/images/thiruvilwamala-sree-vilwadrinatha-temple-pidffpxq.jpg",
  },
  {
    id: "ivormadom-temple",
    name: "Pambady Ivormadom Krishna Temple",
    distanceOrType: "4.8 km (9 min drive)",
    description: "Revered temple nestled along the banks of Bharathapuzha, closely linked with epic Mahabharata folklore.",
    image: "/images/pambady-ivormadom-sreekrishna-temple-pha1lsww.jpg",
  },
  {
    id: "kunchan-smarakam",
    name: "Kunchan Nambiar Smarakam",
    distanceOrType: "5.5 km (12 min drive)",
    description: "Cultural monument at the birthplace of legendary poet Kunchan Nambiar in Killikkurussimangalam, honoring the creator of Ottan Thullal with a museum and performance stage.",
    image: "/images/kunjan-nambiar-smarakam.webp",
  },
  {
    id: "cheerakuzhy-dam",
    name: "Cheerakuzhy Dam & Reservoir",
    distanceOrType: "6.0 km (11 min drive)",
    description: "Peaceful irrigation dam and masonry weir on Gayathripuzha river in Pazhayannur, offering tranquil waters and green surroundings.",
    image: "/images/Cheerakuzhi-dam.webp",
  },
  {
    id: "kuthampully",
    name: "Kuthampully Handloom Heritage Village",
    distanceOrType: "6.5 km (12 min drive)",
    description: "Nationally recognized weaving village known for authentic Kerala Kasavu handloom textiles and artisan heritage.",
    image: "/images/traditional-handloom-workshop-weaving.png",
  },
  {
    id: "chulanur-sanctuary",
    name: "Chulanur Peafowl Sanctuary",
    distanceOrType: "8.5 km (18 min drive)",
    description: "Kerala's only dedicated peafowl sanctuary in Mayiladumpara, featuring free-roaming wild Indian peafowls, watchtowers, and forest trails.",
    image: "/images/Chulannur.jpg",
  },
  {
    id: "varikkasseri-mana",
    name: "Varikkasseri Mana",
    distanceOrType: "13 km (22 min drive)",
    description: "Iconic 1902 traditional Kerala Nalukettu aristocratic illam in Manissery, celebrated as the historic backdrop for legendary Malayalam films.",
    image: "/images/varikkasseri-mana.jpg",
  },
];
