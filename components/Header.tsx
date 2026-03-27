import Link from "next/link";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas" },
  { href: "#work", label: "Work" },
  { href: "#start", label: "Start" },
] as const;

const navLinkClass =
  "relative whitespace-nowrap px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors duration-300 ease-out hover:text-white after:absolute after:bottom-1 after:left-5 after:right-5 after:h-px after:origin-center after:scale-x-0 after:bg-[#EB6A20] after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[var(--surface-1)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex h-full shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-1)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- explicit brand asset */}
          <img
            src="/logo.png"
            alt="290 GraFix — custom printing and graphics logo"
            width={1024}
            height={575}
            className="h-10 w-auto sm:h-14"
            decoding="async"
          />
        </Link>
        <nav
          className="flex h-full items-center gap-0 overflow-x-auto sm:gap-0"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
