import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-olive/20 bg-egg px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-prose text-lg leading-relaxed text-ink/85 md:text-xl">
          Amber Morrill Events is a full-service studio for weddings, milestones,
          and celebrations that deserve care and craft. Amber&apos;s hallmark is a
          deep personal connection—listening, supporting, and anticipating what
          you need from the first conversation to the last dance.
        </p>
        <p className="mt-6 font-prose text-lg leading-relaxed text-ink/85 md:text-xl">
          The result: events that feel effortless on the surface and{" "}
          <span className="text-dark-mauve">intentional</span> underneath—polished,
          warm, and unmistakably you.
        </p>

        <div className="relative mx-auto mt-12 h-24 w-24 md:mt-14 md:h-28 md:w-28">
          <Image
            src="/logo-submark.png"
            alt="Amber Morrill monogram"
            fill
            className="object-contain"
            sizes="112px"
          />
        </div>
      </div>
    </section>
  );
}
