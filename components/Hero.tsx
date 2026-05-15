import Image from "next/image";
import Link from "next/link";

/** Matches fixed header strip — flow spacer so the photo starts below the bar. */
const HEADER_STRIP = "h-16 shrink-0 md:h-[4.5rem]";

/**
 * Hero: first strip clears fixed header + soft egg hairline; remaining height is
 * flex-1 (exactly one viewport minus strip). Portrait object-contain, centered
 * type, bottom-weighted scrim so the face stays bright.
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

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center px-6 pb-10 pt-8 text-center text-offwhite md:px-10 md:pb-14 md:pt-10">
          <div className="flex max-w-md shrink-0 flex-col items-center">
            <h1 id="hero-heading" className="sr-only">
              Amber Morrill Event Planning — Texas and beyond
            </h1>
            <Link
              href="/"
              className="block shrink-0 [filter:drop-shadow(0_2px_14px_rgba(0,0,0,0.45))]"
            >
              <Image
                src="/logo-stacked.png"
                alt="Amber Morrill Event Planning"
                width={900}
                height={520}
                className="mx-auto h-auto w-[min(85vw,260px)] object-contain md:w-[min(100%,290px)]"
                priority
              />
            </Link>
            <p className="mt-6 font-label text-xs font-medium uppercase tracking-[0.35em] text-offwhite/93 md:mt-7 md:text-[13px] md:tracking-[0.36em]">
              Texas &amp; beyond
            </p>
          </div>

          <div className="min-h-[min(24vh,180px)] w-full flex-1 md:min-h-[min(28vh,240px)]" />

          <div className="mx-auto flex w-full max-w-xl shrink-0 flex-col items-center px-2 pb-2">
            <p className="font-prose text-sm leading-relaxed text-offwhite/93 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)] md:text-base md:leading-relaxed">
              Boutique event planning that blends elegance, personality, and
              seamless execution—so you can be fully present in every moment.
            </p>
            <Link
              href="#services"
              className="font-label mt-6 inline-flex items-center justify-center rounded-full bg-wine px-11 py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-offwhite shadow-lg transition hover:bg-blush hover:text-ink md:mt-8 md:px-12 md:py-4"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
