"use client";

import { useState } from "react";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = email.includes("@") && email.includes(".");
  const formIsValid = emailIsValid;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formIsValid) return;

    setSubmitted(true);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r md:p-10">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-teal-600">
            TLC Starter Kit
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950">
            Get the operating artifacts for governed AI execution.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Receive the starter kit for diagnosing Coordination Debt™, setting token ceilings, governing AI features, and connecting AI execution to financial accountability.
          </p>

          <p className="mt-10 text-sm leading-7 text-slate-400">
            Built for CEOs, CFOs, CIOs, CTOs, and AI Product transformation leaders.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-10">
          {!submitted ? (
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  Work Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  placeholder="you@company.com"
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  Role
                </label>
                <input
                  value={role}
                  placeholder="CIO, AI PM, Engineering Lead..."
                  onChange={(event) => setRole(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  Company
                </label>
                <input
                  value={company}
                  placeholder="Your organization"
                  onChange={(event) => setCompany(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-teal-500"
                />
              </div>

              <button
                type="submit"
                disabled={!formIsValid}
                className={`w-full rounded-xl px-6 py-4 text-base font-bold text-white transition-colors ${
                  formIsValid
                    ? "bg-teal-600 hover:bg-teal-700"
                    : "cursor-not-allowed bg-slate-300"
                }`}
              >
                Get the TLC Starter Kit
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
              <p className="text-base font-semibold text-teal-800">
                Thank you. Your starter kit is ready.
              </p>

              <a
                href="/downloads/From_7_to_3_Executive_Starter_Kit.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full justify-center rounded-xl bg-teal-600 px-6 py-4 text-base font-bold text-white hover:bg-teal-700"
              >
                Open Starter Kit PDF →
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
