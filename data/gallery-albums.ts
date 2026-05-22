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
  `/images/weddings/nicole-matt-${String(n).padStart(2, "0")}.jpg`;

const ralstons = (n: number) =>
  `/images/weddings/ralstons-${String(n).padStart(2, "0")}.jpg`;

const buenos = (n: number) =>
  `/images/weddings/buenos-${String(n).padStart(2, "0")}.jpg`;

const munizes = (n: number) =>
  `/images/weddings/munizes-${String(n).padStart(2, "0")}.jpg`;

/** Put Amber’s chosen “featured” slide first; rest keep original numbering order. */
function albumImages(
  src: (n: number) => string,
  count: number,
  featured: number,
  alt: string
): GalleryImage[] {
  const order = [
    featured,
    ...Array.from({ length: count }, (_, i) => i + 1).filter((n) => n !== featured),
  ];
  return order.map((n) => ({ src: src(n), alt }));
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "mitchells",
    title: "The Mitchells",
    photographer: "Kelly Costello Photography",
    images: albumImages(mitchells, 9, 3, "The Mitchells celebration"),
  },
  {
    id: "ralstons",
    title: "The Ralstons",
    photographer: "Elizabeth Rey Photography",
    images: albumImages(ralstons, 14, 3, "The Ralstons celebration"),
  },
  {
    id: "buenos",
    title: "The Buenos",
    photographer: "Under the Sun Photography",
    images: albumImages(buenos, 13, 12, "The Buenos celebration"),
  },
  {
    id: "munizes",
    title: "The Munizes",
    photographer: "Matthew Alvarado Co.",
    images: albumImages(munizes, 8, 7, "The Munizes celebration"),
  },
];
