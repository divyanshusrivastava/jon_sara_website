import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Ornament } from "./ui.tsx";

export function Hero() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,_hsl(34_33%_91%)_0%,_hsl(40_28%_86%)_40%,_hsl(55_18%_72%)_100%)]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_20%,_hsl(72_19%_32%_/_0.12)_100%)]" />
        <StringLights />
      </div>

      <div className="absolute right-5 top-5 z-20 flex gap-1 font-display text-sm tracking-[0.2em] text-sage-dark/70">
        {(["pt", "en"] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`px-2 py-1 uppercase transition ${
              lang === code
                ? "text-sage-dark"
                : "text-sage-dark/40 hover:text-sage-dark/70"
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center">
        <motion.p
          className="font-display text-sm uppercase tracking-[0.4em] text-sage"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {t.weAreGettingMarried}
        </motion.p>

        <motion.h1
          className="mt-6 font-script text-[4.5rem] leading-[0.95] text-sage-dark sm:text-8xl md:text-9xl"
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
          className="mt-8"
        >
          <Ornament />
        </motion.div>

        <motion.p
          className="mt-8 font-display text-xl tracking-wide text-sage-dark/85 md:text-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          {wedding.displayDate[lang]}
        </motion.p>
      </div>
    </header>
  );
}

function StringLights() {
  const bulbs = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute left-1/2 top-8 w-[120%] -translate-x-1/2">
      <svg viewBox="0 0 1200 120" className="h-28 w-full" aria-hidden>
        <path
          d="M0 40 C150 90, 250 10, 400 50 S650 100, 800 40 S1000 10, 1200 55"
          fill="none"
          stroke="hsl(72 19% 32% / 0.25)"
          strokeWidth="1.5"
        />
        {bulbs.map((i) => {
          const x = 40 + i * 64;
          const y = 40 + Math.sin(i * 0.9) * 28;
          return (
            <g key={i}>
              <line
                x1={x}
                y1={y - 10}
                x2={x}
                y2={y}
                stroke="hsl(72 19% 32% / 0.25)"
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={y + 6}
                r="5"
                fill="hsl(42 70% 70%)"
                className="origin-center"
                style={{
                  animation: `twinkle ${2 + (i % 5) * 0.35}s ease-in-out ${
                    i * 0.12
                  }s infinite`,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
