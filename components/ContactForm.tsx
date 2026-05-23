"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

const PROCESSES = [
  "Not sure yet — help me pick",
  "FDM — engineering plastics",
  "SLA — resin / fine detail",
  "SLS — nylon production",
  "Multi-process / assembly",
] as const;

const QUANTITIES = ["1", "2 – 10", "11 – 50", "51 – 200", "200+"] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!formId) {
      setStatus("error");
      setMessage("Formspree form ID is missing. Add NEXT_PUBLIC_FORMSPREE_ID to .env.local.");
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      const data = new FormData(form);
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(
          json?.errors?.[0]?.message || "Couldn't send. Please email hello@jp3dprints.com directly."
        );
      }
      setStatus("ok");
      setMessage("Thanks — we'll get back to you within one working day.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      {/* honeypot — Formspree treats this field as spam if filled */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Your name" required>
          <input id="name" name="name" required className="brut-input" placeholder="Ada Lovelace" />
        </Field>
        <Field id="email" label="Email" required>
          <input id="email" type="email" name="email" required className="brut-input" placeholder="you@workshop.com" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="company" label="Company (optional)">
          <input id="company" name="company" className="brut-input" placeholder="Anvil Robotics" />
        </Field>
        <Field id="phone" label="Phone (optional)">
          <input id="phone" type="tel" name="phone" className="brut-input" placeholder="+1 (000) 000-0000" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="process" label="Process">
          <select id="process" name="process" className="brut-input">
            {PROCESSES.map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
        <Field id="quantity" label="Quantity">
          <select id="quantity" name="quantity" className="brut-input">
            {QUANTITIES.map((q) => <option key={q}>{q}</option>)}
          </select>
        </Field>
      </div>

      <Field id="deadline" label="When do you need it?">
        <input id="deadline" name="deadline" className="brut-input" placeholder="ASAP / next Friday / no rush" />
      </Field>

      <Field id="message" label="Project brief" required>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="brut-input resize-y"
          placeholder="What are you making? Any dimensions, materials, finishes, or things you want us to know? Drop links to CAD files if you have them."
        />
      </Field>

      <Field id="files" label="CAD files (optional, ≤ 10MB each)">
        <input id="files" type="file" name="files" multiple className="brut-input file:mr-3 file:border-2 file:border-ink file:bg-yellow file:px-3 file:py-1 file:font-bold file:uppercase" />
      </Field>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          // We reply within 1 working day · NDA available on request
        </p>
        <button type="submit" disabled={status === "loading"} className="brut-btn brut-btn--orange">
          {status === "loading" ? "Sending…" : "Send brief →"}
        </button>
      </div>

      {message && (
        <div
          role="status"
          className={`mt-3 border-[3px] border-ink p-4 font-mono text-sm shadow-[4px_4px_0_0_var(--color-ink)] ${
            status === "ok" ? "bg-mint" : status === "error" ? "bg-orange text-paper" : "bg-paper"
          }`}
        >
          {status === "ok" ? "✓ " : status === "error" ? "! " : ""}
          {message}
        </div>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
        {label}
        {required && <span className="ml-1 text-orange">*</span>}
      </label>
      {children}
    </div>
  );
}
