"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormValues {
  email: string;
  company: string;
  role: string;
  teamSize: string;
  challenge: string;
}

export default function WorkshopInquiryForm() {
  const [values, setValues] = useState<FormValues>({
    email: "",
    company: "",
    role: "",
    teamSize: "",
    challenge: "",
  });
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
            Your request has been received.
          </p>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            We will be in touch to discuss the Executive Workshop for your organization.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="ws-email"
            className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
          >
            Work email
          </Label>
          <Input
            id="ws-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!emailError}
            aria-describedby={emailError ? "ws-email-error" : undefined}
            className="h-9"
          />
          {emailError && (
            <p
              id="ws-email-error"
              role="alert"
              className="text-[11px] text-destructive"
            >
              {emailError}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="ws-company"
            className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
          >
            Company
          </Label>
          <Input
            id="ws-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your organization"
            value={values.company}
            onChange={handleChange}
            className="h-9"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="ws-role"
            className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
          >
            Role
          </Label>
          <Input
            id="ws-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="CIO, CTO, VP Engineering..."
            value={values.role}
            onChange={handleChange}
            className="h-9"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="ws-team-size"
            className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
          >
            Team size{" "}
            <span className="normal-case font-normal text-muted-foreground/40">
              (optional)
            </span>
          </Label>
          <Input
            id="ws-team-size"
            name="teamSize"
            type="text"
            placeholder="e.g. 50–200 people"
            value={values.teamSize}
            onChange={handleChange}
            className="h-9"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="ws-challenge"
          className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground/70 uppercase"
        >
          Primary AI operating challenge{" "}
          <span className="normal-case font-normal text-muted-foreground/40">
            (optional)
          </span>
        </Label>
        <textarea
          id="ws-challenge"
          name="challenge"
          rows={4}
          placeholder="Describe the governance gap, coordination problem, or execution challenge you are trying to solve..."
          value={values.challenge}
          onChange={handleChange}
          className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/30 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <Button
        type="submit"
        className="h-10 w-full rounded-md bg-teal text-[13px] font-semibold tracking-[0.01em] text-teal-foreground hover:bg-teal/88"
      >
        Request Executive Session
      </Button>
    </form>
  );
}
