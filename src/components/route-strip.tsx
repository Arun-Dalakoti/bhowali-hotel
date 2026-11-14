import { site } from "@/content/site";

/** The guest house sits between the two temples: this strip shows that at a glance. */
export function RouteStrip({ className = "" }: { className?: string }) {
  const [ghorakhal, kainchi] = site.route;

  return (
    <ol
      aria-label="Distance from the guest house to each temple"
      className={`grid overflow-hidden rounded-card bg-pine-950/45 ring-1 ring-white/15 backdrop-blur-md md:grid-cols-3 ${className}`}
    >
      <Stop name={ghorakhal.name} distance={ghorakhal.distance} time={ghorakhal.time} />
      <li className="relative border-y border-white/15 bg-brass-400 px-5 py-4 text-pine-950 md:border-x md:border-y-0 md:px-6 md:py-5">
        <p className="font-semibold">You stay here</p>
        <p className="font-display font-semibold tracking-tight text-2xl leading-tight">{site.town}</p>
        <p className="text-[0.95rem] text-pine-900/80">Between the two temples</p>
      </li>
      <Stop name={kainchi.name} distance={kainchi.distance} time={kainchi.time} />
    </ol>
  );
}

function Stop({ name, distance, time }: { name: string; distance: string; time: string }) {
  return (
    <li className="px-5 py-4 md:px-6 md:py-5">
      <p className="font-semibold text-brass-200">{name}</p>
      <p className="font-display font-semibold tracking-tight text-2xl leading-tight">{distance}</p>
      <p className="text-[0.95rem] text-white/75">{time}</p>
    </li>
  );
}
