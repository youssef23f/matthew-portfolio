import proiImg from '../assets/proi.png';
import invImg1 from '../assets/inv1.png';
import novaImg1 from '../assets/nova1.png';
import workImg1 from '../assets/work1.png';
import aseerImg1 from '../assets/aseer1.png';
import fitImg1 from '../assets/fit1.png';

export const projects = [
  {
    id: 1,
    title: "Aseer AI (AETHER-OS) — Multi-Model AI Platform & Cloud IDE",
    thumbnail: aseerImg1,
    images: [aseerImg1],
    category: "AI & Cloud SaaS",
    shortDescription: "منصة سحابية متقدمة لتنسيق الذكاء الاصطناعي مع موجه طلبات ذكي، محرر أكواد سحابي Monaco Cloud IDE، ونظام اشتراكات.",
    fullDescription: "Aseer AI (أسير) هي منصة مؤسسية لتنسيق نماذج الذكاء الاصطناعي وإدارة بيئة العمل السحابية. تم تصميمها لتوحيد الذكاء متعدد النماذج، والتوجيه الديناميكي للطلبات، وتوليد الكود البرمجي لحظياً مع محرر أكواد متكامل.",
    problem: "تشتت المستخدمين بين منصات الذكاء الاصطناعي المختلفة وغياب بيئة عمل سحابية تتيح كتابة وتجربة وتشغيل الأكواد المولدة فوراً في نفس الشاشة.",
    solution: "بناء منصة متكاملة تضم موجهاً ذكياً لتوجيه الطلبات لأفضل نموذج، دمج Monaco Editor لتشغيل الأكواد والمعاينة الفورية، مع إدارة الذاكرة ونظام الاشتراكات (BYOK).",
    features: [
      "موجه طلبات ذكي لتصنيف وتوجيه الطلبات لأمثل نموذج (Smart Intent-Based Router)",
      "محرر أكواد سحابي متكامل (Monaco Cloud IDE) مع معاينة HTML/CSS/JS فورية",
      "إدارة الذاكرة طويلة الأجل عبر جلسات متعددة (Context-Aware Memory)",
      "نظام إحضار المفتاح الخاص (BYOK) وإدارة مستويات الاشتراكات",
      "هندسة محادثة متقدمة تشمل تثبيت المحادثات ومجلدات المشاريع"
    ],
    techStack: [
      "React.js",
      "Monaco Editor",
      "Python (FastAPI)",
      "Tailwind CSS",
      "Vercel & CI/CD",
      "RESTful APIs & WebSockets"
    ],
    githubUrl: "https://github.com/youssef23f",
    demoUrl: "https://aether-os-sx13.vercel.app",
  },
  {
    id: 2,
    title: "FITNESS.AI — Next-Gen AI Health & Nutrition Assistant",
    thumbnail: fitImg1,
    images: [fitImg1],
    category: "Full-Stack & AI Health",
    shortDescription: "منصة صحية متكاملة بالذكاء الاصطناعي لتتبع التغذية، تحليل الوجبات عبر الكاميرا ورؤية الحاسب، وتقديم استشارات فورية.",
    fullDescription: "تطوير منصة صحية حديثة ومبتكرة باستخدام Next.js 16 (App Router) وSupabase لإدارة المصادقة وقاعدة البيانات، مع استغلال واجهات برمجة تطبيقات Groq Cloud للحصول على استجابات فائقة السرعة وتحليل السعرات من الصور.",
    problem: "صعوبة تتبع السعرات اليومية بالطرق التقليدية وحساب المغذيات بدقة بدون أدوات ذكية تفهم الصور.",
    solution: "دمج كاميرا الويب وتقنيات رؤية الحاسب لتقدير السعرات ومكونات الوجبة من الصور مباشرة مع مساعد ذكي لحظي.",
    features: [
      "تحليل الوجبات عبر الكاميرا ورؤية الحاسب (Computer Vision Meal Scanning)",
      "تكامل مع Groq SDK ونماذج Llama 3 لردود فائقة السرعة ودقيقة",
      "إدارة آمنة للمستخدمين وقاعدة بيانات سحابية عبر Supabase وPostgreSQL",
      "ضغط الصور على جهة العميل (Client-side Image Compression)",
      "لوحات تحكم لحظية وتتبع دقيق للمغذيات"
    ],
    techStack: [
      "Next.js 16",
      "React.js",
      "Supabase",
      "Groq SDK (Llama 3)",
      "Tailwind CSS",
      "Computer Vision"
    ],
    githubUrl: "https://github.com/youssef23f",
    demoUrl: "https://fitness-app-ctzm.vercel.app/",
  },
  {
    id: 3,
    title: "Smart AI-Powered Inventory & Stock Forecasting System",
    thumbnail: invImg1,
    images: [invImg1],
    category: "Full-Stack & AI",
    shortDescription: "نظام إدارة مخازن متكامل مع قراءة الكاميرا للـ Barcode والتنبؤ الذكي بنفاد المخزون عبر AI Microservice.",
    fullDescription: "نظام إدارة مخازن احترافي ومستعد للإنتاج، يعتمد معمارية MERN Stack ومزود بـ Microservice مستقلة بـ Python وFastAPI لتوقع تواريخ نفاد البضائع باستخدام تعلم الآلة.",
    problem: "البطء في إدخال المنتجات يدوياً وعدم المعرفة المسبقة بموعد نفاد المخزون مما يسبب توقف المبيعات.",
    solution: "دمج الكاميرا لقراءة الـ Barcode فوراً + بناء محرك ذكاء اصطناعي يتوقع تاريخ نفاد كل منتج.",
    features: [
      "معمارية MERN Stack كاملة مع MongoDB Atlas",
      "مسح الباركود المباشر عبر كاميرا الويب",
      "خدمة مصغرة للتنبؤ بنفاد المخزون",
      "خوارزميات Scikit-Learn لحساب معدل الاستهلاك والتنبؤ الدقيق"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Python",
      "FastAPI",
      "Scikit-Learn"
    ],
    githubUrl: "https://github.com/youssef23f/inventory-management-system/tree/main",
    demoUrl: "",
  },
  {
    id: 4,
    title: "NovaCare — Clinical Management SaaS Platform",
    thumbnail: novaImg1,
    images: [novaImg1],
    category: "Frontend & SaaS",
    shortDescription: "منصة ساس سحابية حديثة لإدارة العيادات والمراكز الطبية بواجهة Glassmorphic وبدعم كامل للغة العربية والـ Dark Mode.",
    fullDescription: "NovaCare هو نظام SaaS سحابي حديث لإدارة العيادات والمراكز الطبية بشكل ذكي وسلس بدعم كامل للـ RTL.",
    problem: "تعقيد الأنظمة الطبية التقليدية وصعوبة استخدامها في إدارة المواعيد والروشتات والفواتير.",
    solution: "توفير واجهة بسيطة وسريعة لتنسيق مواعيد المرضى، إنشاء الروشتات، تحرير الفواتير، ومتابعة إحصائيات الأداء.",
    features: [
      "لوحة تحكم تفاعلية لعرض المؤشرات الحيوية للعيادة",
      "حفظ البيانات لحظياً عبر LocalStorage وReact Context API",
      "سجل مرضى إلكتروني مع بحث وفلترة سريعة",
      "نظام فواتير وروشتات إلكترونية E-Prescriptions"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS v4",
      "Context API",
      "Lucide React",
      "Vite"
    ],
    githubUrl: "https://github.com/youssef23f",
    demoUrl: "",
  },
  {
    id: 5,
    title: "WorkSphere — Enterprise ERP & HRMS System",
    thumbnail: workImg1,
    images: [workImg1],
    category: "Full-Stack & Web App",
    shortDescription: "نظام ERP & HRMS متكامل لإدارة الشركات والموظفين والحضور والرواتب والإجازات مع تحليلات ورسوم بيانية.",
    fullDescription: "نظام مؤسسي متكامل لإدارة الموارد البشرية والعمليات يتيح تتبع حضور وانصراف الموظفين اللحظي ومسيرة الرواتب.",
    problem: "تشتت العمليات الإدارية في الشركات بين متابعة الحضور، حساب الرواتب، وإدارة مهام المشاريع.",
    solution: "بناء داشبورد موحد وشامل يتيح دورة إدارية كاملة مع دعم الرسوم البيانية التفاعلية.",
    features: [
      "لوحة تحكم تفاعلية لمؤشرات الأداء (KPIs) بالـ Recharts",
      "إدارة كاملة لهيكلية الموظفين والأقسام",
      "تتبع الحضور والانصراف اللحظي",
      "مسيرة رواتب إلكترونية مع إصدار PDF"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Recharts",
      "Lucide Icons"
    ],
    githubUrl: "https://github.com/youssef23f",
    demoUrl: "",
  }
];