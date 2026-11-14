import { site } from "@/content/site";
import { telHref } from "@/lib/contact";
import { PhoneIcon } from "./icons";

const links = [
  { href: "#rooms", label: "Rooms" },
  { href: "#temples", label: "Temples" },
  { href: "#location", label: "Getting here" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 text-white transition-[background-color,color,box-shadow] duration-300
                 scrolled:bg-paper/90 scrolled:text-ink scrolled:shadow-[0_1px_0_rgb(15_29_22/0.08)] scrolled:backdrop-blur-md"
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-display font-semibold tracking-tight text-xl leading-none whitespace-nowrap md:text-2xl">
          {site.name}
        </a>

        <nav aria-label="Page sections" className="hidden items-center gap-8 font-medium whitespace-nowrap lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="opacity-85 transition-opacity hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={telHref}
          className="hidden h-10 items-center gap-2 rounded-pill border border-current/30 px-4 font-semibold whitespace-nowrap
                     transition-colors hover:border-current sm:inline-flex"
        >
          <PhoneIcon className="size-4" />
          {site.phone.display}
        </a>

        <a
          href={telHref}
          aria-label={`Call ${site.name}`}
          className="grid size-10 place-items-center rounded-full border border-current/30 sm:hidden"
        >
          <PhoneIcon />
        </a>
      </div>
    </header>
  );
}
