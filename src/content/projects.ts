import type { Locale } from "@/i18n/config";

export type ProjectLevel = "pro" | "personal";
export type LocalizedString = Record<Locale, string>;

export type ProjectMetrics = {
  linesOfCode: string;
  functions: LocalizedString;
  issuesSolved: LocalizedString;
};

export type ProjectScreenshot = {
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
};

export type ProjectStory = {
  issue: LocalizedString;
  idea: LocalizedString;
  plan: LocalizedString;
  build: LocalizedString;
  impact: LocalizedString;
};

export type Project = {
  slug: string;
  title: LocalizedString;
  level: ProjectLevel;
  hook: LocalizedString;
  summary: LocalizedString;
  screenshots: ProjectScreenshot[];
  metrics: ProjectMetrics;
  story: ProjectStory;
};

export type LocalizedProject = {
  slug: string;
  title: string;
  level: ProjectLevel;
  hook: string;
  summary: string;
  screenshots: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  metrics: {
    linesOfCode: string;
    functions: string;
    issuesSolved: string;
  };
  story: {
    issue: string;
    idea: string;
    plan: string;
    build: string;
    impact: string;
  };
};

export const projects: Project[] = [
  {
    slug: "support-dashboard",
    title: {
      en: "Support Dashboard",
      ar: "لوحة الدعم",
    },
    level: "pro",
    hook: {
      en: "One ops surface for queues, ownership, and resolution speed.",
      ar: "واجهة واحدة للعمليات: الطوابير والملكية وسرعة الحل.",
    },
    summary: {
      en: "An internal support workspace that turns scattered tickets into a clear, actionable queue.",
      ar: "مساحة دعم داخلية تحوّل التذاكر المتفرقة إلى طابور واضح قابل للتنفيذ.",
    },
    screenshots: [
      {
        src: "/projects/support-dashboard/01-overview.png",
        alt: {
          en: "Support Dashboard overview",
          ar: "نظرة عامة على لوحة الدعم",
        },
        caption: {
          en: "Queue overview — replace with your screenshot",
          ar: "نظرة على الطابور — استبدل بلقطتك",
        },
      },
      {
        src: "/projects/support-dashboard/02-detail.png",
        alt: {
          en: "Support ticket detail",
          ar: "تفاصيل تذكرة الدعم",
        },
        caption: {
          en: "Ticket detail — replace with your screenshot",
          ar: "تفاصيل التذكرة — استبدل بلقطتك",
        },
      },
    ],
    metrics: {
      linesOfCode: "~8k",
      functions: {
        en: "35+ modules",
        ar: "+٣٥ وحدة",
      },
      issuesSolved: {
        en: "12 ops pain points",
        ar: "١٢ نقطة ألم تشغيلية",
      },
    },
    story: {
      issue: {
        en: "Support work lived across inboxes and tools. Ownership was unclear, SLAs slipped, and managers could not see where work was stuck.",
        ar: "عمل الدعم كان موزعًا على صناديق وأدوات متعددة. الملكية غير واضحة، والاتفاقيات الزمنية تتأخر، والمدراء لا يرون أين يتوقف العمل.",
      },
      idea: {
        en: "A single dashboard where queues, assignees, priorities, and status live together — so agents act and leads coach from the same truth.",
        ar: "لوحة واحدة تجمع الطوابير والمسؤولين والأولويات والحالة — ليعمل الوكلاء ويقود المشرفون من نفس الحقيقة.",
      },
      plan: {
        en: "Map the real support lifecycle first: intake, triage, assignment, resolve, reopen. Design for roles (agent vs lead), then ship filters and live queue states before polish.",
        ar: "أولًا رسم دورة الدعم الحقيقية: الاستقبال، الفرز، الإسناد، الحل، إعادة الفتح. تصميم حسب الأدوار ثم شحن الفلاتر وحالات الطابور الحية قبل التلميع.",
      },
      build: {
        en: "Built queue views, ticket detail flows, role-aware actions, and status transitions. Focused on clarity over chrome: what needs me now, and what is blocked.",
        ar: "بُنيت عروض الطابور وتفاصيل التذاكر وإجراءات حسب الدور وانتقالات الحالة. الوضوح قبل الزخرفة: ما الذي ينتظرني الآن، وما هو معطل.",
      },
      impact: {
        en: "Faster triage, clearer ownership, and a shared picture of backlog health. (Swap in your real metrics when ready.)",
        ar: "فرز أسرع وملكية أوضح وصورة مشتركة لصحة المتراكم. (استبدل بمقاييسك الحقيقية عندما تكون جاهزًا.)",
      },
    },
  },
  {
    slug: "jisr-payslips",
    title: {
      en: "Jisr Payslips",
      ar: "قسائم رواتب جسر",
    },
    level: "pro",
    hook: {
      en: "Self-serve payslip clarity without the payroll ticket loop.",
      ar: "وضوح قسائم الرواتب ذاتيًا دون حلقة تذاكر الرواتب.",
    },
    summary: {
      en: "A payslip experience that helps employees find, understand, and download pay documents securely.",
      ar: "تجربة قسائم تساعد الموظفين على إيجاد وفهم وتحميل مستندات الراتب بأمان.",
    },
    screenshots: [
      {
        src: "/projects/jisr-payslips/01-overview.png",
        alt: {
          en: "Jisr Payslips overview",
          ar: "نظرة عامة على قسائم جسر",
        },
        caption: {
          en: "Payslip list — replace with your screenshot",
          ar: "قائمة القسائم — استبدل بلقطتك",
        },
      },
      {
        src: "/projects/jisr-payslips/02-detail.png",
        alt: {
          en: "Payslip detail view",
          ar: "عرض تفاصيل القسيمة",
        },
        caption: {
          en: "Payslip detail — replace with your screenshot",
          ar: "تفاصيل القسيمة — استبدل بلقطتك",
        },
      },
    ],
    metrics: {
      linesOfCode: "~6k",
      functions: {
        en: "25+ flows",
        ar: "+٢٥ مسارًا",
      },
      issuesSolved: {
        en: "9 payroll friction points",
        ar: "٩ نقاط احتكاك في الرواتب",
      },
    },
    story: {
      issue: {
        en: "Employees needed payslips quickly; payroll teams absorbed repetitive requests. Access rules and document clarity made self-serve hard.",
        ar: "الموظفون يحتاجون القسائم بسرعة؛ وفرق الرواتب تغرق في الطلبات المتكررة. قواعد الوصول ووضوح المستندات جعلت الخدمة الذاتية صعبة.",
      },
      idea: {
        en: "Put payslips where people already work — with clear periods, secure access, and downloads that do not need a human in the loop.",
        ar: "وضع القسائم حيث يعمل الناس أصلًا — بفترات واضحة ووصول آمن وتحميل بلا تدخل بشري.",
      },
      plan: {
        en: "Define access boundaries, period selection, and document states. Keep privacy first; then optimize for findability and download reliability.",
        ar: "تحديد حدود الوصول واختيار الفترة وحالات المستند. الخصوصية أولًا؛ ثم تحسين سهولة الإيجاد وموثوقية التحميل.",
      },
      build: {
        en: "Shipped list and detail views, period navigation, and download paths. Emphasized calm UI for a high-trust document flow.",
        ar: "شُحنت قوائم وتفاصيل وتنقل بين الفترات ومسارات التحميل. واجهة هادئة لمسار مستندات عالي الثقة.",
      },
      impact: {
        en: "Fewer repetitive payroll tickets and faster employee access. (Replace with your measured outcomes.)",
        ar: "تذاكر رواتب متكررة أقل ووصول أسرع للموظفين. (استبدل بنتائجك المقاسة.)",
      },
    },
  },
  {
    slug: "cross-org-requests",
    title: {
      en: "Cross-org Requests",
      ar: "طلبات عبر المنظمات",
    },
    level: "pro",
    hook: {
      en: "Requests that travel between organizations without disappearing.",
      ar: "طلبات تنتقل بين المنظمات دون أن تختفي.",
    },
    summary: {
      en: "A shared request lifecycle for handoffs across orgs — ownership, approvals, and audit in one path.",
      ar: "دورة حياة مشتركة للطلبات بين المنظمات — ملكية وموافقات وتدقيق في مسار واحد.",
    },
    screenshots: [
      {
        src: "/projects/cross-org-requests/01-overview.png",
        alt: {
          en: "Cross-org requests board",
          ar: "لوحة طلبات عبر المنظمات",
        },
        caption: {
          en: "Request board — replace with your screenshot",
          ar: "لوحة الطلبات — استبدل بلقطتك",
        },
      },
      {
        src: "/projects/cross-org-requests/02-detail.png",
        alt: {
          en: "Cross-org request detail",
          ar: "تفاصيل طلب عبر المنظمات",
        },
        caption: {
          en: "Request detail — replace with your screenshot",
          ar: "تفاصيل الطلب — استبدل بلقطتك",
        },
      },
    ],
    metrics: {
      linesOfCode: "~10k",
      functions: {
        en: "45+ handlers",
        ar: "+٤٥ معالجًا",
      },
      issuesSolved: {
        en: "15 handoff gaps",
        ar: "١٥ فجوة في التسليم",
      },
    },
    story: {
      issue: {
        en: "Cross-organization requests stalled in email and chat. Nobody owned the next step, and history was hard to reconstruct.",
        ar: "الطلبات بين المنظمات تتوقف في البريد والدردشة. لا أحد يملك الخطوة التالية، والتاريخ يصعب إعادة بنائه.",
      },
      idea: {
        en: "A shared request object with explicit states, owners, and an audit trail that both sides can trust.",
        ar: "كائن طلب مشترك بحالات صريحة ومالكين ومسار تدقيق يثق به الطرفان.",
      },
      plan: {
        en: "Model states (submitted → review → approved → done), define who can act at each step, and surface blockers before they age into silence.",
        ar: "نمذجة الحالات (مُقدَّم ← مراجعة ← موافقة ← مكتمل)، وتحديد من يتصرف في كل خطوة، وإظهار المعوقات قبل أن تتحول إلى صمت.",
      },
      build: {
        en: "Built request creation, state machine UI, assignment, and history. Prioritized visibility: where is it, who moves it next.",
        ar: "بُني إنشاء الطلب وواجهة آلة الحالة والإسناد والتاريخ. الأولوية للرؤية: أين هو، ومن يحرّكه تاليًا.",
      },
      impact: {
        en: "Shorter cycle times and fewer lost requests across org boundaries. (Add your before/after numbers here.)",
        ar: "دورات أقصر وطلبات ضائعة أقل عبر حدود المنظمات. (أضف أرقامك قبل/بعد هنا.)",
      },
    },
  },
  {
    slug: "nyx-w",
    title: {
      en: "NYX-W",
      ar: "NYX-W",
    },
    level: "personal",
    hook: {
      en: "A personal build — craft, experiments, and product instincts outside the day job.",
      ar: "بناء شخصي — حرفة وتجارب وحدس منتج خارج العمل اليومي.",
    },
    summary: {
      en: "Independent work exploring product feel, interaction, and systems thinking on my own terms.",
      ar: "عمل مستقل يستكشف إحساس المنتج والتفاعل وتفكير الأنظمة بشروطي الخاصة.",
    },
    screenshots: [
      {
        src: "/projects/nyx-w/01-overview.png",
        alt: {
          en: "NYX-W overview",
          ar: "نظرة عامة على NYX-W",
        },
        caption: {
          en: "Overview — replace with your screenshot",
          ar: "نظرة عامة — استبدل بلقطتك",
        },
      },
      {
        src: "/projects/nyx-w/02-detail.png",
        alt: {
          en: "NYX-W detail",
          ar: "تفاصيل NYX-W",
        },
        caption: {
          en: "Detail — replace with your screenshot",
          ar: "التفاصيل — استبدل بلقطتك",
        },
      },
    ],
    metrics: {
      linesOfCode: "~4k",
      functions: {
        en: "20+ experiments",
        ar: "+٢٠ تجربة",
      },
      issuesSolved: {
        en: "Personal product bets",
        ar: "رهانات منتج شخصية",
      },
    },
    story: {
      issue: {
        en: "I wanted a space to push craft and ideas that do not fit a sprint board — without waiting for permission.",
        ar: "أردت مساحة لدفع الحرفة والأفكار التي لا تناسب لوحة السبرنت — دون انتظار إذن.",
      },
      idea: {
        en: "NYX-W as a personal product lab: ship something opinionated, learn from the edges, keep the bar high.",
        ar: "NYX-W كمختبر منتج شخصي: أشحن شيئًا له رأي، وأتعلم من الحواف، وأبقي المعيار مرتفعًا.",
      },
      plan: {
        en: "Scope a vertical slice, design the feeling first, then build the smallest system that still feels intentional.",
        ar: "تحديد شريحة عمودية، تصميم الإحساس أولًا، ثم بناء أصغر نظام ما زال يبدو مقصودًا.",
      },
      build: {
        en: "Iterated UI, flows, and interaction details. Treated polish as part of the learning, not a leftover.",
        ar: "تكرار على الواجهة والمسارات وتفاصيل التفاعل. التلميع جزء من التعلم لا بقية مؤجلة.",
      },
      impact: {
        en: "A sharper product sense and a portfolio piece that shows how I think when the constraints are mine. (Expand with what you shipped.)",
        ar: "حس منتج أحدّ وقطعة معرض تُظهر كيف أفكر عندما تكون القيود ملكي. (وسّع بما شحنته.)",
      },
    },
  },
];

export function localizeProject(
  project: Project,
  locale: Locale,
): LocalizedProject {
  return {
    slug: project.slug,
    title: project.title[locale],
    level: project.level,
    hook: project.hook[locale],
    summary: project.summary[locale],
    screenshots: project.screenshots.map((shot) => ({
      src: shot.src,
      alt: shot.alt[locale],
      caption: shot.caption?.[locale],
    })),
    metrics: {
      linesOfCode: project.metrics.linesOfCode,
      functions: project.metrics.functions[locale],
      issuesSolved: project.metrics.issuesSolved[locale],
    },
    story: {
      issue: project.story.issue[locale],
      idea: project.story.idea[locale],
      plan: project.story.plan[locale],
      build: project.story.build[locale],
      impact: project.story.impact[locale],
    },
  };
}

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

export function getLocalizedProjects(locale: Locale): LocalizedProject[] {
  return projects.map((project) => localizeProject(project, locale));
}

export const storyStageKeys = [
  "issue",
  "idea",
  "plan",
  "build",
  "impact",
] as const;
