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
    { label: labels.integration, value: metrics.integration },
  ];

  return (
    <dl className="grid gap-8 border-y border-[var(--ink)]/12 py-8 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="eyebrow text-xs text-[var(--muted)]">{item.label}</dt>
          <dd className="mt-2 text-lg text-[var(--ink)]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CraftNote({
  metrics,
  labels,
}: {
  metrics: Metrics;
  labels: Dictionary["caseStudy"];
}) {
  const note = [
    `${metrics.linesOfCode} ${labels.linesOfCode}`,
    `${metrics.functions} ${labels.functions}`,
    `${metrics.modules} ${labels.modules}`,
    ...(metrics.issuesSolved
      ? [`${metrics.issuesSolved} ${labels.issuesSolved}`]
      : []),
  ].join(" · ");

  return (
    <p className="mt-12 text-xs leading-relaxed text-[var(--muted)] lowercase">
      {note}
    </p>
  );
}
