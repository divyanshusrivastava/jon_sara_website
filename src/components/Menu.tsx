import { motion } from "framer-motion";
import { wedding, type Localized } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { Section, SectionHeading } from "./ui.tsx";

export function Menu() {
  const { t, lang } = useI18n();
  const { menu } = wedding;

  return (
    <Section id="menu">
      <SectionHeading title={t.menu} subtitle={t.seatedDinner} />
      <motion.p
        className="mx-auto mb-12 max-w-2xl text-center font-display text-lg leading-relaxed text-sage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {menu.intro[lang]}
      </motion.p>

      <div className="space-y-10">
        <MenuGroup title={t.meatOptions} items={menu.meat} lang={lang} />
        <MenuGroup title={t.fishOptions} items={menu.fish} lang={lang} />
        <MenuGroup title={t.kidsMenu} items={menu.kids} lang={lang} />
      </div>
    </Section>
  );
}

function MenuGroup({
  title,
  items,
  lang,
}: {
  title: string;
  items: Localized[];
  lang: keyof Localized;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      <h3 className="mb-4 text-center font-display text-xs uppercase tracking-[0.28em] text-sage">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.en}
            className="border-b border-sage/15 pb-3 text-center font-display text-lg leading-snug text-sage-dark"
          >
            {item[lang]}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
