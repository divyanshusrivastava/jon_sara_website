# Jon & Sara Wedding Website

Digital wedding invitation inspired by [Katia & Benjamin](https://katiaebenjamin.thedigitalyes.com/) — sage/ivory palette, envelope intro, countdown, details, gallery, schedule, menu, dress code, hotels, FAQ, gifts, and RSVP.

## Develop

```bash
npm install
npm run dev
```

## Customize

Edit `src/data/wedding.ts` for names, date, venue, schedule, menu, hotels, FAQ, gifts, and gallery photos.

Language copy lives in the same file (`copy.en` / `copy.pt`). Toggle PT/EN in the top-right of the hero.

## Build

```bash
npm run build
npm run preview
```

RSVP submissions are written to a Google Sheet. Follow `google-apps-script/README.md` to connect it.
