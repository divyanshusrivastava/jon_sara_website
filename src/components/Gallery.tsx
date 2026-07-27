import { wedding } from "../data/wedding.ts";

export function Gallery() {
  const photos = [...wedding.gallery, ...wedding.gallery];

  return (
    <section className="relative overflow-hidden bg-sage-dark py-10 md:py-14">
      <div className="mb-8 text-center">
        <span className="font-script text-5xl text-ivory/90">
          {wedding.couple.monogram}
        </span>
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
