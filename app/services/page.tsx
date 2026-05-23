import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { techs, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — FDM, SLA, SLS · JP 3D Prints",
  description:
    "Industrial-grade 3D printing: FDM (engineering plastics), SLA (resin), SLS (nylon). Specs, materials and pricing tiers.",
};

const tiers = [
  {
    name: "Prototype",
    price: "From $25",
    cadence: "/ part",
    color: "yellow",
    lead: "48-hour turnaround",
    list: [
      "FDM in PLA / PETG / ABS",
      "Layer height 0.2 mm",
      "Standard tolerances ± 0.3 mm",
      "1 part, 1 colour, raw finish",
      "DFM review included",
    ],
  },
  {
    name: "Engineering",
    price: "From $65",
    cadence: "/ part",
    color: "orange",
    lead: "3 – 5 days",
    list: [
      "FDM (PC / PA / ASA) or SLA resin",
      "Layer heights down to 50 microns",
      "Tolerances ± 0.15 mm",
      "Post-processed surface",
      "DFM review + 1 revision",
    ],
    featured: true,
  },
  {
    name: "Production",
    price: "Custom",
    cadence: "quote",
    color: "mint",
    lead: "5 – 14 days",
    list: [
      "SLS nylon batches, 10 – 500 pcs",
      "Repeatability QC on every batch",
      "Dye, bead-blast, label, assemble",
      "Dedicated project lead",
      "Hold inventory option",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <header className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="brut-tag">/ services /</span>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
            Pick a process. <br />
            <span className="text-stroke">We'll print the rest.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            We deliberately kept the menu short. FDM for fast and functional, SLA for crisp and beautiful, SLS for tough and production-ready. Anything else? Talk to us — we know good partners for CNC, vacuum casting and injection moulding.
          </p>
        </div>
      </header>

      {/* Tech sections */}
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-24">
          {techs.map((t, i) => (
            <section key={t.id} id={t.id} className="scroll-mt-32">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
                <div className={`order-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="brut-tag !text-base !py-1.5 !px-3">{t.code}</span>
                    <span
                      className={`h-3 w-12 border-2 border-ink ${
                        t.tone === "yellow" ? "bg-yellow" : t.tone === "orange" ? "bg-orange" : "bg-mint"
                      }`}
                    />
                  </div>
                  <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">{t.name}</h2>
                  <p className="mt-3 font-display text-xl text-ink-soft">{t.tagline}</p>
                  <p className="mt-4 max-w-xl text-base">{t.description}</p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {t.specs.map((s) => (
                      <div key={s.label} className="brut-card !p-4">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                          {s.label}
                        </div>
                        <div className="mt-1 font-display text-lg font-extrabold">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">Materials in stock</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {t.materials.map((m) => (
                        <li key={m} className="border-2 border-ink bg-paper px-3 py-1 font-mono text-xs uppercase tracking-wider shadow-[2px_2px_0_0_var(--color-ink)]">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">What people make with it</p>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-base">
                      {t.useCases.map((u) => (
                        <li key={u} className="flex items-center gap-2">
                          <span className="text-orange">▸</span>
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="brut-btn mt-10">
                    Quote a {t.id.toUpperCase()} part →
                  </Link>
                </div>

                <div className={`order-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ImagePlaceholder
                    tone={t.tone}
                    pattern={i === 0 ? "layers" : i === 1 ? "iso" : "hex"}
                    label={`${t.id.toUpperCase()} · SAMPLE`}
                    caption={`Drop a hero photo of a ${t.id.toUpperCase()} part here.`}
                    aspect="aspect-[4/5]"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Pricing tiers */}
      <section className="border-y-[3px] border-ink bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            kicker="Pricing"
            title={<>Three tiers. <br /><span className="text-stroke">Zero surprises.</span></>}
            subtitle="Every quote is fixed-price and includes a DFM review. No hidden setup fees, no minimums."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`brut-card flex flex-col p-6 ${tier.featured ? "lg:-translate-y-3 !shadow-[10px_10px_0_0_var(--color-ink)]" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl font-extrabold">{tier.name}</h3>
                  {tier.featured && <span className="brut-tag !bg-orange !text-paper">Most popular</span>}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold">{tier.price}</span>
                  <span className="font-mono text-sm text-ink-soft">{tier.cadence}</span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-soft">
                  {tier.lead}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm">
                  {tier.list.map((l) => (
                    <li key={l} className="flex gap-2">
                      <span className="mt-0.5 inline-block h-4 w-4 shrink-0 border-2 border-ink bg-yellow" />
                      {l}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`brut-btn mt-8 justify-center ${tier.featured ? "brut-btn--orange" : ""}`}
                >
                  {tier.featured ? "Start a project →" : "Get a quote →"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Post-processing */}
      <section id="post" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          kicker="Finishing"
          title={<>Post-processing, <span className="text-orange">in-house.</span></>}
          subtitle="Most shops stop when the print stops. We don't. Get parts that look like they came off a production line."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Sanding & polishing", d: "Matte to mirror, on FDM and SLA." },
            { t: "Vapor smoothing", d: "Optical-clear ABS surface." },
            { t: "Bead-blasting & dyeing", d: "Uniform satin finish on SLS nylon, any color." },
            { t: "Painting & assembly", d: "Primer, base coat, clear coat. Multi-part assembly welcome." },
          ].map((s) => (
            <div key={s.t} className="brut-card p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">/ finish</div>
              <h3 className="mt-1 font-display text-xl font-extrabold leading-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <span className="brut-tag !bg-yellow !border-paper !shadow-[3px_3px_0_0_var(--color-paper)]">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">
            Asked a lot.<br />
            <span className="text-yellow">Here are answers.</span>
          </h2>

          <div className="mt-10 divide-y divide-paper/15 border-y-2 border-paper/40">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg font-extrabold marker:hidden md:text-2xl">
                  {f.q}
                  <span aria-hidden className="mt-1 grid h-7 w-7 shrink-0 place-items-center border-2 border-paper bg-paper text-ink transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm text-paper/80 md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
