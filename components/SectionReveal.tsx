"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

/** Subtle scroll reveal: fade + 20px lift (disabled when prefers-reduced-motion). */
export function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={`w-full ${className}`.trim()}>{children}</div>;
  }

  return (
    <motion.div
      className={`w-full ${className}`.trim()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px", amount: 0.12 }}
      transition={{ duration: 0.72, ease }}
    >
      {children}
    </motion.div>
  );
}
