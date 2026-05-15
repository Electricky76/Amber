import Image from "next/image";
import Link from "next/link";

/**
 * Landing layout per client notes: brand band → full-width photo (clean, no
 * headline overlay) → description on egg. Replace `public/images/hero.jpg`
 * with her preferred lavender-dress / table hero when ready.
 */
export function Hero() {
  return (
    <section className="w-full" aria-labelledby="hero-intro-heading">
      {/* Intro band — “stand out #2” + tagline + CTAs (header carries primary logo; add public/logo-submark.png here later if desired) */}
      <div className="bg-standout-2 text-offwhite">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center md:py-12">
          <h1 id="hero-intro-heading" className="sr-only">
            Amber Morrill Events — luxury event planning, Texas and beyond
          </h1>

          <p className="font-label text-xs font-medium uppercase tracking-[0.35em] text-offwhite/90">
            Texas &amp; beyond
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#services"
              className="font-label inline-flex min-w-[200px] items-center justify-center border border-offwhite/45 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-offwhite transition hover:bg-offwhite hover:text-standout-2"
            >
              Explore services
            </Link>
            <Link
              href="#contact"
              className="font-label inline-flex min-w-[200px] items-center justify-center bg-blush px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink transition hover:bg-offwhite"
            >
              Inquire
            </Link>
          </div>
        </div>
      </div>

      {/* Main photo — no text overlay; optional Ecatherina headline deferred until licensed */}
      <div className="relative aspect-[4/5] w-full max-h-[min(92vh,960px)] md:aspect-[21/10] md:max-h-[min(85vh,820px)]">
        <Image
          src="/images/hero.jpg"
          alt="Amber Morrill — boutique event planning"
          fill
          priority
          className="object-cover object-[center_25%]"
          sizes="100vw"
        />
      </div>

      {/* Description after the photo break */}
      <div className="border-t border-olive/15 bg-egg px-6 py-12 md:py-14">
        <p className="mx-auto max-w-2xl text-center font-prose text-lg leading-relaxed text-ink/85 md:text-xl">
          Boutique planning that blends elegance, personality, and seamless
          execution—so you can be fully present in every moment.
        </p>
      </div>
    </section>
  );
}
