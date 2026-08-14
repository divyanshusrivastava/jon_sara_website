import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Ornament } from "./ui.tsx";

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="relative overflow-hidden bg-chocolate px-6 py-20 text-center text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#c4a35a55,_transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-lg">
        <p className="font-script text-5xl md:text-6xl">
          {wedding.couple.partner1} & {wedding.couple.partner2}
        </p>
        <Ornament className="mt-6 text-ivory/40" />
        <p className="mt-6 font-display text-xl tracking-wide text-ivory/85">
          {wedding.displayDate[lang]}
        </p>
        <p className="mt-2 font-body text-sm tracking-wide text-ivory/60">
          {wedding.locationShort[lang]}
        </p>
        <p className="mt-12 font-body text-xs uppercase tracking-[0.28em] text-ivory/45">
          {t.madeWithLove}
        </p>
      </div>
    </footer>
  );
}
