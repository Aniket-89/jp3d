"use client";

import { useState } from "react";
import { fdmMaterials } from "@/lib/data";

type Status = "idle" | "loading" | "ok" | "error";

const SERVICES = [
  "3D Printing (FDM)",
  "Rapid Prototyping",
  "Laser Cutting & Engraving",
  "Product & CAD Design",
] as const;

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
          json?.errors?.[0]?.message || "Couldn't send. Please email hello.extrudia@gmail.com directly."
        );
      }
      setStatus("ok");
      setMessage("Thanks — we'll send a quote within 24 hours.");
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

      <Field id="phone" label="Phone">
        <input id="phone" type="tel" name="phone" className="brut-input" placeholder="Your phone number" />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="service" label="Service type">
          <select id="service" name="service" className="brut-input">
            {SERVICES.map((service) => <option key={service}>{service}</option>)}
          </select>
        </Field>
        <Field id="material" label="Material (if known)">
          <select id="material" name="material" className="brut-input">
            <option value="">Not sure yet</option>
            {fdmMaterials.map((material) => <option key={material}>{material}</option>)}
            <option>Wood</option>
            <option>Acrylic</option>
            <option>Metal engraving</option>
            <option>Not applicable</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="quantity" label="Quantity">
          <input id="quantity" name="quantity" type="number" min="1" className="brut-input" placeholder="Number of items" />
        </Field>
        <Field id="deadline" label="Deadline">
          <input id="deadline" name="deadline" type="date" className="brut-input" />
        </Field>
      </div>

      <Field id="file-link" label="File link (optional)">
        <input id="file-link" name="file-link" type="url" className="brut-input" placeholder="Link to your file" />
      </Field>

      <Field id="notes" label="Notes">
        <textarea
          id="notes"
          name="notes"
          rows={6}
          className="brut-input resize-y"
          placeholder="Share dimensions, requirements, or any other project details."
        />
      </Field>

      <Field id="files" label="Upload files (STL, STEP, OBJ, 3MF, DXF, SVG)">
        <input id="files" type="file" name="files" multiple accept=".stl,.step,.stp,.obj,.3mf,.dxf,.svg" className="brut-input file:mr-3 file:border-2 file:border-ink file:bg-yellow file:px-3 file:py-1 file:font-bold file:uppercase" />
      </Field>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          Quote within 24 hours · Delivery and shipping only
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
