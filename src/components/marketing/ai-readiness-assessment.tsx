"use client";

import { useState } from "react";
import {
  DIMENSIONS,
  DIMENSION_LABELS,
  LEVEL_SCORES,
  LEVEL_DESCRIPTORS,
  COMPANY_SIZES,
  WHO_TO_INTERVIEW,
  QUESTIONS,
  OBSERVATIONS,
  generatePlan,
} from "@/lib/ai-readiness-data";
import type { SizeKey } from "@/lib/ai-readiness-data";

type TabId = "framework" | "diagnostic" | "planner";

// ─── Shared control bar ──────────────────────────────────────────

interface ControlBarProps {
  companySize: SizeKey;
  currentLevel: number;
  targetLevel: number;
  onSizeChange: (v: SizeKey) => void;
  onCurrentChange: (v: number) => void;
  onTargetChange: (v: number) => void;
}

function ControlBar({
  companySize,
  currentLevel,
  targetLevel,
  onSizeChange,
  onCurrentChange,
  onTargetChange,
}: ControlBarProps) {
  return (
    <div className="mb-6 rounded-lg border border-slate-200 bg-[#F5F0E8] p-4">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-slate-500">
            Company size
          </label>
          <select
            value={companySize}
            onChange={(e) => onSizeChange(e.target.value as SizeKey)}
            className="w-full rounded-md border border-slate-300 bg-[#F5F0E8] px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          >
            {(Object.entries(COMPANY_SIZES) as [SizeKey, string][]).map(
              ([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-slate-500">
            Current state —{" "}
            <span className="font-semibold text-slate-900">{currentLevel}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={currentLevel}
            onChange={(e) => onCurrentChange(Number(e.target.value))}
            className="w-full accent-teal-600"
          />
          <p className="mt-1 text-xs text-slate-500">
            {LEVEL_DESCRIPTORS[currentLevel]?.name}
          </p>
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-slate-500">
            Target state —{" "}
            <span className="font-semibold text-slate-900">{targetLevel}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={targetLevel}
            onChange={(e) => onTargetChange(Number(e.target.value))}
            className="w-full accent-teal-600"
          />
          <p className="mt-1 text-xs text-slate-500">
            {LEVEL_DESCRIPTORS[targetLevel]?.name}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Framework tab ───────────────────────────────────────────────

interface FrameworkTabProps extends ControlBarProps {
  onGoToPlan: () => void;
}

function FrameworkTab({
  companySize,
  currentLevel,
  targetLevel,
  onSizeChange,
  onCurrentChange,
  onTargetChange,
  onGoToPlan,
}: FrameworkTabProps) {
  const currentScores = LEVEL_SCORES[currentLevel] ?? LEVEL_SCORES[0];
  const targetScores = LEVEL_SCORES[targetLevel] ?? LEVEL_SCORES[0];
  const gap = Math.max(targetLevel - currentLevel, 0);

  const gapColorCls =
    gap > 40 ? "text-rose-600" : gap >= 20 ? "text-amber-600" : "text-teal-600";
  const gapLabel =
    gap > 40 ? "Significant" : gap >= 20 ? "Moderate" : gap > 0 ? "Incremental" : "None";

  const currentDescriptor = LEVEL_DESCRIPTORS[currentLevel];
  const targetDescriptor = LEVEL_DESCRIPTORS[targetLevel];

  return (
    <div>
      <ControlBar
        companySize={companySize}
        currentLevel={currentLevel}
        targetLevel={targetLevel}
        onSizeChange={onSizeChange}
        onCurrentChange={onCurrentChange}
        onTargetChange={onTargetChange}
      />

      {/* Metric strip */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
            Current state
          </p>
          <p className="text-3xl font-bold text-teal-600">{currentLevel}%</p>
          <p className="mt-1 text-sm text-slate-600">{currentDescriptor?.name}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
            Target state
          </p>
          <p className="text-3xl font-bold text-slate-900">{targetLevel}%</p>
          <p className="mt-1 text-sm text-slate-600">{targetDescriptor?.name}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
            Gap to close
          </p>
          <p className={`text-3xl font-bold ${gapColorCls}`}>{gap}pp</p>
          <p className="mt-1 text-sm text-slate-600">{gapLabel}</p>
        </div>
      </div>

      {/* As-is / To-be cards */}
      <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-5">
          <p className="text-3xl font-bold text-teal-600">{currentLevel}%</p>
          <h3 className="mb-1 text-base font-semibold text-slate-900">
            {currentDescriptor?.name}
          </h3>
          <p className="mb-5 text-sm text-slate-600">{currentDescriptor?.description}</p>
          <div className="flex flex-col gap-2.5">
            {DIMENSIONS.map((dim) => (
              <div key={dim} className="flex items-center gap-3">
                <span className="w-[84px] shrink-0 text-xs text-slate-600">
                  {DIMENSION_LABELS[dim]}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-teal-500 transition-all duration-300"
                    style={{ width: `${currentScores[dim]}%` }}
                  />
                </div>
                <span className="w-7 shrink-0 text-right text-xs text-slate-500">
                  {currentScores[dim]}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-5">
          <p className="text-3xl font-bold text-slate-900">{targetLevel}%</p>
          <h3 className="mb-1 text-base font-semibold text-slate-900">
            {targetDescriptor?.name}
          </h3>
          <p className="mb-5 text-sm text-slate-600">{targetDescriptor?.description}</p>
          <div className="flex flex-col gap-2.5">
            {DIMENSIONS.map((dim) => (
              <div key={dim} className="flex items-center gap-3">
                <span className="w-[84px] shrink-0 text-xs text-slate-600">
                  {DIMENSION_LABELS[dim]}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-slate-800 transition-all duration-300"
                    style={{ width: `${targetScores[dim]}%` }}
                  />
                </div>
                <span className="w-7 shrink-0 text-right text-xs text-slate-500">
                  {targetScores[dim]}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gap analysis */}
      <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-5">
        <h3 className="mb-4 font-semibold text-slate-900">Gap analysis</h3>
        <div className="flex flex-col">
          {DIMENSIONS.map((dim) => {
            const dimGap = Math.max(targetScores[dim] - currentScores[dim], 0);
            const urgency =
              dimGap > 40 ? "High" : dimGap >= 20 ? "Medium" : "Low";
            const badgeCls =
              dimGap > 40
                ? "rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-xs text-rose-700"
                : dimGap >= 20
                ? "rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs text-amber-700"
                : "rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs text-teal-700";
            return (
              <div
                key={dim}
                className="flex items-center justify-between border-b border-slate-100 py-2.5 last:border-b-0"
              >
                <span className="text-sm text-slate-700">
                  {DIMENSION_LABELS[dim]}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">+{dimGap}pp needed</span>
                  <span className={badgeCls}>{urgency}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex justify-end">
          <button
            onClick={onGoToPlan}
            className="inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Generate 30-60-90 day plan →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Diagnostic tab ──────────────────────────────────────────────

function DiagnosticTab(props: ControlBarProps) {
  const {
    companySize,
    currentLevel,
    targetLevel,
    onSizeChange,
    onCurrentChange,
    onTargetChange,
  } = props;

  const currentScores = LEVEL_SCORES[currentLevel] ?? LEVEL_SCORES[0];
  const targetScores = LEVEL_SCORES[targetLevel] ?? LEVEL_SCORES[0];

  return (
    <div>
      <ControlBar
        companySize={companySize}
        currentLevel={currentLevel}
        targetLevel={targetLevel}
        onSizeChange={onSizeChange}
        onCurrentChange={onCurrentChange}
        onTargetChange={onTargetChange}
      />

      {/* Who to interview */}
      <div className="mb-6 rounded-r-lg border-l-4 border-teal-500 bg-[#F5F0E8] p-4">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-500">
          Who to interview
        </p>
        <p className="text-sm text-slate-700">{WHO_TO_INTERVIEW[companySize]}</p>
      </div>

      {/* 8 dimension sections */}
      {DIMENSIONS.map((dim) => (
        <div
          key={dim}
          className="mb-4 overflow-hidden rounded-lg border border-slate-200 bg-[#F5F0E8]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h3 className="font-semibold text-slate-900">
              {DIMENSION_LABELS[dim]}
            </h3>
            <span className="ml-4 shrink-0 text-xs text-slate-400">
              {currentScores[dim]}pp → {targetScores[dim]}pp
            </span>
          </div>
          <div className="px-5 py-4">
            {QUESTIONS[dim].map((q, i) => (
              <div
                key={i}
                className={
                  i < QUESTIONS[dim].length - 1
                    ? "mb-3 border-b border-slate-100 pb-3"
                    : ""
                }
              >
                <p className="text-sm text-slate-700">{q.text}</p>
                <span className="mt-1 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                  {q.audience}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Observation checklist */}
      <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          What to observe without asking
        </h3>
        <div className="flex flex-col gap-4">
          {OBSERVATIONS.map((obs, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
              <div>
                <p className="text-sm text-slate-700">{obs.text}</p>
                <p className="mt-0.5 text-xs text-slate-400">{obs.method}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Planner tab ─────────────────────────────────────────────────

const PHASE_STYLES: Array<{
  borderCls: string;
  labelCls: string;
  label: string;
  milestoneBadgeCls: string;
  milestoneDayLabel: string;
}> = [
  {
    borderCls: "border-l-4 border-teal-500",
    labelCls: "text-teal-500",
    label: "PHASE 1 — DAYS 1–30",
    milestoneBadgeCls:
      "shrink-0 rounded bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700",
    milestoneDayLabel: "Day 30",
  },
  {
    borderCls: "border-l-4 border-amber-500",
    labelCls: "text-amber-500",
    label: "PHASE 2 — DAYS 31–60",
    milestoneBadgeCls:
      "shrink-0 rounded bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700",
    milestoneDayLabel: "Day 60",
  },
  {
    borderCls: "border-l-4 border-teal-600",
    labelCls: "text-teal-600",
    label: "PHASE 3 — DAYS 61–90",
    milestoneBadgeCls:
      "shrink-0 rounded bg-slate-800 px-2.5 py-1 text-xs font-medium text-white",
    milestoneDayLabel: "Day 90",
  },
];

function PlannerTab(props: ControlBarProps) {
  const {
    companySize,
    currentLevel,
    targetLevel,
    onSizeChange,
    onCurrentChange,
    onTargetChange,
  } = props;

  const gap = Math.max(targetLevel - currentLevel, 0);
  const gapBucketLabel =
    gap > 40 ? "significant" : gap >= 20 ? "moderate" : "incremental";
  const gapImplication =
    gap > 40
      ? "This is a significant transformation requiring strong executive sponsorship and dedicated resource allocation."
      : gap >= 20
      ? "This is a moderate transition that benefits from structured governance discipline and consistent measurement."
      : "This is a focused improvement achievable through governance tightening and measurement discipline.";

  const currentDescriptor = LEVEL_DESCRIPTORS[currentLevel];
  const targetDescriptor = LEVEL_DESCRIPTORS[targetLevel];
  const plan = generatePlan(companySize, currentLevel, targetLevel);

  return (
    <div>
      <ControlBar
        companySize={companySize}
        currentLevel={currentLevel}
        targetLevel={targetLevel}
        onSizeChange={onSizeChange}
        onCurrentChange={onCurrentChange}
        onTargetChange={onTargetChange}
      />

      {/* Context callout */}
      <div className="mb-6 rounded-r-lg border-l-4 border-teal-500 bg-[#F5F0E8] p-4">
        <p className="text-sm text-slate-700">
          Moving from{" "}
          <span className="font-semibold text-slate-900">
            {currentDescriptor?.name} ({currentLevel}%)
          </span>{" "}
          to{" "}
          <span className="font-semibold text-slate-900">
            {targetDescriptor?.name} ({targetLevel}%)
          </span>{" "}
          for a{" "}
          <span className="font-semibold text-slate-900">
            {COMPANY_SIZES[companySize]}
          </span>{" "}
          organisation closes a{" "}
          <span className="font-semibold text-slate-900">
            {gap}pp {gapBucketLabel} gap
          </span>
          . {gapImplication}
        </p>
      </div>

      {/* Three phase cards */}
      {plan.map((phase, i) => {
        const style = PHASE_STYLES[i];
        if (!style) return null;
        return (
          <div
            key={i}
            className={`mb-4 rounded-lg border border-slate-200 bg-[#F5F0E8] p-5 pl-4 ${style.borderCls}`}
          >
            <p
              className={`mb-2 text-xs font-medium uppercase tracking-widest ${style.labelCls}`}
            >
              {style.label}
            </p>
            <h3 className="mb-3 text-base font-semibold text-slate-900">
              {phase.title}
            </h3>
            <div className="flex flex-col">
              {phase.actions.map((action, j) => (
                <div
                  key={j}
                  className="flex items-start border-b border-slate-50 py-1.5 last:border-b-0"
                >
                  <span className="mr-2 shrink-0 text-teal-500">→</span>
                  <span className="text-sm text-slate-600">{action}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Milestone table */}
      <div className="rounded-lg border border-slate-200 bg-[#F5F0E8] p-5">
        <h3 className="mb-4 font-semibold text-slate-900">
          Success criteria by milestone
        </h3>
        <div className="flex flex-col">
          {plan.map((phase, i) => {
            const style = PHASE_STYLES[i];
            if (!style) return null;
            return (
              <div
                key={i}
                className="flex items-start gap-4 border-b border-slate-100 py-3 last:border-b-0"
              >
                <span className={style.milestoneBadgeCls}>
                  {style.milestoneDayLabel}
                </span>
                <p className="text-sm text-slate-600">{phase.milestone}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs italic text-slate-400">
          Timelines are indicative. Larger organisations and wider gaps may
          require extended phases. Adjust based on governance capacity,
          executive sponsorship, and available resource.
        </p>
      </div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────

const TABS: { id: TabId; label: string }[] = [
  { id: "framework", label: "Readiness Framework" },
  { id: "diagnostic", label: "Diagnostic Questions" },
  { id: "planner", label: "30-60-90 Day Plan" },
];

export default function AIReadinessAssessment() {
  const [activeTab, setActiveTab] = useState<TabId>("framework");
  const [companySize, setCompanySize] = useState<SizeKey>("md");
  const [currentLevel, setCurrentLevel] = useState(30);
  const [targetLevel, setTargetLevel] = useState(60);

  const sharedProps: ControlBarProps = {
    companySize,
    currentLevel,
    targetLevel,
    onSizeChange: setCompanySize,
    onCurrentChange: setCurrentLevel,
    onTargetChange: setTargetLevel,
  };

  return (
    <div>
      {/* Tab bar */}
      <div className="mb-6 flex overflow-x-auto border-b border-slate-200 bg-[#F5F0E8]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`-mb-px shrink-0 px-5 py-3.5 text-sm transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-teal-600 font-medium text-teal-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "framework" && (
        <FrameworkTab
          {...sharedProps}
          onGoToPlan={() => setActiveTab("planner")}
        />
      )}
      {activeTab === "diagnostic" && <DiagnosticTab {...sharedProps} />}
      {activeTab === "planner" && <PlannerTab {...sharedProps} />}
    </div>
  );
}
