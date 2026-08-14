import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Ornament } from "./ui.tsx";

export function Hero() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={wedding.heroImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/55 via-chocolate/45 to-chocolate/75" />
      </div>

      <div className="absolute right-5 top-5 z-20 flex gap-1 font-body text-sm tracking-[0.2em] text-ivory/80">
        {(["pt", "en"] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`px-2 py-1 uppercase transition ${
              lang === code ? "text-ivory" : "text-ivory/45 hover:text-ivory/75"
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center text-ivory">
        <motion.p
          className="font-body text-sm uppercase tracking-[0.4em] text-ivory/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {t.weAreGettingMarried}
        </motion.p>

        <motion.h1
          className="mt-6 font-script text-[4.5rem] leading-[0.95] sm:text-8xl md:text-9xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {wedding.couple.partner1}
          <span className="mx-3 inline-block font-script text-5xl md:text-6xl">
            &
          </span>
          {wedding.couple.partner2}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 text-ivory/50"
        >
          <Ornament className="text-ivory/50" />
        </motion.div>

        <motion.p
          className="mt-8 font-display text-2xl tracking-wide text-ivory/95 md:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          {wedding.displayDate[lang]}
        </motion.p>
        <motion.p
          className="mt-2 font-body text-base tracking-wide text-ivory/75 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {wedding.locationShort[lang]}
        </motion.p>

        <motion.a
          href="#rsvp"
          className="mt-10 border border-ivory/60 px-8 py-3 font-body text-xs uppercase tracking-[0.28em] text-ivory transition hover:bg-ivory hover:text-sage-dark"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
        >
          {t.rsvpCta}
        </motion.a>
      </div>
    </header>
  );
}
