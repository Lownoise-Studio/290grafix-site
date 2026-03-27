"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LeadForm } from "@/components/LeadForm";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.09 * i, duration: 0.72, ease: easeOut },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 overflow-x-clip bg-black px-4 pt-28 pb-44 sm:px-6 sm:pt-36 sm:pb-52 lg:pt-40 lg:pb-56"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div className="flex min-w-0 flex-col items-center lg:items-start">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex w-full max-w-full flex-col items-center space-y-8 lg:items-start"
            >
              <div className="flex w-full justify-center lg:justify-start">
                {/* eslint-disable-next-line @next/next/no-img-element -- official raster logo */}
                <img
                  src="/logo.png"
                  alt="290 GraFix — stacked wordmark with orange outline and paint drip"
                  width={1024}
                  height={575}
                  className="brand-logo-hero h-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 36rem"
                />
              </div>

              <p className="text-center text-xs font-semibold uppercase tracking-wide text-white/50 lg:text-left">
                Texas — Custom Print &amp; Graphics
              </p>

              <div className="flex w-full flex-col items-center space-y-6 lg:items-start lg:space-y-8">
                <div className="flex w-full items-center justify-center gap-4 lg:justify-start">
                  <div
                    className="hidden h-6 w-[2px] shrink-0 rounded-full bg-orange-500/60 lg:block"
                    aria-hidden
                  />
                  <h1 className="text-center font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-left lg:text-5xl">
                    Print That Gets Seen
                  </h1>
                </div>
                <p className="max-w-lg text-center text-base leading-snug text-white/55 sm:text-lg lg:text-left">
                  Custom apparel, banners, and signage — done right, done fast.
                </p>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex w-full flex-col items-center space-y-6 sm:mt-12 lg:mt-14 lg:items-start"
            >
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Link
                  href="#start"
                  className="btn-premium inline-flex w-full items-center justify-center rounded-lg bg-brand px-8 py-4 text-center text-base font-black uppercase tracking-wide text-zinc-950 shadow-[0_8px_36px_-14px_rgba(235,106,32,0.35)] hover:bg-orange-400 sm:w-auto sm:min-w-[15rem] sm:text-lg"
                >
                  Get My Quote
                </Link>
                <Link
                  href="#work"
                  className="inline-flex w-full items-center justify-center rounded-lg border-2 border-zinc-600 bg-transparent px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-zinc-300 transition duration-300 ease-out hover:border-zinc-500 hover:text-white sm:w-auto"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="min-w-0 w-full lg:pt-2">
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8 lg:p-10">
              <LeadForm embedded />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
