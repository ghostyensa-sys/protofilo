"use client";

import { AiLogo } from "@/components/icons/ai/AiLogos";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { aiTools } from "@/content/ai-tools";
import type { Dictionary } from "@/i18n/dictionaries";

export function AiTools({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="tools" className="scroll-mt-24 py-16 sm:py-20">
      <div className="frame">
        <Reveal className="mb-8 max-w-2xl">
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

        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {aiTools.map((tool) => (
            <StaggerItem key={tool.id}>
              <article className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--ink)]/10 bg-[var(--paper)] px-4 py-6 text-center shadow-[0_1px_0_rgba(11,18,32,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/50">
                <span className="text-[var(--ink)]">
                  <AiLogo id={tool.id} />
                </span>
                <span className="text-sm font-medium text-[var(--ink)]">
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
