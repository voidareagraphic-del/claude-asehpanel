// src/lib/i18n.ts
export type Lang = "en" | "fa";

export interface Translations {
  nav: {
    products: string; technology: string; fireShield: string;
    coldStorage: string; projects: string; about: string;
    contact: string; requestQuote: string;
  };
  hero: {
    badge: string; line1: string; line2: string; line3: string;
    sub1: string; sub2: string; cta1: string; cta2: string;
    thermalLabel: string; scroll: string;
  };
  products: {
    label: string; headline1: string; headline2: string;
    description: string; viewSpecs: string;
    items: Array<{ name: string; subtitle: string; description: string; applications: string[] }>;
    specsStrip: Array<{ label: string; value: string }>;
  };
  fireShield: {
    label: string; headline1: string; headline2: string; body: string;
    charLabel: string; cta1: string; cta2: string; certTitle: string;
    resultTitle: string; resultSub: string; results: string[];
    properties: Array<{ label: string; detail: string }>;
  };
  manufacturing: {
    label: string; headline1: string; headline2: string;
    capacityLabel: string; capacitySub: string;
    features: Array<{ title: string; detail: string }>;
    schematicLabel: string;
    steps: Array<{ label: string }>;
    details: Array<{ label: string; value: string }>;
    cta1: string; cta2: string;
  };
  coldStorage: {
    label: string; headline1: string; headline2: string; body: string; cta: string;
    features: Array<{ label: string; sub: string }>;
    specTitle: string;
    specs: Array<{ label: string; value: string }>;
  };
  cleanRoom: {
    label: string; headline1: string; headline2: string; body: string;
    imageLabel: string; cta: string;
    features: Array<{ label: string; detail: string }>;
    applications: Array<{ label: string; iso: string }>;
  };
  stats: {
    label: string; headline1: string; headline2: string; certLabel: string;
    items: Array<{ label: string; sublabel: string }>;
  };
  projects: {
    label: string; headline1: string; headline2: string; description: string;
    items: Array<{ title: string; location: string; category: string }>;
  };
  blog: {
    label: string; headline1: string; headline2: string;
    allArticles: string; readMore: string;
    items: Array<{ category: string; title: string; excerpt: string; author: string; date: string; readTime: string }>;
  };
  contact: {
    label: string; headline1: string; headline2: string; body: string;
    formTitle: string; sent: string; sentSub: string;
    name: string; namePlaceholder: string; company: string; companyPlaceholder: string;
    email: string; emailPlaceholder: string; projectType: string; projectTypePlaceholder: string;
    details: string; detailsPlaceholder: string; submit: string; exportLabel: string;
    contactItems: Array<{ label: string }>;
    projectTypes: string[];
  };
  footer: {
    tagline: string; copyright: string; privacy: string; terms: string; standards: string;
    sections: Record<string, string>;
    links: Record<string, string[]>;
  };
}

const en: Translations = {
  nav: {
    products: "Products", technology: "Technology", fireShield: "Fire Shield",
    coldStorage: "Cold Storage", projects: "Projects", about: "About",
    contact: "Contact", requestQuote: "Request Quote",
  },
  hero: {
    badge: "High Index PIR Technology",
    line1: "Engineering cold.", line2: "Building", line3: "the future.",
    sub1: "High Index PIR technology. 12 million m² annual capacity.",
    sub2: "Continuous Production Lines · Fully-automated smart manufacturing · Export-ready",
    cta1: "Explore Products", cta2: "Our Technology",
    thermalLabel: "Thermal", scroll: "Scroll",
  },
  products: {
    label: "Product Range", headline1: "Five systems.", headline2: "One standard.",
    description: "Every product line is engineered for a specific demand — from fire-rated roof panels to pharmaceutical clean rooms. PIR-cored. Precision-made. Export-ready.",
    viewSpecs: "View Specifications",
    items: [
      { name: "Roof Panels", subtitle: "5-rib & 3-rib corrugated profiles", description: "High-performance insulated roof panels with exceptional thermal efficiency and structural integrity.", applications: ["Industrial warehouses", "Logistics hubs", "Solar-ready profiles"] },
      { name: "Wall Panels", subtitle: "Standard external & internal cladding", description: "Multi-layer composite wall system delivering superior thermal and mechanical performance.", applications: ["Commercial buildings", "Industrial facades", "Agricultural"] },
      { name: "Secret Fix", subtitle: "Concealed fastener system", description: "Architectural facade panels with hidden fixing system delivering seamless, premium surfaces.", applications: ["Hotel facades", "Shopping centres", "Office buildings"] },
      { name: "Cold Storage", subtitle: "Tongue & groove insulated panels", description: "Engineered for extreme cold environments. 4-layer edge protection with minimum heat transfer at joints.", applications: ["Cold storage warehouses", "Food processing", "Pharmaceutical"] },
      { name: "Clean Room", subtitle: "Antibacterial seamless system", description: "Zero-contamination panels for controlled environments. Antibacterial surface, seamless joints, HACCP certified.", applications: ["Pharmaceutical plants", "Food factories", "Semiconductor fabs"] },
    ],
    specsStrip: [
      { label: "Thickness range", value: "30 — 200mm" }, { label: "Thermal conductivity", value: "λD = 0.022 W/m·K" },
      { label: "Density", value: "40 ± 2 kg/m³" }, { label: "Fire rating", value: "BS1D0 / BS2D0" },
      { label: "Steel coating", value: "AZ120 / Z120" }, { label: "Width", value: "1000mm effective" },
    ],
  },
  fireShield: {
    label: "Fire Shield Technology", headline1: "The panel that", headline2: "refuses to burn.",
    body: "High Index PIR forms a dense carbonized char layer when exposed to extreme heat — a structural barrier that stops flame propagation. The foam does not melt, does not drip, and self-extinguishes the moment the ignition source is removed.",
    charLabel: "Char layer formation", cta1: "Fire Performance Data", cta2: "Technical Datasheet",
    certTitle: "Certification Standards", resultTitle: "ASP Fire Shield PIR",
    resultSub: "When exposed to a real fire scenario:",
    results: ["Does not contribute as fuel source", "Emits minimum smoke", "Structural integrity preserved", "Insulation properties maintained", "Immediately self-extinguishes"],
    properties: [
      { label: "Does not melt", detail: "Maintains structural integrity under extreme heat" },
      { label: "Does not drip", detail: "Zero burning droplet formation — BS1D0 classified" },
      { label: "Self-extinguishing", detail: "Immediately extinguishes when ignition source removed" },
      { label: "Minimal smoke production", detail: "Smoke density within EN 13501-1 permitted limits" },
    ],
  },
  manufacturing: {
    label: "Manufacturing Technology", headline1: "Two lines.", headline2: "Zero compromise.",
    capacityLabel: "Annual capacity", capacitySub: "One of Asia's largest producers",
    features: [
      { title: "Continuous Production", detail: "Two fully-automated continuous production lines — the highest-precision method for sandwich panel manufacturing." },
      { title: "Smart Quality Control", detail: "Highest number of automated inspection stations in the region. Every parameter monitored in real-time." },
      { title: "CNC Precision Forming", detail: "CNC bending from 0° to 155° with ±1° accuracy. Automatic digital analysis before every bend." },
      { title: "ISO 9001:2014 Certified", detail: "Quality management system covering raw material input, in-process monitoring, and final product audit." },
    ],
    schematicLabel: "Production line schematic — ASP Continuous Line",
    steps: [{ label: "Raw Coil\nInput" }, { label: "Roll\nForming" }, { label: "PIR Foam\nInjection" }, { label: "Press &\nLamination" }, { label: "Automated\nQC Scan" }, { label: "CNC\nCutting" }, { label: "Panel\nOutput" }],
    details: [
      { label: "Blowing agent", value: "Pentane — Kyoto Protocol compliant" },
      { label: "Automation", value: "Fully-automated, minimal operator dependency" },
      { label: "Quality system", value: "ISO 9001:2014 + ISO/IEC 17025 laboratory" },
      { label: "Steel coating", value: "PE / SMP / PVDF / Plastisol options" },
    ],
    cta1: "Production Specifications", cta2: "Quality Certifications",
  },
  coldStorage: {
    label: "Cold Storage Systems", headline1: "Built for -40°C.", headline2: "Engineered for permanence.",
    body: "ASP-CS Cold Storage panels use a precision tongue-and-groove joint system with 4-layer edge metal protection — the most advanced cold room joint in the market. Minimum heat transfer. Maximum cold chain reliability.",
    cta: "Cold Storage Solutions",
    features: [
      { label: "Extreme temperature range", sub: "-40°C cryogenic to +15°C ambient" },
      { label: "4-layer edge protection", sub: "Maximum joint thermal performance" },
      { label: "HACCP certified surfaces", sub: "Food-safe antibacterial finish" },
      { label: "Zero thermal bridging", sub: "Minimum heat transfer at T&G joint" },
    ],
    specTitle: "ASP-CS Technical Specifications",
    specs: [
      { label: "Temperature Range", value: "-40°C to +15°C" }, { label: "Core Material", value: "High Index PIR / PUR" },
      { label: "Tongue & Groove", value: "4-layer edge protection" }, { label: "λD Thermal", value: "0.022 W/m·K" },
      { label: "Panel Width", value: "1000mm effective" }, { label: "Thickness Range", value: "60–200mm" },
      { label: "Density", value: "40 ± 2 kg/m³" }, { label: "HACCP", value: "Compliant" },
    ],
  },
  cleanRoom: {
    label: "Clean Room Systems", headline1: "Zero contamination.", headline2: "Zero compromise.",
    body: "ASP-CR Clean Room Panels deliver a controlled environment through antibacterial seamless surfaces, integrated moisture resistance, and HACCP-certified finishes for pharmaceutical, food processing, and semiconductor applications.",
    imageLabel: "ASP-CR — Clean Room System", cta: "Clean Room Specifications",
    features: [
      { label: "Antibacterial surface", detail: "Food-grade, pharmaceutical-compliant coating preventing microbial growth" },
      { label: "Seamless joint system", detail: "Zero gaps — prevents particulate contamination in ISO Class 7+ environments" },
      { label: "Moisture & dust barrier", detail: "High IP-rated panel construction for spray-down and chemical cleaning" },
      { label: "ESD-compatible options", detail: "Electrostatic discharge protection for semiconductor fab environments" },
    ],
    applications: [
      { label: "Pharmaceutical GMP", iso: "ISO 5–8" }, { label: "Food Processing", iso: "HACCP Grade" },
      { label: "Semiconductor Fab", iso: "ISO Class 5" }, { label: "Medical Device Mfg", iso: "ISO Class 7" },
      { label: "Research Labs", iso: "ISO 6–8" },
    ],
  },
  stats: {
    label: "By The Numbers", headline1: "Scale that delivers.", headline2: "Precision that endures.",
    certLabel: "International certifications & standards",
    items: [
      { label: "Annual Production", sublabel: "Two continuous lines" },
      { label: "Production Lines", sublabel: "Continuous operation" },
      { label: "Max Panel Thickness", sublabel: "30mm–200mm full range" },
      { label: "Core Density", sublabel: "40 ± 2 kg/m³ PIR precision" },
    ],
  },
  projects: {
    label: "Industrial Projects", headline1: "Built to last.", headline2: "Engineered to perform.",
    description: "From -40°C cold hubs to pharmaceutical clean rooms across four continents.",
    items: [
      { title: "Mega Logistics Cold Hub", location: "UAE — Dubai Industrial City", category: "Cold Storage" },
      { title: "Pharmaceutical Cold Chain", location: "Germany — Munich", category: "Clean Room" },
      { title: "Food Processing Plant", location: "Poland — Warsaw", category: "Industrial" },
      { title: "Smart Warehouse Campus", location: "Kazakhstan — Almaty", category: "Logistics" },
      { title: "Airport Cargo Terminal", location: "Turkey — Istanbul", category: "Infrastructure" },
    ],
  },
  blog: {
    label: "Insights", headline1: "Knowledge built", headline2: "into every panel.",
    allArticles: "All articles", readMore: "Read more",
    items: [
      { category: "Engineering", title: "PIR vs PUR: Thermal Performance Under Extreme Cold", excerpt: "A comprehensive analysis of High Index PIR insulation versus standard PUR foam in sub-zero applications, including real-world thermal conductivity data at -40°C.", author: "Engineering R&D", date: "March 2026", readTime: "8 min" },
      { category: "Manufacturing", title: "How Modern Sandwich Panels Are Made", excerpt: "Inside the continuous production line — from raw steel coil and PIR foam injection to CNC cutting and automated quality inspection.", author: "Production Team", date: "April 2026", readTime: "6 min" },
      { category: "Technology", title: "Smart Cold Storage: IoT Integration Guide", excerpt: "How to integrate temperature monitoring, energy management, and real-time performance analytics into ASP-CS cold storage panel systems.", author: "Systems Engineering", date: "May 2026", readTime: "10 min" },
    ],
  },
  contact: {
    label: "Contact", headline1: "Start your", headline2: "project.",
    body: "From specification to delivery — our engineering team is available to evaluate your project requirements, recommend the right system, and provide full technical support.",
    formTitle: "Request a Quote", sent: "Message sent", sentSub: "Our team will respond within 24 hours.",
    name: "Full Name", namePlaceholder: "Your name", company: "Company", companyPlaceholder: "Organization",
    email: "Email", emailPlaceholder: "you@company.com", projectType: "Project Type",
    projectTypePlaceholder: "Select project type...", details: "Project Details",
    detailsPlaceholder: "Describe your project requirements, area (m²), panel system needed...",
    submit: "Request Quote", exportLabel: "Export coverage",
    contactItems: [{ label: "Sales & Inquiry" }, { label: "Engineering" }, { label: "Headquarters" }],
    projectTypes: ["Cold Storage Warehouse", "Clean Room / Pharmaceutical", "Industrial Roof & Wall", "Secret Fix Facade", "Mixed-Use Development", "Export / Distribution", "Other"],
  },
  footer: {
    tagline: "Engineering cold. Building the future.",
    copyright: "© 2026 Aseh Tejarat Asia. All rights reserved.",
    privacy: "Privacy Policy", terms: "Terms", standards: "Engineering Standards",
    sections: { Products: "Products", Technology: "Technology", Company: "Company" },
    links: {
      Products: ["ASP-RO Roof Panels", "ASP-WA Wall Panels", "ASP-SF Secret Fix", "ASP-CS Cold Storage", "ASP-CR Clean Room"],
      Technology: ["High Index PIR", "Fire Shield", "Continuous Production", "Quality Systems", "R&D Laboratory"],
      Company: ["About Us", "Projects", "Insights", "Careers", "Contact"],
    },
  },
};

const fa: Translations = {
  nav: {
    products: "محصولات", technology: "فناوری", fireShield: "سپر آتش",
    coldStorage: "سردخانه", projects: "پروژه‌ها", about: "درباره ما",
    contact: "تماس", requestQuote: "درخواست قیمت",
  },
  hero: {
    badge: "فناوری PIR با شاخص بالا",
    line1: "مهندسی سرما.", line2: "ساختن", line3: "آینده.",
    sub1: "فناوری PIR با شاخص بالا. ظرفیت سالانه ۱۲ میلیون مترمربع.",
    sub2: "خطوط تولید پیوسته · تولید هوشمند کاملاً خودکار · آماده صادرات",
    cta1: "مشاهده محصولات", cta2: "فناوری ما",
    thermalLabel: "حرارتی", scroll: "پایین",
  },
  products: {
    label: "محدوده محصولات", headline1: "پنج سیستم.", headline2: "یک استاندارد.",
    description: "هر خط محصول برای یک نیاز خاص مهندسی شده — از پانل‌های سقفی مقاوم در برابر آتش تا اتاق‌های تمیز داروسازی. هسته PIR. دقیق‌ساخت. آماده صادرات.",
    viewSpecs: "مشاهده مشخصات",
    items: [
      { name: "پانل سقفی", subtitle: "پروفیل‌های دنده‌دار ۵ و ۳ دنده", description: "پانل‌های سقفی عایق با کارایی حرارتی استثنایی و یکپارچگی سازه‌ای.", applications: ["انبارهای صنعتی", "مراکز لجستیک", "پروفیل آماده خورشیدی"] },
      { name: "پانل دیواری", subtitle: "روکش استاندارد خارجی و داخلی", description: "سیستم دیواری کامپوزیت چندلایه با عملکرد حرارتی و مکانیکی برتر.", applications: ["ساختمان‌های تجاری", "نماهای صنعتی", "کشاورزی"] },
      { name: "فیکس مخفی", subtitle: "سیستم اتصال پنهان", description: "پانل‌های نمای معماری با سیستم اتصال پنهان برای سطوح یکپارچه و ممتاز.", applications: ["نمای هتل‌ها", "مراکز خرید", "ساختمان‌های اداری"] },
      { name: "سردخانه", subtitle: "پانل‌های عایق زبانه و شیار", description: "مهندسی‌شده برای محیط‌های سرمای شدید. محافظت ۴ لایه از لبه با حداقل انتقال حرارت در درزها.", applications: ["انبارهای سردخانه", "فرآوری مواد غذایی", "داروسازی"] },
      { name: "اتاق تمیز", subtitle: "سیستم یکپارچه ضدباکتری", description: "پانل‌های بدون آلودگی برای محیط‌های کنترل‌شده. سطح ضدباکتری، درزهای یکپارچه، دارای گواهینامه HACCP.", applications: ["کارخانه‌های داروسازی", "کارخانه‌های مواد غذایی", "تولید نیمه‌هادی"] },
    ],
    specsStrip: [
      { label: "محدوده ضخامت", value: "۳۰ — ۲۰۰ میلی‌متر" }, { label: "هدایت حرارتی", value: "λD = 0.022 W/m·K" },
      { label: "چگالی", value: "40 ± 2 kg/m³" }, { label: "رتبه‌بندی آتش", value: "BS1D0 / BS2D0" },
      { label: "روکش فولاد", value: "AZ120 / Z120" }, { label: "عرض", value: "۱۰۰۰ میلی‌متر موثر" },
    ],
  },
  fireShield: {
    label: "فناوری سپر آتش", headline1: "پانلی که", headline2: "نمی‌سوزد.",
    body: "PIR با شاخص بالا در معرض گرمای شدید یک لایه کربنی متراکم تشکیل می‌دهد — یک سد سازه‌ای که انتشار شعله را متوقف می‌کند. فوم ذوب نمی‌شود، قطره نمی‌ریزد و به محض برداشتن منبع اشتعال خاموش می‌شود.",
    charLabel: "تشکیل لایه کربنی", cta1: "داده‌های عملکرد آتش", cta2: "دیتاشیت فنی",
    certTitle: "استانداردهای گواهینامه", resultTitle: "ASP Fire Shield PIR",
    resultSub: "در معرض سناریوی آتش واقعی:",
    results: ["به عنوان منبع سوخت عمل نمی‌کند", "حداقل دود تولید می‌کند", "یکپارچگی سازه‌ای حفظ می‌شود", "خواص عایق‌کاری حفظ می‌شود", "فوری خاموش می‌شود"],
    properties: [
      { label: "ذوب نمی‌شود", detail: "یکپارچگی سازه‌ای را در گرمای شدید حفظ می‌کند" },
      { label: "قطره نمی‌ریزد", detail: "تشکیل قطره سوزان صفر — دارای طبقه‌بندی BS1D0" },
      { label: "خودخاموش‌شونده", detail: "به محض برداشتن منبع اشتعال فوری خاموش می‌شود" },
      { label: "تولید دود حداقل", detail: "چگالی دود در محدوده مجاز EN 13501-1" },
    ],
  },
  manufacturing: {
    label: "فناوری تولید", headline1: "دو خط.", headline2: "بدون سازش.",
    capacityLabel: "ظرفیت سالانه", capacitySub: "یکی از بزرگترین تولیدکنندگان آسیا",
    features: [
      { title: "تولید پیوسته", detail: "دو خط تولید پیوسته کاملاً خودکار — دقیق‌ترین روش تولید پانل ساندویچ." },
      { title: "کنترل کیفیت هوشمند", detail: "بیشترین تعداد ایستگاه‌های بازرسی خودکار در منطقه. هر پارامتر به‌صورت بلادرنگ رصد می‌شود." },
      { title: "فرم‌دهی دقیق CNC", detail: "خم‌کاری CNC از ۰° تا ۱۵۵° با دقت ±۱°. تحلیل دیجیتال خودکار قبل از هر خم." },
      { title: "گواهینامه ISO 9001:2014", detail: "سیستم مدیریت کیفیت شامل ورودی مواد اولیه، نظارت درون‌فرآیندی و ممیزی محصول نهایی." },
    ],
    schematicLabel: "شماتیک خط تولید — خط پیوسته ASP",
    steps: [{ label: "ورودی\nکویل خام" }, { label: "رول\nفرمینگ" }, { label: "تزریق\nفوم PIR" }, { label: "پرس و\nلمینیشن" }, { label: "اسکن\nکنترل کیفیت" }, { label: "برش\nCNC" }, { label: "خروجی\nپانل" }],
    details: [
      { label: "عامل دمنده", value: "پنتان — مطابق با پروتکل کیوتو" },
      { label: "اتوماسیون", value: "کاملاً خودکار، حداقل وابستگی به اپراتور" },
      { label: "سیستم کیفیت", value: "ISO 9001:2014 + آزمایشگاه ISO/IEC 17025" },
      { label: "روکش فولاد", value: "گزینه‌های PE / SMP / PVDF / Plastisol" },
    ],
    cta1: "مشخصات تولید", cta2: "گواهینامه‌های کیفیت",
  },
  coldStorage: {
    label: "سیستم‌های سردخانه", headline1: "ساخته‌شده برای -40°C.", headline2: "مهندسی‌شده برای ماندگاری.",
    body: "پانل‌های سردخانه ASP-CS از سیستم اتصال زبانه و شیار دقیق با محافظت ۴ لایه از لبه فلزی استفاده می‌کنند — پیشرفته‌ترین اتصال اتاق سرد در بازار. حداقل انتقال حرارت. حداکثر قابلیت اطمینان زنجیره سرد.",
    cta: "راهکارهای سردخانه",
    features: [
      { label: "محدوده دمایی شدید", sub: "از -40°C برودتی تا +15°C محیطی" },
      { label: "محافظت ۴ لایه لبه", sub: "حداکثر عملکرد حرارتی درز" },
      { label: "سطوح دارای گواهینامه HACCP", sub: "پوشش ضدباکتری ایمن برای غذا" },
      { label: "پل حرارتی صفر", sub: "حداقل انتقال حرارت در درز T&G" },
    ],
    specTitle: "مشخصات فنی ASP-CS",
    specs: [
      { label: "محدوده دما", value: "-40°C تا +15°C" }, { label: "ماده هسته", value: "High Index PIR / PUR" },
      { label: "زبانه و شیار", value: "محافظت ۴ لایه لبه" }, { label: "هدایت حرارتی λD", value: "0.022 W/m·K" },
      { label: "عرض پانل", value: "۱۰۰۰ میلی‌متر موثر" }, { label: "محدوده ضخامت", value: "۶۰–۲۰۰ میلی‌متر" },
      { label: "چگالی", value: "40 ± 2 kg/m³" }, { label: "HACCP", value: "مطابق" },
    ],
  },
  cleanRoom: {
    label: "سیستم‌های اتاق تمیز", headline1: "آلودگی صفر.", headline2: "سازش صفر.",
    body: "پانل‌های اتاق تمیز ASP-CR با سطوح یکپارچه ضدباکتری، مقاومت یکپارچه در برابر رطوبت و پوشش‌های دارای گواهینامه HACCP برای کاربردهای داروسازی، فرآوری مواد غذایی و نیمه‌هادی محیطی کنترل‌شده فراهم می‌کند.",
    imageLabel: "ASP-CR — سیستم اتاق تمیز", cta: "مشخصات اتاق تمیز",
    features: [
      { label: "سطح ضدباکتری", detail: "پوشش با درجه غذایی و مطابق با داروسازی که از رشد میکروبی جلوگیری می‌کند" },
      { label: "سیستم درز یکپارچه", detail: "بدون شکاف — از آلودگی ذرات در محیط‌های کلاس ISO 7+ جلوگیری می‌کند" },
      { label: "سد رطوبت و گرد", detail: "ساختار پانل با رتبه IP بالا برای شست‌وشو و تمیزکاری شیمیایی" },
      { label: "گزینه‌های سازگار با ESD", detail: "حفاظت در برابر تخلیه الکتروستاتیک برای محیط‌های فاب نیمه‌هادی" },
    ],
    applications: [
      { label: "داروسازی GMP", iso: "ISO 5–8" }, { label: "فرآوری مواد غذایی", iso: "HACCP Grade" },
      { label: "فاب نیمه‌هادی", iso: "ISO Class 5" }, { label: "تولید تجهیزات پزشکی", iso: "ISO Class 7" },
      { label: "آزمایشگاه‌های تحقیقاتی", iso: "ISO 6–8" },
    ],
  },
  stats: {
    label: "با اعداد", headline1: "مقیاسی که نتیجه می‌دهد.", headline2: "دقتی که ماندگار است.",
    certLabel: "گواهینامه‌ها و استانداردهای بین‌المللی",
    items: [
      { label: "تولید سالانه", sublabel: "دو خط پیوسته" },
      { label: "خطوط تولید", sublabel: "عملیات پیوسته" },
      { label: "حداکثر ضخامت پانل", sublabel: "محدوده کامل ۳۰–۲۰۰ میلی‌متر" },
      { label: "چگالی هسته", sublabel: "دقت PIR به میزان 40 ± 2 kg/m³" },
    ],
  },
  projects: {
    label: "پروژه‌های صنعتی", headline1: "ساخته‌شده برای ماندن.", headline2: "مهندسی‌شده برای عملکرد.",
    description: "از مراکز سرمای -40°C تا اتاق‌های تمیز داروسازی در چهار قاره.",
    items: [
      { title: "مرکز لجستیک سرمای بزرگ", location: "امارات — شهر صنعتی دبی", category: "سردخانه" },
      { title: "زنجیره سرمای داروسازی", location: "آلمان — مونیخ", category: "اتاق تمیز" },
      { title: "کارخانه فرآوری مواد غذایی", location: "لهستان — ورشو", category: "صنعتی" },
      { title: "پردیس انبار هوشمند", location: "قزاقستان — آلماتی", category: "لجستیک" },
      { title: "ترمینال بار فرودگاه", location: "ترکیه — استانبول", category: "زیرساخت" },
    ],
  },
  blog: {
    label: "بینش‌ها", headline1: "دانشی که در", headline2: "هر پانل وجود دارد.",
    allArticles: "همه مقالات", readMore: "ادامه مطلب",
    items: [
      { category: "مهندسی", title: "PIR در برابر PUR: عملکرد حرارتی در سرمای شدید", excerpt: "تحلیل جامع عایق PIR با شاخص بالا در برابر فوم PUR استاندارد در کاربردهای زیر صفر، شامل داده‌های هدایت حرارتی دنیای واقعی در -40°C.", author: "تحقیق و توسعه مهندسی", date: "خرداد ۱۴۰۵", readTime: "۸ دقیقه" },
      { category: "تولید", title: "نحوه ساخت پانل‌های ساندویچ مدرن", excerpt: "درون خط تولید پیوسته — از کویل فولاد خام و تزریق فوم PIR تا برش CNC و بازرسی کیفیت خودکار.", author: "تیم تولید", date: "تیر ۱۴۰۵", readTime: "۶ دقیقه" },
      { category: "فناوری", title: "سردخانه هوشمند: راهنمای یکپارچه‌سازی IoT", excerpt: "نحوه یکپارچه‌سازی نظارت دما، مدیریت انرژی و تحلیل عملکرد بلادرنگ در سیستم‌های پانل سردخانه ASP-CS.", author: "مهندسی سیستم", date: "مرداد ۱۴۰۵", readTime: "۱۰ دقیقه" },
    ],
  },
  contact: {
    label: "تماس", headline1: "پروژه خود را", headline2: "شروع کنید.",
    body: "از مشخصات تا تحویل — تیم مهندسی ما آماده ارزیابی نیازهای پروژه شما، پیشنهاد سیستم مناسب و ارائه پشتیبانی فنی کامل است.",
    formTitle: "درخواست قیمت", sent: "پیام ارسال شد", sentSub: "تیم ما ظرف ۲۴ ساعت پاسخ خواهد داد.",
    name: "نام کامل", namePlaceholder: "نام شما", company: "شرکت", companyPlaceholder: "سازمان",
    email: "ایمیل", emailPlaceholder: "you@company.com", projectType: "نوع پروژه",
    projectTypePlaceholder: "نوع پروژه را انتخاب کنید...", details: "جزئیات پروژه",
    detailsPlaceholder: "نیازهای پروژه، متراژ (m²)، سیستم پانل مورد نیاز را توضیح دهید...",
    submit: "درخواست قیمت", exportLabel: "پوشش صادرات",
    contactItems: [{ label: "فروش و استعلام" }, { label: "مهندسی" }, { label: "دفتر مرکزی" }],
    projectTypes: ["انبار سردخانه", "اتاق تمیز / داروسازی", "سقف و دیوار صنعتی", "نمای فیکس مخفی", "توسعه چندمنظوره", "صادرات / توزیع", "سایر"],
  },
  footer: {
    tagline: "مهندسی سرما. ساختن آینده.",
    copyright: "© ۱۴۰۵ آسه تجارت آسیا. تمامی حقوق محفوظ است.",
    privacy: "سیاست حریم خصوصی", terms: "شرایط", standards: "استانداردهای مهندسی",
    sections: { Products: "محصولات", Technology: "فناوری", Company: "شرکت" },
    links: {
      Products: ["پانل سقفی ASP-RO", "پانل دیواری ASP-WA", "فیکس مخفی ASP-SF", "سردخانه ASP-CS", "اتاق تمیز ASP-CR"],
      Technology: ["High Index PIR", "سپر آتش", "تولید پیوسته", "سیستم‌های کیفیت", "آزمایشگاه R&D"],
      Company: ["درباره ما", "پروژه‌ها", "بینش‌ها", "مشاغل", "تماس"],
    },
  },
};

export const translations: Record<Lang, Translations> = { en, fa };
