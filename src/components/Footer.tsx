import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Ornament } from "./ui.tsx";

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="relative overflow-hidden bg-sage-dark px-6 py-20 text-center text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(42_60%_70%_/_0.35),_transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-lg">
        <p className="font-script text-5xl md:text-6xl">
          {wedding.couple.partner1} & {wedding.couple.partner2}
        </p>
        <Ornament className="mt-6 text-ivory/40" />
        <p className="mt-6 font-display text-lg tracking-wide text-ivory/80">
          {wedding.displayDate[lang]}
        </p>
        <p className="mt-12 font-display text-xs uppercase tracking-[0.28em] text-ivory/50">
          {t.madeWithLove}
        </p>
      </div>
    </footer>
  );
}
