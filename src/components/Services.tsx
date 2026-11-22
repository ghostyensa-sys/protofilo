import Link from "next/link";
import {
  engagementSteps,
  services,
  type EngagementStep,
  type Service,
} from "@/content/services";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Services({
  locale,
  dictionary,
  relatedTitles,
}: {
  locale: Locale;
  dictionary: Dictionary;
  relatedTitles: Record<string, string>;
}) {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-[var(--ink)]/10 bg-[var(--paper-2)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.services.eyebrow}
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {dictionary.services.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.services.lead}
          </p>
        </div>

        <div className="grid gap-px bg-[var(--ink)]/10 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              index={index}
              dictionary={dictionary}
              relatedTitle={
                service.relatedSlug
                  ? relatedTitles[service.relatedSlug]
                  : undefined
              }
            />
          ))}
        </div>

        <div className="reveal mt-16">
          <p className="eyebrow mb-3 text-xs text-[var(--accent-deep)]">
            {dictionary.services.modelEyebrow}
          </p>
          <h3 className="font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            {dictionary.services.modelTitle}
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink-soft)]">
            {dictionary.services.modelLead}
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {engagementSteps.map((step, index) => (
              <StepItem
                key={step.title.en}
                step={step}
                locale={locale}
                index={index}
              />
            ))}
          </ol>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center justify-center bg-[var(--ink)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--paper)] transition hover:bg-[var(--accent-deep)]"
          >
            {dictionary.services.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  locale,
  index,
  dictionary,
  relatedTitle,
}: {
  service: Service;
  locale: Locale;
  index: number;
  dictionary: Dictionary;
  relatedTitle?: string;
}) {
  return (
    <article
      className="reveal bg-[var(--paper)] p-6 sm:p-8"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <p className="font-display text-3xl text-[var(--accent)]/60">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 text-xl font-medium text-[var(--ink)]">
        {service.title[locale]}
      </h3>
      <p className="eyebrow mt-5 text-xs text-[var(--muted)]">
        {dictionary.services.problem}
      </p>
      <p className="mt-2 text-[var(--ink-soft)]">{service.problem[locale]}</p>
      <p className="eyebrow mt-5 text-xs text-[var(--accent-deep)]">
        {dictionary.services.outcome}
      </p>
      <p className="mt-2 text-[var(--ink)]">{service.outcome[locale]}</p>
      {service.relatedSlug ? (
        <Link
          href={`/${locale}/work/${service.relatedSlug}`}
          className="mt-5 inline-flex text-sm font-medium text-[var(--accent-deep)] underline-offset-4 hover:underline"
        >
          {dictionary.services.seeSystem}
          {relatedTitle ? ` — ${relatedTitle}` : ""}
          {locale === "ar" ? " ←" : " →"}
        </Link>
      ) : null}
    </article>
  );
}

function StepItem({
  step,
  locale,
  index,
}: {
  step: EngagementStep;
  locale: Locale;
  index: number;
}) {
  return (
    <li className="reveal" style={{ animationDelay: `${index * 40}ms` }}>
      <p className="eyebrow text-xs text-[var(--muted)]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-2 text-lg font-medium text-[var(--ink)]">
        {step.title[locale]}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
        {step.detail[locale]}
      </p>
    </li>
  );
}
