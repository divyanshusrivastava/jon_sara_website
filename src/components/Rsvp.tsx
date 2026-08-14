import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function RsvpInfo() {
  const { t } = useI18n();

  return (
    <Section id="rsvp-info" className="!bg-[hsl(55_12%_78%)]">
      <SectionHeading title={t.rsvpInfo} />
      <motion.p
        className="mx-auto max-w-2xl text-center font-body text-base leading-relaxed text-sage-dark/90 md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.rsvpInfoBody}
      </motion.p>
    </Section>
  );
}

export function RsvpForm() {
  const { t, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [companion, setCompanion] = useState<"yes" | "no" | "">("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    const endpoint = import.meta.env.VITE_RSVP_SCRIPT_URL;
    if (!endpoint) {
      setError(true);
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("lang", lang);

    setSending(true);
    try {
      await fetch(endpoint, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
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
          <Field name="name" label={t.fullName} required />
          <Field name="email" label={t.email} type="email" required />

          <fieldset className="space-y-3">
            <legend className="font-display text-xl text-sage-dark">
              {t.attendingQ} *
            </legend>
            <label className="flex items-center gap-3 font-body text-base text-sage">
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
            <label className="flex items-center gap-3 font-body text-base text-sage">
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

          {attending === "yes" ? (
            <>
              <fieldset className="space-y-3">
                <legend className="font-display text-xl text-sage-dark">
                  {t.companion} *
                </legend>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 font-body text-base text-sage">
                    <input
                      type="radio"
                      name="companion"
                      value="yes"
                      required
                      checked={companion === "yes"}
                      onChange={() => setCompanion("yes")}
                      className="accent-sage-dark"
                    />
                    {t.yes}
                  </label>
                  <label className="flex items-center gap-2 font-body text-base text-sage">
                    <input
                      type="radio"
                      name="companion"
                      value="no"
                      required
                      checked={companion === "no"}
                      onChange={() => setCompanion("no")}
                      className="accent-sage-dark"
                    />
                    {t.no}
                  </label>
                </div>
              </fieldset>

              {companion === "yes" ? (
                <Field name="companionName" label={t.companionName} required />
              ) : null}

              <div>
                <label className="mb-2 block font-display text-xl text-sage-dark">
                  {t.dietary}
                </label>
                <textarea
                  name="dietary"
                  rows={3}
                  className="w-full resize-y border border-sage/30 bg-white/50 px-4 py-3 font-body text-base text-sage-dark outline-none focus:border-sage-dark"
                />
              </div>
            </>
          ) : null}

          <div>
            <label className="mb-2 block font-display text-xl text-sage-dark">
              {t.messageOptional}
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-y border border-sage/30 bg-white/50 px-4 py-3 font-body text-base text-sage-dark outline-none focus:border-sage-dark"
            />
          </div>

          {error ? (
            <p className="font-body text-base text-terracotta">{t.rsvpError}</p>
          ) : null}

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-sage-dark px-6 py-3.5 font-body text-sm uppercase tracking-[0.25em] text-ivory transition hover:bg-carbon disabled:opacity-60"
          >
            {sending ? t.rsvpSending : t.submitRsvp}
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
      <span className="mb-1.5 block font-body text-sm tracking-wide text-sage">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-sage/30 bg-white/50 px-4 py-3 font-body text-base text-sage-dark outline-none focus:border-sage-dark"
      />
    </label>
  );
}
