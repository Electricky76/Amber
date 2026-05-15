import Image from "next/image";
import Link from "next/link";

/** Matches fixed header strip — flow spacer so the photo starts below the bar. */
const HEADER_STRIP = "h-16 shrink-0 md:h-[4.5rem]";

/**
 * Hero: original horizontal logo (client preference). Top brand block uses a
 * compact frosted panel so type reads on bright areas of the photo without
 * covering the portrait. Bottom copy sits in a similar readable strip.
 */
export function Hero() {
  return (
    <section
      className="flex min-h-svh w-full flex-col bg-standout-2"
      aria-labelledby="hero-heading"
    >
      <div
        className={`${HEADER_STRIP} w-full border-b border-egg/30 bg-standout-2`}
        aria-hidden
      />

      <div className="relative flex min-h-0 flex-1 flex-col">
        <Image
          src="/images/amber-hero-1J1A9873.jpg"
          alt="Amber Morrill — boutique event planning"
          fill
          priority
          className="object-contain object-[center_48%]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.07] to-black/55"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center px-5 pb-10 pt-4 text-center text-offwhite max-md:pt-3 md:px-10 md:pb-14 md:pt-8">
          {/* Compact panel: high on small screens, reads on light sky / dress highlights */}
          <div className="flex max-w-[min(92vw,20rem)] shrink-0 flex-col items-center rounded-2xl bg-ink/58 px-4 py-3 shadow-lg ring-1 ring-offwhite/15 backdrop-blur-md md:max-w-md md:px-5 md:py-4">
            <h1 id="hero-heading" className="sr-only">
              Amber Morrill Events — Texas and beyond
            </h1>
            <Link
              href="/"
              className="relative block h-9 w-[min(78vw,200px)] shrink-0 sm:h-10 sm:w-[220px] md:h-11 md:w-[240px]"
            >
              <Image
                src="/logo.png"
                alt="Amber Morrill Events"
                fill
                className="object-contain object-center"
                sizes="240px"
                priority
              />
            </Link>
            <p className="mt-4 font-label text-[11px] font-semibold uppercase leading-snug tracking-[0.32em] text-offwhite [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] max-[380px]:tracking-[0.26em] md:mt-5 md:text-xs md:tracking-[0.34em]">
              Texas &amp; beyond
            </p>
          </div>

          <div className="min-h-[min(22vh,160px)] w-full flex-1 md:min-h-[min(26vh,220px)]" />

          <div className="mx-auto flex w-full max-w-xl shrink-0 flex-col items-center px-1 pb-2">
            <div className="w-full rounded-2xl bg-ink/55 px-4 py-3 shadow-lg ring-1 ring-offwhite/12 backdrop-blur-md md:px-5 md:py-4">
              <p className="font-prose text-sm font-medium leading-relaxed text-offwhite [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] md:text-base md:leading-relaxed">
                Boutique event planning that blends elegance, personality, and
                seamless execution—so you can be fully present in every moment.
              </p>
            </div>
            <Link
              href="#services"
              className="font-label mt-5 inline-flex items-center justify-center rounded-full bg-wine px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-offwhite shadow-lg ring-1 ring-offwhite/20 transition hover:bg-blush hover:text-ink md:mt-6 md:px-12 md:py-4"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
