import type { Locale } from "@/i18n/config";

export type LocalizedString = Record<Locale, string>;

export type Service = {
  id: string;
  title: LocalizedString;
  problem: LocalizedString;
  outcome: LocalizedString;
};

export type EngagementStep = {
  title: LocalizedString;
  detail: LocalizedString;
};

export const services: Service[] = [
  {
    id: "internal-ops",
    title: {
      en: "Internal operations setup",
      ar: "تنظيم العمل الداخلي",
    },
    problem: {
      en: "Requests, updates, and decisions get lost in WhatsApp chats.",
      ar: "الطلبات والتحديثات والقرارات تضيع داخل محادثات واتساب.",
    },
    outcome: {
      en: "A structured Discord workspace with channels, roles, request paths, and working rules the team can actually follow.",
      ar: "مساحة Discord منظمة: قنوات، وأدوار، ومسار واضح للطلبات، وقواعد عمل يستطيع الفريق الالتزام بها.",
    },
  },
  {
    id: "dashboards",
    title: {
      en: "Operational dashboards",
      ar: "لوحات التشغيل",
    },
    problem: {
      en: "Management cannot see the queue, the workload, or what needs a decision today.",
      ar: "الإدارة لا ترى الطابور، ولا حجم العمل، ولا ما يحتاج قرارًا اليوم.",
    },
    outcome: {
      en: "A live view of KPIs, queues, and reports so the day can be run from one screen.",
      ar: "عرض مباشر للمؤشرات والطوابير والتقارير، حتى يُدار اليوم من شاشة واحدة.",
    },
  },
  {
    id: "sheets",
    title: {
      en: "Google Sheets and Excel systems",
      ar: "أنظمة جداول Google وExcel",
    },
    problem: {
      en: "The real workflow already lives in spreadsheets, and replacing them would slow the team down.",
      ar: "سير العمل الحقيقي موجود أصلًا في الجداول، واستبداله سيبطئ الفريق.",
    },
    outcome: {
      en: "Validation, automation, portals, and reporting built on the sheets you already use.",
      ar: "تحقق من البيانات، وأتمتة، وبوابات، وتقارير تُبنى فوق الجداول التي تستخدمونها الآن.",
    },
  },
  {
    id: "workforce",
    title: {
      en: "Attendance and workforce",
      ar: "الحضور والقوى العاملة",
    },
    problem: {
      en: "Shifts, availability, and exceptions are tracked in messages instead of one record.",
      ar: "الشفتات والتوفر والاستثناءات تُتابع في الرسائل بدل سجل واحد.",
    },
    outcome: {
      en: "Attendance, availability, workload, exceptions, and workforce reports in one system.",
      ar: "الحضور، والتوفر، وحجم العمل، والاستثناءات، وتقارير الفريق في نظام واحد.",
    },
  },
  {
    id: "payroll",
    title: {
      en: "Payroll and payslips",
      ar: "الرواتب والقسائم",
    },
    problem: {
      en: "Salaries go out, but employees still ask Finance what was deducted and why.",
      ar: "الراتب يُحوَّل، والموظف ما زال يسأل المالية عن كل استقطاع وسببه.",
    },
    outcome: {
      en: "A controlled payroll flow with itemized payslips, delivery history, and employee self-service.",
      ar: "مسار رواتب مضبوط: قسيمة تفصيلية، وسجل إرسال، وخدمة ذاتية للموظف.",
    },
  },
  {
    id: "hr",
    title: {
      en: "Mini HR systems",
      ar: "أنظمة موارد بشرية مصغرة",
    },
    problem: {
      en: "Employee records, requests, and approvals live in files and side conversations.",
      ar: "ملفات الموظفين والطلبات والموافقات موزعة بين الملفات والمحادثات الجانبية.",
    },
    outcome: {
      en: "Records, requests, documents, and approvals sized for a startup, not a large enterprise suite.",
      ar: "سجلات وطلبات ومستندات وموافقات بمقاس الشركة الناشئة، لا بمنظومة مؤسسات ضخمة.",
    },
  },
];

export const engagementSteps: EngagementStep[] = [
  {
    title: { en: "Map the bottleneck", ar: "نفهم العائق" },
    detail: {
      en: "We start with the workflow that already exists and the step that wastes time.",
      ar: "نبدأ من سير العمل الحالي، ومن الخطوة التي تستهلك الوقت.",
    },
  },
  {
    title: { en: "Build around current tools", ar: "نبني حول أدواتكم" },
    detail: {
      en: "Sheets, Excel, and the current process stay in place unless a change is actually needed.",
      ar: "الجداول وExcel وطريقة العمل تبقى، إلا إذا كان التغيير ضروريًا فعلًا.",
    },
  },
  {
    title: { en: "One-time setup", ar: "تنفيذ لمرة واحدة" },
    detail: {
      en: "Implementation is a one-time fee, scoped after the workflow is clear.",
      ar: "التنفيذ برسوم لمرة واحدة، بعد ما يتضح سير العمل.",
    },
  },
  {
    title: { en: "Monthly operation", ar: "تشغيل شهري" },
    detail: {
      en: "A small subscription covers hosting, maintenance, and keeping the system running.",
      ar: "اشتراك شهري بسيط يغطي الاستضافة والصيانة واستمرار تشغيل النظام.",
    },
  },
  {
    title: { en: "Your data stays yours", ar: "بياناتكم تبقى لكم" },
    detail: {
      en: "You can export your data at any time.",
      ar: "يمكنكم تصدير بياناتكم في أي وقت.",
    },
  },
  {
    title: { en: "A clean exit", ar: "خروج واضح" },
    detail: {
      en: "On cancellation, you receive the data handoff and the managed system is disabled after the service period ends.",
      ar: "عند الإلغاء، تستلمون بياناتكم، ويُوقف النظام المُدار بعد انتهاء فترة الخدمة.",
    },
  },
];

export function localizeText(value: LocalizedString, locale: Locale): string {
  return value[locale];
}
