const layers = [
  {
    name: "Feature Governance",
    description:
      "Every AI feature in production carries a structured record of its token ceiling, success criteria, and kill conditions.",
  },
  {
    name: "Token Capacity Planning",
    description:
      "Cognitive compute is allocated per sprint the same way financial capital is allocated — with limits, forecasts, and accountability.",
  },
  {
    name: "Organizational Mandate",
    description:
      "Migration decisions, system retirements, and consolidations are authorized through a formal governance mandate — not left to drift.",
  },
  {
    name: "Measurement",
    description:
      "Token velocity and output attribution create the core signal for AI execution efficiency across features and teams.",
  },
  {
    name: "Runtime Governance",
    description:
      "Escalation rules, boundary conditions, and operational controls govern autonomous AI execution in production environments.",
  },
  {
    name: "Tokenomics P&L",
    description:
      "AI inference cost becomes a financial line item — linked to revenue contribution and surfaced at the portfolio level.",
  },
];

export default function TemplatesPreview() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              The Operating System
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
              The operating system for governed AI execution.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              TLC connects governance, token allocation, runtime controls, and
              financial accountability into one closed-loop operating model.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-teal/15 hidden sm:block" />
          <div className="flex flex-col gap-0">
            {layers.map((layer, i) => (
              <div
                key={layer.name}
                className="relative flex flex-col gap-3 pb-8 last:pb-0 sm:flex-row sm:gap-7"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal/25 bg-white text-[10px] font-mono font-semibold text-teal/60">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_2fr] sm:flex-1 sm:pt-1.5">
                  <p className="text-sm font-semibold text-foreground">
                    {layer.name}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
