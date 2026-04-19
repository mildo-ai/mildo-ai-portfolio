export type Locale = 'en' | 'ko' | 'ja' | 'zh' | 'ar';

export const localeConfig: Record<Locale, { label: string; short: string; flag: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  en: { label: 'English',  short: 'EN', flag: '🇺🇸', dir: 'ltr', htmlLang: 'en' },
  ko: { label: '한국어',    short: 'KO', flag: '🇰🇷', dir: 'ltr', htmlLang: 'ko' },
  ja: { label: '日本語',   short: 'JA', flag: '🇯🇵', dir: 'ltr', htmlLang: 'ja' },
  zh: { label: '中文',     short: 'ZH', flag: '🇨🇳', dir: 'ltr', htmlLang: 'zh-Hans' },
  ar: { label: 'العربية', short: 'AR', flag: '🇸🇦', dir: 'rtl', htmlLang: 'ar' },
};

export const locales = Object.keys(localeConfig) as Locale[];

const translations = {
  en: {
    siteTitle: 'Mildo AI — Intelligent Companies',
    siteDesc: 'Mildo AI — We build multi-agent systems that run enterprises. Agent architecture, Knowledge Graphs, RAG pipelines.',
    nav: {
      ventures: 'Ventures', products: 'Products', services: 'Services',
      work: 'Work', contact: 'Contact', cta: "Let's Talk",
    },
    hero: {
      tagline: 'We build intelligent companies.',
      sub: 'AI consulting · smart farm · travel tech — one holding company.',
      highlight: '200+ agents. 6 knowledge graphs. 8 production projects.',
      cta1: 'Book a consultation', cta2: 'View case studies',
      stats: [
        { value: '200+', label: 'AI Agents Built' },
        { value: '6',    label: 'Knowledge Graphs' },
        { value: '8',    label: 'Production Projects' },
        { value: '$0',   label: 'Infra per SaaS' },
      ],
    },
    ventures: {
      label: '// ventures', title: 'Portfolio of Companies',
      sub: 'Mildo AI is a holding company. We build and operate intelligent businesses — from AI consulting to agritech to travel.',
      viewEntity: 'View Entity',
      items: [
        {
          statusLabel: 'OPERATING',
          name: 'Mildo AI',
          tagline: 'Agent Architecture & Consulting',
          description: 'We design and build multi-agent systems for enterprises. From single workflow automation to full-company AI orchestration across 9 departments.',
          metrics: ['200+ agents shipped', '8 production projects', '4 LLM tiers'],
        },
        {
          statusLabel: 'BUILDING',
          name: '밀도 농업회사법인',
          tagline: 'Premium San Marzano Smart Farm',
          description: 'Controlled-environment agriculture in Sangju, Korea. Data-driven cultivation of authentic San Marzano tomatoes with AI-optimized nutrient systems and IoT sensor arrays.',
          metrics: ['1,000평 greenhouse', 'Sangju, Korea', 'First harvest 2027'],
        },
        {
          statusLabel: 'OPERATING',
          name: 'CruisePick',
          tagline: 'AI-Powered Travel Intelligence',
          description: 'Travel tech platform leveraging AI agents for cruise and tour curation. Knowledge graph-backed recommendation systems for the premium travel segment.',
          metrics: ['AI-curated', 'KG-backed', 'Multi-agent'],
        },
      ],
    },
    products: {
      label: '// products', title: 'Live Products',
      sub: 'AI-native products built in-house. Each one runs on the same agent infrastructure we sell.',
      explore: 'Explore', comingSoon: 'Coming soon',
      items: [
        {
          name: 'SubSwap', tagline: 'Global Ingredient Substitute Engine',
          description: '1,000+ ingredients, 3,005 substitutes, 10 languages. Zero server cost. Ingredient substitution powered by semantic analysis.',
        },
        {
          name: 'CropCast', tagline: 'Agricultural Intelligence Platform',
          description: 'AI-powered crop market forecasting. 12 futures, 53 agents, daily updates.',
        },
        {
          name: '@fridgey_raid', tagline: "Chef's Assistant — Food Intelligence",
          description: 'Threads channel powered by Neo4j food KG + KAMIS price crawlers. Confidence-tiered content pipeline.',
        },
        {
          name: '@pourandpair', tagline: 'Pour & Pair — Beverage Intelligence',
          description: 'Sommelier AI for hyper-specific wine and food pairing. Drink knowledge graph with sommelier-grade intelligence.',
        },
        {
          name: 'Tessera', tagline: 'Art Intelligence for Professionals',
          description: 'MCP-powered knowledge graph for curators, gallerists & collectors. CIDOC CRM ontology.',
        },
      ],
    },
    contact: {
      label: '// contact', title: "Let's build your AI agent system.",
      sub: "Book a free 15-minute consultation. We'll assess your use case and recommend the right architecture — no strings attached.",
      emailBtn: 'Email us', calendlyBtn: 'Book on Calendly',
    },
  },

  ko: {
    siteTitle: '밀도 AI — 지능형 기업',
    siteDesc: '밀도 AI — AI 컨설팅, 스마트팜, 트래블테크 홀딩컴퍼니. 멀티 에이전트 시스템 설계 및 구축.',
    nav: {
      ventures: '사업체', products: '제품', services: '서비스',
      work: '실적', contact: '문의', cta: '상담하기',
    },
    hero: {
      tagline: '지능형 기업을 만듭니다.',
      sub: 'AI 컨설팅 · 스마트팜 · 트래블테크 — 하나의 홀딩컴퍼니.',
      highlight: '200+ 에이전트. 6개 지식 그래프. 8개 프로덕션 프로젝트.',
      cta1: '무료 상담 예약', cta2: '사례 보기',
      stats: [
        { value: '200+', label: 'AI 에이전트' },
        { value: '6',    label: '지식 그래프' },
        { value: '8',    label: '프로덕션 프로젝트' },
        { value: '$0',   label: 'SaaS 인프라 비용' },
      ],
    },
    ventures: {
      label: '// 사업체', title: '포트폴리오 사업체',
      sub: '밀도 AI는 홀딩컴퍼니입니다. AI 컨설팅부터 애그리테크, 트래블테크까지 지능형 비즈니스를 구축·운영합니다.',
      viewEntity: '자세히 보기',
      items: [
        {
          statusLabel: '운영중',
          name: '밀도 AI',
          tagline: '에이전트 아키텍처 & 컨설팅',
          description: '기업을 위한 멀티 에이전트 시스템을 설계·구축합니다. 단일 워크플로 자동화부터 9개 부서 전사 AI 오케스트레이션까지 지원합니다.',
          metrics: ['200+ 에이전트 납품', '8개 프로덕션 프로젝트', '4단계 LLM 티어'],
        },
        {
          statusLabel: '구축중',
          name: '밀도 농업회사법인',
          tagline: '프리미엄 산 마르자노 스마트팜',
          description: '경북 상주 스마트팜 혁신밸리 인근의 첨단 환경제어 농업. AI 양액 최적화와 IoT 센서 어레이로 정통 산 마르자노 토마토를 데이터 기반으로 재배합니다.',
          metrics: ['1,000평 온실', '경북 상주', '2027년 첫 수확'],
        },
        {
          statusLabel: '운영중',
          name: 'CruisePick',
          tagline: 'AI 기반 여행 인텔리전스',
          description: 'AI 에이전트로 크루즈·투어를 큐레이션하는 트래블테크 플랫폼. 지식 그래프 기반 추천 시스템으로 프리미엄 여행 시장을 공략합니다.',
          metrics: ['AI 큐레이션', 'KG 기반', '멀티 에이전트'],
        },
      ],
    },
    products: {
      label: '// 제품', title: '운영 중인 제품',
      sub: '자체 개발한 AI 네이티브 제품들. 고객에게 판매하는 동일한 에이전트 인프라 위에서 운영됩니다.',
      explore: '탐색하기', comingSoon: '출시 예정',
      items: [
        {
          name: 'SubSwap', tagline: '글로벌 식재료 대체재 검색 엔진',
          description: '1,000+ 재료, 3,005개 대체재, 10개 언어. 서버 비용 제로. 시맨틱 분석 기반 식재료 대체재 검색.',
        },
        {
          name: 'CropCast', tagline: '농업 인텔리전스 플랫폼',
          description: 'AI 기반 농산물 시장 예측. 12개 선물, 53개 에이전트, 매일 업데이트.',
        },
        {
          name: '@fridgey_raid', tagline: '셰프 어시스턴트 — 식재료 인텔리전스',
          description: 'Neo4j 식품 지식 그래프 + KAMIS 가격 크롤러로 운영되는 Threads 채널. 신뢰도 등급 콘텐츠 파이프라인.',
        },
        {
          name: '@pourandpair', tagline: '푸어 & 페어 — 음료 인텔리전스',
          description: '초정밀 와인·음식 페어링을 위한 소믈리에 AI. 소믈리에 수준의 음료 지식 그래프.',
        },
        {
          name: 'Tessera', tagline: '전문가를 위한 아트 인텔리전스',
          description: '큐레이터, 갤러리스트, 컬렉터를 위한 MCP 기반 지식 그래프. CIDOC CRM 온톨로지.',
        },
      ],
    },
    contact: {
      label: '// 문의', title: 'AI 에이전트 시스템을 함께 만들어요.',
      sub: '무료 15분 상담을 예약하세요. 사용 사례를 진단하고 최적의 아키텍처를 제안해드립니다.',
      emailBtn: '이메일 문의', calendlyBtn: '캘린들리 예약',
    },
  },

  ja: {
    siteTitle: 'Mildo AI — インテリジェント企業',
    siteDesc: 'Mildo AI — AIコンサルティング・スマート農場・トラベルテック。マルチエージェントシステムの設計と構築。',
    nav: {
      ventures: 'ベンチャー', products: 'プロダクト', services: 'サービス',
      work: '実績', contact: 'お問い合わせ', cta: '相談する',
    },
    hero: {
      tagline: 'インテリジェントな企業を構築します。',
      sub: 'AIコンサルティング · スマート農場 · トラベルテック — 1つのホールディング。',
      highlight: '200以上のエージェント。6つのナレッジグラフ。8つの本番プロジェクト。',
      cta1: '無料相談を予約', cta2: '事例を見る',
      stats: [
        { value: '200+', label: 'AIエージェント' },
        { value: '6',    label: 'ナレッジグラフ' },
        { value: '8',    label: '本番プロジェクト' },
        { value: '$0',   label: 'SaaSインフラコスト' },
      ],
    },
    ventures: {
      label: '// ベンチャー', title: 'ポートフォリオ事業体',
      sub: 'Mildo AIはホールディングカンパニーです。AIコンサルティングからアグリテック、トラベルまで知的なビジネスを構築・運営します。',
      viewEntity: '詳細を見る',
      items: [
        {
          statusLabel: '稼働中',
          name: 'Mildo AI',
          tagline: 'エージェントアーキテクチャ & コンサルティング',
          description: '企業向けマルチエージェントシステムを設計・構築します。単一ワークフロー自動化から9部門全社AIオーケストレーションまで対応。',
          metrics: ['200以上のエージェント納品', '8つの本番プロジェクト', '4段階LLMティア'],
        },
        {
          statusLabel: '構築中',
          name: '밀도 農業会社法人',
          tagline: 'プレミアムサンマルツァーノスマート農場',
          description: '韓国尚州での環境制御型農業。AIによる養液最適化とIoTセンサーで本物のサンマルツァーノトマトをデータドリブンに栽培。',
          metrics: ['1,000坪の温室', '韓国・尚州', '2027年初収穫'],
        },
        {
          statusLabel: '稼働中',
          name: 'CruisePick',
          tagline: 'AI搭載トラベルインテリジェンス',
          description: 'AIエージェントでクルーズ・ツアーをキュレーションするトラベルテックプラットフォーム。ナレッジグラフ対応推薦システム。',
          metrics: ['AIキュレーション', 'KG対応', 'マルチエージェント'],
        },
      ],
    },
    products: {
      label: '// プロダクト', title: '稼働中のプロダクト',
      sub: '自社開発のAIネイティブプロダクト。顧客に提供するのと同じエージェントインフラで運用。',
      explore: '詳しく見る', comingSoon: '近日公開',
      items: [
        {
          name: 'SubSwap', tagline: 'グローバル食材代替エンジン',
          description: '1,000以上の食材、3,005の代替品、10言語対応。サーバーコストゼロ。意味解析による食材代替検索。',
        },
        {
          name: 'CropCast', tagline: '農業インテリジェンスプラットフォーム',
          description: 'AI駆動の農産物市場予測。12先物、53エージェント、毎日更新。',
        },
        {
          name: '@fridgey_raid', tagline: 'シェフアシスタント — 食品インテリジェンス',
          description: 'Neo4j食品ナレッジグラフ + KAMIS価格クローラーで動くThreadsチャンネル。信頼度ティア別コンテンツパイプライン。',
        },
        {
          name: '@pourandpair', tagline: 'プア&ペア — 飲料インテリジェンス',
          description: 'ワインと料理の超精密ペアリングAI。ソムリエグレードの飲料ナレッジグラフ。',
        },
        {
          name: 'Tessera', tagline: 'プロフェッショナル向けアートAI',
          description: 'キュレーター、ギャラリスト、コレクター向けMCP搭載ナレッジグラフ。CIDOC CRMオントロジー。',
        },
      ],
    },
    contact: {
      label: '// お問い合わせ', title: 'AIエージェントシステムを一緒に作りましょう。',
      sub: '無料15分相談を予約してください。ユースケースを診断し、最適なアーキテクチャを提案します。',
      emailBtn: 'メールで問い合わせ', calendlyBtn: 'Calendlyで予約',
    },
  },

  zh: {
    siteTitle: 'Mildo AI — 智能企业',
    siteDesc: 'Mildo AI — AI咨询、智慧农场、旅行科技控股公司。多智能体系统设计与构建。',
    nav: {
      ventures: '业务', products: '产品', services: '服务',
      work: '案例', contact: '联系我们', cta: '立即咨询',
    },
    hero: {
      tagline: '我们构建智能企业。',
      sub: 'AI咨询 · 智慧农场 · 旅行科技 — 一个控股公司。',
      highlight: '200+个智能体。6个知识图谱。8个生产项目。',
      cta1: '预约免费咨询', cta2: '查看案例',
      stats: [
        { value: '200+', label: 'AI智能体' },
        { value: '6',    label: '知识图谱' },
        { value: '8',    label: '生产项目' },
        { value: '$0',   label: 'SaaS基础设施成本' },
      ],
    },
    ventures: {
      label: '// 业务', title: '投资组合企业',
      sub: 'Mildo AI是一家控股公司。我们构建和运营智能业务——从AI咨询到农业科技再到旅行。',
      viewEntity: '查看详情',
      items: [
        {
          statusLabel: '运营中',
          name: 'Mildo AI',
          tagline: '智能体架构与咨询',
          description: '为企业设计和构建多智能体系统。从单一工作流自动化到跨9个部门的全公司AI编排。',
          metrics: ['200+个智能体交付', '8个生产项目', '4级LLM体系'],
        },
        {
          statusLabel: '建设中',
          name: '밀도 农业公司',
          tagline: '优质圣马尔扎诺智慧农场',
          description: '韩国尚州的环境控制农业。利用AI优化营养液和IoT传感器阵列，数据驱动种植正宗圣马尔扎诺番茄。',
          metrics: ['1,000坪温室', '韩国庆北尚州', '2027年首次收获'],
        },
        {
          statusLabel: '运营中',
          name: 'CruisePick',
          tagline: 'AI驱动旅行智能',
          description: '利用AI智能体进行邮轮和旅游策划的旅行科技平台。知识图谱支持的推荐系统，专注高端旅行市场。',
          metrics: ['AI策划', '知识图谱支持', '多智能体'],
        },
      ],
    },
    products: {
      label: '// 产品', title: '在运行的产品',
      sub: '自主研发的AI原生产品。每个产品都运行在我们向客户销售的同一代理基础设施上。',
      explore: '探索', comingSoon: '即将推出',
      items: [
        {
          name: 'SubSwap', tagline: '全球食材替代搜索引擎',
          description: '1,000+种食材，3,005种替代品，10种语言。零服务器成本。语义分析驱动的食材替代搜索。',
        },
        {
          name: 'CropCast', tagline: '农业智能平台',
          description: 'AI驱动的农产品市场预测。12个期货，53个智能体，每日更新。',
        },
        {
          name: '@fridgey_raid', tagline: '厨师助手 — 食品情报',
          description: '由Neo4j食品知识图谱 + KAMIS价格爬虫驱动的Threads频道。置信度分级内容流水线。',
        },
        {
          name: '@pourandpair', tagline: '倒酒配对 — 饮料智能',
          description: '超精准葡萄酒与美食配对的侍酒师AI。具备侍酒师级别智能的饮料知识图谱。',
        },
        {
          name: 'Tessera', tagline: '专业人士的艺术智能',
          description: '为策展人、画廊主和藏家打造的MCP知识图谱。CIDOC CRM本体。',
        },
      ],
    },
    contact: {
      label: '// 联系我们', title: '一起构建您的AI智能体系统。',
      sub: '预约免费15分钟咨询。我们将评估您的使用场景并推荐合适的架构——无任何附加条件。',
      emailBtn: '发送邮件', calendlyBtn: '通过Calendly预约',
    },
  },

  ar: {
    siteTitle: 'ميلدو للذكاء الاصطناعي — شركات ذكية',
    siteDesc: 'ميلدو للذكاء الاصطناعي — نبني أنظمة متعددة الوكلاء لإدارة المؤسسات.',
    nav: {
      ventures: 'المشاريع', products: 'المنتجات', services: 'الخدمات',
      work: 'أعمالنا', contact: 'تواصل معنا', cta: 'تحدث معنا',
    },
    hero: {
      tagline: 'نبني شركات ذكية.',
      sub: 'استشارات الذكاء الاصطناعي · المزرعة الذكية · تقنية السفر — شركة قابضة واحدة.',
      highlight: '200+ وكيل ذكاء اصطناعي. 6 رسوم بيانية للمعرفة. 8 مشاريع إنتاجية.',
      cta1: 'احجز استشارة مجانية', cta2: 'عرض دراسات الحالة',
      stats: [
        { value: '200+', label: 'وكيل ذكاء اصطناعي' },
        { value: '6',    label: 'رسوم بيانية للمعرفة' },
        { value: '8',    label: 'مشاريع إنتاجية' },
        { value: '$0',   label: 'تكلفة البنية التحتية' },
      ],
    },
    ventures: {
      label: '// المشاريع', title: 'محفظة الشركات',
      sub: 'ميلدو للذكاء الاصطناعي شركة قابضة. نبني وندير الأعمال الذكية — من استشارات الذكاء الاصطناعي إلى تقنية الزراعة والسفر.',
      viewEntity: 'عرض التفاصيل',
      items: [
        {
          statusLabel: 'نشط',
          name: 'Mildo AI',
          tagline: 'بنية الوكلاء والاستشارات',
          description: 'نصمم وننشئ أنظمة متعددة الوكلاء للمؤسسات. من أتمتة سير العمل الفردي إلى تنسيق الذكاء الاصطناعي الكامل عبر 9 أقسام.',
          metrics: ['200+ وكيل تم تسليمه', '8 مشاريع إنتاجية', '4 مستويات LLM'],
        },
        {
          statusLabel: 'قيد الإنشاء',
          name: 'شركة ميلدو الزراعية',
          tagline: 'مزرعة ذكية فاخرة للطماطم',
          description: 'زراعة محكومة البيئة في سانغجو، كوريا. زراعة طماطم سان مارزانو الأصيلة بتحسين الذكاء الاصطناعي وأنظمة المستشعرات IoT.',
          metrics: ['1,000 بيونج دفيئة', 'سانغجو، كوريا', 'أول حصاد 2027'],
        },
        {
          statusLabel: 'نشط',
          name: 'CruisePick',
          tagline: 'ذكاء السفر بالذكاء الاصطناعي',
          description: 'منصة تقنية سفر تستخدم وكلاء الذكاء الاصطناعي لتنظيم رحلات الكروز والجولات. أنظمة توصية مدعومة بالرسم البياني للمعرفة.',
          metrics: ['منظمة بالذكاء الاصطناعي', 'مدعومة بالمعرفة', 'متعدد الوكلاء'],
        },
      ],
    },
    products: {
      label: '// المنتجات', title: 'المنتجات الحية',
      sub: 'منتجات أصلية للذكاء الاصطناعي مبنية داخلياً. كل منها يعمل على نفس بنية الوكلاء التي نبيعها.',
      explore: 'استكشف', comingSoon: 'قريباً',
      items: [
        {
          name: 'SubSwap', tagline: 'محرك بديل المكونات العالمي',
          description: '1,000+ مكون، 3,005 بديل، 10 لغات. تكلفة خادم صفر. بحث بديل المكونات بالتحليل الدلالي.',
        },
        {
          name: 'CropCast', tagline: 'منصة الذكاء الزراعي',
          description: 'توقعات سوق المحاصيل بالذكاء الاصطناعي. 12 عقداً آجلاً، 53 وكيلاً، تحديثات يومية.',
        },
        {
          name: '@fridgey_raid', tagline: 'مساعد الطاهي — ذكاء الغذاء',
          description: 'قناة Threads مدعومة بمعرفة Neo4j للأغذية + زواحف أسعار KAMIS. خط إنتاج محتوى متدرج الثقة.',
        },
        {
          name: '@pourandpair', tagline: 'تعادل وتزاوج — ذكاء المشروبات',
          description: 'ذكاء اصطناعي لإقران النبيذ والطعام بدقة فائقة. رسم بياني لمعرفة المشروبات بمستوى سوميلييه.',
        },
        {
          name: 'Tessera', tagline: 'ذكاء الفن للمحترفين',
          description: 'رسم بياني للمعرفة مدعوم بـ MCP للقيّمين والغاليريين والهواة. أنطولوجيا CIDOC CRM.',
        },
      ],
    },
    contact: {
      label: '// تواصل معنا', title: 'لنبني نظام وكيل الذكاء الاصطناعي الخاص بك.',
      sub: 'احجز استشارة مجانية لمدة 15 دقيقة. سنقيّم حالة الاستخدام لديك ونوصي بالبنية المناسبة.',
      emailBtn: 'راسلنا', calendlyBtn: 'الحجز عبر Calendly',
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
