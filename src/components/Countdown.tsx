import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function getParts(target: Date): Parts {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const { t, lang } = useI18n();
  const [parts, setParts] = useState<Parts>(() =>
    getParts(new Date(wedding.dateISO)),
  );

  useEffect(() => {
    const target = new Date(wedding.dateISO);
    const id = window.setInterval(() => setParts(getParts(target)), 1000);
    return () => window.clearInterval(id);
  }, []);

  const items = [
    { value: parts.days, label: t.days },
    { value: parts.hours, label: t.hours },
    { value: parts.minutes, label: t.minutes },
    { value: parts.seconds, label: t.seconds },
  ];

  return (
    <Section className="!bg-countdown !py-16 md:!py-20">
      <SectionHeading title={t.countdown} />
      <p className="mx-auto mb-10 max-w-xl text-center font-display text-lg leading-relaxed text-sage md:text-xl">
        {t.countdownIntro}{" "}
        <span className="text-sage-dark">{wedding.displayDate[lang]}</span>.
      </p>
      <div className="grid grid-cols-4 gap-3 sm:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="font-display text-4xl font-medium tabular-nums text-sage-dark sm:text-5xl md:text-6xl">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="mt-2 font-display text-[0.7rem] uppercase tracking-[0.22em] text-sage sm:text-xs">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
