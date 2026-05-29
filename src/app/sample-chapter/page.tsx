import Link from "next/link";

export default function SampleChapterPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-slate-950">
      <section className="border-b border-[#DDD8CE]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Sample Chapter
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Read the first chapter of{" "}
              <span className="text-teal-700">From 7 to 3</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-700">
              Most organizations are not constrained by execution anymore.
              They are constrained by coordination.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Read the opening chapter that introduces the core idea behind
              AI-native organizations and the shift from seven layers of
              coordination to three.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/sample-chapter/from7to3-chapter1.pdf"
                className="rounded-full bg-teal-700 px-7 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
              >
                Read Chapter 1
              </a>

              <Link
                href="/book"
                className="rounded-full border border-slate-300 px-7 py-4 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View the Book
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                From 7 to 3
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
                How AI-Native Organizations Compress Structure, Govern
                Cognitive Capital, and Outcompete at Scale
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-600">
                A practical operating model for executives navigating the move
                from human-paced coordination to governed AI-enabled execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Why this book is different
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
            Most AI books focus on tools. This book focuses on operating models.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From 7 to 3 examines why organizations become slower as AI makes
            execution faster, and why coordination, not capability, has become
            the primary constraint.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Coordination Debt",
              body: "The hidden cost of approvals, translation, reporting, and handoffs."
            },
            {
              title: "7 → 3 Compression",
              body: "Reducing the layers required to coordinate work in AI-native organizations."
            },
            {
              title: "Cognitive Capital",
              body: "Treating AI capacity as an economic asset that must be governed."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div className="rounded-3xl bg-slate-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Author
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-950">
              Sandeep Panigrahi
            </h3>
            <p className="mt-3 text-base text-slate-600">
              AI Transformation Executive
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Author of From 7 to 3
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sandeep has 20+ years of experience leading product, technology,
              customer experience, and enterprise transformation initiatives
              across complex organizations.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              His work focuses on AI-native operating models, governance,
              coordination economics, and the organizational redesign required
              for enterprises to capture measurable AI value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Ready to read the full book?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            From 7 to 3 is available now on Amazon.
          </p>

          <div className="mt-10">
            <Link
              href="/book"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100"
            >
              Buy on Amazon
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
