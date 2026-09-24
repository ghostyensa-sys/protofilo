"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import type { ProjectScreenshot } from "@/content/projects";

function ScreenshotFrame({
  shot,
  index,
}: {
  shot: ProjectScreenshot;
  index: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--paper-2)] ring-1 ring-[var(--ink)]/10">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,rgba(45,140,148,0.12),rgba(11,18,32,0.06))] px-6 text-center">
            <p className="text-sm font-medium text-[var(--ink)]">
              Screenshot placeholder
            </p>
            <p className="max-w-sm text-xs text-[var(--muted)]">
              Drop your image at{" "}
              <code className="text-[var(--accent-deep)]">{shot.src}</code>
            </p>
          </div>
        ) : (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 720px"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {shot.caption ? (
        <figcaption className="mt-3 text-sm text-[var(--muted)]">
          {shot.caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: ProjectScreenshot[];
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {screenshots.map((shot, index) => (
        <ScreenshotFrame key={shot.src} shot={shot} index={index} />
      ))}
    </div>
  );
}
