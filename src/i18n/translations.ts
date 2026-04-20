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
    siteTitle: 'Mildo AI — 80 Agents. 6 Business Units. One Agri-Food Tech Group.',
    siteDesc: 'Mildo AI — An Agri-Food Tech holding group run by 80 AI agents. Smart farm, digital products, R&D, AI consulting, and trading — all orchestrated by a self-improving agent system.',
    nav: {
      ventures: 'Group', products: 'Portfolio', services: 'Services',
      work: 'Case Studies', contact: 'Contact', cta: "Let's Talk",
    },
    hero: {
      tagline: '80 AI agents running an Agri-Food Tech group.',
      sub: 'Smart farm · digital products · robotics R&D · AI consulting — one self-improving holding group.',
      highlight: '80 agents. 17 projects. 4 LLM tiers. Self-evolving architecture.',
      cta1: 'Book a consultation', cta2: 'View portfolio',
      stats: [
        { value: '80+', label: 'AI Agents (v2)' },
        { value: '17',  label: 'Portfolio Projects' },
        { value: '6',   label: 'Business Units' },
        { value: 'DGM', label: 'Self-Improving Loop' },
      ],
    },
    ventures: {
      label: '// group_structure', title: 'Mildo Group — 6 Business Units',
      sub: 'A holding group where every business unit is orchestrated by AI agents. From soil to SaaS.',
      viewEntity: 'View',
      items: [
        {
          statusLabel: 'BUILDING',
          name: 'Smart Farm BU',
          tagline: 'Premium San Marzano · Sangju, Korea',
          description: 'Controlled-environment greenhouse with AI-optimized nutrient systems, IoT sensors, digital twin simulation, and agricultural robotics. Target: first harvest 2027, HORECA B2B direct distribution.',
          metrics: ['1,000-pyeong greenhouse', 'Digital twin engine', 'Agri-robot (ROS2 + YOLO)'],
        },
        {
          statusLabel: 'OPERATING',
          name: 'Digital Products BU',
          tagline: 'SubSwap · CropCast · Chef\'s · Pour & Pair · Brain for Art · Hidden Japan · CruisePick',
          description: 'Seven AI-native digital products spanning food intelligence, travel tech, and art knowledge. Each runs on Neo4j knowledge graphs, multi-agent content pipelines, and zero-cost infra.',
          metrics: ['7 live/building products', '3 Neo4j knowledge graphs', '$0 infra SaaS'],
        },
        {
          statusLabel: 'R&D',
          name: 'R&D Institute',
          tagline: 'Digital Twin · Agri-Robot · Optimization Research',
          description: 'Three research labs: Digital Twin (GreenLight/FSPM crop simulation), Agricultural Robotics (ROS2, YOLOv8, LeRobot), and Optimization Research (Bayesian RL, sensor-to-yield pipelines).',
          metrics: ['GreenLight + FSPM models', 'ROS2 + YOLOv8 + Nav2', 'Bayesian optimization RL'],
        },
        {
          statusLabel: 'OPERATING',
          name: 'AI Consulting BU',
          tagline: 'Multi-Agent System Design & Delivery',
          description: 'Design and build multi-agent systems for enterprises. The Mildo Group itself is the living reference case — 80 agents across 6 BUs, RALPH loops, DGM-H self-improvement, 4-tier LLM routing.',
          metrics: ['Full-company agent systems', 'RALPH loop quality gates', 'mildo-gateway infra'],
        },
        {
          statusLabel: 'OPERATING',
          name: 'Investment & Trading BU',
          tagline: 'Agent Trader · Pine Seeds Forecasts',
          description: 'Automated trading and forecasting systems. Agent Trader manages crypto/equity positions with risk controls. Pine Seeds Forecasts runs 53 agents for agricultural futures prediction with OHLCV encoding.',
          metrics: ['Agent Trader (auto)', '53 forecast agents', 'OHLCV + LLM pipeline'],
        },
        {
          statusLabel: 'OPERATING',
          name: 'HQ (Holding Co.)',
          tagline: 'Strategy · Legal · Finance · Tax · HR · Infra',
          description: 'Group headquarters managing cross-BU strategy, legal, finance, tax, governance, and infrastructure. mildo-gateway (Raspberry Pi) provides 24/7 Slack-to-Mac remote orchestration.',
          metrics: ['IPO roadmap 2031-32', 'mildo-gateway (Pi)', 'claude-agents-hub'],
        },
      ],
    },
    products: {
      label: '// portfolio', title: '17 Projects in the Portfolio',
      sub: 'From a smart farm in Korea to global SaaS products. Each one is managed by dedicated AI agents.',
      explore: 'Explore', comingSoon: 'Building',
      items: [
        {
          name: 'SubSwap', tagline: 'Global Ingredient Substitute Engine',
          description: '1,054 ingredients · 3,572 substitutes · 10 languages · $0 infra. React + TypeScript on Cloudflare Pages. MildoCTA drives farm brand awareness.',
        },
        {
          name: 'CropCast', tagline: 'Agricultural Intelligence Platform',
          description: '49 agents, 3-round debate, 40+ data sources for crop price forecasting. Pipeline: KAMIS data → Knowledge Graph → multi-agent forecast.',
        },
        {
          name: "Chef's Assistant", tagline: 'Food Intelligence — @fridgey_raid',
          description: 'Neo4j food KG + KAMIS wholesale price crawlers. Multi-agent content pipeline (Strategist → Writer → Editor). Confidence-tiered daily posts.',
        },
        {
          name: 'Pour & Pair', tagline: 'Beverage Intelligence — @pourandpair',
          description: 'Drink knowledge graph (18K+ entities). Threads AI channel for hyper-specific wine/food pairing. Sommelier-grade intelligence.',
        },
        {
          name: 'Brain for Art', tagline: 'Art Intelligence Platform',
          description: 'CIDOC CRM ontology with 81K+ nodes. Art knowledge graph for curators, gallerists, and collectors. MCP-powered search.',
        },
        {
          name: 'Hidden Japan', tagline: 'Off-the-Beaten-Path Travel',
          description: '50 agents. MapLibre offline maps. Premium subscription model. AI-curated hidden destinations in Japan.',
        },
        {
          name: 'CruisePick + 다다름', tagline: 'Cruise & Tour Intelligence',
          description: 'AI-curated cruise and Japan tour platform. KG-backed recommendations for the premium travel segment.',
        },
        {
          name: 'mildo.farm', tagline: 'Smart Farm Corporate Site',
          description: 'The San Marzano tomato smart farm brand site. Astro + Tailwind, deployed on Cloudflare Pages.',
        },
        {
          name: 'Digital Twin Tomato', tagline: 'Crop Simulation Engine',
          description: 'GreenLight + FSPM-based crop growth simulation. Predicts yield, flavor score, and defect risk across 4-layer input profiles.',
        },
        {
          name: 'mildo-agri-robot', tagline: 'Autonomous Harvest Robot',
          description: 'ROS2 + YOLOv8 + Nav2. LeRobot imitation learning. Computer vision for ripeness and disease detection in greenhouse rows.',
        },
        {
          name: 'Agent Trader', tagline: 'Automated Trading System',
          description: 'Multi-agent crypto/equity trading with risk controls. Self-optimizing position sizing and strategy rotation.',
        },
        {
          name: 'Pine Seeds Forecasts', tagline: 'Agricultural Futures Prediction',
          description: '53 agents, OHLCV encoding + LLM intelligence for agricultural futures signals. Daily published forecasts.',
        },
        {
          name: 'mildo-gateway', tagline: 'Raspberry Pi Infrastructure',
          description: 'Slack Socket Mode bot on Pi → SSH to Mac1/Mac2. WoL, health checks, AI routing. 24/7 remote orchestration hub.',
        },
        {
          name: 'claude-agents-hub', tagline: 'Cross-Project Agent Hub',
          description: 'DGM-H inspired unified agent management. Profile-based installer deploys 80+ agents to any project in one command.',
        },
        {
          name: 'Travel Marketer', tagline: 'Threads Travel Intelligence',
          description: 'AI-powered travel content channel. Connected to CruisePick and Hidden Japan for cross-product funnel.',
        },
        {
          name: 'Art Brain', tagline: 'Art Market Intelligence',
          description: 'Companion to Brain for Art. Market signals, auction analytics, and provenance intelligence for art professionals.',
        },
        {
          name: 'CropCast Pipeline', tagline: 'Data Infrastructure',
          description: 'Sensor → Edge → Cloud ETL. InfluxDB + Kafka + Grafana. Foundation for all agricultural data products.',
        },
      ],
    },
    services: {
      label: '// services', title: 'AI Consulting Packages',
      sub: 'From a single chatbot to a full-company agent system. The Mildo Group itself is the reference case — we build what we run.',
      ongoingLabel: 'Ongoing',
      packages: [
        { name: 'Agent Starter',    timeline: '1 ~ 2 weeks',   description: 'Single AI agent or chatbot with RAG pipeline. Perfect for automating one workflow or building an intelligent assistant.',
          features: ['Custom AI agent / chatbot', 'RAG with your documents', 'API integration', 'Deployment & handoff'] },
        { name: 'Agent System',     timeline: '4 ~ 8 weeks',   description: 'Multi-agent orchestration with knowledge graph integration. For teams that need agents that collaborate and reason across departments.',
          features: ['Multi-agent orchestration', 'Knowledge graph (Neo4j)', 'Tool-use & function calling', 'Monitoring dashboard', 'Documentation & training'] },
        { name: 'Agent Enterprise', timeline: '8 ~ 16 weeks',  description: 'Full enterprise AI infrastructure. Multiple agent teams, system integration, CI/CD, RALPH quality loops, and production hardening.',
          features: ['Enterprise-grade architecture', 'Multiple agent teams', 'System integration (ERP, CRM)', 'RALPH loop quality gates', 'SLA & ongoing support'] },
        { name: 'Retainer',         timeline: 'Ongoing',        description: 'Continuous AI system maintenance, model optimization, and agent evolution. DGM-H style self-improvement for your system.',
          features: ['Performance monitoring', 'Prompt & model optimization', 'DGM-H style self-improvement', 'Priority support'] },
      ],
    },
    caseStudies: {
      label: '// case_studies', title: 'Selected Work',
      sub: 'Real systems in production. Not demos, not prototypes.',
      liveLabel: 'live',
      cases: [
        { subtitle: 'Plugin-style hub deploys 80+ agents across 8+ projects in one command',
          description: 'Built a unified agent management hub inspired by DGM-H (HyperAgents). Profile-based installer deploys agent systems to any project in one command. Integrates RTK (60-90% token savings), Slack MCP, Obsidian CLI, Codex Plugin, and Google Stitch. DGM-style archive tracks agent performance for cross-project transfer learning. Weekly launchd cron runs meta-review for autonomous prompt improvement.',
          metricLabels: ['Agents', 'Projects', 'Integrations', 'Token Savings'] },
        { subtitle: 'Full-company AI for an Agri-Food Tech group — 80 agents, 6 BUs',
          description: 'Designed and built an 80-agent system (v2) spanning 6 business units — HQ, Smart Farm, R&D Institute, Digital Products, AI Consulting, and Investment/Trading. Group CEO orchestrates 8 BU directors. RALPH loops enforce quality with Worker → Reviewer → SHIP/REVISE cycles. 4 LLM tiers (Opus/Sonnet/Codex/Haiku) minimize cost. Self-improving via DGM-H launchd loop.',
          metricLabels: ['Agents', 'Business Units', 'LLM Tiers', 'BG Workers'] },
        { subtitle: 'Dual Neo4j knowledge graphs powering two Threads AI channels',
          description: 'Two production Threads channels (@fridgey_raid food KG, @pourandpair drink KG) each powered by Neo4j knowledge graphs and multi-agent pipelines. Strategist → Writer → Editor agent chain generates confidence-tiered intelligence. Crawlers ingest KAMIS wholesale prices, weather, and aT distribution data daily. Food KG: 10K+ nodes. Drink KG: 18K+ entities.',
          metricLabels: ['KG Domains', 'Graph Nodes', 'Live Channels', 'Data Sources'] },
        { subtitle: 'Full-stack SaaS from zero to production in a weekend',
          description: 'Shipped SubSwap in 2 days: 1,054 ingredients, 3,572 substitutes, 10 languages, zero server cost. React + TypeScript + Fuse.js on Cloudflare Pages. MildoCTA integration drives brand awareness for the farm startup. SEO-optimized with affiliate monetization roadmap (Amazon Associates, W-8BEN-E filed).',
          metricLabels: ['Ingredients', 'Substitutes', 'Languages', 'Infra Cost'] },
        { subtitle: 'Raspberry Pi infrastructure for 24/7 remote Mac orchestration',
          description: 'mildo-gateway: Raspberry Pi running Slack Socket Mode bot routes commands via SSH to Mac1 (dev) and Mac2 (trading/analysis). Wake-on-LAN, health monitoring, AI routing (Haiku decides which Mac). Owner/member/viewer permission system. Foundation for all automated agent scheduling via launchd.',
          metricLabels: ['Mac Nodes', 'Slack Commands', 'WoL Enabled', 'Uptime Target'] },
      ],
    },
    techStack: { label: '// tech_stack', title: 'Tools of the Trade' },
    contact: {
      label: '// contact', title: "Let's build your AI agent system.",
      sub: "Book a free 15-minute consultation. We'll assess your use case and recommend the right architecture — no strings attached.",
      emailBtn: 'Email us', calendlyBtn: 'Book a call',
    },
  },

  ko: {
    siteTitle: '밀도 AI — 80개 AI 에이전트가 운영하는 Agri-Food Tech 그룹',
    siteDesc: '밀도 AI — AI, 데이터, 로봇으로 스마트팜을 운영하고 디지털 제품을 만드는 홀딩 그룹. 80개 AI 에이전트, 17개 프로젝트, 6개 사업부.',
    nav: {
      ventures: '그룹 구조', products: '포트폴리오', services: '서비스',
      work: '실적', contact: '문의', cta: '상담하기',
    },
    hero: {
      tagline: '80개 AI 에이전트가 Agri-Food Tech 그룹을 운영합니다.',
      sub: '스마트팜 · 디지털 제품 · 농업 로봇 R&D · AI 컨설팅 — 자기 진화하는 홀딩 그룹.',
      highlight: '80개 에이전트. 17개 프로젝트. 6개 사업부. 자기개선 아키텍처.',
      cta1: '무료 상담 예약', cta2: '포트폴리오 보기',
      stats: [
        { value: '80+', label: 'AI 에이전트 (v2)' },
        { value: '17',  label: '포트폴리오 프로젝트' },
        { value: '6',   label: '사업부' },
        { value: 'DGM', label: '자기개선 루프' },
      ],
    },
    ventures: {
      label: '// 그룹_구조', title: '밀도 그룹 — 6개 사업부',
      sub: '모든 사업부가 AI 에이전트로 운영되는 홀딩 그룹. 토양에서 SaaS까지.',
      viewEntity: '자세히 보기',
      items: [
        {
          statusLabel: '구축중',
          name: '영농법인 BU',
          tagline: '프리미엄 산 마르자노 · 경북 상주',
          description: 'AI 최적화 양액, IoT 센서, 디지털 트윈 시뮬레이션, 영농 로봇을 갖춘 반밀폐형 유리온실. 2027년 첫 수확, HORECA B2B 직거래 유통 목표.',
          metrics: ['1,000평 온실', '디지털 트윈 엔진', '영농로봇 (ROS2 + YOLO)'],
        },
        {
          statusLabel: '운영중',
          name: '디지털사업부 BU',
          tagline: 'SubSwap · CropCast · 셰프어시스턴트 · Pour&Pair · Brain for Art · Hidden Japan · CruisePick',
          description: '식재료 인텔리전스, 트래블테크, 아트 지식 등 7개 AI 네이티브 디지털 제품. 각 제품은 Neo4j 지식 그래프, 멀티 에이전트 파이프라인, 무비용 인프라로 운영.',
          metrics: ['7개 운영/개발 프로덕트', '3개 Neo4j 지식 그래프', '$0 인프라 SaaS'],
        },
        {
          statusLabel: 'R&D',
          name: '기술연구소 BU',
          tagline: '디지털트윈 · 영농로봇 · 최적화리서치',
          description: '3개 연구랩: 디지털트윈(GreenLight/FSPM 작물 시뮬레이션), 영농로봇(ROS2, YOLOv8, LeRobot), 최적화리서치(Bayesian RL, 센서-수확량 파이프라인).',
          metrics: ['GreenLight + FSPM 모델', 'ROS2 + YOLOv8 + Nav2', 'Bayesian 최적화 RL'],
        },
        {
          statusLabel: '운영중',
          name: 'AI컨설팅 BU',
          tagline: '멀티 에이전트 시스템 설계 & 구축',
          description: '기업을 위한 멀티 에이전트 시스템을 설계하고 구축합니다. 밀도 그룹 자체가 살아있는 레퍼런스 케이스 — 6개 BU에 80개 에이전트, RALPH 루프, DGM-H 자기개선, 4단계 LLM 라우팅.',
          metrics: ['전사 에이전트 시스템', 'RALPH 루프 품질 게이트', 'mildo-gateway 인프라'],
        },
        {
          statusLabel: '운영중',
          name: '투자/트레이딩 BU',
          tagline: 'Agent Trader · Pine Seeds Forecasts',
          description: '자동화 트레이딩 및 예측 시스템. Agent Trader가 리스크 제어로 암호화폐/주식 포지션을 관리. Pine Seeds Forecasts는 농산물 선물 예측을 위해 53개 에이전트와 OHLCV 인코딩으로 운영.',
          metrics: ['Agent Trader (자동화)', '53개 예측 에이전트', 'OHLCV + LLM 파이프라인'],
        },
        {
          statusLabel: '운영중',
          name: '그룹 본사 (HQ)',
          tagline: '전략 · 법무 · 재무 · 세무 · HR · 인프라',
          description: '크로스-BU 전략, 법무, 재무, 세무, 거버넌스, 인프라를 관리하는 그룹 본부. mildo-gateway(라즈베리 파이)가 24/7 슬랙→맥 원격 오케스트레이션을 제공.',
          metrics: ['IPO 로드맵 2031-32', 'mildo-gateway (Pi)', 'claude-agents-hub'],
        },
      ],
    },
    products: {
      label: '// 포트폴리오', title: '17개 프로젝트 포트폴리오',
      sub: '한국의 스마트팜부터 글로벌 SaaS까지. 각 프로젝트는 전담 AI 에이전트가 관리합니다.',
      explore: '바로가기', comingSoon: '개발중',
      items: [
        {
          name: 'SubSwap', tagline: '글로벌 식재료 대체재 검색 엔진',
          description: '1,054 재료 · 3,572 대체재 · 10개 언어 · $0 인프라. Cloudflare Pages React+TS. MildoCTA로 농장 브랜드 인지도 확보.',
        },
        {
          name: 'CropCast', tagline: '농업 인텔리전스 플랫폼',
          description: '49개 에이전트, 3라운드 토론, 40+ 데이터 소스로 농산물 가격 예측. KAMIS → 지식 그래프 → 멀티 에이전트 예측.',
        },
        {
          name: "Chef's Assistant", tagline: '식재료 인텔리전스 — @fridgey_raid',
          description: 'Neo4j 식품 KG + KAMIS 도매가 크롤러. 멀티 에이전트 콘텐츠 파이프라인 (전략→작성→편집). 신뢰도 등급별 일일 게시.',
        },
        {
          name: 'Pour & Pair', tagline: '음료 인텔리전스 — @pourandpair',
          description: '주류 지식 그래프 (18K+ 엔티티). 와인/음식 페어링 Threads AI 채널. 소믈리에 수준의 인텔리전스.',
        },
        {
          name: 'Brain for Art', tagline: '아트 인텔리전스 플랫폼',
          description: 'CIDOC CRM 온톨로지, 81K+ 노드. 큐레이터·갤러리스트·컬렉터를 위한 아트 지식 그래프. MCP 검색.',
        },
        {
          name: 'Hidden Japan', tagline: '일본 숨은 여행지 플랫폼',
          description: '50개 에이전트. MapLibre 오프라인 맵. 프리미엄 구독 모델. AI 큐레이션 일본 소도시.',
        },
        {
          name: 'CruisePick + 다다름', tagline: '크루즈 & 투어 인텔리전스',
          description: 'AI 큐레이션 크루즈·일본 투어 플랫폼. 프리미엄 여행 세그먼트를 위한 KG 기반 추천.',
        },
        {
          name: 'mildo.farm', tagline: '스마트팜 기업 사이트',
          description: '산 마르자노 토마토 스마트팜 브랜드 사이트. Astro + Tailwind, Cloudflare Pages 배포.',
        },
        {
          name: '디지털 트윈 토마토', tagline: '작물 시뮬레이션 엔진',
          description: 'GreenLight + FSPM 기반 작물 생장 시뮬레이션. 4계층 입력 프로파일로 수확량·풍미·결함 리스크 예측.',
        },
        {
          name: 'mildo-agri-robot', tagline: '자율 수확 로봇',
          description: 'ROS2 + YOLOv8 + Nav2. LeRobot 모방 학습. 온실 행에서 숙도·병해충 탐지 컴퓨터 비전.',
        },
        {
          name: 'Agent Trader', tagline: '자동화 트레이딩 시스템',
          description: '리스크 제어 멀티 에이전트 암호화폐/주식 트레이딩. 자기 최적화 포지션 사이징 및 전략 로테이션.',
        },
        {
          name: 'Pine Seeds Forecasts', tagline: '농산물 선물 예측',
          description: '53개 에이전트, OHLCV 인코딩 + LLM 인텔리전스로 농산물 선물 신호 생성. 매일 예측 게시.',
        },
        {
          name: 'mildo-gateway', tagline: '라즈베리 파이 인프라',
          description: 'Pi → SSH → Mac1/Mac2. WoL, 상태 모니터링, AI 라우팅 (Haiku가 맥 선택). 24/7 원격 오케스트레이션 허브.',
        },
        {
          name: 'claude-agents-hub', tagline: '크로스 프로젝트 에이전트 허브',
          description: 'DGM-H 영감 통합 에이전트 관리. 프로필 기반 설치로 80+ 에이전트를 어떤 프로젝트에나 명령 하나로 배포.',
        },
        {
          name: 'Travel Marketer', tagline: 'Threads 여행 인텔리전스',
          description: 'AI 기반 여행 콘텐츠 채널. CruisePick·Hidden Japan과 연결된 크로스 프로덕트 퍼널.',
        },
        {
          name: 'Art Brain', tagline: '아트 마켓 인텔리전스',
          description: 'Brain for Art 컴패니언. 아트 전문가를 위한 시장 신호, 경매 분석, 소장 이력 인텔리전스.',
        },
        {
          name: 'CropCast 파이프라인', tagline: '데이터 인프라',
          description: '센서 → Edge → Cloud ETL. InfluxDB + Kafka + Grafana. 모든 농업 데이터 제품의 기반.',
        },
      ],
    },
    services: {
      label: '// 서비스', title: 'AI 컨설팅 패키지',
      sub: '단일 챗봇부터 전사 에이전트 시스템까지. 밀도 그룹 자체가 레퍼런스 케이스 — 우리가 직접 운영하는 것을 만들어드립니다.',
      ongoingLabel: '상시',
      packages: [
        { name: 'Agent Starter',    timeline: '1 ~ 2주',   description: 'RAG 파이프라인 포함 단일 AI 에이전트 또는 챗봇. 워크플로 자동화 또는 지능형 어시스턴트 구축에 최적.',
          features: ['커스텀 AI 에이전트/챗봇', '문서 기반 RAG', 'API 연동', '배포 및 인수인계'] },
        { name: 'Agent System',     timeline: '4 ~ 8주',   description: '지식 그래프 통합 멀티 에이전트 오케스트레이션. 부서 간 협업·추론이 필요한 팀을 위한 솔루션.',
          features: ['멀티 에이전트 오케스트레이션', '지식 그래프 (Neo4j)', '툴 사용 & 함수 호출', '모니터링 대시보드', '문서화 & 교육'] },
        { name: 'Agent Enterprise', timeline: '8 ~ 16주',  description: '완전한 엔터프라이즈 AI 인프라. 다중 에이전트 팀, 시스템 통합, CI/CD, RALPH 품질 루프, 프로덕션 하드닝.',
          features: ['엔터프라이즈급 아키텍처', '다중 에이전트 팀', '시스템 통합 (ERP, CRM)', 'RALPH 루프 품질 게이트', 'SLA & 지속 지원'] },
        { name: 'Retainer',         timeline: '상시',       description: '지속적인 AI 시스템 유지보수, 모델 최적화, 에이전트 진화. DGM-H 스타일 자기개선을 귀사 시스템에 적용.',
          features: ['성능 모니터링', '프롬프트 & 모델 최적화', 'DGM-H 자기개선', '우선 지원'] },
      ],
    },
    caseStudies: {
      label: '// 사례', title: '주요 실적',
      sub: '실제 프로덕션 시스템. 데모나 프로토타입이 아닙니다.',
      liveLabel: '운영중',
      cases: [
        { subtitle: '명령 하나로 80+ 에이전트를 8+ 프로젝트에 배포하는 플러그인 허브',
          description: 'DGM-H에서 영감받은 통합 에이전트 관리 허브. 프로필 기반 설치로 에이전트 시스템을 어떤 프로젝트에나 명령 하나로 배포. RTK(토큰 60~90% 절감), Slack MCP, Obsidian CLI, Codex Plugin, Google Stitch 통합. DGM 방식 아카이브로 크로스 프로젝트 전이 학습 추적. 주간 launchd cron이 meta-review로 자율 프롬프트 개선.',
          metricLabels: ['에이전트', '프로젝트', '통합', '토큰 절감'] },
        { subtitle: 'Agri-Food Tech 그룹 전사 AI 시스템 — 80개 에이전트, 6개 BU',
          description: '6개 사업부(본사, 영농법인, 기술연구소, 디지털사업부, AI컨설팅, 투자/트레이딩)에 걸친 80개 에이전트 시스템(v2) 설계 및 구축. 그룹 CEO가 8개 BU장에게 라우팅. RALPH 루프가 Worker→Reviewer→SHIP/REVISE 사이클로 품질 보장. 4단계 LLM 티어(Opus/Sonnet/Codex/Haiku)로 비용 최소화. DGM-H launchd 루프로 자기개선.',
          metricLabels: ['에이전트', '사업부', 'LLM 티어', '백그라운드 에이전트'] },
        { subtitle: '두 개의 Threads AI 채널을 구동하는 이중 Neo4j 지식 그래프',
          description: '각각 Neo4j 지식 그래프와 멀티 에이전트 파이프라인으로 운영되는 두 개 프로덕션 Threads 채널(@fridgey_raid 식품 KG, @pourandpair 주류 KG). 전략→작성→편집 에이전트 체인이 신뢰도 등급별 인텔리전스 생성. KAMIS 도매가, 날씨, aT 유통 데이터를 매일 수집. 식품 KG: 10K+ 노드. 주류 KG: 18K+ 엔티티.',
          metricLabels: ['KG 도메인', '그래프 노드', '라이브 채널', '데이터 소스'] },
        { subtitle: '주말 이틀 만에 제로에서 프로덕션 SaaS까지',
          description: '이틀 만에 SubSwap 출시: 1,054 재료, 3,572 대체재, 10개 언어, 서버 비용 제로. Cloudflare Pages의 React + TypeScript + Fuse.js. MildoCTA 통합으로 농업 스타트업 브랜드 인지도 확보. SEO 최적화 및 제휴 수익화 로드맵 (Amazon Associates, W-8BEN-E 제출 완료).',
          metricLabels: ['재료', '대체재', '언어', '인프라 비용'] },
        { subtitle: '24/7 원격 Mac 오케스트레이션을 위한 라즈베리 파이 인프라',
          description: 'mildo-gateway: 슬랙 소켓 모드 봇이 동작하는 라즈베리 파이가 SSH로 Mac1(개발)·Mac2(트레이딩/분석)에 명령을 라우팅. Wake-on-LAN, 헬스 모니터링, AI 라우팅(Haiku가 맥 선택). owner/member/viewer 권한 체계. 모든 자동화 에이전트 스케줄링의 기반.',
          metricLabels: ['맥 노드', '슬랙 명령어', 'WoL 지원', '가동률 목표'] },
      ],
    },
    techStack: { label: '// 기술스택', title: '사용 기술' },
    contact: {
      label: '// 문의', title: 'AI 에이전트 시스템을 함께 만들어요.',
      sub: '무료 15분 상담을 예약하세요. 사용 사례를 진단하고 최적의 아키텍처를 제안해드립니다.',
      emailBtn: '이메일 문의', calendlyBtn: '미팅 예약',
    },
  },

  ja: {
    siteTitle: 'Mildo AI — 80のAIエージェントが運営するAgri-Food Techグループ',
    siteDesc: 'Mildo AI — スマート農場・デジタル製品・農業ロボットR&D・AIコンサルティング。自己進化するホールディンググループ。',
    nav: {
      ventures: 'グループ', products: 'ポートフォリオ', services: 'サービス',
      work: '実績', contact: 'お問い合わせ', cta: '相談する',
    },
    hero: {
      tagline: '80のAIエージェントがAgri-Food Techグループを運営します。',
      sub: 'スマート農場 · デジタル製品 · 農業ロボットR&D · AIコンサルティング — 自己進化するホールディング。',
      highlight: '80+エージェント。17プロジェクト。6事業部。自己改善アーキテクチャ。',
      cta1: '無料相談を予約', cta2: 'ポートフォリオを見る',
      stats: [
        { value: '80+', label: 'AIエージェント (v2)' },
        { value: '17',  label: 'ポートフォリオ' },
        { value: '6',   label: '事業部' },
        { value: 'DGM', label: '自己改善ループ' },
      ],
    },
    ventures: {
      label: '// グループ構造', title: 'Mildoグループ — 6事業部',
      sub: 'すべての事業部がAIエージェントで運営されるホールディンググループ。土壌からSaaSまで。',
      viewEntity: '詳細を見る',
      items: [
        {
          statusLabel: '構築中',
          name: '農業法人BU',
          tagline: 'プレミアムサンマルツァーノ · 慶北尚州',
          description: 'AI最適化養液、IoTセンサー、デジタルツインシミュレーション、農業ロボットを備えた半密閉型ガラス温室。2027年初収穫、HORECA B2B直接流通を目標。',
          metrics: ['1,000坪の温室', 'デジタルツインエンジン', '農業ロボット (ROS2+YOLO)'],
        },
        {
          statusLabel: '稼働中',
          name: 'デジタル事業部BU',
          tagline: 'SubSwap · CropCast · シェフズアシスタント · Pour&Pair · Brain for Art · Hidden Japan · CruisePick',
          description: '食品インテリジェンス、トラベルテック、アート知識など7つのAIネイティブデジタル製品。各製品はNeo4jナレッジグラフ、マルチエージェントパイプライン、ゼロコストインフラで運営。',
          metrics: ['7製品運営/開発中', '3つのNeo4j KG', '$0インフラSaaS'],
        },
        {
          statusLabel: 'R&D',
          name: '技術研究所BU',
          tagline: 'デジタルツイン · 農業ロボット · 最適化研究',
          description: '3研究ラボ：デジタルツイン（GreenLight/FSPM作物シミュレーション）、農業ロボット（ROS2、YOLOv8、LeRobot）、最適化研究（Bayesian RL）。',
          metrics: ['GreenLight+FSPMモデル', 'ROS2+YOLOv8+Nav2', 'Bayesian最適化RL'],
        },
        {
          statusLabel: '稼働中',
          name: 'AIコンサルBU',
          tagline: 'マルチエージェントシステム設計 & 構築',
          description: '企業向けマルチエージェントシステムを設計・構築。Mildoグループ自体が生きたリファレンスケース — 6BUに80エージェント、RALPHループ、DGM-H自己改善、4段階LLMルーティング。',
          metrics: ['全社エージェントシステム', 'RALPHループ品質ゲート', 'mildo-gatewayインフラ'],
        },
        {
          statusLabel: '稼働中',
          name: '投資/トレーディングBU',
          tagline: 'Agent Trader · Pine Seeds Forecasts',
          description: '自動トレーディング・予測システム。Agent Traderがリスク管理付きで暗号通貨/株式ポジションを管理。Pine Seeds Forecastsは農業先物予測に53エージェントとOHLCVエンコーディングを使用。',
          metrics: ['Agent Trader (自動)', '53予測エージェント', 'OHLCV+LLMパイプライン'],
        },
        {
          statusLabel: '稼働中',
          name: 'グループ本社 (HQ)',
          tagline: '戦略 · 法務 · 財務 · 税務 · HR · インフラ',
          description: 'クロスBU戦略、法務、財務、税務、ガバナンス、インフラを管理するグループ本部。mildo-gateway（Raspberry Pi）が24/7 Slack→Mac遠隔オーケストレーションを提供。',
          metrics: ['IPOロードマップ2031-32', 'mildo-gateway (Pi)', 'claude-agents-hub'],
        },
      ],
    },
    products: {
      label: '// ポートフォリオ', title: '17プロジェクトのポートフォリオ',
      sub: '韓国のスマート農場からグローバルSaaSまで。各プロジェクトは専任AIエージェントが管理。',
      explore: '見る', comingSoon: '開発中',
      items: [
        { name: 'SubSwap', tagline: 'グローバル食材代替エンジン', description: '1,054食材・3,572代替品・10言語・$0インフラ。Cloudflare Pages React+TS。MildoCTAで農場ブランド認知。' },
        { name: 'CropCast', tagline: '農業インテリジェンスプラットフォーム', description: '49エージェント、3ラウンド討論、40+データソースで農産物価格予測。KAMIS→KG→マルチエージェント予測。' },
        { name: "Chef's Assistant", tagline: '食品インテリジェンス — @fridgey_raid', description: 'Neo4j食品KG+KAMIS卸値クローラー。マルチエージェントパイプライン（戦略→執筆→編集）。信頼度ティア別日次投稿。' },
        { name: 'Pour & Pair', tagline: '飲料インテリジェンス — @pourandpair', description: '飲料KG（18K+エンティティ）。Threads AIチャンネル。ソムリエ級ワイン/料理ペアリング。' },
        { name: 'Brain for Art', tagline: 'アートインテリジェンス', description: 'CIDOC CRMオントロジー、81K+ノード。キュレーター向けアートKG。MCP検索。' },
        { name: 'Hidden Japan', tagline: '日本隠れた旅行地', description: '50エージェント。MapLibreオフラインマップ。プレミアム購読モデル。AI厳選日本の小都市。' },
        { name: 'CruisePick + 다다름', tagline: 'クルーズ&ツアー', description: 'AIキュレーションクルーズ・日本ツアープラットフォーム。KG推薦システム。' },
        { name: 'mildo.farm', tagline: 'スマート農場サイト', description: 'サンマルツァーノトマトスマート農場ブランドサイト。Astro+Tailwind。' },
        { name: 'デジタルツイン', tagline: '作物シミュレーション', description: 'GreenLight+FSPM作物生長シミュレーション。4層入力で収量・風味・欠陥リスク予測。' },
        { name: 'mildo-agri-robot', tagline: '自律収穫ロボット', description: 'ROS2+YOLOv8+Nav2。LeRobot模倣学習。温室内熟度・病害虫検出CV。' },
        { name: 'Agent Trader', tagline: '自動トレーディング', description: 'リスク管理付きマルチエージェント暗号通貨/株式取引。自己最適化。' },
        { name: 'Pine Seeds', tagline: '農業先物予測', description: '53エージェント、OHLCVエンコーディング+LLMで農業先物シグナル生成。' },
        { name: 'mildo-gateway', tagline: 'Pi インフラ', description: 'Pi→SSH→Mac1/Mac2。WoL、ヘルスチェック、AIルーティング。24/7遠隔ハブ。' },
        { name: 'claude-agents-hub', tagline: 'エージェントハブ', description: 'DGM-H統合エージェント管理。プロファイルベースで80+エージェントを1コマンドで配備。' },
        { name: 'Travel Marketer', tagline: 'Threads旅行', description: 'AI旅行コンテンツチャンネル。CruisePick・HiddenJapanと連携。' },
        { name: 'Art Brain', tagline: 'アートマーケット', description: 'Brain for Artのコンパニオン。オークション分析・来歴インテリジェンス。' },
        { name: 'CropCastパイプライン', tagline: 'データインフラ', description: 'センサー→Edge→Cloud ETL。InfluxDB+Kafka+Grafana。農業データ製品の基盤。' },
      ],
    },
    services: {
      label: '// サービス', title: 'AIコンサルティングパッケージ',
      sub: '単一チャットボットから全社エージェントシステムまで。Mildoグループ自体がリファレンスケース。',
      ongoingLabel: '継続',
      packages: [
        { name: 'Agent Starter', timeline: '1〜2週間', description: 'RAGパイプライン付き単一AIエージェント/チャットボット。', features: ['カスタムAIエージェント', 'ドキュメントRAG', 'API統合', 'デプロイ&引き渡し'] },
        { name: 'Agent System', timeline: '4〜8週間', description: 'ナレッジグラフ統合マルチエージェントオーケストレーション。', features: ['マルチエージェント', 'KG(Neo4j)', 'ツール使用', 'モニタリング', 'ドキュメント'] },
        { name: 'Agent Enterprise', timeline: '8〜16週間', description: 'フルエンタープライズAIインフラ。RALPHループ品質ゲート。', features: ['エンタープライズ設計', '複数チーム', 'システム統合', 'RALPHループ', 'SLA&サポート'] },
        { name: 'Retainer', timeline: '継続', description: '継続的AI最適化。DGM-H自己改善をあなたのシステムに。', features: ['パフォーマンス監視', 'プロンプト最適化', 'DGM-H自己改善', '優先サポート'] },
      ],
    },
    caseStudies: {
      label: '// 事例', title: '主要実績',
      sub: '本番稼働中の実システム。デモでも試作品でもありません。',
      liveLabel: '稼働中',
      cases: [
        { subtitle: '1コマンドで80+エージェントを8+プロジェクトに配備するプラグインハブ', description: 'DGM-H inspired統合エージェント管理ハブ。RTK(60-90%トークン削減)、Slack MCP、Obsidian CLI、Codex Plugin統合。週次launchd cronで自律プロンプト改善。', metricLabels: ['エージェント', 'プロジェクト', '統合', 'トークン節約'] },
        { subtitle: 'Agri-Food Techグループ全社AI — 80エージェント・6BU', description: '6事業部に80エージェント(v2)。グループCEOが8BU長にルーティング。RALPHループが品質保証。4段階LLMティアでコスト最小化。DGM-H launchd自己改善。', metricLabels: ['エージェント', '事業部', 'LLMティア', 'BGエージェント'] },
        { subtitle: '2つのThreads AIチャンネルを動かすデュアルNeo4j KG', description: '食品KG(@fridgey_raid)+飲料KG(@pourandpair)。戦略→執筆→編集エージェントチェイン。KAMIS・天気・aT流通を毎日取得。食品10K+ノード・飲料18K+エンティティ。', metricLabels: ['KGドメイン', 'グラフノード', 'ライブチャンネル', 'データソース'] },
        { subtitle: '週末2日でゼロから本番SaaSまで', description: '2日でSubSwap出荷: 1,054食材、3,572代替品、10言語、$0インフラ。MildoCTA農場ブランド認知。W-8BEN-E提出済みアフィリエイト収益化。', metricLabels: ['食材', '代替品', '言語', 'インフラコスト'] },
        { subtitle: '24/7遠隔Mac制御のためのRaspberry Piインフラ', description: 'mildo-gateway: Pi上のSlackボット→SSH→Mac1/Mac2。WoL、ヘルスモニタリング、AIルーティング。owner/member/viewer権限。全自動エージェントスケジューリングの基盤。', metricLabels: ['Macノード', 'Slackコマンド', 'WoL対応', '稼働率目標'] },
      ],
    },
    techStack: { label: '// 技術スタック', title: '使用技術' },
    contact: {
      label: '// お問い合わせ', title: 'AIエージェントシステムを一緒に作りましょう。',
      sub: '無料15分相談を予約してください。ユースケースを診断し最適なアーキテクチャを提案します。',
      emailBtn: 'メールで問い合わせ', calendlyBtn: '打ち合わせを予約',
    },
  },

  zh: {
    siteTitle: 'Mildo AI — 80个AI智能体运营的Agri-Food Tech集团',
    siteDesc: 'Mildo AI — 智慧农场·数字产品·农业机器人R&D·AI咨询。自我进化的控股集团。',
    nav: {
      ventures: '集团架构', products: '投资组合', services: '服务',
      work: '案例', contact: '联系我们', cta: '立即咨询',
    },
    hero: {
      tagline: '80个AI智能体运营Agri-Food Tech集团。',
      sub: '智慧农场 · 数字产品 · 农业机器人R&D · AI咨询 — 自我进化的控股集团。',
      highlight: '80+智能体。17个项目。6个业务部门。自我改善架构。',
      cta1: '预约免费咨询', cta2: '查看投资组合',
      stats: [
        { value: '80+', label: 'AI智能体 (v2)' },
        { value: '17',  label: '投资组合项目' },
        { value: '6',   label: '业务部门' },
        { value: 'DGM', label: '自我改善循环' },
      ],
    },
    ventures: {
      label: '// 集团结构', title: 'Mildo集团 — 6个业务部门',
      sub: '每个业务部门都由AI智能体运营的控股集团。从土壤到SaaS。',
      viewEntity: '查看详情',
      items: [
        { statusLabel: '建设中', name: '农业法人BU', tagline: '优质圣马尔扎诺 · 庆北尚州', description: '配备AI优化营养液、IoT传感器、数字孪生模拟和农业机器人的半封闭玻璃温室。目标2027年首次收获，HORECA B2B直接分销。', metrics: ['1,000坪温室', '数字孪生引擎', '农业机器人(ROS2+YOLO)'] },
        { statusLabel: '运营中', name: '数字产品BU', tagline: 'SubSwap·CropCast·Chef\'s·Pour&Pair·Brain for Art·Hidden Japan·CruisePick', description: '7个AI原生数字产品，涵盖食品智能、旅行科技和艺术知识。每个产品运行在Neo4j知识图谱、多智能体流水线和零成本基础设施上。', metrics: ['7个运营/开发中产品', '3个Neo4j知识图谱', '$0基础设施SaaS'] },
        { statusLabel: 'R&D', name: '技术研究所BU', tagline: '数字孪生·农业机器人·优化研究', description: '三个研究实验室：数字孪生(GreenLight/FSPM作物模拟)、农业机器人(ROS2、YOLOv8、LeRobot)、优化研究(Bayesian RL)。', metrics: ['GreenLight+FSPM模型', 'ROS2+YOLOv8+Nav2', 'Bayesian优化RL'] },
        { statusLabel: '运营中', name: 'AI咨询BU', tagline: '多智能体系统设计与交付', description: '为企业设计构建多智能体系统。Mildo集团本身就是活生生的参考案例——6个BU中80个智能体，RALPH循环，DGM-H自我改善，4层LLM路由。', metrics: ['全公司智能体系统', 'RALPH循环质量门', 'mildo-gateway基础设施'] },
        { statusLabel: '运营中', name: '投资/交易BU', tagline: 'Agent Trader · Pine Seeds Forecasts', description: '自动化交易和预测系统。Agent Trader管理加密货币/股票仓位。Pine Seeds Forecasts用53个智能体和OHLCV编码进行农业期货预测。', metrics: ['Agent Trader(自动)', '53个预测智能体', 'OHLCV+LLM流水线'] },
        { statusLabel: '运营中', name: '集团总部(HQ)', tagline: '战略·法务·财务·税务·HR·基础设施', description: '管理跨BU战略、法务、财务、税务、治理和基础设施的集团总部。mildo-gateway(树莓派)提供24/7 Slack→Mac远程编排。', metrics: ['IPO路线图2031-32', 'mildo-gateway(Pi)', 'claude-agents-hub'] },
      ],
    },
    products: {
      label: '// 投资组合', title: '17个项目投资组合',
      sub: '从韩国智慧农场到全球SaaS产品。每个项目都由专属AI智能体管理。',
      explore: '查看', comingSoon: '开发中',
      items: [
        { name: 'SubSwap', tagline: '全球食材替代搜索引擎', description: '1,054食材·3,572替代品·10语言·$0基础设施。Cloudflare Pages React+TS。MildoCTA提升农场品牌认知。' },
        { name: 'CropCast', tagline: '农业智能平台', description: '49智能体、3轮辩论、40+数据源进行农产品价格预测。KAMIS→知识图谱→多智能体预测。' },
        { name: "Chef's Assistant", tagline: '食品智能 — @fridgey_raid', description: 'Neo4j食品KG+KAMIS批发价格爬虫。多智能体内容流水线(策略→写作→编辑)。置信度分级日更。' },
        { name: 'Pour & Pair', tagline: '饮料智能 — @pourandpair', description: '饮料知识图谱(18K+实体)。Threads AI频道。侍酒师级葡萄酒/美食配对。' },
        { name: 'Brain for Art', tagline: '艺术智能平台', description: 'CIDOC CRM本体，81K+节点。策展人艺术KG。MCP搜索。' },
        { name: 'Hidden Japan', tagline: '日本隐藏旅游地', description: '50智能体。MapLibre离线地图。高端订阅模式。AI精选日本小城市。' },
        { name: 'CruisePick+다다름', tagline: '邮轮&旅游', description: 'AI精选邮轮和日本旅游平台。KG推荐系统。' },
        { name: 'mildo.farm', tagline: '智慧农场企业网站', description: '圣马尔扎诺番茄智慧农场品牌网站。Astro+Tailwind。' },
        { name: '数字孪生', tagline: '作物模拟引擎', description: 'GreenLight+FSPM作物生长模拟。4层输入预测产量·风味·缺陷风险。' },
        { name: 'mildo-agri-robot', tagline: '自主收割机器人', description: 'ROS2+YOLOv8+Nav2。LeRobot模仿学习。温室成熟度/病虫害检测CV。' },
        { name: 'Agent Trader', tagline: '自动化交易系统', description: '风险控制多智能体加密货币/股票交易。自优化仓位管理。' },
        { name: 'Pine Seeds', tagline: '农业期货预测', description: '53智能体，OHLCV编码+LLM生成农业期货信号。' },
        { name: 'mildo-gateway', tagline: 'Pi基础设施', description: 'Pi→SSH→Mac1/Mac2。WoL、健康检查、AI路由。24/7远程枢纽。' },
        { name: 'claude-agents-hub', tagline: '智能体枢纽', description: 'DGM-H统一智能体管理。一键配置文件部署80+智能体。' },
        { name: 'Travel Marketer', tagline: 'Threads旅游', description: 'AI旅游内容频道。CruisePick·HiddenJapan联动。' },
        { name: 'Art Brain', tagline: '艺术市场', description: 'Brain for Art伴侣。拍卖分析·溯源智能。' },
        { name: 'CropCast管道', tagline: '数据基础设施', description: '传感器→Edge→Cloud ETL。InfluxDB+Kafka+Grafana。' },
      ],
    },
    services: {
      label: '// 服务', title: 'AI咨询套餐',
      sub: '从单一聊天机器人到全公司智能体系统。Mildo集团本身就是参考案例。',
      ongoingLabel: '持续',
      packages: [
        { name: 'Agent Starter', timeline: '1~2周', description: 'RAG流水线单一AI智能体/聊天机器人。', features: ['定制AI智能体', '文档RAG', 'API集成', '部署交接'] },
        { name: 'Agent System', timeline: '4~8周', description: '知识图谱集成多智能体编排。', features: ['多智能体编排', '知识图谱(Neo4j)', '工具调用', '监控仪表板', '文档培训'] },
        { name: 'Agent Enterprise', timeline: '8~16周', description: '完整企业AI基础设施，RALPH循环质量门。', features: ['企业级架构', '多团队', '系统集成', 'RALPH循环', 'SLA支持'] },
        { name: 'Retainer', timeline: '持续', description: '持续AI优化，DGM-H自我改善。', features: ['性能监控', '提示优化', 'DGM-H自改善', '优先支持'] },
      ],
    },
    caseStudies: {
      label: '// 案例', title: '精选案例',
      sub: '真实生产系统。不是演示，不是原型。',
      liveLabel: '运行中',
      cases: [
        { subtitle: '一键将80+智能体部署到8+项目的插件枢纽', description: 'DGM-H启发的统一智能体管理枢纽。RTK(60-90%令牌节省)、Slack MCP、Obsidian CLI、Codex Plugin集成。周度launchd cron自主提示改善。', metricLabels: ['智能体', '项目', '集成', '令牌节省'] },
        { subtitle: 'Agri-Food Tech集团全公司AI — 80智能体·6BU', description: '6个业务部门80智能体(v2)。集团CEO路由到8个BU负责人。RALPH循环保证质量。4层LLM成本最小化。DGM-H launchd自我改善。', metricLabels: ['智能体', '业务部门', 'LLM层级', '后台智能体'] },
        { subtitle: '驱动两个Threads AI频道的双Neo4j知识图谱', description: '食品KG(@fridgey_raid)+饮料KG(@pourandpair)。策略→写作→编辑智能体链。KAMIS·天气·aT流通每日采集。食品10K+节点·饮料18K+实体。', metricLabels: ['KG领域', '图节点', '直播频道', '数据源'] },
        { subtitle: '周末两天从零到生产SaaS', description: '2天内发布SubSwap: 1,054食材，3,572替代品，10语言，$0基础设施。MildoCTA农场品牌认知。W-8BEN-E联盟收益。', metricLabels: ['食材', '替代品', '语言', '基础设施成本'] },
        { subtitle: '24/7远程Mac编排的树莓派基础设施', description: 'mildo-gateway: Pi上Slack机器人→SSH→Mac1/Mac2。WoL·健康监控·AI路由。owner/member/viewer权限。所有自动化智能体调度基础。', metricLabels: ['Mac节点', 'Slack命令', 'WoL支持', '运行率目标'] },
      ],
    },
    techStack: { label: '// 技术栈', title: '使用技术' },
    contact: {
      label: '// 联系我们', title: '一起构建您的AI智能体系统。',
      sub: '预约免费15分钟咨询。评估您的使用场景并推荐最佳架构。',
      emailBtn: '发送邮件', calendlyBtn: '预约会议',
    },
  },

  ar: {
    siteTitle: 'ميلدو AI — 80 وكيل ذكاء اصطناعي يديرون مجموعة Agri-Food Tech',
    siteDesc: 'ميلدو AI — مزرعة ذكية، منتجات رقمية، R&D روبوتات زراعية، استشارات AI. مجموعة قابضة ذاتية التطور.',
    nav: {
      ventures: 'هيكل المجموعة', products: 'المحفظة', services: 'الخدمات',
      work: 'دراسات الحالة', contact: 'تواصل معنا', cta: 'تحدث معنا',
    },
    hero: {
      tagline: '80 وكيل ذكاء اصطناعي يديرون مجموعة Agri-Food Tech.',
      sub: 'مزرعة ذكية · منتجات رقمية · R&D روبوتات · استشارات AI — مجموعة قابضة ذاتية التطور.',
      highlight: '80+ وكيل. 17 مشروع. 6 وحدات أعمال. بنية ذاتية التحسين.',
      cta1: 'احجز استشارة مجانية', cta2: 'عرض المحفظة',
      stats: [
        { value: '80+', label: 'وكيل AI (v2)' },
        { value: '17',  label: 'مشاريع المحفظة' },
        { value: '6',   label: 'وحدات أعمال' },
        { value: 'DGM', label: 'حلقة التحسين الذاتي' },
      ],
    },
    ventures: {
      label: '// هيكل_المجموعة', title: 'مجموعة ميلدو — 6 وحدات أعمال',
      sub: 'مجموعة قابضة حيث كل وحدة أعمال تُدار بوكلاء AI. من التربة إلى SaaS.',
      viewEntity: 'عرض التفاصيل',
      items: [
        { statusLabel: 'قيد البناء', name: 'وحدة المزرعة الزراعية', tagline: 'سان مارتسانو · سانغجو، كوريا', description: 'بيت زجاجي شبه مغلق مع نظام تغذية AI، مستشعرات IoT، محاكاة توأم رقمي، وروبوت زراعي. هدف: أول حصاد 2027، توزيع B2B مباشر لـ HORECA.', metrics: ['بيت زجاجي 1,000 بيونج', 'محرك التوأم الرقمي', 'روبوت زراعي (ROS2+YOLO)'] },
        { statusLabel: 'نشط', name: 'وحدة المنتجات الرقمية', tagline: 'SubSwap · CropCast · Chef\'s · Pour&Pair · Brain for Art · Hidden Japan · CruisePick', description: '7 منتجات رقمية AI أصلية تغطي ذكاء الغذاء، تقنية السفر، ومعرفة الفن. كل منتج يعمل على رسوم بيانية Neo4j، خطوط أنابيب متعددة الوكلاء، وبنية تحتية بتكلفة صفر.', metrics: ['7 منتجات نشطة/قيد التطوير', '3 رسوم بيانية Neo4j', '$0 بنية SaaS'] },
        { statusLabel: 'R&D', name: 'وحدة معهد R&D', tagline: 'توأم رقمي · روبوت زراعي · بحث التحسين', description: '3 مختبرات بحثية: التوأم الرقمي (محاكاة GreenLight/FSPM)، الروبوت الزراعي (ROS2, YOLOv8, LeRobot)، بحث التحسين (Bayesian RL).', metrics: ['نماذج GreenLight+FSPM', 'ROS2+YOLOv8+Nav2', 'Bayesian RL'] },
        { statusLabel: 'نشط', name: 'وحدة استشارات AI', tagline: 'تصميم وتسليم أنظمة متعددة الوكلاء', description: 'تصميم وبناء أنظمة متعددة الوكلاء للمؤسسات. مجموعة ميلدو ذاتها هي حالة المرجع الحية — 80 وكيلاً في 6 وحدات، حلقات RALPH، DGM-H التحسين الذاتي.', metrics: ['أنظمة وكلاء كاملة', 'بوابات جودة RALPH', 'بنية mildo-gateway'] },
        { statusLabel: 'نشط', name: 'وحدة الاستثمار/التداول', tagline: 'Agent Trader · Pine Seeds Forecasts', description: 'أنظمة تداول وتنبؤ آلية. Agent Trader يدير مراكز العملات الرقمية/الأسهم. Pine Seeds Forecasts يستخدم 53 وكيلاً لتوقعات العقود الآجلة الزراعية.', metrics: ['Agent Trader (آلي)', '53 وكيل تنبؤ', 'خط OHLCV+LLM'] },
        { statusLabel: 'نشط', name: 'المقر الرئيسي (HQ)', tagline: 'استراتيجية · قانون · مالية · ضرائب · HR · بنية تحتية', description: 'المقر الرئيسي يدير الاستراتيجية، القانون، المالية، الضرائب، الحوكمة والبنية التحتية. mildo-gateway (Raspberry Pi) يوفر تنسيقاً عن بُعد 24/7 عبر Slack→Mac.', metrics: ['خارطة طريق IPO 2031-32', 'mildo-gateway (Pi)', 'claude-agents-hub'] },
      ],
    },
    products: {
      label: '// المحفظة', title: 'محفظة 17 مشروعاً',
      sub: 'من مزرعة ذكية في كوريا إلى منتجات SaaS عالمية. كل مشروع يديره وكلاء AI مخصصون.',
      explore: 'استكشف', comingSoon: 'قيد التطوير',
      items: [
        { name: 'SubSwap', tagline: 'محرك بديل المكونات العالمي', description: '1,054 مكوّن · 3,572 بديل · 10 لغات · $0 بنية تحتية.' },
        { name: 'CropCast', tagline: 'منصة الذكاء الزراعي', description: '49 وكيلاً، 3 جولات نقاش، 40+ مصدر بيانات لتوقعات أسعار المحاصيل.' },
        { name: "Chef's Assistant", tagline: 'ذكاء الغذاء — @fridgey_raid', description: 'Neo4j KG الغذاء + زواحف KAMIS. خط أنابيب متعدد الوكلاء.' },
        { name: 'Pour & Pair', tagline: 'ذكاء المشروبات — @pourandpair', description: 'KG المشروبات (18K+ كيان). قناة Threads AI. ذكاء اصطناعي لمستوى الصوميلييه.' },
        { name: 'Brain for Art', tagline: 'ذكاء الفن', description: 'CIDOC CRM، 81K+ عقدة. KG الفن للمنظمين والمجمعين.' },
        { name: 'Hidden Japan', tagline: 'وجهات اليابان الخفية', description: '50 وكيلاً. خرائط MapLibre غير متصلة. نموذج اشتراك متميز.' },
        { name: 'CruisePick+다다름', tagline: 'سياحة الكروز والجولات', description: 'منصة كروز وجولات يابانية بتنظيم AI.' },
        { name: 'mildo.farm', tagline: 'موقع المزرعة الذكية', description: 'موقع علامة مزرعة طماطم سان مارتسانو.' },
        { name: 'التوأم الرقمي', tagline: 'محاكاة المحاصيل', description: 'محاكاة GreenLight+FSPM. 4 طبقات للتنبؤ بالإنتاج والنكهة والمخاطر.' },
        { name: 'mildo-agri-robot', tagline: 'روبوت حصاد ذاتي', description: 'ROS2+YOLOv8+Nav2. تعلم المحاكاة LeRobot. رؤية حاسوبية للنضج والأمراض.' },
        { name: 'Agent Trader', tagline: 'تداول آلي', description: 'تداول متعدد الوكلاء بإدارة مخاطر. تحسين ذاتي.' },
        { name: 'Pine Seeds', tagline: 'توقعات العقود الآجلة', description: '53 وكيلاً، OHLCV+LLM لإشارات العقود الزراعية.' },
        { name: 'mildo-gateway', tagline: 'بنية Pi', description: 'Pi→SSH→Mac1/Mac2. WoL، مراقبة، توجيه AI. مركز 24/7.' },
        { name: 'claude-agents-hub', tagline: 'مركز الوكلاء', description: 'إدارة موحدة مستلهمة من DGM-H. نشر 80+ وكيل بأمر واحد.' },
        { name: 'Travel Marketer', tagline: 'Threads السياحة', description: 'قناة محتوى سياحي AI.' },
        { name: 'Art Brain', tagline: 'سوق الفن', description: 'رفيق Brain for Art. تحليلات المزادات والاستخبارات.' },
        { name: 'خط CropCast', tagline: 'بنية البيانات', description: 'ETL محسوس→Edge→Cloud. InfluxDB+Kafka+Grafana.' },
      ],
    },
    services: {
      label: '// الخدمات', title: 'حزم استشارات AI',
      sub: 'من روبوت محادثة واحد إلى نظام وكلاء كامل الشركة. مجموعة ميلدو نفسها هي حالة المرجع.',
      ongoingLabel: 'مستمر',
      packages: [
        { name: 'Agent Starter', timeline: '١~٢ أسبوع', description: 'وكيل AI واحد مع RAG.', features: ['وكيل مخصص', 'RAG', 'API', 'تسليم'] },
        { name: 'Agent System', timeline: '٤~٨ أسابيع', description: 'تنسيق متعدد الوكلاء مع KG.', features: ['متعدد الوكلاء', 'Neo4j KG', 'أدوات', 'مراقبة', 'توثيق'] },
        { name: 'Agent Enterprise', timeline: '٨~١٦ أسبوعاً', description: 'بنية AI كاملة، حلقات RALPH.', features: ['بنية متقدمة', 'فرق متعددة', 'تكامل أنظمة', 'حلقات RALPH', 'SLA'] },
        { name: 'Retainer', timeline: 'مستمر', description: 'تحسين مستمر، DGM-H ذاتي.', features: ['مراقبة الأداء', 'تحسين المطالبات', 'DGM-H ذاتي', 'دعم أولوي'] },
      ],
    },
    caseStudies: {
      label: '// دراسات الحالة', title: 'أعمال مختارة',
      sub: 'أنظمة حقيقية في الإنتاج. ليست عروضاً أو نماذج أولية.',
      liveLabel: 'مباشر',
      cases: [
        { subtitle: 'مركز يوزّع 80+ وكيل على 8+ مشاريع بأمر واحد', description: 'مركز موحد مستلهم من DGM-H. RTK (60-90% توفير رموز)، Slack MCP، Obsidian CLI، Codex Plugin. cron launchd أسبوعي للتحسين الذاتي.', metricLabels: ['وكلاء', 'مشاريع', 'تكاملات', 'توفير الرموز'] },
        { subtitle: 'AI كامل مجموعة Agri-Food Tech — 80 وكيل·6 وحدات', description: '80 وكيلاً (v2) في 6 وحدات. CEO المجموعة يوجه 8 مديري وحدات. حلقات RALPH للجودة. 4 مستويات LLM لتقليل التكلفة. DGM-H التحسين الذاتي.', metricLabels: ['وكلاء', 'وحدات', 'مستويات LLM', 'وكلاء خلفية'] },
        { subtitle: 'رسمان بيانيان مزدوجان Neo4j يشغّلان قناتي Threads', description: 'KG الغذاء (@fridgey_raid) + KG المشروبات (@pourandpair). سلسلة استراتيجي→كاتب→محرر. KAMIS+طقس+aT يومياً. غذاء 10K+ عقدة، مشروبات 18K+ كيان.', metricLabels: ['مجالات KG', 'عقد الرسم البياني', 'قنوات مباشرة', 'مصادر بيانات'] },
        { subtitle: 'من الصفر إلى SaaS إنتاجي في عطلة نهاية أسبوع', description: 'SubSwap في يومين: 1,054 مكوّن، 3,572 بديل، 10 لغات، $0 بنية تحتية. MildoCTA. W-8BEN-E للتسويق بالعمولة.', metricLabels: ['مكوّنات', 'بدائل', 'لغات', 'تكلفة البنية'] },
        { subtitle: 'بنية Raspberry Pi للتحكم عن بُعد 24/7 في Mac', description: 'mildo-gateway: Pi → SSH → Mac1/Mac2. WoL، مراقبة، توجيه AI. نظام صلاحيات. أساس جدولة كل الوكلاء الآلية.', metricLabels: ['عقد Mac', 'أوامر Slack', 'WoL مدعوم', 'هدف التشغيل'] },
      ],
    },
    techStack: { label: '// المكدس التقني', title: 'أدوات العمل' },
    contact: {
      label: '// تواصل معنا', title: 'لنبني نظام وكيل AI الخاص بك.',
      sub: 'احجز استشارة مجانية 15 دقيقة. سنقيّم حالتك ونوصي بالبنية المثلى.',
      emailBtn: 'راسلنا', calendlyBtn: 'احجز اجتماعاً',
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
