export const DIMENSIONS = [
  "strategy",
  "data",
  "talent",
  "governance",
  "tooling",
  "process",
  "culture",
  "measurement",
] as const;

export type Dimension = (typeof DIMENSIONS)[number];

export const DIMENSION_LABELS: Record<Dimension, string> = {
  strategy: "Strategy",
  data: "Data",
  talent: "Talent",
  governance: "Governance",
  tooling: "Tooling",
  process: "Process",
  culture: "Culture",
  measurement: "Measurement",
};

export const LEVEL_SCORES: Record<number, Record<Dimension, number>> = {
  0:   { strategy: 0,  data: 0,  talent: 0,  governance: 0,  tooling: 0,  process: 0,  culture: 0,  measurement: 0  },
  10:  { strategy: 10, data: 5,  talent: 5,  governance: 0,  tooling: 10, process: 5,  culture: 10, measurement: 0  },
  20:  { strategy: 20, data: 10, talent: 15, governance: 5,  tooling: 20, process: 10, culture: 20, measurement: 5  },
  30:  { strategy: 30, data: 25, talent: 25, governance: 15, tooling: 35, process: 20, culture: 30, measurement: 15 },
  40:  { strategy: 45, data: 40, talent: 35, governance: 25, tooling: 50, process: 35, culture: 40, measurement: 30 },
  50:  { strategy: 55, data: 55, talent: 50, governance: 45, tooling: 60, process: 50, culture: 50, measurement: 45 },
  60:  { strategy: 70, data: 65, talent: 60, governance: 60, tooling: 70, process: 65, culture: 60, measurement: 60 },
  70:  { strategy: 80, data: 75, talent: 70, governance: 75, tooling: 80, process: 75, culture: 70, measurement: 70 },
  80:  { strategy: 90, data: 85, talent: 80, governance: 85, tooling: 88, process: 85, culture: 80, measurement: 85 },
  90:  { strategy: 95, data: 95, talent: 90, governance: 95, tooling: 95, process: 95, culture: 90, measurement: 95 },
  100: { strategy: 100, data: 100, talent: 100, governance: 100, tooling: 100, process: 100, culture: 100, measurement: 100 },
};

export const LEVEL_DESCRIPTORS: Record<number, { name: string; description: string }> = {
  0:   { name: "Not started",      description: "No AI initiatives. Leadership unaware or unengaged. No data infrastructure or budget." },
  10:  { name: "Exploring",        description: "Leadership curious. Individuals experimenting privately. No formal initiative or budget." },
  20:  { name: "Experimenting",    description: "Informal pilots in isolated teams. No shared infrastructure. No governance." },
  30:  { name: "Piloting",         description: "First formal AI projects with defined scope. Budget allocated. Early governance discussions." },
  40:  { name: "Scaling",          description: "Multiple pilots running. Dedicated AI team forming. Early measurement frameworks." },
  50:  { name: "Systematizing",    description: "Centralized AI platform emerging. Governance policy drafted. KPIs defined." },
  60:  { name: "Operationalizing", description: "AI embedded in core workflows. Governance enforced. Talent pipeline established." },
  70:  { name: "Maturing",         description: "AI-driven decision making in most functions. Vendor relationships strategic." },
  80:  { name: "Optimizing",       description: "AI optimization running continuously. Token economics governed. Models retrained on live data." },
  90:  { name: "AI-native",        description: "AI is the operating model. Coordination through systems. Token P&L at board level." },
  100: { name: "Full AI-native",   description: "Every function governed by AI measurement. Human roles focused on strategy and judgment." },
};

export const COMPANY_SIZES = {
  xs: "X-Small (<50 people)",
  sm: "Small (50–200)",
  md: "Medium (200–500)",
  lg: "Large (500–1,000)",
  xl: "Enterprise (>1,000)",
} as const;

export type SizeKey = keyof typeof COMPANY_SIZES;

export const WHO_TO_INTERVIEW: Record<SizeKey, string> = {
  xs: "Focus on founder/CEO, one or two tech leads, and whoever runs operations. Three conversations will surface most of what you need.",
  sm: "Interview CEO, department heads (3–5 people), and 2–3 front-line practitioners. Aim for 8–10 structured conversations.",
  md: "Run structured interviews with C-suite (3–4), department heads (5–8), team leads (8–12), and a sample of practitioners (10–15). Supplement with a team-wide survey.",
  lg: "Structured survey plus interviews: executive team, all HODs, and a random sample of 20–30 practitioners. Include a dedicated IT and data team assessment.",
  xl: "Full enterprise diagnostic: executive committee, all SVPs/VPs, department-level surveys (300+ respondents), and a dedicated AI, data, and engineering org assessment. Appoint an internal diagnostic lead.",
};

export const QUESTIONS: Record<Dimension, { text: string; audience: string }[]> = {
  strategy: [
    { text: "Does your organisation have a documented AI strategy with defined business outcomes?", audience: "CEO / C-Suite" },
    { text: "Is AI investment explicitly included in the annual budget and 3-year roadmap?", audience: "CFO" },
    { text: "Have you mapped which business functions AI should augment, automate, or leave unchanged?", audience: "CIO / CTO" },
    { text: "Does your executive team review AI initiative progress at least quarterly?", audience: "CEO / C-Suite" },
    { text: "Has AI appeared in board-level communications or investor materials?", audience: "CEO / C-Suite" },
    { text: "Do you have a designated AI leader — Chief AI Officer, Head of AI, or equivalent?", audience: "CIO / CTO" },
    { text: "Is there defined criteria for deciding which AI initiatives to fund, continue, or kill?", audience: "Business Unit Lead" },
  ],
  data: [
    { text: "Do you have a centralised data platform or warehouse accessible by multiple teams?", audience: "Head of Data" },
    { text: "Is the quality of your core training and inference datasets formally assessed and tracked?", audience: "Head of Data" },
    { text: "Do teams have documented data access rights and lineage for AI-relevant datasets?", audience: "Engineering Lead" },
    { text: "Is there a master data management policy that covers AI feature datasets?", audience: "Head of Data" },
    { text: "Can you trace the origin and transformation history of data used in production AI models?", audience: "Engineering Lead" },
    { text: "Do you have labelled datasets or annotation pipelines for supervised learning use cases?", audience: "Head of Data" },
    { text: "Is data freshness and distribution drift monitored in production AI systems?", audience: "Engineering Lead" },
  ],
  talent: [
    { text: "Do you have dedicated AI/ML engineers or data scientists on staff?", audience: "CIO / CTO" },
    { text: "Is there a structured hiring plan for AI roles over the next 12 months?", audience: "HR / People" },
    { text: "Do non-technical teams receive regular AI literacy training?", audience: "HR / People" },
    { text: "Are AI upskilling pathways defined and budgeted for existing staff?", audience: "HR / People" },
    { text: "Does your organisation have expertise in prompt engineering or LLM fine-tuning?", audience: "Engineering Lead" },
    { text: "Is there a centre of excellence or community of practice for AI practitioners?", audience: "CIO / CTO" },
    { text: "Do you retain AI talent effectively — are attrition rates for AI roles tracked?", audience: "HR / People" },
  ],
  governance: [
    { text: "Does your organisation have a written AI ethics or responsible AI policy?", audience: "CIO / CTO" },
    { text: "Is there a formal risk assessment process for new AI deployments before launch?", audience: "CIO / CTO" },
    { text: "Are AI vendors evaluated against data privacy and security standards before onboarding?", audience: "CIO / CTO" },
    { text: "Is model performance reviewed on a defined cadence with documented outcomes?", audience: "Team Lead" },
    { text: "Do you have incident response procedures specific to AI system failures?", audience: "Engineering Lead" },
    { text: "Is there clear, named ownership for each AI system in production?", audience: "Business Unit Lead" },
    { text: "Are regulatory requirements — GDPR, EU AI Act, industry rules — mapped to your AI portfolio?", audience: "CIO / CTO" },
  ],
  tooling: [
    { text: "Do teams use a shared MLOps or AI development platform — Vertex AI, SageMaker, Azure ML, or equivalent?", audience: "Engineering Lead" },
    { text: "Is there a standardised CI/CD pipeline for deploying AI models to production?", audience: "Engineering Lead" },
    { text: "Are observability and monitoring tools deployed for AI model performance in production?", audience: "Engineering Lead" },
    { text: "Do you have a feature store or model registry used across multiple teams?", audience: "Engineering Lead" },
    { text: "Is there a standardised environment for AI experimentation — notebooks, sandboxes, compute?", audience: "Practitioner" },
    { text: "Are AI API costs — inference, tokens, embeddings — tracked at the feature or team level?", audience: "Engineering Lead" },
    { text: "Have you standardised on an LLM gateway or proxy for managing model access and cost?", audience: "Engineering Lead" },
  ],
  process: [
    { text: "Is there a defined intake process for new AI feature requests — from idea to funded initiative?", audience: "Business Unit Lead" },
    { text: "Do teams use a consistent framework for estimating AI project effort and token cost?", audience: "Team Lead" },
    { text: "Are AI output review steps formally embedded in operational workflows?", audience: "Operations" },
    { text: "Is there a documented deprecation process for retiring underperforming AI features?", audience: "Business Unit Lead" },
    { text: "Do sprint planning cycles explicitly allocate capacity for AI feature work?", audience: "Team Lead" },
    { text: "Are AI-related incidents tracked and reviewed in retrospectives alongside other system incidents?", audience: "Team Lead" },
    { text: "Is there a handoff protocol between AI research or prototype work and production engineering?", audience: "Engineering Lead" },
  ],
  culture: [
    { text: "Does senior leadership actively sponsor and visibly champion AI initiatives?", audience: "CEO / C-Suite" },
    { text: "Are employees encouraged to experiment with AI tools in their daily workflows?", audience: "HR / People" },
    { text: "Is there psychological safety to report AI failures or unexpected outputs without blame?", audience: "Team Lead" },
    { text: "Do cross-functional teams collaborate on AI initiatives rather than operating in silos?", audience: "Business Unit Lead" },
    { text: "Are AI successes and learnings shared across the organisation — showcases, newsletters, or equivalent?", audience: "HR / People" },
    { text: "Is resistance to AI adoption treated as a change management issue with structured support?", audience: "HR / People" },
    { text: "Do staff feel their roles are enhanced — not threatened — by AI, and is this measured?", audience: "HR / People" },
  ],
  measurement: [
    { text: "Are AI initiatives tracked against defined KPIs that connect to business outcomes?", audience: "Business Unit Lead" },
    { text: "Do you measure AI feature ROI — revenue contribution, cost savings, or both?", audience: "CFO" },
    { text: "Is token consumption tracked per feature, team, and sprint?", audience: "Engineering Lead" },
    { text: "Are model accuracy and output quality metrics reviewed on a defined cadence?", audience: "Team Lead" },
    { text: "Do you measure coordination overhead added by AI systems — review steps, hand-offs, rework?", audience: "Operations" },
    { text: "Is there a dashboard giving executives visibility into AI portfolio performance?", audience: "CEO / C-Suite" },
    { text: "Are target metrics established before an AI initiative launches — not retrospectively?", audience: "Business Unit Lead" },
  ],
};

export const OBSERVATIONS: { text: string; method: string }[] = [
  {
    text: "Check if Slack, Teams, or email shows recurring AI channels or threads — how active and cross-functional are they?",
    method: "Search collaboration tools",
  },
  {
    text: "Ask to see the product roadmap and count AI-related items vs. total items — what share is AI-driven?",
    method: "Document review",
  },
  {
    text: "Look for AI cost line items in budget documents, expense reports, or procurement records.",
    method: "Finance record review",
  },
  {
    text: "Observe a sprint planning or standup meeting — is AI feature work estimated and tracked the same way as other work?",
    method: "Meeting attendance",
  },
  {
    text: "Check active job postings for AI roles — compare open positions vs. headcount already in place.",
    method: "Careers page audit",
  },
  {
    text: "Review the past 6 months of incident post-mortems for any AI-related root causes or contributing factors.",
    method: "Incident log review",
  },
];

export interface PlanPhase {
  title: string;
  actions: string[];
  milestone: string;
}

type GapBucket = "small" | "medium" | "large";

function getGapBucket(currentPct: number, targetPct: number): GapBucket {
  const gap = targetPct - currentPct;
  if (gap < 20) return "small";
  if (gap <= 40) return "medium";
  return "large";
}

const PLAN_TEMPLATES: Record<
  GapBucket,
  (size: SizeKey, current: number, target: number) => PlanPhase[]
> = {
  small: (size, _current, target) => [
    {
      title: "Optimize existing AI operations",
      actions: [
        "Audit current AI features against token ceiling and ROI targets",
        "Identify the top 2–3 coordination bottlenecks slowing AI output",
        "Establish a weekly AI performance review cadence",
        "Document ownership and success criteria for every active AI feature",
        size === "xs" || size === "sm"
          ? "Assign a dedicated AI operating lead if not already in place"
          : "Confirm AI portfolio ownership across all business units",
        "Baseline token consumption per feature for variance tracking",
        "Draft a kill condition for any feature with no measurable output in 30 days",
        "Schedule a 60-day governance review with executive stakeholders",
      ],
      milestone:
        "Ownership documented for all active AI features. Token baselines established. Coordination bottlenecks identified with recommended actions.",
    },
    {
      title: "Tighten governance and measurement",
      actions: [
        "Enforce token ceilings in the next sprint cycle",
        "Publish the AI feature ledger to all relevant stakeholders",
        "Introduce a token velocity dashboard for executive review",
        "Run a coordination debt diagnostic on the top 3 high-cost workflows",
        "Define escalation criteria for features exceeding ceiling by >20%",
        size === "lg" || size === "xl"
          ? "Roll out tokenomics P&L reporting to all business unit heads"
          : "Connect AI costs to revenue or savings contribution in a simple P&L view",
        "Retire or redesign any features below minimum value threshold",
        "Document governance findings as an audit artifact for leadership",
      ],
      milestone:
        "Token ceilings enforced across sprints. Velocity dashboard live. At least one underperforming feature retired or redesigned.",
    },
    {
      title: `Reach ${LEVEL_DESCRIPTORS[target]?.name ?? "target level"} operating discipline`,
      actions: [
        "Finalize migration mandate if transitioning from story points to token metrics",
        "Run a full tokenomics P&L review at portfolio level",
        "Establish the measurement cadence as a permanent operating ritual",
        "Share governance results with board or executive committee",
        "Document lessons learned into the AI operating playbook",
        size === "xs" || size === "sm"
          ? "Plan AI capability expansion for Q2 based on validated ROI data"
          : "Present AI portfolio investment recommendations to leadership",
        "Set readiness targets for the next 6-month cycle",
        "Archive all 6 TLC operating artifacts for audit and continuity",
      ],
      milestone:
        "Tokenomics P&L reviewed at portfolio level. Operating discipline documented and shared. Next cycle targets defined.",
    },
  ],

  medium: (size, _current, target) => [
    {
      title: "Establish governance foundations",
      actions: [
        "Run the Coordination Debt Diagnostic across all AI-active workflows",
        "Build an AI feature inventory with ownership and success criteria for every active feature",
        "Define token ceilings for the next sprint cycle — even rough estimates are a starting point",
        size === "xs" || size === "sm"
          ? "Draft a simple AI governance policy (1–2 pages) covering ownership and review cadence"
          : "Draft a formal AI governance policy covering ownership, review cadence, and escalation paths",
        "Identify the 3 most undisciplined AI spend areas and set immediate ceilings",
        "Assign a named owner for each AI feature in the portfolio",
        "Schedule fortnightly AI operating reviews for the next 60 days",
        "Baseline all 8 TLC dimensions against your current state score",
      ],
      milestone:
        "Coordination debt diagnostic complete. Feature inventory with ownership live. Token ceilings set for all active features.",
    },
    {
      title: "Build measurement and accountability infrastructure",
      actions: [
        "Launch the Token Velocity Dashboard for executive review",
        "Run the first tokenomics P&L review for the top 3 AI features by spend",
        size === "lg" || size === "xl"
          ? "Deploy a centralised AI cost tracking solution across all teams"
          : "Implement lightweight AI cost attribution in your existing tooling",
        "Define KPIs for every AI feature in the ledger — agree with business owners",
        "Establish a sprint-level token capacity planning process",
        "Identify and retire the lowest-value AI features consuming budget",
        "Document 3–5 AI-specific risk scenarios and their governance responses",
        "Run AI literacy sessions for department heads and team leads",
        size === "xl"
          ? "Appoint AI governance leads in each major business unit"
          : "Designate an AI operations lead to own the measurement cadence",
      ],
      milestone:
        "Token velocity dashboard live. Tokenomics P&L completed for top features. KPIs agreed with all feature owners.",
    },
    {
      title: `Systematize toward ${LEVEL_DESCRIPTORS[target]?.name ?? "target state"}`,
      actions: [
        "Draft and present a migration mandate for AI-native governance metrics",
        "Complete the tokenomics P&L worksheet for the full AI portfolio",
        "Run a second coordination debt diagnostic to measure progress",
        size === "xs" || size === "sm"
          ? "Publish an AI operating playbook for the team"
          : "Publish an AI operating playbook and governance handbook for the organisation",
        "Set readiness targets and measurement KPIs for the next 90-day cycle",
        "Present governance artifacts and ROI evidence to executive committee",
        size === "lg" || size === "xl"
          ? "Begin scaling proven AI governance model to all remaining business units"
          : "Expand AI governance model to all functions using proven artifacts",
        "Archive TLC operating artifacts and schedule quarterly review",
        "Define the next level of AI operating maturity as a strategic objective",
      ],
      milestone:
        "Migration mandate approved. Full portfolio P&L complete. AI operating playbook published and distributed.",
    },
  ],

  large: (size, _current, target) => [
    {
      title: "Diagnose and baseline",
      actions: [
        "Run the Coordination Debt Diagnostic across the entire organisation — prioritise by cost and frequency",
        "Conduct structured stakeholder interviews to surface hidden AI initiatives and shadow spend",
        size === "xs" || size === "sm"
          ? "Map every AI tool in use — sanctioned or unsanctioned — and document owner and cost"
          : "Commission an organisation-wide AI inventory audit covering all teams and vendors",
        "Establish a working AI governance committee with executive sponsorship",
        "Define your target readiness level and publish it as a strategic objective",
        "Identify the 2–3 AI use cases with the highest value-to-risk ratio as quick wins",
        "Baseline all 8 TLC dimensions with evidence-backed scores",
        "Assign interim AI feature owners for every identified initiative",
        "Set a 30-day deadline to have every active AI spend attributed to a named owner",
      ],
      milestone:
        "AI inventory complete. Coordination debt diagnostic done. Governance committee formed with executive sponsor named.",
    },
    {
      title: "Install governance and measurement infrastructure",
      actions: [
        "Launch the AI Feature Ledger for all identified initiatives",
        "Set token ceilings for every feature — start conservative, adjust with evidence",
        "Implement token consumption tracking at feature and team level",
        size === "xl"
          ? "Deploy an enterprise AI cost governance platform integrated with finance systems"
          : "Implement lightweight AI cost attribution using existing tooling or spreadsheets",
        "Define and enforce a formal AI feature intake process — no new AI spend without governance approval",
        "Run AI governance training for all team leads and department heads",
        "Retire or freeze all AI features that cannot demonstrate measurable business value",
        "Publish AI governance policy — ownership, ceilings, review cadence, kill conditions",
        size === "lg" || size === "xl"
          ? "Stand up dedicated AI operating team with cross-functional representation"
          : "Assign an AI operating lead and define their mandate formally",
      ],
      milestone:
        "Feature ledger live. Token ceilings enforced for all active spend. AI governance policy published and signed off by executive sponsor.",
    },
    {
      title: `Build toward ${LEVEL_DESCRIPTORS[target]?.name ?? "target state"}`,
      actions: [
        "Run first full tokenomics P&L review at feature and portfolio level",
        "Present AI portfolio economics to executive committee or board",
        "Draft migration mandate to move from story points to token-based governance metrics",
        size === "xs" || size === "sm"
          ? "Implement a simple token velocity tracking process into sprint workflow"
          : "Deploy Token Velocity Dashboard for executive and operating team review",
        "Run a second coordination debt diagnostic — compare against Day 1 baseline",
        "Begin active AI talent development — upskilling pathways, hiring plan, or both",
        size === "lg" || size === "xl"
          ? "Scale governance model to all remaining business units with dedicated AI leads"
          : "Extend governance model to all functions and embed into operating cadence",
        "Publish AI operating playbook — consolidate all 6 TLC artifacts into a single governance document",
        "Define 6-month and 12-month readiness targets and commit to board-level reporting",
      ],
      milestone:
        "Tokenomics P&L presented to executive committee. Migration mandate approved. AI operating playbook published organisation-wide.",
    },
  ],
};

export function generatePlan(
  size: SizeKey,
  currentPct: number,
  targetPct: number
): PlanPhase[] {
  const bucket = getGapBucket(currentPct, targetPct);
  return PLAN_TEMPLATES[bucket](size, currentPct, targetPct);
}
