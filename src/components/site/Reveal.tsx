import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Entrance motion, tiered.
 *
 *   appear  — the default. 8px rise, 320ms, once. Use for content blocks.
 *   moment  — reserved. Max three per page (stats, journey, featured quote).
 *
 * Anything above the fold, any dense list and all chrome stays unanimated:
 * just don't wrap it. Reduced-motion collapses every tier to "no motion"
 * via the stylesheet.
 */
type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds. Cap staggers at ~4 steps — see `stagger()`. */
  delay?: number;
  tier?: "appear" | "moment";
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  tier = "appear",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: tier === "moment" ? 0.3 : 0.1,
        rootMargin: "0px 0px -5% 0px",
      },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [tier]);

  return createElement(
    Tag,
    {
      ref,
      className: cn(
        tier === "moment" ? "reveal-moment" : "reveal",
        visible && "is-revealed",
        className,
      ),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}

/**
 * Stagger delay for list items, capped at four steps so the tail of a long
 * grid doesn't arrive seconds after the head.
 */
export function stagger(index: number, step = 40) {
  return Math.min(index, 4) * step;
}

/**
 * Counts up to a figure the first time it scrolls into view. Parses the
 * number out of strings like "35+", "50L+" or "100%" and re-attaches the
 * surrounding characters, so the rendered text always matches the source
 * exactly once the animation settles.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Parsed inside the effect on purpose: `value.match()` returns a fresh
       array each render, so holding it in a dependency re-ran this effect on
       every animation frame — cancelling the frame it had just scheduled and
       resetting the display to zero. The counters never left 0. */
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;

    const prefers =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefers || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
    setDisplay(`${prefix}0${suffix}`);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (t < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
