import { storyStageKeys, type LocalizedStorySection } from "@/content/projects";
import type { Dictionary } from "@/i18n/dictionaries";

type Story = Record<(typeof storyStageKeys)[number], LocalizedStorySection>;

export function CaseStages({
  story,
  stageLabels,
}: {
  story: Story;
  stageLabels: Dictionary["stages"];
}) {
  return (
    <div className="space-y-16">
      {storyStageKeys.map((key, index) => {
        const section = story[key];
        return (
          <section
            key={key}
            className="reveal grid gap-4 border-t border-[var(--ink)]/12 pt-10 md:grid-cols-[140px_1fr] md:gap-12"
          >
            <div>
              <p className="font-display text-3xl text-[var(--accent)]/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="eyebrow mt-2 text-sm text-[var(--ink)]">
                {stageLabels[key]}
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-[var(--ink-soft)]">
                {section.lead}
              </p>
              {section.points.length > 0 ? (
                <ul className="mt-4 list-disc space-y-2 ps-5 text-lg leading-relaxed text-[var(--ink-soft)]">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              {section.groups.map((group) => (
                <div key={group.title} className="mt-8">
                  <h3 className="text-base font-medium text-[var(--ink)]">
                    {group.title}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 ps-5 text-lg leading-relaxed text-[var(--ink-soft)]">
                    {group.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
