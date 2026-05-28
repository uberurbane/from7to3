"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  ClipboardList,
  FileSpreadsheet,
  AlertTriangle,
  Gauge,
  PieChart,
  X,
} from "lucide-react";
import type { TLCTemplate } from "@/lib/tlc-templates";
import { tlcTemplates } from "@/lib/tlc-templates";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "coordination-debt-diagnostic": Search,
  "feature-ledger-template": ClipboardList,
  "token-capacity-planning-sheet": FileSpreadsheet,
  "migration-mandate-brief": AlertTriangle,
  "token-velocity-dashboard": Gauge,
  "tokenomics-pl-worksheet": PieChart,
};

function PreviewPanel({ template, onClose }: { template: TLCTemplate; onClose: () => void }) {
  return (
    <div className="mt-8 rounded-md border border-teal/20 bg-teal/[0.02] p-8">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-teal uppercase">
            Template Preview
          </p>
          <h3 className="text-base font-bold text-foreground">{template.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="flex shrink-0 items-center justify-center rounded-sm border border-border bg-[#F5F0E8] p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close preview"
        >
          <X className="size-3.5" />
        </button>
      </div>

      <div className="mb-7">
        <p className="mb-2 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
          Purpose
        </p>
        <p className="text-sm leading-6 text-muted-foreground">{template.purpose}</p>
      </div>

      <div className="mb-7 grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
            Sections
          </p>
          <ul className="flex flex-col gap-2">
            {template.sections.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="block h-1 w-1 shrink-0 rounded-full bg-teal/60" />
                <span className="text-xs text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
            Fields
          </p>
          <ul className="flex flex-col gap-2">
            {template.fields.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="block h-1 w-1 shrink-0 rounded-full bg-teal/60" />
                <span className="text-xs text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-7">
        <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
          Example Rows
        </p>
        <div className="flex flex-wrap gap-2">
          {template.exampleRows.map((row) => (
            <span
              key={row}
              className="rounded-sm border border-border bg-[#F5F0E8] px-2.5 py-1 text-xs text-muted-foreground"
            >
              {row}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
            Review Questions
          </p>
          <ul className="flex flex-col gap-2.5">
            {template.reviewQuestions.map((q) => (
              <li key={q} className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-teal/60" />
                <span className="text-xs leading-5 text-muted-foreground">{q}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
            Decision Criteria
          </p>
          <ul className="flex flex-col gap-2">
            {template.decisionCriteria.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="block h-1 w-1 shrink-0 rounded-full bg-teal/60" />
                <span className="text-xs text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TemplateCards() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const selectedTemplate = tlcTemplates.find((t) => t.slug === selectedSlug) ?? null;

  useEffect(() => {
    if (selectedSlug && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedSlug]);

  function handleToggle(slug: string) {
    setSelectedSlug((prev) => (prev === slug ? null : slug));
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tlcTemplates.map((tmpl) => {
          const Icon = iconMap[tmpl.slug];
          const isSelected = selectedSlug === tmpl.slug;
          return (
            <div
              key={tmpl.slug}
              className={`flex flex-col rounded-md border bg-[#F5F0E8] p-6 shadow-sm transition-colors ${
                isSelected ? "border-teal/40" : "border-border"
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border ${
                    isSelected
                      ? "border-teal/30 bg-teal/10"
                      : "border-teal/20 bg-teal/5"
                  }`}
                >
                  {Icon && <Icon className="size-4 text-teal" />}
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {tmpl.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                    Purpose
                  </p>
                  <p className="text-xs leading-5 text-muted-foreground">
                    {tmpl.shortDescription}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                    Best Used By
                  </p>
                  <p className="text-xs leading-5 text-muted-foreground">
                    {tmpl.bestUsedBy}
                  </p>
                </div>
                <div className="mt-auto border-t border-border pt-4">
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                    Output
                  </p>
                  <p className="mb-4 text-xs leading-5 text-foreground/70">
                    {tmpl.output}
                  </p>
                  <button
                    onClick={() => handleToggle(tmpl.slug)}
                    className={`text-[11px] font-semibold tracking-[0.06em] transition-colors ${
                      isSelected
                        ? "text-teal"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isSelected ? "Close Preview" : "View Template"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedTemplate && (
        <div ref={previewRef}>
          <PreviewPanel
            template={selectedTemplate}
            onClose={() => setSelectedSlug(null)}
          />
        </div>
      )}
    </div>
  );
}
