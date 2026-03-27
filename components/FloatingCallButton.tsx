"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+18326872741"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      className="fab-call fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-brand sm:hidden"
      aria-label="Call 290 GraFix at 832-687-2741"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-brand opacity-[0.18] animate-ping"
        aria-hidden
      />
      <Phone
        className="relative z-10 text-zinc-950"
        size={28}
        strokeWidth={2.25}
        aria-hidden
      />
    </motion.a>
  );
}
