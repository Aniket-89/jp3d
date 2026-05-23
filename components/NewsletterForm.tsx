"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

export default function NewsletterForm({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Couldn't sign you up.");
      setStatus("ok");
      setMessage("You're in. Check your inbox.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const dark = theme === "dark";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@workshop.com"
        className={`brut-input flex-1 ${dark ? "!bg-paper" : ""}`}
        autoComplete="email"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="brut-btn justify-center disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {message && (
        <p
          role="status"
          className={`sm:basis-full font-mono text-xs ${
            status === "error" ? "text-orange" : dark ? "text-yellow" : "text-ink"
          }`}
        >
          {status === "ok" ? "// " : status === "error" ? "// err: " : ""}
          {message}
        </p>
      )}
    </form>
  );
}
