"use client";

import type { GalleryAlbum } from "@/data/gallery-albums";
import { galleryAlbums } from "@/data/gallery-albums";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

function AlbumTile({ album }: { album: GalleryAlbum }) {
  const [index, setIndex] = useState(0);
  const n = album.images.length;
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  const current = album.images[index];

  return (
    <div className="flex flex-col">
      <div
        className="group relative aspect-square overflow-hidden rounded-sm bg-moss/10 ring-0"
        onTouchStart={(e) => {
          touchStartX.current = e.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current;
          touchStartX.current = null;
          if (start == null || n < 2) return;
          const end = e.changedTouches[0]?.clientX ?? start;
          const dx = end - start;
          if (dx > 56) prev();
          else if (dx < -56) next();
        }}
      >
        <Image
          key={`${album.id}-${index}`}
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 50vw, 33vw"
        />

        {/* Soft bottom scrim for counter */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent"
          aria-hidden
        />

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="font-label absolute left-1 top-1/2 z-10 flex h-11 w-9 -translate-y-1/2 items-center justify-center rounded-r-sm bg-dark-mauve/85 text-sm text-offwhite opacity-95 shadow-md backdrop-blur-[2px] transition hover:bg-dark-mauve hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-mauve md:left-2 md:h-12 md:w-10 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label={`Previous photo, ${album.title}`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="font-label absolute right-1 top-1/2 z-10 flex h-11 w-9 -translate-y-1/2 items-center justify-center rounded-l-sm bg-dark-mauve/85 text-sm text-offwhite opacity-95 shadow-md backdrop-blur-[2px] transition hover:bg-dark-mauve hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-mauve md:right-2 md:h-12 md:w-10 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label={`Next photo, ${album.title}`}
            >
              →
            </button>
          </>
        )}

        {n > 1 && (
          <p
            className="font-label pointer-events-none absolute bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-full bg-dark-mauve/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-offwhite/95"
            aria-live="polite"
          >
            {index + 1} / {n}
          </p>
        )}
      </div>
      <p className="mt-3 text-center font-label text-[11px] font-medium uppercase tracking-[0.2em] text-ink/65 md:text-xs md:tracking-[0.24em]">
        {album.title}
      </p>
    </div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-28 border-t border-olive/20 bg-egg px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.3em] text-moss">
            Gallery
          </p>
          <h2 className="mt-4 font-headline text-3xl font-extralight text-ink md:text-4xl">
            A glimpse of recent celebrations
          </h2>
          <p className="mt-5 font-prose text-lg leading-relaxed text-ink/75">
            Each column is its own set—often one celebration or one vibe. Use
            the arrows on a photo to browse just that set, or swipe on your
            phone. New shoots get added by dropping files into{" "}
            <span className="font-medium text-ink/90">public/images</span> and
            updating the album lists in the gallery data file in the project.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
          {galleryAlbums.map((album) => (
            <AlbumTile key={album.id} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
}
