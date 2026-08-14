import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function Welcome() {
  const { lang } = useI18n();
  const { welcome } = wedding;

  return (
    <Section id="welcome">
      <SectionHeading title={welcome.title[lang]} />
      <div className="mx-auto max-w-2xl space-y-5 text-center">
        {welcome.paragraphs.map((p, i) => (
          <motion.p
            key={p.en}
            className="font-body text-base leading-relaxed text-sage md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            {p[lang]}
          </motion.p>
        ))}
      </div>
    </Section>
  );
}

export function Story() {
  const { lang } = useI18n();
  const { story } = wedding;

  return (
    <Section id="story" className="!bg-countdown">
      <SectionHeading title={story.title[lang]} />
      <div className="mx-auto max-w-2xl space-y-5">
        {story.paragraphs.map((p) => (
          <motion.p
            key={p.en.slice(0, 40)}
            className="font-body text-base leading-relaxed text-sage-dark/85 md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
          >
            {p[lang]}
          </motion.p>
        ))}
      </div>
    </Section>
  );
}

export function Foundation() {
  const { lang } = useI18n();
  const { foundation } = wedding;

  return (
    <Section id="foundation" className="!bg-chocolate !text-ivory">
      <SectionHeading title={foundation.title[lang]} light />
      <motion.blockquote
        className="mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-display text-2xl italic leading-snug text-ivory md:text-3xl">
          {foundation.verse[lang]}
        </p>
        <footer className="mt-6 font-body text-sm uppercase tracking-[0.25em] text-ivory/70">
          {foundation.reference[lang]}
        </footer>
      </motion.blockquote>
    </Section>
  );
}

export function FamilyHouse() {
  const { lang } = useI18n();
  const { familyHouse } = wedding;

  return (
    <Section id="house">
      <SectionHeading title={familyHouse.title[lang]} />
      <div className="mx-auto max-w-2xl space-y-5 text-center">
        {familyHouse.paragraphs.map((p) => (
          <motion.p
            key={p.en.slice(0, 40)}
            className="font-body text-base leading-relaxed text-sage md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {p[lang]}
          </motion.p>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const { t, lang } = useI18n();
  const { contact } = wedding;

  return (
    <Section id="contact" className="!bg-countdown">
      <SectionHeading title={contact.title[lang]} />
      <div className="mx-auto flex max-w-lg flex-col gap-6 text-center">
        {contact.people.map((person) => (
          <div key={person.name}>
            <p className="font-display text-2xl text-sage-dark">{person.name}</p>
            {person.email ? (
              <a
                href={`mailto:${person.email}`}
                className="mt-1 block font-body text-sage underline-offset-4 hover:underline"
              >
                {person.email}
              </a>
            ) : null}
            {person.phone ? (
              <a
                href={`tel:${person.phone.replace(/\s+/g, "")}`}
                className="mt-1 block font-body text-sage underline-offset-4 hover:underline"
              >
                {person.phone}
              </a>
            ) : null}
          </div>
        ))}
        {!contact.people.some((p) => p.email || p.phone) ? (
          <p className="font-body text-base leading-relaxed text-sage">
            {contact.note[lang]}
          </p>
        ) : null}
        <p className="sr-only">{t.contact}</p>
      </div>
    </Section>
  );
}
