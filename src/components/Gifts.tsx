import { useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function Gifts() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState(0);
  const methods = wedding.gifts.methods;
  const current = methods[active];

  return (
    <Section id="gifts">
      <SectionHeading title={t.gifts} subtitle={t.giftsSub} />
      <motion.div
        className="mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-base leading-relaxed text-sage md:text-lg">
          {wedding.gifts.message[lang]}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {methods.map((method, i) => (
            <button
              key={method.id}
              type="button"
              onClick={() => setActive(i)}
              className={`border px-4 py-2 font-body text-sm tracking-wide transition ${
                active === i
                  ? "border-sage-dark bg-sage-dark text-ivory"
                  : "border-sage/30 text-sage-dark hover:bg-sage/10"
              }`}
            >
              {method.label[lang]}
            </button>
          ))}
        </div>

        <div className="mt-6 min-h-12 font-body text-base text-sage-dark">
          {current.detail ? (
            <p>{current.detail}</p>
          ) : (
            <p className="text-sage">
              {current.label[lang]}
              {lang === "pt"
                ? " — dados a disponibilizar pelos noivos."
                : " — details to be provided by the couple."}
            </p>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
