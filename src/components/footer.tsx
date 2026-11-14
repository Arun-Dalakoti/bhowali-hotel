import { site } from "@/content/site";

export function Footer() {
  return (
    // Extra bottom padding on phones leaves room for the fixed Call / WhatsApp bar.
    <footer className="bg-pine-950 pt-10 pb-28 text-pine-300 md:pb-10">
      <div className="shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="font-display font-semibold tracking-tight text-xl text-white">{site.name}</p>
        <p>
          {site.town}, {site.region}
        </p>
        <p>
          © {site.copyrightYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
