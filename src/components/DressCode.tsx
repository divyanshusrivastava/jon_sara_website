import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function DressCode() {
  const { t, lang } = useI18n();

  return (
    <Section id="dress-code" className="!bg-[hsl(30_20%_82%)]">
      <SectionHeading title={t.dressCode} subtitle={t.dressCodeSub} />
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <img
          src="/photos/color-palette.jpeg"
          alt="Cores do Nosso Dia"
          className="mx-auto mb-8 w-full max-w-lg rounded-sm shadow-[var(--shadow-soft)]"
        />
        <h3 className="font-display text-3xl text-sage-dark">
          {wedding.dressCode.title[lang]}
        </h3>
        <p className="mt-4 font-body text-base leading-relaxed text-sage md:text-lg">
          {wedding.dressCode.note[lang]}
        </p>
      </motion.div>
    </Section>
  );
}
