import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

// Self-hosted fonts (SIL Open Font License).
// Plus Jakarta Sans is a variable font: one file covers every weight from 200 to 800.
const jakarta = localFont({
  variable: "--font-jakarta",
  display: "swap",
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  weight: "200 800",
});

// Only needed for the two temple names in Hindi, so it is not preloaded.
const muktaDevanagari = localFont({
  variable: "--font-mukta-devanagari",
  display: "swap",
  preload: false,
  src: "./fonts/mukta-devanagari-600.woff2",
  weight: "600",
});

const title = `${site.name}, ${site.town}: rooms near Kainchi Dham and Ghorakhal temple`;
const description =
  "Hotel rooms in Bhowali, about 9 km from Kainchi Dham (Neem Karoli Baba ashram) and 3 km from the Ghorakhal Golu Devta temple. Call or WhatsApp to book.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: site.hero.image.alt }],
  },
  robots: site.launched ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#1d3a2c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${muktaDevanagari.variable}`}>
      <body>{children}</body>
    </html>
  );
}
