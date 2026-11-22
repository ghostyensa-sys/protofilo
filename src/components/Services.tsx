import Link from "next/link";
import { engagementSteps, services, type EngagementStep, type Service } from "@/content/services";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Services({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-[var(--ink)]/10 bg-[var(--paper-2)] py-20 sm:py-24"
    >
      <div className="frame">
        <div className="reveal mb-12 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.services.eyebrow}
          </p>
          <h2 className="font-display display-tight text-4xl text-[var(--ink)] sm:text-5xl">
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
            />
          ))}
        </div>

        <div className="reveal mt-16 max-w-3xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.services.modelEyebrow}
          </p>
          <h3 className="font-display display-tight text-3xl text-[var(--ink)] sm:text-4xl">
            {dictionary.services.modelTitle}
          </h3>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.services.modelLead}
          </p>
          <ol className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {engagementSteps.map((step, index) => (
              <StepItem key={step.title.en} step={step} locale={locale} index={index} />
            ))}
          </ol>
          <a href="#contact" className="btn btn-primary mt-10">
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
}: {
  service: Service;
  locale: Locale;
  index: number;
  dictionary: Dictionary;
}) {
  return (
    <article className="reveal flex flex-col bg-[var(--paper)] p-6 sm:p-8">
      <p className="text-xs text-[var(--muted)]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 text-xl font-medium text-[var(--ink)]">
        {service.title[locale]}
      </h3>
      <p className="mt-3 text-[var(--ink-soft)]">{service.outcome[locale]}</p>
      {service.relatedSlug ? (
        <Link
          href={`/${locale}/work/${service.relatedSlug}`}
          className="mt-5 text-sm font-medium text-[var(--accent-deep)] underline-offset-4 hover:underline"
        >
          {dictionary.services.seeSystem}
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
    <li className="border-t border-[var(--ink)]/12 py-5">
      <p className="text-xs text-[var(--muted)]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-2 font-medium text-[var(--ink)]">{step.title[locale]}</p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
        {step.detail[locale]}
      </p>
    </li>
  );
}
