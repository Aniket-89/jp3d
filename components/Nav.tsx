"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappUrl } from "@/lib/config";

const links = [
  { href: "/services#printing", label: "3D Printing (FDM)" },
  { href: "/services#prototyping", label: "Rapid Prototyping" },
  { href: "/services#laser", label: "Laser Cutting & Engraving" },
  { href: "/services#design", label: "Product & CAD Design" },
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
        <Link href="/" aria-label="extrudia home" className="group flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="extrudia"
            width={160}
            height={80}
            priority
            className="h-20 w-40 object-contain transition-transform group-hover:scale-[1.03]"
          />
        </Link>

        <nav className="hidden items-center gap-0 xl:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-2 py-2 text-xs font-bold uppercase tracking-wide transition-transform hover:-translate-y-[2px] ${
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
            className="brut-btn ml-2 px-3 text-xs"
          >
            Get a quote
            <span aria-hidden>→</span>
          </Link>
          {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="brut-btn ml-2 px-3 text-xs">WhatsApp</a>}
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden grid h-10 w-10 place-items-center border-[3px] border-ink bg-paper shadow-[3px_3px_0_0_var(--color-ink)]"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t-[3px] border-ink bg-paper xl:hidden">
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
            {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="brut-btn mt-2 justify-center">WhatsApp</a>}
          </div>
        </div>
      )}
    </header>
  );
}
