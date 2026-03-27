import { MapPin } from "lucide-react";
import { Section } from "@/components/Section";

const cities = [
  "Houston",
  "Cypress",
  "Hockley",
  "Waller",
  "Hempstead",
  "Brenham",
] as const;

export function ServiceArea() {
  return (
    <Section
      id="areas"
      className="relative overflow-hidden border-y border-zinc-800/80 bg-[var(--surface-2)]/40"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-gradient-to-l from-brand/[0.075] to-transparent blur-3xl"
        aria-hidden
      />
      <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            Local &amp; regional
          </p>
          <h2 className="mt-5 font-display text-3xl font-black italic tracking-tight text-white sm:text-4xl lg:text-5xl">
            We roll through{" "}
            <span className="text-brand">your</span> neighborhood
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            Based in Texas with routes across the corridor — pickup, delivery,
            and on-site installs when you need them.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3 sm:gap-4" aria-label="Service areas">
          {cities.map((city) => (
            <li key={city}>
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-[var(--surface-3)]/90 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800 sm:px-5 sm:text-base">
                <MapPin
                  className="h-4 w-4 shrink-0 text-brand sm:h-5 sm:w-5"
                  aria-hidden
                />
                {city}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
