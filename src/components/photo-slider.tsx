"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/content/site";
import { ChevronIcon } from "./icons";

/** How long each photo stays on screen before the slider moves on. */
const SLIDE_MS = 4500;

/**
 * Photo slider: changes by itself every few seconds.
 * It stops while the pointer or keyboard focus is on it, after the guest presses pause,
 * and for anyone whose device asks for reduced motion.
 */
export function PhotoSlider({ photos }: { photos: readonly Photo[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // the guest pressed pause
  const [resting, setResting] = useState(false); // hovering, focused or touching
  const touchStartX = useRef<number | null>(null);
  const thumbs = useRef<HTMLDivElement>(null);
  const count = photos.length;

  const go = useCallback((to: number) => setIndex((to + count) % count), [count]);
  const running = !paused && !resting && count > 1;

  useEffect(() => {
    if (!running) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [running, index, count]);

  // Keep the active thumbnail in view without scrolling the page itself.
  useEffect(() => {
    const strip = thumbs.current;
    const active = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !active) return;
    strip.scrollTo({ left: active.offsetLeft - (strip.clientWidth - active.clientWidth) / 2, behavior: "smooth" });
  }, [index]);

  const current = photos[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Photos of the guest house"
      onMouseEnter={() => setResting(true)}
      onMouseLeave={() => setResting(false)}
      onFocus={() => setResting(true)}
      onBlur={() => setResting(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(index + 1);
        if (event.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div
        className="relative aspect-square overflow-hidden rounded-card bg-pine-950 shadow-lift sm:aspect-3/2 lg:aspect-auto lg:h-[min(36rem,72svh)]"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
          setResting(true);
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          touchStartX.current = null;
          setResting(false);
          if (start === null) return;
          const moved = event.changedTouches[0].clientX - start;
          if (Math.abs(moved) > 40) go(index + (moved < 0 ? 1 : -1));
        }}
      >
        {photos.map((photo, i) => {
          const active = i === index;
          const poster = photo.media.type === "video" ? photo.media.poster : photo.media.src;
          return (
            <div
              key={photo.media.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${photo.caption}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-700 ease-settle ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {/* Soft blurred copy fills the frame, so tall photos are shown whole instead of cropped. */}
              <Image src={poster} alt="" fill sizes="20vw" className="scale-110 object-cover opacity-60 blur-2xl" />
              {photo.media.type === "video" ? (
                <video
                  className="relative size-full object-contain"
                  src={photo.media.src}
                  poster={photo.media.poster}
                  aria-label={photo.media.alt}
                  controls
                  playsInline
                  preload="none"
                  onPlay={() => setPaused(true)}
                />
              ) : (
                <Image
                  src={photo.media.src}
                  alt={photo.media.alt}
                  fill
                  sizes="(min-width: 1280px) 1216px, 100vw"
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`object-contain transition-transform duration-[6000ms] ease-out ${
                    active ? "scale-100" : "scale-[1.04]"
                  }`}
                />
              )}
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-pine-950/85 to-transparent px-5 pt-16 pb-5 text-white sm:px-7 sm:pb-6">
          <p aria-live={running ? "off" : "polite"} className="flex items-baseline justify-between gap-4">
            <span className="font-display font-semibold tracking-tight text-lg sm:text-xl">{current.caption}</span>
            <span className="shrink-0 text-sm text-white/75 tabular-nums">
              {index + 1} / {count}
            </span>
          </p>
          {/* Thin bar that fills while the current photo is on screen. */}
          <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-white/25">
            <div
              key={`${index}-${running}`}
              className={`h-full origin-left bg-brass-400 ${running ? "motion-safe:animate-[fill_4500ms_linear_both]" : "scale-x-0"}`}
            />
          </div>
        </div>

        <SliderButton label="Previous photo" side="left" onClick={() => go(index - 1)} />
        <SliderButton label="Next photo" side="right" onClick={() => go(index + 1)} />

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          className="absolute top-3 right-3 rounded-pill bg-pine-950/60 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-pine-950/85 sm:top-4 sm:right-4"
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      <div ref={thumbs} className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:gap-3">
        {photos.map((photo, i) => {
          const poster = photo.media.type === "video" ? photo.media.poster : photo.media.src;
          return (
            <button
              key={photo.media.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show photo ${i + 1}: ${photo.caption}`}
              aria-current={i === index}
              className={`relative aspect-4/3 w-20 shrink-0 overflow-hidden rounded-lg transition-opacity sm:w-28 ${
                i === index ? "opacity-100 ring-2 ring-brass-500 ring-offset-2 ring-offset-mist" : "opacity-55 hover:opacity-100"
              }`}
            >
              <Image src={poster} alt="" fill sizes="112px" className="object-cover" />
            </button>
          );
        })}
      </div>
    </section>
  );
}

function SliderButton({ label, side, onClick }: { label: string; side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-pine-950/60 text-white backdrop-blur-sm transition-colors hover:bg-pine-950/85 ${
        side === "left" ? "left-3 sm:left-4" : "right-3 sm:right-4"
      }`}
    >
      <ChevronIcon className={`size-5 ${side === "left" ? "rotate-90" : "-rotate-90"}`} />
    </button>
  );
}
