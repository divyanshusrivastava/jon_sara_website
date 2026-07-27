import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function Accommodation() {
  const { t, lang } = useI18n();

  return (
    <Section id="stay">
      <SectionHeading title={t.accommodation} subtitle={t.accommodationSub} />
      <div className="space-y-8">
        {wedding.hotels.map((hotel, i) => (
          <motion.article
            key={hotel.name}
            className="border-b border-sage/20 pb-8 text-center last:border-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
          >
            <h3 className="font-display text-2xl text-sage-dark md:text-3xl">
              {hotel.name}
            </h3>
            <p className="mt-2 font-display text-base text-sage">{hotel.address}</p>
            <p className="mt-2 font-display text-sm tracking-wide text-sage-dark/70">
              {hotel.price[lang]}
            </p>
            <p className="mx-auto mt-3 max-w-md font-display text-lg leading-relaxed text-sage">
              {hotel.blurb[lang]}
            </p>
            <a
              href={hotel.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-display text-sm tracking-wide text-sage-dark underline-offset-4 hover:underline"
            >
              {hotel.url.replace(/^https?:\/\//, "").split("/")[0] || "Website"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.article>
        ))}
      </div>
      <p className="mt-10 text-center font-display text-sm italic text-sage">
        {t.hotelsNote}
      </p>
    </Section>
  );
}
