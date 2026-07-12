export type Locale = 'ko' | 'en';

export const localeConfig: Record<Locale, { label: string; short: string; flag: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  ko: { label: '한국어',  short: 'KO', flag: '🇰🇷', dir: 'ltr', htmlLang: 'ko' },
  en: { label: 'English', short: 'EN', flag: '🇺🇸', dir: 'ltr', htmlLang: 'en' },
};

export const locales = Object.keys(localeConfig) as Locale[];

const translations = {
  ko: {
    siteTitle: '밀도 MILDO — AI 엔지니어링 스튜디오 | LLM·Agentic AI 시스템 구축',
    siteDesc: 'LLM·Agentic AI 시스템을 실서비스 수준으로. AI 도입 디스커버리(1~2주) → 프로토타입(2~4주) → 제품 초기버전 MVP(4~8주), 프로젝트 단위 딜리버리. 멀티에이전트 오케스트레이션 · RAG·지식그래프 · MCP 서버 · AI 백엔드.',
    nav: {
      services: '서비스 패키지', work: '실적', expertise: '전문 영역',
      team: '팀', contact: '문의', cta: '프로젝트 문의',
    },
    hero: {
      badge: 'mildo — ai engineering studio',
      taglineTop: 'LLM·Agentic AI 시스템을',
      taglineAccent: '실서비스 수준으로.',
      sub: '디스커버리에서 제품 초기버전까지, 프로젝트 단위로 딜리버리합니다.',
      highlight: '슬라이드가 아니라, 실제로 돌아가는 시스템을 만듭니다.',
      proofLabel: '직접 만들어 운영 중인 서비스',
      cta1: '프로젝트 문의하기', cta2: '서비스 패키지 보기',
      stats: [
        { value: '4',    label: '라이브 프로덕트' },
        { value: '53',   label: '에이전트 예측 파이프라인' },
        { value: '432K', label: '지식그래프 노드' },
        { value: '10',   label: '언어 글로벌 서비스' },
      ],
    },
    services: {
      label: '// 서비스_패키지', title: '프로젝트 단위 딜리버리 — 3단계 패키지',
      sub: '필요한 단계만 계약합니다. 각 단계는 독립적으로 시작·종료할 수 있고, 이전 단계의 산출물이 다음 단계의 입력이 됩니다.',
      startBadge: '시작 단계',
      packages: [
        {
          step: '01', name: 'AI 도입 디스커버리', timeline: '1~2주',
          description: '무엇을, 왜, 어떤 순서로 만들지부터 정리합니다. 현업 인터뷰로 현황을 진단하고, 요구사항을 구조화해 실행 가능한 기술 로드맵을 제시합니다.',
          features: ['현황 인터뷰 & 업무 프로세스 진단', '요구사항 구조화 — 기능 명세 초안', '기술 아키텍처 & 데이터 전략 제안', '단계별 로드맵 + 구축 견적'],
        },
        {
          step: '02', name: '프로토타입', timeline: '2~4주',
          description: '작동하는 검증물을 만듭니다. 핵심 가설을 실제 데이터로 검증하고, 다음 단계로 갈지 말지 판단할 수 있는 근거를 드립니다.',
          features: ['작동하는 데모 — 실데이터 연동', '핵심 가설 검증 & 품질 평가 리포트', 'LLM 비용·응답속도 측정', 'MVP 확장 설계안'],
        },
        {
          step: '03', name: '제품 초기버전 (MVP)', timeline: '4~8주',
          description: '운영 가능한 v1을 딜리버리합니다. 배포·모니터링·문서까지 포함해, 내부 팀이 이어받아 운영할 수 있는 상태로 넘겨드립니다.',
          features: ['프로덕션 배포 — 클라우드 인프라 구성', '모니터링 & 품질 평가 파이프라인', '운영 문서 & 핸드오프 세션', '출시 후 안정화 지원'],
        },
      ],
      note: '단계별 계약 · 법인 세금계산서 발행 · 원격 협업 기본, 필요 시 대면 미팅',
    },
    work: {
      label: '// 실적', title: '라이브 프로덕트',
      sub: '포트폴리오용 데모가 아니라, 직접 설계·구축해 지금 운영 중인 서비스입니다. 링크를 눌러 바로 확인하실 수 있습니다.',
      liveLabel: 'LIVE', visitLabel: '바로가기',
      items: [
        {
          name: 'cropcast.ai', tagline: '농산물 가격 예측 엔진',
          description: '53개 에이전트가 협업하는 멀티에이전트 예측 시스템. 공공 도매가 데이터를 매일 자동 수집해 지식그래프로 구조화하고, 에이전트 토론을 거친 예측 리포트를 자동 발행합니다.',
          metrics: [
            { value: '53',  label: '협업 에이전트' },
            { value: '매일', label: '자동 파이프라인' },
            { value: 'KG',  label: '지식그래프 기반' },
          ],
        },
        {
          name: 'provenio.art', tagline: '아트 지식그래프 + MCP API',
          description: 'CIDOC CRM 온톨로지 기반 432K 노드 지식그래프. 작품·작가·소장이력 데이터를 MCP API로 제공하는 B2B 인텔리전스 서비스로, 해외 유료 고객이 사용 중입니다.',
          metrics: [
            { value: '432K', label: '그래프 노드' },
            { value: 'MCP',  label: 'API 인터페이스' },
            { value: 'B2B',  label: '해외 유료 고객' },
          ],
        },
        {
          name: 'subswap.app', tagline: '글로벌 식재료 대체 검색 PWA',
          description: '식재료 대체재를 검색하는 글로벌 웹 서비스. 10개 언어를 지원하는 설치형 PWA로, 서버리스 아키텍처로 운영 비용을 최소화했습니다.',
          metrics: [
            { value: '10',  label: '지원 언어' },
            { value: 'PWA', label: '설치형 웹앱' },
            { value: '$0',  label: '서버 운영비' },
          ],
        },
        {
          name: '묘운', tagline: 'iOS 사주 분석 앱',
          description: '전통 명리학 계산 엔진과 LLM 해석 파이프라인을 결합한 iOS 앱. 천문 데이터 기반 만세력 엔진을 자체 구현해 정확한 사주 계산 위에 AI 해석을 얹었습니다.',
          metrics: [
            { value: 'iOS',   label: '네이티브 앱' },
            { value: '만세력', label: '자체 계산 엔진' },
            { value: 'LLM',   label: '해석 파이프라인' },
          ],
        },
      ],
    },
    expertise: {
      label: '// 전문_영역', title: '네 가지 축으로 LLM 시스템을 만듭니다',
      sub: '모두 위 라이브 프로덕트에서 실제로 운영하며 검증한 기술입니다.',
      items: [
        {
          name: '멀티에이전트 오케스트레이션',
          description: '단일 프롬프트로 풀리지 않는 문제를 여러 에이전트의 협업으로 풉니다. 역할 분리, 품질 게이트, 모델별 비용 라우팅까지 설계합니다.',
          tags: ['Claude API', 'OpenAI API', 'LangGraph', 'Agent Loop', '품질 게이트'],
        },
        {
          name: 'RAG · 지식그래프 · 온톨로지',
          description: '문서 검색을 넘어 도메인 지식을 그래프로 구조화합니다. 근거 기반 응답이 필요한 서비스의 데이터 기반을 만듭니다.',
          tags: ['Neo4j', 'CIDOC CRM', 'Vector Search', 'Embedding', 'Cypher'],
        },
        {
          name: 'MCP 서버',
          description: '사내 데이터와 API를 LLM이 안전하게 쓸 수 있는 도구로 만듭니다. Claude·ChatGPT 등 표준 클라이언트 어디서든 연결됩니다.',
          tags: ['MCP', 'Tool Use', 'API 설계', '인증·권한'],
        },
        {
          name: 'AI 백엔드 · 파이프라인',
          description: '수집 → 처리 → 추론 → 발행까지 매일 도는 자동 파이프라인을 만듭니다. 모니터링과 실패 복구를 포함한 운영 설계까지.',
          tags: ['Python', 'FastAPI', 'ETL', '스케줄링', '모니터링'],
        },
      ],
    },
    team: {
      label: '// 팀', title: '개발 총괄',
      sub: '수사 데이터 분석 → 엔터프라이즈 AI·보안 컨설팅 → 법률 AI 프로덕트. 실무로 검증된 경력이 프로젝트를 직접 리드합니다.',
      jobs: [
        {
          period: '10년', org: '경찰청', role: '지능범죄수사 · 데이터분석',
          description: '지능범죄 수사 현장에서 대규모 비정형 데이터를 다루는 데이터 기반 수사·분석 체계를 구축하고 운영했습니다.',
          tags: ['데이터 분석', '수사 인텔리전스'],
        },
        {
          period: '3년', org: 'IBM', role: 'AI · 보안 컨설팅',
          description: '엔터프라이즈 고객 대상 AI·보안 컨설팅을 수행했습니다. 고객 평가 10/10 만점 2건.',
          tags: ['엔터프라이즈 AI', '보안 컨설팅', '고객평가 10/10 ×2'],
        },
        {
          period: '1.5년', org: '엘박스 (리걸테크)', role: '법률 AI 프로덕트 구축 · 운영',
          description: '법률 도메인의 LLM 프로덕트를 실서비스로 구축하고 운영했습니다. 검색·생성·평가 파이프라인 전 구간을 직접 담당.',
          tags: ['Legal AI', 'LLM 프로덕트', '서비스 운영'],
        },
      ],
      eduTitle: '학력',
      education: [{ school: 'Georgia Tech', degree: 'MS Analytics 재학' }],
      certTitle: '자격 · 평가',
      certifications: ['CISSP', 'CCSP', 'IBM 고객평가 10/10 ×2'],
    },
    contact: {
      label: '// 문의', title: 'AI 도입, 어디서부터 시작할지 막막하다면.',
      sub: '지금 상황과 만들고 싶은 것을 간단히 적어 보내주세요. 2영업일 내에 회신드리고, 디스커버리로 시작할지 함께 판단합니다.',
      emailBtn: '프로젝트 문의 메일 보내기',
      note: '단계별 계약 · 법인 세금계산서 발행 · NDA 체결 가능',
      footerTag: 'AI Engineering Studio',
    },
  },

  en: {
    siteTitle: 'MILDO — AI Engineering Studio | LLM & Agentic AI Systems',
    siteDesc: 'LLM and agentic AI systems, built to production standard. Discovery (1–2 wks) → Prototype (2–4 wks) → First product version, MVP (4–8 wks) — delivered project by project. Multi-agent orchestration · RAG & knowledge graphs · MCP servers · AI backends.',
    nav: {
      services: 'Services', work: 'Work', expertise: 'Expertise',
      team: 'Team', contact: 'Contact', cta: 'Start a Project',
    },
    hero: {
      badge: 'mildo — ai engineering studio',
      taglineTop: 'LLM & agentic AI systems,',
      taglineAccent: 'built to production standard.',
      sub: 'From discovery to your first product version — delivered project by project.',
      highlight: 'Not slideware. Systems that actually run.',
      proofLabel: 'Products we build and operate',
      cta1: 'Start a project', cta2: 'View service packages',
      stats: [
        { value: '4',    label: 'Live Products' },
        { value: '53',   label: 'Agent Forecast Pipeline' },
        { value: '432K', label: 'Knowledge Graph Nodes' },
        { value: '10',   label: 'Languages Served' },
      ],
    },
    services: {
      label: '// service_packages', title: 'Project-Based Delivery — 3 Packages',
      sub: 'Contract only the stage you need. Each stage starts and ends independently, and its deliverables feed the next one.',
      startBadge: 'Start here',
      packages: [
        {
          step: '01', name: 'AI Discovery', timeline: '1–2 weeks',
          description: 'We start by defining what to build, why, and in what order. Stakeholder interviews, structured requirements, and an actionable technical roadmap.',
          features: ['Stakeholder interviews & process audit', 'Structured requirements — draft spec', 'Architecture & data strategy proposal', 'Phased roadmap + build estimate'],
        },
        {
          step: '02', name: 'Prototype', timeline: '2–4 weeks',
          description: 'A working proof — not slides. We validate the core hypothesis on your real data and give you the evidence to decide whether to proceed.',
          features: ['Working demo on real data', 'Hypothesis validation & quality report', 'LLM cost & latency measurement', 'MVP scale-up design'],
        },
        {
          step: '03', name: 'First Product Version (MVP)', timeline: '4–8 weeks',
          description: 'An operable v1, delivered. Deployment, monitoring, and documentation included — handed over so your team can run it.',
          features: ['Production deployment — cloud infra', 'Monitoring & evaluation pipeline', 'Ops documentation & handoff session', 'Post-launch stabilization support'],
        },
      ],
      note: 'Per-stage contracts · Corporate tax invoices (KR) · Remote-first, on-site meetings when needed',
    },
    work: {
      label: '// work', title: 'Live Products',
      sub: 'Not portfolio demos — services we designed, built, and operate in production today. Click through and see for yourself.',
      liveLabel: 'LIVE', visitLabel: 'Visit',
      items: [
        {
          name: 'cropcast.ai', tagline: 'Agricultural price forecasting engine',
          description: 'A multi-agent forecasting system where 53 agents collaborate. Public wholesale-price data is ingested daily, structured into a knowledge graph, and published as debate-refined forecast reports — fully automated.',
          metrics: [
            { value: '53',    label: 'Collaborating agents' },
            { value: 'Daily', label: 'Automated pipeline' },
            { value: 'KG',    label: 'Knowledge-graph based' },
          ],
        },
        {
          name: 'provenio.art', tagline: 'Art knowledge graph + MCP API',
          description: 'A 432K-node knowledge graph built on the CIDOC CRM ontology. Artwork, artist, and provenance data served over an MCP API — a B2B intelligence service with paying international customers.',
          metrics: [
            { value: '432K', label: 'Graph nodes' },
            { value: 'MCP',  label: 'API interface' },
            { value: 'B2B',  label: 'Paying intl. customers' },
          ],
        },
        {
          name: 'subswap.app', tagline: 'Global ingredient-substitution PWA',
          description: 'A global web service for finding ingredient substitutes. An installable PWA in 10 languages, running on a serverless architecture that keeps operating costs near zero.',
          metrics: [
            { value: '10',  label: 'Languages' },
            { value: 'PWA', label: 'Installable web app' },
            { value: '$0',  label: 'Server cost' },
          ],
        },
        {
          name: 'Myoun', tagline: 'iOS saju (Four Pillars) analysis app',
          description: 'An iOS app combining a traditional Korean astrology calculation engine with an LLM interpretation pipeline. A custom calendrical engine built on astronomical data ensures accurate charts beneath the AI layer.',
          metrics: [
            { value: 'iOS',    label: 'Native app' },
            { value: 'Engine', label: 'Custom calendrical core' },
            { value: 'LLM',    label: 'Interpretation pipeline' },
          ],
        },
      ],
    },
    expertise: {
      label: '// expertise', title: 'Four Pillars of Our LLM Engineering',
      sub: 'Every one of these is running in production in the products above.',
      items: [
        {
          name: 'Multi-Agent Orchestration',
          description: 'Problems a single prompt can\'t solve, solved by agents working together — role separation, quality gates, and per-model cost routing.',
          tags: ['Claude API', 'OpenAI API', 'LangGraph', 'Agent Loop', 'Quality Gates'],
        },
        {
          name: 'RAG · Knowledge Graphs · Ontology',
          description: 'Beyond document search: we structure domain knowledge as graphs — the data foundation for services that must answer with evidence.',
          tags: ['Neo4j', 'CIDOC CRM', 'Vector Search', 'Embedding', 'Cypher'],
        },
        {
          name: 'MCP Servers',
          description: 'We turn your internal data and APIs into tools LLMs can use safely — connectable from Claude, ChatGPT, and any standard MCP client.',
          tags: ['MCP', 'Tool Use', 'API Design', 'Auth & Permissions'],
        },
        {
          name: 'AI Backends · Pipelines',
          description: 'Ingest → process → infer → publish, running automatically every day. Designed for operations: monitoring and failure recovery included.',
          tags: ['Python', 'FastAPI', 'ETL', 'Scheduling', 'Observability'],
        },
      ],
    },
    team: {
      label: '// team', title: 'Engineering Lead',
      sub: 'Criminal-intelligence data analysis → enterprise AI & security consulting → legal-tech AI products. A track record proven in the field, leading every project directly.',
      jobs: [
        {
          period: '10 yrs', org: 'Korean National Police Agency', role: 'Criminal Intelligence · Data Analysis',
          description: 'Built and ran data-driven investigation and analysis systems handling large-scale unstructured data in intelligence-crime investigations.',
          tags: ['Data Analysis', 'Investigative Intelligence'],
        },
        {
          period: '3 yrs', org: 'IBM', role: 'AI & Security Consulting',
          description: 'Delivered AI and security consulting for enterprise clients. Two perfect 10/10 client evaluations.',
          tags: ['Enterprise AI', 'Security Consulting', 'Client rating 10/10 ×2'],
        },
        {
          period: '1.5 yrs', org: 'LBOX (Legal Tech)', role: 'Legal AI Product — Build & Operate',
          description: 'Built and operated production LLM products in the legal domain — owning the full retrieval, generation, and evaluation pipeline.',
          tags: ['Legal AI', 'LLM Products', 'Production Ops'],
        },
      ],
      eduTitle: 'Education',
      education: [{ school: 'Georgia Tech', degree: 'MS Analytics (in progress)' }],
      certTitle: 'Credentials',
      certifications: ['CISSP', 'CCSP', 'IBM client rating 10/10 ×2'],
    },
    contact: {
      label: '// contact', title: 'Not sure where to start with AI?',
      sub: 'Send a short note about where you are and what you want to build. We reply within two business days and decide together whether discovery is the right first step.',
      emailBtn: 'Email us about your project',
      note: 'Per-stage contracts · Corporate tax invoices (KR) · NDA available',
      footerTag: 'AI Engineering Studio',
    },
  },
};

export type T = typeof translations.ko;

export function t(locale: Locale): T {
  return (translations[locale] ?? translations.ko) as T;
}

export function getLocalePath(locale: Locale, path = '/'): string {
  const cleanPath = path.replace(/^\/(en|ko)(?=\/|$)/, '') || '/';
  return locale === 'ko' ? cleanPath : `/en${cleanPath === '/' ? '/' : cleanPath}`;
}

export function detectLocale(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'ko';
}
