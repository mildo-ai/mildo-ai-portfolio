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
    services: {
      label: '// services', title: 'Engagement Models',
      sub: 'From a single chatbot to a full enterprise agent ecosystem. Pick the scope that fits — we handle the rest.',
      ongoingLabel: 'Ongoing',
      packages: [
        { name: 'Agent Starter',    timeline: '1 ~ 2 weeks',   description: 'Single AI agent or chatbot with RAG pipeline. Perfect for automating one workflow or building an intelligent assistant.',
          features: ['Custom AI agent / chatbot', 'RAG with your documents', 'API integration', 'Deployment & handoff'] },
        { name: 'Agent System',     timeline: '4 ~ 8 weeks',   description: 'Multi-agent orchestration with knowledge graph integration. For teams that need agents that collaborate and reason.',
          features: ['Multi-agent orchestration', 'Knowledge graph (Neo4j)', 'Tool-use & function calling', 'Monitoring dashboard', 'Documentation & training'] },
        { name: 'Agent Enterprise', timeline: '8 ~ 16 weeks',  description: 'Full enterprise AI infrastructure. Multiple agent teams, system integration, CI/CD, and production hardening.',
          features: ['Enterprise-grade architecture', 'Multiple agent teams', 'System integration (ERP, CRM)', 'CI/CD & observability', 'SLA & ongoing support'] },
        { name: 'Retainer',         timeline: 'Ongoing',        description: 'Continuous AI system maintenance, optimization, and evolution. Keep your agents sharp and your costs down.',
          features: ['Performance monitoring', 'Prompt & model optimization', 'New feature development', 'Priority support'] },
      ],
    },
    caseStudies: {
      label: '// case_studies', title: 'Selected Work',
      sub: 'Real systems in production. Not demos, not prototypes.',
      liveLabel: 'live',
      cases: [
        { subtitle: 'Plugin-style installer for 200+ agents across 8 projects',
          description: 'Built a unified agent management hub inspired by DGM-H (HyperAgents). Profile-based installer deploys agent systems to any project in one command. Integrates RTK (60-90% token savings), Slack MCP, Obsidian CLI, Codex Plugin, and Google Stitch. DGM-style archive tracks agent performance for cross-project transfer learning.',
          metricLabels: ['Agents', 'Projects', 'Integrations', 'Token Savings'] },
        { subtitle: 'Full-company AI for an agricultural tech startup',
          description: 'Designed and built a 47-agent system spanning 9 departments — strategy, legal, finance, tax, production, R&D, marketing, sales, facility. CEO orchestrator routes to Directors, who delegate to sub-agents. RALPH loops enforce quality with Worker → Reviewer → SHIP/REVISE cycles. 4 LLM tiers minimize cost.',
          metricLabels: ['Agents', 'Departments', 'LLM Tiers', 'BG Workers'] },
        { subtitle: 'AI-powered crop market & weather intelligence',
          description: 'Full-stack agricultural intelligence platform combining real-time crop price data, weather forecasting, and market analysis. Agent-driven data pipeline ingests government agricultural data sources, processes with LLM intelligence layers, and delivers actionable farm-business insights.',
          metricLabels: ['Data Sources', 'Crop Types', 'Update Freq', 'Infra Cost'] },
        { subtitle: 'Dual Neo4j knowledge graphs powering Threads AI channels',
          description: 'Two production Threads channels (@fridgey_raid, @pourandpair) powered by Neo4j knowledge graphs and multi-agent content pipelines. Strategist → Writer → Editor agent chain generates confidence-tiered food/beverage intelligence. Crawlers ingest KAMIS wholesale prices, weather, and aT distribution data daily.',
          metricLabels: ['KG Domains', 'Graph Nodes', 'Live Channels', 'Data Sources'] },
        { subtitle: 'Full-stack SaaS from zero to production in a weekend',
          description: 'Shipped a live product in 2 days: 1,000+ ingredients, 3,005 substitutes, 10 languages, zero server cost. React + TypeScript + Fuse.js on Cloudflare Pages. MildoCTA integration drives brand awareness for the farm startup. SEO-optimized with affiliate monetization roadmap.',
          metricLabels: ['Ingredients', 'Substitutes', 'Languages', 'Infra Cost'] },
      ],
    },
    techStack: { label: '// tech_stack', title: 'Tools of the Trade' },
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
    services: {
      label: '// 서비스', title: '서비스 모델',
      sub: '단일 챗봇부터 엔터프라이즈 에이전트 생태계까지. 필요한 범위를 선택하시면 나머지는 저희가 처리합니다.',
      ongoingLabel: '상시',
      packages: [
        { name: 'Agent Starter',    timeline: '1 ~ 2주',   description: 'RAG 파이프라인이 포함된 단일 AI 에이전트 또는 챗봇. 워크플로 자동화 또는 지능형 어시스턴트 구축에 최적.',
          features: ['커스텀 AI 에이전트 / 챗봇', '문서 기반 RAG', 'API 연동', '배포 및 인수인계'] },
        { name: 'Agent System',     timeline: '4 ~ 8주',   description: '지식 그래프가 통합된 멀티 에이전트 오케스트레이션. 에이전트 간 협업과 추론이 필요한 팀을 위한 솔루션.',
          features: ['멀티 에이전트 오케스트레이션', '지식 그래프 (Neo4j)', '툴 사용 & 함수 호출', '모니터링 대시보드', '문서화 & 교육'] },
        { name: 'Agent Enterprise', timeline: '8 ~ 16주',  description: '완전한 엔터프라이즈 AI 인프라. 다중 에이전트 팀, 시스템 통합, CI/CD, 프로덕션 하드닝.',
          features: ['엔터프라이즈급 아키텍처', '다중 에이전트 팀', '시스템 통합 (ERP, CRM)', 'CI/CD & 옵저버빌리티', 'SLA & 지속 지원'] },
        { name: 'Retainer',         timeline: '상시',       description: '지속적인 AI 시스템 유지보수, 최적화, 발전. 에이전트를 날카롭게 유지하고 비용을 절감합니다.',
          features: ['성능 모니터링', '프롬프트 & 모델 최적화', '신규 기능 개발', '우선 지원'] },
      ],
    },
    caseStudies: {
      label: '// 사례', title: '주요 실적',
      sub: '실제 프로덕션 시스템. 데모나 프로토타입이 아닙니다.',
      liveLabel: '운영중',
      cases: [
        { subtitle: '8개 프로젝트에 200+ 에이전트를 배포하는 플러그인 설치 시스템',
          description: 'DGM-H(HyperAgents)에서 영감을 받은 통합 에이전트 관리 허브. 프로필 기반 설치로 에이전트 시스템을 명령어 하나로 모든 프로젝트에 배포. RTK(토큰 60~90% 절감), Slack MCP, Obsidian CLI, Codex Plugin, Google Stitch 통합. DGM 방식 아카이브로 크로스 프로젝트 전이 학습 추적.',
          metricLabels: ['에이전트', '프로젝트', '통합', '토큰 절감'] },
        { subtitle: '농업 기술 스타트업을 위한 전사 AI 시스템',
          description: '전략, 법무, 재무, 세무, 생산, R&D, 마케팅, 영업, 시설 등 9개 부서를 아우르는 47개 에이전트 시스템 설계·구축. CEO 오케스트레이터가 본부장에게 라우팅하고, 본부장이 하위 에이전트에 위임. RALPH 루프가 Worker → Reviewer → SHIP/REVISE 사이클로 품질을 보장. 4단계 LLM 티어로 비용 최소화.',
          metricLabels: ['에이전트', '부서', 'LLM 티어', '백그라운드 에이전트'] },
        { subtitle: 'AI 기반 농산물 시장 & 날씨 인텔리전스',
          description: '실시간 농산물 가격 데이터, 날씨 예측, 시장 분석을 결합한 풀스택 농업 인텔리전스 플랫폼. 에이전트 기반 데이터 파이프라인이 정부 농업 데이터를 수집하고, LLM 인텔리전스 레이어로 처리해 농업 비즈니스 인사이트를 제공합니다.',
          metricLabels: ['데이터 소스', '작물 종류', '업데이트 주기', '인프라 비용'] },
        { subtitle: 'Threads AI 채널을 구동하는 이중 Neo4j 지식 그래프',
          description: 'Neo4j 지식 그래프와 멀티 에이전트 콘텐츠 파이프라인으로 운영되는 두 개의 프로덕션 Threads 채널. 전략가 → 작가 → 편집자 에이전트 체인이 신뢰도 등급별 식음료 인텔리전스 생성. KAMIS 도매가, 날씨, aT 유통 데이터를 매일 수집.',
          metricLabels: ['KG 도메인', '그래프 노드', '라이브 채널', '데이터 소스'] },
        { subtitle: '주말 이틀 만에 제로에서 프로덕션까지',
          description: '이틀 만에 라이브 제품 출시: 1,000+ 재료, 3,005개 대체재, 10개 언어, 서버 비용 제로. Cloudflare Pages에 React + TypeScript + Fuse.js. MildoCTA 통합으로 농업 스타트업 브랜드 인지도 확보. SEO 최적화 및 제휴 수익화 로드맵.',
          metricLabels: ['재료', '대체재', '언어', '인프라 비용'] },
      ],
    },
    techStack: { label: '// 기술스택', title: '사용 기술' },
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
    services: {
      label: '// サービス', title: 'エンゲージメントモデル',
      sub: '単一チャットボットからフルエンタープライズエージェントエコシステムまで。適切なスコープを選べば、あとは私たちに任せてください。',
      ongoingLabel: '継続',
      packages: [
        { name: 'Agent Starter',    timeline: '1〜2週間',   description: 'RAGパイプライン付きの単一AIエージェントまたはチャットボット。ワークフロー自動化や知的アシスタント構築に最適。',
          features: ['カスタムAIエージェント/チャットボット', 'ドキュメントRAG', 'API統合', 'デプロイ & 引き渡し'] },
        { name: 'Agent System',     timeline: '4〜8週間',   description: 'ナレッジグラフ統合によるマルチエージェントオーケストレーション。協調・推論するエージェントが必要なチームのためのソリューション。',
          features: ['マルチエージェントオーケストレーション', 'ナレッジグラフ (Neo4j)', 'ツール使用 & 関数呼び出し', 'モニタリングダッシュボード', 'ドキュメント & トレーニング'] },
        { name: 'Agent Enterprise', timeline: '8〜16週間',  description: 'フルエンタープライズAIインフラ。複数のエージェントチーム、システム統合、CI/CD、本番環境強化。',
          features: ['エンタープライズグレードアーキテクチャ', '複数エージェントチーム', 'システム統合 (ERP, CRM)', 'CI/CD & オブザーバビリティ', 'SLA & 継続サポート'] },
        { name: 'Retainer',         timeline: '継続',       description: '継続的なAIシステムの保守・最適化・進化。エージェントを鋭く保ち、コストを削減します。',
          features: ['パフォーマンスモニタリング', 'プロンプト & モデル最適化', '新機能開発', '優先サポート'] },
      ],
    },
    caseStudies: {
      label: '// 事例', title: '選択された実績',
      sub: '本番稼働中のシステム。デモでも試作品でもありません。',
      liveLabel: '稼働中',
      cases: [
        { subtitle: '8プロジェクトに200以上のエージェントをデプロイするプラグイン型インストーラー',
          description: 'DGM-H(HyperAgents)に着想を得た統合エージェント管理ハブを構築。プロファイルベースのインストーラーが1コマンドでエージェントシステムをデプロイ。RTK(トークン60〜90%削減)、Slack MCP、Obsidian CLI、Codex Plugin、Google Stitchを統合。DGMスタイルのアーカイブがクロスプロジェクト転移学習のためのエージェントパフォーマンスを追跡。',
          metricLabels: ['エージェント', 'プロジェクト', '統合数', 'トークン節約'] },
        { subtitle: '農業テックスタートアップのための全社AIシステム',
          description: '戦略、法務、財務、税務、生産、R&D、マーケティング、営業、施設の9部門にわたる47エージェントシステムを設計・構築。CEOオーケストレーターがディレクターにルーティングし、サブエージェントに委任。RALPHループがWorker→Reviewer→SHIP/REVISEサイクルで品質を保証。4段階LLMティアでコストを最小化。',
          metricLabels: ['エージェント', '部門', 'LLMティア', 'BGワーカー'] },
        { subtitle: 'AI搭載農産物市場 & 気象インテリジェンス',
          description: 'リアルタイムの農産物価格データ、天気予報、市場分析を組み合わせたフルスタック農業インテリジェンスプラットフォーム。エージェント駆動のデータパイプラインが政府農業データを取り込み、LLMインテリジェンスレイヤーで処理し、農業ビジネスの洞察を提供。',
          metricLabels: ['データソース', '作物種類', '更新頻度', 'インフラコスト'] },
        { subtitle: 'ThreadsのAIチャンネルを動かすデュアルNeo4jナレッジグラフ',
          description: 'Neo4jナレッジグラフとマルチエージェントコンテンツパイプラインで動く2つの本番Threadsチャンネル。ストラテジスト→ライター→エディターエージェントチェインが信頼度ティア別の食品/飲料インテリジェンスを生成。KAMISの卸売価格、天気、aT流通データを毎日取得。',
          metricLabels: ['KGドメイン', 'グラフノード', 'ライブチャンネル', 'データソース'] },
        { subtitle: '週末2日でゼロから本番稼働まで',
          description: '2日で製品を出荷: 1,000以上の食材、3,005の代替品、10言語、サーバーコストゼロ。CloudflarePages上のReact + TypeScript + Fuse.js。MildoCTAで農業スタートアップのブランド認知を向上。SEO最適化とアフィリエイト収益化ロードマップ付き。',
          metricLabels: ['食材', '代替品', '言語', 'インフラコスト'] },
      ],
    },
    techStack: { label: '// 技術スタック', title: '使用技術' },
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
    services: {
      label: '// 服务', title: '服务模式',
      sub: '从单个聊天机器人到完整的企业智能体生态系统。选择适合的范围——其余的交给我们。',
      ongoingLabel: '持续',
      packages: [
        { name: 'Agent Starter',    timeline: '1 ~ 2周',   description: '带RAG管道的单一AI智能体或聊天机器人。适合自动化一个工作流程或构建智能助手。',
          features: ['定制AI智能体/聊天机器人', '文档RAG', 'API集成', '部署及交接'] },
        { name: 'Agent System',     timeline: '4 ~ 8周',   description: '集成知识图谱的多智能体编排。适合需要智能体协作和推理的团队。',
          features: ['多智能体编排', '知识图谱 (Neo4j)', '工具使用 & 函数调用', '监控仪表板', '文档 & 培训'] },
        { name: 'Agent Enterprise', timeline: '8 ~ 16周',  description: '完整企业AI基础设施。多个智能体团队、系统集成、CI/CD和生产加固。',
          features: ['企业级架构', '多智能体团队', '系统集成 (ERP, CRM)', 'CI/CD & 可观测性', 'SLA & 持续支持'] },
        { name: 'Retainer',         timeline: '持续',       description: '持续的AI系统维护、优化和演进。保持智能体敏锐，降低成本。',
          features: ['性能监控', '提示 & 模型优化', '新功能开发', '优先支持'] },
      ],
    },
    caseStudies: {
      label: '// 案例', title: '精选案例',
      sub: '真实的生产系统。不是演示，不是原型。',
      liveLabel: '运行中',
      cases: [
        { subtitle: '在8个项目中部署200+智能体的插件式安装系统',
          description: '构建了受DGM-H(HyperAgents)启发的统一智能体管理中心。基于配置文件的安装程序一键将智能体系统部署到任何项目。集成RTK(节省60-90%令牌)、Slack MCP、Obsidian CLI、Codex Plugin和Google Stitch。DGM风格档案追踪智能体性能用于跨项目迁移学习。',
          metricLabels: ['智能体', '项目', '集成', '节省令牌'] },
        { subtitle: '为农业科技初创公司构建的全公司AI系统',
          description: '设计并构建了跨越9个部门的47智能体系统——战略、法务、财务、税务、生产、研发、市场、销售、设施。CEO编排器路由到总监，总监再委派子智能体。RALPH循环通过Worker→Reviewer→SHIP/REVISE周期保证质量。4级LLM体系最小化成本。',
          metricLabels: ['智能体', '部门', 'LLM层级', '后台工作者'] },
        { subtitle: 'AI驱动的农产品市场与气象情报',
          description: '结合实时农产品价格数据、天气预报和市场分析的全栈农业情报平台。智能体驱动的数据管道摄取政府农业数据源，经LLM智能层处理后，提供可操作的农业商业洞察。',
          metricLabels: ['数据源', '作物种类', '更新频率', '基础设施成本'] },
        { subtitle: '驱动Threads AI频道的双Neo4j知识图谱',
          description: '由Neo4j知识图谱和多智能体内容管道驱动的两个生产Threads频道。策略师→作者→编辑智能体链生成置信度分级的食品/饮料情报。每天爬取KAMIS批发价格、天气和aT分销数据。',
          metricLabels: ['知识图谱领域', '图节点', '直播频道', '数据源'] },
        { subtitle: '周末两天从零到生产',
          description: '2天内发布产品：1,000+食材，3,005种替代品，10种语言，零服务器成本。Cloudflare Pages上的React + TypeScript + Fuse.js。MildoCTA集成为农业初创公司提升品牌认知。SEO优化和联盟变现路线图。',
          metricLabels: ['食材', '替代品', '语言', '基础设施成本'] },
      ],
    },
    techStack: { label: '// 技术栈', title: '使用技术' },
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
    services: {
      label: '// الخدمات', title: 'نماذج التعاون',
      sub: 'من روبوت محادثة واحد إلى نظام بيئي كامل للوكلاء. اختر النطاق المناسب — نحن نتولى الباقي.',
      ongoingLabel: 'مستمر',
      packages: [
        { name: 'Agent Starter',    timeline: '١ ~ ٢ أسبوع',   description: 'وكيل ذكاء اصطناعي واحد أو روبوت محادثة مع خط أنابيب RAG. مثالي لأتمتة سير عمل واحد أو بناء مساعد ذكي.',
          features: ['وكيل AI مخصص / روبوت محادثة', 'RAG مع مستنداتك', 'تكامل API', 'النشر والتسليم'] },
        { name: 'Agent System',     timeline: '٤ ~ ٨ أسابيع',   description: 'تنسيق متعدد الوكلاء مع تكامل الرسم البياني للمعرفة. للفرق التي تحتاج إلى وكلاء يتعاونون ويستدلون.',
          features: ['تنسيق متعدد الوكلاء', 'رسم بياني للمعرفة (Neo4j)', 'استخدام الأدوات واستدعاء الوظائف', 'لوحة مراقبة', 'توثيق وتدريب'] },
        { name: 'Agent Enterprise', timeline: '٨ ~ ١٦ أسبوعاً',  description: 'بنية تحتية AI كاملة للمؤسسات. فرق وكلاء متعددة، تكامل الأنظمة، CI/CD، وتصليب الإنتاج.',
          features: ['بنية على مستوى المؤسسات', 'فرق وكلاء متعددة', 'تكامل الأنظمة (ERP, CRM)', 'CI/CD والمراقبة', 'اتفاقية مستوى الخدمة والدعم المستمر'] },
        { name: 'Retainer',         timeline: 'مستمر',            description: 'صيانة وتحسين وتطوير مستمر لأنظمة AI. حافظ على حدة وكلائك وخفض تكاليفك.',
          features: ['مراقبة الأداء', 'تحسين المطالبات والنماذج', 'تطوير ميزات جديدة', 'دعم ذو أولوية'] },
      ],
    },
    caseStudies: {
      label: '// دراسات الحالة', title: 'أعمال مختارة',
      sub: 'أنظمة حقيقية في الإنتاج. ليست عروضاً توضيحية أو نماذج أولية.',
      liveLabel: 'مباشر',
      cases: [
        { subtitle: 'مثبّت بأسلوب المكوّنات لنشر 200+ وكيل عبر 8 مشاريع',
          description: 'بنيت مركزاً موحداً لإدارة الوكلاء مستوحى من DGM-H. المثبّت القائم على الملفات الشخصية ينشر أنظمة الوكلاء في أي مشروع بأمر واحد. يدمج RTK (توفير 60-90% من الرموز)، Slack MCP، Obsidian CLI، Codex Plugin، وGoogle Stitch.',
          metricLabels: ['وكلاء', 'مشاريع', 'تكاملات', 'توفير الرموز'] },
        { subtitle: 'نظام AI كامل الشركة لشركة ناشئة في تقنية الزراعة',
          description: 'صُمم وبُني نظام 47 وكيلاً يغطي 9 أقسام: الاستراتيجية، القانونية، المالية، الضرائب، الإنتاج، البحث والتطوير، التسويق، المبيعات، المرافق. يوجّه منسق CEO إلى المدراء الذين يفوضون إلى الوكلاء الفرعيين.',
          metricLabels: ['وكلاء', 'أقسام', 'مستويات LLM', 'عمال الخلفية'] },
        { subtitle: 'ذكاء سوق المحاصيل والطقس بالذكاء الاصطناعي',
          description: 'منصة ذكاء زراعي متكاملة تجمع بيانات أسعار المحاصيل الفورية وتوقعات الطقس وتحليل السوق. خط أنابيب بيانات مدفوع بالوكلاء يستوعب مصادر البيانات الزراعية الحكومية.',
          metricLabels: ['مصادر البيانات', 'أنواع المحاصيل', 'تكرار التحديث', 'تكلفة البنية التحتية'] },
        { subtitle: 'رسمان بيانيان لـ Neo4j يشغّلان قنوات Threads للذكاء الاصطناعي',
          description: 'قناتا Threads إنتاجيتان مدعومتان بمخططات معرفة Neo4j وخطوط أنابيب محتوى متعددة الوكلاء. سلسلة الوكلاء: استراتيجي → كاتب → محرر تولّد ذكاءً للأغذية/المشروبات بمستويات ثقة.',
          metricLabels: ['مجالات KG', 'عقد الرسم البياني', 'قنوات مباشرة', 'مصادر البيانات'] },
        { subtitle: 'من الصفر إلى الإنتاج في عطلة نهاية أسبوع',
          description: 'أُطلق منتج مباشر في يومين: 1,000+ مكوّن، 3,005 بديل، 10 لغات، تكلفة خادم صفر. React + TypeScript + Fuse.js على Cloudflare Pages. تكامل MildoCTA يعزز الوعي بالعلامة التجارية للشركة الناشئة الزراعية.',
          metricLabels: ['مكوّنات', 'بدائل', 'لغات', 'تكلفة البنية التحتية'] },
      ],
    },
    techStack: { label: '// المكدس التقني', title: 'أدوات العمل' },
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
