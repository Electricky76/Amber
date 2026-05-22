/**
 * Each album = one carousel tile. Photos live under `public/images/weddings/`.
 */
export type GalleryImage = { src: string; alt: string };

export type GalleryAlbum = {
  id: string;
  title: string;
  photographer?: string;
  images: GalleryImage[];
};

const mitchells = (n: number) =>
  `/images/weddings/nicole-matt-${String(n).padStart(2, "0")}.png`;

const ralstons = (n: number) =>
  `/images/weddings/ralstons-${String(n).padStart(2, "0")}.png`;

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "mitchells",
    title: "The Mitchells",
    photographer: "Kelly Costello Photography",
    images: Array.from({ length: 9 }, (_, i) => ({
      src: mitchells(i + 1),
      alt: "The Mitchells celebration",
    })),
  },
  {
    id: "ralstons",
    title: "The Ralstons",
    photographer: "Elizabeth Rey Photography",
    images: Array.from({ length: 14 }, (_, i) => ({
      src: ralstons(i + 1),
      alt: "The Ralstons celebration",
    })),
  },
  {
    id: "buenos",
    title: "The Buenos",
    photographer: "Under the Sun Photography",
    /** Placeholder until Buenos photos are dropped in chat — then swap paths here */
    images: [
      { src: "/images/weddings/jn-bparty-11.jpg", alt: "The Buenos celebration" },
      { src: "/images/weddings/jn-romantics-47.jpg", alt: "The Buenos celebration" },
      { src: "/images/weddings/jn-romantics-77.jpg", alt: "The Buenos celebration" },
    ],
  },
  {
    id: "antoinette-kyle",
    title: "Antoinette & Kyle",
    images: [
      { src: "/images/weddings/ant-kyle-123.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/ant-kyle-125.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/misc-15236-16.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/misc-6I1A5640.jpg", alt: "Antoinette & Kyle celebration" },
    ],
  },
];
