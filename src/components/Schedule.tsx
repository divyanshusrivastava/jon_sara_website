import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function Schedule() {
  const { t, lang } = useI18n();

  return (
    <Section id="schedule" className="!bg-countdown">
      <SectionHeading title={t.schedule} subtitle={t.scheduleSub} />

      <ol className="relative mx-auto max-w-lg space-y-0">
        <div className="absolute bottom-2 left-[3.25rem] top-2 w-px bg-sage/25 sm:left-[3.75rem]" />
        {wedding.schedule.map((item, i) => (
          <motion.li
            key={`${item.time}-${item.title.en}`}
            className="relative grid grid-cols-[5.5rem_1fr] gap-4 py-5 sm:grid-cols-[6.5rem_1fr]"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.04, duration: 0.45 }}
          >
            <div className="pt-0.5 text-right font-body text-sm tabular-nums text-sage sm:text-base">
              {item.time}
            </div>
            <div className="relative pl-6">
              <span className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-sage-dark bg-ivory" />
              <h3 className="font-display text-xl text-sage-dark md:text-2xl">
                {item.title[lang]}
              </h3>
              {item.detail[lang] ? (
                <p className="mt-1 font-body text-sm leading-relaxed text-sage md:text-base">
                  {item.detail[lang]}
                </p>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
