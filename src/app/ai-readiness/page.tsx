import type { Metadata } from "next";
import Header from "@/components/layout/header";
import AIReadinessAssessment from "@/components/marketing/ai-readiness-assessment";

export const metadata: Metadata = {
  title: "AI Readiness Assessment | TLC",
  description:
    "Diagnose your organisation's AI readiness across 8 dimensions and generate a 30-60-90 day transformation plan.",
};

export default function AIReadinessPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <span className="mb-6 inline-flex items-center rounded-full border border-teal/20 bg-[#9A7A3A]/5 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-teal uppercase">
              AI Readiness Assessment
            </span>
            <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-5xl">
              Diagnose your AI readiness across 8 dimensions.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              Map your organisation&apos;s current state, set a target readiness
              level, surface dimension-level gaps, and generate a 30-60-90 day
              transformation plan.
            </p>
          </div>
        </section>

        {/* Assessment tool */}
        <section className="border-t border-border px-6 pb-24 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-6xl pt-12">
            <AIReadinessAssessment />
          </div>
        </section>
      </main>
      
    </>
  );
}
