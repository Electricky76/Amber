"use client";

import type { GalleryAlbum } from "@/data/gallery-albums";
import { galleryAlbums } from "@/data/gallery-albums";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

function useSwipeNavigation(
  n: number,
  prev: () => void,
  next: () => void,
  enabled: boolean
) {
  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  return {
    didSwipe,
    onTouchStart: (e: React.TouchEvent) => {
      if (!enabled) return;
      touchStartX.current = e.changedTouches[0]?.clientX ?? null;
      didSwipe.current = false;
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (!enabled) return;
      const start = touchStartX.current;
      touchStartX.current = null;
      if (start == null || n < 2) return;
      const end = e.changedTouches[0]?.clientX ?? start;
      const dx = end - start;
      if (dx > 56) {
        didSwipe.current = true;
        prev();
      } else if (dx < -56) {
        didSwipe.current = true;
        next();
      }
    },
  };
}

type AlbumLightboxProps = {
  album: GalleryAlbum;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function AlbumLightbox({
  album,
  index,
  onClose,
  onPrev,
  onNext,
}: AlbumLightboxProps) {
  const n = album.images.length;
  const current = album.images[index];
  const swipe = useSwipeNavigation(n, onPrev, onNext, true);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && n > 1) onPrev();
      if (e.key === "ArrowRight" && n > 1) onNext();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [n, onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-standout-2/96"
      role="dialog"
      aria-modal="true"
      aria-label={`${album.title} photos, full size`}
      onTouchStart={swipe.onTouchStart}
      onTouchEnd={swipe.onTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="font-label absolute right-3 top-3 z-20 flex h-11 min-w-11 items-center justify-center rounded-sm bg-dark-mauve/90 px-3 text-sm uppercase tracking-[0.18em] text-offwhite shadow-md transition hover:bg-dark-mauve focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
        aria-label="Back to gallery"
      >
        Close
      </button>

      <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-3 pb-28 pt-14 sm:px-8">
        <div
          className="relative h-[min(78dvh,92vw)] w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={`lightbox-${album.id}-${index}`}
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="font-label absolute left-2 top-1/2 z-20 flex h-12 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-dark-mauve/90 text-lg text-offwhite shadow-md transition hover:bg-dark-mauve focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite sm:left-4 sm:h-14 sm:w-12"
              aria-label={`Previous photo, ${album.title}`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={onNext}
              className="font-label absolute right-2 top-1/2 z-20 flex h-12 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-dark-mauve/90 text-lg text-offwhite shadow-md transition hover:bg-dark-mauve focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite sm:right-4 sm:h-14 sm:w-12"
              aria-label={`Next photo, ${album.title}`}
            >
              →
            </button>
          </>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 pb-6 pt-16 text-center">
        {n > 1 && (
          <p
            className="font-label text-[11px] uppercase tracking-[0.22em] text-offwhite/95"
            aria-live="polite"
          >
            {index + 1} / {n}
          </p>
        )}
        <p className="font-label mt-2 text-xs font-medium uppercase tracking-[0.2em] text-offwhite">
          {album.title}
        </p>
        {album.photographer ? (
          <p className="mt-1 font-label text-[11px] normal-case tracking-normal text-offwhite/80">
            {album.photographer}
          </p>
        ) : null}
        <p className="font-label mt-3 text-[10px] uppercase tracking-[0.2em] text-offwhite/55">
          Swipe or use arrows · Close to return
        </p>
      </div>
    </div>
  );
}

function AlbumTile({ album }: { album: GalleryAlbum }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const n = album.images.length;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  const openExpanded = useCallback(() => {
    setExpanded(true);
  }, []);

  const current = album.images[index];
  const swipe = useSwipeNavigation(n, prev, next, !expanded);

  const tryOpenFromTap = useCallback(() => {
    if (swipe.didSwipe.current) {
      swipe.didSwipe.current = false;
      return;
    }
    openExpanded();
  }, [openExpanded, swipe]);

  return (
    <div className="flex flex-col">
      <div
        className="group relative aspect-square overflow-hidden rounded-sm bg-moss/10 ring-0"
        onTouchStart={swipe.onTouchStart}
        onTouchEnd={swipe.onTouchEnd}
      >
        <button
          type="button"
          onClick={tryOpenFromTap}
          className="absolute inset-0 z-[1] cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-mauve"
          aria-label={`View ${album.title} photo ${index + 1} of ${n} full size`}
        />

        <Image
          key={`${album.id}-${index}`}
          src={current.src}
          alt={current.alt}
          fill
          className="pointer-events-none object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent"
          aria-hidden
        />

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="font-label absolute left-1 top-1/2 z-10 flex h-11 w-9 -translate-y-1/2 items-center justify-center rounded-r-sm bg-dark-mauve/85 text-sm text-offwhite opacity-95 shadow-md backdrop-blur-[2px] transition hover:bg-dark-mauve hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-mauve md:left-2 md:h-12 md:w-10 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label={`Previous photo, ${album.title}`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="font-label absolute right-1 top-1/2 z-10 flex h-11 w-9 -translate-y-1/2 items-center justify-center rounded-l-sm bg-dark-mauve/85 text-sm text-offwhite opacity-95 shadow-md backdrop-blur-[2px] transition hover:bg-dark-mauve hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-mauve md:right-2 md:h-12 md:w-10 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label={`Next photo, ${album.title}`}
            >
              →
            </button>
          </>
        )}

        {n > 1 ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openExpanded();
            }}
            className="font-label absolute bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-full bg-dark-mauve/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-offwhite/95 transition hover:bg-dark-mauve focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
            aria-label={`View photo ${index + 1} of ${n} full size`}
          >
            {index + 1} / {n}
            <span className="sr-only"> — tap to enlarge</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openExpanded();
            }}
            className="font-label absolute bottom-2 right-2 z-10 rounded-full bg-dark-mauve/80 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-offwhite/90"
            aria-label="View full size"
          >
            Enlarge
          </button>
        )}
      </div>
      <div className="mt-3 text-center">
        <p className="font-label text-[11px] font-medium uppercase tracking-[0.2em] text-ink/70 md:text-xs md:tracking-[0.24em]">
          {album.title}
        </p>
        {album.photographer ? (
          <p className="mt-1.5 font-label text-[10px] font-normal normal-case tracking-normal text-ink/55 md:text-[11px]">
            {album.photographer}
          </p>
        ) : null}
      </div>

      {expanded ? (
        <AlbumLightbox
          album={album}
          index={index}
          onClose={() => setExpanded(false)}
          onPrev={prev}
          onNext={next}
        />
      ) : null}
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
          <h2 className="font-headline text-3xl font-extralight text-ink md:text-4xl">
            A glimpse of recent celebrations
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-14 md:grid-cols-4 md:gap-4">
          {galleryAlbums.map((album) => (
            <AlbumTile key={album.id} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
}
