"use client";

import { motion } from "motion/react";
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
      className="scroll-mt-24 border-y border-[var(--ink)]/10 bg-[var(--paper-2)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            {dictionary.services.eyebrow}
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {dictionary.services.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.services.lead}
          </p>
        </motion.div>

        <div className="grid gap-px bg-[var(--ink)]/10 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-3 text-xs tracking-[0.18em] text-[var(--accent-deep)] uppercase">
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
}: {
  service: Service;
  locale: Locale;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="bg-[var(--paper)] p-6 sm:p-8"
    >
      <p className="font-display text-3xl text-[var(--accent)]/60">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 text-xl font-medium text-[var(--ink)]">
        {service.title[locale]}
      </h3>
      <p className="mt-3 text-[var(--ink-soft)]">{service.problem[locale]}</p>
      <p className="mt-3 text-[var(--ink)]">{service.outcome[locale]}</p>
    </motion.article>
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
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <p className="text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-2 text-lg font-medium text-[var(--ink)]">
        {step.title[locale]}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
        {step.detail[locale]}
      </p>
    </motion.li>
  );
}
