export type ProjectLevel = "pro" | "personal";

export type ProjectMetrics = {
  linesOfCode: string;
  functions: string;
  issuesSolved: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectStory = {
  issue: string;
  idea: string;
  plan: string;
  build: string;
  impact: string;
};

export type Project = {
  slug: string;
  title: string;
  level: ProjectLevel;
  hook: string;
  summary: string;
  screenshots: ProjectScreenshot[];
  metrics: ProjectMetrics;
  story: ProjectStory;
};

export const projects: Project[] = [
  {
    slug: "support-dashboard",
    title: "Support Dashboard",
    level: "pro",
    hook: "One ops surface for queues, ownership, and resolution speed.",
    summary:
      "An internal support workspace that turns scattered tickets into a clear, actionable queue.",
    screenshots: [
      {
        src: "/projects/support-dashboard/01-overview.png",
        alt: "Support Dashboard overview",
        caption: "Queue overview — replace with your screenshot",
      },
      {
        src: "/projects/support-dashboard/02-detail.png",
        alt: "Support ticket detail",
        caption: "Ticket detail — replace with your screenshot",
      },
    ],
    metrics: {
      linesOfCode: "~8k",
      functions: "35+ modules",
      issuesSolved: "12 ops pain points",
    },
    story: {
      issue:
        "Support work lived across inboxes and tools. Ownership was unclear, SLAs slipped, and managers could not see where work was stuck.",
      idea:
        "A single dashboard where queues, assignees, priorities, and status live together — so agents act and leads coach from the same truth.",
      plan:
        "Map the real support lifecycle first: intake, triage, assignment, resolve, reopen. Design for roles (agent vs lead), then ship filters and live queue states before polish.",
      build:
        "Built queue views, ticket detail flows, role-aware actions, and status transitions. Focused on clarity over chrome: what needs me now, and what is blocked.",
      impact:
        "Faster triage, clearer ownership, and a shared picture of backlog health. (Swap in your real metrics when ready.)",
    },
  },
  {
    slug: "jisr-payslips",
    title: "Jisr Payslips",
    level: "pro",
    hook: "Self-serve payslip clarity without the payroll ticket loop.",
    summary:
      "A payslip experience that helps employees find, understand, and download pay documents securely.",
    screenshots: [
      {
        src: "/projects/jisr-payslips/01-overview.png",
        alt: "Jisr Payslips overview",
        caption: "Payslip list — replace with your screenshot",
      },
      {
        src: "/projects/jisr-payslips/02-detail.png",
        alt: "Payslip detail view",
        caption: "Payslip detail — replace with your screenshot",
      },
    ],
    metrics: {
      linesOfCode: "~6k",
      functions: "25+ flows",
      issuesSolved: "9 payroll friction points",
    },
    story: {
      issue:
        "Employees needed payslips quickly; payroll teams absorbed repetitive requests. Access rules and document clarity made self-serve hard.",
      idea:
        "Put payslips where people already work — with clear periods, secure access, and downloads that do not need a human in the loop.",
      plan:
        "Define access boundaries, period selection, and document states. Keep privacy first; then optimize for findability and download reliability.",
      build:
        "Shipped list and detail views, period navigation, and download paths. Emphasized calm UI for a high-trust document flow.",
      impact:
        "Fewer repetitive payroll tickets and faster employee access. (Replace with your measured outcomes.)",
    },
  },
  {
    slug: "cross-org-requests",
    title: "Cross-org Requests",
    level: "pro",
    hook: "Requests that travel between organizations without disappearing.",
    summary:
      "A shared request lifecycle for handoffs across orgs — ownership, approvals, and audit in one path.",
    screenshots: [
      {
        src: "/projects/cross-org-requests/01-overview.png",
        alt: "Cross-org requests board",
        caption: "Request board — replace with your screenshot",
      },
      {
        src: "/projects/cross-org-requests/02-detail.png",
        alt: "Cross-org request detail",
        caption: "Request detail — replace with your screenshot",
      },
    ],
    metrics: {
      linesOfCode: "~10k",
      functions: "45+ handlers",
      issuesSolved: "15 handoff gaps",
    },
    story: {
      issue:
        "Cross-organization requests stalled in email and chat. Nobody owned the next step, and history was hard to reconstruct.",
      idea:
        "A shared request object with explicit states, owners, and an audit trail that both sides can trust.",
      plan:
        "Model states (submitted → review → approved → done), define who can act at each step, and surface blockers before they age into silence.",
      build:
        "Built request creation, state machine UI, assignment, and history. Prioritized visibility: where is it, who moves it next.",
      impact:
        "Shorter cycle times and fewer lost requests across org boundaries. (Add your before/after numbers here.)",
    },
  },
  {
    slug: "nyx-w",
    title: "NYX-W",
    level: "personal",
    hook: "A personal build — craft, experiments, and product instincts outside the day job.",
    summary:
      "Independent work exploring product feel, interaction, and systems thinking on my own terms.",
    screenshots: [
      {
        src: "/projects/nyx-w/01-overview.png",
        alt: "NYX-W overview",
        caption: "Overview — replace with your screenshot",
      },
      {
        src: "/projects/nyx-w/02-detail.png",
        alt: "NYX-W detail",
        caption: "Detail — replace with your screenshot",
      },
    ],
    metrics: {
      linesOfCode: "~4k",
      functions: "20+ experiments",
      issuesSolved: "Personal product bets",
    },
    story: {
      issue:
        "I wanted a space to push craft and ideas that do not fit a sprint board — without waiting for permission.",
      idea:
        "NYX-W as a personal product lab: ship something opinionated, learn from the edges, keep the bar high.",
      plan:
        "Scope a vertical slice, design the feeling first, then build the smallest system that still feels intentional.",
      build:
        "Iterated UI, flows, and interaction details. Treated polish as part of the learning, not a leftover.",
      impact:
        "A sharper product sense and a portfolio piece that shows how I think when the constraints are mine. (Expand with what you shipped.)",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const proProjects = projects.filter((p) => p.level === "pro");
export const personalProjects = projects.filter((p) => p.level === "personal");

export const storyStages = [
  { key: "issue", label: "Issue" },
  { key: "idea", label: "Idea" },
  { key: "plan", label: "Plan" },
  { key: "build", label: "Build" },
  { key: "impact", label: "Impact & result" },
] as const;
