import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import heroHospital from "@/assets/hero-hospital.webp";

/* hero-1 leads; the original hospital photograph stays in the rotation. */
const SLIDES = [hero1, hero2, hero3, hero4, heroHospital];
const INTERVAL = 5000;
const FADE = 900;

/**
 * Hero background slideshow — a crossfade, not a slide: horizontal motion
 * behind a headline makes the text hard to read while it moves.
 *
 * - The first frame is eager and high-priority (it is the LCP element).
 * - Later frames mount one ahead of where you are, so four extra images
 *   stay off the critical path.
 * - Auto-advance stops for good the moment the viewer picks a frame, which
 *   is the "mechanism to pause" WCAG 2.2.2 asks for on content that moves
 *   for longer than five seconds.
 * - Under prefers-reduced-motion it never advances at all.
 *
 * Split into a hook plus two pieces because the frames are an absolutely
 * positioned backdrop while the dots belong in the content column.
 */
export function useHeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(1);
  const [stopped, setStopped] = useState(false);

  // Hold the second frame back until the first has had the network to
  // itself — it is the LCP element, and there are ~5s before it is needed.
  useEffect(() => {
    const t = window.setTimeout(() => setMounted((m) => Math.max(m, 2)), 1500);
    return () => window.clearTimeout(t);
  }, []);

  // Thereafter keep exactly one slide ahead of the viewer in the DOM.
  useEffect(() => {
    if (index === 0) return;
    setMounted((m) => Math.max(m, Math.min(SLIDES.length, index + 2)));
  }, [index]);

  useEffect(() => {
    if (stopped || typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      // Don't advance a slideshow nobody is looking at.
      if (document.visibilityState === "hidden") return;
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [stopped]);

  return {
    index,
    mounted,
    pick: (i: number) => {
      setIndex(i);
      setStopped(true);
    },
  };
}

type Slideshow = ReturnType<typeof useHeroSlideshow>;

/**
 * The frames.
 *
 * On mobile this is a fixed-height banner in normal flow with the copy on a
 * solid panel beneath it; from `md` it becomes the absolute backdrop the
 * copy sits on top of. Below `md` nothing overlays the photograph, which is
 * why the scrim and the crop stop mattering there.
 */
export function HeroBackdrop({ state }: { state: Slideshow }) {
  return (
    <div className="relative h-44 w-full overflow-hidden sm:h-56 md:absolute md:inset-0 md:h-full">
      {SLIDES.map((src, i) =>
        i < state.mounted ? (
          <img
            key={src}
            src={src}
            /* The headline carries the meaning; the rotating frames are
               decorative, so only the first one is described. */
            alt={i === 0 ? "Satya Trauma & Maternity Centre, Kanpur" : ""}
            aria-hidden={i === 0 ? undefined : true}
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none",
              i === state.index ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDuration: `${FADE}ms` }}
          />
        ) : null,
      )}
      {/* On mobile the controls belong on the picture — at the foot of the
          copy they were below the fold, which left the rotation with no
          visible way to stop it. */}
      <HeroDots
        state={state}
        className="absolute bottom-1 right-3 z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,.5)] md:hidden"
      />
    </div>
  );
}

export function HeroDots({ state, className }: { state: Slideshow; className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {SLIDES.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => state.pick(i)}
          aria-label={`Show image ${i + 1} of ${SLIDES.length}`}
          aria-current={i === state.index ? "true" : undefined}
          /* 44px target around a 3px mark. */
          className="group grid h-11 place-items-center px-1"
        >
          <span
            className={cn(
              "block h-[3px] rounded-full transition-all duration-300 ease-[cubic-bezier(.2,.6,.2,1)]",
              i === state.index ? "w-8 bg-lime" : "w-4 bg-white/45 group-hover:bg-white/80",
            )}
          />
        </button>
      ))}
    </div>
  );
}
