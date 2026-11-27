// Single source of truth for site copy, EN + AR.
// Anything wrapped like ⟦PENDING: ...⟧ waits on Ibrahim's answer and must not ship.

export type Lang = 'en' | 'ar';

export const profile = {
  name: 'Ibrahim Hamdy',
  nameAr: 'إبراهيم حمدي',
  email: 'ihamdy1552005@gmail.com',
  github: 'https://github.com/Ibrahim-Al-Jid',
  linkedin: 'https://www.linkedin.com/in/ibrahim-al-jid1',
  whatsapp: '', // ⟦PENDING: phone on site yes/no⟧
  avatar: '/assets/avatar.png',
  cvBase: '/cv', // per-track PDFs land here: /cv/ibrahim-hamdy-<track>.pdf ⟦PENDING: tracks⟧
};

export const hero = {
  en: {
    eyebrow: 'AI Engineer · Cairo, Egypt',
    titleA: 'I build AI agents',
    titleB: 'and the production software around them.',
    sub: 'Final-year Data Science student at Helwan National University. Multi-agent systems, full-stack products, and machine learning with honest, measured results.',
    ctaWork: 'View my work',
    ctaCv: 'Download CV',
    ctaGithub: 'GitHub',
  },
  ar: {
    eyebrow: 'مهندس ذكاء اصطناعي · القاهرة، مصر',
    titleA: 'أبني وكلاء ذكاء اصطناعي',
    titleB: 'والبرمجيات الإنتاجية التي تعمل حولهم.',
    sub: 'طالب سنة نهائية في علوم البيانات بجامعة حلوان الأهلية. أنظمة متعددة الوكلاء، منتجات متكاملة، وتعلم آلي بنتائج مقاسة بصدق.',
    ctaWork: 'شاهد أعمالي',
    ctaCv: 'حمّل السيرة الذاتية',
    ctaGithub: 'جيت هاب',
  },
};

export type AgentCard = {
  slug: string;
  image: string;
  name: string;
  nameAr: string;
  badge?: { en: string; ar: string };
  privateRepo?: boolean;
  repo?: string;
  tagline: { en: string; ar: string };
  points: { en: string; ar: string }[];
  stack: string[];
  metrics: { value: number; suffix: string; label: { en: string; ar: string }; decimals?: number }[];
};

export const agents: AgentCard[] = [
  {
    slug: 'basira',
    image: '/assets/projects/basira.svg',
    name: 'Basira',
    nameAr: 'بصيرة',
    badge: { en: 'Graduation project', ar: 'مشروع التخرج' },
    repo: 'https://github.com/Ibrahim-Al-Jid/Basira',
    tagline: {
      en: 'Multi-agent security review for web projects',
      ar: 'مراجعة أمنية متعددة الوكلاء لمشاريع الويب',
    },
    points: [
      { en: 'Five LangGraph agents run 100 defensive checks across 75 vulnerability subdomains', ar: 'خمسة وكلاء LangGraph ينفذون 100 فحص دفاعي عبر 75 نوعًا فرعيًا من الثغرات' },
      { en: 'Bilingual reports: Arabic and English, exported as PDF, JSON, HTML and SARIF', ar: 'تقارير ثنائية اللغة: عربي وإنجليزي، بتصدير PDF وJSON وHTML وSARIF' },
      { en: 'Provider-agnostic LLM settings: OpenRouter, OpenAI, Anthropic, Google', ar: 'إعدادات مستقلة عن المزود: OpenRouter وOpenAI وAnthropic وGoogle' },
      { en: 'Falls back to local deterministic analysis when the provider is down', ar: 'يعود تلقائيًا للتحليل المحلي الحتمي عند تعطل المزود' },
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'React'],
    metrics: [
      { value: 61.5, suffix: '%', decimals: 1, label: { en: 'detection with one agent, no tools (8/13 DVWA modules)', ar: 'نسبة اكتشاف بوكيل واحد بلا أدوات (8 من 13 في DVWA)' } },
      { value: 0, suffix: '%', label: { en: 'found by static checks alone, measured honestly', ar: 'ما وجدته الفحوص الثابتة وحدها، مقاس بصدق' } },
      { value: 256, suffix: '', label: { en: 'automated tests passing', ar: 'اختبارًا آليًا ناجحًا' } },
    ],
  },
  {
    slug: 'warsha',
    image: '/assets/projects/warsha.svg',
    name: 'Warsha',
    nameAr: 'ورشة',
    badge: { en: 'Private repo', ar: 'مستودع خاص' },
    privateRepo: true,
    tagline: {
      en: 'A software company staffed entirely by AI agents',
      ar: 'شركة برمجيات يديرها وكلاء ذكاء اصطناعي بالكامل',
    },
    points: [
      { en: 'Role-based agents (CEO, engineers, reviewers, QA) take one idea to a tested pull request', ar: 'وكلاء بأدوار (مدير، مهندسون، مراجعون، جودة) يحولون الفكرة إلى طلب دمج مُختبَر' },
      { en: 'Rules in code: permissions, budgets and review gates enforced by the system, never asked in prompts', ar: 'القواعد في الكود: الصلاحيات والميزانيات وبوابات المراجعة يفرضها النظام لا النصوص' },
      { en: 'Real LLMs via OpenRouter free models, with deterministic fallback so the loop never breaks', ar: 'نماذج لغوية حقيقية عبر النماذج المجانية من OpenRouter مع بديل حتمي لا يتعطل' },
      { en: 'Live 3D office UI, event-sourced engine, bilingual PDF/JSON reports', ar: 'واجهة مكتب ثلاثية الأبعاد حية، محرك قائم على الأحداث، تقارير PDF/JSON بالعربية والإنجليزية' },
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'Docker'],
    metrics: [
      { value: 212, suffix: '', label: { en: 'CI tests green across 5 jobs', ar: 'اختبار CI ناجح عبر 5 مهام' } },
      { value: 8, suffix: '', label: { en: 'database migrations in the schema', ar: 'ترحيلات قاعدة بيانات في المخطط' } },
      { value: 20, suffix: '', label: { en: 'reference tasks in the eval suite', ar: 'مهمة مرجعية في حزمة التقييم' } },
    ],
  },
  {
    slug: 'data-analysis-agent',
    image: '/assets/projects/data-analysis-agent.svg',
    name: 'Data Analysis Agent',
    nameAr: 'وكيل تحليل البيانات',
    repo: 'https://github.com/Ibrahim-Al-Jid/Data-Analysis-Agent',
    tagline: {
      en: 'Chat with your CSV, an AI analyst whose every number comes from a real Pandas tool result',
      ar: 'تحدث مع ملف CSV الخاص بك، محلل ذكي كل رقم فيه ناتج عن أداة Pandas حقيقية',
    },
    points: [
      { en: 'No invented figures: the model must call tools and quote their output', ar: 'لا أرقام مخترعة: النموذج ملزم باستدعاء الأدوات واقتباس مخرجاتها' },
    ],
    stack: ['FastAPI', 'React', 'Pandas'],
    metrics: [],
  },
  {
    slug: 'remindly-agent',
    image: '/assets/projects/remindly-agent.svg',
    name: 'ReMindly Agent',
    nameAr: 'وكيل ReMindly',
    repo: 'https://github.com/Ibrahim-Al-Jid/ReMindly-Agent',
    tagline: {
      en: 'Turns raw notes and explanations into structured Markdown, with streaming, validation and a quality review step',
      ar: 'يحول الملاحظات الخام إلى Markdown منظم، مع بث مباشر وتحقق وخطوة مراجعة جودة',
    },
    points: [],
    stack: ['FastAPI'],
    metrics: [],
  },
];

export type Category = 'agents' | 'ml' | 'fullstack' | 'data' | 'security';

export type Project = {
  slug: string;
  image: string;
  name: string;
  repo?: string;
  privateRepo?: boolean;
  category: Category;
  oneLiner: { en: string; ar: string };
  metric?: { en: string; ar: string };
  stack: string[];
  featured?: boolean;
};

export const categories: { id: Category | 'all'; en: string; ar: string }[] = [
  { id: 'all', en: 'All', ar: 'الكل' },
  { id: 'agents', en: 'AI agents', ar: 'وكلاء الذكاء الاصطناعي' },
  { id: 'ml', en: 'Machine learning', ar: 'تعلم آلي' },
  { id: 'fullstack', en: 'Full-stack', ar: 'أنظمة متكاملة' },
  { id: 'data', en: 'Data & BI', ar: 'بيانات وتحليلات' },
  { id: 'security', en: 'Security & systems', ar: 'أمان وأنظمة' },
];

export const projects: Project[] = [
  { slug: 'ml-portfolio', image: '/assets/projects/ml-portfolio.webp', name: 'Machine Learning Portfolio', repo: 'https://github.com/Ibrahim-Al-Jid/Machine-Learning-Portfolio', category: 'ml', featured: true,
    oneLiner: { en: 'Hub for 10 end-to-end ML projects with honest evaluation: no leakage, baselines, confidence intervals', ar: 'بوابة لعشرة مشاريع تعلم آلي متكاملة بتقييم صادق: بلا تسريب، مع خطوط أساس وفواصل ثقة' },
    metric: { en: '7 problem types', ar: '7 أنواع مسائل' }, stack: ['Python', 'scikit-learn', 'LightGBM', 'XGBoost'] },
  { slug: 'fraud', image: '/assets/projects/fraud.webp', name: 'Credit Card Fraud Detection', repo: 'https://github.com/Ibrahim-Al-Jid/credit-card-fraud-detection', category: 'ml', featured: true,
    oneLiner: { en: 'Fraud detection on 283k real transactions, 0.17% fraud rate, chronological split', ar: 'كشف احتيال على 283 ألف معاملة حقيقية بنسبة احتيال 0.17% وتقسيم زمني' },
    metric: { en: 'PR-AUC 0.803, 76% recall at 0.8 precision', ar: 'PR-AUC 0.803 واستدعاء 76% عند دقة 0.8' }, stack: ['LightGBM', 'scikit-learn'] },
  { slug: 'churn', image: '/assets/projects/churn.webp', name: 'Telco Churn Survival Analysis', repo: 'https://github.com/Ibrahim-Al-Jid/telco-churn-survival-analysis', category: 'ml',
    oneLiner: { en: 'Churn as a time-to-event problem: Kaplan-Meier, Cox and AFT on 7,032 customers', ar: 'فقدان العملاء كمسألة زمن-حدث: Kaplan-Meier وCox وAFT على 7,032 عميلًا' },
    metric: { en: 'C-index 0.854', ar: 'مؤشر توافق 0.854' }, stack: ['lifelines', 'scikit-learn'] },
  { slug: 'drybean', image: '/assets/projects/drybean.webp', name: 'Dry Bean Explainability', repo: 'https://github.com/Ibrahim-Al-Jid/dry-bean-multiclass-explainability', category: 'ml',
    oneLiner: { en: '7-class classifier with exact TreeSHAP vs permutation importance compared', ar: 'مصنف 7 فئات مع مقارنة TreeSHAP الدقيق بأهمية التبديل' },
    metric: { en: 'macro-F1 0.932', ar: 'متوسط F1 كلي 0.932' }, stack: ['XGBoost', 'SHAP'] },
  { slug: 'bike', image: '/assets/projects/bike.webp', name: 'Bike Demand Forecasting', repo: 'https://github.com/Ibrahim-Al-Jid/bike-demand-forecasting', category: 'ml',
    oneLiner: { en: 'Hourly demand 1h and 24h ahead, leak-free lags, rolling-origin evaluation', ar: 'توقع الطلب بالساعة لساعة و24 ساعة مقدمًا بخصائص بلا تسريب وتقييم متدحرج' },
    metric: { en: '31% under baseline', ar: 'أقل من خط الأساس بنسبة 31%' }, stack: ['LightGBM'] },
  { slug: 'deposit', image: '/assets/projects/deposit.webp', name: 'Bank Term Deposit Prediction', repo: 'https://github.com/Ibrahim-Al-Jid/bank-term-deposit-prediction', category: 'ml',
    oneLiner: { en: '41,188 contacts, profit-based threshold, time-based validation', ar: '41,188 جهة اتصال، بحد قرار مبني على الربح وتحقق زمني' },
    metric: { en: '4.7x lift in top decile', ar: 'رفع 4.7x في العشر الأعلى' }, stack: ['scikit-learn'] },
  { slug: 'movielens', image: '/assets/projects/movielens.webp', name: 'MovieLens Recommender', repo: 'https://github.com/Ibrahim-Al-Jid/movielens-recommender-system', category: 'ml',
    oneLiner: { en: 'Hybrid ALS + ItemKNN + content, per-user time split', ar: 'هجين ALS + ItemKNN + محتوى، بتقسيم زمني لكل مستخدم' },
    metric: { en: 'NDCG@10 0.121 vs 0.079 popularity', ar: 'NDCG@10 0.121 مقابل 0.079 للشائع' }, stack: ['NumPy', 'pandas'] },
  { slug: 'newsgroups', image: '/assets/projects/newsgroups.webp', name: 'Newsgroups Text Classification', repo: 'https://github.com/Ibrahim-Al-Jid/newsgroups-text-classification', category: 'ml',
    oneLiner: { en: '20-class NLP with a measured, removed header leak', ar: 'تصنيف نصوص 20 فئة مع قياس تسريب الترويسات وإزالته' },
    metric: { en: '71.9% honest (86.2% with leak)', ar: '71.9% بصدق (86.2% مع التسريب)' }, stack: ['scikit-learn', 'TF-IDF'] },
  { slug: 'audi', image: '/assets/projects/audi.webp', name: 'Audi Car Price Prediction', repo: 'https://github.com/Ibrahim-Al-Jid/audi-car-price-prediction', category: 'ml',
    oneLiner: { en: 'Used-car prices with 5-fold CV across 5 models', ar: 'أسعار سيارات مستعملة بتحقق خماسي عبر 5 نماذج' },
    metric: { en: 'MAE £1,570 (6.9%)', ar: 'متوسط خطأ 1,570 جنيهًا إسترلينيًا (6.9%)' }, stack: ['scikit-learn'] },
  { slug: 'bigmart', image: '/assets/projects/bigmart.webp', name: 'BigMart Segmentation', repo: 'https://github.com/Ibrahim-Al-Jid/bigmart-customer-segmentation', category: 'ml',
    oneLiner: { en: 'PCA + K-Means + DBSCAN into five business segments', ar: 'PCA + K-Means + DBSCAN إلى خمس شرائح أعمال' },
    metric: { en: 'silhouette 0.280', ar: 'معامل سيلويت 0.280' }, stack: ['scikit-learn'] },
  { slug: 'fashion', image: '/assets/projects/fashion.webp', name: 'Fashion-MNIST Classical Vision', repo: 'https://github.com/Ibrahim-Al-Jid/fashion-mnist-classical-vision', category: 'ml',
    oneLiner: { en: 'Classical ML only: 8 pipelines, HOG features, McNemar tests', ar: 'تعلم آلي تقليدي فقط: 8 مسارات وخصائص HOG واختبارات McNemar' },
    metric: { en: '90.3% accuracy', ar: 'دقة 90.3%' }, stack: ['scikit-learn'] },
  { slug: 'trendora', image: '/assets/projects/trendora.svg', name: 'Trendora Control Center', repo: 'https://github.com/Ibrahim-Al-Jid/Trendora-Control-Center', category: 'fullstack', featured: true,
    oneLiner: { en: 'Full-stack e-commerce platform, English and Arabic docs', ar: 'منصة تجارة إلكترونية متكاملة بتوثيق عربي وإنجليزي' },
    metric: { en: '131 tests', ar: '131 اختبارًا' }, stack: ['FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'] },
  { slug: 'campus', image: '/assets/projects/campus.svg', name: 'Student Management System', privateRepo: true, category: 'fullstack',
    oneLiner: { en: 'University administration: 8 roles, server-enforced permissions, MFA, EN/AR with RTL', ar: 'إدارة جامعية: 8 أدوار وصلاحيات مفروضة من الخادم وMFA وعربي/إنجليزي RTL' },
    metric: { en: '8 roles', ar: '8 أدوار' }, stack: ['FastAPI', 'React 19', 'TypeScript', 'PostgreSQL'] },
  { slug: 'san3a', image: '/assets/projects/san3a.svg', name: 'San3a', privateRepo: true, category: 'fullstack',
    oneLiner: { en: 'Handcrafts marketplace: buyer storefront + artisan portal', ar: 'سوق للحرف اليدوية: واجهة مشترين وبوابة حرفيين' }, stack: ['React', 'TypeScript'] },
  { slug: 'voltex', image: '/assets/projects/voltex.svg', name: 'Voltex', privateRepo: true, category: 'fullstack',
    oneLiner: { en: 'Field-sales platform: two mobile apps, supervisor dashboard, one shared API', ar: 'منصة مبيعات ميدانية: تطبيقا جوال ولوحة مشرفين وواجهة برمجية موحدة' }, stack: ['Expo', 'React Native', 'Express', 'PostgreSQL'] },
  { slug: 'powerbi', image: '/assets/projects/powerbi.webp', name: 'Power BI Analytics Portfolio', repo: 'https://github.com/Ibrahim-Al-Jid/power-bi-analytics-portfolio', category: 'data', featured: true,
    oneLiner: { en: 'Five end-to-end Power BI projects with DAX measures and written findings', ar: 'خمسة مشاريع Power BI متكاملة بمقاييس DAX ونتائج مكتوبة' },
    metric: { en: '5 projects', ar: '5 مشاريع' }, stack: ['Power BI', 'DAX'] },
  { slug: 'covid', image: '/assets/projects/covid.webp', name: 'COVID-19 Global Analysis', repo: 'https://github.com/Ibrahim-Al-Jid/covid19-global-analysis', category: 'data',
    oneLiner: { en: '210 countries: Lasso/RFE, hypothesis tests, PCA, Power BI dashboard', ar: '210 دول: Lasso/RFE واختبارات فرضيات وPCA ولوحة Power BI' }, stack: ['Python', 'Power BI'] },
  { slug: 'datagent', image: '/assets/projects/datagent.svg', name: 'Data Analysis Agent', repo: 'https://github.com/Ibrahim-Al-Jid/Data-Analysis-Agent', category: 'data',
    oneLiner: { en: 'Chat with a CSV; every number from a real Pandas tool result', ar: 'تحدث مع CSV؛ كل رقم من نتيجة أداة Pandas حقيقية' }, stack: ['FastAPI', 'Pandas'] },
  { slug: 'oracle', image: '/assets/projects/oracle.svg', name: 'Oracle University Database', repo: 'https://github.com/Ibrahim-Al-Jid/oracle-university-database', category: 'data',
    oneLiner: { en: 'Oracle XE registration DB: triggers, auto grading, least-privilege users', ar: 'قاعدة تسجيل Oracle XE: مشغلات وتقييم تلقائي ومستخدمون بأقل صلاحية' },
    metric: { en: '30 self-checking tests', ar: '30 اختبارًا ذاتي التحقق' }, stack: ['PL/SQL', 'Oracle XE'] },
  { slug: 'companydb', image: '/assets/projects/companydb.webp', name: 'Company Database Design', repo: 'https://github.com/Ibrahim-Al-Jid/company-database-design', category: 'data',
    oneLiner: { en: 'ERD to T-SQL: schema, seed data, 12 analytical queries', ar: 'من ERD إلى T-SQL: مخطط وبيانات أولية و12 استعلامًا تحليليًا' }, stack: ['T-SQL'] },
  { slug: 'secure-records', image: '/assets/projects/secure-records.svg', name: 'Secure Student Records', repo: 'https://github.com/Ibrahim-Al-Jid/hnu-secure-student-records-system', category: 'security',
    oneLiner: { en: 'Database-centric security: RBAC, Bell-LaPadula MLS, AES-256, auditing', ar: 'أمان محوره قاعدة البيانات: RBAC وMLS بنموذج Bell-LaPadula وAES-256 وتدقيق' }, stack: ['SQL Server', 'Python'] },
  { slug: 'campus-net', image: '/assets/projects/campus-net.webp', name: 'Campus Network Design', repo: 'https://github.com/Ibrahim-Al-Jid/hnu-campus-network-packet-tracer', category: 'security',
    oneLiner: { en: 'Four-building campus network: 12 VLANs, /26 subnets, RIP', ar: 'شبكة حرم من أربعة مبانٍ: 12 شبكة VLAN وتقسيم /26 وبروتوكول RIP' }, stack: ['Cisco Packet Tracer'] },
  { slug: 'algo', image: '/assets/projects/algo.webp', name: 'Algorithm Problems in Python', repo: 'https://github.com/Ibrahim-Al-Jid/algorithm-problems-python', category: 'security',
    oneLiner: { en: 'Ten classics with optimized solutions, complexity analysis, unit tests', ar: 'عشر مسائل كلاسيكية بحلول محسنة وتحليل تعقيد واختبارات وحدة' }, stack: ['Python'] },
];

export const skills: { group: { en: string; ar: string }; items: string[] }[] = [
  { group: { en: 'Languages', ar: 'لغات البرمجة' }, items: ['Python', 'TypeScript / JavaScript', 'SQL (PostgreSQL, Oracle, T-SQL)', 'PL/pgSQL'] },
  { group: { en: 'AI & agents', ar: 'الذكاء الاصطناعي والوكلاء' }, items: ['LangGraph', 'Multi-agent orchestration', 'LLM tool use', 'RAG / pgvector', 'OpenRouter'] },
  { group: { en: 'Data & ML', ar: 'البيانات وتعلم الآلة' }, items: ['pandas', 'NumPy', 'scikit-learn', 'LightGBM', 'XGBoost', 'SHAP', 'lifelines', 'Jupyter'] },
  { group: { en: 'Web', ar: 'الويب' }, items: ['FastAPI', 'React', 'Vite', 'Node.js / Express', 'Prisma', 'Tailwind', 'React Native / Expo'] },
  { group: { en: 'Infrastructure', ar: 'البنية التحتية' }, items: ['Docker', 'nginx', 'GitHub Actions', 'Redis'] },
  { group: { en: 'BI & fundamentals', ar: 'ذكاء الأعمال والأساسيات' }, items: ['Power BI (DAX)', 'Statistics', 'Evaluation design', 'Database design', 'RBAC / MLS', 'Networks'] },
];

export const journey: { year: { en: string; ar: string }; title: { en: string; ar: string }; text: { en: string; ar: string } }[] = [
  {
    year: { en: '2023', ar: '2023' },
    title: { en: 'Started at Helwan National University', ar: 'البداية في جامعة حلوان الأهلية' },
    text: { en: 'B.Sc. in Data Science, Faculty of Computer Science and Information Technology.', ar: 'بكالوريوس علوم البيانات، كلية علوم الحاسب وتكنولوجيا المعلومات.' },
  },
  // ⟦PENDING: ITI entry, status and track⟧
  {
    year: { en: '2026', ar: '2026' },
    title: { en: 'Machine learning portfolio', ar: 'محفظة تعلم الآلة' },
    text: { en: 'Ten end-to-end ML projects, each with honest evaluation, bilingual docs and reproducible results.', ar: 'عشرة مشاريع تعلم آلي متكاملة، كل منها بتقييم صادق وتوثيق ثنائي اللغة ونتائج قابلة لإعادة الإنتاج.' },
  },
  {
    year: { en: '2026', ar: '2026' },
    title: { en: 'Basira, graduation project', ar: 'بصيرة، مشروع التخرج' },
    text: { en: 'Multi-agent security review of web projects, measured honestly on real vulnerable targets.', ar: 'مراجعة أمنية متعددة الوكلاء لمشاريع الويب، مقاسة بصدق على أهداف حقيقية معرضة للثغرات.' },
  },
  {
    year: { en: '2027', ar: '2027' },
    title: { en: 'Expected graduation', ar: 'التخرج المتوقع' },
    text: { en: 'GPA 3.0 (very good). Open to opportunities.', ar: 'بمعدل تراكمي 3.0 (جيد جدًا). متاح للفرص.' },
  },
];

export const ui = {
  en: {
    nav: { work: 'Work', agents: 'AI Agents', about: 'About', skills: 'Skills', journey: 'Journey', contact: 'Contact' },
    sections: {
      agents: { eyebrow: 'Flagship work', title: 'AI agents that do real work', sub: 'Not chat boxes: agents that plan, call tools, keep state, and pass review gates before anything ships.' },
      work: { eyebrow: 'Selected work', title: 'Projects with receipts', sub: 'Every number below is measured and reproducible. Where models tie, the README says so.' },
      about: { eyebrow: 'About', title: 'The human behind the repos' },
      skills: { eyebrow: 'Skills', title: 'What I can be interviewed on' },
      journey: { eyebrow: 'Journey', title: 'How we got here' },
      contact: { eyebrow: 'Contact', title: 'Let us build something honest', sub: 'Open to internships, junior roles and collaborations. Fastest reply by email.' },
    },
    aboutParas: [
      'I am Ibrahim Hamdy, a final-year Data Science student at the Faculty of Computer Science and Information Technology, Helwan National University, graduating 2027.',
      'I design systems where LLMs are software components, not chat boxes: agents that plan, call tools, keep state, and get checked by tests and review gates before anything ships. My work covers the whole product: orchestration, the API behind it, the database schema, the client, and the Docker setup that runs it.',
      'I care about architecture that is documented, tested, and honest about what is finished.',
    ],
    howIWork: [
      'Architecture first: a living document and written decisions per project',
      'Rules in code, not in prompts: permissions, budgets, review gates enforced by the system',
      'Tested and verified: CI on every commit, integration tests on real databases',
      'Honest evaluation: baselines, confidence intervals, and leaks measured and removed',
      'Bilingual: English and Arabic interfaces and docs with proper RTL',
    ],
    privateNote: 'Private repo. Architecture walkthrough available on request.',
    viewRepo: 'Repository',
    caseStudy: 'Case study',
    footer: 'Designed and built by Ibrahim Hamdy',
    langToggle: 'العربية',
    cvSection: { title: 'CV downloads', note: 'A master CV plus tailored variants for each job track.', download: 'Download PDF' },
    experienceNote: '', // ⟦PENDING: experience⟧
  },
  ar: {
    nav: { work: 'الأعمال', agents: 'وكلاء الذكاء', about: 'نبذة', skills: 'المهارات', journey: 'المسيرة', contact: 'تواصل' },
    sections: {
      agents: { eyebrow: 'العمل الرئيسي', title: 'وكلاء ذكاء اصطناعي يؤدون عملًا حقيقيًا', sub: 'ليست صناديق محادثة: وكلاء يخططون ويستدعون الأدوات ويحتفظون بالحالة ويجتازون بوابات المراجعة قبل شحن أي شيء.' },
      work: { eyebrow: 'مختارات الأعمال', title: 'مشاريع بأدلة', sub: 'كل رقم أدناه مقاس وقابل لإعادة الإنتاج. وعندما تتعادل النماذج، يذكر الملف ذلك صراحة.' },
      about: { eyebrow: 'نبذة', title: 'الإنسان خلف المستودعات' },
      skills: { eyebrow: 'المهارات', title: 'ما يمكن اختباري فيه' },
      journey: { eyebrow: 'المسيرة', title: 'كيف وصلنا هنا' },
      contact: { eyebrow: 'تواصل', title: 'لنبنِ شيئًا صادقًا', sub: 'متاح للتدريب والوظائف المبتدئة والتعاون. أسرع رد عبر البريد.' },
    },
    aboutParas: [
      'أنا إبراهيم حمدي، طالب في السنة النهائية ببرنامج علوم البيانات، كلية علوم الحاسب وتكنولوجيا المعلومات، جامعة حلوان الأهلية، تخرج 2027.',
      'أصمم أنظمة تكون فيها النماذج اللغوية مكونات برمجية لا صناديق محادثة: وكلاء يخططون ويستدعون الأدوات ويحتفظون بالحالة وتفحصهم الاختبارات وبوابات المراجعة قبل شحن أي شيء. يغطي عملي المنتج كاملًا: التنسيق والواجهة البرمجية ومخطط قاعدة البيانات وتطبيق العميل وإعداد Docker الذي يشغله.',
      'أهتم بمعمارية موثقة ومختبرة وصادقة بشأن ما اكتمل فعلًا.',
    ],
    howIWork: [
      'المعمارية أولًا: وثيقة حية وقرارات مكتوبة لكل مشروع',
      'القواعد في الكود لا في النصوص: الصلاحيات والميزانيات وبوابات المراجعة يفرضها النظام',
      'مختبَر ومتحقق منه: CI على كل إيداع واختبارات تكامل على قواعد بيانات حقيقية',
      'تقييم صادق: خطوط أساس وفواصل ثقة وتسريبات تقاس وتزال',
      'ثنائي اللغة: واجهات وتوثيق بالعربية والإنجليزية مع دعم RTL سليم',
    ],
    privateNote: 'مستودع خاص. جولة في المعمارية متاحة عند الطلب.',
    viewRepo: 'المستودع',
    caseStudy: 'دراسة حالة',
    footer: 'صممه وبناه إبراهيم حمدي',
    langToggle: 'English',
    cvSection: { title: 'تحميل السيرة الذاتية', note: 'نسخة رئيسية ونسخ مخصصة لكل تراك وظيفي.', download: 'تحميل PDF' },
    experienceNote: '',
  },
} as const;
