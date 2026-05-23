import LeadCaptureForm from "./lead-capture-form";

export default function FinalCTA() {
  return (
    <section
      id="diagnostic"
      className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
    >
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
            Start Here
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Start with the diagnostic.
          </h2>
        </div>
        <LeadCaptureForm buttonText="Get the AI-Native Diagnostic" />
      </div>
    </section>
  );
}
