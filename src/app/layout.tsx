import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppBookingModal from "@/components/WhatsAppBookingModal";
import { BookingProvider } from "@/components/BookingContext";
import { HOTEL_CONFIG } from "@/data/hotelData";

export const metadata: Metadata = {
  metadataBase: new URL("https://thevinesrooms.com"),
  title: {
    default: "THE VINES ROOMS | Premium Hotel in Thiruvilwamala, Kerala",
    template: "%s | THE VINES ROOMS",
  },
  description:
    "A peaceful Kerala retreat opposite Punarjani Gardens 2nd Gate in Thiruvilwamala. Enjoy air-conditioned rooms, free Wi-Fi, 24/7 security, power backup, dine-in facility, and seamless WhatsApp booking.",
  keywords: [
    "The Vines Rooms",
    "Hotel in Thiruvilwamala",
    "Punarjani Gardens Rooms",
    "Pazhayannur Hotels",
    "Thiruvilwamala Temple Accommodation",
    "Rooms near Pambady Ivormadom Temple",
    "Kuthampully Handloom Stay",
    "Kerala Boutique Hotel",
    "WhatsApp Hotel Booking Kerala",
  ],
  authors: [{ name: "THE VINES ROOMS" }],
  creator: "THE VINES ROOMS",
  publisher: "THE VINES ROOMS",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "THE VINES ROOMS | Premium Stay in Thiruvilwamala, Kerala",
    description:
      "A calm stay, a better experience. Discover comfortable, private rooms with AC, Wi-Fi, dine-in facilities, and verified hospitality in Thiruvilwamala near Punarjani Gardens.",
    url: "https://thevinesrooms.com",
    siteName: "THE VINES ROOMS",
    images: [
      {
        url: "/images/rooms/01JR0Z520PTM0FF5TE72P145EV.jpg",
        width: 1200,
        height: 800,
        alt: "THE VINES ROOMS Property Facade and Entrance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE VINES ROOMS | Premium Hotel in Thiruvilwamala, Kerala",
    description: "A calm stay, a better experience near Punarjani Gardens. Enquire via WhatsApp.",
    images: ["/images/rooms/01JR0Z520PTM0FF5TE72P145EV.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness & Hotel Schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://thevinesrooms.com#website",
        "url": "https://thevinesrooms.com/",
        "name": HOTEL_CONFIG.name,
      },
      {
        "@type": "Hotel",
        "@id": "https://thevinesrooms.com#hotel",
        "name": HOTEL_CONFIG.name,
        "url": "https://thevinesrooms.com/",
        "description":
          "The Vines Rooms offers a peaceful and comfortable retreat in the heart of Kerala, located at Thiruvilwamala, near Punarjani Gardens. Featuring Standard Double, Premium, and Executive Rooms with modern amenities.",
        "image": "/images/rooms/01JR0Z520PTM0FF5TE72P145EV.jpg",
        "telephone": HOTEL_CONFIG.contact.primaryPhone,
        "email": HOTEL_CONFIG.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": HOTEL_CONFIG.contact.address,
          "addressLocality": HOTEL_CONFIG.contact.locality,
          "addressRegion": HOTEL_CONFIG.contact.state,
          "postalCode": HOTEL_CONFIG.contact.pincode,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": HOTEL_CONFIG.contact.geo.lat,
          "longitude": HOTEL_CONFIG.contact.geo.lng,
        },
        "checkinTime": HOTEL_CONFIG.policies.checkIn,
        "checkoutTime": HOTEL_CONFIG.policies.checkOut,
        "numberOfRooms": 7,
        "priceRange": "$$",
        "amenityFeature": HOTEL_CONFIG.highlights.map((h) => ({
          "@type": "LocationFeatureSpecification",
          "name": h.title,
          "value": true,
        })),
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-neutral-900 min-h-screen flex flex-col antialiased">
        <BookingProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <WhatsAppBookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
