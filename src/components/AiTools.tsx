"use client";

import { AiLogo } from "@/components/icons/ai/AiLogos";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { aiTools } from "@/content/ai-tools";
import type { Dictionary } from "@/i18n/dictionaries";

export function AiTools({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="ai-tools" className="scroll-mt-24 py-16 sm:py-20">
      <div className="frame">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.aiTools.eyebrow}
          </p>
          <h2 className="font-display display-tight text-3xl text-[var(--ink)] sm:text-4xl">
            {dictionary.aiTools.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--ink-soft)]">
            {dictionary.aiTools.lead}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-px bg-[var(--ink)]/10 sm:grid-cols-3 lg:grid-cols-5">
          {aiTools.map((tool) => (
            <StaggerItem
              key={tool.id}
              className="flex flex-col items-center gap-3 bg-[var(--paper)] px-4 py-7 text-center"
            >
              <article className="flex flex-col items-center gap-3">
                <span className="text-[var(--ink)]">
                  <AiLogo id={tool.id} />
                </span>
                <span className="text-sm font-medium tracking-wide text-[var(--ink)]">
                  {tool.name}
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
