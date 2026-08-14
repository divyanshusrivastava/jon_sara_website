import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-20 md:py-28 ${
        dark ? "bg-chocolate text-ivory" : "bg-ivory text-sage-dark"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        className={`font-script text-5xl md:text-6xl ${
          light ? "text-ivory" : "text-sage-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 font-display text-lg tracking-wide ${
            light ? "text-ivory/75" : "text-sage"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mx-auto h-8 w-40 text-sage/50 ${className}`}
      viewBox="0 0 160 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 12h52M100 12h52"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M80 4c4 4 8 6 12 8-4 2-8 4-12 8-4-4-8-6-12-8 4-2 8-4 12-8Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="68" cy="12" r="1.5" fill="currentColor" />
      <circle cx="92" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
