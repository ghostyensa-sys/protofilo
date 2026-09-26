import type { Locale } from "@/i18n/config";

export type ProjectLevel = "pro" | "personal";
export type LocalizedString = Record<Locale, string>;

export type ProjectMetrics = {
  platform: LocalizedString;
  linesOfCode: string;
  functions: string;
  modules: string;
  issuesSolved: LocalizedString;
  integration: LocalizedString;
};

export type ProjectScreenshot = {
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
};

export type StoryGroup = {
  title: LocalizedString;
  points: LocalizedString[];
};

export type StorySection = {
  lead: LocalizedString;
  points?: LocalizedString[];
  groups?: StoryGroup[];
};

export type ProjectStory = {
  issue: StorySection;
  idea: StorySection;
  plan: StorySection;
  build: StorySection;
  impact: StorySection;
};

export type LocalizedStorySection = {
  lead: string;
  points: string[];
  groups: { title: string; points: string[] }[];
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
    platform: string;
    linesOfCode: string;
    functions: string;
    modules: string;
    issuesSolved: string;
    integration: string;
  };
  story: {
    issue: LocalizedStorySection;
    idea: LocalizedStorySection;
    plan: LocalizedStorySection;
    build: LocalizedStorySection;
    impact: LocalizedStorySection;
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
      platform: {
        en: "Google Apps Script + Sheets",
        ar: "Google Apps Script وجداول Google",
      },
      linesOfCode: "11,703",
      functions: "600",
      modules: "1",
      issuesSolved: {
        en: "43",
        ar: "43",
      },
      integration: {
        en: "Slack, Zendesk, and Maqsam via API",
        ar: "Slack و Zendesk و Maqsam عبر API",
      },
    },
    story: {
      issue: {
        lead: {
          en: "I lead 12 support agents in a SaaS company. Tickets live in Zendesk and client calls live in Maqsam. Both products are strong, and the day still wastes time, because the operation is not live and nothing is readable in one look.",
          ar: "أقود فريق دعم من 12 وكيلًا في شركة SaaS. التذاكر على Zendesk، ومكالمات العملاء على Maqsam. النظامان قويان، ويوم العمل ما زال يضيع وقتًا، لأن العملية ليست حية ولا تُقرأ من نظرة واحدة.",
        },
        points: [
          {
            en: "No live, on-time dashboard",
            ar: "لا توجد لوحة حية لحظية",
          },
          {
            en: "Peak hours, who is online or offline, tickets closed, and what is aging",
            ar: "ساعات الذروة، ومن متصل ومن غير متصل، والتذاكر المغلقة، وما تقادم",
          },
          {
            en: "CSAT and first resolution",
            ar: "رضا العملاء، والحل من أول مرة",
          },
          {
            en: "Workforce: who completed the required 7.5 hours online and active, and who is short on work",
            ar: "القوة العاملة: من أكمل 7.5 ساعة متصلًا ونشطًا، ومن قصّر في العمل",
          },
          {
            en: "Agents cannot see which colleague is available",
            ar: "الوكيل لا يرى أي زميل متاح",
          },
          {
            en: "An agent's own work and effort are not documented",
            ar: "عمل الوكيل وجهده غير موثّقين",
          },
          {
            en: "Weekly performance is assembled by hand",
            ar: "أداء الأسبوع يُجمع يدويًا",
          },
        ],
      },
      idea: {
        lead: {
          en: "The dashboard documents the work, raises agent performance, and gives leaders the numbers for a decision.",
          ar: "اللوحة توثّق العمل، وترفع أداء الوكلاء، وتعطي القادة الأرقام التي يُبنى عليها القرار.",
        },
        points: [
          {
            en: "When is peak, and what should we do?",
            ar: "متى الذروة، وماذا نفعل؟",
          },
          {
            en: "Which channel is loudest, and which ticket types are arriving?",
            ar: "أي قناة الأكثر، وأي أنواع التذاكر تصل؟",
          },
          {
            en: "Why are calls or emails spiking at this hour?",
            ar: "لماذا تكثر المكالمات أو الرسائل في هذا الوقت؟",
          },
          {
            en: "Who should be promoted, who is best by the numbers, and who is not?",
            ar: "من يستحق الترقية، ومن الأفضل بالأرقام، ومن ليس كذلك؟",
          },
          {
            en: "Who is improving, and who is not?",
            ar: "من يتحسن، ومن لا يتحسن؟",
          },
          {
            en: "Why is this agent's performance off, and who is affecting the team?",
            ar: "لماذا أداء هذا الوكيل ليس في أفضل حال، ومن يؤثر على الفريق؟",
          },
        ],
      },
      plan: {
        lead: {
          en: "Zendesk and Maqsam stay the systems of record. One operations layer sits in front of them.",
          ar: "Zendesk وMaqsam يبقيان مصدر الحقيقة. وأمامهما طبقة عمليات واحدة.",
        },
        points: [
          {
            en: "Four working tabs",
            ar: "أربعة تبويبات عمل",
          },
          {
            en: "Settings for every metric",
            ar: "إعدادات تتحكم في كل مقياس",
          },
          {
            en: "A profile for each agent",
            ar: "ملف لكل وكيل",
          },
          {
            en: "Weekly, monthly, and quarterly performance emails",
            ar: "رسائل أداء أسبوعية وشهرية وربع سنوية",
          },
          {
            en: "TV mode for the floor",
            ar: "وضع تلفاز لقاعة الفريق",
          },
          {
            en: "Exports for bad ratings, workforce, and overview",
            ar: "تصدير تقارير التقييمات السيئة والقوى العاملة والنظرة العامة",
          },
        ],
      },
      build: {
        lead: {
          en: "Four tabs run the day. Settings, reports, profiles, TV mode, and exports sit around them.",
          ar: "أربعة تبويبات تدير اليوم. وحولها الإعدادات والتقارير وملفات الوكلاء ووضع التلفاز والتصدير.",
        },
        groups: [
          {
            title: { en: "Overview", ar: "النظرة العامة" },
            points: [
              {
                en: "Current queue, metrics, and top performance",
                ar: "الطابور الحالي، والمقاييس، والأداء الأعلى",
              },
              {
                en: "Ticket-type volume and tickets per channel",
                ar: "كمية كل نوع تذكرة، وعدد التذاكر في كل قناة",
              },
              {
                en: "Yesterday's hero",
                ar: "بطل الأمس",
              },
            ],
          },
          {
            title: { en: "Workforce", ar: "القوى العاملة" },
            points: [
              {
                en: "Each agent's queue and metrics",
                ar: "طابور كل وكيل ومقاييسه",
              },
              {
                en: "Who is late, and by how many minutes",
                ar: "من تأخر، وبكم دقيقة",
              },
              {
                en: "Who is online, and who holds the largest queue",
                ar: "من متصل، ومن معه أكبر طابور",
              },
              {
                en: "The team's old tickets in one place, so help goes where it is needed",
                ar: "تذاكر الفريق القديمة في مكان واحد، حتى تذهب المساعدة حيث تحتاج",
              },
            ],
          },
          {
            title: { en: "Active Jira", ar: "Jira النشطة" },
            points: [
              {
                en: "Cards the team reported",
                ar: "البطاقات التي بلّغها الفريق",
              },
              {
                en: "Priority by client size and how many people the issue affects",
                ar: "الأولوية حسب حجم العميل وعدد المتأثرين",
              },
            ],
          },
          {
            title: { en: "Bad ratings", ar: "التقييمات السيئة" },
            points: [
              {
                en: "Who rated poorly, why, the comment, and the tier",
                ar: "من قيّم تقييمًا سيئًا، ولماذا، والتعليق، والفئة",
              },
              {
                en: "The cause: a feature request, bad service, a system limit, or wrong information",
                ar: "السبب: طلب ميزة، أو خدمة سيئة، أو حد في النظام، أو معلومة خاطئة",
              },
              {
                en: "Used to coach the team, and to send product what is not a service failure",
                ar: "للتدريب على أداء الفريق، ولتمرير ما ليس فشل خدمة إلى فريق المنتج",
              },
            ],
          },
          {
            title: { en: "Settings and reports", ar: "الإعدادات والتقارير" },
            points: [
              {
                en: "Every metric is controlled from settings",
                ar: "كل مقياس يُضبط من الإعدادات",
              },
              {
                en: "Each agent opens their own ratings, performance, and a profile that shows whether they are improving",
                ar: "كل وكيل يفتح تقييماته وأداءه وملفه الذي يُظهر إن كان يتحسن",
              },
              {
                en: "TV mode, plus exports for bad ratings, workforce, and overview",
                ar: "وضع التلفاز، وتصدير التقييمات السيئة والقوى العاملة والنظرة العامة",
              },
            ],
          },
        ],
      },
      impact: {
        lead: {
          en: "Leaders decide from the numbers. Agents see their own effort, and who is available, without a manual write-up.",
          ar: "القادة يقررون من الأرقام. والوكيل يرى جهده ومن المتاح، دون تجميع يدوي.",
        },
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
      platform: {
        en: "Google Apps Script + Sheets",
        ar: "Google Apps Script وجداول Google",
      },
      linesOfCode: "3,061",
      functions: "69",
      modules: "4",
      issuesSolved: {
        en: "Not recorded in source",
        ar: "غير مسجّل في المصدر",
      },
      integration: {
        en: "Gmail — detailed payslips emailed from Google Sheets",
        ar: "Gmail — قسائم مفصّلة تُرسل بالبريد من جداول Google",
      },
    },
    story: {
      issue: {
        lead: {
          en: "Payroll lived in Google Sheets, and employees still waited on someone to build and send each payslip by hand.",
          ar: "الرواتب كانت في جداول Google، والموظفون ما زالوا ينتظرون من يبني ويرسل كل قسيمة يدويًا.",
        },
      },
      idea: {
        lead: {
          en: "Turn those sheets into a smart dashboard that emails a detailed payslip to each employee.",
          ar: "تحويل تلك الجداول إلى لوحة ذكية ترسل قسيمة مفصّلة لكل موظف بالبريد.",
        },
      },
      plan: {
        lead: {
          en: "Map the sheet columns to payslip fields, design the dashboard, then automate the email send so payroll does not stay manual.",
          ar: "ربط أعمدة الجدول بحقول القسيمة، تصميم اللوحة، ثم أتمتة الإرسال حتى لا يبقى العمل يدويًا.",
        },
      },
      build: {
        lead: {
          en: "Built the dashboard on top of Google Sheets and the email flow that delivers a detailed payslip to each employee.",
          ar: "بُنيت اللوحة فوق جداول Google ومسار البريد الذي يوصل قسيمة مفصّلة لكل موظف.",
        },
      },
      impact: {
        lead: {
          en: "Payslips go out from the sheet without the manual loop. (Replace with your measured outcomes.)",
          ar: "القسائم تخرج من الجدول دون الحلقة اليدوية. (استبدل بنتائجك المقاسة.)",
        },
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
      platform: {
        en: "Google Apps Script + Sheets",
        ar: "Google Apps Script وجداول Google",
      },
      linesOfCode: "6,705",
      functions: "160",
      modules: "8",
      issuesSolved: {
        en: "Not recorded in source",
        ar: "غير مسجّل في المصدر",
      },
      integration: {
        en: "Slack and email",
        ar: "Slack والبريد الإلكتروني",
      },
    },
    story: {
      issue: {
        lead: {
          en: "Requests between departments stalled in email and chat. Ownership over requests and client demands was unclear, and delays piled up because nobody escalated them.",
          ar: "الطلبات بين الأقسام تتوقف في البريد والدردشة. الملكية على الطلبات ومتطلبات العملاء غير واضحة، والتأخير يتراكم لأن لا أحد يصعّدها.",
        },
      },
      idea: {
        lead: {
          en: "An organized request path with a clear owner, and a system that escalates on its own so work does not sit.",
          ar: "مسار طلب منظّم بمالك واضح، ونظام يصعّد بنفسه حتى لا يبقى العمل معلّقًا.",
        },
      },
      plan: {
        lead: {
          en: "Define ownership at each step, model the request states, and set escalation rules that fire when a request waits too long.",
          ar: "تحديد الملكية في كل خطوة، ونمذجة حالات الطلب، ووضع قواعد تصعيد تعمل عندما يتأخر الطلب.",
        },
      },
      build: {
        lead: {
          en: "Built request creation, ownership, and automatic escalation so departments and client demands keep moving.",
          ar: "بُني إنشاء الطلب والملكية والتصعيد التلقائي حتى تستمر الأقسام ومتطلبات العملاء في الحركة.",
        },
      },
      impact: {
        lead: {
          en: "Fewer stalled requests between departments, because ownership is explicit and the system escalates delays. (Add your before/after numbers here.)",
          ar: "طلبات متوقفة أقل بين الأقسام، لأن الملكية صريحة والنظام يصعّد التأخير. (أضف أرقامك قبل/بعد هنا.)",
        },
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
      platform: {
        en: "Python API and web app",
        ar: "واجهة Python وتطبيق ويب",
      },
      linesOfCode: "28,316",
      functions: "355",
      modules: "170",
      issuesSolved: {
        en: "Not recorded in source",
        ar: "غير مسجّل في المصدر",
      },
      integration: {
        en: "Telegram, Stripe, Redis, and webhooks",
        ar: "Telegram و Stripe و Redis و Webhooks",
      },
    },
    story: {
      issue: {
        lead: {
          en: "I wanted a space to push craft and ideas that do not fit a sprint board — without waiting for permission.",
          ar: "أردت مساحة لدفع الحرفة والأفكار التي لا تناسب لوحة السبرنت — دون انتظار إذن.",
        },
      },
      idea: {
        lead: {
          en: "NYX, The Watching Eye, as a personal product lab: ship something opinionated, learn from the edges, keep the bar high.",
          ar: "NYX، العين التي ترى كل شيء، كمختبر منتج شخصي: أشحن شيئًا له رأي، وأتعلم من الحواف، وأبقي المعيار مرتفعًا.",
        },
      },
      plan: {
        lead: {
          en: "Scope a vertical slice, design the feeling first, then build the smallest system that still feels intentional.",
          ar: "تحديد شريحة عمودية، تصميم الإحساس أولًا، ثم بناء أصغر نظام ما زال يبدو مقصودًا.",
        },
      },
      build: {
        lead: {
          en: "Iterated UI, flows, and interaction details. Treated polish as part of the learning, not a leftover.",
          ar: "تكرار على الواجهة والمسارات وتفاصيل التفاعل. التلميع جزء من التعلم لا بقية مؤجلة.",
        },
      },
      impact: {
        lead: {
          en: "A sharper product sense and a portfolio piece that shows how I think when the constraints are mine. (Expand with what you shipped.)",
          ar: "حس منتج أحدّ وقطعة معرض تُظهر كيف أفكر عندما تكون القيود ملكي. (وسّع بما شحنته.)",
        },
      },
    },
  },
];

function localizeSection(
  section: StorySection,
  locale: Locale,
): LocalizedStorySection {
  return {
    lead: section.lead[locale],
    points: (section.points ?? []).map((point) => point[locale]),
    groups: (section.groups ?? []).map((group) => ({
      title: group.title[locale],
      points: group.points.map((point) => point[locale]),
    })),
  };
}

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
      platform: project.metrics.platform[locale],
      linesOfCode: project.metrics.linesOfCode,
      functions: project.metrics.functions,
      modules: project.metrics.modules,
      issuesSolved: project.metrics.issuesSolved[locale],
      integration: project.metrics.integration[locale],
    },
    story: {
      issue: localizeSection(project.story.issue, locale),
      idea: localizeSection(project.story.idea, locale),
      plan: localizeSection(project.story.plan, locale),
      build: localizeSection(project.story.build, locale),
      impact: localizeSection(project.story.impact, locale),
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
