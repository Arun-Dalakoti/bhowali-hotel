/**
 * Everything the website says lives in this one file.
 *
 * PLACEHOLDERS: lines marked "TODO" are stand-ins until the real details arrive.
 * Search this file for "TODO" before the site goes live.
 */

export type RoomMedia =
  | { type: "image"; src: string; alt: string }
  // Ready for later: add a room video by using this shape instead of an image.
  | { type: "video"; src: string; poster: string; alt: string };

/** Photo credit, required by Creative Commons licences. Leave as null for your own photos. */
export type PhotoCredit = { text: string; href: string } | null;

export type Room = {
  slug: string;
  name: string;
  summary: string;
  facts: string[];
  media: RoomMedia;
};

export const site = {
  // TODO: real hotel name
  name: "Your Hotel Name",
  town: "Bhowali",
  region: "Nainital district, Uttarakhand",
  // TODO: real website address (used for link previews and search engines)
  url: "https://example.com",
  // Keep false while placeholders remain: it tells search engines not to list the site yet.
  launched: false,
  copyrightYear: 2026,

  phone: {
    display: "+91 83848 18281",
    e164: "+918384818281",
  },
  whatsapp: {
    // Country code + number, digits only, no "+"
    number: "918384818281",
    // Already typed in the chat when a guest taps a WhatsApp button. They can edit it before sending.
    defaultMessage:
      "Namaste, I want to book a room at your hotel in Bhowali. Please share the availability and price.\n\nDates: \nGuests: ",
  },
  // TODO: real email
  email: "hello@example.com",
  // TODO: real street address
  address: "Bhowali, Nainital district, Uttarakhand 263132",
  // TODO: the hotel's own Google Maps link
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bhowali%2C+Uttarakhand",

  hero: {
    place: "Bhowali, near Nainital",
    title: "Stay in Bhowali. Kainchi Dham is 9\u00a0km up the road.",
    lead: "Clean, quiet rooms for families and devotees visiting Kainchi Dham and the Ghorakhal Golu Devta temple.",
    image: {
      src: "/images/hero.jpg",
      // Taller crop shown on phones.
      mobileSrc: "/images/hero-mobile.jpg",
      alt: "Kainchi Dham ashram and its red and yellow temple, set among forested hills",
    },
  },

  /**
   * Distances are from Bhowali town and are approximate.
   * TODO: re-check each one from the hotel's exact location.
   */
  route: [
    { name: "Ghorakhal Golu Devta temple", distance: "about 3 km", time: "about 10 minutes by road" },
    { name: "Kainchi Dham", distance: "about 9 km", time: "15 to 20 minutes by road" },
  ],

  rooms: [
    {
      slug: "deluxe",
      name: "Deluxe room", // TODO: real room names, details and photos
      summary: "A comfortable double room for two, with an attached bathroom.",
      facts: ["Sleeps 2", "Double bed", "Attached bathroom with hot water"],
      media: { type: "image", src: "/images/room-deluxe.jpg", alt: "Deluxe room with a double bed and a window facing the hills" },
    },
    {
      slug: "family",
      name: "Family room",
      summary: "More space and extra beds, so the whole family stays together.",
      facts: ["Sleeps 4", "Double bed and two singles", "Attached bathroom with hot water"],
      media: { type: "image", src: "/images/room-family.jpg", alt: "Family room with beds for four" },
    },
    {
      slug: "valley-view",
      name: "Valley view room",
      summary: "A double room with a wide window over the valley.",
      facts: ["Sleeps 2", "Double bed", "Valley-facing window"],
      media: { type: "image", src: "/images/room-valley.jpg", alt: "Valley view room with a large window" },
    },
  ] satisfies Room[],

  temples: [
    {
      name: "Kainchi Dham",
      nameHindi: "कैंची धाम",
      distance: "About 9 km from Bhowali",
      image: { src: "/images/kainchi-dham.jpg", alt: "Devotees in the courtyard of Kainchi Dham, beside the red and yellow temple" },
      // For a Wikimedia Commons photo: { text: "Photo: Author name, CC BY-SA 4.0", href: "<the photo's Commons page>" }
      credit: null as PhotoCredit,
      body: "The ashram of Neem Karoli Baba stands on the Nainital to Almora road, a short drive from Bhowali. Devotees come all year, and in very large numbers for the annual bhandara on 15 June.",
      tip: "Rooms in Bhowali fill early around 15 June and on long weekends. Call ahead.",
    },
    {
      name: "Ghorakhal Golu Devta temple",
      nameHindi: "घोड़ाखाल गोलू देवता मंदिर",
      distance: "About 3 km from Bhowali",
      image: { src: "/images/ghorakhal-temple.jpg", alt: "Brass bells hanging at the Ghorakhal Golu Devta temple" },
      credit: null as PhotoCredit,
      body: "Golu Devta is worshipped across Kumaon as the god of justice. Devotees leave written petitions here and tie a bell when a wish is granted, which is why the temple is covered in thousands of bells.",
      tip: "It is the closest temple to Bhowali: easy to visit before breakfast or on your way back.",
    },
  ],

  // TODO: confirm every item with the hotel. Remove anything that is not offered.
  amenities: [
    { name: "Hot water", detail: "In every bathroom, morning and evening." },
    { name: "Parking", detail: "Space for your car at the hotel." },
    { name: "Vegetarian meals", detail: "Simple home-style food, made fresh." },
    { name: "Wi-Fi", detail: "Free for guests." },
    { name: "Taxi help", detail: "We can help arrange a taxi to the temples." },
    { name: "Family friendly", detail: "Extra beds on request." },
  ],

  gallery: [
    { src: "/images/gallery-balcony.jpg", alt: "Tea on the balcony, looking over the hills" },
    { src: "/images/gallery-room.jpg", alt: "A guest room" },
    { src: "/images/gallery-hills.jpg", alt: "The hills around Bhowali" },
    { src: "/images/gallery-morning.jpg", alt: "Early morning in Bhowali" },
  ],

  // Approximate road distances from Bhowali town. TODO: re-check from the hotel's exact location.
  distances: [
    { place: "Ghorakhal Golu Devta temple", km: "3 km" },
    { place: "Kainchi Dham", km: "9 km" },
    { place: "Bhimtal lake", km: "10 km" },
    { place: "Nainital", km: "11 km" },
    { place: "Kathgodam railway station", km: "28 km" },
    { place: "Pantnagar airport", km: "60 km" },
  ],

  faqs: [
    {
      q: "How far is Kainchi Dham from the hotel?",
      a: "About 9 km. The drive usually takes 15 to 20 minutes on the Nainital to Almora road.",
    },
    {
      q: "How do I book a room?",
      a: "Call us or send a WhatsApp message with your dates and the number of guests. We will confirm availability and the rate straight away.",
    },
    {
      q: "Which is the nearest railway station and airport?",
      a: "Kathgodam is the nearest railway station, about 28 km from Bhowali. Pantnagar is the nearest airport, about 60 km away. Taxis and buses run from both.",
    },
    {
      q: "When is Kainchi Dham most crowded?",
      a: "Around the annual bhandara on 15 June, and on weekends and public holidays. Book your room early for those dates.",
    },
  ],
} as const;
