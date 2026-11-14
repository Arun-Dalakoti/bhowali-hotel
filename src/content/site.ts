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

export type Photo = { caption: string; media: RoomMedia };

export const site = {
  name: "The Kainchi Abode",
  kind: "Guest house",
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
      "Namaste, I want to book a room at The Kainchi Abode, Bhowali. Please share the availability and price.\n\nDates: \nGuests: ",
  },
  // TODO: real email
  email: "hello@example.com",
  // As written on the guest house's signboard.
  address: "Malli Bazar, near Bhowali Temple, Bhowali, Nainital, Uttarakhand 263132",
  // TODO: the hotel's own Google Maps link
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Kainchi+Abode+Malli+Bazar+Bhowali",

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

  /**
   * Photos of the guest house. Room types and prices are not listed: guests confirm those on a call.
   * To add a photo: put the file in public/images/ and add a line here.
   * To add a video later: { type: "video", src: "/videos/room.mp4", poster: "/images/room-circles.jpg", alt: "..." }
   */
  photos: [
    {
      caption: "Double-bed room",
      media: { type: "image", src: "/images/room-circles.jpg", alt: "Guest room with a double bed, a side cabinet and a black and white tiled floor" },
    },
    {
      caption: "Balcony seating",
      media: { type: "image", src: "/images/balcony.jpg", alt: "Balcony with a green table and two chairs in the morning sun" },
    },
    {
      caption: "Room with a window to the street",
      media: { type: "image", src: "/images/room-chevron.jpg", alt: "Guest room with a double bed beside a curtained window" },
    },
    {
      caption: "Balcony looking over the bazaar",
      media: { type: "image", src: "/images/balcony-view.jpg", alt: "Balcony with a red table and chair, looking over rooftops to a wooded hill" },
    },
    {
      caption: "Room with attached bathroom",
      media: { type: "image", src: "/images/room-chevron-wide.jpg", alt: "Guest room with a double bed and the door to its attached bathroom" },
    },
    {
      caption: "Attached bathroom with geyser",
      media: { type: "image", src: "/images/bathroom.jpg", alt: "Bathroom with a western toilet, a shower and a water heater" },
    },
    {
      caption: "Double-bed room from the door",
      media: { type: "image", src: "/images/room-circles-door.jpg", alt: "Guest room seen from its doorway, with a double bed and a doormat" },
    },
    {
      caption: "Corridor outside the rooms",
      media: { type: "image", src: "/images/corridor.jpg", alt: "Covered corridor with a patterned tile floor and a white railing" },
    },
    {
      caption: "Reception",
      media: { type: "image", src: "/images/reception.jpg", alt: "Glass door of the reception with the guest house phone number on it" },
    },
    {
      caption: "The guest house in Malli Bazar",
      media: { type: "image", src: "/images/exterior.jpg", alt: "Front of The Kainchi Abode guest house, with its signboard on the balcony" },
    },
  ] satisfies Photo[],

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

  // Only what the photos of the guest house show. Add more once confirmed (parking, meals and so on).
  amenities: [
    { name: "Hot water", detail: "A geyser in the attached bathroom." },
    { name: "Wi-Fi", detail: "Available for guests." },
    { name: "Balcony seating", detail: "A table and chairs outside, in the morning sun." },
    { name: "Attached bathroom", detail: "With a western toilet and a shower." },
    { name: "In the bazaar", detail: "Shops and taxis are a few steps away in Malli Bazar." },
    { name: "CCTV", detail: "Cameras in the common areas." },
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
      q: "How far is Kainchi Dham from the guest house?",
      a: "About 9 km. The drive usually takes 15 to 20 minutes on the Nainital to Almora road.",
    },
    {
      q: "How do I book a room?",
      a: "Call us or send a WhatsApp message with your dates and the number of guests. We will tell you which rooms are free and the price.",
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
