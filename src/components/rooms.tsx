import { site } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import { RoomMediaView } from "./room-media";

export function Rooms() {
  return (
    <section id="rooms" className="shell py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">Rooms</h2>
        <p className="mt-4 text-lg text-stone">
          Clean, simple rooms with what a family needs after a day of darshan. Tell us your dates and we will suggest
          the right one.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
        {site.rooms.map((room) => (
          <li key={room.slug}>
            <article className="group flex h-full flex-col">
              <div className="relative aspect-4/3 overflow-hidden rounded-card bg-pine-100 shadow-lift">
                <RoomMediaView media={room.media} />
              </div>

              <h3 className="mt-6 font-display font-semibold tracking-tight text-2xl">{room.name}</h3>
              <p className="mt-2 text-stone">{room.summary}</p>

              <ul className="mt-4 flex flex-col gap-1.5">
                {room.facts.map((fact) => (
                  <li key={fact} className="flex items-baseline gap-3">
                    <span aria-hidden className="size-1.5 shrink-0 -translate-y-0.5 rounded-full bg-brass-500" />
                    {fact}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappHref(`Namaste, please share the rate and availability for the ${room.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-fit font-semibold text-pine-700 underline decoration-brass-400 decoration-2
                           underline-offset-[6px] transition-colors hover:text-pine-950"
              >
                Ask about this room on WhatsApp
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
