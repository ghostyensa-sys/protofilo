import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const shareSize = { width: 1200, height: 630 };
export const shareContentType = "image/png";
export const shareAlt = "Ali Al Aidarous";

export async function renderShareImage(locale: Locale) {
  const dictionary = getDictionary(locale);
  const rtl = locale === "ar";
  const bytes = await readFile(
    path.join(process.cwd(), "src/fonts/IBMPlexSansArabic-SemiBold.ttf"),
  );
  const font = bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: rtl ? "flex-end" : "flex-start",
          direction: rtl ? "rtl" : "ltr",
          background: "#0c1118",
          color: "#e8eef4",
          padding: "72px",
          fontFamily: "Plex",
          textAlign: rtl ? "right" : "left",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#7ec8cd",
            letterSpacing: locale === "ar" ? 0 : 2,
          }}
        >
          {dictionary.hero.eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.15 }}>
            {dictionary.hero.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 36,
              lineHeight: 1.35,
              color: "#a8b3c2",
              maxWidth: 900,
            }}
          >
            {dictionary.hero.headline}
          </div>
        </div>
      </div>
    ),
    {
      ...shareSize,
      fonts: [{ name: "Plex", data: font, weight: 600, style: "normal" }],
    },
  );
}
