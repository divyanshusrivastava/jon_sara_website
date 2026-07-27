import { useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function Gifts() {
  const { t, lang } = useI18n();
  const [mode, setMode] = useState<"card" | "bank">("card");

  return (
    <Section id="gifts">
      <SectionHeading title={t.gifts} subtitle={t.giftsSub} />
      <motion.div
        className="mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-cream/40">
          <svg viewBox="0 0 64 64" className="h-14 w-14 text-sage-dark" aria-hidden>
            <rect
              x="12"
              y="24"
              width="40"
              height="28"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 32h40M32 24v28M22 24c0-6 4-10 10-10s10 4 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <p className="font-display text-lg leading-relaxed text-sage md:text-xl">
          {wedding.gifts.message[lang]}
        </p>

        <div className="mt-8 inline-flex border border-sage/30 p-1">
          <button
            type="button"
            onClick={() => setMode("card")}
            className={`px-4 py-2 font-display text-sm tracking-wide transition ${
              mode === "card"
                ? "bg-sage-dark text-ivory"
                : "text-sage-dark hover:bg-sage/10"
            }`}
          >
            {t.cardPreferred}
          </button>
          <button
            type="button"
            onClick={() => setMode("bank")}
            className={`px-4 py-2 font-display text-sm tracking-wide transition ${
              mode === "bank"
                ? "bg-sage-dark text-ivory"
                : "text-sage-dark hover:bg-sage/10"
            }`}
          >
            {t.bankTransfer}
          </button>
        </div>

        <div className="mt-6 min-h-16 font-display text-base text-sage-dark">
          {mode === "card" ? (
            <p className="text-sage">{t.cardPreferred}</p>
          ) : (
            <div>
              <p>{wedding.gifts.bankDetails.name}</p>
              <p className="mt-1 tracking-wider">{wedding.gifts.bankDetails.iban}</p>
            </div>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
