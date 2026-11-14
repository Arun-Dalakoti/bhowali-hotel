import Image from "next/image";
import { site } from "@/content/site";

// How each of the four photos sits in the grid on wide screens.
const layout = [
  "col-span-2 aspect-square md:row-span-2 md:aspect-auto",
  "aspect-square",
  "aspect-square",
  "col-span-2 aspect-2/1",
];

export function Gallery() {
  return (
    <section id="photos" className="bg-paper py-20 md:py-28">
      <div className="shell">
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">Photos</h2>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {site.gallery.map((photo, index) => (
            <li key={photo.src} className={`relative overflow-hidden rounded-card bg-pine-100 ${layout[index] ?? "aspect-square"}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
