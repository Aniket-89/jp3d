import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — Extrudia",
  description: "Extrudia is a rapid prototyping studio in Sahibabad, Ghaziabad, UP, India.",
};

const equipment = [
  { name: "Bambu Lab P2S", spec: "FDM · Up to 256 × 256 × 256 mm", note: "TODO: Confirm build volume." },
  { name: "Two Trees TTS-20 Pro", spec: "Diode laser", note: "TODO: Confirm work area and maximum material thickness." },
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
              Extrudia is a rapid prototyping studio in Sahibabad, Ghaziabad, UP, India. We work across 3D printing, laser cutting and engraving, and product/CAD design, serving projects across Delhi NCR.
            </p>
            <p className="mt-4 max-w-xl text-base text-ink-soft">
              Delivery across Delhi NCR and tracked shipping across India.
            </p>
          </div>
          <div className="relative">
            <ImagePlaceholder
              tone="yellow"
              pattern="iso"
              label="ADD APPROVED PHOTO"
              caption="TODO: Add an approved photo."
              aspect="aspect-[4/5]"
            />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          kicker="Our story"
          title={<>Ideas take <br /><span className="text-orange">shape here.</span></>}
        />
        <div className="mt-8 brut-card p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">TODO: Add founder story.</p>
        </div>
      </section>

      {/* Equipment */}
      <section className="border-t-[3px] border-ink bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              kicker="The machines"
              title={<>The tools. <br /><span className="text-stroke">For prototypes.</span></>}
              subtitle="Our current equipment for FDM 3D printing and diode laser work."
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

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          kicker="Service area"
          title={<>Local delivery. <br /><span className="text-orange">India-wide shipping.</span></>}
          subtitle="Local delivery across Ghaziabad, Noida, Greater Noida, and Delhi NCR. Shipping across India."
        />
      </section>

      {/* CTA */}
      <section className="border-y-[3px] border-ink bg-orange py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] text-paper md:text-6xl">
            Have a file or sketch?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="brut-btn brut-btn--dark">Get a quote →</Link>
            <Link href="/gallery" className="brut-btn brut-btn--ghost">View project photos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
