import Link from "next/link";

const amazonLink =
  "https://www.amazon.com/Operating-System-AI-Native-Organizations-ebook/dp/B0H1QK9KMN/";

export default function BookSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F5F0E8] py-28 bg-[#F5F0E8]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            The Strategic Foundation
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            From 7 to 3
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-10 text-slate-600">
            From 7 to 3 is the strategic foundation behind the Token Learning
            Control operating system — explaining how organizations compress as
            coordination becomes measurable.
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-500">
            Not a how-to guide for AI implementation. A governance model for
            organizations that have already deployed AI and now need to
            understand what they built.
          </p>

          <div className="mt-10">
            <Link
              href="https://www.amazon.com/Operating-System-AI-Native-Organizations-ebook/dp/B0H1QK9KMN/ref=sr_1_1?crid=2KRQ9HXPSPJED&dib=eyJ2IjoiMSJ9.JZLNeFdMkaSQISgZ0bpg22tCHh1sLi5bsSjSio0G_kQ.8lFDzpoonry6jiZY3VaQVN_dUvJm5b5rzzlUr1zXNgg&dib_tag=se&keywords=from+7+to+3+ai&qid=1779655804&sprefix=%2Caps%2C280&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-[#F5F0E8] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-[#F5F0E8]"
            >
              View on Amazon
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Link
            href="https://www.amazon.com/Operating-System-AI-Native-Organizations-ebook/dp/B0H1QK9KMN/ref=sr_1_1?crid=2KRQ9HXPSPJED&dib=eyJ2IjoiMSJ9.JZLNeFdMkaSQISgZ0bpg22tCHh1sLi5bsSjSio0G_kQ.8lFDzpoonry6jiZY3VaQVN_dUvJm5b5rzzlUr1zXNgg&dib_tag=se&keywords=from+7+to+3+ai&qid=1779655804&sprefix=%2Caps%2C280&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <img
              src="/from_7_to_3_book_no_BG.png"
              alt="From 7 to 3 book cover"
              className="w-[440px] max-w-full object-contain transition-all duration-300 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
