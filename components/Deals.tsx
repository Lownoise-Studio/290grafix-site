"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/Section";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.72, ease: easeOut },
  }),
};

const secondaryDeals = [
  {
    title: "Business Cards Deal",
    lines: [
      { label: "500 cards", price: "$75" },
      { label: "1000 cards", price: "$85" },
    ],
  },
  {
    title: "Magnet Deal",
    lines: [{ label: "Pair of 12\" × 24\" magnets", price: "$75" }],
  },
  {
    title: "Vinyl Banner Starter",
    lines: [{ label: "3' × 6' single-sided banner", price: "$95" }],
  },
] as const;

export default function Deals() {
  return (
    <Section id="deals" className="bg-[var(--surface-1)]">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-48px" }}
          className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Limited Time Deals
        </motion.h2>
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-48px" }}
          className="mt-4 text-base text-white/60 sm:text-lg"
        >
          Get more for less — limited availability
        </motion.p>
      </div>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-48px" }}
        className="mx-auto mt-14 max-w-3xl"
      >
        <div className="rounded-2xl border border-white/10 bg-[var(--surface-2)] p-6 shadow-[0_24px_56px_-28px_rgba(0,0,0,0.55)] sm:p-8 md:p-10">
          <p className="font-display text-4xl font-black tracking-tight text-brand sm:text-5xl">
            $129 Special
          </p>
          <ul className="mt-8 space-y-4 text-left">
            {(
              [
                "Pair of 12\" × 24\" magnets",
                "500 business cards",
                "Custom design included",
              ] as const
            ).map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-zinc-200 sm:text-lg"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  strokeWidth={2.25}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-zinc-500">Ask about logo setup</p>
          <div className="mt-8 space-y-3">
            <Link
              href="#start"
              className="btn-premium flex w-full items-center justify-center rounded-lg bg-brand px-8 py-4 text-center text-base font-black uppercase tracking-wide text-zinc-950 hover:bg-orange-400 sm:inline-flex sm:w-auto sm:min-w-[14rem] sm:text-lg"
            >
              Claim This Deal
            </Link>
            <p className="text-center text-sm text-zinc-500">
              Most quotes delivered within 24 hours. No commitment required.
            </p>
          </div>
        </div>
      </motion.div>

      <ul className="mt-10 grid list-none gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
        {secondaryDeals.map((deal, i) => (
          <motion.li
            key={deal.title}
            custom={i + 3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="card-hover rounded-xl border border-white/10 bg-[var(--surface-2)] p-6 sm:p-8"
          >
            <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              {deal.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {deal.lines.map((row) => (
                <li
                  key={row.label}
                  className="flex flex-col gap-0.5 border-t border-white/5 pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="text-sm text-zinc-400">{row.label}</span>
                  <span className="text-xl font-bold text-brand sm:text-2xl">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
