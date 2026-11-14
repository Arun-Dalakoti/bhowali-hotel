import { CallButton, WhatsAppButton } from "./contact-buttons";

/** Phones only: Call and WhatsApp stay within thumb reach once the hero buttons scroll away. */
export function MobileActionBar() {
  return (
    <div
      className="invisible fixed inset-x-0 bottom-0 z-40 grid translate-y-full grid-cols-2 gap-3 border-t border-pine-200
                 bg-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md
                 transition-[translate,visibility] duration-300 ease-settle
                 scrolled:visible scrolled:translate-y-0 md:hidden"
    >
      <CallButton label="Call" />
      <WhatsAppButton label="WhatsApp" />
    </div>
  );
}
