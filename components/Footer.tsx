import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-olive/20 bg-ink px-6 py-12 text-center text-offwhite/85">
      <p className="font-display text-lg font-extralight tracking-wide text-offwhite">
        Amber Morrill Events
      </p>
      <p className="mt-2 font-body text-sm">
        <Link
          href="mailto:amber@ambermorrillevents.com"
          className="underline-offset-4 hover:text-blush hover:underline"
        >
          amber@ambermorrillevents.com
        </Link>
      </p>
      <p className="mt-6 font-ui text-[10px] uppercase tracking-[0.2em] text-offwhite/50">
        © {new Date().getFullYear()} Amber Morrill Events. All rights reserved.
      </p>
    </footer>
  );
}
