export type RiskLevel = "safe" | "moderate" | "high" | "critical";
export type RiskTier = "low" | "moderate" | "high" | "critical";
export type CellSeverity = "high" | "moderate" | "low";
export type ConsequenceUrgency = "high" | "moderate" | "low";

export interface QuestionOption {
  label: string;
  value: number;
  riskLevel: RiskLevel;
}

export interface Question {
  id: string;
  text: string;
  subText?: string;
  options: QuestionOption[];
}

export interface AssessmentSection {
  id: string;
  title: string;
  questions: Question[];
}

export const SECTIONS: AssessmentSection[] = [
  {
    id: "shadow",
    title: "Shadow AI",
    questions: [
      {
        id: "s1",
        text: "Do you know every AI tool your employees are using right now?",
        subText: "Including personal accounts, free tiers, and browser extensions.",
        options: [
          { label: "Yes — we have a full sanctioned inventory", value: 0, riskLevel: "safe" },
          { label: "Mostly — we have a list but it may be incomplete", value: 35, riskLevel: "moderate" },
          { label: "No — we assume people use what they need", value: 70, riskLevel: "high" },
          { label: "We have never formally assessed this", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "s2",
        text: "Are employees submitting proprietary or customer data into public AI models?",
        subText: "ChatGPT, Gemini, Copilot personal tiers, etc.",
        options: [
          { label: "No — we have enforced controls preventing this", value: 0, riskLevel: "safe" },
          { label: "Unlikely — we have communicated policy", value: 30, riskLevel: "moderate" },
          { label: "Possibly — no controls exist", value: 70, riskLevel: "high" },
          { label: "Almost certainly — no policy or controls", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "s3",
        text: "How long has unsanctioned AI tool use been occurring in your organisation?",
        options: [
          { label: "Less than 3 months — we caught it early", value: 10, riskLevel: "safe" },
          { label: "3–12 months", value: 40, riskLevel: "moderate" },
          { label: "More than 12 months", value: 75, riskLevel: "high" },
          { label: "Unknown — we have never assessed", value: 100, riskLevel: "critical" },
        ],
      },
    ],
  },
  {
    id: "data",
    title: "Data Exposure",
    questions: [
      {
        id: "d1",
        text: "Do you have a Data Processing Agreement (DPA) with every AI vendor your teams use?",
        options: [
          { label: "Yes — reviewed and signed for all vendors", value: 0, riskLevel: "safe" },
          { label: "For enterprise vendors only — not informal tools", value: 40, riskLevel: "moderate" },
          { label: "No — this has not been done", value: 80, riskLevel: "high" },
          { label: "Unknown — legal has not reviewed AI vendor contracts", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "d2",
        text: "Could a regulator ask you to prove no customer data entered a public AI model and you could answer clearly?",
        options: [
          { label: "Yes — we have audit logs and enforced controls", value: 0, riskLevel: "safe" },
          { label: "Probably — but we would need time to verify", value: 45, riskLevel: "moderate" },
          { label: "No — we have no audit trail for AI usage", value: 85, riskLevel: "high" },
          { label: "We have not considered this regulatory question", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "d3",
        text: "Have your AI vendor contracts been reviewed for model training rights — whether the vendor can use your data to train their models?",
        options: [
          { label: "Yes — reviewed and unfavourable clauses removed or negotiated", value: 0, riskLevel: "safe" },
          { label: "Partially reviewed for major vendors only", value: 35, riskLevel: "moderate" },
          { label: "No — contracts have not been reviewed for this", value: 80, riskLevel: "high" },
          { label: "We were unaware this was a contractual risk", value: 100, riskLevel: "critical" },
        ],
      },
    ],
  },
  {
    id: "spend",
    title: "Spend Waste",
    questions: [
      {
        id: "p1",
        text: "Can you state your total AI spend across all tools and teams right now — to the nearest $10,000?",
        options: [
          { label: "Yes — we track AI spend in real time by team and project", value: 0, riskLevel: "safe" },
          { label: "Approximately — we have an estimate but it is not precise", value: 30, riskLevel: "moderate" },
          { label: "No — spend is fragmented across departments and cards", value: 70, riskLevel: "high" },
          { label: "We have no visibility into total AI spend", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "p2",
        text: "What percentage of your AI spend can you connect to a measurable business outcome?",
        options: [
          { label: "More than 70% — we track feature-level ROI", value: 0, riskLevel: "safe" },
          { label: "30–70% — we have partial attribution", value: 35, riskLevel: "moderate" },
          { label: "Less than 30% — most spend is unmeasured", value: 70, riskLevel: "high" },
          { label: "Zero — we have no AI ROI attribution at all", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "p3",
        text: "How many AI tool subscriptions are you paying for where fewer than 30% of licensed users actively use them?",
        options: [
          { label: "None — we audit tool utilisation quarterly", value: 0, riskLevel: "safe" },
          { label: "One or two — a minor issue we are aware of", value: 25, riskLevel: "moderate" },
          { label: "Several — we suspect significant licence waste", value: 65, riskLevel: "high" },
          { label: "Unknown — we have never measured utilisation rates", value: 100, riskLevel: "critical" },
        ],
      },
    ],
  },
  {
    id: "governance",
    title: "Governance",
    questions: [
      {
        id: "g1",
        text: "Do you have a written AI ethics and usage policy that every employee has acknowledged?",
        options: [
          { label: "Yes — published, trained, and formally acknowledged by all staff", value: 0, riskLevel: "safe" },
          { label: "Policy exists but acknowledgement is not tracked", value: 40, riskLevel: "moderate" },
          { label: "A draft exists but has not been published", value: 75, riskLevel: "high" },
          { label: "No AI ethics or usage policy exists", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "g2",
        text: "Are there documented rules for what AI cannot decide autonomously in your organisation?",
        options: [
          { label: "Yes — documented, reviewed by Legal, and actively enforced", value: 0, riskLevel: "safe" },
          { label: "Informally understood by leadership but not documented", value: 50, riskLevel: "moderate" },
          { label: "No — there are no defined AI decision boundaries", value: 85, riskLevel: "high" },
          { label: "We have not considered this question before", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "g3",
        text: "How would you escalate and remediate an AI-generated decision that caused harm to a customer?",
        options: [
          { label: "Clear documented escalation path, tested in the last 12 months", value: 0, riskLevel: "safe" },
          { label: "Escalation path exists but the protocol is informal", value: 40, riskLevel: "moderate" },
          { label: "No formal protocol — we would improvise and respond reactively", value: 80, riskLevel: "high" },
          { label: "We have never considered this scenario", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "g4",
        text: "Is there a named individual accountable for AI governance — with real authority, not just a title?",
        options: [
          { label: "Yes — named owner with explicit mandate, budget authority, and escalation power", value: 0, riskLevel: "safe" },
          { label: "Responsibility is shared or informally delegated to IT or Legal", value: 45, riskLevel: "moderate" },
          { label: "No named owner — it is assumed someone handles it", value: 80, riskLevel: "high" },
          { label: "No one owns AI governance in this organisation", value: 100, riskLevel: "critical" },
        ],
      },
    ],
  },
  {
    id: "board",
    title: "Board Risk",
    questions: [
      {
        id: "b1",
        text: "Has your board received a formal briefing on AI risk exposure in the last 12 months?",
        options: [
          { label: "Yes — formal briefing with a risk register and documented response", value: 0, riskLevel: "safe" },
          { label: "AI has been mentioned informally but no formal briefing has occurred", value: 45, riskLevel: "moderate" },
          { label: "No — AI has not been a board agenda item", value: 80, riskLevel: "high" },
          { label: "The board has not discussed AI risk at all", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "b2",
        text: "If a journalist called tomorrow about your organisation's AI data practices, could leadership respond confidently?",
        options: [
          { label: "Yes — we have clear documented positions and can respond immediately", value: 0, riskLevel: "safe" },
          { label: "Mostly — but there are gaps we would struggle to address clearly", value: 40, riskLevel: "moderate" },
          { label: "No — the response would be reactive and uncertain", value: 80, riskLevel: "high" },
          { label: "This scenario would constitute a reputational crisis", value: 100, riskLevel: "critical" },
        ],
      },
      {
        id: "b3",
        text: "What happens to your competitive position if a peer achieves AI-native operations in the next 12 months while you remain at your current state?",
        options: [
          { label: "Minimal impact — our competitive differentiators are not AI-dependent", value: 10, riskLevel: "safe" },
          { label: "Noticeable — we would lose ground in operational efficiency and speed", value: 45, riskLevel: "moderate" },
          { label: "Significant — it would materially affect our market position", value: 75, riskLevel: "high" },
          { label: "Existential — our business model requires AI-native capability to stay competitive", value: 100, riskLevel: "critical" },
        ],
      },
    ],
  },
];

export const RISK_CONFIG: Record<
  RiskTier,
  {
    label: string;
    description: string;
    textClass: string;
    bgClass: string;
    borderClass: string;
  }
> = {
  low: {
    label: "Low risk",
    description: "Well-controlled. Maintain governance discipline as AI deployment scales.",
    textClass: "text-teal-800",
    bgClass: "bg-teal-50",
    borderClass: "border-teal-500",
  },
  moderate: {
    label: "Moderate risk",
    description: "Structured response needed. Several gaps require attention before they compound.",
    textClass: "text-amber-800",
    bgClass: "bg-amber-50",
    borderClass: "border-amber-500",
  },
  high: {
    label: "High risk",
    description: "Significant exposure. Multiple vectors are active and growing.",
    textClass: "text-rose-800",
    bgClass: "bg-rose-50",
    borderClass: "border-rose-600",
  },
  critical: {
    label: "Critical",
    description: "Immediate executive action required. Exposure exists across multiple vectors now.",
    textClass: "text-red-900",
    bgClass: "bg-red-50",
    borderClass: "border-red-700",
  },
};

export function scoreSection(
  answers: Record<string, number>,
  questionIds: string[]
): number | null {
  const vals = questionIds.filter((id) => id in answers).map((id) => answers[id]);
  if (!vals.length) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

export function overallScore(sectionScores: (number | null)[]): number {
  const valid = sectionScores.filter((s): s is number => s !== null);
  if (!valid.length) return 0;
  return Math.round(valid.reduce((a, b) => a + b, 0) / valid.length);
}

export function riskTier(score: number): RiskTier {
  if (score < 30) return "low";
  if (score < 55) return "moderate";
  if (score < 80) return "high";
  return "critical";
}

export interface Finding {
  tier: RiskTier;
  title: string;
  body: string;
}

export function generateFindings(
  sectionScores: Record<string, number | null>
): Finding[] {
  const findings: Finding[] = [];

  const shadow = sectionScores["shadow"] ?? 0;
  const data = sectionScores["data"] ?? 0;
  const spend = sectionScores["spend"] ?? 0;
  const gov = sectionScores["governance"] ?? 0;
  const board = sectionScores["board"] ?? 0;

  if (shadow >= 70) {
    findings.push({
      tier: "critical",
      title: "Shadow AI — Critical exposure",
      body: "Your organisation almost certainly has employees using unsanctioned AI tools with no visibility into which data has been submitted. Proprietary information and customer data may already reside in public vendor training sets — a state that cannot be reversed. Immediate tool discovery and policy enforcement are required.",
    });
  } else if (shadow >= 40) {
    findings.push({
      tier: "moderate",
      title: "Shadow AI — Unsanctioned usage detected",
      body: "Unsanctioned AI usage is present and growing. Without a formal tool inventory and enforced policy, this gap will widen as AI adoption accelerates across your workforce.",
    });
  }

  if (data >= 70) {
    findings.push({
      tier: "critical",
      title: "Data exposure — No audit trail",
      body: "No audit trail exists to demonstrate data governance to a regulator. Vendor contracts have not been reviewed for model training rights, creating active contractual and compliance exposure. Legal review and DPA remediation should be initiated this quarter.",
    });
  } else if (data >= 40) {
    findings.push({
      tier: "moderate",
      title: "Data exposure — DPAs incomplete",
      body: "Data processing agreements are incomplete or cover only your largest vendors. Regulatory exposure exists across your informal tool landscape and requires a structured review before your next compliance window.",
    });
  }

  if (spend >= 70) {
    findings.push({
      tier: "critical",
      title: "Spend waste — Investment ungoverned",
      body: "Total AI investment cannot be quantified or attributed to business outcomes. Finance cannot make informed cut or invest decisions, and licence waste is accumulating silently. A full spend audit is prerequisite to any strategic AI investment.",
    });
  } else if (spend >= 40) {
    findings.push({
      tier: "moderate",
      title: "Spend waste — Attribution gaps",
      body: "Spend is partially visible but ROI attribution is insufficient for confident investment decisions. Licence waste likely exists across current subscriptions.",
    });
  }

  if (gov >= 70) {
    findings.push({
      tier: "critical",
      title: "Governance — No safety net",
      body: "No AI ethics policy, no documented decision boundaries, and no named owner means every AI deployment is operating without accountability infrastructure. A single high-profile AI incident could expose the organisation with no defensible governance position.",
    });
  } else if (gov >= 40) {
    findings.push({
      tier: "moderate",
      title: "Governance — Informal controls",
      body: "Governance controls exist but rely on informal enforcement. Informal governance will not scale as AI deployment expands and will fail at the point of maximum organisational exposure.",
    });
  }

  if (board >= 70) {
    findings.push({
      tier: "critical",
      title: "Board risk — Indefensible position",
      body: "Leadership cannot defend AI practices to press, regulators, or institutional investors. With no formal board briefing or risk register, the organisation lacks standing to respond to external scrutiny. A peer achieving AI-native operations in 12 months represents a material competitive threat.",
    });
  } else if (board >= 40) {
    findings.push({
      tier: "moderate",
      title: "Board risk — Gap growing",
      body: "AI risk has not been formally briefed at board level. The competitive gap between your current posture and AI-native peers is widening each quarter without a documented acceleration plan.",
    });
  }

  if (shadow < 30 && data < 30 && spend < 30 && gov < 30 && board < 30) {
    findings.push({
      tier: "low",
      title: "Strong governance foundation",
      body: "All five governance vectors are well controlled. The priority now is maintaining rigour as AI deployment scales and ensuring oversight mechanisms evolve with new tools and use cases.",
    });
  }

  return findings;
}

export interface ConsequenceRow {
  label: string;
  consequence: string;
  urgency: ConsequenceUrgency;
}

export function generateConsequences(
  sectionScores: Record<string, number | null>
): ConsequenceRow[] {
  const rows: ConsequenceRow[] = [];

  const shadow = sectionScores["shadow"] ?? 0;
  const data = sectionScores["data"] ?? 0;
  const spend = sectionScores["spend"] ?? 0;
  const gov = sectionScores["governance"] ?? 0;
  const board = sectionScores["board"] ?? 0;

  if (shadow >= 70) {
    rows.push({
      label: "Data exfiltration",
      consequence: "Customer and proprietary data is likely already in vendor training sets with no mechanism to retrieve or audit it.",
      urgency: "high",
    });
  } else if (shadow >= 40) {
    rows.push({
      label: "Policy non-compliance",
      consequence: "Untracked AI usage creates policy violations that accumulate silently until an incident forces disclosure.",
      urgency: "moderate",
    });
  }

  if (data >= 70) {
    rows.push({
      label: "Regulatory breach",
      consequence: "An inability to demonstrate data handling controls to a regulator constitutes an active compliance breach under most AI and data frameworks.",
      urgency: "high",
    });
  } else if (data >= 40) {
    rows.push({
      label: "Contract exposure",
      consequence: "Incomplete DPAs and unreviewed training rights clauses leave the organisation contractually exposed across multiple vendor relationships.",
      urgency: "moderate",
    });
  }

  if (spend >= 70) {
    rows.push({
      label: "Capital inefficiency",
      consequence: "AI spend with no ROI attribution cannot be optimised. Finance cannot make informed cut or invest decisions.",
      urgency: "high",
    });
  } else if (spend >= 40) {
    rows.push({
      label: "Licence waste",
      consequence: "Partially attributed spend typically conceals 20–40% in unused licences and duplicate tool subscriptions.",
      urgency: "moderate",
    });
  }

  if (gov >= 70) {
    rows.push({
      label: "Liability without recourse",
      consequence: "Without decision boundaries or escalation protocols, the organisation has no defensible position if AI causes harm.",
      urgency: "high",
    });
  } else if (gov >= 40) {
    rows.push({
      label: "Governance lag",
      consequence: "Informal controls will not scale. As AI deployment grows, governance will fail at the worst possible moment.",
      urgency: "moderate",
    });
  }

  if (board >= 70) {
    rows.push({
      label: "Reputational crisis exposure",
      consequence: "The organisation cannot publicly defend its AI practices and has no formal response posture for a press or regulatory inquiry.",
      urgency: "high",
    });
  } else if (board >= 40) {
    rows.push({
      label: "Competitive erosion",
      consequence: "Peers moving to AI-native operations will compound the performance gap quarterly until the governance deficit is closed.",
      urgency: "moderate",
    });
  }

  return rows;
}

export interface ImpactCell {
  heading: string;
  value: string;
  tier: RiskTier;
  severity: CellSeverity;
}

function cellSeverity(score: number | null): CellSeverity {
  const s = score ?? 0;
  if (s >= 70) return "high";
  if (s >= 40) return "moderate";
  return "low";
}

export function generateImpactCells(
  sectionScores: Record<string, number | null>
): ImpactCell[] {
  const shadow = sectionScores["shadow"] ?? 0;
  const data = sectionScores["data"] ?? 0;
  const spend = sectionScores["spend"] ?? 0;
  const gov = sectionScores["governance"] ?? 0;
  const board = sectionScores["board"] ?? 0;
  const overallVal = overallScore(Object.values(sectionScores));

  const CELL_LABELS: Record<string, Record<CellSeverity, string>> = {
    shadow: { high: "Active — uncontrolled", moderate: "Partial exposure", low: "Controlled" },
    data: { high: "No audit trail", moderate: "DPAs incomplete", low: "Compliant" },
    spend: { high: "No visibility", moderate: "Partially tracked", low: "Attributed" },
    governance: { high: "Absent", moderate: "Informal", low: "Structured" },
    board: { high: "Material threat", moderate: "Growing gap", low: "Manageable" },
    overall: { high: "Immediate action", moderate: "Structured response", low: "Well controlled" },
  };

  return [
    { heading: "Shadow AI exposure", value: CELL_LABELS.shadow[cellSeverity(shadow)], tier: riskTier(shadow), severity: cellSeverity(shadow) },
    { heading: "Data & compliance", value: CELL_LABELS.data[cellSeverity(data)], tier: riskTier(data), severity: cellSeverity(data) },
    { heading: "AI spend visibility", value: CELL_LABELS.spend[cellSeverity(spend)], tier: riskTier(spend), severity: cellSeverity(spend) },
    { heading: "Governance posture", value: CELL_LABELS.governance[cellSeverity(gov)], tier: riskTier(gov), severity: cellSeverity(gov) },
    { heading: "Competitive exposure", value: CELL_LABELS.board[cellSeverity(board)], tier: riskTier(board), severity: cellSeverity(board) },
    { heading: "Overall risk posture", value: CELL_LABELS.overall[cellSeverity(overallVal)], tier: riskTier(overallVal), severity: cellSeverity(overallVal) },
  ];
}
