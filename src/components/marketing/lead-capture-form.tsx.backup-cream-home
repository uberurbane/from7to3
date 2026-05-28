"use client";

import { useEffect, useRef } from "react";

export default function LeadCaptureForm() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    formRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", "49a557f1-4b1e-4ec6-87a7-0b024cd019cc");

    formRef.current.appendChild(script);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-3xl justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
      <div ref={formRef} className="w-full max-w-2xl" />
    </div>
  );
}
