import { site } from "@/content/site";
import { ChevronIcon } from "./icons";

export function Faq() {
  return (
    <section id="questions" className="bg-paper py-20 md:py-28">
      <div className="shell grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">Questions guests ask</h2>

        <div>
          {site.faqs.map((item) => (
            <details key={item.q} className="group border-b border-pine-200 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronIcon className="size-5 shrink-0 text-brass-600 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="max-w-[60ch] pb-6 text-lg text-stone">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
