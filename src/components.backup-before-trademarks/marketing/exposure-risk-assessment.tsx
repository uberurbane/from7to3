"use client";

import { useState } from "react";
import { Download, Check } from "lucide-react";
import Link from "next/link";
import {
  SECTIONS,
  RISK_CONFIG,
  scoreSection,
  overallScore,
  riskTier,
  generateFindings,
  generateImpactCells,
  generateConsequences,
} from "@/lib/exposure-risk-data";
import type { RiskLevel, RiskTier, CellSeverity, ConsequenceUrgency } from "@/lib/exposure-risk-data";

// ─── Option color maps ───────────────────────────────────────────

const OPTION_SELECTED: Record<RiskLevel, string> = {
  safe: "border-2 border-teal-500 bg-teal-50 text-teal-800",
  moderate: "border-2 border-amber-500 bg-amber-50 text-amber-800",
  high: "border-2 border-rose-500 bg-rose-50 text-rose-800",
  critical: "border-2 border-rose-500 bg-rose-50 text-rose-800",
};

const OPTION_DEFAULT =
  "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50";

const TIER_PROGRESS_BAR: Record<RiskTier, string> = {
  low: "bg-teal-500",
  moderate: "bg-amber-500",
  high: "bg-rose-500",
  critical: "bg-red-600",
};

const TIER_BADGE: Record<RiskTier, string> = {
  low: "bg-teal-50 text-teal-700 border border-teal-200",
  moderate: "bg-amber-50 text-amber-700 border border-amber-200",
  high: "bg-rose-50 text-rose-700 border border-rose-200",
  critical: "bg-red-50 text-red-700 border border-red-200",
};

const FINDING_BORDER: Record<RiskTier, string> = {
  low: "border-teal-500",
  moderate: "border-amber-500",
  high: "border-rose-600",
  critical: "border-red-700",
};

const SCORE_NARRATIVES: Record<RiskTier, string> = {
  low: "Your organisation has established foundational AI governance controls. The priority now is maintaining discipline as AI deployment scales and ensuring these controls remain current.",
  moderate: "Structured gaps exist across multiple vectors. Left unaddressed, these will compound as AI adoption increases. A structured 60-day remediation programme is warranted.",
  high: "Active exposure exists across multiple governance vectors. The risk profile will deteriorate before it improves without direct executive intervention.",
  critical: "The exposure profile indicates systemic governance failure across AI operations. This requires an immediate executive mandate and cross-functional remediation team.",
};

const PEER_STAGES = ["Unaware", "Reactive", "Developing", "Structured", "Leading"];

function stageForScore(score: number): string {
  if (score < 25) return "Unaware";
  if (score < 50) return "Reactive";
  if (score < 65) return "Developing";
  if (score < 80) return "Structured";
  return "Leading";
}

const CONSEQUENCE_DOT: Record<ConsequenceUrgency, string> = {
  high: "bg-rose-500",
  moderate: "bg-amber-400",
  low: "bg-teal-500",
};

const CELL_SEVERITY_BG: Record<CellSeverity, string> = {
  high: "bg-rose-50",
  moderate: "bg-amber-50",
  low: "bg-teal-50",
};

const CELL_SEVERITY_TEXT: Record<CellSeverity, string> = {
  high: "text-rose-800",
  moderate: "text-amber-800",
  low: "text-teal-800",
};

const RESULTS_STEP = SECTIONS.length; // 5
const STEP_LABELS = [...SECTIONS.map((s) => s.title), "Results"];

// ─── Progress bar ────────────────────────────────────────────────

interface ProgressBarProps {
  currentSection: number;
  maxReached: number;
  allSectionsHaveAnswer: boolean;
  onNavigate: (i: number) => void;
}

function ProgressBar({
  currentSection,
  maxReached,
  allSectionsHaveAnswer,
  onNavigate,
}: ProgressBarProps) {
  return (
    <div className="mb-6 flex overflow-x-auto border-b border-slate-200 bg-white">
      {STEP_LABELS.map((label, i) => {
        const isActive = currentSection === i;
        const isCompleted = i <= maxReached && i !== currentSection;
        const isResults = i === RESULTS_STEP;
        const isClickable = isResults
          ? allSectionsHaveAnswer
          : i <= maxReached;

        return (
          <button
            key={i}
            disabled={!isClickable}
            onClick={() => isClickable && onNavigate(i)}
            className={[
              "shrink-0 -mb-px px-4 py-3 text-xs transition-colors",
              isActive
                ? "border-b-2 border-teal font-medium text-teal"
                : isCompleted
                ? "border-b-2 border-teal-200 text-slate-600"
                : "text-slate-400",
              !isClickable ? "cursor-default" : "cursor-pointer",
            ].join(" ")}
          >
            <span className="mr-1.5 opacity-50">{String(i + 1).padStart(2, "0")}</span>
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Question section ────────────────────────────────────────────

interface SectionViewProps {
  sectionIndex: number;
  answers: Record<string, number>;
  selectedLevels: Record<string, RiskLevel>;
  onAnswer: (id: string, value: number, riskLevel: RiskLevel) => void;
  onBack: () => void;
  onNext: () => void;
  isLastSection: boolean;
}

function SectionView({
  sectionIndex,
  answers,
  selectedLevels,
  onAnswer,
  onBack,
  onNext,
  isLastSection,
}: SectionViewProps) {
  const section = SECTIONS[sectionIndex];
  if (!section) return null;

  const answeredCount = section.questions.filter((q) => q.id in answers).length;
  const totalCount = section.questions.length;
  const allAnswered = answeredCount === totalCount;

  return (
    <div>
      <div className="mb-6">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-400">
          Section {sectionIndex + 1} of {SECTIONS.length}
        </p>
        <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
      </div>

      {section.questions.map((question) => {
        const selectedLevel = selectedLevels[question.id];

        return (
          <div
            key={question.id}
            className="mb-3 rounded-lg border border-slate-200 bg-white p-5"
          >
            <p className="text-sm font-medium leading-relaxed text-slate-900">
              {question.text}
            </p>
            {question.subText && (
              <p className="mb-3 mt-1 text-xs text-slate-400">{question.subText}</p>
            )}
            {!question.subText && <div className="mt-3" />}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {question.options.map((opt) => {
                const isSelected =
                  selectedLevel === opt.riskLevel &&
                  (answers[question.id] === opt.value);
                return (
                  <button
                    key={opt.label}
                    onClick={() => onAnswer(question.id, opt.value, opt.riskLevel)}
                    className={[
                      "rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                      isSelected ? OPTION_SELECTED[opt.riskLevel] : OPTION_DEFAULT,
                    ].join(" ")}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Navigation row */}
      <div className="mt-6 flex items-center justify-between">
        <div className="w-24">
          {sectionIndex > 0 && (
            <button
              onClick={onBack}
              className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-slate-300 hover:bg-slate-50"
            >
              ← Back
            </button>
          )}
        </div>

        <p className="text-xs text-slate-400">
          {answeredCount} of {totalCount} answered
        </p>

        <div className="w-44 text-right">
          <button
            onClick={onNext}
            disabled={!allAnswered}
            className={[
              "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
              allAnswered
                ? "bg-teal text-teal-foreground hover:opacity-90"
                : "cursor-not-allowed bg-teal text-teal-foreground opacity-40",
            ].join(" ")}
          >
            {isLastSection ? "View risk profile →" : "Next section →"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Leads-to / priority / strengths helpers ────────────────────

interface LeadsToItem {
  text: string;
  color: "rose" | "amber" | "teal";
}

interface GovernanceStrength {
  label: string;
  body: string;
}

const LEADS_TO_DOT: Record<"rose" | "amber" | "teal", string> = {
  rose: "bg-rose-500",
  amber: "bg-amber-500",
  teal: "bg-teal-500",
};

function computeLeadsTo(scores: Record<string, number | null>): LeadsToItem[] {
  const shadow = scores["shadow"] ?? 0;
  const data = scores["data"] ?? 0;
  const spend = scores["spend"] ?? 0;
  const gov = scores["governance"] ?? 0;
  const board = scores["board"] ?? 0;

  if (shadow < 30 && data < 30 && spend < 30 && gov < 30 && board < 30) {
    return [{
      text: "Current governance discipline is a competitive advantage — maintain it as agent-based capabilities introduce new complexity",
      color: "teal",
    }];
  }

  const items: LeadsToItem[] = [];
  if (shadow >= 50 || gov >= 50) {
    items.push({ text: "Fragmented AI governance as each department adopts tools independently and at different speeds", color: "rose" });
  }
  if (spend >= 50) {
    items.push({ text: "Rising AI investment without measurable attribution — spend grows faster than the organisation's ability to justify it", color: "rose" });
  }
  if (data >= 50) {
    items.push({ text: "Delayed or inadequate regulatory response capability as AI data handling scrutiny increases", color: "rose" });
  }
  if (gov >= 70) {
    items.push({ text: "Informal escalation structures failing at scale when an AI-generated decision causes a material error", color: "rose" });
  } else if (gov >= 40) {
    items.push({ text: "Governance structures adequate for current adoption levels becoming insufficient as deployment expands", color: "amber" });
  }
  if (board >= 50) {
    items.push({ text: "Competitive response velocity falling behind AI-native peers who have governance infrastructure in place", color: "amber" });
  }
  if (board >= 70) {
    items.push({ text: "Board-level AI risk exposure remaining unresolved while regulatory and investor scrutiny increases", color: "rose" });
  }
  if (spend >= 70) {
    items.push({ text: "AI licence waste compounding as utilisation gaps widen across an expanding tool portfolio", color: "amber" });
  }
  return items;
}

function priorityContent(overall: number): { heading: string; body: string } {
  if (overall >= 80) {
    return {
      heading: "Establish AI governance ownership before the next board meeting",
      body: "The most urgent single action is appointing a named individual with explicit authority over AI governance — not a shared responsibility, not an IT delegation, but a named executive accountable for policy, vendor oversight, spend visibility, and escalation. Every other governance action depends on this appointment existing first.",
    };
  }
  if (overall >= 55) {
    return {
      heading: "Formalise what is currently informal before deployment scales further",
      body: "The highest-leverage action at this stage is converting informal governance understanding into documented policy with named ownership and enforcement. Organisations that formalise governance before their next major AI deployment cycle are substantially better positioned than those that attempt remediation after an incident.",
    };
  }
  if (overall >= 30) {
    return {
      heading: "Close the attribution gap before the next budget cycle",
      body: "The most commercially consequential action at this stage is establishing AI spend visibility and feature-level ROI attribution. Without it, the organisation cannot make defensible investment decisions about which AI capabilities to scale and which to retire. This is the gap that most directly affects board and CFO confidence.",
    };
  }
  return {
    heading: "Maintain governance discipline as agent-based deployment scales",
    body: "The primary risk at a controlled governance stage is complacency — assuming that what works at current adoption levels will scale automatically. The priority is formalising informal governance structures and establishing the measurement infrastructure for agent economics before agent deployment introduces new complexity.",
  };
}

function governanceStrengths(scores: Record<string, number | null>): GovernanceStrength[] {
  const strengths: GovernanceStrength[] = [];
  if ((scores["shadow"] ?? 100) < 20) {
    strengths.push({ label: "AI tool governance", body: "Sanctioned tool inventory exists and shadow IT risk is controlled" });
  }
  if ((scores["data"] ?? 100) < 20) {
    strengths.push({ label: "Data compliance posture", body: "Vendor contracts reviewed and regulatory response capability established" });
  }
  if ((scores["spend"] ?? 100) < 20) {
    strengths.push({ label: "AI spend visibility", body: "Investment is tracked and attributable to measurable business outcomes" });
  }
  if ((scores["governance"] ?? 100) < 20) {
    strengths.push({ label: "Governance infrastructure", body: "Named ownership, documented policy, and escalation protocols are in place" });
  }
  if ((scores["board"] ?? 100) < 20) {
    strengths.push({ label: "Board-level readiness", body: "AI risk is formally briefed and leadership can defend practices with confidence" });
  }
  return strengths;
}

// ─── Results ─────────────────────────────────────────────────────

interface ResultsViewProps {
  answers: Record<string, number>;
  onRetake: () => void;
}

function ResultsView({ answers, onRetake }: ResultsViewProps) {
  const [copied, setCopied] = useState(false);

  const sectionScores: Record<string, number | null> = Object.fromEntries(
    SECTIONS.map((s) => [
      s.id,
      scoreSection(answers, s.questions.map((q) => q.id)),
    ])
  );

  const overall = overallScore(Object.values(sectionScores));
  const tier = riskTier(overall);
  const config = RISK_CONFIG[tier];

  const sectionsCompleted = SECTIONS.filter((s) =>
    s.questions.every((q) => q.id in answers)
  ).length;

  const findings = generateFindings(sectionScores);
  const consequences = generateConsequences(sectionScores);
  const impactCells = generateImpactCells(sectionScores);
  const leadsToItems = computeLeadsTo(sectionScores);
  const priority = priorityContent(overall);
  const strengths = governanceStrengths(sectionScores);

  function handleCopy() {
    const msg = `AI Exposure Risk Score: ${overall}/100 — ${config.label}. ${SCORE_NARRATIVES[tier]}`;
    navigator.clipboard.writeText(msg).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function downloadPDF() {
    const win = window.open("", "_blank");
    if (!win) return;

    const date = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const tierColors: Record<RiskTier, { bg: string; text: string }> = {
      low: { bg: "#ccfbf1", text: "#0f766e" },
      moderate: { bg: "#fef3c7", text: "#92400e" },
      high: { bg: "#ffe4e6", text: "#9f1239" },
      critical: { bg: "#fee2e2", text: "#7f1d1d" },
    };
    const scoreColor = tierColors[tier].text;

    const vectorRows = SECTIONS.map((s) => {
      const score = sectionScores[s.id] ?? 0;
      const t = riskTier(score);
      const c = tierColors[t];
      return `<tr>
        <td>${s.title}</td>
        <td>${score}</td>
        <td style="background:${c.bg};color:${c.text};font-weight:600">${RISK_CONFIG[t].label}</td>
      </tr>`;
    }).join("");

    const findingsHtml = findings
      .map((f) => {
        const cls = f.tier === "low" ? "green" : f.tier === "moderate" ? "amber" : "";
        return `<div class="finding ${cls}">
          <div class="finding-title">${f.title}</div>
          <div class="finding-body">${f.body}</div>
        </div>`;
      })
      .join("");

    const dotColors: Record<"rose" | "amber" | "teal", string> = {
      rose: "#f43f5e",
      amber: "#f59e0b",
      teal: "#14b8a6",
    };

    const leadsToHtml = leadsToItems
      .map(
        (item) =>
          `<div style="display:flex;align-items:flex-start;gap:8pt;padding:4pt 0;border-bottom:0.5pt solid #f1f5f9;">
          <span style="width:6pt;height:6pt;border-radius:50%;background:${dotColors[item.color]};margin-top:3pt;flex-shrink:0;display:inline-block;"></span>
          <span style="font-size:9pt;color:#475569;line-height:1.5;">${item.text}</span>
        </div>`
      )
      .join("");

    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>AI Exposure Risk Assessment — Executive Brief</title>
<style>
body{font-family:Arial,sans-serif;font-size:11pt;color:#0f172a;margin:0;padding:20mm}
.page-header{border-bottom:2pt solid #1D9E75;padding-bottom:12pt;margin-bottom:20pt}
.score-block{display:flex;align-items:center;gap:20pt;margin-bottom:16pt}
.score-number{font-size:48pt;font-weight:700;line-height:1;color:${scoreColor}}
h2{font-size:12pt;font-weight:700;margin:20pt 0 8pt;color:#0f172a}
table{width:100%;border-collapse:collapse;margin-bottom:20pt}
th{background:#0f172a;color:white;padding:6pt 10pt;text-align:left;font-size:9pt;text-transform:uppercase;letter-spacing:0.05em}
td{padding:6pt 10pt;border-bottom:0.5pt solid #e2e8f0;font-size:10pt}
.finding{border-left:3pt solid #E24B4A;padding-left:10pt;margin-bottom:12pt}
.finding.amber{border-left-color:#BA7517}
.finding.green{border-left-color:#1D9E75}
.finding-title{font-weight:600;font-size:10pt;margin-bottom:3pt}
.finding-body{font-size:9pt;color:#475569;line-height:1.5}
.priority-block{border-left:3pt solid #1D9E75;background:#f8fafc;padding:12pt;margin-bottom:20pt}
.footer{border-top:0.5pt solid #e2e8f0;padding-top:10pt;font-size:8pt;color:#94a3b8;margin-top:20pt}
@media print{@page{margin:15mm;size:A4}}
</style>
</head>
<body>
<div class="page-header">
  <div style="font-size:10pt;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#1D9E75">AI Exposure Risk Assessment</div>
  <div style="font-size:9pt;color:#475569;margin-top:4pt">Executive Brief — Confidential</div>
  <div style="font-size:9pt;color:#94a3b8;margin-top:2pt">${date}</div>
</div>
<h2>Overall Risk Score</h2>
<div class="score-block">
  <div class="score-number">${overall}</div>
  <div>
    <div style="font-weight:600;font-size:12pt;color:${scoreColor}">${config.label}</div>
    <div style="font-size:9pt;color:#64748b;margin-top:4pt">out of 100</div>
  </div>
</div>
<p style="font-size:10pt;color:#334155;margin-bottom:20pt">${SCORE_NARRATIVES[tier]}</p>
<h2>Risk Vector Summary</h2>
<table><tr><th>Vector</th><th>Score</th><th>Risk Level</th></tr>${vectorRows}</table>
<h2>Key Findings</h2>
${findingsHtml}
<h2>Recommended Immediate Priority</h2>
<div class="priority-block">
  <div style="font-weight:600;font-size:10pt;margin-bottom:6pt">${priority.heading}</div>
  <div style="font-size:9pt;color:#475569;line-height:1.5">${priority.body}</div>
</div>
<h2>What This Typically Leads To</h2>
<div>${leadsToHtml}</div>
<div class="footer">
  <div>Generated by Token Learning Control | tokenlearningcontrol.com | agenteconomics.io</div>
  <div>This assessment is directional. Results reflect self-reported governance posture.</div>
</div>
</body>
</html>`;

    win.document.write(html);
    win.document.close();
    setTimeout(() => win.print(), 500);
  }

  return (
    <div>
      {/* Overall score card */}
      <div
        className={`mb-5 rounded-lg border-2 p-6 ${config.bgClass} ${config.borderClass}`}
      >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className={`text-[56px] font-black leading-none ${config.textClass}`}>
              {overall}
            </p>
            <p className="mt-1 text-xs text-slate-500">out of 100</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${TIER_BADGE[tier]}`}>
              {config.label}
            </span>
            <p className="text-xs text-slate-500">{sectionsCompleted}/5 sections completed</p>
          </div>
        </div>
        <p className={`text-sm font-medium ${config.textClass}`}>
          {SCORE_NARRATIVES[tier]}
        </p>
      </div>

      {/* Risk breakdown */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">Risk breakdown by vector</h3>
        <div className="flex flex-col gap-3">
          {SECTIONS.map((section) => {
            const score = sectionScores[section.id] ?? 0;
            const sectionTier = riskTier(score);
            return (
              <div key={section.id} className="flex items-center gap-3">
                <span className="w-36 shrink-0 text-sm font-medium text-slate-700">
                  {section.title}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${TIER_PROGRESS_BAR[sectionTier]}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className={`w-7 shrink-0 text-right text-xs font-medium ${RISK_CONFIG[sectionTier].textClass}`}>
                  {score}
                </span>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${TIER_BADGE[sectionTier]}`}>
                  {RISK_CONFIG[sectionTier].label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Governance strengths — only when overall < 25 */}
      {overall < 25 && strengths.length > 0 && (
        <div className="mb-5 rounded-lg border border-teal-200 bg-teal-50 p-5">
          <h3 className="mb-4 font-semibold text-teal-900">Governance strengths identified</h3>
          <div>
            {strengths.map((s, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-teal-100 py-2.5 last:border-0">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                <div>
                  <span className="text-sm font-medium text-teal-800">{s.label}: </span>
                  <span className="text-sm text-teal-700">{s.body}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-teal-600">
            These governance foundations position the organisation ahead of the majority of enterprises at comparable AI adoption stages. The priority is maintaining this discipline as agent-based deployment introduces new complexity.
          </p>
        </div>
      )}

      {/* Key findings */}
      {findings.length > 0 && (
        <div className="mb-5 rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="mb-4 font-semibold text-slate-900">Key findings</h3>
          <div className="flex flex-col gap-3">
            {findings.map((finding, i) => (
              <div
                key={i}
                className={`rounded-r-md border-l-[3px] py-3 pl-4 pr-3 ${FINDING_BORDER[finding.tier]} bg-slate-50`}
              >
                <p className="mb-1 text-sm font-medium text-slate-900">{finding.title}</p>
                <p className="text-sm text-slate-600">{finding.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* What this typically leads to */}
      {leadsToItems.length > 0 && (
        <div className="mb-5 rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="mb-1 font-semibold text-slate-900">What this typically leads to</h3>
          <p className="mb-4 text-xs text-slate-400">
            Without a structured governance response, organisations at this profile commonly experience the following within 12–18 months.
          </p>
          <div>
            {leadsToItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-slate-100 py-2.5 last:border-0">
                <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${LEADS_TO_DOT[item.color]}`} />
                <span className="text-sm leading-relaxed text-slate-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Operational consequences */}
      {consequences.length > 0 && (
        <div className="mb-5 rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="mb-4 font-semibold text-slate-900">Likely operational consequences</h3>
          <div className="flex flex-col gap-3">
            {consequences.map((row, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1.5 flex-none">
                  <div className={`h-2 w-2 rounded-full ${CONSEQUENCE_DOT[row.urgency]}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{row.label}</p>
                  <p className="text-sm text-slate-600">{row.consequence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Peer positioning */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">Peer positioning</h3>
        <div className="relative mb-2 mt-8">
          <div
            className="absolute bottom-full mb-1 flex -translate-x-1/2 flex-col items-center"
            style={{ left: `${overall}%` }}
          >
            <span className="whitespace-nowrap rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-bold text-white">
              You
            </span>
            <div className="h-3 w-px bg-slate-700" />
          </div>
          <div
            className="h-3 w-full rounded-full"
            style={{ background: "linear-gradient(to right, #0d9488, #fbbf24, #f97316, #fb7185)" }}
          />
        </div>
        <div className="mt-1 flex justify-between">
          {PEER_STAGES.map((stage) => (
            <span key={stage} className="text-[10px] text-slate-500">{stage}</span>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          You are in the{" "}
          <span className="font-semibold text-slate-700">{stageForScore(overall)}</span>{" "}
          cohort. Most organisations at this exposure level take 45–90 days to remediate primary vectors with a structured programme.
        </p>
      </div>

      {/* Business impact grid */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="mb-4 font-semibold text-slate-900">Estimated business impact</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {impactCells.map((cell) => (
            <div key={cell.heading} className={`rounded-lg p-4 ${CELL_SEVERITY_BG[cell.severity]}`}>
              <p className="mb-1.5 text-xs font-medium uppercase tracking-widest text-slate-500">
                {cell.heading}
              </p>
              <p className={`text-base font-semibold ${CELL_SEVERITY_TEXT[cell.severity]}`}>
                {cell.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Directional estimates based on assessment responses. Use as indicators, not guarantees.
        </p>
      </div>

      {/* Recommended immediate priority */}
      <div className="mb-5 rounded-r-lg border-l-4 border-teal bg-slate-50 p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-500">
          Recommended immediate priority
        </p>
        <p className="mb-2 text-sm font-medium text-slate-900">{priority.heading}</p>
        <p className="text-sm leading-relaxed text-slate-600">{priority.body}</p>
      </div>

      {/* CTA row */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onRetake}
          className="rounded-md border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50"
        >
          ← Retake assessment
        </button>
        <button
          onClick={handleCopy}
          className="rounded-md border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
        >
          {copied ? "Copied ✓" : "Copy score summary"}
        </button>
        <button
          onClick={downloadPDF}
          className="flex items-center gap-2 rounded-md border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50"
        >
          <Download className="h-3.5 w-3.5" />
          Download executive brief (PDF)
        </button>
        <Link
          href="/ai-readiness"
          className="rounded-md bg-teal px-6 py-2.5 text-sm font-semibold text-teal-foreground transition-opacity hover:opacity-90"
        >
          Get executive action brief →
        </Link>
      </div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────

export default function ExposureRiskAssessment() {
  const [currentSection, setCurrentSection] = useState(0);
  const [maxReached, setMaxReached] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedLevels, setSelectedLevels] = useState<Record<string, RiskLevel>>({});

  function navigateTo(i: number) {
    setCurrentSection(i);
    setMaxReached((prev) => Math.max(prev, i));
  }

  function handleAnswer(id: string, value: number, level: RiskLevel) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setSelectedLevels((prev) => ({ ...prev, [id]: level }));
  }

  function handleNext() {
    navigateTo(
      currentSection < SECTIONS.length - 1 ? currentSection + 1 : RESULTS_STEP
    );
  }

  function handleBack() {
    if (currentSection > 0) navigateTo(currentSection - 1);
  }

  function handleRetake() {
    setCurrentSection(0);
    setMaxReached(0);
    setAnswers({});
    setSelectedLevels({});
  }

  const allSectionsHaveAnswer = SECTIONS.every((section) =>
    section.questions.some((q) => q.id in answers)
  );

  return (
    <div>
      <ProgressBar
        currentSection={currentSection}
        maxReached={maxReached}
        allSectionsHaveAnswer={allSectionsHaveAnswer}
        onNavigate={navigateTo}
      />

      {currentSection < RESULTS_STEP ? (
        <SectionView
          sectionIndex={currentSection}
          answers={answers}
          selectedLevels={selectedLevels}
          onAnswer={handleAnswer}
          onBack={handleBack}
          onNext={handleNext}
          isLastSection={currentSection === SECTIONS.length - 1}
        />
      ) : (
        <ResultsView answers={answers} onRetake={handleRetake} />
      )}
    </div>
  );
}
