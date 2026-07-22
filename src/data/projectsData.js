import proiImg from '../assets/proi.png'; // الصورة الخاصة بالمشروع الأول

// 👈 اسامي افتراضية لتلات صور للمشروع الثاني (سمّ الصور عندك بنفس الأسامي دي في مجلد assets)
import invImg1 from '../assets/inv1.png';
import invImg2 from '../assets/inv2.png';
import invImg3 from '../assets/inv3.png';

export const projects = [
  {
    id: 1,
    title: "Freelancer Hub — AI Powered Freelancer OS",
    thumbnail: proiImg,
    images: [proiImg],
    category: "AI & Desktop",
    shortDescription: "نظام تشغيل متكامل للفريلانسرز لإدارة الأعمال، الأرباح، والإنتاجية مع محرك توصيات ذكي بالذكاء الاصطناعي.",
    fullDescription: "تم تصميم النظام كنظام تشغيل متكامل يساعد المستخدمين على إدارة أعمالهم، ودخلهم، وأدائهم في مكان واحد باستخدام بيانات حقيقية وتحليلات ديناميكية. يحلل النظام النشاط ويوفر رؤى قابلة للتنفيذ لتحسين الإنتاجية وزيادة الدخل بدلاً من الداشبوردز الثابتة.",
    problem: "صعوبة تتبع الفريلانسرز لأرباحهم، وقتهم، وعملائهم في شاشة واحدة، وغياب الرؤى الذكية حول كيفية زيادة دخلهم وإدارة أوقاتهم بكفاءة.",
    solution: "بناء منصة ديناميكية بالكامل ترتبط بقاعدة بيانات محلية، تولد تقارير ورسوم بيانية، وتستخدم الذكاء الاصطناعي لتقديم توصيات وتحليلات فورية.",
    features: [
      "إدارة الأرباح وتتبع الدخل المالي",
      "تتبع وقت العمل للمشاريع (Time Tracking)",
      "إدارة العملاء والمشاريع وتتبع الأهداف",
      "محرك توصيات ذكي مدعوم بالذكاء الاصطناعي (AI Engine)",
      "تحليلات وبيانات ديناميكية 100% بناءً على قاعدة بيانات محلية"
    ],
    techStack: [
      "Python",
      "Desktop App Dev",
      "Software Architecture",
      "Data Analytics",
      "AI Integration"
    ],
    githubUrl: "https://github.com/youssef23f",
    demoUrl: "",
  },
  {
    id: 2,
    title: "Smart AI-Powered Inventory & Stock Forecasting System",
    thumbnail: invImg1, // الصورة الرئيسية اللي هتظهر على كارت المشروع
    images: [invImg1, invImg2, invImg3], // التلت صور بتوع المشروع
    category: "Full-Stack & AI",
    shortDescription: "نظام إدارة مخازن متكامل مع قراءة الكاميرا للـ Barcode والتنبؤ الذكي بنفاد المخزون عبر AI Microservice.",
    fullDescription: "نظام إدارة مخازن احترافي ومستعد للإنتاج (Production-ready)، يعتمد معمارية MERN Stack ومزود بـ Microservice مستقلة بـ Python وFastAPI لتوقع تواريخ نفاد البضائع باستخدام تعلم الآلة (Linear Regression).",
    problem: "المشكلة في إدارة المخازن التقليدية هي البطء في إدخال المنتجات يدوياً وعدم المعرفة المسبقة بموعد نفاد المخزون مما يسبب توقف المبيعات.",
    solution: "دمج الكاميرا لقراءة الـ Barcode فوراً + بناء محرك ذكاء اصطناعي يتوقع تاريخ نفاد كل منتج بناءً على معدل الاستهلاك اليومي (Burn-rates).",
    features: [
      "معمارية MERN Stack كاملة مع MongoDB Atlas",
      "مسح الباركود المباشر عبر كاميرا الويب (Live Camera Barcode Scanning)",
      "خدمة مصغرة (FastAPI Microservice) بـ Python للذكاء الاصطناعي والتنبؤ بنفاد المخزون",
      "خوارزميات Scikit-Learn لحساب معدل الاستهلاك والتنبؤ الدقيق",
      "لوحة تحكم تفاعلية (Recharts Dashboard) لتحليل القيمة المالية والمخزون المتبقي"
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
  }
];