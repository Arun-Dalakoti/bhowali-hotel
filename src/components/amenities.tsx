import { site } from "@/content/site";

export function Amenities() {
  return (
    <section id="amenities" className="shell py-20 md:py-28">
      <h2 className="max-w-2xl font-display font-semibold tracking-tight text-4xl md:text-5xl">What your stay includes</h2>

      <dl className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {site.amenities.map((item) => (
          <div key={item.name} className="border-t border-pine-200 py-6">
            <dt className="text-xl font-semibold">{item.name}</dt>
            <dd className="mt-1 text-stone">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
