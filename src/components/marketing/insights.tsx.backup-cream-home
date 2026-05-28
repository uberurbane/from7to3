const signals = [
  {
    label: "Investment Signal",
    question: "Which AI capabilities deserve additional allocation?",
    description:
      "Token Velocity™ and attribution data reveal which features generate measurable output relative to token consumption — identifying where additional investment produces compounding returns.",
  },
  {
    label: "Efficiency Signal",
    question: "Which systems consume disproportionate tokens relative to delivered value?",
    description:
      "Portfolio-level tokenomics visibility surfaces waste before it becomes entrenched — enabling allocation shifts away from low-yield AI execution toward higher-return operating capacity.",
  },
  {
    label: "Organizational Signal",
    question: "Where does coordination cost exceed execution value?",
    description:
      "When token spend maps to organizational output, the systems that produce coordination overhead rather than execution value become visible — and eliminable.",
  },
];

export default function Insights() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Financial Accountability
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
              AI becomes material when token spend becomes financial exposure.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Once AI execution reaches enterprise scale, token consumption
              becomes an operational and financial governance problem. TLC
              introduces attribution, portfolio visibility, runtime
              accountability, and measurable execution economics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="flex flex-col rounded-md border border-border bg-white p-6 shadow-sm"
            >
              <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-teal uppercase">
                {signal.label}
              </p>
              <p className="mb-4 text-sm font-semibold leading-snug text-foreground">
                {signal.question}
              </p>
              <p className="text-xs leading-5 text-muted-foreground">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
