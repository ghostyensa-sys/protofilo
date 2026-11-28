export type AiTool = {
  id: "claude" | "codex" | "cursor" | "grok" | "gemini";
  name: string;
};

export const aiTools: AiTool[] = [
  { id: "claude", name: "Claude" },
  { id: "codex", name: "Codex" },
  { id: "cursor", name: "Cursor" },
  { id: "grok", name: "Grok" },
  { id: "gemini", name: "Gemini" },
];
