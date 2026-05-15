import Image from "next/image";
import Link from "next/link";

/**
 * Hero: portrait photo uses object-contain on a full-height frame so the full
 * figure reads (side “pillar” bars in standout-2 when the viewport is wide).
 * Logo + Texas & beyond sit **left on md+** so center frame (face) stays
 * clear; mobile stays centered. Softer scrim + radial “window” on desktop.
 */
export function Hero() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      <div className="relative min-h-svh w-full bg-standout-2">
        <Image
          src="/images/amber-hero-1J1A9873.jpg"
          alt="Amber Morrill — boutique event planning"
          fill
          priority
          className="object-contain object-center"
          sizes="100vw"
        />
        {/* Light touch so text reads without flattening the portrait */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60 md:bg-[radial-gradient(ellipse_55%_45%_at_50%_22%,transparent_0%,transparent_42%,rgba(0,0,0,0.2)_100%),linear-gradient(to_bottom,rgba(0,0,0,0.22),transparent_35%,rgba(0,0,0,0.55))]"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-svh flex-col px-6 pb-10 pt-24 text-center text-offwhite md:px-10 md:pb-14 md:pt-28">
          {/* Desktop: park type on the left so the center of the frame (her face) stays clear */}
          <div className="flex shrink-0 flex-col items-center md:max-w-[min(38vw,22rem)] md:items-start md:self-start md:text-left lg:max-w-[min(34vw,24rem)] lg:pl-2">
            <h1 id="hero-heading" className="sr-only">
              Amber Morrill Event Planning — Texas and beyond
            </h1>
            <Link href="/" className="block shrink-0 md:mx-0">
              <Image
                src="/logo-stacked.png"
                alt="Amber Morrill Event Planning"
                width={900}
                height={520}
                className="mx-auto h-auto w-[min(88vw,300px)] object-contain md:mx-0 md:w-[min(100%,280px)] lg:w-[300px]"
                priority
              />
            </Link>
            <p className="mt-7 font-label text-xs font-medium uppercase tracking-[0.35em] text-offwhite/92 md:mt-8 md:text-[13px] md:tracking-[0.38em]">
              Texas &amp; beyond
            </p>
          </div>

          <div className="min-h-[min(30vh,240px)] w-full flex-1 md:min-h-[min(34vh,300px)]" />

          <div className="mx-auto flex w-full max-w-xl shrink-0 flex-col items-center px-2 pb-2">
            <p className="font-prose text-sm leading-relaxed text-offwhite/92 [text-shadow:0_1px_18px_rgba(0,0,0,0.55)] md:text-base md:leading-relaxed">
              Boutique event planning that blends elegance, personality, and
              seamless execution—so you can be fully present in every moment.
            </p>
            <Link
              href="#services"
              className="font-label mt-7 inline-flex items-center justify-center rounded-full bg-wine px-12 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-offwhite shadow-lg transition hover:bg-blush hover:text-ink md:mt-9"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
