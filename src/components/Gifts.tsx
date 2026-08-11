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

        <div className="mt-6 space-y-2 font-body text-base leading-relaxed text-sage-dark">
          {current.lines[lang].map((line) => (
            <p key={line}>{line}</p>
          ))}
          {"link" in current && current.link ? (
            <a
              href={current.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-body text-sage-dark underline underline-offset-4 transition hover:text-terracotta"
            >
              {current.link.text}
            </a>
          ) : null}
        </div>
      </motion.div>
    </Section>
  );
}
