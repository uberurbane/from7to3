"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormValues {
  email: string;
  role: string;
  company: string;
}

interface Props {
  buttonText?: string;
}

export default function LeadCaptureForm({ buttonText = "Get the TLC Starter Kit" }: Props) {
  const [values, setValues] = useState<FormValues>({
    email: "",
    role: "",
    company: "",
  });
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (name === "email" && emailError) setEmailError("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!values.email || !values.email.includes("@")) {
      setEmailError("A valid work email is required.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-md border border-teal/20 bg-teal/5 px-8 py-16 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal/25 bg-[#F5F0E8] shadow-sm">
          <CheckCircle2 className="size-5 text-teal" />
        </div>
        <div>
          <p className="mb-1 text-sm font-semibold text-foreground">
            You are on the early access list.
          </p>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            Thanks — the TLC Starter Kit will be available soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border bg-[#F5F0E8] shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Content column */}
        <div className="border-b border-border px-8 py-10 lg:border-b-0 lg:border-r">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-teal uppercase">
            TLC Starter Kit
          </p>
          <h3 className="mb-4 text-xl font-bold leading-snug tracking-[-0.015em] text-foreground sm:text-2xl">
            Get the operating artifacts for governed AI execution.
          </h3>
          <p className="mb-6 text-sm leading-6 text-muted-foreground">
            Receive the starter kit for diagnosing Coordination Debt™, setting
            token ceilings, governing AI features, and connecting AI execution
            to financial accountability.
          </p>
          <p className="text-xs leading-5 text-muted-foreground/55">
            Built for CIOs, AI Product Managers, transformation leaders, and
            finance partners.
          </p>
        </div>

        {/* Form column */}
        <div className="px-8 py-10">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="tlc-email"
                className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
              >
                Work email
              </Label>
              <Input
                id="tlc-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={values.email}
                onChange={handleChange}
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "tlc-email-error" : undefined}
                className="h-9"
              />
              {emailError && (
                <p
                  id="tlc-email-error"
                  role="alert"
                  className="text-[11px] text-destructive"
                >
                  {emailError}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="tlc-role"
                className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
              >
                Role
              </Label>
              <Input
                id="tlc-role"
                name="role"
                type="text"
                autoComplete="organization-title"
                placeholder="CIO, AI PM, Engineering Lead..."
                value={values.role}
                onChange={handleChange}
                className="h-9"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="tlc-company"
                className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
              >
                Company
              </Label>
              <Input
                id="tlc-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Your organization"
                value={values.company}
                onChange={handleChange}
                className="h-9"
              />
            </div>

            <Button
              type="submit"
              className="mt-1 h-10 w-full rounded-md bg-teal text-[13px] font-semibold tracking-[0.01em] text-teal-foreground hover:bg-teal/88"
            >
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
