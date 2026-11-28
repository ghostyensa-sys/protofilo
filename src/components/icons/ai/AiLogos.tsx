import { brandMarks } from "@/components/icons/ai/marks";
import type { AiTool } from "@/content/ai-tools";

export function AiLogo({ id }: { id: AiTool["id"] }) {
  const mark = brandMarks[id];
  const fill = id === "gemini" ? "url(#gemini-mark)" : (mark.hex ?? "currentColor");

  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      role="img"
      aria-label={mark.title}
    >
      {id === "gemini" ? (
        <defs>
          <linearGradient id="gemini-mark" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#4B90FF" />
            <stop offset="45%" stopColor="#9B6DFF" />
            <stop offset="100%" stopColor="#F06B4A" />
          </linearGradient>
        </defs>
      ) : null}
      <path d={mark.path} fill={fill} />
    </svg>
  );
}
