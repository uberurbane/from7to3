import LeadCaptureForm from "./lead-capture-form";

export default function LeadCaptureSection() {
  return (
    <section id="lead-capture" className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
            Start Here
          </p>
          <h2 className="mb-5 text-3xl font-bold tracking-[-0.015em] text-foreground sm:text-4xl">
            Start with the operating artifacts.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground">
            Receive the TLC Starter Kit for diagnosing coordination debt,
            governing AI execution, and establishing measurable operating
            discipline.
          </p>
        </div>
        <LeadCaptureForm />
      </div>
    </section>
  );
}
