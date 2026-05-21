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

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "mitchells",
    title: "The Mitchells",
    photographer: "Kelly Costello Photography",
    images: [
      { src: mitchells(1), alt: "The Mitchells — wedding stationery" },
      { src: mitchells(2), alt: "The Mitchells — cake cutting" },
      { src: mitchells(3), alt: "The Mitchells — ceremony" },
      { src: mitchells(4), alt: "The Mitchells — bride and florals" },
      { src: mitchells(5), alt: "The Mitchells — reception tablescape" },
      { src: mitchells(6), alt: "The Mitchells — ceremony setting" },
      { src: mitchells(7), alt: "The Mitchells — reception dancing" },
      { src: mitchells(8), alt: "The Mitchells — lounge detail" },
      { src: mitchells(9), alt: "The Mitchells — rooftop celebration" },
    ],
  },
  {
    id: "jenna-nico",
    title: "Jenna & Nico",
    photographer: "Under the Sun Photography",
    images: [
      { src: "/images/weddings/jn-bparty-11.jpg", alt: "Jenna & Nico celebration" },
      { src: "/images/weddings/jn-romantics-47.jpg", alt: "Jenna & Nico celebration" },
      { src: "/images/weddings/jn-romantics-77.jpg", alt: "Jenna & Nico celebration" },
    ],
  },
  {
    id: "gina-danny",
    title: "Gina & Danny",
    images: [
      { src: "/images/weddings/misc-6I1A5640.jpg", alt: "Gina & Danny celebration" },
      { src: "/images/weddings/misc-image001.jpg", alt: "Gina & Danny celebration" },
      { src: "/images/weddings/ralston-506.jpg", alt: "Gina & Danny celebration" },
    ],
  },
  {
    id: "antoinette-kyle",
    title: "Antoinette & Kyle",
    images: [
      { src: "/images/weddings/ant-kyle-123.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/ant-kyle-125.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/misc-15236-16.jpg", alt: "Antoinette & Kyle celebration" },
      { src: "/images/weddings/ralston-937.jpg", alt: "Antoinette & Kyle celebration" },
    ],
  },
];
