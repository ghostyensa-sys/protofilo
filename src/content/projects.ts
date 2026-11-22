import type { Locale } from "@/i18n/config";

export type ProjectLevel = "pro" | "personal";
export type LocalizedString = Record<Locale, string>;

export type ProjectMetrics = {
  platform: LocalizedString;
  linesOfCode: string;
  functions: string;
  modules: string;
  issuesSolved?: LocalizedString;
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
  featured?: boolean;
  hook: LocalizedString;
  summary: LocalizedString;
  outcome: LocalizedString;
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
  outcome: string;
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
    issuesSolved?: string;
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
    featured: true,
    hook: {
      en: "A daily operations dashboard for support — live ops, attendance, and reports.",
      ar: "لوحة عمليات يومية لفريق الدعم: العمليات، الحضور، والتقارير.",
    },
    summary: {
      en: "A command center for support agents and leads: daily operations, attendance, and reports in one place.",
      ar: "مركز قيادة لوكلاء الدعم وقادة الفريق: العمليات اليومية والحضور والتقارير في مكان واحد.",
    },
    outcome: {
      en: "The day is one picture, and leaders step in before work sits.",
      ar: "صورة اليوم من مكان واحد، والتدخل يتم قبل ما يطول الانتظار.",
    },
    screenshots: [
      {
        src: "/projects/support-dashboard/01-overview.png",
        alt: {
          en: "Support Operations Dashboard overview",
          ar: "نظرة عامة على لوحة العمليات لفريق الدعم",
        },
        caption: {
          en: "Operations overview",
          ar: "نظرة على العمليات",
        },
      },
      {
        src: "/projects/support-dashboard/02-detail.png",
        alt: {
          en: "Support operations detail",
          ar: "تفاصيل عمليات الدعم",
        },
        caption: {
          en: "Operations detail",
          ar: "تفاصيل العمليات",
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
          en: "I lead 12 support agents in a SaaS company. Zendesk holds the tickets and Maqsam holds the calls. Each system showed a piece of the day, and neither showed the floor as one live operation.",
          ar: "بصفتي قائد فريق دعم يضم 12 موظفًا في شركة تقدم خدماتها بنظام البرمجيات كخدمة، كانت التذاكر تُدار عبر Zendesk والمكالمات عبر Maqsam. النظامان قويان، لكن صورة اليوم كانت موزعة بينهما، وكنا نعيد جمعها يدويًا حتى نعرف ماذا يحدث فعلًا.",
        },
        points: [
          {
            en: "Queue health, hourly pressure, channel mix, quality, speed, attendance, and workload could not be read together",
            ar: "لم تكن هناك شاشة واحدة تجمع حالة طابور التذاكر، وضغط العمل، وقنوات التواصل، وجودة الخدمة، وسرعة الرد، والحضور، وحجم العمل",
          },
          {
            en: "Old tickets and Jira-linked cases were hard to rank before they became escalations",
            ar: "التذاكر المتأخرة والحالات المرتبطة بـ Jira كانت تظهر متأخرة، بعد أن يبدأ التصعيد",
          },
          {
            en: "Attendance had no minute-by-minute record, and a bad rating had no path from the score to a closed action",
            ar: "لم يتوفر سجل دقيق بالدقيقة للحضور، والتقييم السلبي لم يكن له مسار من الملاحظة حتى إغلاق الإجراء",
          },
          {
            en: "Comparing people and writing the weekly report meant rebuilding the day by hand",
            ar: "مقارنة أداء الموظفين وتجهيز تقرير الأسبوع كانا يتمان بشكل يدوي",
          },
        ],
      },
      idea: {
        lead: {
          en: "Turn the scattered service data into a floor that can be run: where pressure is building, who needs help, and what needs an action now.",
          ar: "الفكرة لم تكن لوحة إضافية مليئة بالأرقام. كنت أحتاج شاشة تشغيل واحدة توضح لي مباشرة أين يرتفع الضغط، ومن يحتاج دعمًا، وما الإجراء المطلوب الآن.",
        },
        points: [
          {
            en: "Show peak hour, channel, and ticket type before the queue gets stuck",
            ar: "معرفة ساعة الذروة، والقناة الأعلى طلبًا، ونوع التذكرة قبل أن يتراكم الطابور",
          },
          {
            en: "Balance a person across productivity, workload, quality, speed, attendance, and availability",
            ar: "تقييم الموظف بصورة متوازنة: الإنتاجية، وحجم العمل، والجودة، وسرعة الرد، والحضور، والتوفر",
          },
          {
            en: "Keep a line from the ticket to the Jira card or the bad rating, then to the follow-up",
            ar: "ربط التذكرة ببطاقة Jira أو التقييم السلبي، ثم بخطوة المتابعة",
          },
          {
            en: "Answer who is improving, who needs cover, and who is affecting the team",
            ar: "توضيح من يتحسن، ومن يحتاج تغطية في العمل، ومن يؤثر أداؤه في الفريق",
          },
        ],
      },
      plan: {
        lead: {
          en: "Leave Zendesk and Maqsam as the systems of record. Put one operations layer in front of them, with different depth for agents, leads, and administrators.",
          ar: "أبقينا Zendesk وMaqsam مصدرًا للبيانات، وبنينا فوقهما طبقة تشغيل واحدة. كل من الموظف وقائد الفريق والمسؤول يرى المستوى المناسب لدوره.",
        },
        points: [
          {
            en: "Live and past ranges, team filters, period compare, refresh, TV mode, and CSV export",
            ar: "عرض مباشر وعرض للفترات السابقة، مع التصفية حسب الفريق والتاريخ، ومقارنة الفترات، والتحديث، وTV Mode، وتصدير CSV",
          },
          {
            en: "Agent profiles and recurring performance mail",
            ar: "ملف أداء لكل موظف، وتقارير دورية تصله على بريده",
          },
          {
            en: "A roster, attendance policy, metric weights, integrations, and security controls that a lead can actually set",
            ar: "قائمة الفريق والأدوار، وسياسة الحضور، وأوزان المؤشرات، والتكاملات، وضوابط الأمان، وكلها قابلة للضبط من داخل النظام",
          },
        ],
      },
      build: {
        lead: {
          en: "The day runs from four tabs. Around them sit settings, reports, profiles, TV mode, and export.",
          ar: "أصبح يوم الفريق يُدار من أربعة أقسام واضحة، وتتصل بها الإعدادات والتقارير وملفات الموظفين وTV Mode وخيارات التصدير.",
        },
        groups: [
          {
            title: { en: "Overview", ar: "النظرة العامة" },
            points: [
              {
                en: "Queue health for the floor and for each team, with today's top performers and yesterday's champion",
                ar: "حالة طابور التذاكر للفريق كاملًا ولكل قسم، مع أفضل أداء اليوم وبطل الأمس",
              },
              {
                en: "Received, old, open, pending, and solved, plus CSAT, first response, and resolution time",
                ar: "أرقام واضحة: التذاكر الواردة، والمتأخرة، والمفتوحة، والمعلقة، والمحلولة، مع رضا العملاء وسرعة أول رد وزمن الإغلاق",
              },
              {
                en: "Ticket types, hourly pressure, and channel mix, with date range, period compare, CSV export, and TV mode",
                ar: "توزيع أنواع التذاكر، وضغط الساعة، وتوزيع القنوات، مع مدى التاريخ ومقارنة الفترات وتصدير CSV وTV Mode",
              },
            ],
          },
          {
            title: { en: "Workforce", ar: "إدارة القوى العاملة" },
            points: [
              {
                en: "An attention strip when backlog is abnormal, and a leaderboard for queue, received, old, channels, status, and speed",
                ar: "تنبيه إذا زاد التراكم عن الوضع الطبيعي، وترتيب يوضح الطابور والتذاكر الواردة والمتأخرة والقنوات والحالة وسرعة العمل",
              },
              {
                en: "Status cards and a minute log for Online, Maqsam, Zoom, Break, Away, Transfer, and Offline, measured against the shift target",
                ar: "بطاقات حالة مع سجل بالدقيقة: متصل، وMaqsam، وZoom، واستراحة، وبعيد، وتحويل، وغير متصل، مع مقارنة التوفر بهدف الشفت",
              },
              {
                en: "An old-ticket bench filtered by person, channel, tier, age, Jira, and reason, with a morning pack and export",
                ar: "شاشة للتذاكر المتأخرة، مع تصفية حسب الموظف والقناة والفئة والعمر وJira وسبب التأخير، وملخص بداية اليوم، والتصدير",
              },
            ],
          },
          {
            title: { en: "Active Jira", ar: "Jira النشطة" },
            points: [
              {
                en: "Open cards by agent and team, with priority, tier, age, ticket count, and the linked Zendesk tickets",
                ar: "البطاقات المفتوحة حسب الموظف والفريق، مع الأولوية والفئة وعمر التذكرة وعدد المتأثرين وتذاكر Zendesk المرتبطة",
              },
              {
                en: "Filters for urgent and aged work, search, a morning pack, and export",
                ar: "تصفية للحالات العاجلة والمتأخرة، مع البحث وملخص بداية اليوم والتصدير",
              },
              {
                en: "A resolved history by month, with search, export, and a full history load",
                ar: "سجل للبطاقات التي تم حلها حسب الشهر، مع البحث والتصدير وإمكانية تحميل السجل كاملًا",
              },
            ],
          },
          {
            title: { en: "Bad ratings", ar: "التقييمات السلبية" },
            points: [
              {
                en: "A follow-up line: total, needs action, action done, contacted, and email sent",
                ar: "مسار متابعة الجودة واضح: الإجمالي، ويحتاج إلى إجراء، وتم الإجراء، وتم التواصل، وتم إرسال البريد",
              },
              {
                en: "Filters for agent, team, channel, tier, reason, feature request, action state, date, and comment",
                ar: "تصفية حسب الموظف والفريق والقناة والفئة والسبب وطلب الميزة وحالة الإجراء والتاريخ والتعليق",
              },
              {
                en: "Customer, owner, reason, Jira link, and follow-up status sit on the same row. Coaching stays with the team; product limits go to the team that owns them",
                ar: "بيانات العميل ومسؤول المتابعة والسبب ورابط Jira وحالة الإجراء في السطر نفسه. ملاحظات الخدمة تبقى داخل الفريق، وملاحظات المنتج تُحوَّل إلى الفريق المختص",
              },
            ],
          },
          {
            title: { en: "Settings and controls", ar: "الإعدادات والتحكم" },
            points: [
              {
                en: "Organization name, hours, timezone, and the roster",
                ar: "اسم الجهة، وساعات الدوام، والمنطقة الزمنية، وقائمة الفريق",
              },
              {
                en: "Reports, integrations, TV keys, metric weights, and the attendance policy",
                ar: "التقارير، والتكاملات، ومفاتيح TV Mode، وأوزان المؤشرات، وسياسة الحضور",
              },
            ],
          },
        ],
      },
      impact: {
        lead: {
          en: "The floor is one picture instead of a reconstruction across tools. Leaders step in earlier, and agents can see their own effort and who is available.",
          ar: "صارت صورة اليوم واضحة من مكان واحد، بدل جمعها من أكثر من نظام. وأصبح التدخل أسرع، والموظف يرى جهده ويعرف من هو المتاح للدعم.",
        },
        points: [
          {
            en: "Pressure, aging work, attendance gaps, and bad ratings surface before they sit for days",
            ar: "ضغط العمل، والتذاكر المتأخرة، وفجوات الحضور، والتقييمات السلبية تظهر قبل أن تتأخر لأيام",
          },
          {
            en: "A promotion or a coaching talk rests on more than a ticket count",
            ar: "قرار الترقية أو جلسة التوجيه يعتمد على صورة أداء متوازنة، وليس على عدد التذاكر فقط",
          },
          {
            en: "Jira and quality histories keep the follow-up auditable",
            ar: "متابعة Jira والجودة تبقى موثقة وسهلة المراجعة",
          },
          {
            en: "Export, TV mode, and scheduled mail replace the weekly manual pack",
            ar: "اختصر التصدير وTV Mode والبريد الدوري تجهيز تقرير الأسبوع يدويًا",
          },
        ],
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
    outcome: {
      en: "Employees read the breakdown themselves, and Finance stops reopening five sheets.",
      ar: "الموظف يقرأ التفصيل بنفسه، والمالية تتوقف عن فتح خمسة جداول للسؤال نفسه.",
    },
    screenshots: [
      {
        src: "/projects/jisr-payslips/01-overview.png",
        alt: {
          en: "Payslip System overview",
          ar: "نظرة عامة على قسائم الرواتب",
        },
        caption: {
          en: "Payslip list",
          ar: "قائمة القسائم",
        },
      },
      {
        src: "/projects/jisr-payslips/02-detail.png",
        alt: {
          en: "Payslip detail view",
          ar: "عرض تفاصيل القسيمة",
        },
        caption: {
          en: "Payslip detail",
          ar: "تفاصيل القسيمة",
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
      integration: {
        en: "Gmail — detailed payslips emailed from Google Sheets",
        ar: "Gmail — قسائم مفصّلة تُرسل بالبريد من جداول Google",
      },
    },
    story: {
      issue: {
        lead: {
          en: "Every month, payroll was calculated in Google Sheets and Excel, then deposited into employee bank accounts with no itemized payslip. The only way to understand a salary was to ask Finance.",
          ar: "كان مسير الرواتب يُعدّ كل شهر في جداول Google وExcel، ثم يُودَع في حسابات الموظفين دون قسيمة تفصيلية. والسبيل الوحيد لفهم الراتب كان سؤال المالية شخصيًا.",
        },
        points: [
          {
            en: "Employees could not see why an amount was deducted, what overtime was worth, or why a bonus was paid",
            ar: "الموظف لا يعرف سبب الاستقطاع، ولا ساعات العمل الإضافي وأسعارها، ولا مقابل المكافأة",
          },
          {
            en: "Every question went directly to the Finance employee",
            ar: "كل استفسار يصل مباشرة إلى موظف المالية",
          },
          {
            en: "Finance had to open up to five sheets to answer one person",
            ar: "الإجابة عن سؤال واحد قد تتطلب مراجعة خمسة جداول",
          },
          {
            en: "There was no payslip email, self-service portal, or payroll history",
            ar: "لا بريد بقسيمة، ولا بوابة خدمة ذاتية، ولا سجل يمكن الرجوع إليه",
          },
        ],
      },
      idea: {
        lead: {
          en: "Leave the sheets in place. Finance already works there, and a forced migration would create more friction than it removes. Build a layer on top that reads those five sheets and answers the monthly questions for them.",
          ar: "الإبقاء على الجداول كما هي، لأن فريق المالية يعمل عليها أصلًا، ونقل العمل إلى نظام جديد سيزيد التعقيد بدل أن يخففه. الحل طبقة فوق الجداول الخمسة تقرأ بياناتها وتجيب عن أسئلة الرواتب الشهرية.",
        },
        points: [
          {
            en: "Finance keeps working in the sheets they already know",
            ar: "تستمر المالية في العمل على الجداول المألوفة لديها",
          },
          {
            en: "One action emails each eligible employee the breakdown and a PDF",
            ar: "إجراء واحد يرسل لكل موظف مؤهل تفصيل مسير راتبه في البريد مع نسخة PDF",
          },
          {
            en: "A My Payslips page gives employees their own history",
            ar: "صفحة «قسائمي» تتيح للموظف مراجعة سجل رواتبه بنفسه",
          },
          {
            en: "Email verification limits each person to their own payslips",
            ar: "التحقق عبر البريد يمنع الموظف من رؤية قسائم غيره",
          },
        ],
      },
      plan: {
        lead: {
          en: "Keep Google Sheets as the source of truth, then make sending automated and controlled.",
          ar: "تبقى جداول Google مصدر البيانات، ويصبح الإرسال آليًا وخاضعًا لرقابة المالية.",
        },
        points: [
          {
            en: "Map earnings, deductions, overtime, bonuses, identity, and the payroll month across the sheets",
            ar: "ربط الاستحقاقات والاستقطاعات والعمل الإضافي والمكافآت وبيانات الموظف وشهر المسير عبر الجداول",
          },
          {
            en: "Warn about missing or misaligned sheets before anything is sent",
            ar: "التنبيه إلى الجداول الناقصة أو غير المتطابقة قبل الإرسال",
          },
          {
            en: "Limit the dashboard to Finance administrators, and preview the payslip before delivery",
            ar: "حصر لوحة التحكم والإرسال على مسؤولي المالية، مع معاينة القسيمة قبل إرسالها",
          },
          {
            en: "Record whether each payslip was sent, failed, or opened",
            ar: "تسجيل حالة كل قسيمة: أُرسلت، أو فشلت، أو فُتحت",
          },
        ],
      },
      build: {
        lead: {
          en: "A Finance dashboard sits on the monthly sheets. One confirmed action emails the payslips, with a PDF attached, and employees can return to their own records later.",
          ar: "لوحة للمالية فوق جداول الشهر. بعد التأكيد، تُرسل القسائم بالبريد مع ملف PDF، ويستطيع الموظف الرجوع إلى سجلّه لاحقًا.",
        },
        groups: [
          {
            title: { en: "Finance dashboard", ar: "لوحة المالية" },
            points: [
              {
                en: "Month selector, search, and who is eligible or excluded from payroll",
                ar: "اختيار الشهر، والبحث، ومعرفة من يدخل المسير ومن يُستبعد منه",
              },
              {
                en: "Counts for employees, eligibility, payslips sent, portal views, and remaining email quota",
                ar: "أعداد الموظفين والمؤهلين والقسائم المرسلة ومشاهدات البوابة وحصة البريد المتبقية",
              },
              {
                en: "An expanded preview of earnings, deductions, rates, and net salary",
                ar: "معاينة موسعة للاستحقاقات والاستقطاعات والأسعار وصافي الراتب",
              },
            ],
          },
          {
            title: { en: "Controlled sending", ar: "إرسال مضبوط" },
            points: [
              {
                en: "One click starts the monthly send after payroll is deposited",
                ar: "نقرة واحدة تبدأ إرسال الشهر بعد إيداع الرواتب",
              },
              {
                en: "The confirmation shows recipients and remaining Gmail quota, and sheet warnings stay visible so bad data is not sent quietly",
                ar: "شاشة التأكيد تعرض المستلمين وحصة Gmail المتبقية، وتحذيرات الجداول تبقى ظاهرة حتى لا تُرسل بيانات ناقصة",
              },
              {
                en: "Each email carries the breakdown and an attached PDF",
                ar: "كل رسالة تحمل التفصيل مع ملف PDF مرفق",
              },
            ],
          },
          {
            title: { en: "Administration", ar: "الإدارة" },
            points: [
              {
                en: "Only listed administrators can open the dashboard, send payslips, and edit settings",
                ar: "المسؤولون المدرجون فقط يفتحون اللوحة ويرسلون القسائم ويعدلون الإعدادات",
              },
              {
                en: "Everyone else who signs in sees only their own payslips",
                ar: "أي موظف آخر لا يرى بعد دخوله سوى قسائمه",
              },
              {
                en: "PDF attachments can be turned off when a large send needs to move faster",
                ar: "يمكن إيقاف مرفقات PDF عندما يحتاج إرسال كبير إلى سرعة أعلى",
              },
            ],
          },
          {
            title: { en: "Send history", ar: "سجل الإرسال" },
            points: [
              {
                en: "Filter by month and export the log as CSV",
                ar: "تصفية السجل حسب الشهر وتصديره بصيغة CSV",
              },
              {
                en: "Each row shows the time, employee, email, sent or failed status, and whether it was opened",
                ar: "كل صف يعرض الوقت والموظف والبريد وحالة الإرسال أو الفشل وهل فُتحت القسيمة",
              },
            ],
          },
          {
            title: { en: "My Payslips", ar: "قسائمي" },
            points: [
              {
                en: "The employee signs in with their own email and cannot open anyone else's record",
                ar: "يدخل الموظف ببريده ولا يستطيع فتح سجل غيره",
              },
              {
                en: "Issued months expand into earnings, deductions, rates, and net salary",
                ar: "تُفتح أشهر القسائم الصادرة على الاستحقاقات والاستقطاعات والأسعار وصافي الراتب",
              },
              {
                en: "A PDF of that month can be downloaded from the portal",
                ar: "يمكن تنزيل PDF لذلك الشهر من البوابة",
              },
            ],
          },
        ],
      },
      impact: {
        lead: {
          en: "Employees no longer line up at Finance to decode their salary. The breakdown is in their inbox and in their own portal, while Finance keeps control of the sheets and the send.",
          ar: "لم يعد الموظفون يراجعون المالية لفهم رواتبهم. التفصيل يصل إلى بريدهم ويبقى في بوابتهم، والمالية تحتفظ بالتحكم في الجداول والإرسال.",
        },
        points: [
          {
            en: "Deductions, overtime, and bonuses are visible without a conversation",
            ar: "الاستقطاعات والعمل الإضافي والمكافآت ظاهرة دون الحاجة إلى سؤال",
          },
          {
            en: "Finance stops pulling five sheets for the same monthly questions",
            ar: "تتوقف المالية عن فتح خمسة جداول للإجابة عن الأسئلة المتكررة",
          },
          {
            en: "Management and employees share one clear payroll record",
            ar: "الإدارة والموظفون يرجعون إلى سجل رواتب واحد وواضح",
          },
          {
            en: "Self-service builds trust without taking control away from Finance",
            ar: "الخدمة الذاتية تعزز الثقة من غير أن تُخرج العملية من يد المالية",
          },
        ],
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
    outcome: {
      en: "Every request has an owner, and a delay escalates on its own.",
      ar: "لكل طلب مالك، والتأخير يتصعّد من نفسه.",
    },
    screenshots: [
      {
        src: "/projects/cross-org-requests/01-overview.png",
        alt: {
          en: "Cross-org requests board",
          ar: "لوحة نظام الطلبات بين الأقسام",
        },
        caption: {
          en: "Request board",
          ar: "لوحة الطلبات",
        },
      },
      {
        src: "/projects/cross-org-requests/02-detail.png",
        alt: {
          en: "Cross-org request detail",
          ar: "تفاصيل طلب بين الأقسام",
        },
        caption: {
          en: "Request detail",
          ar: "تفاصيل الطلب",
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
        points: [
          {
            en: "The trail of a request lived in inboxes and side conversations",
            ar: "أثر الطلب يضيع بين البريد والمحادثات الجانبية",
          },
          {
            en: "No one person owned the request or the client demand behind it",
            ar: "لا يوجد مالك واضح للطلب أو لمتطلب العميل الذي وراءه",
          },
          {
            en: "A request could sit, with no rule that pushed it to the next step",
            ar: "الطلب يمكن أن يبقى معلّقًا بلا قاعدة تدفعه إلى الخطوة التالية",
          },
        ],
      },
      idea: {
        lead: {
          en: "An organized request path with a clear owner, and a system that escalates on its own so work does not sit.",
          ar: "مسار طلب منظّم بمالك واضح، ونظام يصعّد بنفسه حتى لا يبقى العمل معلّقًا.",
        },
        points: [
          {
            en: "Every request has a named owner at each step",
            ar: "كل طلب له مالك مسمّى في كل خطوة",
          },
          {
            en: "Escalation runs when a request waits too long, without someone chasing it by hand",
            ar: "التصعيد يعمل عندما يتأخر الطلب، من غير أن يلاحقه أحد يدويًا",
          },
          {
            en: "Slack and email carry the nudge, and the sheet stays the record",
            ar: "Slack والبريد يحملان التنبيه، والجدول يبقى سجل الطلب",
          },
        ],
      },
      plan: {
        lead: {
          en: "Define ownership at each step, model the request states, and set escalation rules that fire when a request waits too long.",
          ar: "تحديد الملكية في كل خطوة، ونمذجة حالات الطلب، ووضع قواعد تصعيد تعمل عندما يتأخر الطلب.",
        },
        points: [
          {
            en: "Name who owns the request when it is created, and who owns it next",
            ar: "تسمية من يملك الطلب عند إنشائه، ومن يملكه في الخطوة التالية",
          },
          {
            en: "Model the states a request moves through, from open to done",
            ar: "تحديد الحالات التي يمر بها الطلب، من الفتح حتى الإغلاق",
          },
          {
            en: "Set the wait that triggers an escalation",
            ar: "تحديد مدة الانتظار التي يُصعَّد الطلب بعدها",
          },
        ],
      },
      build: {
        lead: {
          en: "Built request creation, ownership, and automatic escalation so departments and client demands keep moving.",
          ar: "بُني إنشاء الطلب والملكية والتصعيد التلقائي حتى تستمر الأقسام ومتطلبات العملاء في الحركة.",
        },
        groups: [
          {
            title: { en: "Requests", ar: "الطلبات" },
            points: [
              {
                en: "A department files the request with the owner and the client demand attached, instead of starting another chat",
                ar: "القسم ينشئ الطلب ويحدّد المالك ومتطلب العميل، بدل فتح محادثة جديدة",
              },
              {
                en: "The sheet is the record. Slack and email carry the notification",
                ar: "الجدول هو السجل، وSlack والبريد يحملان الإشعار",
              },
            ],
          },
          {
            title: { en: "Ownership", ar: "الملكية" },
            points: [
              {
                en: "The current owner is explicit at every step",
                ar: "المالك الحالي ظاهر في كل خطوة",
              },
              {
                en: "The request moves to the next owner instead of sitting in a thread",
                ar: "الطلب ينتقل إلى المالك التالي بدل أن يبقى في خيط دردشة",
              },
            ],
          },
          {
            title: { en: "Escalation", ar: "التصعيد" },
            points: [
              {
                en: "When a request waits too long, the system escalates it on its own",
                ar: "إذا طال انتظار الطلب، يصعّده النظام بنفسه",
              },
              {
                en: "The people who need to act are notified through Slack and email",
                ar: "يصل التنبيه إلى من يلزمهم الإجراء عبر Slack والبريد",
              },
            ],
          },
        ],
      },
      impact: {
        lead: {
          en: "Fewer requests stall between departments, because ownership is explicit and delays escalate on their own.",
          ar: "طلبات متوقفة أقل بين الأقسام، لأن الملكية صريحة والنظام يصعّد التأخير بنفسه.",
        },
        points: [
          {
            en: "A request has a named owner instead of a chat thread",
            ar: "للطلب مالك مسمّى بدل خيط دردشة",
          },
          {
            en: "A delay moves forward without someone remembering to chase it",
            ar: "التأخير يتحرك من غير أن يتذكر أحد ملاحقته",
          },
          {
            en: "Departments and client demands stay visible in one record",
            ar: "الأقسام ومتطلبات العملاء تبقى ظاهرة في سجل واحد",
          },
        ],
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
    outcome: project.outcome[locale],
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
      issuesSolved: project.metrics.issuesSolved?.[locale],
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

export function getFeaturedProject(): Project {
  return projects.find((project) => project.featured) ?? projects[0];
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
