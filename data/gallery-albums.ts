/**
 * Each album = one tile in the gallery grid. Arrows cycle only within that tile.
 * Group by couple / event / vibe — add files under `public/images/` and list
 * them here (same image can appear in multiple albums if needed for demos).
 */
export type GalleryImage = { src: string; alt: string };

export type GalleryAlbum = {
  id: string;
  /** Shown under the tile */
  title: string;
  images: GalleryImage[];
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "outdoor-ceremony",
    title: "Outdoor ceremony & vows",
    images: [
      { src: "/images/gallery-01.jpg", alt: "Wedding ceremony in garden setting" },
      { src: "/images/gallery-02.jpg", alt: "Celebration florals and tablescape" },
      { src: "/images/gallery-03.jpg", alt: "Romantic wedding moment" },
    ],
  },
  {
    id: "reception-details",
    title: "Reception & design details",
    images: [
      { src: "/images/gallery-02.jpg", alt: "Reception tablescape and florals" },
      { src: "/images/gallery-03.jpg", alt: "Evening celebration detail" },
      { src: "/images/gallery-01.jpg", alt: "Venue and guest experience" },
    ],
  },
  {
    id: "portraits-moments",
    title: "Portraits & candid moments",
    images: [
      { src: "/images/gallery-03.jpg", alt: "Intimate couple portrait" },
      { src: "/images/gallery-01.jpg", alt: "Wedding party and architecture" },
      { src: "/images/gallery-02.jpg", alt: "Floral installation detail" },
    ],
  },
];
