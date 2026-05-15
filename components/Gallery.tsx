"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** Add as many entries as you like — drop files into `public/images/` and list them here. */
const images = [
  { src: "/images/gallery-01.jpg", alt: "Wedding reception detail" },
  { src: "/images/gallery-02.jpg", alt: "Celebration florals and tablescape" },
  { src: "/images/gallery-03.jpg", alt: "Romantic wedding moment" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const goNext = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i + 1) % images.length,
    );
  }, []);
  const goPrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, goNext, goPrev]);

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
            Imagery from real events—each one crafted with intention. Click a
            photo to open it larger; use the arrows or your keyboard (← →) to
            move between images, Escape to close.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-sm bg-moss/10 text-left ring-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <span className="sr-only">Open image {index + 1} in gallery</span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery photo"
          onClick={close}
        >
          <div
            className="relative h-[min(88vh,920px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            <button
              type="button"
              onClick={close}
              className="font-label absolute left-2 top-2 z-20 rounded-sm bg-offwhite/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-offwhite backdrop-blur-sm transition hover:bg-offwhite hover:text-ink md:left-4 md:top-4"
            >
              Close
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="font-label absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-offwhite/10 px-3 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite backdrop-blur-sm transition hover:bg-offwhite hover:text-ink md:left-4"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="font-label absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-sm bg-offwhite/10 px-3 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite backdrop-blur-sm transition hover:bg-offwhite hover:text-ink md:right-4"
                  aria-label="Next image"
                >
                  →
                </button>
              </>
            )}

            <p className="font-label pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-ink/60 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-offwhite/90">
              {openIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
