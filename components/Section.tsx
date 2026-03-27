import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-24 sm:py-32 ${className}`.trim()}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
