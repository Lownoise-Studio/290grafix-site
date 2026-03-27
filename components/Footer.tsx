import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[var(--surface-2)] py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl font-black italic text-white">
            290 GRAFiX
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
            Custom printing &amp; graphics — Texas made, street sharp.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Contact
          </span>
          <div className="flex flex-col gap-3">
            <Link
              href="tel:+18326872741"
              className="text-lg font-bold text-brand transition duration-300 ease-out hover:text-orange-300 sm:text-xl"
            >
              832-687-2741
            </Link>
            <Link
              href="mailto:290grafix@gmail.com"
              className="text-base font-medium text-zinc-300 underline-offset-4 transition duration-300 ease-out hover:text-brand hover:underline"
            >
              290grafix@gmail.com
            </Link>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Social
          </span>
          <ul className="mt-5 flex gap-3">
            <li>
              <Link
                href="#"
                aria-label="290 GraFix on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-[var(--surface-3)] text-zinc-300 transition duration-300 ease-out hover:border-brand hover:text-brand"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="290 GraFix on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-[var(--surface-3)] text-zinc-300 transition duration-300 ease-out hover:border-brand hover:text-brand"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="290 GraFix on YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-[var(--surface-3)] text-zinc-300 transition duration-300 ease-out hover:border-brand hover:text-brand"
              >
                <PlayCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-xs text-zinc-500">
            Replace # with your Instagram, Facebook, and YouTube URLs.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-zinc-800/80 px-4 pt-10 text-center text-xs text-zinc-600 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} 290 GraFix. All rights reserved.
      </div>

      <p className="mx-auto mt-6 max-w-7xl px-4 text-center text-xs font-display font-extralight text-zinc-500 sm:px-6 lg:px-8">
        built by{" "}
        <a
          href="#"
          className="transition-colors duration-300 ease-out hover:text-[#EB6A20]"
        >
          lownoise studio
        </a>
      </p>
    </footer>
  );
}
