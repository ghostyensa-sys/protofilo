"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
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
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-[var(--ink)]/10 bg-[var(--paper-2)] py-16 sm:py-20"
    >
      <div className="frame">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.services.eyebrow}
          </p>
          <h2 className="font-display display-tight text-3xl text-[var(--ink)] sm:text-4xl">
            {dictionary.services.title}
          </h2>
          <p className="mt-3 text-lg text-[var(--ink-soft)]">
            {dictionary.services.lead}
          </p>
        </Reveal>

        <Stagger className="grid gap-px bg-[var(--ink)]/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              index={index}
              dictionary={dictionary}
            />
          ))}
        </Stagger>

        <Reveal className="mt-14 max-w-3xl" delay={0.05}>
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.services.modelEyebrow}
          </p>
          <h3 className="font-display display-tight text-2xl text-[var(--ink)] sm:text-3xl">
            {dictionary.services.modelTitle}
          </h3>
          <p className="mt-3 text-[var(--ink-soft)]">
            {dictionary.services.modelLead}
          </p>
          <ol className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {engagementSteps.map((step, index) => (
              <StepItem
                key={step.title.en}
                step={step}
                locale={locale}
                index={index}
              />
            ))}
          </ol>
          <a href="#contact" className="btn btn-primary mt-8">
            {dictionary.services.cta}
          </a>
        </Reveal>
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
    <StaggerItem className="flex flex-col bg-[var(--paper)] p-5 sm:p-6">
      <article>
        <p className="text-xs text-[var(--muted)]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 text-lg font-medium text-[var(--ink)]">
          {service.title[locale]}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
          {service.outcome[locale]}
        </p>
        {service.relatedSlug ? (
          <Link
            href={`/${locale}/work/${service.relatedSlug}`}
            className="mt-4 inline-block text-sm font-medium text-[var(--accent-deep)] underline-offset-4 hover:underline"
          >
            {dictionary.services.seeSystem}
            {locale === "ar" ? " ←" : " →"}
          </Link>
        ) : null}
      </article>
    </StaggerItem>
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
    <li className="border-t border-[var(--ink)]/12 py-4">
      <p className="text-xs text-[var(--muted)]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-1.5 font-medium text-[var(--ink)]">{step.title[locale]}</p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
        {step.detail[locale]}
      </p>
    </li>
  );
}
