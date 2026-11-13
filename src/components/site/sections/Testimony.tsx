import { Reveal } from "@/components/site/Reveal";

type Quote = { name: string; role: string; quote: string };

/**
 * Archetype E — testimony.
 *
 * One quote carries the section at reading size; the others support it in a
 * stack. Three identical cards gave every patient story the same weight,
 * which is how a page ends up with no focal point.
 *
 * The decorative ★★★★★ string the cards used to carry is gone: there is no
 * rating data behind it, and a fabricated rating is a credibility risk on a
 * hospital site. A serif quote mark does the same visual job honestly.
 */
export function Testimony({ quotes }: { quotes: readonly Quote[] }) {
  const [featured, ...rest] = quotes;
  if (!featured) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
      <Reveal tier="moment">
        <figure className="flex h-full flex-col">
          <span aria-hidden className="font-display text-[4.5rem] leading-[0.6] text-lime">
            &ldquo;
          </span>
          <blockquote className="mt-4 font-display text-h2 text-ink">{featured.quote}</blockquote>
          <figcaption className="mt-7 flex items-center gap-3">
            <span aria-hidden className="h-[2px] w-8 rounded-full bg-lime" />
            <span>
              <span className="block font-semibold text-ink">{featured.name}</span>
              <span className="block text-meta text-ink-muted">{featured.role}</span>
            </span>
          </figcaption>
        </figure>
      </Reveal>

      <div className="flex flex-col justify-center gap-6">
        {rest.map((t, i) => (
          <Reveal key={t.name} delay={80 + i * 60}>
            <figure className="border-l-2 border-brand-line pl-6">
              <blockquote className="text-body text-ink/85">{t.quote}</blockquote>
              <figcaption className="mt-3">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-ink-faint"> · </span>
                <span className="text-meta text-ink-muted">{t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
