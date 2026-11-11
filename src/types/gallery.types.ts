export type GalleryCategory = "All" | "Property" | "Rooms" | "Facilities" | "Surroundings";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Property" | "Rooms" | "Facilities" | "Surroundings";
  image: string;
  alt: string;
  description?: string;
}

