"use client";

import Image from "next/image";
import { useState } from "react";

type Shot = {
  src: string;
  alt: string;
  caption?: string;
};

function ScreenshotFrame({ shot }: { shot: Shot }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="reveal overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--paper-2)] ring-1 ring-[var(--ink)]/10">
        {failed ? (
          <div className="absolute inset-0 bg-[var(--paper-2)]" />
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

export function ScreenshotGallery({ screenshots }: { screenshots: Shot[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {screenshots.map((shot) => (
        <ScreenshotFrame key={shot.src} shot={shot} />
      ))}
    </div>
  );
}
