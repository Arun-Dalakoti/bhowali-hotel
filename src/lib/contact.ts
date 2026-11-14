import { site } from "@/content/site";

export const telHref = `tel:${site.phone.e164}`;

export function whatsappHref(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const mailHref = `mailto:${site.email}`;
