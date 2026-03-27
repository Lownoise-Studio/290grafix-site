import Image from "next/image";
import { Section } from "@/components/Section";

type RasterItem = {
  kind: "raster";
  src: string;
  alt: string;
};

type SvgItem = {
  kind: "svg";
  src: string;
  alt: string;
};

type GalleryItem = RasterItem | SvgItem;

const gallery: GalleryItem[] = [
  {
    kind: "raster",
    src: "/featured-work.jpg",
    alt: "290 GraFix featured custom print and apparel project",
  },
  {
    kind: "svg",
    src: "/portfolio/custom-tshirt.svg",
    alt: "Custom t-shirt and apparel printing",
  },
  {
    kind: "svg",
    src: "/portfolio/vinyl-banner.svg",
    alt: "Vinyl banner and large-format signage",
  },
  {
    kind: "svg",
    src: "/portfolio/retail-graphics.svg",
    alt: "Retail graphics and window displays",
  },
  {
    kind: "svg",
    src: "/portfolio/apparel-flatlay.svg",
    alt: "Branded apparel flat lay and product styling",
  },
  {
    kind: "svg",
    src: "/portfolio/print-shop.svg",
    alt: "Print shop production and proofs",
  },
];

const sizes =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

export function Portfolio() {
  return (
    <Section id="work" className="bg-[var(--surface-1)]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-section-brand text-3xl text-white sm:text-5xl">
          Fresh off the <span className="text-[#EB6A20]">press</span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-zinc-400 sm:text-lg">
          A taste of the quality we deliver — swap these shots for your own
          installs and apparel pulls.
        </p>
      </div>

      <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {gallery.map((item) => (
          <div
            key={item.src}
            className="card-hover group mb-5 break-inside-avoid rounded-xl lg:mb-6"
          >
            <figure className="relative aspect-[4/5] overflow-hidden rounded-xl border border-zinc-800 bg-[var(--surface-2)]">
              {item.kind === "raster" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority
                  quality={90}
                  sizes={sizes}
                  className="object-cover object-center transition duration-[650ms] ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={1000}
                  unoptimized
                  className="h-full w-full object-cover object-center transition duration-[650ms] ease-out group-hover:scale-[1.02]"
                  sizes={sizes}
                />
              )}
            </figure>
          </div>
        ))}
      </div>
    </Section>
  );
}
