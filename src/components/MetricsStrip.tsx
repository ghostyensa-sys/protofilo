import type { Dictionary } from "@/i18n/dictionaries";

type Metrics = {
  platform: string;
  linesOfCode: string;
  functions: string;
  modules: string;
  issuesSolved?: string;
  integration: string;
};

export function MetricsStrip({
  metrics,
  labels,
}: {
  metrics: Metrics;
  labels: Dictionary["caseStudy"];
}) {
  const items = [
    { label: labels.platform, value: metrics.platform },
    { label: labels.linesOfCode, value: metrics.linesOfCode },
    { label: labels.functions, value: metrics.functions },
    { label: labels.modules, value: metrics.modules },
    ...(metrics.issuesSolved
      ? [{ label: labels.issuesSolved, value: metrics.issuesSolved }]
      : []),
  ];

  return (
    <div className="border-y border-[var(--ink)]/12 py-8">
      <dl
        className={`grid gap-6 sm:grid-cols-2 ${
          items.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4"
        }`}
      >
        {items.map((item) => (
          <div key={item.label}>
            <dt className="eyebrow text-xs text-[var(--muted)]">{item.label}</dt>
            <dd
              className={
                item.value.length > 12
                  ? "mt-2 text-base leading-snug text-[var(--ink)]"
                  : "mt-2 font-display text-2xl text-[var(--ink)] sm:text-3xl"
              }
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 border-t border-[var(--ink)]/10 pt-6">
        <p className="eyebrow text-xs text-[var(--muted)]">{labels.integration}</p>
        <p className="mt-2 max-w-3xl text-lg text-[var(--ink)]">
          {metrics.integration}
        </p>
      </div>
    </div>
  );
}
