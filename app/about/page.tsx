import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — JP 3D Prints",
  description: "Who runs the studio, the machines that run, and the principles we won't compromise on.",
};

const equipment = [
  { name: "Bambu Lab X1C ×3", spec: "FDM · 256 × 256 × 256 mm", note: "Daily driver fleet." },
  { name: "Prusa MK4S ×2", spec: "FDM · 250 × 210 × 220 mm", note: "Reliability, slow & steady." },
  { name: "Voron 2.4 (350mm)", spec: "FDM · 350 × 350 × 350 mm", note: "Big parts, exotic filaments." },
  { name: "Formlabs Form 4", spec: "SLA · 200 × 125 × 210 mm", note: "Workhorse resin printer." },
  { name: "Phrozen Sonic Mega 8K", spec: "MSLA · 330 × 185 × 400 mm", note: "Large-scale models." },
  { name: "Formlabs Fuse 1+ 30W", spec: "SLS · 165 × 165 × 300 mm", note: "Production nylon." },
];

const principles = [
  { n: "01", t: "Quote what we'll deliver", d: "Fixed prices, fixed dates. If we can't hit them, we tell you upfront." },
  { n: "02", t: "Print like an engineer", d: "Right orientation, right infill, right material — every time, not just on the hard ones." },
  { n: "03", t: "Inspect every part", d: "Calipers and a checklist before anything ships. Photos on request." },
  { n: "04", t: "Stay small enough to care", d: "The person printing your file is the one who quoted it. No call centers." },
];

export default function AboutPage() {
  return (
    <>
      <header className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="brut-tag">/ about /</span>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
              A studio for <br />
              people who <br />
              <span className="text-stroke">make things.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              JP 3D Prints started as one printer in a garage and a stubborn refusal to wait three weeks for a bracket. It's now a six-machine studio serving robotics teams, jewellers, indie product brands, and the occasional film studio.
            </p>
            <p className="mt-4 max-w-xl text-base text-ink-soft">
              We're proudly small. Most jobs are quoted, printed and shipped by the same two people. That's a feature, not a bug.
            </p>
          </div>
          <div className="relative">
            <ImagePlaceholder
              tone="yellow"
              pattern="iso"
              label="STUDIO · WIDE"
              caption="A wide shot of the studio (printers, parts wall, founders)."
              aspect="aspect-[4/5]"
            />
            <div className="absolute -bottom-4 -left-4 hidden -rotate-3 border-[3px] border-ink bg-paper p-3 shadow-[5px_5px_0_0_var(--color-ink)] md:block">
              <div className="font-mono text-[10px] uppercase tracking-widest">est.</div>
              <div className="font-display text-3xl font-extrabold leading-none">2022</div>
            </div>
          </div>
        </div>
      </header>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          kicker="How we work"
          title={<>Four rules. <br /><span className="text-orange">No exceptions.</span></>}
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li key={p.n} className="brut-card p-6">
              <div className="font-display text-5xl font-extrabold text-yellow">{p.n}</div>
              <h3 className="mt-2 font-display text-xl font-extrabold leading-tight">{p.t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Equipment */}
      <section className="border-t-[3px] border-ink bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              kicker="The machines"
              title={<>Six printers. <br /><span className="text-stroke">All work.</span></>}
              subtitle="No vapourware. Every machine on this list runs jobs every week. If a part needs something we don't have, we'll say so."
            />
            <ul className="grid gap-3">
              {equipment.map((e) => (
                <li key={e.name} className="brut-card flex flex-col gap-1 p-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{e.spec}</div>
                    <div className="font-display text-xl font-extrabold leading-tight">{e.name}</div>
                  </div>
                  <p className="text-sm text-ink-soft md:max-w-xs md:text-right">{e.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          kicker="The humans"
          title={<>Small team. <br /><span className="text-orange">Big print queue.</span></>}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Founder", role: "Studio lead · DFM / SLS", tone: "yellow" as const },
            { name: "Co-founder", role: "Materials · SLA / FDM", tone: "mint" as const },
            { name: "You?", role: "We're hiring an apprentice", tone: "orange" as const },
          ].map((m) => (
            <article key={m.role} className="brut-card !p-0 overflow-hidden">
              <ImagePlaceholder
                tone={m.tone}
                pattern="iso"
                label="HEADSHOT"
                caption={m.name}
                aspect="aspect-[4/5]"
                className="!border-0 !shadow-none"
              />
              <div className="border-t-[3px] border-ink bg-paper px-4 py-3">
                <div className="font-display text-lg font-extrabold leading-tight">{m.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{m.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-y-[3px] border-ink bg-orange py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] text-paper md:text-6xl">
            Want to see the studio?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="brut-btn brut-btn--dark">Book a visit →</Link>
            <Link href="/gallery" className="brut-btn brut-btn--ghost">See recent prints</Link>
          </div>
        </div>
      </section>
    </>
  );
}
