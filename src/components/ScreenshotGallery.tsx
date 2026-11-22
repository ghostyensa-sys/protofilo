"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Shot = {
  src: string;
  alt: string;
  caption?: string;
};

function ScreenshotFrame({
  shot,
  labels,
}: {
  shot: Shot;
  labels: Dictionary["caseStudy"];
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="reveal overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--paper-2)] ring-1 ring-[var(--ink)]/10">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,var(--hero-glow),var(--hero-shade))] px-6 text-center">
            <p className="text-sm font-medium text-[var(--ink)]">
              {labels.screenshotPlaceholder}
            </p>
            <p className="max-w-sm text-xs text-[var(--muted)]">
              {labels.dropImageAt}{" "}
              <code className="text-[var(--accent-deep)]" dir="ltr">
                {shot.src}
              </code>
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
    </figure>
  );
}

export function ScreenshotGallery({
  screenshots,
  labels,
}: {
  screenshots: Shot[];
  labels: Dictionary["caseStudy"];
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {screenshots.map((shot) => (
        <ScreenshotFrame key={shot.src} shot={shot} labels={labels} />
      ))}
    </div>
  );
}
