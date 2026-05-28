import Link from "next/link";
import LeadCaptureForm from "@/components/marketing/lead-capture-form";
import {
  ArrowRight,
  Coins,
  Ban,
  Bot,
  TrendingUp,
  FileText,
  Calendar,
  Award,
  Activity,
  Shield,
  DollarSign,
  BarChart2,
  Cpu,
  Code2,
  RefreshCw,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";

const problemCards = [
  {
    icon: Coins,
    title: "Token spend without attribution",
    description:
      "AI inference costs accumulate with no connection to features, teams, or outcomes.",
  },
  {
    icon: Ban,
    title: "AI pilots without kill conditions",
    description:
      "Experiments run indefinitely. There is no mandate to retire what is not working.",
  },
  {
    icon: Bot,
    title: "Runtime agents without governance",
    description:
      "Agents execute in production with no circuit breakers, escalation rules, or audit trail.",
  },
  {
    icon: TrendingUp,
    title: "Productivity claims without P&L impact",
    description:
      "Teams report AI gains. Finance cannot verify them. No instrument connects the two.",
  },
];

const loopLayers = [
  {
    number: "01",
    name: "Feature Governance",
    icon: FileText,
    instruments: ["Feature Ledger", "Success Criteria", "Token Ceilings", "Kill Conditions"],
    description:
      "Every AI feature enters the ledger with a defined token ceiling, success threshold, and kill condition.",
  },
  {
    number: "02",
    name: "Sprint Governance",
    icon: Calendar,
    instruments: ["Token Capacity Planning", "Sprint Token Budgets", "Allocation Discipline"],
    description:
      "Token budgets are allocated per sprint like financial capital — with limits, forecasts, and accountability.",
  },
  {
    number: "03",
    name: "Organizational Mandate",
    icon: Award,
    instruments: ["Migration Mandate", "Story Point Retirement", "Executive Authority"],
    description:
      "The mandate replaces story points as the unit of governance and gives executives a decision framework for AI retirement.",
  },
  {
    number: "04",
    name: "Measurement",
    icon: Activity,
    instruments: ["Token Velocity™", "Ceiling Accuracy", "Waste Rate"],
    description:
      "Token Velocity™ measures output per token spent. Ceiling accuracy improves with each sprint's attribution data.",
  },
  {
    number: "05",
    name: "Runtime Governance",
    icon: Shield,
    instruments: ["Agent Boundaries", "Circuit Breakers", "Escalation Rules"],
    description:
      "Production AI operates within defined boundaries. Violations trigger escalation before they compound into incidents.",
  },
  {
    number: "06",
    name: "Financial Accountability",
    icon: DollarSign,
    instruments: ["Tokenomics P&L", "Feature ROI", "Portfolio Governance"],
    description:
      "AI inference cost becomes a ledger line. Feature ROI is calculated. Portfolio decisions are made with financial precision.",
  },
];

const instruments = [
  {
    name: "Feature Ledger",
    replaces: "Backlog tickets without financial accountability",
    governs: "AI feature cost, output, and value contribution per sprint",
    why: "Links every AI feature to measurable business impact — not activity.",
  },
  {
    name: "Token Capacity Planning",
    replaces: "Uncapped AI spend within sprint cycles",
    governs: "Cognitive compute allocation per sprint and per team",
    why: "Treats AI execution as capital — with limits, forecasts, and governance.",
  },
  {
    name: "Migration Mandate",
    replaces: "Legacy AI pilots that run indefinitely without review",
    governs: "Kill, replace, or consolidate decisions across the AI portfolio",
    why: "Prevents AI debt from accumulating across undifferentiated systems.",
  },
  {
    name: "Token Velocity™",
    replaces: "Productivity claims with no measurement foundation",
    governs: "Output-per-token ratios tracked over time",
    why: "The core signal for AI execution efficiency and ceiling calibration.",
  },
  {
    name: "Runtime Governance",
    replaces: "Ungoverned agent execution in production environments",
    governs: "Agent boundaries, escalation logic, and circuit breaker thresholds",
    why: "Execution accountability that operates beyond safety and testing.",
  },
  {
    name: "Tokenomics P&L",
    replaces: "AI cost buried in undifferentiated infrastructure budgets",
    governs: "Feature-level ROI, portfolio economics, and board-level reporting",
    why: "Makes AI investment and return visible where financial decisions are made.",
  },
];

const signals = [
  {
    name: "Investment Signal",
    description:
      "Sprint attribution data flows back into feature prioritization. Token ceilings become more accurate with each cycle. The system self-calibrates.",
  },
  {
    name: "Efficiency Signal",
    description:
      "Runtime data improves governance thresholds. Circuit breakers tighten. Waste rates decline. Token Velocity™ trends upward over time.",
  },
  {
    name: "Organizational Signal",
    description:
      "P&L feedback reshapes team structure, AI portfolio composition, and executive decision-making. Accountability becomes structural.",
  },
];

const audiences = [
  {
    icon: Building2,
    role: "CIO / CTO",
    value:
      "Governance infrastructure that connects AI execution to organizational outcomes. Replaces AI sprawl with a managed, accountable operating model.",
  },
  {
    icon: BarChart2,
    role: "CFO",
    value:
      "Financial accountability for every AI investment. Links token spend to revenue contribution and surfaces portfolio ROI at the board level.",
  },
  {
    icon: Cpu,
    role: "AI Product Manager",
    value:
      "Instruments for planning, measuring, and killing AI features with discipline. Replaces assumption-driven delivery with evidence-backed governance.",
  },
  {
    icon: Code2,
    role: "Engineering Leader",
    value:
      "Sprint-level token budgets and runtime controls. Replaces unlimited AI spend with governed execution and measurable output.",
  },
  {
    icon: RefreshCw,
    role: "Transformation Leader",
    value:
      "A closed-loop model for transitioning from AI experimentation to AI-native operations — with organizational authority built in.",
  },
];

export default function SystemPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-teal/20 bg-[#9A7A3A]/5 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-teal uppercase">
              The TLC Operating Model
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              The operating system for
              <br className="hidden sm:block" />
              governed AI execution.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Token Learning Control connects feature governance, sprint-level
              token allocation, runtime controls, and financial accountability
              into one closed-loop operating model.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-10 rounded-md bg-[#9A7A3A] px-6 text-[13px] font-semibold tracking-[0.01em] text-[#F5F0E8] hover:bg-[#9A7A3A]/88"
              >
                <Link href="/templates">
                  Download the TLC Starter Kit
                  <ArrowRight className="ml-1.5 size-3.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-md border-border/80 px-6 text-[13px] font-medium text-muted-foreground hover:border-teal/30 hover:bg-transparent hover:text-foreground"
              >
                <Link href="/templates">View Templates</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                The Problem
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                AI activity is visible.
                <br />
                AI accountability is not.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Most organizations can see AI usage. They cannot connect AI
                execution to value, governance, kill decisions, or financial
                outcomes. The gap between activity and accountability is where
                Coordination Debt™ accumulates.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {problemCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex gap-5 rounded-md border border-border bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border bg-muted">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="mb-1.5 text-sm font-semibold text-foreground">
                        {card.title}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The TLC Loop */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                The TLC Loop
              </p>
              <h2 className="mb-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                Six layers. One closed-loop operating model.
              </h2>
              <p className="max-w-lg text-base leading-7 text-muted-foreground">
                Each layer feeds the next. The loop creates compounding
                governance precision over time.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative">
                <div className="absolute left-5 top-2 bottom-2 w-px bg-[#9A7A3A]/15" />
                <div className="flex flex-col gap-0">
                  {loopLayers.map((layer) => {
                    const Icon = layer.icon;
                    return (
                      <div key={layer.name} className="relative flex gap-7 pb-9 last:pb-0">
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal/25 bg-white">
                          <Icon className="size-4 text-teal" />
                        </div>
                        <div className="pt-1.5">
                          <div className="mb-1 flex items-center gap-2">
                            <span className="font-mono text-[10px] text-teal/50">
                              {layer.number}
                            </span>
                            <h3 className="text-sm font-semibold text-foreground">
                              {layer.name}
                            </h3>
                          </div>
                          <div className="mb-2 flex flex-wrap gap-1">
                            {layer.instruments.map((inst) => (
                              <span
                                key={inst}
                                className="rounded-sm border border-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                              >
                                {inst}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:pt-2">
                {loopLayers.map((layer) => (
                  <div
                    key={layer.name}
                    className="rounded-sm border-l-2 border-teal/20 bg-white py-3 pl-4 pr-5 shadow-sm"
                  >
                    <p className="mb-0.5 text-xs font-semibold text-foreground/70">
                      {layer.name}
                    </p>
                    <p className="text-xs leading-5 text-muted-foreground">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Instruments */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Core Instruments
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                Each instrument replaces something broken.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {instruments.map((inst) => (
                <div
                  key={inst.name}
                  className="flex flex-col rounded-md border border-border bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-5 text-sm font-semibold text-foreground">
                    {inst.name}
                  </h3>
                  <div className="flex flex-1 flex-col gap-4">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                        Replaces
                      </p>
                      <p className="text-xs leading-5 text-muted-foreground">
                        {inst.replaces}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                        Governs
                      </p>
                      <p className="text-xs leading-5 text-muted-foreground">
                        {inst.governs}
                      </p>
                    </div>
                    <div className="mt-auto border-t border-border pt-4">
                      <p className="text-xs leading-5 text-foreground/70">
                        {inst.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the System Compounds */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                  How It Compounds
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                  The system becomes more
                  <br />
                  precise over time.
                </h2>
                <p className="text-base leading-7 text-muted-foreground">
                  Each sprint creates attribution data. Attribution data
                  improves future token ceilings. Runtime data tightens
                  governance thresholds. Tokenomics P&L feeds back into feature
                  prioritization. The loop closes — and accelerates.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                {signals.map((signal) => (
                  <div
                    key={signal.name}
                    className="rounded-md border border-border bg-white p-5 shadow-sm"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#9A7A3A]" />
                      <p className="text-sm font-semibold text-foreground">
                        {signal.name}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {signal.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who It Is For */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Who It Is For
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                Built for the people who bear accountability.
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

        {/* Final CTA */}
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
              <h2 className="text-3xl font-bold tracking-[-0.015em] text-foreground sm:text-4xl lg:text-5xl">
                Start by making AI work measurable.
              </h2>
            </div>
            <LeadCaptureForm />
          </div>
        </section>

      </main>
      
    </>
  );
}
