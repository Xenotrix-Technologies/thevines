import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ROOMS, HOTEL_CONFIG } from "@/data/hotelData";
import RoomDetailClient from "./RoomDetailClient";

interface RoomPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ROOMS.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const room = ROOMS.find((r) => r.slug === params.slug);
  if (!room) return {};

  return {
    title: `${room.name} | THE VINES ROOMS`,
    description: room.description.slice(0, 160),
    openGraph: {
      title: `${room.name} - THE VINES ROOMS (Thiruvilwamala, Kerala)`,
      description: room.description.slice(0, 160),
      images: [
        {
          url: room.coverImage,
          width: 1200,
          height: 800,
          alt: room.name,
        },
      ],
    },
  };
}

export default function IndividualRoomPage({ params }: RoomPageProps) {
  const room = ROOMS.find((r) => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  // Related rooms (excluding current)
  const relatedRooms = ROOMS.filter((r) => r.id !== room.id);

  return <RoomDetailClient room={room} relatedRooms={relatedRooms} />;
}
