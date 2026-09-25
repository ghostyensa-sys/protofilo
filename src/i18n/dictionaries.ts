import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    lead: string;
    ctaWork: string;
    ctaContact: string;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    pro: string;
    personal: string;
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
      "معرض أعمال علي العيدروس — أدوات ومنتجات تُروى من المشكلة إلى الأثر. لقطات ومقاييس فقط؛ الشيفرة خاصة.",
  },
  nav: {
    work: "الأعمال",
    contact: "تواصل",
  },
  hero: {
    eyebrow: "بناء منتجات وأنظمة",
    name: "علي العيدروس",
    lead: "أصمّم وأبني أدوات داخلية ومنتجات شخصية — تُروى كقصص من المشكلة إلى الأثر.",
    ctaWork: "شاهد الأعمال",
    ctaContact: "تواصل",
  },
  work: {
    eyebrow: "أعمال مختارة",
    title: "أنظمة احترافية. حرفية شخصية.",
    lead: "مشاريع خاصة — تُعرض عبر لقطات ومقاييس وقصة ما تغيّر. بلا مستودعات عامة.",
    pro: "احترافي",
    personal: "شخصي",
    openStory: "افتح القصة",
    loc: "سطر",
  },
  process: {
    eyebrow: "كيف أروي العمل",
    title: "من المشكلة إلى الأثر.",
    lead: "كل مشروع يتبع القوس نفسه — لترى المشكلة، والرهان، وما تغيّر فعلًا.",
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
    title: "لنتحدث عن البناء القادم.",
    lead: "منفتح على المنتجات والأدوات الداخلية والتعاون المدروس.",
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
      "Portfolio of Ali Al Aidarous — product and systems work told from issue to impact. Screenshots and metrics; source stays private.",
  },
  nav: {
    work: "Work",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Product & systems builder",
    name: "Ali Al Aidarous",
    lead: "I design and ship internal tools and personal products — told as stories from issue to impact.",
    ctaWork: "See the work",
    ctaContact: "Contact",
  },
  work: {
    eyebrow: "Selected work",
    title: "Pro systems. Personal craft.",
    lead: "Private projects — shown through screenshots, metrics, and the story of what changed. No public repos.",
    pro: "Pro",
    personal: "Personal",
    openStory: "Open story",
    loc: "LOC",
  },
  process: {
    eyebrow: "How I tell work",
    title: "Issue to impact.",
    lead: "Every project follows the same arc — so you see the problem, the bet, and what actually changed.",
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
    title: "Let's talk about the next build.",
    lead: "Open to product, internal tools, and thoughtful collaboration.",
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
