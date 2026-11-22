import type { Dictionary } from "@/i18n/dictionaries";
import { storyStageKeys } from "@/content/projects";

export function StoryProcess({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="border-y border-[var(--ink)]/10 bg-[var(--paper-2)] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.process.eyebrow}
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {dictionary.process.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.process.lead}
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {storyStageKeys.map((key, index) => (
            <li
              key={key}
              className="reveal relative"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="font-display text-4xl text-[var(--accent)]/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-medium text-[var(--ink)]">
                {dictionary.stages[key]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
