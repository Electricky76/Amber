import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-olive/20 bg-ink px-6 py-12 text-center text-offwhite/85">
      <p className="font-headline text-lg font-extralight tracking-wide text-offwhite">
        Amber Morrill Events
      </p>
      <p className="mt-2 font-prose text-sm">
        <Link
          href="tel:+12105085266"
          className="block underline-offset-4 hover:text-blush hover:underline"
        >
          (210) 508-5266
        </Link>
        <Link
          href="mailto:amber@ambermorrillevents.com"
          className="mt-1 block underline-offset-4 hover:text-blush hover:underline"
        >
          amber@ambermorrillevents.com
        </Link>
      </p>
      <p className="mt-6 font-label text-[10px] uppercase tracking-[0.2em] text-offwhite/50">
        © {new Date().getFullYear()} Amber Morrill Events. All rights reserved.
      </p>
    </footer>
  );
}
