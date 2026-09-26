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
          ar: "أقود فريق دعم مكوّنًا من 12 موظفًا في إحدى شركات البرمجيات كخدمة (SaaS). نعتمد على Zendesk لإدارة التذاكر، وعلى Maqsam لاستقبال مكالمات العملاء. ورغم كفاءة النظامين، كانت متابعة العمل اليومي تستهلك وقتًا طويلًا؛ فالمعلومات موزعة، ولا توجد شاشة واحدة تمنحنا صورة لحظية وواضحة عن سير العمليات.",
        },
        points: [
          {
            en: "No live, on-time dashboard",
            ar: "غياب لوحة تشغيل لحظية تعرض الوضع الحالي بصورة موحّدة",
          },
          {
            en: "Peak hours, who is online or offline, tickets closed, and what is aging",
            ar: "صعوبة معرفة ساعات الذروة، وحالة توافر أعضاء الفريق، وعدد التذاكر المغلقة والمتقادمة لدى كل موظف",
          },
          {
            en: "CSAT and first resolution",
            ar: "تشتت مؤشرات رضا العملاء (CSAT) ونسبة الحل من أول تواصل",
          },
          {
            en: "Workforce: who completed the required 7.5 hours online and active, and who is short on work",
            ar: "صعوبة متابعة الالتزام التشغيلي: من حقق 7.5 ساعات من النشاط الفعلي، ومن لم يحقق الساعات أو حجم العمل المطلوب",
          },
          {
            en: "Agents cannot see which colleague is available",
            ar: "عدم وجود طريقة سريعة لمعرفة الزملاء المتاحين للمساندة",
          },
          {
            en: "An agent's own work and effort are not documented",
            ar: "غياب سجل واضح يوثّق أداء كل موظف وجهده وتطوره بمرور الوقت",
          },
          {
            en: "Weekly performance is assembled by hand",
            ar: "الاعتماد على إعداد تقارير الأداء الأسبوعية يدويًا",
          },
        ],
      },
      idea: {
        lead: {
          en: "The dashboard documents the work, raises agent performance, and gives leaders the numbers for a decision.",
          ar: "من هنا جاءت فكرة بناء لوحة عمليات موحّدة لا تكتفي بعرض الأرقام، بل توثّق العمل، وتساعد الموظفين على تطوير أدائهم، وتمنح القادة أساسًا واضحًا لاتخاذ القرار.",
        },
        points: [
          {
            en: "When is peak, and what should we do?",
            ar: "متى تبدأ ساعات الذروة، وكيف نستعد لها؟",
          },
          {
            en: "Which channel is loudest, and which ticket types are arriving?",
            ar: "أي قناة تستقبل أكبر حجم من الطلبات؟ وما أنواع التذاكر الأكثر تكرارًا؟",
          },
          {
            en: "Why are calls or emails spiking at this hour?",
            ar: "ما سبب ارتفاع عدد المكالمات أو الرسائل في وقت معيّن؟",
          },
          {
            en: "Who should be promoted, who is best by the numbers, and who is not?",
            ar: "من يستحق الترقية؟ ومن يتصدر الأداء وفق أرقام عادلة وواضحة؟",
          },
          {
            en: "Who is improving, and who is not?",
            ar: "من يتحسن بمرور الوقت، ومن يحتاج إلى دعم أو توجيه؟",
          },
          {
            en: "Why is this agent's performance off, and who is affecting the team?",
            ar: "ما أسباب تراجع أداء موظف بعينه؟ وما أثر ذلك في أداء الفريق؟",
          },
        ],
      },
      plan: {
        lead: {
          en: "Zendesk and Maqsam stay the systems of record. One operations layer sits in front of them.",
          ar: "كان القرار إبقاء Zendesk وMaqsam مصدرين أساسيين للبيانات، وبناء طبقة تشغيلية موحّدة تجمع هذه البيانات وتحولها إلى معلومات قابلة للتنفيذ.",
        },
        points: [
          {
            en: "Four working tabs",
            ar: "أربعة تبويبات رئيسية تغطي سير العمل اليومي",
          },
          {
            en: "Settings for every metric",
            ar: "إعدادات مرنة للتحكم في المؤشرات وقواعد القياس",
          },
          {
            en: "A profile for each agent",
            ar: "ملف أداء مستقل لكل موظف",
          },
          {
            en: "Weekly, monthly, and quarterly performance emails",
            ar: "تقارير أداء آلية تُرسل أسبوعيًا وشهريًا وربع سنويًا",
          },
          {
            en: "TV mode for the floor",
            ar: "وضع شاشة (TV Mode) لعرض الحالة المباشرة داخل مقر الفريق",
          },
          {
            en: "Exports for bad ratings, workforce, and overview",
            ar: "تصدير تقارير النظرة العامة، والقوى العاملة، والتقييمات السلبية",
          },
        ],
      },
      build: {
        lead: {
          en: "Four tabs run the day. Settings, reports, profiles, TV mode, and exports sit around them.",
          ar: "تحولت الفكرة إلى منظومة تشغيلية تدير يوم الفريق عبر أربعة تبويبات رئيسية، وتتكامل معها الإعدادات والتقارير وملفات الأداء ووضع الشاشة وخيارات التصدير.",
        },
        groups: [
          {
            title: { en: "Overview", ar: "النظرة العامة" },
            points: [
              {
                en: "Current queue, metrics, and top performance",
                ar: "عرض لحظي للطابور الحالي، والمؤشرات الأساسية، وأفضل أداء",
              },
              {
                en: "Ticket-type volume and tickets per channel",
                ar: "توزيع التذاكر حسب النوع وقناة التواصل",
              },
              {
                en: "Yesterday's hero",
                ar: "إبراز «بطل الأمس» تقديرًا للأداء المتميز",
              },
            ],
          },
          {
            title: { en: "Workforce", ar: "إدارة القوى العاملة" },
            points: [
              {
                en: "Each agent's queue and metrics",
                ar: "عرض طابور كل موظف ومؤشرات أدائه",
              },
              {
                en: "Who is late, and by how many minutes",
                ar: "متابعة التأخير بالدقائق، والحضور، والحالة الحالية",
              },
              {
                en: "Who is online, and who holds the largest queue",
                ar: "معرفة الموظفين المتصلين وحجم العمل لدى كل منهم",
              },
              {
                en: "The team's old tickets in one place, so help goes where it is needed",
                ar: "جمع التذاكر المتقادمة في مكان واحد لتوجيه تدخل قائد الفريق إلى ما يحتاجه فعلًا",
              },
            ],
          },
          {
            title: { en: "Active Jira", ar: "Jira النشطة" },
            points: [
              {
                en: "Cards the team reported",
                ar: "عرض بلاغات Jira التي رفعها فريق الدعم",
              },
              {
                en: "Priority by client size and how many people the issue affects",
                ar: "ترتيب الأولوية وفق حجم العميل وعدد المستخدمين المتأثرين",
              },
            ],
          },
          {
            title: { en: "Bad ratings", ar: "التقييمات السلبية" },
            points: [
              {
                en: "Who rated poorly, why, the comment, and the tier",
                ar: "تحديد صاحب التقييم السلبي وسببه وتعليقه وفئته",
              },
              {
                en: "The cause: a feature request, bad service, a system limit, or wrong information",
                ar: "تصنيف السبب: طلب ميزة، أو قصور في الخدمة، أو قيد في النظام، أو معلومة غير صحيحة",
              },
              {
                en: "Used to coach the team, and to send product what is not a service failure",
                ar: "تحويل الملاحظات إلى فرص لتحسين أداء الفريق، وإيصال ما يتعلق بالمنتج إلى الفريق المختص",
              },
            ],
          },
          {
            title: { en: "Settings and reports", ar: "الإعدادات والتقارير" },
            points: [
              {
                en: "Every metric is controlled from settings",
                ar: "التحكم في المؤشرات ومعايير القياس من مكان واحد",
              },
              {
                en: "Each agent opens their own ratings, performance, and a profile that shows whether they are improving",
                ar: "تمكين كل موظف من مراجعة تقييماته وأدائه وملفه الذي يوثّق تطوره",
              },
              {
                en: "TV mode, plus exports for bad ratings, workforce, and overview",
                ar: "توفير وضع الشاشة، مع تصدير تقارير النظرة العامة والقوى العاملة والتقييمات السلبية",
              },
            ],
          },
        ],
      },
      impact: {
        lead: {
          en: "Leaders decide from the numbers. Agents see their own effort, and who is available, without a manual write-up.",
          ar: "لم تعد النتيجة مجرد لوحة أرقام، بل أصبحت سجلًا تشغيليًا مشتركًا للفريق. صار القادة يتخذون قراراتهم استنادًا إلى بيانات واضحة، وأصبح كل موظف يرى أثر عمله وتطوره ويعرف من المتاح للمساندة، دون إعداد تقارير يدوية أو البحث بين أدوات متعددة.",
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
