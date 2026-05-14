const tiers = [
  {
    title: "Full planning & design",
    subtitle: "Effortless elegance experience",
    description:
      "A comprehensive journey where we design, manage, and execute every detail—from concept to celebration. Ideal when you want a trusted partner end to end.",
  },
  {
    title: "Partial planning",
    subtitle: "Vendor coordination & guidance",
    description:
      "For clients who want to lead with confidence while leaning on expert support—timeline, vendor alignment, and professional oversight at every step.",
  },
  {
    title: "Day-of coordination",
    subtitle: "Seamless execution",
    description:
      "So you can stay present while we run the show—confirmations, cueing, and calm leadership on the day itself. Availability depends on scope and season.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 border-t border-olive/20 bg-offwhite px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.3em] text-moss">
            Services
          </p>
          <h2 className="mt-4 font-headline text-3xl font-extralight text-ink md:text-4xl">
            Planning tailored to how you want to celebrate
          </h2>
          <p className="mt-5 font-prose text-lg leading-relaxed text-ink/75">
            Every relationship starts with a conversation—we&apos;ll match the
            level of support to your vision, timeline, and venue.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {tiers.map((tier, i) => (
            <article
              key={tier.title}
              className="flex flex-col border border-olive/15 bg-egg/80 p-8 shadow-sm"
            >
              <span className="font-label text-[10px] font-semibold uppercase tracking-[0.25em] text-wine">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-headline text-xl font-light text-ink">
                {tier.title}
              </h3>
              <p className="mt-1 font-label text-xs font-medium uppercase tracking-[0.15em] text-olive">
                {tier.subtitle}
              </p>
              <p className="mt-5 flex-1 font-prose text-[15px] leading-relaxed text-ink/80">
                {tier.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
