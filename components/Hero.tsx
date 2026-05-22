import Image from "next/image";
import Link from "next/link";

/**
 * Hero: logo lives in the fixed header only (no frosted overlay panels).
 * Type uses light scrim + shadow for contrast on the portrait.
 */
export function Hero() {
  return (
    <section
      className="flex min-h-svh w-full flex-col bg-standout-2 pt-16 md:pt-[4.5rem]"
      aria-labelledby="hero-heading"
    >
      <div className="relative flex min-h-0 flex-1 flex-col">
        <Image
          src="/images/amber-hero-1J1A9873.jpg"
          alt="Amber Morrill — boutique event planning"
          fill
          priority
          className="object-cover object-[center_42%] md:object-contain md:object-[center_48%]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-end px-5 pb-10 pt-6 text-center text-offwhite md:px-10 md:pb-14 md:pt-8">
          <div className="mx-auto flex w-full max-w-xl shrink-0 flex-col items-center px-2 pb-2">
            <h1
              id="hero-heading"
              className="font-label text-sm font-normal leading-relaxed tracking-normal text-offwhite [text-shadow:0_2px_18px_rgba(0,0,0,0.6)] md:text-base"
            >
              Boutique event planning that blends elegance, personality, and
              seamless execution—so you can be fully present in every moment.
            </h1>
            <Link
              href="#services"
              className="font-label mt-6 inline-flex items-center justify-center rounded-full bg-dark-mauve px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-offwhite shadow-lg transition hover:bg-blush hover:text-ink md:mt-8 md:px-12 md:py-4"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
