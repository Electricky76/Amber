import Link from "next/link";

const IG_HANDLE = "ambermorrillevents";
const IG_URL = `https://www.instagram.com/${IG_HANDLE}/`;

export function InstagramCta() {
  return (
    <section
      id="instagram"
      className="scroll-mt-28 border-t border-olive/20 bg-moss px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.3em] text-blush">
          Instagram
        </p>
        <h2 className="mt-4 font-headline text-3xl font-extralight text-offwhite md:text-4xl">
          Follow along for inspiration &amp; behind the scenes
        </h2>
        <p className="mt-6 font-prose text-lg leading-relaxed text-offwhite/85">
          See recent work, vendor partnerships, and the energy we bring to
          every celebration.
        </p>
        <Link
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label mt-10 inline-flex items-center justify-center border border-offwhite/35 bg-transparent px-10 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-offwhite transition hover:bg-offwhite hover:text-moss"
        >
          @{IG_HANDLE}
        </Link>
      </div>
    </section>
  );
}
