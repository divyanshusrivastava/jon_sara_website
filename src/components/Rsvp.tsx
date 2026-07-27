import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function RsvpInfo() {
  const { t, lang } = useI18n();
  const body = t.rsvpInfoBody.replace("{deadline}", wedding.rsvpDeadline[lang]);

  return (
    <Section id="rsvp-info" className="!bg-[hsl(55_18%_78%)]">
      <SectionHeading title={t.rsvpInfo} />
      <motion.p
        className="mx-auto max-w-2xl text-center font-display text-lg leading-relaxed text-sage-dark/90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {body}
      </motion.p>
    </Section>
  );
}

export function RsvpForm() {
  const { t, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const dishes = useMemo(
    () => [...wedding.menu.meat, ...wedding.menu.fish],
    [],
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("RSVP", Object.fromEntries(data.entries()));
    setSubmitted(true);
  }

  return (
    <Section id="rsvp">
      <SectionHeading title={t.questionnaire} subtitle={t.questionnaireSub} />

      {submitted ? (
        <motion.p
          className="text-center font-display text-2xl text-sage-dark"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.rsvpThanks}
        </motion.p>
      ) : (
        <motion.form
          onSubmit={onSubmit}
          className="mx-auto max-w-xl space-y-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <fieldset className="space-y-3">
            <legend className="font-display text-lg text-sage-dark">
              {t.attendingQ.replace("{date}", wedding.displayDate[lang])} *
            </legend>
            <label className="flex items-center gap-3 font-display text-base text-sage">
              <input
                type="radio"
                name="attending"
                value="yes"
                required
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
                className="accent-sage-dark"
              />
              {t.yesAttending}
            </label>
            <label className="flex items-center gap-3 font-display text-base text-sage">
              <input
                type="radio"
                name="attending"
                value="no"
                required
                checked={attending === "no"}
                onChange={() => setAttending("no")}
                className="accent-sage-dark"
              />
              {t.noAttending}
            </label>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="mb-2 font-display text-lg text-sage-dark">
              {t.yourDetails} *
            </legend>
            <Field name="name" label={t.fullName} required />
            <Field name="email" label={t.email} type="email" required />
            <Field name="phone" label={t.phone} type="tel" required />
          </fieldset>

          {attending === "yes" ? (
            <>
              <div>
                <label className="mb-2 block font-display text-lg text-sage-dark">
                  {t.mainCourse} *
                </label>
                <select
                  name="dish"
                  required
                  defaultValue=""
                  className="w-full border border-sage/30 bg-white/50 px-4 py-3 font-display text-base text-sage-dark outline-none focus:border-sage-dark"
                >
                  <option value="" disabled>
                    {t.chooseDish}
                  </option>
                  {dishes.map((d) => (
                    <option key={d.en} value={d.en}>
                      {d[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="space-y-3">
                <legend className="font-display text-lg text-sage-dark">
                  {t.bringingPartner} *
                </legend>
                <RadioYesNo name="partner" yes={t.yes} no={t.no} />
                <p className="font-display text-sm leading-relaxed text-sage">
                  {t.partnerNote}
                </p>
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="font-display text-lg text-sage-dark">
                  {t.bringingKids} *
                </legend>
                <RadioYesNo name="kids" yes={t.yes} no={t.no} />
              </fieldset>
            </>
          ) : null}

          <div>
            <label className="mb-2 block font-display text-lg text-sage-dark">
              {t.messageOptional}
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-y border border-sage/30 bg-white/50 px-4 py-3 font-display text-base text-sage-dark outline-none focus:border-sage-dark"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sage-dark px-6 py-3.5 font-display text-sm uppercase tracking-[0.25em] text-ivory transition hover:bg-carbon"
          >
            {t.submitRsvp}
          </button>
        </motion.form>
      )}
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-sm tracking-wide text-sage">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-sage/30 bg-white/50 px-4 py-3 font-display text-base text-sage-dark outline-none focus:border-sage-dark"
      />
    </label>
  );
}

function RadioYesNo({
  name,
  yes,
  no,
}: {
  name: string;
  yes: string;
  no: string;
}) {
  return (
    <div className="flex gap-6">
      <label className="flex items-center gap-2 font-display text-base text-sage">
        <input
          type="radio"
          name={name}
          value="yes"
          required
          className="accent-sage-dark"
        />
        {yes}
      </label>
      <label className="flex items-center gap-2 font-display text-base text-sage">
        <input
          type="radio"
          name={name}
          value="no"
          required
          className="accent-sage-dark"
        />
        {no}
      </label>
    </div>
  );
}
