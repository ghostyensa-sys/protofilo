import type { ReactElement } from "react";
import type { AiTool } from "@/content/ai-tools";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 32 32",
  fill: "none",
  "aria-hidden": true as const,
};

function ClaudeIcon() {
  return (
    <svg {...iconProps}>
      <path
        d="M16 3.5 18.8 12.2 27.5 15 18.8 17.8 16 26.5 13.2 17.8 4.5 15 13.2 12.2 16 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15" r="2.2" fill="currentColor" />
    </svg>
  );
}

function CodexIcon() {
  return (
    <svg {...iconProps}>
      <rect
        x="5"
        y="6"
        width="22"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M11 13.5 8.5 16 11 18.5M21 13.5 23.5 16 21 18.5M17.2 12.5 14.8 19.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg {...iconProps}>
      <path
        d="M9 6.5 23.5 15.2 16.2 17.1 14 24.5 9 6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16.4 17.2 20.8 22.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GrokIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M11 12.5c1.6-1.4 3.2-2 5-2 3.2 0 5.5 2 5.5 5.2 0 2.4-1.4 4-3.6 4.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="13.2" cy="19.8" r="1.6" fill="currentColor" />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg {...iconProps}>
      <path
        d="M16 4c0 6.6 5.4 12 12 12-6.6 0-12 5.4-12 12 0-6.6-5.4-12-12-12 6.6 0 12-5.4 12-12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons: Record<AiTool["id"], () => ReactElement> = {
  claude: ClaudeIcon,
  codex: CodexIcon,
  cursor: CursorIcon,
  grok: GrokIcon,
  gemini: GeminiIcon,
};

export function AiLogo({ id }: { id: AiTool["id"] }) {
  const Icon = icons[id];
  return <Icon />;
}
