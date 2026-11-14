"use client";

import { useEffect } from "react";

/**
 * Sets data-scrolled="true" on <html> once the visitor has scrolled past most of the hero.
 * CSS reacts to it through the `scrolled:` variant defined in globals.css
 * (the header turns solid, the mobile Call / WhatsApp bar slides in).
 */
export function ScrollFlag() {
  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      root.dataset.scrolled = String(window.scrollY > window.innerHeight * 0.55);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
