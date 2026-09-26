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
          en: "I lead 12 support agents in a SaaS company. Zendesk holds the tickets and Maqsam holds the calls. Each system showed a piece of the day, and neither showed the floor as one live operation.",
          ar: "أقود فريق دعم من 12 موظفًا في شركة برمجيات كخدمة. التذاكر في Zendesk والمكالمات في Maqsam. كل نظام يعرض جزءًا من اليوم، ولا يعرض أي منهما أرضية الدعم كعملية واحدة ولحظية.",
        },
        points: [
          {
            en: "Queue health, hourly pressure, channel mix, quality, speed, attendance, and workload could not be read together",
            ar: "صحة الطابور وضغط الساعة ومزيج القنوات والجودة والسرعة والحضور وحجم العمل لم تكن تُقرأ معًا",
          },
          {
            en: "Old tickets and Jira-linked cases were hard to rank before they became escalations",
            ar: "التذاكر المتقادمة والحالات المرتبطة بـ Jira كان يصعب ترتيبها قبل أن تتحول إلى تصعيد",
          },
          {
            en: "Attendance had no minute-by-minute record against the required availability",
            ar: "الحضور بلا سجل بالدقيقة يُقاس على ساعات التوفر المطلوبة",
          },
          {
            en: "Bad ratings had no consistent follow-up path from the score to a closed action",
            ar: "التقييمات السلبية بلا مسار متابعة ثابت من الدرجة حتى إغلاق الإجراء",
          },
          {
            en: "Comparing people and writing the weekly report meant rebuilding the day by hand",
            ar: "مقارنة الأداء وكتابة تقرير الأسبوع كانا يعنيان إعادة بناء اليوم يدويًا",
          },
        ],
      },
      idea: {
        lead: {
          en: "Turn the scattered service data into a floor that can be run: where pressure is building, who needs help, and what needs an action now.",
          ar: "تحويل بيانات الخدمة المتفرقة إلى أرضية يمكن إدارتها: أين يتراكم الضغط، ومن يحتاج مساعدة، وما الذي يحتاج إجراءً الآن.",
        },
        points: [
          {
            en: "Show peak hour, channel, and ticket type before the queue gets stuck",
            ar: "إظهار ساعة الذروة والقناة ونوع التذكرة قبل أن يعلق الطابور",
          },
          {
            en: "Balance a person across productivity, workload, quality, speed, attendance, and availability",
            ar: "قراءة الموظف عبر الإنتاجية وحجم العمل والجودة والسرعة والحضور والتوفر",
          },
          {
            en: "Keep a line from the ticket to the Jira card or the bad rating, then to the follow-up",
            ar: "الإبقاء على خط من التذكرة إلى بطاقة Jira أو التقييم السلبي ثم إلى المتابعة",
          },
          {
            en: "Answer who is improving, who needs cover, and who is affecting the team",
            ar: "الإجابة عن من يتحسن، ومن يحتاج تغطية، ومن يؤثر في الفريق",
          },
        ],
      },
      plan: {
        lead: {
          en: "Leave Zendesk and Maqsam as the systems of record. Put one operations layer in front of them, with different depth for agents, leads, and administrators.",
          ar: "يبقى Zendesk وMaqsam مصدر البيانات. وأمامهما طبقة تشغيل واحدة، بعمق مختلف للموظف وقائد الفريق والمسؤول.",
        },
        points: [
          {
            en: "Live and past ranges, team filters, period compare, refresh, TV mode, and CSV export",
            ar: "عرض لحظي وتاريخي، وتصفية الفرق، ومقارنة الفترات، والتحديث، ووضع الشاشة، وتصدير CSV",
          },
          {
            en: "Agent profiles and recurring performance mail",
            ar: "ملف لكل موظف وبريد أداء دوري",
          },
          {
            en: "A roster, attendance policy, metric weights, integrations, and security controls that a lead can actually set",
            ar: "كشف موظفين وسياسة حضور وأوزان مؤشرات وتكاملات وضوابط أمن يضبطها القائد فعلًا",
          },
        ],
      },
      build: {
        lead: {
          en: "The day runs from four tabs. Around them sit settings, reports, profiles, TV mode, and export.",
          ar: "اليوم يُدار من أربعة تبويبات. وحولها الإعدادات والتقارير وملفات الموظفين ووضع الشاشة والتصدير.",
        },
        groups: [
          {
            title: { en: "Overview", ar: "النظرة العامة" },
            points: [
              {
                en: "Queue health for the floor and for each team, with today's top performers and yesterday's champion",
                ar: "صحة الطابور للأرضية ولكل فريق، مع الأفضل اليوم وبطل الأمس",
              },
              {
                en: "A live feed of positive ratings beside the day's leaderboard",
                ar: "بث مباشر للتقييمات الإيجابية إلى جانب ترتيب اليوم",
              },
              {
                en: "Received, old, open, pending, and solved, plus CSAT, first response, and resolution time",
                ar: "الوارد والمتقادم والمفتوح والمعلّق والمحلول، مع رضا العملاء وأول رد وزمن الحل",
              },
              {
                en: "Ticket types, an hourly pressure curve, channel mix, and a comparison between teams",
                ar: "أنواع التذاكر ومنحنى الضغط حسب الساعة ومزيج القنوات ومقارنة الفرق",
              },
              {
                en: "Date range, period compare, refresh, promotion view, CSV export, and TV mode",
                ar: "نطاق التاريخ ومقارنة الفترات والتحديث وعرض الترقيات وتصدير CSV ووضع الشاشة",
              },
            ],
          },
          {
            title: { en: "Workforce", ar: "إدارة القوى العاملة" },
            points: [
              {
                en: "An attention strip when a backlog or pending load is abnormal",
                ar: "شريط تنبيه عندما يكون التراكم أو المعلّق خارج المعتاد",
              },
              {
                en: "A leaderboard for queue, received, old, helped-in, channels, status, and speed",
                ar: "ترتيب للطابور والوارد والمتقادم والمساعدة والقنوات والحالة والسرعة",
              },
              {
                en: "Past-shift correction, approved excuses, and a performance export for a date range",
                ar: "تصحيح وردية سابقة وأعذار معتمدة وتصدير أداء لنطاق تاريخ",
              },
              {
                en: "Status cards and a minute log for Online, Maqsam, Zoom, Break, Away, Transfer, and Offline",
                ar: "بطاقات حالة وسجل بالدقيقة: متصل، وMaqsam، وZoom، واستراحة، وبعيد، وتحويل، وغير متصل",
              },
              {
                en: "Availability against the shift target, first online time, and offline time",
                ar: "التوفر مقابل هدف الوردية، ووقت أول اتصال، ووقت عدم الاتصال",
              },
              {
                en: "An old-ticket bench filtered by person, channel, tier, age, Jira, and reason, grouped by agent, with a morning pack and export",
                ar: "طاولة للتذاكر المتقادمة تُصفّى بالشخص والقناة والفئة والعمر وJira والسبب، وتُجمّع حسب الموظف، مع حزمة الصباح والتصدير",
              },
            ],
          },
          {
            title: { en: "Active Jira", ar: "Jira النشطة" },
            points: [
              {
                en: "Open cards by agent and team, with priority, tier, age, ticket count, and the linked Zendesk tickets",
                ar: "البطاقات المفتوحة حسب الموظف والفريق، مع الأولوية والفئة والعمر وعدد التذاكر وتذاكر Zendesk المرتبطة",
              },
              {
                en: "Filters for urgent and aged work, search, a morning pack, and export",
                ar: "تصفية للعاجل والمتقادم، وبحث، وحزمة صباح، وتصدير",
              },
              {
                en: "A resolved history by month, with search, export, and a full history load",
                ar: "سجل للبطاقات المحلولة حسب الشهر، مع بحث وتصدير وتحميل السجل كاملًا",
              },
            ],
          },
          {
            title: { en: "Bad ratings", ar: "التقييمات السلبية" },
            points: [
              {
                en: "A follow-up line: total, needs action, action done, contacted, and email sent",
                ar: "خط متابعة: الإجمالي، ويحتاج إجراءً، وتم الإجراء، وتم التواصل، وأُرسل البريد",
              },
              {
                en: "Filters for agent, team, channel, tier, reason, feature request, action state, date, and comment",
                ar: "تصفية بالموظف والفريق والقناة والفئة والسبب وطلب الميزة وحالة الإجراء والتاريخ والتعليق",
              },
              {
                en: "Customer, owner, reason, Jira link, and follow-up status on the same row",
                ar: "العميل والمالك والسبب ورابط Jira وحالة المتابعة في الصف نفسه",
              },
              {
                en: "Coaching stays with the team; product and system limits go to the team that owns them",
                ar: "التوجيه يبقى مع الفريق، وقيود المنتج والنظام تذهب إلى الفريق المعني",
              },
            ],
          },
          {
            title: { en: "Settings and controls", ar: "الإعدادات والتحكم" },
            points: [
              {
                en: "Organization name, hours, and timezone",
                ar: "اسم الجهة وساعات العمل والمنطقة الزمنية",
              },
              {
                en: "People and roster",
                ar: "الموظفون والكشف",
              },
              {
                en: "Reports and email",
                ar: "التقارير والبريد",
              },
              {
                en: "Integrations and secrets",
                ar: "التكاملات والمفاتيح",
              },
              {
                en: "TV keys, PIN, and lockdown",
                ar: "مفاتيح الشاشة والرمز وقف التشغيل",
              },
              {
                en: "Metric weights and the attendance policy",
                ar: "أوزان المؤشرات وسياسة الحضور",
              },
            ],
          },
        ],
      },
      impact: {
        lead: {
          en: "The floor is one picture instead of a reconstruction across tools. Leaders step in earlier, and agents can see their own effort and who is available.",
          ar: "أصبحت الأرضية صورة واحدة بدل إعادة تركيبها من أدوات متفرقة. يتدخل القادة أبكر، ويرى الموظف جهده ومن هو متاح.",
        },
        points: [
          {
            en: "Pressure, aging work, attendance gaps, and bad ratings surface before they sit for days",
            ar: "يظهر الضغط والعمل المتقادم وفجوات الحضور والتقييمات السلبية قبل أن تبقى أيامًا",
          },
          {
            en: "A promotion or a coaching talk rests on more than a ticket count",
            ar: "الترقية أو جلسة التوجيه تقوم على أكثر من عدد التذاكر",
          },
          {
            en: "Jira and quality histories keep the follow-up auditable",
            ar: "سجلات Jira والجودة تُبقي المتابعة قابلة للمراجعة",
          },
          {
            en: "Export, TV mode, and scheduled mail replace the weekly manual pack",
            ar: "التصدير ووضع الشاشة والبريد الدوري تغني عن حزمة الأسبوع اليدوية",
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
          en: "Every month, payroll was calculated in Google Sheets and Excel, then deposited into employee bank accounts with no itemized payslip. The only way to understand a salary was to ask Finance.",
          ar: "كان مسير الرواتب يُعدّ كل شهر في جداول Google وExcel، ثم يُودَع في حسابات الموظفين دون قسيمة تفصيلية. والسبيل الوحيد لفهم الراتب كان سؤال المالية شخصيًا.",
        },
        points: [
          {
            en: "Employees could not see why an amount was deducted",
            ar: "الموظف لا يعرف سبب أي استقطاع يظهر في راتبه",
          },
          {
            en: "Confirmed overtime hours and rates were unclear",
            ar: "ساعات العمل الإضافي المعتمدة وأسعارها غير واضحة",
          },
          {
            en: "Bonus amounts had no visible explanation",
            ar: "مبالغ المكافآت تظهر بلا توضيح لما تُصرف مقابله",
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
            en: "One action sends each eligible employee a full payroll breakdown",
            ar: "إجراء واحد يرسل لكل موظف مؤهل تفصيل مسير راتبه",
          },
          {
            en: "The email carries the payslip and a PDF attachment",
            ar: "يصل البريد بالقسيمة التفصيلية مع نسخة PDF مرفقة",
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
            en: "Limit the dashboard and sending controls to Finance administrators",
            ar: "حصر لوحة التحكم والإرسال على مسؤولي المالية",
          },
          {
            en: "Preview the payslip before delivery",
            ar: "معاينة القسيمة قبل إرسالها",
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
                en: "A confirmation shows who will receive it and how much Gmail quota remains",
                ar: "شاشة تأكيد تعرض عدد المستلمين وحصة Gmail المتبقية",
              },
              {
                en: "Sheet warnings stay visible so bad data is not sent quietly",
                ar: "تحذيرات الجداول تبقى ظاهرة حتى لا تُرسل بيانات ناقصة بصمت",
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
