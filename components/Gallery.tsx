import Image from "next/image";

const images = [
  { src: "/images/gallery-01.jpg", alt: "Wedding reception detail" },
  { src: "/images/gallery-02.jpg", alt: "Celebration florals and tablescape" },
  { src: "/images/gallery-03.jpg", alt: "Romantic wedding moment" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-28 border-t border-olive/20 bg-egg px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.3em] text-moss">
            Gallery
          </p>
          <h2 className="mt-4 font-display text-3xl font-extralight text-ink md:text-4xl">
            A glimpse of recent celebrations
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink/75">
            Imagery from real events—each one crafted with intention. More
            galleries can be added as your portfolio grows.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[3/4] overflow-hidden bg-moss/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
