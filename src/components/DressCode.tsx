import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function DressCode() {
  const { t, lang } = useI18n();

  return (
    <Section id="dress-code" className="!bg-[hsl(55_18%_78%)]">
      <SectionHeading title={t.dressCode} subtitle={t.dressCodeSub} />
      <motion.div
        className="mx-auto max-w-md text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-ivory/50">
          <svg viewBox="0 0 120 120" className="h-28 w-28 text-sage-dark" aria-hidden>
            <path
              d="M40 88c0-14 8-22 20-28 12 6 20 14 20 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="48" cy="42" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="72" cy="42" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M35 95h50M42 102h36"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>
        <h3 className="font-display text-3xl text-sage-dark">
          {wedding.dressCode.title[lang]}
        </h3>
        <p className="mt-4 font-display text-lg leading-relaxed text-sage">
          {wedding.dressCode.note[lang]}
        </p>
      </motion.div>
    </Section>
  );
}
