// Case studies, 150-300 words each: problem, role, stack, hard decision, result, next.
import type { Lang } from './content';

export type CaseStudy = {
  slug: string;
  title: string;
  titleAr: string;
  repo?: string;
  privateRepo?: boolean;
  stack: string[];
  sections: { heading: { en: string; ar: string }; body: { en: string; ar: string } }[];
};

const H = {
  problem: { en: 'Problem', ar: 'المشكلة' },
  role: { en: 'My role', ar: 'دوري' },
  stack: { en: 'Stack', ar: 'التقنيات' },
  hard: { en: 'The hard part', ar: 'الجزء الأصعب' },
  result: { en: 'Result', ar: 'النتيجة' },
  next: { en: 'What is next', ar: 'ما التالي' },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'basira',
    title: 'Basira',
    titleAr: 'بصيرة',
    repo: 'https://github.com/Ibrahim-Al-Jid/Basira',
    stack: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    sections: [
      { heading: H.problem, body: {
        en: 'My graduation project. Web security tools tend to be either shallow linters or expensive enterprise scanners. I wanted to know: can a team of LLM agents reviewing code like human reviewers actually find real vulnerabilities, and can we measure that honestly instead of claiming it?',
        ar: 'مشروع تخرجي. أدوات أمان الويب إما فاحصات سطحية أو ماسحات مؤسسية باهظة. أردت أن أعرف: هل يستطيع فريق من وكلاء الذكاء الاصطناعي يراجع الكود كمراجعين بشريين أن يجد ثغرات حقيقية، وهل يمكن قياس ذلك بصدق بدلًا من ادعائه؟',
      }},
      { heading: H.role, body: {
        en: 'Solo project: architecture, the five-agent LangGraph pipeline, the 100 defensive checks, the bilingual report system, the evaluation harness, and all of the testing.',
        ar: 'مشروع فردي: المعمارية، وخط خمسة وكلاء LangGraph، و100 فحص دفاعي، ونظام التقارير ثنائي اللغة، وحزمة التقييم، وكل الاختبارات.',
      }},
      { heading: H.hard, body: {
        en: 'Honesty. Static checks alone found 0 of 13 vulnerable DVWA modules. Instead of hiding that, I built a pinned, checksum-verified evaluation harness and published the real numbers: one agent with no tools reaches 61.5% (8/13), at zero cost on free models. The gap is now the roadmap: real coverage growth means code-level source analysis, not more header checks.',
        ar: 'الصدق. الفحوص الثابتة وحدها لم تجد أيًا من 13 وحدة معرضة للثغرات في DVWA. بدلًا من إخفاء ذلك، بنيت حزمة تقييم مثبتة ومتحققًا منها بالبصمات ونشرت الأرقام الحقيقية: وكيل واحد بلا أدوات يصل إلى 61.5% (8 من 13) بتكلفة صفر على نماذج مجانية. هذه الفجوة أصبحت خارطة الطريق: النمو الحقيقي للتغطية يعني تحليل الكود المصدري نفسه لا مزيدًا من فحوص الترويسات.',
      }},
      { heading: H.result, body: {
        en: 'A working product: provider-agnostic LLM settings (OpenRouter, OpenAI, Anthropic, Google), Arabic and English reports as PDF/JSON/HTML/SARIF, a live scan UI, deterministic fallback when the provider is down, 256 automated tests, and a demo runbook for presenting it live.',
        ar: 'منتج يعمل: إعدادات مستقلة عن مزود النماذج (OpenRouter وOpenAI وAnthropic وGoogle)، تقارير عربية وإنجليزية بصيغ PDF/JSON/HTML/SARIF، واجهة فحص حية، بديل حتمي عند تعطل المزود، 256 اختبارًا آليًا، ودليل عرض لتقديمه مباشرة.',
      }},
      { heading: H.next, body: {
        en: 'Expanding vulnerability coverage with code-level source analysis checks, and a step-by-step presentation mode for the live demo.',
        ar: 'توسيع تغطية الثغرات بفحوص تحليل الكود المصدري، ووضع عرض تقديمي خطوة بخطوة للديمو المباشر.',
      }},
    ],
  },
  {
    slug: 'warsha',
    title: 'Warsha',
    titleAr: 'ورشة',
    privateRepo: true,
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'Docker'],
    sections: [
      { heading: H.problem, body: {
        en: 'Can a company of AI agents take one idea, plan it, build it, review it, test it, and open a real pull request, with humans only at the merge button? Most agent demos fake the hard parts: permissions, budgets, and quality gates live in prompts where anyone can talk past them.',
        ar: 'هل تستطيع شركة من وكلاء الذكاء الاصطناعي أخذ فكرة واحدة فتخططها وتبنيها وتراجعها وتختبرها وتفتح طلب دمج حقيقيًا، ولا يتدخل الإنسان إلا عند زر الدمج؟ معظم عروض الوكلاء تزيف الأجزاء الصعبة: الصلاحيات والميزانيات وبوابات الجودة تعيش في النصوص حيث يمكن تجاوزها بالكلام.',
      }},
      { heading: H.role, body: {
        en: 'Solo project: the event-sourced engine, the role-based agents wired to real LLMs, the FastAPI backend with WebSocket events, the live 3D office UI, and the CI that keeps it all honest.',
        ar: 'مشروع فردي: المحرك القائم على الأحداث، والوكلاء بأدوارهم الموصولون بنماذج لغوية حقيقية، وخادم FastAPI بأحداث WebSocket، وواجهة المكتب الثلاثية الأبعاد الحية، وCI الذي يحافظ على صدق كل ذلك.',
      }},
      { heading: H.hard, body: {
        en: 'Rules in code. Permissions, spending budgets and review gates are enforced by the system itself; an agent literally cannot merge its own work. The LLM writes task titles and review notes, but the QA gate is deterministic: a model never gets to declare "tests passed". And when the model provider fails or the key is missing, the loop falls back to deterministic workers instead of breaking.',
        ar: 'القواعد في الكود. الصلاحيات وميزانيات الإنفاق وبوابات المراجعة يفرضها النظام نفسه؛ الوكيل لا يستطيع حرفيًا دمج عمله بنفسه. النموذج يكتب عناوين المهام وملاحظات المراجعة، لكن بوابة الجودة حتمية: لا يحق لنموذج أبدًا إعلان "الاختبارات نجحت". وعند فشل المزود أو غياب المفتاح، يعود النظام للوكلاء الحتميين بدلًا من أن يتعطل.',
      }},
      { heading: H.result, body: {
        en: 'A full workday scenario runs end to end against real git and a real database: 212 CI tests across 5 jobs, 8 database migrations, a 20-task eval suite, bilingual PDF/JSON reports generated server-side with correct Arabic shaping, and a 3D office you can walk through with WASD.',
        ar: 'سيناريو يوم عمل كامل يعمل من البداية للنهاية على git حقيقي وقاعدة بيانات حقيقية: 212 اختبار CI عبر 5 مهام، 8 ترحيلات قاعدة بيانات، حزمة تقييم من 20 مهمة، تقارير PDF/JSON ثنائية اللغة تُولد على الخادم بتشكيل عربي سليم، ومكتب ثلاثي الأبعاد يمكن التجول فيه بمفاتيح WASD.',
      }},
      { heading: H.next, body: {
        en: 'The LLM writes the service code itself, guarded by the deterministic test gate.',
        ar: 'أن يكتب النموذج كود الخدمة نفسه، تحت حراسة بوابة الاختبارات الحتمية.',
      }},
    ],
  },
  {
    slug: 'trendora',
    title: 'Trendora Control Center',
    titleAr: 'مركز تحكم تريندورا',
    repo: 'https://github.com/Ibrahim-Al-Jid/Trendora-Control-Center',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker Compose'],
    sections: [
      { heading: H.problem, body: {
        en: 'E-commerce backends are where junior portfolios usually cut corners: no tests, no caching strategy, no docs. The goal was a platform that reads like production software.',
        ar: 'الواجهات الخلفية للتجارة الإلكترونية هي حيث تختصر ملفات المبتدئين عادة: بلا اختبارات وبلا استراتيجية تخزين مؤقت وبلا توثيق. كان الهدف منصة تقرأ كبرمجيات إنتاجية حقيقية.',
      }},
      { heading: H.role, body: { en: 'Solo build: API design, schema, caching, the React/TypeScript client, Docker Compose, and the test suite.', ar: 'بناء فردي: تصميم الواجهة البرمجية والمخطط والتخزين المؤقت وعميل React/TypeScript وDocker Compose وحزمة الاختبارات.' }},
      { heading: H.hard, body: {
        en: 'Keeping the test suite honest: 131 tests that run against real services in CI, not mocks that always pass. English and Arabic docs kept in sync with the code.',
        ar: 'الحفاظ على صدق حزمة الاختبارات: 131 اختبارًا يعمل على خدمات حقيقية في CI لا على محاكاة تنجح دائمًا. وتوثيق عربي وإنجليزي متزامن مع الكود.',
      }},
      { heading: H.result, body: { en: 'A full-stack e-commerce platform with FastAPI, PostgreSQL, Redis, React and TypeScript, one docker-compose up from a running system.', ar: 'منصة تجارة إلكترونية متكاملة بـ FastAPI وPostgreSQL وRedis وReact وTypeScript، على بعد أمر docker-compose up واحد من نظام يعمل.' }},
      { heading: H.next, body: { en: 'Payment provider integration and load testing.', ar: 'تكامل مزود دفع واختبارات حمل.' }},
    ],
  },
  {
    slug: 'fraud',
    title: 'Credit Card Fraud Detection',
    titleAr: 'كشف احتيال بطاقات الائتمان',
    repo: 'https://github.com/Ibrahim-Al-Jid/credit-card-fraud-detection',
    stack: ['Python', 'LightGBM', 'scikit-learn', 'pandas'],
    sections: [
      { heading: H.problem, body: {
        en: 'Fraud is 0.17% of 283k real card transactions. Accuracy is meaningless here; a model that says "legit" every time scores 99.83%. The question is how much fraud you catch at a review budget the business can afford.',
        ar: 'الاحتيال يمثل 0.17% من 283 ألف معاملة حقيقية. الدقة لا تعني شيئًا هنا؛ نموذج يقول "سليم" في كل مرة يسجل 99.83%. السؤال هو كم احتيالًا تكتشفه ضمن ميزانية مراجعة تستطيع الشركة تحملها.',
      }},
      { heading: H.role, body: { en: 'Solo: the leak-free pipeline, the chronological split, model comparison, threshold analysis.', ar: 'عمل فردي: المسار الخالي من التسريب، والتقسيم الزمني، ومقارنة النماذج، وتحليل حد القرار.' }},
      { heading: H.hard, body: {
        en: 'Resisting the flattering evaluation. A random split inflates everything, so I used a chronological split with only 74 test frauds and reported a 95% confidence interval (0.715 to 0.884) instead of one clean number. I also reported where LightGBM is not clearly better than logistic regression.',
        ar: 'مقاومة التقييم المُجمّل. التقسيم العشوائي ينفخ كل شيء، فاستخدمت تقسيمًا زمنيًا به 74 احتيالًا فقط في الاختبار ونشرت فاصل ثقة 95% (من 0.715 إلى 0.884) بدلًا من رقم واحد نظيف. وذكرت أيضًا أين لا يتفوق LightGBM بوضوح على الانحدار اللوجستي.',
      }},
      { heading: H.result, body: { en: 'PR-AUC 0.803 with a 95% CI; catches 76% of fraud at 0.8 precision.', ar: 'PR-AUC 0.803 بفاصل ثقة 95%؛ يكتشف 76% من الاحتيال عند دقة 0.8.' }},
      { heading: H.next, body: { en: 'Cost-sensitive thresholds tuned to a stated review budget.', ar: 'حدود قرار حساسة للتكلفة مضبوطة على ميزانية مراجعة معلنة.' }},
    ],
  },
  {
    slug: 'churn',
    title: 'Telco Churn Survival Analysis',
    titleAr: 'تحليل بقاء عملاء الاتصالات',
    repo: 'https://github.com/Ibrahim-Al-Jid/telco-churn-survival-analysis',
    stack: ['Python', 'lifelines', 'scikit-learn'],
    sections: [
      { heading: H.problem, body: {
        en: '"Will this customer churn in 12 months?" throws away time. Reframed as a time-to-event problem, the same data answers "when?" and "how does risk evolve?", which is what retention teams actually need.',
        ar: 'سؤال "هل سيرحل هذا العميل خلال 12 شهرًا؟" يهدر الزمن. بإعادة صياغته كمسألة زمن-حدث، تجيب البيانات نفسها عن "متى؟" و"كيف يتطور الخطر؟"، وهو ما تحتاجه فرق الاحتفاظ فعلًا.',
      }},
      { heading: H.role, body: { en: 'Solo: survival framing, Kaplan-Meier curves, Cox and AFT models, assumption checks, honest comparison to plain classifiers.', ar: 'عمل فردي: صياغة البقاء، منحنيات Kaplan-Meier، نماذج Cox وAFT، فحص الافتراضات، ومقارنة صادقة بالمصنفات العادية.' }},
      { heading: H.hard, body: {
        en: 'Knowing when the fancier tool loses. On a plain 12-month churn label, logistic regression ranks customers slightly better (ROC-AUC 0.909 vs 0.894 for Cox). The project says so, and explains what survival analysis buys you anyway: hazard interpretation over time.',
        ar: 'معرفة متى تخسر الأداة الأكثر تعقيدًا. على تصنيف رحيل بسيط خلال 12 شهرًا، يرتب الانحدار اللوجستي العملاء بشكل أفضل قليلًا (ROC-AUC 0.909 مقابل 0.894 لـ Cox). المشروع يقول ذلك صراحة، ويشرح ما يقدمه تحليل البقاء رغم ذلك: تفسير الخطر عبر الزمن.',
      }},
      { heading: H.result, body: { en: 'Held-out C-index 0.854 on 7,032 customers, with checked proportional-hazards assumptions.', ar: 'مؤشر توافق 0.854 على بيانات محجوزة لـ 7,032 عميلًا، مع فحص افتراضات الأخطار المتناسبة.' }},
      { heading: H.next, body: { en: 'Time-dependent covariates and competing risks.', ar: 'متغيرات زمنية ومخاطر متنافسة.' }},
    ],
  },
  {
    slug: 'campus',
    title: 'Student Management System',
    titleAr: 'نظام إدارة الطلاب',
    privateRepo: true,
    stack: ['FastAPI', 'React 19', 'TypeScript', 'PostgreSQL', 'nginx'],
    sections: [
      { heading: H.problem, body: {
        en: 'University administration software spans admissions, credit-hour registration, attendance, grading and finance, and every role must see exactly what it is allowed to see, in Arabic and English.',
        ar: 'برمجيات الإدارة الجامعية تمتد من القبول إلى التسجيل بالساعات المعتمدة والحضور والتقييم والمالية، ويجب أن يرى كل دور بالضبط ما يُسمح له به، بالعربية والإنجليزية.',
      }},
      { heading: H.role, body: { en: 'Solo build across the stack: schema, API, permissions, the React 19 client with full RTL, background workers, deployment.', ar: 'بناء فردي عبر المكدس كاملًا: المخطط والواجهة البرمجية والصلاحيات وعميل React 19 بدعم RTL كامل والعمال الخلفيون والنشر.' }},
      { heading: H.hard, body: {
        en: 'Eight roles with server-enforced permissions. Nothing security-relevant lives in the client; every rule is checked on the server, with MFA on top.',
        ar: 'ثمانية أدوار بصلاحيات مفروضة من الخادم. لا يعيش أي شيء متعلق بالأمان في العميل؛ كل قاعدة تُفحص على الخادم، مع مصادقة ثنائية فوقها.',
      }},
      { heading: H.result, body: { en: 'A working bilingual platform covering the full student lifecycle. Private repo; architecture walkthrough on request.', ar: 'منصة ثنائية اللغة تعمل وتغطي دورة حياة الطالب كاملة. مستودع خاص؛ جولة معمارية عند الطلب.' }},
      { heading: H.next, body: { en: 'Public demo deployment with seeded data.', ar: 'نشر نسخة عرض عامة ببيانات مزروعة.' }},
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
