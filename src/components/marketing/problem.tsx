const problems = [
  {
    title: "Token spend without attribution",
    body: "AI usage becomes visible, but organizations cannot connect token consumption to measurable business contribution.",
  },
  {
    title: "AI pilots without kill conditions",
    body: "Experiments continue indefinitely because ownership, success criteria, and retirement rules were never formally defined.",
  },
  {
    title: "Runtime agents without governance",
    body: "Autonomous execution scales before escalation rules, boundary conditions, and operational controls exist.",
  },
  {
    title: "Productivity claims without financial accountability",
    body: "Teams report AI acceleration while leadership still lacks portfolio-level visibility into ROI and execution economics.",
  },
];

export default function Problem() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              The Problem
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
              Most AI programs fail
              <br />
              after the pilot stage.
            </h2>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Organizations can measure AI activity. Very few can measure AI
              accountability. Token spend grows, governance fragments,
              attribution disappears, and runtime execution scales faster than
              operating discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {problems.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-3 rounded-md border border-border bg-[#F5F0E8] p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/60" />
                  <h3 className="text-sm font-semibold leading-snug text-foreground">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs leading-5 text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
