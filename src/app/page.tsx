import { Amenities } from "@/components/amenities";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { GettingHere } from "@/components/getting-here";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { Rooms } from "@/components/rooms";
import { ScrollFlag } from "@/components/scroll-flag";
import { Temples } from "@/components/temples";
import { site } from "@/content/site";

// Structured data: helps search engines show the hotel's name, phone and location.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: site.name,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  image: `${site.url}/images/og.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.town,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <ScrollFlag />
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Temples />
        <Amenities />
        <Gallery />
        <GettingHere />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
