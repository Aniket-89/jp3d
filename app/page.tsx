import Link from "next/link";
import Image from "next/image";
import GalleryImage from "@/components/GalleryImage";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { processSteps, projects, services, whyUs, fdmMaterials } from "@/lib/data";
import { whatsappUrl } from "@/lib/config";

const serviceToneClasses = {
  yellow: "bg-yellow",
  orange: "bg-orange",
  mint: "bg-mint",
  blue: "bg-blue",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Marquee items={[...fdmMaterials, "Wood", "Acrylic", "Metal engraving"]} />
      <WhyUs />
      <ProjectsTeaser />
      {/* TODO: Add real testimonials when available. */}
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
              Sahibabad · Ghaziabad
            </span>
            <span className="brut-tag !bg-yellow">FDM · Prototyping · Laser</span>
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
            Extrudia is a small prototyping studio in Sahibabad, Ghaziabad for 3D printing, laser cutting, and product design. Send a file or a sketch and get a quote within 24 hours.
          </p>
          <p className="mt-3 max-w-xl text-sm text-ink-soft">
            Quote within 24 hours. Most small FDM prints ship in about 2 days; larger jobs confirmed in your quote.
          </p>
          <p className="mt-2 max-w-xl text-sm text-ink-soft">
            Delivery across Delhi NCR and tracked shipping across India.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="brut-btn">
              Get a quote
              <span aria-hidden>→</span>
            </Link>
            <Link href="/services" className="brut-btn brut-btn--ghost">
              See capabilities
            </Link>
            {whatsappUrl && (
              <a href={whatsappUrl} className="brut-btn brut-btn--ghost" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          {/* main hero "build plate" card */}
          <div className="brut-card relative aspect-[5/6] !p-0 overflow-hidden">
            <div className="absolute inset-0 layer-lines opacity-60" aria-hidden />
            {/* <ImagePlaceholder
              tone="paper"
              pattern="iso"
              aspect="aspect-[5/6]"
              label="HERO · STUDIO SHOT"
              caption="Drop in a hero photo of a printer mid-print or a hero part."
              className="!border-0 !shadow-none"
            /> */}
            <Image
              src="/images/printer-warmlight.jpg"
              alt="Hero shot of a 3D printer build plate with a part mid-print."
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
            {/* z-axis arrow */}
            <div className="pointer-events-none absolute right-3 top-3 flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest">
              <span>Z</span>
              <span className="h-16 w-[2px] bg-ink" />
              <span>▲</span>
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

/* ───── SERVICES ───── */
function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        kicker="What we run"
        title={
          <>
            Four services. <br />
            <span className="text-stroke">One prototyping studio.</span>
          </>
        }
        subtitle="3D printing, rapid prototyping, laser cutting, and product design in Sahibabad, Ghaziabad."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, i) => (
          <article
            key={service.id}
            className="brut-card group flex flex-col gap-4 p-6"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="brut-tag">{service.code}</span>
              <div
                className={`h-12 w-12 border-[3px] border-ink shadow-[3px_3px_0_0_var(--color-ink)] ${serviceToneClasses[service.tone]}`}
              />
            </div>
            <h3 className="font-display text-2xl font-extrabold leading-tight">{service.name}</h3>
            <p className="text-sm text-ink-soft">{service.tagline}</p>
            <ul className="mt-1 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              {service.details.slice(0, 2).map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="text-orange">→</span>
                  {detail}
                </li>
              ))}
            </ul>
            <Link
              href={`/services#${service.id}`}
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
            The process
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
                like it is <em className="not-italic text-orange">our</em> part.
              </>
            }
            subtitle="A small prototyping studio with personal attention, practical material advice, fast quotes, and design help."
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
    case "people":
      return (
        <svg viewBox="0 0 24 24" className={common} stroke="currentColor" strokeWidth="2.2" fill="none">
          <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M15 15a4 4 0 0 1 6 3v2" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={common} stroke="currentColor" strokeWidth="2.2" fill="none">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 8v5l3 2M9 3h6" />
        </svg>
      );
    case "materials":
      return (
        <svg viewBox="0 0 24 24" className={common} stroke="currentColor" strokeWidth="2.2" fill="none">
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5M3 18l9 5 9-5" />
        </svg>
      );
    case "design":
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
  const printProjects = projects.filter((project) => project.category === "Prints").slice(0, 3);
  return (
    <section className="border-t-[3px] border-ink bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Gallery"
            title={<>Recent <span className="text-orange">prints.</span></>}
            subtitle="Add project photos as work is ready to share."
          />
          <Link href="/gallery" className="brut-btn brut-btn--dark">
            View all →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {printProjects.map((project, index) => (
            <figure key={`print-${index}`} className="brut-card group !p-0 overflow-hidden">
              <GalleryImage src={project.src} alt={project.alt} />
            </figure>
          ))}
        </div>
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
          Got a file or sketch? <br />
          Let&apos;s prototype it.
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
