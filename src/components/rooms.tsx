import { site } from "@/content/site";
import { CallButton, WhatsAppButton } from "./contact-buttons";
import { RoomMediaView } from "./room-media";

/** Photos of the rooms and the guest house. Room types and prices are confirmed on a call, not listed here. */
export function Rooms() {
  return (
    <section id="rooms" className="shell py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">Rooms</h2>
        <p className="mt-4 text-lg text-stone">
          Simple rooms with a double bed and an attached bathroom, in the middle of Bhowali. Call or message us with
          your dates and we will tell you which rooms are free and the price.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {site.photos.map((photo) => (
          <li key={photo.media.src}>
            <figure className="group">
              <div className="relative aspect-4/3 overflow-hidden rounded-card bg-pine-100 shadow-lift">
                <RoomMediaView media={photo.media} />
              </div>
              <figcaption className="mt-3 text-stone">{photo.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <CallButton />
        <WhatsAppButton />
      </div>
    </section>
  );
}
