import Image from "next/image";
import { site } from "@/content/site";

export function Temples() {
  return (
    <section id="temples" className="bg-pine-900 py-20 text-white md:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">Two temples, both a short drive away</h2>
          <p className="mt-4 text-lg text-white/75">
            Most of our guests come for darshan. From Bhowali you can reach either temple early, before the crowds, and
            be back for lunch.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {site.temples.map((temple, index) => (
            <article key={temple.name} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <figure className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-4/3 overflow-hidden rounded-card bg-pine-800">
                  <Image
                    src={temple.image.src}
                    alt={temple.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {temple.credit && (
                  <figcaption className="mt-2 text-sm text-white/60">
                    <a href={temple.credit.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                      {temple.credit.text}
                    </a>
                  </figcaption>
                )}
              </figure>

              <div>
                <p lang="hi" className="font-display font-semibold tracking-tight text-2xl text-brass-200">
                  {temple.nameHindi}
                </p>
                <h3 className="mt-1 font-display font-semibold tracking-tight text-3xl md:text-4xl">{temple.name}</h3>
                <p className="mt-4 w-fit rounded-pill bg-white/10 px-4 py-1.5 font-semibold text-brass-200">
                  {temple.distance}
                </p>
                <p className="mt-5 max-w-[52ch] text-lg text-white/85">{temple.body}</p>
                <p className="mt-5 max-w-[52ch] border-l-2 border-brass-400 pl-4 text-white/75">{temple.tip}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
