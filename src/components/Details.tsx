import { MapPin, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Ornament, Section, SectionHeading } from "./ui.tsx";

export function Details() {
  const { t, lang } = useI18n();
  const { venue } = wedding;

  return (
    <Section id="details">
      <SectionHeading title={t.details} subtitle={t.detailsSub} />
      <Ornament className="mb-12" />

      <motion.div
        className="mx-auto max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-sage/30 bg-cream/30">
          <span className="font-script text-4xl text-sage-dark">
            {wedding.couple.monogram}
          </span>
        </div>

        <p className="font-display text-xs uppercase tracking-[0.3em] text-sage">
          {t.venue}
        </p>
        <h3 className="mt-3 font-display text-3xl text-sage-dark md:text-4xl">
          {venue.name}
        </h3>
        <p className="mt-2 font-display text-lg text-sage">{venue.city}</p>
        <p className="mt-4 font-display text-base text-sage-dark/80">
          {venue.timeRange[lang]}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-sage-dark/30 px-5 py-2.5 font-display text-sm tracking-wide text-sage-dark transition hover:bg-sage-dark hover:text-ivory"
          >
            <MapPin className="h-4 w-4" />
            {t.googleMaps}
          </a>
          <a
            href={
              venue.calendarUrl ||
              buildGoogleCalendarUrl(
                `${wedding.couple.partner1} & ${wedding.couple.partner2} Wedding`,
                wedding.dateISO,
                venue.name,
              )
            }
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-sage-dark/30 px-5 py-2.5 font-display text-sm tracking-wide text-sage-dark transition hover:bg-sage-dark hover:text-ivory"
          >
            <CalendarDays className="h-4 w-4" />
            {t.calendar}
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

function buildGoogleCalendarUrl(title: string, startISO: string, location: string) {
  const start = new Date(startISO);
  const end = new Date(start.getTime() + 11 * 60 * 60 * 1000);
  const fmt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${fmt(start)}/${fmt(end)}`,
    location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
