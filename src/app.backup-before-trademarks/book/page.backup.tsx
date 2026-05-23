import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const chapters = [
  {
    title: "The Governance Problem",
    description:
      "Most organizations deploy AI without governance infrastructure. The result is coordination debt — accumulated accountability gaps that compound sprint over sprint.",
  },
  {
    title: "Cognitive Capital",
    description:
      "AI inference is not a utility cost. It is cognitive capital — deployable, exhaustible, and measurable against business outcomes. TLC treats it accordingly.",
  },
  {
    title: "The Operating Model",
    description:
      "Token Learning Control introduces five governance layers that connect AI execution to financial accountability, from token ceilings to portfolio-level ROI.",
  },
  {
    title: "From Experimentation to Accountability",
    description:
      "The book defines the transition from AI pilots to governed AI execution — with the instruments, artifacts, and decision frameworks required to make the shift permanent.",
  },
];

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <span className="mb-6 inline-flex items-center rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-teal uppercase">
                  The Authority Layer
                </span>
                <h1 className="mb-5 text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                  From 7 to 3
                </h1>
                <p className="mb-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  The strategic foundation for Token Learning Control — built for
                  executives who need to move from AI experimentation to AI
                  accountability without losing organizational coherence.
                </p>
                <p className="mb-10 text-sm leading-7 text-muted-foreground/70">
                  From 7 to 3 is not a how-to guide for AI implementation. It is
                  a governance model for organizations that have already deployed
                  AI and now need to understand what they built.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-10 rounded-md bg-teal px-6 text-[13px] font-semibold tracking-[0.01em] text-teal-foreground hover:bg-teal/88"
                  >
                    <Link href="/templates#lead-capture">
                      Get the TLC Starter Kit
                      <ArrowRight className="ml-1.5 size-3.5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 rounded-md border-border/80 px-6 text-[13px] font-medium text-muted-foreground hover:border-teal/30 hover:bg-transparent hover:text-foreground"
                  >
                    <Link href="/system">Explore the TLC System</Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="flex h-80 w-56 flex-col items-center justify-between rounded-lg border border-border bg-white p-8 shadow-lg">
                  <div className="flex flex-col items-center gap-3">
                    <BookOpen className="size-6 text-teal/60" />
                    <div className="h-px w-8 bg-teal/30" />
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-2xl font-semibold tracking-tight text-foreground">
                      From 7<br />to 3
                    </p>
                    <div className="h-px w-8 bg-border/50" />
                    <p className="text-xs tracking-widest text-muted-foreground/50 uppercase">
                      Token Learning<br />Control
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-px w-12 bg-teal/20" />
                    <p className="text-[10px] tracking-[0.15em] text-muted-foreground/35 uppercase">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What the book covers */}
        <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                What It Covers
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
                The operating model, from first principles.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {chapters.map((chapter) => (
                <div
                  key={chapter.title}
                  className="rounded-md border border-border bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal" />
                    <h3 className="text-sm font-semibold text-foreground">
                      {chapter.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {chapter.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-border px-6 py-24 lg:px-8 lg:py-32">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.65 0.14 195 / 0.05) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Start Now
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-[-0.015em] text-foreground sm:text-4xl">
              The operating artifacts are available today.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-7 text-muted-foreground">
              While the book is in progress, the TLC Starter Kit gives you the
              templates, diagnostics, and governance instruments to start
              governing AI execution now.
            </p>
            <Button
              asChild
              className="h-10 rounded-md bg-teal px-7 text-[13px] font-semibold tracking-[0.01em] text-teal-foreground hover:bg-teal/88"
            >
              <Link href="/templates#lead-capture">
                Get the TLC Starter Kit
                <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
            </Button>
            <p className="mt-5 text-xs text-muted-foreground/50">
              Free. No account required.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
