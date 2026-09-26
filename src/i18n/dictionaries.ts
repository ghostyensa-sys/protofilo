import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    services: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    headline: string;
    lead: string;
    ctaServices: string;
    ctaWork: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    modelEyebrow: string;
    modelTitle: string;
    modelLead: string;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    openStory: string;
    loc: string;
  };
  process: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  stages: {
    issue: string;
    idea: string;
    plan: string;
    build: string;
    impact: string;
  };
  featured: {
    eyebrow: string;
    readFull: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    whatsapp: string;
    email: string;
    linkedin: string;
    copyright: string;
  };
  caseStudy: {
    allWork: string;
    proLevel: string;
    personalLevel: string;
    screenshots: string;
    privacyNote: string;
    theStory: string;
    previous: string;
    next: string;
    platform: string;
    linesOfCode: string;
    functions: string;
    modules: string;
    issuesSolved: string;
    integration: string;
    screenshotPlaceholder: string;
    dropImageAt: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  lang: {
    ar: string;
    en: string;
  };
};

const ar: Dictionary = {
  meta: {
    title: "علي العيدروس",
    description:
      "علي العيدروس يبني أنظمة عملية للشركات الناشئة: لوحات تشغيل، أتمتة الجداول، الحضور، الرواتب، والموارد البشرية، حول طريقة العمل الحالية.",
  },
  nav: {
    work: "الأنظمة",
    services: "الخدمات",
    contact: "تواصل",
  },
  hero: {
    eyebrow: "شريك مستقل لبناء أنظمة الشركات الناشئة",
    name: "علي العيدروس",
    headline: "وسّع عملك، وأتمت المهام المتكررة.",
    lead: "أساعد الشركات الناشئة على النمو عبر أنظمة عملية تزيل اختناقات التشغيل والعمل المتكرر، حتى يتفرغ الفريق لما يصنع الفرق فعلًا.",
    ctaServices: "استعرض الخدمات",
    ctaWork: "شاهد الأنظمة",
  },
  services: {
    eyebrow: "الخدمات",
    title: "أنظمة تُبنى حول طريقة عملكم الحالية.",
    lead: "إذا كان العمل يتم عبر واتساب أو جداول Google أو Excel، نبدأ من هناك. الهدف نظام أوضح وأسرع، لا تغيير غير ضروري.",
    cta: "خلّنا نتكلم عن سير عملك",
    modelEyebrow: "طريقة التعاون",
    modelTitle: "تنفيذ مرة واحدة، وتشغيل شهري.",
    modelLead: "النظام يُبنى لشركتك، ويبقى تحت التشغيل والصيانة مقابل اشتراك شهري. لا أسعار منشورة هنا؛ كل عمل يُسعّر بعد فهم سير العمل.",
  },
  work: {
    eyebrow: "الأنظمة",
    title: "أنظمة احترافية.",
    lead: "أنظمة حقيقية صُممت حول التشغيل القائم. كل قصة توضح المشكلة، وما بُني، والنتيجة.",
    openStory: "افتح القصة",
    loc: "سطر",
  },
  process: {
    eyebrow: "طريقة العمل",
    title: "من المشكلة إلى الأثر.",
    lead: "كل نظام يمر بالمسار نفسه: نفهم العائق، نحدد الحل، نبنيه حول أدواتكم، ثم نقيس ما تغيّر.",
  },
  stages: {
    issue: "المشكلة",
    idea: "الفكرة",
    plan: "الخطة",
    build: "البناء",
    impact: "الأثر والنتيجة",
  },
  featured: {
    eyebrow: "قصة مميزة",
    readFull: "اقرأ دراسة الحالة كاملة",
  },
  contact: {
    eyebrow: "تواصل",
    title: "قل لي ما الذي يستهلك وقت فريقك.",
    lead: "أرسل الجدول، أو المهمة المتكررة، أو سير العمل المتعثر، ونحوّله إلى نظام عملي.",
    whatsapp: "واتساب",
    email: "البريد",
    linkedin: "لينكدإن",
    copyright:
      "تُعرض الأعمال عبر لقطات ومقاييس — المصدر يبقى خاصًا.",
  },
  caseStudy: {
    allWork: "كل الأعمال",
    proLevel: "مستوى احترافي",
    personalLevel: "مستوى شخصي",
    screenshots: "لقطات الشاشة",
    privacyNote: "لا مستودع عام — الإثبات لقطات ومقاييس الحرفة فقط.",
    theStory: "القصة",
    previous: "السابق",
    next: "التالي",
    platform: "المنصة",
    linesOfCode: "أسطر الشيفرة",
    functions: "الدوال",
    modules: "الوحدات",
    issuesSolved: "مشاكل حُلّت",
    integration: "التكامل",
    screenshotPlaceholder: "مكان اللقطة",
    dropImageAt: "ضع صورتك في",
  },
  theme: {
    light: "فاتح",
    dark: "داكن",
  },
  lang: {
    ar: "عربي",
    en: "EN",
  },
};

const en: Dictionary = {
  meta: {
    title: "Ali Al Aidarous",
    description:
      "Ali Al Aidarous builds practical systems for startups: dashboards, spreadsheet automation, attendance, payroll, and HR workflows around the tools you already use.",
  },
  nav: {
    work: "Systems",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Independent systems partner for startups",
    name: "Ali Al Aidarous",
    headline: "Scale the business. Automate the busywork.",
    lead: "I help startups scale by building practical systems that remove operational bottlenecks and repetitive work — so your team can focus on what matters most.",
    ctaServices: "View services",
    ctaWork: "See the systems",
  },
  services: {
    eyebrow: "Services",
    title: "Systems built around the workflow you already have.",
    lead: "If the work lives in WhatsApp, Google Sheets, or Excel, we start there. The goal is a clearer system, not an unnecessary migration.",
    cta: "Talk about your workflow",
    modelEyebrow: "How engagement works",
    modelTitle: "One-time build. Monthly operation.",
    modelLead: "The system is built for your company and stays running under a monthly subscription. No public prices — each engagement is scoped after the workflow is understood.",
  },
  work: {
    eyebrow: "Systems",
    title: "Pro systems.",
    lead: "Real systems designed around existing operations. Each story shows the problem, what was built, and the result.",
    openStory: "Open story",
    loc: "LOC",
  },
  process: {
    eyebrow: "How I work",
    title: "Issue to impact.",
    lead: "Every system follows the same path: understand the bottleneck, choose the fit, build around your tools, then measure what changed.",
  },
  stages: {
    issue: "Issue",
    idea: "Idea",
    plan: "Plan",
    build: "Build",
    impact: "Impact & result",
  },
  featured: {
    eyebrow: "Featured story",
    readFull: "Read the full case",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me what is slowing your team down.",
    lead: "Send the spreadsheet, the repeated task, or the workflow that keeps breaking. We turn it into a practical system.",
    whatsapp: "WhatsApp",
    email: "Email",
    linkedin: "LinkedIn",
    copyright:
      "Work shown via screenshots and metrics — source stays private.",
  },
  caseStudy: {
    allWork: "All work",
    proLevel: "Pro level",
    personalLevel: "Personal level",
    screenshots: "Screenshots",
    privacyNote:
      "No public repository — proof is screenshots and craft metrics only.",
    theStory: "The story",
    previous: "Previous",
    next: "Next",
    platform: "Platform",
    linesOfCode: "Lines of code",
    functions: "Functions",
    modules: "Modules",
    issuesSolved: "Issues solved",
    integration: "Integration",
    screenshotPlaceholder: "Screenshot placeholder",
    dropImageAt: "Drop your image at",
  },
  theme: {
    light: "Light",
    dark: "Dark",
  },
  lang: {
    ar: "عربي",
    en: "EN",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
