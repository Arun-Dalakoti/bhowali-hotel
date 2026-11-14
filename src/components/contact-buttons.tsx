import { telHref, whatsappHref } from "@/lib/contact";
import { ChatIcon, PhoneIcon } from "./icons";

type Size = "md" | "lg";

type Props = {
  size?: Size;
  label?: string;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-pill font-semibold text-pine-950 " +
  "transition-[background-color,transform] duration-200 active:scale-[0.98]";

const sizes: Record<Size, string> = {
  md: "h-12 px-5 text-base",
  lg: "h-14 px-7 text-lg",
};

/** Opens the phone dialler. */
export function CallButton({ size = "md", label = "Call to book", className = "" }: Props) {
  return (
    <a href={telHref} className={`${base} ${sizes[size]} bg-brass-400 hover:bg-brass-200 ${className}`}>
      <PhoneIcon />
      {label}
    </a>
  );
}

/** Opens a WhatsApp chat with a message already typed. */
export function WhatsAppButton({
  size = "md",
  label = "WhatsApp us",
  message,
  className = "",
}: Props & { message?: string }) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} bg-whatsapp hover:bg-[#5fe08f] ${className}`}
    >
      <ChatIcon />
      {label}
    </a>
  );
}
