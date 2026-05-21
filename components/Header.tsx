"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[70] border-b border-white/[0.08] bg-standout-2">
        <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center px-5 md:h-[4.5rem]">
          <button
            type="button"
            className="z-10 shrink-0 rounded-sm p-2 text-offwhite transition hover:bg-offwhite/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <span className="font-label text-xs font-semibold uppercase tracking-[0.2em]">
                Close
              </span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-6 bg-offwhite" />
                <span className="block h-0.5 w-6 bg-offwhite" />
                <span className="block h-0.5 w-6 bg-offwhite" />
              </span>
            )}
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 h-9 w-[min(52vw,200px)] -translate-x-1/2 -translate-y-1/2 md:static md:h-10 md:w-[220px] md:shrink-0 md:translate-x-0 md:translate-y-0 lg:w-[240px]"
          >
            <Image
              src="/logo.png"
              alt="Amber Morrill Events"
              fill
              className="object-contain object-center"
              sizes="240px"
              priority
            />
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:gap-8"
            aria-label="Main"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-label text-xs font-medium uppercase tracking-[0.2em] text-offwhite/90 transition hover:text-blush"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="font-label z-10 ml-auto shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-offwhite transition hover:text-blush"
          >
            Inquire
          </Link>
        </div>
      </header>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[60] flex flex-col bg-standout-2 px-8 pb-10 pt-28 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <nav className="flex flex-col gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-label text-sm font-medium uppercase tracking-[0.28em] text-offwhite transition hover:text-blush"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
