import { useState } from "react";
import { I18nProvider } from "./i18n.tsx";
import { IntroOverlay } from "./components/IntroOverlay.tsx";
import { Hero } from "./components/Hero.tsx";
import { Countdown } from "./components/Countdown.tsx";
import { Details } from "./components/Details.tsx";
import { Gallery } from "./components/Gallery.tsx";
import { Schedule } from "./components/Schedule.tsx";
import { Menu } from "./components/Menu.tsx";
import { DressCode } from "./components/DressCode.tsx";
import { Accommodation } from "./components/Accommodation.tsx";
import { FAQ } from "./components/FAQ.tsx";
import { Gifts } from "./components/Gifts.tsx";
import { RsvpForm, RsvpInfo } from "./components/Rsvp.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  const [sealed, setSealed] = useState(true);

  return (
    <I18nProvider>
      <IntroOverlay open={sealed} onOpen={() => setSealed(false)} />
      <main
        className={
          sealed
            ? "h-[100svh] overflow-hidden"
            : "animate-[fade-up_0.9s_ease_both]"
        }
      >
        <Hero />
        <Countdown />
        <Details />
        <Gallery />
        <Schedule />
        <Menu />
        <DressCode />
        <Accommodation />
        <FAQ />
        <Gifts />
        <RsvpInfo />
        <RsvpForm />
        <Footer />
      </main>
    </I18nProvider>
  );
}
