import { site } from "@/content/site";
import { MapPinIcon } from "./icons";

export function GettingHere() {
  return (
    <section id="location" className="shell grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
      <div>
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">Getting here</h2>
        <p className="mt-5 max-w-[50ch] text-lg text-stone">
          Bhowali is where the hill roads meet: the routes to Nainital, Bhimtal, Almora and Ramgarh all pass through
          the town. That makes it a practical base for Kainchi Dham and the Ghorakhal temple.
        </p>

        <address className="mt-8 flex items-start gap-3 not-italic">
          <MapPinIcon className="mt-1 size-5 shrink-0 text-brass-600" />
          <span>
            <span className="font-semibold">{site.name}</span>
            <br />
            {site.address}
          </span>
        </address>

        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-12 items-center rounded-pill border border-pine-700 px-5 font-semibold text-pine-800
                     transition-colors hover:bg-pine-800 hover:text-white"
        >
          Open in Google Maps
        </a>
      </div>

      <div>
        <dl>
          {site.distances.map((row) => (
            <div key={row.place} className="flex items-baseline justify-between gap-6 border-b border-pine-200 py-4 first:border-t">
              <dt className="text-lg">{row.place}</dt>
              <dd className="font-display font-semibold tracking-tight text-2xl tabular-nums">{row.km}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.95rem] text-stone">Approximate road distances from Bhowali.</p>
      </div>
    </section>
  );
}
