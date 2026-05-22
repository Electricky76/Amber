import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard (draft)",
  description:
    "Placeholder admin area for Amber Morrill Events — full editor coming soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPlaceholderPage() {
  return (
    <div className="flex min-h-full flex-col bg-egg">
      <header className="border-b border-olive/20 bg-moss px-6 py-5">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-4">
          <p className="font-label text-[10px] font-semibold uppercase tracking-[0.35em] text-offwhite/90">
            Amber Morrill Events · Dashboard
          </p>
          <Link
            href="/"
            className="font-label text-xs font-medium uppercase tracking-[0.2em] text-blush underline-offset-4 transition hover:text-offwhite hover:underline"
          >
            View public site
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-14 md:py-20">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-moss">
          Draft · Not connected yet
        </p>
        <h1 className="mt-4 font-headline text-3xl font-extralight text-ink md:text-4xl">
          Hello, Amber — this is your future home base.
        </h1>
        <p className="mt-6 font-label font-normal tracking-normal text-lg leading-relaxed text-ink/80">
          Right now this page is only a placeholder. Soon you&apos;ll be able to
          update galleries, swap photos, and get gentle prompts—without needing
          to touch code or design tools you don&apos;t use.
        </p>

        <section className="mt-12 rounded-sm border border-olive/20 bg-offwhite p-8 shadow-sm">
          <h2 className="font-headline text-xl font-light text-ink">
            Planned for here
          </h2>
          <ul className="mt-6 space-y-4 font-label font-normal tracking-normal text-[15px] leading-relaxed text-ink/80">
            <li className="flex gap-3">
              <span className="font-label text-moss">—</span>
              <span>
                <strong className="text-ink">New wedding or event:</strong> name
                it, drag in photos, save — your public gallery updates.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-label text-moss">—</span>
              <span>
                <strong className="text-ink">Simple choices:</strong> short
                questions so we never overwhelm you—just the next best step.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-label text-moss">—</span>
              <span>
                <strong className="text-ink">Instagram help:</strong> suggested
                captions or links after you publish—real posting still follows
                Meta&apos;s rules, but we can make the handoff easy.
              </span>
            </li>
          </ul>
        </section>

        <p className="mt-10 font-label font-normal tracking-normal text-sm leading-relaxed text-ink/60">
          Bookmark this URL for later:{" "}
          <code className="rounded bg-moss/10 px-2 py-0.5 font-label text-xs text-moss">
            /admin
          </code>
          . We&apos;ll add a secure login before anything here goes live for real.
        </p>
      </main>

      <footer className="border-t border-olive/20 px-6 py-8 text-center">
        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-ink/45">
          Internal preview · dashboard under construction
        </p>
      </footer>
    </div>
  );
}
