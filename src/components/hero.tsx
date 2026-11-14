import Image from "next/image";
import { site } from "@/content/site";
import { CallButton, WhatsAppButton } from "./contact-buttons";
import { RouteStrip } from "./route-strip";

export function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-pine-900 text-white">
      {/* Two crops of the hero photo: a tall one for phones, a wide one from tablets up. */}
      <Image
        src={hero.image.mobileSrc}
        alt={hero.image.alt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[68%_50%] motion-safe:animate-settle md:hidden"
      />
      <Image
        src={hero.image.src}
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 hidden object-cover motion-safe:animate-settle md:block"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-pine-950/95 via-pine-950/55 to-pine-950/45" />
      {/* On wide screens the text sits on the left, so that side is darkened and the temple stays clear on the right. */}
      <div aria-hidden className="absolute inset-0 -z-10 hidden bg-linear-to-r from-pine-950/85 via-pine-950/45 to-transparent md:block" />

      <div className="shell pt-28 pb-8 md:pb-10">
        <p className="font-medium text-brass-200 motion-safe:animate-rise">{hero.place}</p>

        <h1
          className="mt-3 max-w-[20ch] font-display font-semibold tracking-tight text-[clamp(2.1rem,5.4vw,4rem)] leading-[1.1] text-balance
                     motion-safe:animate-rise motion-safe:[animation-delay:120ms]"
        >
          {hero.title}
        </h1>

        <p className="mt-5 max-w-[50ch] text-lg text-white/85 motion-safe:animate-rise motion-safe:[animation-delay:240ms] md:text-xl">
          {hero.lead}
        </p>

        <div className="mt-8 flex flex-col gap-3 motion-safe:animate-rise motion-safe:[animation-delay:360ms] sm:flex-row">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </div>

        <RouteStrip className="mt-10 motion-safe:animate-rise motion-safe:[animation-delay:480ms] md:mt-12" />
      </div>
    </section>
  );
}
