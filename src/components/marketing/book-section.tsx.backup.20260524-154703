import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookSection() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.6fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              The Strategic Foundation
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl">
              From 7 to 3
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              From 7 to 3 is the strategic foundation behind the Token Learning
              Control operating system — explaining how organizations compress
              as coordination becomes measurable.
            </p>
            <p className="text-sm leading-6 text-muted-foreground/70">
              Not a how-to guide for AI implementation. A governance model for
              organizations that have already deployed AI and now need to
              understand what they built.
            </p>
            <div className="pt-2">
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-md border-border/80 px-6 text-[13px] font-medium text-muted-foreground hover:border-teal/30 hover:bg-transparent hover:text-foreground"
              >
                <Link href="/book">
                  View the Book
                  <ArrowRight className="ml-1.5 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="flex h-72 w-52 flex-col items-center justify-between rounded-lg border border-border bg-white p-8 shadow-lg">
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
  );
}
