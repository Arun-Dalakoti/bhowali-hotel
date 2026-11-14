import { site } from "@/content/site";
import { mailHref, telHref } from "@/lib/contact";
import { CallButton, WhatsAppButton } from "./contact-buttons";

export function Contact() {
  return (
    <section id="contact" className="bg-pine-800 py-20 text-white md:py-28">
      <div className="shell">
        <h2 className="max-w-[16ch] font-display font-semibold tracking-tight text-[clamp(2.1rem,5.4vw,4rem)] leading-[1.1]">
          Call or message us to book your room
        </h2>
        <p className="mt-5 max-w-[48ch] text-lg text-white/80">
          Tell us your dates and how many guests are coming. We will confirm availability and the rate.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </div>

        <dl className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-white/65">Phone</dt>
            <dd className="mt-1 text-xl font-semibold">
              <a href={telHref} className="hover:text-brass-200">
                {site.phone.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-white/65">Email</dt>
            <dd className="mt-1 text-xl font-semibold">
              <a href={mailHref} className="hover:text-brass-200">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-white/65">Address</dt>
            <dd className="mt-1 text-xl font-semibold">{site.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
