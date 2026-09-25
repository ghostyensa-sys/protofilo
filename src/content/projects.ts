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
      en: "Support Operations Dashboard",
      ar: "لوحة العمليات لفريق الدعم",
    },
    level: "pro",
    hook: {
      en: "A daily operations dashboard for support — live ops, attendance, and reports.",
      ar: "لوحة عمليات يومية لفريق الدعم: العمليات، الحضور، والتقارير.",
    },
    summary: {
      en: "A command center for support agents and leads: daily operations, attendance, and reports in one place.",
      ar: "مركز قيادة لوكلاء الدعم وقادة الفريق: العمليات اليومية والحضور والتقارير في مكان واحد.",
    },
    screenshots: [
      {
        src: "/projects/support-dashboard/01-overview.png",
        alt: {
          en: "Support Operations Dashboard overview",
          ar: "نظرة عامة على لوحة العمليات لفريق الدعم",
        },
        caption: {
          en: "Ops overview — replace with your screenshot",
          ar: "نظرة على العمليات — استبدل بلقطتك",
        },
      },
      {
        src: "/projects/support-dashboard/02-detail.png",
        alt: {
          en: "Support operations detail",
          ar: "تفاصيل عمليات الدعم",
        },
        caption: {
          en: "Ops detail — replace with your screenshot",
          ar: "تفاصيل العمليات — استبدل بلقطتك",
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
        en: "Daily support operations, attendance, and reporting lived across scattered tools. Agents and leads could not see the day — who is on shift, what is moving, and what leadership needs to know.",
        ar: "العمليات اليومية والحضور والتقارير كانت موزعة على أدوات متفرقة. الوكلاء والقادة لا يرون اليوم: من في الوردية، وما الذي يتحرك، وما الذي تحتاجه الإدارة.",
      },
      idea: {
        en: "One operations dashboard for agents and team leads — live daily ops, attendance, and reports from the same surface.",
        ar: "لوحة عمليات واحدة للوكلاء وقادة الفريق — عمليات يومية حية وحضور وتقارير من نفس الواجهة.",
      },
      plan: {
        en: "Map agent vs lead workflows first: a live operations view, attendance, then reports. Ship the daily run before polish.",
        ar: "أولًا رسم مسار الوكيل مقابل القائد: عرض عمليات حي، ثم الحضور، ثم التقارير. تشغيل اليوم قبل التلميع.",
      },
      build: {
        en: "Built the daily operations dashboard, attendance tracking, and reporting so the support team runs the day from one place.",
        ar: "بُنيت لوحة العمليات اليومية وتتبع الحضور والتقارير ليدير فريق الدعم يومه من مكان واحد.",
      },
      impact: {
        en: "Clearer daily operations, visible attendance, and reports leadership can actually use. (Swap in your real metrics when ready.)",
        ar: "عمليات يومية أوضح وحضور مرئي وتقارير يمكن للإدارة استخدامها فعلًا. (استبدل بمقاييسك الحقيقية عندما تكون جاهزًا.)",
      },
    },
  },
  {
    slug: "jisr-payslips",
    title: {
      en: "Payslip System",
      ar: "قسائم الرواتب",
    },
    level: "pro",
    hook: {
      en: "Turn Google Sheets into a smart dashboard that emails detailed payslips to employees.",
      ar: "حوّل جداول Google إلى لوحة ذكية ترسل قسائم رواتب مفصّلة للموظفين بالبريد.",
    },
    summary: {
      en: "A payslip system that reads payroll data from Google Sheets and sends each employee a detailed payslip by email.",
      ar: "نظام قسائم يقرأ بيانات الرواتب من جداول Google ويرسل لكل موظف قسيمة مفصّلة عبر البريد.",
    },
    screenshots: [
      {
        src: "/projects/jisr-payslips/01-overview.png",
        alt: {
          en: "Payslip System overview",
          ar: "نظرة عامة على قسائم الرواتب",
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
        en: "Payroll lived in Google Sheets, and employees still waited on someone to build and send each payslip by hand.",
        ar: "الرواتب كانت في جداول Google، والموظفون ما زالوا ينتظرون من يبني ويرسل كل قسيمة يدويًا.",
      },
      idea: {
        en: "Turn those sheets into a smart dashboard that emails a detailed payslip to each employee.",
        ar: "تحويل تلك الجداول إلى لوحة ذكية ترسل قسيمة مفصّلة لكل موظف بالبريد.",
      },
      plan: {
        en: "Map the sheet columns to payslip fields, design the dashboard, then automate the email send so payroll does not stay manual.",
        ar: "ربط أعمدة الجدول بحقول القسيمة، تصميم اللوحة، ثم أتمتة الإرسال حتى لا يبقى العمل يدويًا.",
      },
      build: {
        en: "Built the dashboard on top of Google Sheets and the email flow that delivers a detailed payslip to each employee.",
        ar: "بُنيت اللوحة فوق جداول Google ومسار البريد الذي يوصل قسيمة مفصّلة لكل موظف.",
      },
      impact: {
        en: "Payslips go out from the sheet without the manual loop. (Replace with your measured outcomes.)",
        ar: "القسائم تخرج من الجدول دون الحلقة اليدوية. (استبدل بنتائجك المقاسة.)",
      },
    },
  },
  {
    slug: "cross-org-requests",
    title: {
      en: "Cross-org Requests",
      ar: "نظام الطلبات بين الأقسام",
    },
    level: "pro",
    hook: {
      en: "An organized system for requests between departments — clear ownership, and automatic escalation so nothing stalls.",
      ar: "نظام منظّم للطلبات بين الأقسام: ملكية واضحة وتصعيد تلقائي حتى لا يتأخر العمل.",
    },
    summary: {
      en: "Departments send requests with clear ownership over requests and client demands. The system escalates on its own so work does not sit and wait.",
      ar: "الأقسام ترسل الطلبات بملكية واضحة على الطلبات ومتطلبات العملاء. النظام يصعّد بنفسه حتى لا يبقى العمل معلّقًا.",
    },
    screenshots: [
      {
        src: "/projects/cross-org-requests/01-overview.png",
        alt: {
          en: "Cross-org requests board",
          ar: "لوحة نظام الطلبات بين الأقسام",
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
          ar: "تفاصيل طلب بين الأقسام",
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
        en: "Requests between departments stalled in email and chat. Ownership over requests and client demands was unclear, and delays piled up because nobody escalated them.",
        ar: "الطلبات بين الأقسام تتوقف في البريد والدردشة. الملكية على الطلبات ومتطلبات العملاء غير واضحة، والتأخير يتراكم لأن لا أحد يصعّدها.",
      },
      idea: {
        en: "An organized request path with a clear owner, and a system that escalates on its own so work does not sit.",
        ar: "مسار طلب منظّم بمالك واضح، ونظام يصعّد بنفسه حتى لا يبقى العمل معلّقًا.",
      },
      plan: {
        en: "Define ownership at each step, model the request states, and set escalation rules that fire when a request waits too long.",
        ar: "تحديد الملكية في كل خطوة، ونمذجة حالات الطلب، ووضع قواعد تصعيد تعمل عندما يتأخر الطلب.",
      },
      build: {
        en: "Built request creation, ownership, and automatic escalation so departments and client demands keep moving.",
        ar: "بُني إنشاء الطلب والملكية والتصعيد التلقائي حتى تستمر الأقسام ومتطلبات العملاء في الحركة.",
      },
      impact: {
        en: "Fewer stalled requests between departments, because ownership is explicit and the system escalates delays. (Add your before/after numbers here.)",
        ar: "طلبات متوقفة أقل بين الأقسام، لأن الملكية صريحة والنظام يصعّد التأخير. (أضف أرقامك قبل/بعد هنا.)",
      },
    },
  },
  {
    slug: "nyx-w",
    title: {
      en: "NYX — The Watching Eye",
      ar: "NYX العين التي ترى كل شيء",
    },
    level: "personal",
    hook: {
      en: "NYX — The Watching Eye. A personal build that sees the work others miss.",
      ar: "NYX العين التي ترى كل شيء — بناء شخصي يرى ما يفوت الآخرين.",
    },
    summary: {
      en: "NYX, The Watching Eye: independent work exploring product feel, interaction, and systems thinking on my own terms.",
      ar: "NYX، العين التي ترى كل شيء: عمل مستقل يستكشف إحساس المنتج والتفاعل وتفكير الأنظمة بشروطي الخاصة.",
    },
    screenshots: [
      {
        src: "/projects/nyx-w/01-overview.png",
        alt: {
          en: "NYX overview",
          ar: "نظرة عامة على NYX",
        },
        caption: {
          en: "Overview — replace with your screenshot",
          ar: "نظرة عامة — استبدل بلقطتك",
        },
      },
      {
        src: "/projects/nyx-w/02-detail.png",
        alt: {
          en: "NYX detail",
          ar: "تفاصيل NYX",
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
        en: "NYX, The Watching Eye, as a personal product lab: ship something opinionated, learn from the edges, keep the bar high.",
        ar: "NYX، العين التي ترى كل شيء، كمختبر منتج شخصي: أشحن شيئًا له رأي، وأتعلم من الحواف، وأبقي المعيار مرتفعًا.",
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
