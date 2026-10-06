import type { Metadata } from "next";
import Link from "next/link";
import GalleryImage from "@/components/GalleryImage";
import SectionHeading from "@/components/SectionHeading";
import { fdmMaterials, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — extrudia",
  description: "3D printing, rapid prototyping, laser cutting, and product design in Sahibabad, Ghaziabad.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="brut-tag">/ services /</span>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
            From first sketch <br />
            <span className="text-stroke">to prototype.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Four services for product ideas at every stage: FDM 3D printing, rapid prototyping, laser cutting and engraving, and product and CAD design.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <section key={service.id} id={service.id} className="scroll-mt-32">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
                <div className={`order-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="brut-tag !text-base !py-1.5 !px-3">{service.code}</span>
                    <span
                      className={`h-3 w-12 border-2 border-ink ${i % 2 === 0 ? "bg-yellow" : "bg-orange"}`}
                    />
                  </div>
                  <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">{service.name}</h2>
                  <p className="mt-3 font-display text-xl text-ink-soft">{service.tagline}</p>
                  <p className="mt-4 max-w-xl text-base">{service.description}</p>

                  {service.id === "printing" && (
                    <div className="mt-8">
                      <div className="brut-card mb-6 !p-4">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Printer · build volume</div>
                        <div className="mt-1 font-display text-lg font-extrabold">Bambu Lab P2S · up to 256 × 256 × 256 mm (TODO: confirm)</div>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">FDM materials</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {fdmMaterials.map((material) => (
                          <li key={material} className="border-2 border-ink bg-paper px-3 py-1 font-mono text-xs uppercase tracking-wider shadow-[2px_2px_0_0_var(--color-ink)]">
                            {material}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm text-ink-soft">Carbon-fibre filaments suit stiff, functional parts.</p>
                    </div>
                  )}

                  <ul className="mt-6 flex flex-col gap-2 text-base">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="text-orange">▸</span>{detail}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="brut-btn mt-8">Get a quote →</Link>
                </div>

                <div className={`order-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <GalleryImage alt={`Photo placeholder for ${service.name}`} />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="border-y-[3px] border-ink bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            kicker="Timing & delivery"
            title={<>Clear quotes. <br /><span className="text-stroke">Made to order.</span></>}
            subtitle="Quote within 24 hours. Most small FDM prints ship in about 2 days; larger jobs confirmed in your quote."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="brut-card p-6">
              <h3 className="font-display text-2xl font-extrabold">Local delivery</h3>
              <p className="mt-2 text-sm text-ink-soft">Delivery across Delhi NCR and tracked shipping across India.</p>
            </div>
            <div className="brut-card p-6">
              <h3 className="font-display text-2xl font-extrabold">No mass production</h3>
              <p className="mt-2 text-sm text-ink-soft">We focus on prototypes and product development projects.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
