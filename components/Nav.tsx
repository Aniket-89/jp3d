"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center border-[3px] border-ink bg-yellow shadow-[3px_3px_0_0_var(--color-ink)] transition-transform group-hover:rotate-[-4deg]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 7l9-4 9 4-9 4-9-4z" />
              <path d="M3 12l9 4 9-4" />
              <path d="M3 17l9 4 9-4" />
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-display text-xl font-extrabold tracking-tight">JP 3D</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">/ prints & prototypes</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3 py-2 text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-[2px] ${
                  active ? "text-ink" : "text-ink-soft"
                }`}
              >
                {l.label}
                {active && <span className="absolute inset-x-2 bottom-1 h-[3px] bg-orange" />}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="brut-btn ml-3"
          >
            Get a quote
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center border-[3px] border-ink bg-paper shadow-[3px_3px_0_0_var(--color-ink)]"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t-[3px] border-ink bg-paper md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-2 border-ink bg-canvas px-3 py-3 font-display text-lg font-bold shadow-[3px_3px_0_0_var(--color-ink)]"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="brut-btn mt-2 justify-center">
              Get a quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
