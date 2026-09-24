"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/content/projects";
import { storyStages } from "@/content/projects";

export function FeaturedTeaser({ project }: { project: Project }) {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            Featured story
          </p>
          <h2 className="font-display max-w-3xl text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink-soft)]">
            {project.summary}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 border-t border-[var(--ink)]/12 pt-10 lg:grid-cols-5">
          {storyStages.map((stage, index) => (
            <motion.div
              key={stage.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <p className="text-xs tracking-[0.14em] text-[var(--accent-deep)] uppercase">
                {stage.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] line-clamp-5">
                {project.story[stage.key]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-[var(--ink)] underline-offset-4 transition hover:text-[var(--accent-deep)] hover:underline"
          >
            Read the full case →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
