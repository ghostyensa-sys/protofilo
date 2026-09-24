"use client";

import { motion } from "motion/react";
import { storyStageKeys } from "@/content/projects";
import type { Dictionary } from "@/i18n/dictionaries";

type Story = {
  issue: string;
  idea: string;
  plan: string;
  build: string;
  impact: string;
};

export function CaseStages({
  story,
  stageLabels,
}: {
  story: Story;
  stageLabels: Dictionary["stages"];
}) {
  return (
    <div className="space-y-16">
      {storyStageKeys.map((key, index) => (
        <motion.section
          key={key}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 border-t border-[var(--ink)]/12 pt-10 md:grid-cols-[140px_1fr] md:gap-12"
        >
          <div>
            <p className="font-display text-3xl text-[var(--accent)]/60">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-sm tracking-[0.16em] text-[var(--ink)] uppercase">
              {stageLabels[key]}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {story[key]}
          </p>
        </motion.section>
      ))}
    </div>
  );
}
