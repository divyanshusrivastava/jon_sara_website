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
          className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center border-0 bg-[radial-gradient(ellipse_at_center,_hsl(40_28%_86%)_0%,_hsl(34_33%_82%)_45%,_hsl(72_15%_55%)_100%)] p-6 text-sage-dark"
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
            <div className="relative aspect-[3/4] bg-gradient-to-b from-[#d9d4c4] via-[#cfc8b4] to-[#a8ad8e]">
              <div className="absolute inset-4 border border-sage-dark/25" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <p className="font-display text-xs uppercase tracking-[0.35em] text-sage-dark/70">
                  {t.weAreGettingMarried}
                </p>
                <h1 className="mt-6 font-script text-6xl leading-none text-sage-dark md:text-7xl">
                  {wedding.couple.partner1}
                  <span className="mx-2 text-4xl">&</span>
                  {wedding.couple.partner2}
                </h1>
                <div className="mt-8 h-px w-16 bg-sage-dark/30" />
                <p className="mt-6 font-display text-base tracking-wide text-sage-dark/80">
                  {wedding.displayDate[lang]}
                </p>
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(255,255,255,.5) 0 1px, transparent 2px), radial-gradient(circle at 70% 20%, rgba(255,255,255,.4) 0 1px, transparent 2px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </motion.div>

          <motion.p
            className="mt-10 font-display text-sm uppercase tracking-[0.3em] text-sage-dark/70"
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
