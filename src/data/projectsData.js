import proiImg from '../assets/proi.png';
import invImg1 from '../assets/inv1.png';
import invImg2 from '../assets/inv2.png';
import invImg3 from '../assets/inv3.png';

// صور مشروع NovaCare الافتراضية
import novaImg1 from '../assets/nova1.png';
import novaImg2 from '../assets/nova2.png';
import novaImg3 from '../assets/nova3.png';

// صور مشروع WorkSphere الافتراضية
import workImg1 from '../assets/work1.png';
import workImg2 from '../assets/work2.png';
import workImg3 from '../assets/work3.png';

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
    thumbnail: invImg1,
    images: [invImg1, invImg2, invImg3],
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
  },
  {
    id: 3,
    title: "NovaCare — Clinical Management SaaS Platform",
    thumbnail: novaImg1,
    images: [novaImg1, novaImg2, novaImg3],
    category: "Frontend & SaaS",
    shortDescription: "منصة ساس سحابية حديثة لإدارة العيادات والمراكز الطبية بواجهة Glassmorphic وبدعم كامل للغة العربية والـ Dark Mode.",
    fullDescription: "NovaCare هو نظام SaaS سحابي حديث لإدارة العيادات والمراكز الطبية بشكل ذكي وسلس. تم تصميمه بالكامل ليدعم RTL مع تقديم واجهة زجاجية فريدة (Glassmorphic UI) وتفاعل لحظي بدون الحاجة لسيرفر معقد عبر Context API وLocalStorage.",
    problem: "تعقيد الأنظمة الطبية التقليدية وصعوبة استخدامها في إدارة المواعيد والروشتات والفواتير اليومية.",
    solution: "توفير واجهة بسيطة وسريعة لتنسيق مواعيد المرضى، إنشاء الروشتات، تحرير الفواتير، ومتابعة إحصائيات الأداء في مكان واحد وبدعم كامل للوضع المظلم.",
    features: [
      "لوحة تحكم تفاعلية لعرض المؤشرات الحيوية للعيادة",
      "حفظ البيانات لحظياً عبر LocalStorage وReact Context API",
      "سجل مرضى إلكتروني مع بحث وفلترة سريعة",
      "جدول مواعيد ديناميكي (Upcoming / In Progress / Completed)",
      "تحليلات ديموغرافية ونظام فواتير وروشتات إلكترونية E-Prescriptions"
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
    id: 4,
    title: "WorkSphere — Enterprise ERP & HRMS System",
    thumbnail: workImg1,
    images: [workImg1, workImg2, workImg3],
    category: "Full-Stack & Web App",
    shortDescription: "نظام ERP & HRMS متكامل لإدارة الشركات والموظفين والحضور والرواتب والإجازات مع تحليلات ورسوم بيانية.",
    fullDescription: "نظام مؤسسي متكامل لإدارة الموارد البشرية والعمليات (ERP & HRMS). يتيح تتبع حضور وانصراف الموظفين اللحظي، إدارة مسيرة الرواتب وتصديرها PDF، مع متابعة المشاريع والمهام والإجازات في مكان واحد.",
    problem: "تشتت العمليات الإدارية في الشركات بين متابعة الحضور، حساب الرواتب والبدلات، وإدارة مهام المشاريع والإجازات.",
    solution: "بناء داشبورد موحد وشامل يتيح دورة إدارية كاملة من الحضور اللحظي وحساب الرواتب التلقائي وتتبع المشاريع مع دعم الرسوم البيانية التفاعلية.",
    features: [
      "لوحة تحكم تفاعلية لمؤشرات الأداء (KPIs) وإحصائيات الحضور بالـ Recharts",
      "إدارة كاملة لهيكلية الموظفين والأقسام",
      "تتبع الحضور والانصراف اللحظي (مكتب / عن بُعد / غياب)",
      "مسيرة رواتب إلكترونية مع حساب الاستقطاعات وإصدار PDF",
      "دورة موافقات الإجازات وتتبع المشاريع والمهام"
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