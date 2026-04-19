export type Locale = 'en' | 'ko' | 'ja' | 'zh' | 'ar';

export const localeConfig: Record<Locale, { label: string; flag: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  en: { label: 'EN', flag: '🇺🇸', dir: 'ltr', htmlLang: 'en' },
  ko: { label: 'KO', flag: '🇰🇷', dir: 'ltr', htmlLang: 'ko' },
  ja: { label: 'JA', flag: '🇯🇵', dir: 'ltr', htmlLang: 'ja' },
  zh: { label: 'ZH', flag: '🇨🇳', dir: 'ltr', htmlLang: 'zh-Hans' },
  ar: { label: 'AR', flag: '🇸🇦', dir: 'rtl', htmlLang: 'ar' },
};

export const locales = Object.keys(localeConfig) as Locale[];

const translations = {
  en: {
    siteTitle: 'Mildo AI — Intelligent Companies',
    siteDesc: 'Mildo AI — We build multi-agent systems that run enterprises. Agent architecture, Knowledge Graphs, RAG pipelines.',
    nav: {
      ventures: 'Ventures',
      products: 'Products',
      services: 'Services',
      work: 'Work',
      contact: 'Contact',
      cta: "Let's Talk",
    },
    hero: {
      tagline: 'We build intelligent companies.',
      sub: 'AI consulting · smart farm · travel tech — one holding company.',
      highlight: '200+ agents. 6 knowledge graphs. 8 production projects.',
      cta1: 'Book a consultation',
      cta2: 'View case studies',
      stats: [
        { value: '200+', label: 'AI Agents Built' },
        { value: '6', label: 'Knowledge Graphs' },
        { value: '8', label: 'Production Projects' },
        { value: '$0', label: 'Infra per SaaS' },
      ],
    },
    ventures: {
      label: '// ventures',
      title: 'Portfolio of Companies',
      sub: 'Mildo AI is a holding company. We build and operate intelligent businesses — from AI consulting to agritech to travel.',
    },
    products: {
      label: '// products',
      title: 'Live Products',
      sub: 'AI-native products built in-house. Each one runs on the same agent infrastructure we sell.',
    },
    contact: {
      label: '// contact',
      title: "Let's build your AI agent system.",
      sub: "Book a free 15-minute consultation. We'll assess your use case and recommend the right architecture — no strings attached.",
      emailBtn: 'Email us',
      calendlyBtn: 'Book on Calendly',
    },
  },
  ko: {
    siteTitle: '밀도 AI — 지능형 기업',
    siteDesc: '밀도 AI — AI 컨설팅, 스마트팜, 트래블테크 홀딩컴퍼니. 멀티 에이전트 시스템 설계 및 구축.',
    nav: {
      ventures: '사업체',
      products: '제품',
      services: '서비스',
      work: '실적',
      contact: '문의',
      cta: '상담하기',
    },
    hero: {
      tagline: '지능형 기업을 만듭니다.',
      sub: 'AI 컨설팅 · 스마트팜 · 트래블테크 — 하나의 홀딩컴퍼니.',
      highlight: '200+ 에이전트. 6개 지식 그래프. 8개 프로덕션 프로젝트.',
      cta1: '무료 상담 예약',
      cta2: '사례 보기',
      stats: [
        { value: '200+', label: 'AI 에이전트' },
        { value: '6', label: '지식 그래프' },
        { value: '8', label: '프로덕션 프로젝트' },
        { value: '$0', label: 'SaaS 인프라 비용' },
      ],
    },
    ventures: {
      label: '// 사업체',
      title: '포트폴리오 사업체',
      sub: '밀도 AI는 홀딩컴퍼니입니다. AI 컨설팅부터 애그리테크, 트래블테크까지 지능형 비즈니스를 구축·운영합니다.',
    },
    products: {
      label: '// 제품',
      title: '운영 중인 제품',
      sub: '자체 개발한 AI 네이티브 제품들. 고객에게 판매하는 동일한 에이전트 인프라 위에서 운영됩니다.',
    },
    contact: {
      label: '// 문의',
      title: 'AI 에이전트 시스템을 함께 만들어요.',
      sub: '무료 15분 상담을 예약하세요. 사용 사례를 진단하고 최적의 아키텍처를 제안해드립니다.',
      emailBtn: '이메일 문의',
      calendlyBtn: '캘린들리 예약',
    },
  },
  ja: {
    siteTitle: 'Mildo AI — インテリジェント企業',
    siteDesc: 'Mildo AI — AIコンサルティング・スマート農場・トラベルテック。マルチエージェントシステムの設計と構築。',
    nav: {
      ventures: 'ベンチャー',
      products: 'プロダクト',
      services: 'サービス',
      work: '実績',
      contact: 'お問い合わせ',
      cta: '相談する',
    },
    hero: {
      tagline: 'インテリジェントな企業を構築します。',
      sub: 'AIコンサルティング · スマート農場 · トラベルテック — 1つのホールディング。',
      highlight: '200以上のエージェント。6つのナレッジグラフ。8つの本番プロジェクト。',
      cta1: '無料相談を予約',
      cta2: '事例を見る',
      stats: [
        { value: '200+', label: 'AIエージェント' },
        { value: '6', label: 'ナレッジグラフ' },
        { value: '8', label: '本番プロジェクト' },
        { value: '$0', label: 'SaaSインフラコスト' },
      ],
    },
    ventures: {
      label: '// ベンチャー',
      title: 'ポートフォリオ事業体',
      sub: 'Mildo AIはホールディングカンパニーです。AIコンサルティングからアグリテック、トラベルまで知的なビジネスを構築・運営します。',
    },
    products: {
      label: '// プロダクト',
      title: '稼働中のプロダクト',
      sub: '自社開発のAIネイティブプロダクト。顧客に提供するのと同じエージェントインフラで運用しています。',
    },
    contact: {
      label: '// お問い合わせ',
      title: 'AIエージェントシステムを一緒に作りましょう。',
      sub: '無料15分相談を予約してください。ユースケースを診断し、最適なアーキテクチャを提案します。',
      emailBtn: 'メールで問い合わせ',
      calendlyBtn: 'Calendlyで予約',
    },
  },
  zh: {
    siteTitle: 'Mildo AI — 智能企业',
    siteDesc: 'Mildo AI — AI咨询、智慧农场、旅行科技控股公司。多智能体系统设计与构建。',
    nav: {
      ventures: '业务',
      products: '产品',
      services: '服务',
      work: '案例',
      contact: '联系我们',
      cta: '立即咨询',
    },
    hero: {
      tagline: '我们构建智能企业。',
      sub: 'AI咨询 · 智慧农场 · 旅行科技 — 一个控股公司。',
      highlight: '200+个智能体。6个知识图谱。8个生产项目。',
      cta1: '预约免费咨询',
      cta2: '查看案例',
      stats: [
        { value: '200+', label: 'AI智能体' },
        { value: '6', label: '知识图谱' },
        { value: '8', label: '生产项目' },
        { value: '$0', label: 'SaaS基础设施成本' },
      ],
    },
    ventures: {
      label: '// 业务',
      title: '投资组合企业',
      sub: 'Mildo AI是一家控股公司。我们构建和运营智能业务——从AI咨询到农业科技再到旅行。',
    },
    products: {
      label: '// 产品',
      title: '在运行的产品',
      sub: '自主研发的AI原生产品。每个产品都运行在我们向客户销售的同一代理基础设施上。',
    },
    contact: {
      label: '// 联系我们',
      title: '一起构建您的AI智能体系统。',
      sub: '预约免费15分钟咨询。我们将评估您的使用场景并推荐合适的架构——无任何附加条件。',
      emailBtn: '发送邮件',
      calendlyBtn: '通过Calendly预约',
    },
  },
  ar: {
    siteTitle: 'ميلدو للذكاء الاصطناعي — شركات ذكية',
    siteDesc: 'ميلدو للذكاء الاصطناعي — نبني أنظمة متعددة الوكلاء لإدارة المؤسسات. بنية الوكلاء، الرسوم البيانية للمعرفة، خطوط أنابيب RAG.',
    nav: {
      ventures: 'المشاريع',
      products: 'المنتجات',
      services: 'الخدمات',
      work: 'أعمالنا',
      contact: 'تواصل معنا',
      cta: 'تحدث معنا',
    },
    hero: {
      tagline: 'نبني شركات ذكية.',
      sub: 'استشارات الذكاء الاصطناعي · المزرعة الذكية · تقنية السفر — شركة قابضة واحدة.',
      highlight: '200+ وكيل ذكاء اصطناعي. 6 رسوم بيانية للمعرفة. 8 مشاريع إنتاجية.',
      cta1: 'احجز استشارة مجانية',
      cta2: 'عرض دراسات الحالة',
      stats: [
        { value: '200+', label: 'وكيل ذكاء اصطناعي' },
        { value: '6', label: 'رسوم بيانية للمعرفة' },
        { value: '8', label: 'مشاريع إنتاجية' },
        { value: '$0', label: 'تكلفة البنية التحتية' },
      ],
    },
    ventures: {
      label: '// المشاريع',
      title: 'محفظة الشركات',
      sub: 'ميلدو للذكاء الاصطناعي شركة قابضة. نبني وندير الأعمال الذكية — من استشارات الذكاء الاصطناعي إلى تقنية الزراعة والسفر.',
    },
    products: {
      label: '// المنتجات',
      title: 'المنتجات الحية',
      sub: 'منتجات أصلية للذكاء الاصطناعي مبنية داخلياً. كل منها يعمل على نفس بنية الوكلاء التي نبيعها.',
    },
    contact: {
      label: '// تواصل معنا',
      title: 'لنبني نظام وكيل الذكاء الاصطناعي الخاص بك.',
      sub: 'احجز استشارة مجانية لمدة 15 دقيقة. سنقيّم حالة الاستخدام لديك ونوصي بالبنية المناسبة — بدون أي التزامات.',
      emailBtn: 'راسلنا',
      calendlyBtn: 'الحجز عبر Calendly',
    },
  },
};

export type T = typeof translations.en;

export function t(locale: Locale): T {
  return (translations[locale] ?? translations.en) as T;
}

export function getLocalePath(locale: Locale, path = '/'): string {
  const cleanPath = path.replace(/^\/(en|ko|ja|zh|ar)/, '') || '/';
  return locale === 'en' ? cleanPath : `/${locale}${cleanPath === '/' ? '/' : cleanPath}`;
}

export function detectLocale(pathname: string): Locale {
  const match = pathname.match(/^\/(ko|ja|zh|ar)(\/|$)/);
  return match ? (match[1] as Locale) : 'en';
}
