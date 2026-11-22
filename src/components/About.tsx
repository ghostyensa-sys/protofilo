import type { Dictionary } from "@/i18n/dictionaries";

export function About({ dictionary }: { dictionary: Dictionary }) {
  const points = [
    dictionary.about.point1,
    dictionary.about.point2,
    dictionary.about.point3,
  ];

  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <p
              aria-hidden
              className="font-display flex h-14 w-14 items-center justify-center border border-[var(--ink)]/15 text-2xl text-[var(--accent-deep)]"
            >
              {dictionary.about.mark}
            </p>
            <p className="eyebrow text-xs text-[var(--muted)]">
              {dictionary.about.eyebrow}
            </p>
          </div>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {dictionary.about.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {dictionary.about.lead}
          </p>
        </div>
        <ul className="space-y-6 border-t border-[var(--ink)]/12 pt-6 lg:border-s lg:border-t-0 lg:ps-10 lg:pt-0">
          {points.map((point, index) => (
            <li key={point}>
              <p className="eyebrow text-xs text-[var(--accent-deep)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 leading-relaxed text-[var(--ink)]">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
