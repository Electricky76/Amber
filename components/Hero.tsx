import Image from "next/image";
import Link from "next/link";

/**
 * Hero matches Amber’s inspiration board: full-bleed photo, centered logo +
 * uppercase headline + mauve CTA on the image; boutique copy below the photo
 * (“break… then the description”). Logos: hero uses `public/logo-stacked.png`
 * (Secondary Logo “Event Planning” stack); asset: `public/images/amber-hero-1J1A9873.jpg`.
 */
export function Hero() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      {/* Full-viewport hero image + overlays */}
      <div className="relative min-h-svh w-full">
        <Image
          src="/images/amber-hero-1J1A9873.jpg"
          alt="Amber Morrill — boutique event planning"
          fill
          priority
          className="object-cover object-[center_22%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/60"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 pb-28 pt-28 text-center text-offwhite md:px-10 md:pb-32 md:pt-36">
          <Link
            href="/"
            className="mb-10 block shrink-0 md:mb-12"
          >
            <Image
              src="/logo-stacked.png"
              alt="Amber Morrill Event Planning"
              width={900}
              height={520}
              className="mx-auto h-auto w-[min(82vw,280px)] object-contain md:w-[320px]"
              priority
            />
          </Link>

          <h1
            id="hero-heading"
            className="max-w-md font-label text-[11px] font-medium uppercase leading-[1.85] tracking-[0.32em] text-offwhite/95 md:max-w-2xl md:text-sm md:tracking-[0.28em]"
          >
            <span className="block">Events designed with intention.</span>
            <span className="block">Celebrations remembered for a lifetime</span>
            <span className="mt-3 block text-[10px] tracking-[0.38em] text-offwhite/85 md:text-xs md:tracking-[0.32em]">
              in Texas &amp; beyond
            </span>
          </h1>

          <Link
            href="#services"
            className="font-label mt-12 inline-flex items-center justify-center rounded-full bg-wine px-12 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-offwhite shadow-lg transition hover:bg-blush hover:text-ink md:mt-14"
          >
            Explore services
          </Link>
        </div>
      </div>

      {/* Description after the photo (per her written layout) */}
      <div className="border-t border-olive/15 bg-egg px-6 py-12 md:py-16">
        <p className="mx-auto max-w-2xl text-center font-prose text-lg leading-relaxed text-ink/85 md:text-xl">
          Boutique event planning that blends elegance, personality, and
          seamless execution—so you can be fully present in every moment.
        </p>
      </div>
    </section>
  );
}
