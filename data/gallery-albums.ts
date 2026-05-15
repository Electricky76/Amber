/**
 * Each album = one carousel tile. Files live under `public/images/weddings/`.
 */
export type GalleryImage = { src: string; alt: string };

export type GalleryAlbum = {
  id: string;
  title: string;
  images: GalleryImage[];
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "ralston",
    title: "Ralston wedding",
    images: [
      { src: "/images/weddings/ralston-128.jpg", alt: "Ralston wedding celebration" },
      { src: "/images/weddings/ralston-236.jpg", alt: "Ralston wedding celebration" },
      { src: "/images/weddings/ralston-380.jpg", alt: "Ralston wedding celebration" },
      { src: "/images/weddings/ralston-506.jpg", alt: "Ralston wedding celebration" },
      { src: "/images/weddings/ralston-516.jpg", alt: "Ralston wedding celebration" },
      { src: "/images/weddings/ralston-639.jpg", alt: "Ralston wedding celebration" },
      { src: "/images/weddings/ralston-937.jpg", alt: "Ralston wedding celebration" },
      { src: "/images/weddings/ralston-966.jpg", alt: "Ralston wedding celebration" },
    ],
  },
  {
    id: "j-and-n",
    title: "J & N",
    images: [
      {
        src: "/images/weddings/jn-bparty-11.jpg",
        alt: "J & N bachelor party — Under the Sun Photography",
      },
      {
        src: "/images/weddings/jn-romantics-47.jpg",
        alt: "J & N romantics — Under the Sun Photography",
      },
      {
        src: "/images/weddings/jn-romantics-77.jpg",
        alt: "J & N romantics — Under the Sun Photography",
      },
    ],
  },
  {
    id: "more-celebrations",
    title: "More celebrations",
    images: [
      { src: "/images/weddings/ant-kyle-123.jpg", alt: "Ant & Kyle wedding" },
      { src: "/images/weddings/ant-kyle-125.jpg", alt: "Ant & Kyle wedding" },
      { src: "/images/weddings/misc-15236-16.jpg", alt: "Wedding celebration" },
      { src: "/images/weddings/misc-1J1A0258.jpg", alt: "Wedding celebration" },
      { src: "/images/weddings/misc-1J1A9850.jpg", alt: "Wedding celebration" },
      { src: "/images/weddings/misc-6I1A4824.jpg", alt: "Wedding celebration" },
      { src: "/images/weddings/misc-6I1A5640.jpg", alt: "Wedding celebration" },
      { src: "/images/weddings/misc-image001.jpg", alt: "Event detail" },
    ],
  },
];
