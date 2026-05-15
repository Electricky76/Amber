import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full">
      <Image
        src="/images/hero.jpg"
        alt="Amber Morrill — event planner"
        fill
        priority
        className="object-cover object-[center_20%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-4xl flex-col justify-end px-6 pb-24 pt-32 text-center md:pb-28">
        <p className="font-label text-xs font-medium uppercase tracking-[0.35em] text-offwhite">
          Texas &amp; beyond
        </p>
        <h1 className="mt-4 text-balance font-headline text-4xl font-extralight leading-[1.08] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)] md:text-5xl lg:text-6xl">
          Events designed with intention.
          <br />
          Celebrations remembered for a lifetime.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-prose text-lg leading-relaxed text-offwhite/92 md:text-xl">
          Boutique planning that blends elegance, personality, and seamless
          execution—so you can be fully present in every moment.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#services"
            className="font-label inline-flex min-w-[200px] items-center justify-center border border-offwhite/40 bg-offwhite/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-offwhite backdrop-blur-sm transition hover:bg-offwhite hover:text-moss"
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
    </section>
  );
}
