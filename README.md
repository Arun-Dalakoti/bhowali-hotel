# Hotel website, Bhowali

Home page for a hotel in Bhowali, written for guests visiting Kainchi Dham and the Ghorakhal Golu Devta temple.
Guests book by phone or WhatsApp; there is no online booking.

## Stack

- Next.js 16 (App Router, Turbopack, Cache Components), React 19, TypeScript
- Tailwind CSS v4 (theme in `src/app/globals.css`)
- Self-hosted fonts through `next/font/local`: Plus Jakarta Sans for all text (one variable file) and Mukta for the Hindi temple names, both SIL Open Font License

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint
```

## Where things are

| What | Where |
|---|---|
| All text, phone, WhatsApp, email, rooms, distances, FAQs | `src/content/site.ts` |
| Call / WhatsApp / email links | `src/lib/contact.ts` |
| Colours, fonts, radius, animation tokens | `src/app/globals.css` |
| Page sections, in order | `src/app/page.tsx` and `src/components/` |
| Images | `public/images/` |
| Fonts | `src/app/fonts/` |

## Before going live

Everything marked `TODO` in `src/content/site.ts` is a placeholder:

1. Hotel name, phone, WhatsApp number, email, address, Google Maps link, website address.
2. Room names, descriptions and facts.
3. The amenities list: confirm each item is really offered, remove the rest.
4. Distances: they are approximate, measured from Bhowali town. Re-check from the hotel's exact location.
5. Replace every file in `public/images/` with a real photo (keep the file names, or update the paths in `site.ts`).
   The current images are illustrations with a "Placeholder image" tag.
6. Set `launched: true` in `site.ts`. Until then the site tells search engines not to list it.

## Adding photos

Use JPG or WebP, landscape, at least 1600 px wide for rooms and 2400 px wide for the hero.
`next/image` resizes and compresses them for each screen size.

### Temple photos and credits

Only use photos you took yourself, photos the owner gives you, or photos with a free licence (for example from
Wikimedia Commons). A photo found on Google, Instagram or a travel site is not free to use.

For a Creative Commons photo, fill in `credit` for that temple in `src/content/site.ts`:

```ts
credit: { text: "Photo: Author name, CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:..." },
```

The credit then appears under the photo. For your own photos leave `credit: null`.

## Adding room videos

In `src/content/site.ts`, change a room's `media` from an image to a video:

```ts
media: { type: "video", src: "/videos/deluxe.mp4", poster: "/images/room-deluxe.jpg", alt: "Walk-through of the deluxe room" },
```

Put the file in `public/videos/`. `src/components/room-media.tsx` already renders it.
Keep videos short and compressed (H.264 MP4, 720p, a few MB): most visitors are on mobile data in the hills.

## Design notes

- Colours: pine greens (the hills), brass (the bells at Ghorakhal), a cool mist background.
- The hero's route strip shows the one fact visitors care about: the hotel sits between the two temples.
- On phones a Call / WhatsApp bar slides in at the bottom once the hero buttons scroll out of view.
- Motion: one entrance sequence in the hero, hover and open/close feedback elsewhere. Reduced-motion settings are respected.
