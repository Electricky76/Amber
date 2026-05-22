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

const buenos = (n: number) =>
  `/images/weddings/buenos-${String(n).padStart(2, "0")}.png`;

const munizes = (n: number) =>
  `/images/weddings/munizes-${String(n).padStart(2, "0")}.png`;

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
    images: Array.from({ length: 11 }, (_, i) => ({
      src: buenos(i + 1),
      alt: "The Buenos celebration",
    })),
  },
  {
    id: "munizes",
    title: "The Munizes",
    photographer: "Matthew Alvarado Co.",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: munizes(i + 1),
      alt: "The Munizes celebration",
    })),
  },
];
