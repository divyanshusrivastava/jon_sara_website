import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";

export function IntroOverlay({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: () => void;
}) {
  const { t, lang } = useI18n();

  return (
    <AnimatePresence>
      {open ? (
        <motion.button
          type="button"
          aria-label={t.tapToOpen}
          onClick={onOpen}
          className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center border-0 bg-[radial-gradient(ellipse_at_center,_#f3ebe0_0%,_#e8dfd0_45%,_#6e5d53_100%)] p-6 text-sage-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative w-full max-w-sm overflow-hidden rounded-[2px] shadow-[var(--shadow-elegant)]"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            whileHover={{ y: -4 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={wedding.heroImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/30 to-chocolate/10" />
              <div className="absolute inset-4 border border-ivory/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-end px-8 pb-12 text-center text-ivory">
                <p className="font-body text-xs uppercase tracking-[0.35em] text-ivory/80">
                  {t.weAreGettingMarried}
                </p>
                <h1 className="mt-4 font-script text-6xl leading-none md:text-7xl">
                  {wedding.couple.partner1}
                  <span className="mx-2 text-4xl">&</span>
                  {wedding.couple.partner2}
                </h1>
                <div className="mt-6 h-px w-16 bg-ivory/40" />
                <p className="mt-5 font-display text-lg tracking-wide text-ivory/90">
                  {wedding.displayDate[lang]}
                </p>
                <p className="mt-1 font-body text-sm text-ivory/75">
                  {wedding.locationShort[lang]}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="mt-10 font-body text-sm uppercase tracking-[0.3em] text-sage-dark/70"
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {t.tapToOpen}
          </motion.p>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
