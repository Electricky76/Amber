import Image from "next/image";
import Link from "next/link";

/**
 * Hero: stacked logo + “Texas & beyond” high; flex spacer uses headroom for
 * this crop. Boutique line + Explore services sit low on the image (inspo
 * layout). Asset: `public/images/amber-hero-1J1A9873.jpg`, logo `logo-stacked.png`.
 */
export function Hero() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      <div className="relative min-h-svh w-full">
        <Image
          src="/images/amber-hero-1J1A9873.jpg"
          alt="Amber Morrill — boutique event planning"
          fill
          priority
          className="object-cover object-[center_28%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-svh flex-col px-6 pb-10 pt-24 text-center text-offwhite md:px-10 md:pb-14 md:pt-28">
          {/* Top: logo + kicker — leaves vertical room below for this photo crop */}
          <div className="flex shrink-0 flex-col items-center">
            <h1 id="hero-heading" className="sr-only">
              Amber Morrill Event Planning — Texas and beyond
            </h1>
            <Link href="/" className="block shrink-0">
              <Image
                src="/logo-stacked.png"
                alt="Amber Morrill Event Planning"
                width={900}
                height={520}
                className="mx-auto h-auto w-[min(88vw,300px)] object-contain md:w-[340px]"
                priority
              />
            </Link>
            <p className="mt-7 font-label text-xs font-medium uppercase tracking-[0.35em] text-offwhite/92 md:mt-8 md:text-[13px] md:tracking-[0.38em]">
              Texas &amp; beyond
            </p>
          </div>

          {/* Occupies middle “headroom” so footer cluster sits lower on the image */}
          <div className="min-h-[min(28vh,220px)] w-full flex-1 md:min-h-[min(32vh,280px)]" />

          {/* Low on photo: boutique line → button (matches inspo placement) */}
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
