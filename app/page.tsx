import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { techs, processSteps, whyUs, projects, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <Services />
      <Process />
      <Marquee items={["PLA", "PETG", "ABS", "Nylon PA12", "TPU 95A", "Resin Tough", "Castable Wax", "PA-GF", "Polycarbonate", "ASA"]} />
      <WhyUs />
      <ProjectsTeaser />
      <Testimonial />
      <CTABand />
    </>
  );
}

/* ───── HERO ───── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="iso-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="reveal">
          <div className="flex flex-wrap items-center gap-2">
            <span className="brut-tag">
              <span className="h-2 w-2 animate-pulse bg-mint" />
              Studio open · taking orders
            </span>
            <span className="brut-tag !bg-yellow">FDM · SLA · SLS</span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight">
            Print it.<br />
            Prototype it.<br />
            <span className="relative inline-block">
              <span className="relative z-10">Ship it.</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-5 bg-yellow md:h-7" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            <span className="font-bold text-ink">JP 3D Prints</span> is a small studio for engineers, makers and brands who refuse to wait weeks for a part. Drop in a CAD file, get a quote in 24h, hold it in your hand next week.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="brut-btn">
              Get a quote
              <span aria-hidden>→</span>
            </Link>
            <Link href="/services" className="brut-btn brut-btn--ghost">
              See capabilities
            </Link>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
              · 24h quote · NDA on request
            </span>
          </div>
        </div>

        <div className="relative">
          {/* main hero "build plate" card */}
          <div className="brut-card relative aspect-[5/6] !p-0 overflow-hidden">
            <div className="absolute inset-0 layer-lines opacity-60" aria-hidden />
            <ImagePlaceholder
              tone="paper"
              pattern="iso"
              aspect="aspect-[5/6]"
              label="HERO · STUDIO SHOT"
              caption="Drop in a hero photo of a printer mid-print or a hero part."
              className="!border-0 !shadow-none"
            />
            {/* z-axis arrow */}
            <div className="pointer-events-none absolute right-3 top-3 flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest">
              <span>Z</span>
              <span className="h-16 w-[2px] bg-ink" />
              <span>▲</span>
            </div>
          </div>

          {/* floating spec card */}
          <div className="absolute -left-3 bottom-6 hidden w-56 -rotate-3 border-[3px] border-ink bg-yellow p-4 shadow-[6px_6px_0_0_var(--color-ink)] md:block">
            <div className="font-mono text-[10px] uppercase tracking-widest">Live build</div>
            <div className="mt-1 font-display text-2xl font-extrabold leading-none">Layer 187/240</div>
            <div className="mt-3 h-2 w-full border-2 border-ink bg-paper">
              <div className="h-full w-[78%] bg-orange" />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px]">
              <span>78%</span>
              <span>est. 47min</span>
            </div>
          </div>

          {/* corner sticker */}
          <div className="absolute -right-3 -top-3 grid h-24 w-24 place-items-center rounded-full border-[3px] border-ink bg-orange text-center font-display text-paper shadow-[4px_4px_0_0_var(--color-ink)] animate-wiggle">
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-widest">Quote in</div>
              <div className="text-3xl font-extrabold">24h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── STAT STRIP ───── */
function StatStrip() {
  return (
    <section className="border-y-[3px] border-ink bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x-[3px] divide-ink md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="px-5 py-6 md:px-8 md:py-8">
            <div className="font-display text-3xl font-extrabold md:text-5xl">{s.value}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───── SERVICES ───── */
function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        kicker="What we run"
        title={
          <>
            Three processes. <br />
            <span className="text-stroke">One studio.</span>
          </>
        }
        subtitle="Each technology earns its place. We help you pick the right one for the part you're trying to make — not the one we're trying to sell."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {techs.map((t, i) => (
          <article
            key={t.id}
            className="brut-card group flex flex-col gap-4 p-6"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="brut-tag">{t.code}</span>
              <div
                className={`h-12 w-12 border-[3px] border-ink shadow-[3px_3px_0_0_var(--color-ink)] ${
                  t.tone === "yellow" ? "bg-yellow" : t.tone === "orange" ? "bg-orange" : "bg-mint"
                }`}
              />
            </div>
            <h3 className="font-display text-3xl font-extrabold leading-none">{t.name}</h3>
            <p className="text-sm text-ink-soft">{t.tagline}</p>
            <ul className="mt-1 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              {t.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-orange">→</span>
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href={`/services#${t.id}`}
              className="mt-auto inline-flex items-center gap-2 self-start border-b-2 border-ink pb-1 font-bold uppercase tracking-wide text-sm group-hover:text-orange"
            >
              Read more <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ───── PROCESS ───── */
function Process() {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-3">
          <span className="brut-tag !bg-yellow !border-paper !shadow-[3px_3px_0_0_var(--color-paper)]">
            // The process
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">
            File to finished part <br />
            <span className="text-yellow">in four moves.</span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.n}
              className="relative border-[3px] border-paper bg-ink p-6 shadow-[6px_6px_0_0_var(--color-yellow)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-paper/60">step</span>
                <span className="font-display text-5xl font-extrabold text-yellow">{step.n}</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-extrabold leading-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-paper/80">{step.body}</p>
              {i < processSteps.length - 1 && (
                <span aria-hidden className="absolute -right-5 top-1/2 hidden -translate-y-1/2 font-display text-3xl font-extrabold text-yellow md:block">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───── WHY US ───── */
function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            kicker="Why pick us"
            title={
              <>
                We treat your part <br />
                like it's <em className="not-italic text-orange">our</em> part.
              </>
            }
            subtitle="Small enough that the person printing your file is also the one who quoted it. Big enough to take on a 200-piece run without flinching."
          />
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((w) => (
            <li key={w.title} className="brut-card flex flex-col gap-3 p-6">
              <Glyph name={w.icon} />
              <h3 className="font-display text-2xl font-extrabold leading-tight">{w.title}</h3>
              <p className="text-sm text-ink-soft">{w.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Glyph({ name }: { name: string }) {
  // simple inline icons keep the bundle light and on-brand
  const common = "h-7 w-7";
  switch (name) {
    case "calipers":
      return (
        <svg viewBox="0 0 24 24" className={common} stroke="currentColor" strokeWidth="2.2" fill="none">
          <path d="M4 4h6v16H4zM14 4h6v16h-6zM10 8h4M10 16h4" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={common} stroke="currentColor" strokeWidth="2.2" fill="none">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 8v5l3 2M9 3h6" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 24 24" className={common} stroke="currentColor" strokeWidth="2.2" fill="none">
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5M3 18l9 5 9-5" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" className={common} stroke="currentColor" strokeWidth="2.2" fill="none">
          <path d="M4 20c0-9 7-16 16-16-1 9-7 16-16 16z" />
          <path d="M4 20l8-8" />
        </svg>
      );
    default:
      return null;
  }
}

/* ───── PROJECTS TEASER ───── */
function ProjectsTeaser() {
  const tones = ["yellow", "mint", "orange", "blue", "rose", "paper"] as const;
  return (
    <section className="border-t-[3px] border-ink bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Out of the studio"
            title={<>Recent <span className="text-orange">prints.</span></>}
            subtitle="A small slice of what's gone out the door this quarter. Click through for the full gallery."
          />
          <Link href="/gallery" className="brut-btn brut-btn--dark">
            View all →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <figure key={p.title} className="brut-card group !p-0 overflow-hidden">
              <ImagePlaceholder
                tone={tones[i % tones.length]}
                pattern={i % 2 === 0 ? "iso" : "hex"}
                label={p.category}
                caption={p.caption}
                className="!border-0 !shadow-none"
              />
              <figcaption className="border-t-[3px] border-ink bg-paper px-4 py-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{p.category}</div>
                <div className="font-display text-lg font-extrabold leading-tight">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── TESTIMONIAL ───── */
function Testimonial() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="brut-card relative p-8 md:p-14">
        <div className="absolute -top-4 left-8 brut-tag !bg-orange !text-paper">// from the inbox</div>
        <blockquote className="max-w-4xl font-display text-2xl font-extrabold leading-tight md:text-4xl">
          “Sent over a STEP file Monday morning. Held the part Wednesday. The finish was better than what we were getting from our previous shop at half the lead time. JP is now the only call we make.”
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center border-[3px] border-ink bg-mint font-display text-2xl font-extrabold shadow-[3px_3px_0_0_var(--color-ink)]">
            MK
          </div>
          <div>
            <div className="font-display text-lg font-extrabold leading-none">Mira K.</div>
            <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
              Hardware lead · Anvil Robotics
            </div>
          </div>
        </figcaption>
      </div>
    </section>
  );
}

/* ───── CTA ───── */
function CTABand() {
  return (
    <section className="relative overflow-hidden border-y-[3px] border-ink bg-yellow">
      <div className="hex-infill absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
        <h2 className="font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">
          Got a file? <br />
          We've got a build plate.
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="brut-btn brut-btn--dark">
            Start a project →
          </Link>
          <Link href="/services" className="brut-btn brut-btn--ghost">
            Browse capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
