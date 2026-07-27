import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function FAQ() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="!bg-[hsl(40_28%_88%)]">
      <SectionHeading title={t.faq} subtitle={t.faqSub} />
      <div className="mx-auto max-w-2xl divide-y divide-sage/20">
        {wedding.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q.en} className="py-1">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg text-sage-dark md:text-xl">
                  {item.q[lang]}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-sage transition ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 font-display text-base leading-relaxed text-sage">
                      {item.a[lang]}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
