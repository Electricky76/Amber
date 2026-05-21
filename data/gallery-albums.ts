/**
 * Each album = one carousel tile. Photos live under `public/images/weddings/`.
 *
 * When you add folders (e.g. in Assorted Wedding Photos or under weddings/):
 *   `The Mitchells — Kelly Costello Photography/` → 8 JPEGs inside
 * Set `title` (couple), `photographer`, and list each file in `images`.
 */
export type GalleryImage = { src: string; alt: string };

export type GalleryAlbum = {
  id: string;
  /** Couple / event name under the tile */
  title: string;
  /** Credit line, e.g. "Kelly Costello Photography" */
  photographer?: string;
  images: GalleryImage[];
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "nicole-matt",
    title: "Nicole & Matt",
    images: [
      { src: "/images/weddings/ralston-128.jpg", alt: "Nicole & Matt celebration" },
      { src: "/images/weddings/ralston-236.jpg", alt: "Nicole & Matt celebration" },
      { src: "/images/weddings/ralston-380.jpg", alt: "Nicole & Matt celebration" },
      { src: "/images/weddings/ralston-506.jpg", alt: "Nicole & Matt celebration" },
      { src: "/images/weddings/ralston-516.jpg", alt: "Nicole & Matt celebration" },
      { src: "/images/weddings/ralston-639.jpg", alt: "Nicole & Matt celebration" },
      { src: "/images/weddings/ralston-937.jpg", alt: "Nicole & Matt celebration" },
      { src: "/images/weddings/ralston-966.jpg", alt: "Nicole & Matt celebration" },
    ],
  },
  {
    id: "jenna-nico",
    title: "Jenna & Nico",
    photographer: "Under the Sun Photography",
    images: [
      {
        src: "/images/weddings/jn-bparty-11.jpg",
        alt: "Jenna & Nico celebration",
      },
      {
        src: "/images/weddings/jn-romantics-47.jpg",
        alt: "Jenna & Nico celebration",
      },
      {
        src: "/images/weddings/jn-romantics-77.jpg",
        alt: "Jenna & Nico celebration",
      },
    ],
  },
  {
    id: "gina-danny",
    title: "Gina & Danny",
    images: [
      { src: "/images/weddings/misc-1J1A9850.jpg", alt: "Gina & Danny celebration" },
      { src: "/images/weddings/misc-6I1A4824.jpg", alt: "Gina & Danny celebration" },
      { src: "/images/weddings/misc-6I1A5640.jpg", alt: "Gina & Danny celebration" },
      { src: "/images/weddings/misc-image001.jpg", alt: "Gina & Danny celebration" },
    ],
  },
  {
    id: "antoinette-kyle",
    title: "Antoinette & Kyle",
    images: [
      { src: "/images/weddings/ant-kyle-123.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/ant-kyle-125.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/misc-15236-16.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/misc-1J1A0258.jpg", alt: "Antoinette & Kyle celebration" },
    ],
  },
];
