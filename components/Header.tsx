import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-moss/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="relative h-10 w-[200px] shrink-0 sm:h-11 sm:w-[240px]">
          <Image
            src="/logo.png"
            alt="Amber Morrill Events"
            fill
            className="object-contain object-left"
            sizes="240px"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 font-ui text-xs font-medium uppercase tracking-[0.2em] text-offwhite md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-blush"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-offwhite underline-offset-4 transition hover:text-blush hover:underline md:hidden"
        >
          Inquire
        </Link>
      </div>
    </header>
  );
}
