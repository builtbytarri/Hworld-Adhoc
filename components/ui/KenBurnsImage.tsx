import Image from "next/image";

/*
 * KenBurnsImage
 * ──────────────────────────────────────────────────────────────────────────────
 * Slow cinematic pan/zoom on a fill image. GPU-only (transform) so it stays
 * smooth on mobile. The animation is defined in globals.css and disabled wholesale
 * under prefers-reduced-motion (emil-design-eng: reduced motion is not optional).
 *
 * Server component — no JS needed; CSS drives the motion.
 */

type KbVariant = "zoom-in" | "zoom-out" | "pan-left" | "pan-right" | "drift" | "settle";

const variantClass: Record<KbVariant, string> = {
  "zoom-in": "kb-zoom-in",
  "zoom-out": "kb-zoom-out",
  "pan-left": "kb-pan-left",
  "pan-right": "kb-pan-right",
  drift: "kb-drift",
  settle: "kb-settle",
};

interface KenBurnsImageProps {
  src: string;
  alt: string;
  variant?: KbVariant;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  /** focal point, e.g. "50% 35%" */
  position?: string;
  quality?: number;
}

export default function KenBurnsImage({
  src,
  alt,
  variant = "zoom-in",
  priority = false,
  sizes = "100vw",
  className = "",
  imgClassName = "",
  position = "50% 50%",
  quality = 82,
}: KenBurnsImageProps) {
  // NOTE: the root must be a positioned box for the fill image to resolve.
  // The caller supplies the position (`absolute inset-0` for backgrounds,
  // `relative` for inline framed use) — we do NOT hardcode `relative` here,
  // because Tailwind's `relative` would override a caller's `absolute`.
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${variantClass[variant]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={quality}
          className={`object-cover ${imgClassName}`}
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
}
