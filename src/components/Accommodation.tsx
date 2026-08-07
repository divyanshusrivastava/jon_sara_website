import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function Accommodation() {
  const { t, lang } = useI18n();

  return (
    <Section id="stay">
      <SectionHeading title={t.accommodation} subtitle={t.accommodationSub} />
      <p className="mx-auto mb-12 max-w-2xl text-center font-body text-base leading-relaxed text-sage md:text-lg">
        {wedding.hotelsIntro[lang]}
      </p>
      <div className="space-y-8">
        {wedding.hotels.map((hotel, i) => (
          <motion.article
            key={hotel.name}
            className="border-b border-sage/20 pb-8 text-center last:border-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <h3 className="font-display text-2xl text-sage-dark md:text-3xl">
              {hotel.name}
            </h3>
            <p className="mt-2 font-body text-base text-sage">{hotel.address}</p>
            {hotel.distance[lang] ? (
              <p className="mt-1 font-body text-sm tracking-wide text-sage-dark/70">
                {hotel.distance[lang]}
              </p>
            ) : null}
            <p className="mx-auto mt-3 max-w-md font-body text-base leading-relaxed text-sage">
              {hotel.blurb[lang]}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={hotel.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm tracking-wide text-sage-dark underline-offset-4 hover:underline"
              >
                <MapPin className="h-3.5 w-3.5" />
                {t.map}
              </a>
              <a
                href={hotel.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm tracking-wide text-sage-dark underline-offset-4 hover:underline"
              >
                {t.website}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-10 text-center font-body text-sm italic text-sage">
        {t.hotelsNote}
      </p>
    </Section>
  );
}
