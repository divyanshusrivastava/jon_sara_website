import { wedding } from "../data/wedding.ts";
import { useI18n } from "../i18n.tsx";
import { SectionHeading } from "./ui.tsx";

export function Gallery() {
  const { t } = useI18n();
  const photos = [...wedding.gallery, ...wedding.gallery];

  return (
    <section id="gallery" className="relative overflow-hidden bg-sage-dark py-14 md:py-20">
      <div className="mb-10 px-6 text-center">
        <SectionHeading title={t.gallery} subtitle={t.gallerySub} light />
      </div>
      <div className="relative">
        <div
          className="flex w-max gap-4"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {photos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="h-56 w-44 shrink-0 overflow-hidden sm:h-72 sm:w-56"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
