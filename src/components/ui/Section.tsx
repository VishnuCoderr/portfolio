import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children?: ReactNode;
  className?: string;
};

/** Standard section wrapper: anchor id, number label, consistent vertical rhythm. */
export function Section({ id, label, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className={`scroll-mt-24 border-t border-warm-white/10 py-24 ${className}`}
    >
      <p id={`${id}-label`} className="text-label text-cyan">
        {label}
      </p>
      {children}
    </section>
  );
}
