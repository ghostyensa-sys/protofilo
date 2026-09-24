import type { Dictionary } from "@/i18n/dictionaries";

type Metrics = {
  linesOfCode: string;
  functions: string;
  issuesSolved: string;
};

export function MetricsStrip({
  metrics,
  labels,
}: {
  metrics: Metrics;
  labels: Dictionary["caseStudy"];
}) {
  const items = [
    { label: labels.linesOfCode, value: metrics.linesOfCode },
    { label: labels.functions, value: metrics.functions },
    { label: labels.issuesSolved, value: metrics.issuesSolved },
  ];

  return (
    <dl className="grid gap-6 border-y border-[var(--ink)]/12 py-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
            {item.label}
          </dt>
          <dd className="mt-2 font-display text-2xl text-[var(--ink)] sm:text-3xl">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
