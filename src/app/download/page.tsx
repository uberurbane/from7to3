import Link from "next/link";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
          TLC Executive Brief
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Your download is ready.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">
          Thank you for subscribing to Token Learning Control.
          Download the executive brief below.
        </p>

        <div className="mt-12">
          <Link
            href="/downloads/From_7_to_3_Executive_Starter_Kit.pdf"
            className="inline-flex items-center rounded-xl bg-teal-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-teal-700"
          >
            Download Executive Brief
          </Link>
        </div>

      </div>
    </main>
  );
}
