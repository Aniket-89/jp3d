import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Gallery — JP 3D Prints",
  description: "A growing archive of parts, prototypes and weird little things that have come off our build plates.",
};

const items = [
  { title: "Quadcopter arm v3", tag: "SLS · PA12-GF", tone: "yellow", pattern: "hex", caption: "Topology-optimized 38g arm — 22% lighter than v2." },
  { title: "Sculptural lamp", tag: "FDM · PLA", tone: "rose", pattern: "layers", caption: "Generative lattice, 480 mm tall, single print." },
  { title: "Robot gripper finger", tag: "FDM · PETG", tone: "mint", pattern: "iso", caption: "Custom finger plates, batch of 12 for a research lab." },
  { title: "Dental arch", tag: "SLA · Dental LT", tone: "paper", pattern: "iso", caption: "Clear arch for a partner clinic, 50µ layers." },
  { title: "Pedal cleat", tag: "SLS · PA12", tone: "blue", pattern: "hex", caption: "Reinforced for repeated load, lasered for tracking." },
  { title: "Coffee shop mascot", tag: "SLA · Standard", tone: "orange", pattern: "layers", caption: "Maquette for an indie brand campaign." },
  { title: "Watch winder gears", tag: "FDM · PC", tone: "yellow", pattern: "iso", caption: "Polycarbonate gears, post-processed, oiled." },
  { title: "Architectural model", tag: "SLA · Tough", tone: "paper", pattern: "hex", caption: "1:200 housing block, 22 floors, full façade." },
  { title: "Cable management clip", tag: "SLS · TPU", tone: "mint", pattern: "layers", caption: "Living-hinge clips, 240 pcs, branded." },
] as const;

const categories = ["All", "FDM", "SLA", "SLS"];

export default function GalleryPage() {
  return (
    <>
      <header className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="brut-tag">/ gallery /</span>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
            What we've <br />
            been <span className="text-orange">printing.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            A growing archive of parts. Drop in your own photos — we kept this gallery flexible so you can swap any tile for a real image without touching the layout.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`brut-btn ${i === 0 ? "" : "brut-btn--ghost"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid auto-rows-[minmax(0,_auto)] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => {
            // Vary aspect for a curated/asymmetric feel
            const aspect =
              i % 5 === 0 ? "aspect-[4/5]" : i % 7 === 3 ? "aspect-square" : "aspect-[4/3]";
            return (
              <figure key={p.title} className="brut-card group !p-0 overflow-hidden">
                <ImagePlaceholder
                  tone={p.tone}
                  pattern={p.pattern}
                  label={p.tag}
                  caption={p.caption}
                  aspect={aspect}
                  className="!border-0 !shadow-none"
                />
                <figcaption className="flex items-center justify-between gap-3 border-t-[3px] border-ink bg-paper px-4 py-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                      {p.tag}
                    </div>
                    <div className="font-display text-lg font-extrabold leading-tight">{p.title}</div>
                  </div>
                  <span className="text-2xl">→</span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">// more on Instagram</p>
          <h3 className="font-display text-3xl font-extrabold md:text-5xl">
            Follow the build queue.
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="https://instagram.com" target="_blank" rel="noopener" className="brut-btn">@jp3dprints</Link>
            <Link href="/contact" className="brut-btn brut-btn--ghost">Start a project →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
