import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    work: string;
    services: string;
    contact: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    headline: string;
    lead: string;
    ctaServices: string;
    ctaWork: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    point1: string;
    point2: string;
    point3: string;
  };
  aiTools: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    modelEyebrow: string;
    modelTitle: string;
    modelLead: string;
    problem: string;
    outcome: string;
    seeSystem: string;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    openStory: string;
    loc: string;
  };
  stages: {
    issue: string;
    idea: string;
    plan: string;
    build: string;
    impact: string;
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
    startSimilar: string;
  };
  theme: {
    light: string;
    dark: string;
    toggle: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
  error: {
    title: string;
    body: string;
    retry: string;
  };
  skip: string;
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
    about: "نبذة",
    work: "الأنظمة",
    services: "الخدمات",
    contact: "تواصل",
    menu: "القائمة",
    close: "إغلاق",
  },
  hero: {
    eyebrow: "شريك مستقل لبناء أنظمة الشركات الناشئة",
    name: "علي العيدروس",
    headline: "وسّع عملك، وأتمت المهام المتكررة.",
    lead: "أساعد الشركات الناشئة على النمو عبر أنظمة عملية تزيل اختناقات التشغيل والعمل المتكرر، حتى يتفرغ الفريق لما يصنع الفرق فعلًا.",
    ctaServices: "استعرض الخدمات",
    ctaWork: "شاهد الأنظمة",
  },
  about: {
    eyebrow: "نبذة",
    title: "شريك للعمل الذي يُشغّل الشركة أصلًا.",
    lead: "أنا علي العيدروس، شريك مستقل للشركات الناشئة. أبني الأنظمة التي يحتاجها الفريق الصغير لتشغيل اليوم: لوحات، وأتمتة الجداول، والحضور، والرواتب، وموارد بشرية خفيفة.",
    point1: "أبدأ من الجدول، أو البريد، أو المحادثة التي يجري فيها العمل أصلًا.",
    point2: "لا يُحدَّد النظام إلا بعد ما يتضح سير العمل.",
    point3: "ما يُبنى هو شيء يشغّله الفريق كل يوم، لا تقرير يصف المشكلة.",
  },
  aiTools: {
    eyebrow: "أدوات الذكاء الاصطناعي",
    title: "أصمّم وأبني بمساعدة أدوات الذكاء الاصطناعي.",
    lead: "Claude وCodex وCursor وGrok وGemini جزء من طريقة عملي اليومية لتسريع التصميم والتنفيذ.",
  },
  services: {
    eyebrow: "الخدمات",
    title: "أنظمة تُبنى حول طريقة عملكم الحالية.",
    lead: "إذا كان العمل يتم عبر واتساب أو جداول Google أو Excel، نبدأ من هناك. الهدف نظام أوضح وأسرع، لا تغيير غير ضروري.",
    cta: "خلّنا نتكلم عن سير عملك",
    modelEyebrow: "طريقة التعاون",
    modelTitle: "تنفيذ مرة واحدة، وتشغيل شهري.",
    modelLead: "النظام يُبنى لشركتك، ويبقى تحت التشغيل والصيانة مقابل اشتراك شهري. لا أسعار منشورة هنا؛ كل عمل يُسعّر بعد فهم سير العمل.",
    problem: "المشكلة",
    outcome: "النتيجة",
    seeSystem: "شاهد النظام",
  },
  work: {
    eyebrow: "الأنظمة",
    title: "لمحة عن أنظمة مختارة.",
    lead: "ثلاثة أنظمة حقيقية صُممت حول التشغيل القائم. افتح أي قصة لترى المشكلة، وما بُني، والنتيجة.",
    openStory: "افتح القصة",
    loc: "سطر",
  },
  stages: {
    issue: "المشكلة",
    idea: "الفكرة",
    plan: "الخطة",
    build: "البناء",
    impact: "الأثر والنتيجة",
  },
  contact: {
    eyebrow: "تواصل",
    title: "قل لي ما الذي يستهلك وقت فريقك.",
    lead: "أرسل الجدول، أو المهمة المتكررة، أو سير العمل المتعثر، ونحوّله إلى نظام عملي.",
    whatsapp: "واتساب",
    email: "البريد",
    linkedin: "لينكدإن",
    copyright: "المصدر يبقى خاصًا.",
  },
  caseStudy: {
    allWork: "كل الأعمال",
    proLevel: "مستوى احترافي",
    personalLevel: "مستوى شخصي",
    screenshots: "لقطات الشاشة",
    privacyNote: "لا مستودع عام — المصدر يبقى خاصًا.",
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
    startSimilar: "خلّنا نتكلم عن نظام كهذا",
  },
  theme: {
    light: "فاتح",
    dark: "داكن",
    toggle: "تبديل المظهر",
  },
  notFound: {
    title: "هذه الصفحة غير موجودة.",
    body: "قد يكون الرابط قديمًا، أو أن الصفحة نُقلت.",
    home: "العودة إلى الرئيسية",
  },
  error: {
    title: "حدث خطأ",
    body: "تعذّر عرض هذه الصفحة. حاول مرة أخرى.",
    retry: "حاول مرة أخرى",
  },
  skip: "تخطي إلى المحتوى",
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
    about: "About",
    work: "Systems",
    services: "Services",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    eyebrow: "Independent systems partner for startups",
    name: "Ali Al Aidarous",
    headline: "Scale the business. Automate the busywork.",
    lead: "I help startups scale by building practical systems that remove operational bottlenecks and repetitive work — so your team can focus on what matters most.",
    ctaServices: "View services",
    ctaWork: "See the systems",
  },
  about: {
    eyebrow: "About",
    title: "A partner for the work that already runs the company.",
    lead: "I'm Ali Al Aidarous, an independent partner for startups. I build the systems a small team needs to run the day: dashboards, spreadsheet automation, attendance, payroll, and lightweight HR.",
    point1:
      "I start from the spreadsheet, the inbox, or the chat where the work already happens.",
    point2: "The system is scoped only after that workflow is clear.",
    point3:
      "What gets built is a system the team runs every day, not a report about the problem.",
  },
  aiTools: {
    eyebrow: "AI tools",
    title: "I design and ship with AI tools in the loop.",
    lead: "Claude, Codex, Cursor, Grok, and Gemini are part of how I move faster from idea to working system.",
  },
  services: {
    eyebrow: "Services",
    title: "Systems built around the workflow you already have.",
    lead: "If the work lives in WhatsApp, Google Sheets, or Excel, we start there. The goal is a clearer system, not an unnecessary migration.",
    cta: "Talk about your workflow",
    modelEyebrow: "How engagement works",
    modelTitle: "One-time build. Monthly operation.",
    modelLead: "The system is built for your company and stays running under a monthly subscription. No public prices — each engagement is scoped after the workflow is understood.",
    problem: "The problem",
    outcome: "The result",
    seeSystem: "See the system",
  },
  work: {
    eyebrow: "Systems",
    title: "A quick look at selected systems.",
    lead: "Three real systems designed around existing operations. Open a story for the problem, the build, and the result.",
    openStory: "Open story",
    loc: "LOC",
  },
  stages: {
    issue: "Issue",
    idea: "Idea",
    plan: "Plan",
    build: "Build",
    impact: "Impact & result",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me what is slowing your team down.",
    lead: "Send the spreadsheet, the repeated task, or the workflow that keeps breaking. We turn it into a practical system.",
    whatsapp: "WhatsApp",
    email: "Email",
    linkedin: "LinkedIn",
    copyright: "Source stays private.",
  },
  caseStudy: {
    allWork: "All work",
    proLevel: "Pro level",
    personalLevel: "Personal level",
    screenshots: "Screenshots",
    privacyNote: "No public repository — the source stays private.",
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
    startSimilar: "Talk about a system like this",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    toggle: "Switch color theme",
  },
  notFound: {
    title: "This page is not here.",
    body: "The link may be old, or the page may have moved.",
    home: "Back home",
  },
  error: {
    title: "Something went wrong",
    body: "This page could not be shown. Try again.",
    retry: "Try again",
  },
  skip: "Skip to content",
  lang: {
    ar: "عربي",
    en: "EN",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
