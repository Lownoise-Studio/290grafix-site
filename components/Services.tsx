"use client";

import { motion } from "framer-motion";
import { CreditCard, Palette, Shirt, Signpost } from "lucide-react";
import { Section } from "@/components/Section";

const services = [
  {
    title: "Custom Apparel",
    description:
      "DTF & silkscreen — tees, hoodies, hats, and team gear with color that pops wash after wash.",
    icon: Shirt,
  },
  {
    title: "Banners & Signs",
    description:
      "Vinyl, mesh, and rigid signage for events, storefronts, and promotions that read from across the lot.",
    icon: Signpost,
  },
  {
    title: "Business Cards & Magnets",
    description:
      "Cards, magnets, and small-format print that feel as premium as your pitch.",
    icon: CreditCard,
  },
  {
    title: "Digital Print & Design",
    description:
      "File prep, layouts, and print-ready artwork so your project ships without headaches.",
    icon: Palette,
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.68,
      ease: easeOut,
    },
  }),
};

export function Services() {
  return (
    <Section
      id="services"
      className="relative border-t border-zinc-800/30 bg-[var(--surface-1)]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-section-brand text-3xl text-white sm:text-5xl">
          Print <span className="text-[#EB6A20]">services</span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-zinc-400 sm:text-lg">
          Full-service printing for brands, crews, and businesses that want the
          work done right — fast turnaround, Texas hustle.
        </p>
      </div>

      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {services.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="card-hover group relative list-none rounded-2xl"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-[var(--surface-2)]/90 p-6 sm:p-8">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/[0.08] blur-2xl transition duration-500 ease-out group-hover:bg-brand/[0.12]"
                  aria-hidden
                />
                <div className="mb-4 inline-flex rounded-xl bg-brand/15 p-3 text-brand ring-1 ring-brand/30">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-black italic text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
