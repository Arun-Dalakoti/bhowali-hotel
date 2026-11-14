import Image from "next/image";
import type { RoomMedia } from "@/content/site";

/**
 * Shows a room's photo today, and its video later.
 * To add a video: in src/content/site.ts change the room's media to
 *   { type: "video", src: "/videos/deluxe.mp4", poster: "/images/room-deluxe.jpg", alt: "..." }
 */
export function RoomMediaView({ media }: { media: RoomMedia }) {
  if (media.type === "video") {
    return (
      <video
        className="size-full object-cover"
        src={media.src}
        poster={media.poster}
        aria-label={media.alt}
        controls
        playsInline
        preload="none"
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes="(min-width: 768px) 33vw, 100vw"
      className="object-cover transition-transform duration-700 ease-settle group-hover:scale-[1.04]"
    />
  );
}
