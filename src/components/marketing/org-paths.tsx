const instruments = [
  {
    name: "Feature Ledger",
    governs: "Every AI feature in production — its token ceiling, success criteria, and kill conditions.",
    replaces: "Informal feature tracking and undocumented AI workloads with no accountability fields.",
    why: "Links every AI feature to measurable business impact — not activity.",
  },
  {
    name: "Token Capacity Planning",
    governs: "Sprint-level allocation of cognitive compute across features, teams, and use cases.",
    replaces: "Uncapped AI spend and unlimited token consumption without organizational governance.",
    why: "Converts AI compute from a utility expense into a governed capital allocation.",
  },
  {
    name: "Migration Mandate",
    governs: "Decisions to retire, replace, or consolidate AI systems before they accumulate debt.",
    replaces: "Informal migration conversations and deferred system retirements without authorization.",
    why: "Creates organizational authority for AI system decisions — and a record of why they were made.",
  },
  {
    name: "Token Velocity™",
    governs: "Output-per-token ratios by feature and team over time.",
    replaces: "Qualitative AI productivity claims with no measurable execution signal.",
    why: "The core efficiency signal for AI execution — revealing value creation and waste simultaneously.",
  },
  {
    name: "Runtime Governance",
    governs: "Autonomous AI execution in production — escalation rules, boundary conditions, and controls.",
    replaces: "Unmonitored agent execution with no operational oversight or intervention structure.",
    why: "Ensures that AI systems operating autonomously remain within defined operational boundaries.",
  },
  {
    name: "Tokenomics P&L",
    governs: "AI inference cost as a financial line item linked to revenue contribution and portfolio ROI.",
    replaces: "AI cost as an IT infrastructure expense invisible to financial governance.",
    why: "Financial accountability for every AI investment — surfaced at the level finance can govern.",
  },
];

export default function OrgPaths() {
  return (
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
              className="flex flex-col rounded-md border border-border bg-[#F5F0E8] p-6 shadow-sm"
            >
              <h3 className="mb-5 text-sm font-semibold text-foreground">
                {inst.name}
              </h3>
              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                    Governs
                  </p>
                  <p className="text-xs leading-5 text-muted-foreground">
                    {inst.governs}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                    Replaces
                  </p>
                  <p className="text-xs leading-5 text-muted-foreground">
                    {inst.replaces}
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
  );
}
