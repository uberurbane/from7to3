export interface TLCTemplate {
  slug: string;
  title: string;
  shortDescription: string;
  purpose: string;
  bestUsedBy: string;
  output: string;
  sections: string[];
  fields: string[];
  exampleRows: string[];
  reviewQuestions: string[];
  decisionCriteria: string[];
}

export const tlcTemplates: TLCTemplate[] = [
  {
    slug: "coordination-debt-diagnostic",
    title: "Coordination Debt Diagnostic",
    shortDescription:
      "Identify where translation, latency, reporting, and duplication costs accumulate across AI execution.",
    purpose:
      "Identify where translation, latency, reporting, and duplication costs accumulate across AI execution. Surfaces the coordination overhead that grows invisibly as AI systems multiply without governance.",
    bestUsedBy: "CIOs, transformation leaders, AI operating teams.",
    output: "A prioritized view of coordination friction.",
    sections: [
      "Translation Cost",
      "Latency Cost",
      "Reporting Cost",
      "Duplication Cost",
      "Ownership Gaps",
      "Decision Bottlenecks",
      "Priority Score",
    ],
    fields: [
      "Process / workflow",
      "Current coordination step",
      "Teams involved",
      "Delay caused",
      "Rework caused",
      "AI system involved",
      "Estimated coordination cost",
      "Severity",
      "Recommended action",
    ],
    exampleRows: [
      "Customer support summarization workflow",
      "Sales proposal generation workflow",
      "Engineering ticket triage workflow",
    ],
    reviewQuestions: [
      "Where are humans translating work between systems?",
      "Which steps exist only to coordinate other steps?",
      "Where is AI output reviewed multiple times?",
      "Which coordination costs would disappear with better governance?",
    ],
    decisionCriteria: [
      "Eliminate",
      "Automate",
      "Govern",
      "Escalate",
      "Leave unchanged",
    ],
  },
  {
    slug: "feature-ledger-template",
    title: "Feature Ledger Template",
    shortDescription:
      "Convert AI ideas into governed inventory with ownership, success criteria, token ceilings, and kill conditions.",
    purpose:
      "Convert AI ideas into governed inventory with ownership, success criteria, token ceilings, and kill conditions. Creates the accountability record that turns informal AI deployment into managed portfolio execution.",
    bestUsedBy: "AI Product Managers and product leaders.",
    output: "A controlled portfolio of AI-enabled features.",
    sections: [
      "Feature Identity",
      "Business Owner",
      "AI Capability Type",
      "Success Criteria",
      "Token Ceiling",
      "Runtime Boundary",
      "Kill Condition",
      "Review Cadence",
    ],
    fields: [
      "Feature name",
      "Business objective",
      "Owner",
      "User group",
      "Model / agent used",
      "Expected output",
      "Token ceiling",
      "Measured value",
      "Risk level",
      "Kill condition",
      "Status",
    ],
    exampleRows: [
      "AI support response assistant",
      "Sales account research agent",
      "Product requirements summarizer",
    ],
    reviewQuestions: [
      "Who owns this AI feature?",
      "What business value must it produce?",
      "What is the maximum acceptable token spend?",
      "What condition would cause this feature to be retired?",
    ],
    decisionCriteria: [
      "Fund",
      "Continue",
      "Reduce allocation",
      "Redesign",
      "Kill",
    ],
  },
  {
    slug: "token-capacity-planning-sheet",
    title: "Token Capacity Planning Sheet",
    shortDescription:
      "Allocate token budgets before execution begins — replacing uncapped AI spend with governed sprint allocation.",
    purpose:
      "Allocate token budgets before execution begins. Replaces uncapped AI spend with governed sprint allocation — treating cognitive compute as a finite resource that must be planned, tracked, and reviewed.",
    bestUsedBy: "AI PMs, engineering leaders, and finance partners.",
    output: "Sprint-level token ceilings and allocation decisions.",
    sections: [
      "Sprint Objective",
      "Feature Allocation",
      "Token Ceiling",
      "Expected Output",
      "Variance Tracking",
      "Approval Status",
    ],
    fields: [
      "Sprint name",
      "Feature",
      "Owner",
      "Planned token ceiling",
      "Expected business output",
      "Risk level",
      "Actual token burn",
      "Ceiling variance",
      "Waste rate",
      "Approval status",
    ],
    exampleRows: [
      "Sprint 12 support automation",
      "Sprint 13 sales workflow agent",
      "Sprint 14 product intelligence assistant",
    ],
    reviewQuestions: [
      "Which features deserve token allocation this sprint?",
      "Which features are consuming more than planned?",
      "Where should ceilings be tightened?",
      "Which work should be deferred due to low expected value?",
    ],
    decisionCriteria: [
      "Approve allocation",
      "Reduce ceiling",
      "Hold for review",
      "Escalate",
      "Remove from sprint",
    ],
  },
  {
    slug: "migration-mandate-brief",
    title: "Migration Mandate Brief",
    shortDescription:
      "Establish executive authority for moving from subjective story points to measurable AI execution governance.",
    purpose:
      "Establish executive authority for moving from subjective story points to measurable AI execution governance. Creates the organizational mandate required to enforce the transition — with defined metrics, cutover dates, and leadership accountability.",
    bestUsedBy: "CIOs, CTOs, and transformation sponsors.",
    output: "A formal operating mandate for AI-native governance.",
    sections: [
      "Executive Decision",
      "Current Operating Gap",
      "Migration Scope",
      "Governance Standard",
      "Cutover Date",
      "Required Metrics",
      "Leadership Review",
    ],
    fields: [
      "Sponsor",
      "Current planning method",
      "Target governance method",
      "Teams affected",
      "Metrics replacing story points",
      "Cutover date",
      "Required reporting cadence",
      "Escalation owner",
    ],
    exampleRows: [
      "AI product team migration",
      "Enterprise automation portfolio migration",
      "Engineering workflow governance migration",
    ],
    reviewQuestions: [
      "What operating metric is being retired?",
      "What governance metric replaces it?",
      "Who has authority to enforce the cutover?",
      "What happens if teams continue using old measures?",
    ],
    decisionCriteria: [
      "Approve mandate",
      "Revise scope",
      "Pilot first",
      "Delay cutover",
      "Reject migration",
    ],
  },
  {
    slug: "token-velocity-dashboard",
    title: "Token Velocity Dashboard",
    shortDescription:
      "Track value delivered relative to token consumption — the core signal for AI execution efficiency.",
    purpose:
      "Track value delivered relative to token consumption. Produces the core execution efficiency signal across features and teams — surfacing waste, ceiling accuracy, and investment trends over time.",
    bestUsedBy: "AI operating teams and executive review groups.",
    output: "A measurable execution signal across sprints.",
    sections: [
      "Token Burn",
      "Output Delivered",
      "Value Contribution",
      "Velocity Trend",
      "Ceiling Accuracy",
      "Waste Rate",
      "Executive Signal",
    ],
    fields: [
      "Feature",
      "Sprint",
      "Tokens consumed",
      "Output produced",
      "Value score",
      "Token velocity",
      "Ceiling accuracy",
      "Waste rate",
      "Trend",
      "Executive action",
    ],
    exampleRows: [
      "Support assistant velocity trend",
      "Sales research agent velocity trend",
      "Requirements summarizer velocity trend",
    ],
    reviewQuestions: [
      "Which features are improving velocity?",
      "Which features show declining efficiency?",
      "Where does token spend exceed output value?",
      "Which teams need governance intervention?",
    ],
    decisionCriteria: [
      "Increase investment",
      "Maintain allocation",
      "Tighten ceiling",
      "Investigate waste",
      "Retire feature",
    ],
  },
  {
    slug: "tokenomics-pl-worksheet",
    title: "Tokenomics P&L Worksheet",
    shortDescription:
      "Connect token cost, coordination cost, and business contribution into a financial accountability view.",
    purpose:
      "Connect token cost, coordination cost, and business contribution into a financial accountability view. Makes AI economics visible at the feature and portfolio level — enabling capital allocation decisions grounded in measurable returns.",
    bestUsedBy: "CFO partners, CIOs, and portfolio owners.",
    output: "Feature-level and portfolio-level AI economics.",
    sections: [
      "Token Cost",
      "Human Coordination Cost",
      "Output Value",
      "Revenue / Savings Contribution",
      "Net Token Profit",
      "Portfolio Decision",
    ],
    fields: [
      "Feature",
      "Token cost",
      "Human review cost",
      "Coordination cost",
      "Total AI operating cost",
      "Revenue contribution",
      "Cost savings",
      "Net value",
      "ROI estimate",
      "Portfolio decision",
    ],
    exampleRows: [
      "AI support response assistant",
      "Sales research agent",
      "Product requirements summarizer",
    ],
    reviewQuestions: [
      "Which AI features produce measurable financial contribution?",
      "Where does coordination cost erase AI gains?",
      "Which systems look productive but are financially weak?",
      "Which features deserve more capital?",
    ],
    decisionCriteria: [
      "Scale",
      "Maintain",
      "Optimize",
      "Reduce spend",
      "Kill",
    ],
  },
];
