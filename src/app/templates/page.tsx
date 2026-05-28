import Link from "next/link";
import LeadCaptureForm from "@/components/marketing/lead-capture-form";
import TemplateCards from "@/components/marketing/template-cards";
import {
  Building2,
  Cpu,
  RefreshCw,
  Code2,
  Landmark,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";

const authorityBullets = [
  "Diagnose Coordination Debt™",
  "Govern AI features before execution",
  "Set token ceilings before sprint commitment",
  "Connect AI activity to financial accountability",
];


const reasons = [
  {
    title: "From opinion to evidence",
    description:
      "Without operating artifacts, AI governance is a set of opinions. Templates convert governance into structured evidence — reviewable, comparable, and improvable across sprints.",
  },
  {
    title: "From pilots to operating decisions",
    description:
      "Pilots produce results. Templates produce decisions. The difference between AI experimentation and AI governance is the presence of structured artifacts that trigger action.",
  },
  {
    title: "From AI spend to financial accountability",
    description:
      "Spend without attribution is invisible. Templates create the connective tissue between token consumption and financial outcomes — making AI spend visible to the people who govern capital.",
  },
];

const steps = [
  {
    number: "01",
    action: "Diagnose Coordination Debt™",
    artifact: "Coordination Debt™ Diagnostic",
    decision:
      "Where AI execution is slowed by human coordination cost.",
  },
  {
    number: "02",
    action: "Inventory AI features",
    artifact: "Feature Ledger Template",
    decision:
      "Which AI capabilities should be governed, funded, continued, or killed.",
  },
  {
    number: "03",
    action: "Set token ceilings",
    artifact: "Token Capacity Planning Sheet",
    decision:
      "How much cognitive capital each sprint is allowed to consume.",
  },
  {
    number: "04",
    action: "Review value contribution",
    artifact: "Tokenomics P&L Worksheet",
    decision:
      "Which AI investments deserve additional allocation.",
  },
];

const audiences = [
  {
    icon: Building2,
    role: "CIO / CTO",
    value:
      "Use the Diagnostic to map Coordination Debt™ and governance gaps, then use the Feature Ledger and Migration Mandate to establish executive accountability across the AI portfolio.",
  },
  {
    icon: Cpu,
    role: "AI Product Manager",
    value:
      "Use the Feature Ledger and Token Capacity Planning Sheet to govern every AI feature with measurable ceilings, success criteria, and sprint-level allocation.",
  },
  {
    icon: RefreshCw,
    role: "Transformation Leader",
    value:
      "Begin with the Coordination Debt™ Diagnostic to surface what is broken, then use the Migration Mandate to build organizational authority for AI system decisions.",
  },
  {
    icon: Code2,
    role: "Engineering Leader",
    value:
      "Use the Token Capacity Planning Sheet and Token Velocity™ Dashboard to govern sprint execution — replacing unlimited AI spend with measurable output discipline.",
  },
  {
    icon: Landmark,
    role: "Finance Partner",
    value:
      "Use the Tokenomics P&L Worksheet to connect AI inference costs to revenue contribution — giving finance the model needed to govern AI investment at the portfolio level.",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section id="lead-capture" className="px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">

              <div className="flex flex-col justify-center">
                <span className="mb-6 inline-flex w-fit items-center rounded-full border border-teal/20 bg-[#9A7A3A]/5 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-teal uppercase">
                  TLC Starter Kit
                </span>
                <h1 className="mb-5 text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-5xl">
                  Operating artifacts for governed AI execution.
                </h1>
                <p className="mb-8 text-base leading-7 text-muted-foreground">
                  The TLC Starter Kit helps teams diagnose Coordination Debt™,
                  define token ceilings, govern AI features, and connect AI
                  execution to financial accountability.
                </p>

                <ul className="mb-8 flex flex-col gap-3">
                  {authorityBullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal/25 bg-[#9A7A3A]/5">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#9A7A3A]" />
                      </div>
                      <span className="text-sm text-foreground/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 rounded-md border-border/80 px-6 text-[13px] font-medium text-muted-foreground hover:border-teal/30 hover:bg-transparent hover:text-foreground"
                  >
                    <Link href="/system">Explore the System</Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <LeadCaptureForm />
              </div>

            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                What&apos;s Inside
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                Six artifacts that turn AI governance into operating discipline.
              </h2>
            </div>

            <TemplateCards />
          </div>
        </section>

        {/* Why These Templates Exist */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                  Why These Exist
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                  AI governance fails when
                  <br />
                  it stays abstract.
                </h2>
                <p className="text-base leading-7 text-muted-foreground">
                  Policies do not create operating discipline by themselves. TLC
                  templates convert governance into artifacts that can be owned,
                  reviewed, measured, improved, and reused across AI execution
                  cycles.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="rounded-md border border-border bg-white p-5 shadow-sm"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#9A7A3A]" />
                      <p className="text-sm font-semibold text-foreground">
                        {reason.title}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Starting Path */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Where to Start
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                Start with the operating sequence.
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-[#9A7A3A]/15 hidden sm:block" />
              <div className="flex flex-col gap-0">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col gap-4 pb-10 last:pb-0 sm:flex-row sm:gap-7"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal/25 bg-white">
                      <CheckCircle2 className="size-4 text-teal/60" />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:flex-1 sm:pt-1.5">
                      <div>
                        <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                          Step {step.number}
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {step.action}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                          Artifact
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {step.artifact}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                          Decision Enabled
                        </p>
                        <p className="text-sm leading-5 text-muted-foreground">
                          {step.decision}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use This */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Who Should Use This
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                Built for teams responsible for AI execution control.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((audience) => {
                const Icon = audience.icon;
                return (
                  <div
                    key={audience.role}
                    className="flex flex-col gap-4 rounded-md border border-border bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-teal/20 bg-[#9A7A3A]/5">
                        <Icon className="size-4 text-teal" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {audience.role}
                      </h3>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {audience.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Lead Capture */}
        <section className="relative overflow-hidden border-t border-border px-6 py-24 lg:px-8 lg:py-32">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.65 0.14 195 / 0.05) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Get Started
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-[-0.015em] text-foreground sm:text-4xl">
                Start with measurable AI governance.
              </h2>
              <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground">
                Use the TLC Starter Kit to move from AI experimentation to
                governed execution.
              </p>
            </div>
            <LeadCaptureForm />
          </div>
        </section>

      </main>
      
    </>
  );
}
