import { site } from "@/content/site";
import { CallButton, WhatsAppButton } from "./contact-buttons";
import { PhotoSlider } from "./photo-slider";

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

      <div className="mt-12">
        <PhotoSlider photos={site.photos} />
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <CallButton />
        <WhatsAppButton />
      </div>
    </section>
  );
}
