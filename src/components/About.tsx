import type { Dictionary } from "@/i18n/dictionaries";

export function About({ dictionary }: { dictionary: Dictionary }) {
  const points = [
    dictionary.about.point1,
    dictionary.about.point2,
    dictionary.about.point3,
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="frame grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
        <div>
          <p className="eyebrow mb-4 text-xs text-[var(--muted)]">
            {dictionary.about.eyebrow}
          </p>
          <h2 className="font-display display-tight text-4xl text-[var(--ink)] sm:text-5xl">
            {dictionary.about.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {dictionary.about.lead}
          </p>
        </div>
        <ol className="border-t border-[var(--ink)]/12 lg:border-s lg:border-t-0 lg:ps-10">
          {points.map((point, index) => (
            <li
              key={point}
              className="grid grid-cols-[2rem_1fr] gap-3 border-b border-[var(--ink)]/12 py-5"
            >
              <span className="pt-1 text-xs text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-relaxed text-[var(--ink)]">{point}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
