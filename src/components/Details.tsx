import type { ReactNode } from "react";
import { MapPin, CalendarDays, Car, Clock, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Ornament, Section, SectionHeading } from "./ui.tsx";

export function Details() {
  const { t, lang } = useI18n();
  const { venue } = wedding;

  return (
    <Section id="details" className="!bg-[hsl(40_28%_88%)]">
      <SectionHeading title={t.details} subtitle={t.detailsSub} />
      <Ornament className="mb-12" />

      <motion.div
        className="mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-sage/30 bg-cream/40">
          <span className="font-script text-4xl text-sage-dark">
            {wedding.couple.monogram}
          </span>
        </div>

        <p className="font-body text-xs uppercase tracking-[0.3em] text-sage">
          {t.venue}
        </p>
        <h3 className="mt-3 font-display text-3xl text-sage-dark md:text-4xl">
          {venue.name[lang]}
        </h3>
        <p className="mt-3 font-body text-base leading-relaxed text-sage">
          {venue.address}
        </p>
        <p className="mt-4 font-body text-base text-sage-dark/80">
          {venue.timeRange[lang]}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-sage-dark/30 px-5 py-2.5 font-body text-sm tracking-wide text-sage-dark transition hover:bg-sage-dark hover:text-ivory"
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
                venue.address,
              )
            }
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-sage-dark/30 px-5 py-2.5 font-body text-sm tracking-wide text-sage-dark transition hover:bg-sage-dark hover:text-ivory"
          >
            <CalendarDays className="h-4 w-4" />
            {t.calendar}
          </a>
        </div>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-3xl gap-10 md:grid-cols-3">
        <InfoBlock
          icon={<Car className="h-5 w-5" />}
          title={venue.parking.title[lang]}
          body={venue.parking.body[lang]}
        />
        <InfoBlock
          icon={<Clock className="h-5 w-5" />}
          title={venue.arrival.title[lang]}
          body={venue.arrival.body[lang]}
        />
        <InfoBlock
          icon={<Sun className="h-5 w-5" />}
          title={venue.weather.title[lang]}
          body={venue.weather.body[lang]}
        />
      </div>
    </Section>
  );
}

function InfoBlock({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-sage-dark">
        {icon}
      </div>
      <h4 className="font-display text-xl text-sage-dark">{title}</h4>
      <p className="mt-2 font-body text-sm leading-relaxed text-sage">{body}</p>
    </motion.div>
  );
}

function buildGoogleCalendarUrl(
  title: string,
  startISO: string,
  location: string,
) {
  const start = new Date(startISO);
  const end = new Date(start.getTime() + 8 * 60 * 60 * 1000);
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
