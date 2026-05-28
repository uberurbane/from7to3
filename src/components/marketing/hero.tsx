import Link from "next/link";

const amazonLink =
  "https://www.amazon.com/Operating-System-AI-Native-Organizations-ebook/dp/B0H1QK9KMN/";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-[#F5F0E8] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_0.75fr]">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-4xl lg:text-5xl">
            AI does not eliminate
            <br />
            coordination.
            <br />
            It makes coordination
            <br />
            measurable.
          </h1>

          <p className="mt-9 max-w-xl text-base leading-8 text-slate-700">
            Token Learning Control helps enterprises govern AI execution
            through measurable operating discipline, token allocation,
            runtime controls, and financial accountability.
          </p>

          <div className="mt-8">
            <Link
              href="/system"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-[#F5F0E8] px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-[#F5F0E8]"
            >
              Explore the System
            </Link>
          </div>

          <p className="mt-8 max-w-md text-sm leading-6 text-slate-400">
            Built for CEOs, CFOs, CIOs, CTOs, and AI Product transformation leaders.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Link href={amazonLink} target="_blank" rel="noopener noreferrer">
            <img
              src="/from_7_to_3_book_v2.png"
              alt="From 7 to 3 book cover"
              className="h-[470px] w-auto object-contain"
            />
          </Link>

          <Link
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-14 w-[315px] items-center justify-center gap-4 rounded-lg bg-[#9A7A3A] px-8 text-lg font-bold text-[#F5F0E8] shadow-sm transition hover:bg-[#7A5E28]"
          >
            <span className="text-4xl font-bold leading-none">a</span>
            <span>Buy on Amazon</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
