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
    platform: string;
    linesOfCode: string;
    functions: string;
    modules: string;
    issuesSolved: string;
    integration: string;
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
        en: "I lead 12 support agents in a SaaS company. Tickets sit in Zendesk and client calls sit in Maqsam. Both products are strong, and the day still wastes time. There is no live dashboard. Nothing is readable in one look: peak hours, who is online or offline, how many tickets each agent closed, what is aging on them, CSAT, and first resolution. Workforce is the same gap. An agent must be online and active for 7.5 hours, and a lead cannot see who completed that, who is short on work, or which colleague is available. Agents also have no record of their own effort. Weekly performance has to be assembled by hand.",
        ar: "أقود فريق دعم من 12 وكيلًا في شركة SaaS. التذاكر على Zendesk ومكالمات العملاء على Maqsam. النظامان قويان، ويوم العمليات ما زال يضيع وقتًا كثيرًا. لا توجد لوحة حية. لا يمكن التقاط المعلومة من نظرة واحدة: ساعات الذروة، من متصل ومن غير متصل، كم تذكرة أغلق كل وكيل، وما القديم عنده، ورضا العملاء، والحل من أول مرة. القوة العاملة فيها نفس الفجوة. المطلوب أن يكون الوكيل متصلًا ونشطًا 7.5 ساعة، والقائد لا يرى من أكمل ذلك ومن قصّر في العمل، ولا من من الزملاء متاح. الوكيل أيضًا لا يملك توثيقًا لجهده. أداء الأسبوع يُجمع يدويًا.",
      },
      idea: {
        en: "A support operations dashboard on top of Zendesk and Maqsam that answers the questions the team already asks. Document the work. Show who is carrying the queue. Give leaders numbers they can decide from: when is peak, what should we do, which channel is loudest, which ticket types are arriving, why calls or emails spike at this hour, who should be promoted, who is best by the numbers, who is not, who is improving, who is not, why this agent's performance is off, and who is affecting the team.",
        ar: "لوحة عمليات دعم فوق Zendesk وMaqsam تجيب الأسئلة التي يسألها الفريق أصلًا. توثّق العمل. تُظهر من يحمل الطابور. تعطي القادة أرقامًا يقررون بها: متى الذروة، وماذا نفعل، وأي قناة الأكثر، وأي أنواع التذاكر تصل، ولماذا تكثر المكالمات أو الإيميلات في هذا الوقت، ومن يستحق الترقية، ومن الأفضل بالأرقام ومن ليس كذلك، ومن يتحسن ومن لا يتحسن، ولماذا أداء هذا الوكيل ليس في أفضل حال، ومن يؤثر على الفريق.",
      },
      plan: {
        en: "Leave Zendesk and Maqsam as the systems of record. Put a live layer in front of them: four working tabs, plus settings that control every metric. Overview for the current operation. Workforce for each agent's queue, lateness, and old tickets. Active Jira for cards the team reported, ordered by client size and people affected. Bad ratings for the reason behind a low score, then a path to the product team. Each agent gets a profile. Performance emails go out weekly, monthly, and quarterly. TV mode runs the floor. Exports cover bad ratings, workforce, and overview.",
        ar: "نبقي Zendesk وMaqsam مصدر الحقيقة. أمامهما طبقة حية: أربعة تبويبات عمل، وإعدادات تتحكم في كل مقياس. النظرة العامة للعملية الحالية. القوى العاملة لطابور كل وكيل وتأخره والتذاكر القديمة. Jira النشطة للبطاقات التي بلّغها الفريق، مرتبة حسب حجم العميل وعدد المتأثرين. التقييمات السيئة لسبب التقييم ثم تمرير ما يخص فريق المنتج. لكل وكيل ملفه. رسائل الأداء تخرج أسبوعيًا وشهريًا وربع سنوي. وضع التلفاز لقاعة الفريق. التصدير يغطي التقييمات السيئة والقوى العاملة والنظرة العامة.",
      },
      build: {
        en: "Overview is the live picture of the current operation: the queue, the metrics, top performance, ticket-type volume, tickets per channel, and yesterday's hero.\n\nWorkforce breaks down each agent's queue and metrics: who is late and by how many minutes, who is online and who is not, who holds the largest number of tickets, and one place for the team's old tickets so help goes where it is actually needed.\n\nActive Jira lists the cards the team reported, with priority based on client size and how many people the issue affects.\n\nBad ratings shows who rated poorly, why, the comment, the tier, and the cause: a feature request, bad service, a system limitation, or wrong information. The tab is used to raise team performance and to forward product cases that are not a service failure.\n\nSettings is where every metric is controlled. The system emails each agent a performance report weekly, monthly, and quarterly. Each agent can open their own bad ratings, their performance, and a profile that shows whether they are improving. TV mode is included. Reports export for bad ratings, workforce, and overview.",
        ar: "النظرة العامة هي صورة العملية الحالية: الطابور، والمقاييس، والأداء الأعلى، وكمية كل نوع تذكرة، وعدد التذاكر في كل قناة، وبطل الأمس.\n\nالقوى العاملة تفصّل طابور كل وكيل ومقاييسه: من تأخر وبكم دقيقة، ومن متصل ومن ليس كذلك، ومن معه أكبر عدد من التذاكر، ومكان واحد لتذاكر الفريق القديمة حتى تذهب المساعدة حيث تحتاج فعلًا.\n\nJira النشطة تعرض كل البطاقات التي بلّغها الفريق، وأولويتها حسب حجم العميل وعدد المتأثرين بالمشكلة.\n\nالتقييمات السيئة تعرض من قيّم تقييمًا سيئًا، ولماذا، والتعليق، والفئة، والسبب: طلب ميزة، أم خدمة سيئة، أم حد في النظام، أم معلومة خاطئة. التبويب يرفع أداء الفريق ويمرّر لفريق المنتج ما ليس فشل خدمة.\n\nالإعدادات هي مكان التحكم في كل مقياس. النظام يرسل لكل وكيل تقرير أداء أسبوعيًا وشهريًا وربع سنوي. كل وكيل يرى تقييماته السيئة وأداءه وملفه الذي يُظهر إن كان يتحسن. يوجد وضع تلفاز. وتُصدَّر تقارير التقييمات السيئة والقوى العاملة والنظرة العامة.",
      },
      impact: {
        en: "Leaders and management get the information for an accurate decision: peak time, the loudest channel, the ticket types coming in, who to promote, who is best by the numbers, who is improving, and who is affecting the team. Agents see their own work documented, know who is available in one look, and receive their performance without a manual write-up.",
        ar: "القادة والإدارة يحصلون على المعلومة التي تُبنى عليها قرارات أدق: وقت الذروة، والقناة الأكثر، وأنواع التذاكر القادمة، ومن يُرقّى، ومن الأفضل بالأرقام، ومن يتحسن، ومن يؤثر على الفريق. الوكيل يرى عمله موثّقًا، ويعرف من المتاح بنظرة واحدة، ويصله أداؤه دون تجميع يدوي.",
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
      platform: project.metrics.platform[locale],
      linesOfCode: project.metrics.linesOfCode,
      functions: project.metrics.functions,
      modules: project.metrics.modules,
      issuesSolved: project.metrics.issuesSolved[locale],
      integration: project.metrics.integration[locale],
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
