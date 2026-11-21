# THE VINES ROOMS – Premium Hotel Website

A modern, minimalist luxury hospitality website for **THE VINES ROOMS**, Thiruvilwamala, Kerala (Opposite 2nd Gate, Punarjani Gardens).

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## 🌿 Project Overview

The website transforms the hotel's digital presence into a calm, editorial-style boutique hospitality experience. It communicates comfort, privacy, and elegance while providing an integrated, frictionless WhatsApp booking enquiry flow.

- **Official Location:** Opp: 2nd Gate, Punarjani Gardens, Highway, Pazhayannur, Thiruvilwamala, Kerala 680588, India
- **Phone Numbers:** +91 79944 31227 / +91 97455 01726
- **Email:** thevines1227@gmail.com
- **Verified Reviews:** Authentic 5.0-star Google guest testimonials included

---

## 🎨 Monochrome Brand Identity & Design Direction

- **Primary Colours:**
  - Pure White – `#FFFFFF`
  - Light Gray / Off-white – `#F7F7F7`
  - Subtle Border Gray – `#EAEAEA`
  - Medium Gray – `#999999`
  - Dark Charcoal – `#333333`
  - Deep Black – `#0A0A0A`
- **Typography:** Sophisticated editorial serif for headings paired with modern clean sans-serif for optimal readability.
- **Visuals:** 100% authentic property photography from THE VINES ROOMS CDN (CloudFront) across exterior, interior, bedrooms, dining halls, and nearby Thiruvilwamala heritage spots.

---

## 🧭 Pages & Architecture

The website features five dedicated pages:

1. **Home (`/`):**
   - Immersive hero section with property imagery, branding, and dual CTAs (*Explore Rooms* & *Enquire on WhatsApp*).
   - About preview detailing location near Punarjani Gardens.
   - 8 Hotel Highlights with custom icons (Air-conditioned Rooms, Free Wi-Fi, 24-Hour Security, Power Backup, Housekeeping, Free Parking, Dine-in Facility, Travel Amenities).
   - Featured Rooms showcase with capacity, inclusions, and direct booking triggers.
   - Curated gallery teaser.
   - Surrounding attractions guide (Punarjani Gardens, Sree Vilwadrinatha Temple, Ivormadom Krishna Temple, Kunchan Nambiar Smarakam, Cheerakuzhy Dam, Kuthampully Handloom Village, Chulanur Peafowl Sanctuary, Varikkasseri Mana).
   - Verified guest testimonials with star ratings.
   - High-contrast final call to action.

2. **Gallery (`/gallery`):**
   - Filterable tabs: *All*, *Property*, *Rooms*, *Facilities*, *Surroundings*.
   - Responsive masonry/editorial image grid.
   - Fullscreen Lightbox with Next/Prev image navigation, keyboard arrow controls, escape-to-close, category badges, and image captions.

3. **Rooms (`/rooms`):**
   - Comprehensive showcase of all 3 room categories:
     - **Standard Double Room** (Double bed, attached bathroom, AC, Wi-Fi, mineral water, toiletries, smart TV)
     - **Premium Room** (Open balcony, double bed, electric kettle tea station, wardrobe, AC, Wi-Fi)
     - **Executive Room** (Spacious family suite accommodating up to 6 guests, Android TV, AC, dining area)
   - Interactive multi-image photo gallery slider for each room.
   - Full room features comparison matrix.
   - Hotel stay guidelines and policies (Check-in 12:00 PM, Check-out 11:00 AM, ID requirements, power backup).

4. **About Us (`/about`):**
   - Introduction to THE VINES ROOMS and property overview.
   - Hospitality philosophy: Uncompromised Privacy, Spotless Hygiene & Linens, Attentive Homely Care.
   - Facilities and services breakdown.
   - Location advantages opposite Punarjani Gardens.

5. **Contact Us (`/contact`):**
   - Property address, primary/secondary telephone links, official email.
   - Interactive embedded Google Maps integration.
   - Direct WhatsApp hospitality desk button.
   - Functional contact enquiry form connected to `/api/contact` with validation and reference ID tracking.
   - Directions and transit hub guide (Ottapalam, Shoranur, Pazhayannur Highway).

---

## 💬 WhatsApp Booking Enquiry Integration

When a visitor clicks **"Book This Room"** or **"WhatsApp Booking"**:
1. An accessible booking enquiry modal opens.
2. The selected room category is automatically populated.
3. The guest enters:
   - Full Name
   - Check-in & Check-out Dates
   - Guest Count & Room Count
   - Optional special requirements
4. Client validation ensures accurate information.
5. The form generates a formatted WhatsApp message:
   ```text
   Hello THE VINES ROOMS,

   I would like to enquire about a room booking.

   Guest Name: [Name]
   Room Type: [Selected Room]
   Check-in: [Date]
   Check-out: [Date]
   Guests: [Number]
   Rooms: [Number]
   Additional Requirements: [Message]

   Please share the availability and booking details.

   Thank you.
   ```
6. The user is redirected to the verified WhatsApp desk at `+91 79944 31227` (`https://wa.me/917994431227`).

---

## 🛠️ Development & Build

### Requirements
- Node.js 18+ (tested on Node v24)
- npm

### Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🔍 SEO & Best Practices

- Semantic HTML5 structure across all pages.
- Dynamic XML sitemap (`/sitemap.xml`) and robots file (`/robots.txt`).
- Rich Schema.org JSON-LD structured data (`Hotel`, `WebSite`, `PostalAddress`, `GeoCoordinates`).
- Open Graph and Twitter Card tags configured with authentic property hero visuals.
- Fully responsive across mobile, tablet, laptop, and desktop viewports.
