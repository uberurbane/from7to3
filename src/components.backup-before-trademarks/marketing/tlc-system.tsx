const flowSteps = [
  { label: "Direction", sub: "Strategic governance and operating mandate" },
  { label: "Control", sub: "Token allocation, attribution, and accountability" },
  { label: "Execution", sub: "Governed runtime with measurable output discipline" },
];

export default function TLCSystem() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">

          <div className="flex flex-col justify-center gap-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              The Compression Thesis
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
              Organizations compress when coordination becomes measurable.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              AI changes organizational economics because execution becomes
              cheaper than coordination. As AI systems absorb execution work,
              organizations shift toward smaller control structures with greater
              operating visibility.
            </p>
            <p className="text-sm leading-6 text-muted-foreground/70">
              Token Learning Control provides the operating discipline required
              for AI-native organizational compression.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-md border border-border bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center justify-center gap-6">
                <span className="text-6xl font-bold tracking-[-0.04em] text-foreground lg:text-7xl">
                  7
                </span>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-px w-10 bg-teal/40" />
                  <div
                    className="h-0 w-0"
                    style={{
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "8px solid oklch(0.65 0.14 195)",
                    }}
                  />
                </div>
                <span className="text-6xl font-bold tracking-[-0.04em] text-teal lg:text-7xl">
                  3
                </span>
              </div>

              <div className="relative">
                <div className="absolute left-[19px] top-5 bottom-5 w-px bg-teal/15" />
                <div className="flex flex-col gap-0">
                  {flowSteps.map((step, i) => (
                    <div key={step.label} className="relative flex items-start gap-4 pb-6 last:pb-0">
                      <div className="relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal/25 bg-white text-[10px] font-semibold text-teal/70">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="pt-1">
                        <p className="text-sm font-semibold text-foreground">
                          {step.label}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                          {step.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
