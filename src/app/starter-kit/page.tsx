"use client";

import { useState } from "react";

export default function StarterKitPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = email.includes("@") && email.includes(".");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!emailIsValid) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#fbfcfd] px-6 py-28 text-slate-950">
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        <div className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-teal-600">
          Executive Starter Kit
        </div>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          Get the From 7 to 3 Executive Starter Kit
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Enter your email to access the PDF. The starter kit helps executives identify Coordination Debt™, understand Token Velocity™, and begin the transition toward governed AI execution.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input
              required
              type="email"
              value={email}
              placeholder="Enter your work email"
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-4 text-base outline-none focus:border-teal-500"
            />

            <button
              type="submit"
              disabled={!emailIsValid}
              className={`w-full rounded-xl px-7 py-4 text-base font-bold text-white transition-colors ${
                emailIsValid
                  ? "bg-teal-600 hover:bg-teal-700"
                  : "cursor-not-allowed bg-slate-300"
              }`}
            >
              Continue to Starter Kit
            </button>
          </form>
        ) : (
          <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-base font-semibold text-teal-800">
              Thank you. Your starter kit is ready.
            </p>

            <a
              href="/downloads/From_7_to_3_Executive_Starter_Kit.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-xl bg-teal-600 px-7 py-4 text-base font-bold text-white hover:bg-teal-700"
            >
              Open Starter Kit PDF →
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
