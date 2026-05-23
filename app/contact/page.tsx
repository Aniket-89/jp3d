import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — JP 3D Prints",
  description: "Start a project. Send us a CAD file, a sketch, or just a problem. We reply within one working day.",
};

const info = [
  { label: "Email", value: "hello@jp3dprints.com", href: "mailto:hello@jp3dprints.com" },
  { label: "Phone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
  { label: "Studio", value: "123 Maker Lane · Unit 04 · Anywhere, EARTH" },
  { label: "Hours", value: "Mon – Fri · 09:00 – 18:00" },
];

export default function ContactPage() {
  return (
    <>
      <header className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="brut-tag">/ contact /</span>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
            Start a <br />
            project. <br />
            <span className="text-orange">We're listening.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            The more we know upfront, the tighter the quote. Send a CAD file, a sketch, a Pinterest link, or just describe what you're trying to build — we'll take it from there.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          {/* Form */}
          <div className="brut-card p-6 md:p-10">
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
              The brief
            </h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-soft">
              // fields marked * are required
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <div className="brut-card !bg-yellow p-6">
              <h3 className="font-display text-2xl font-extrabold">First time printing?</h3>
              <p className="mt-2 text-sm">
                Not sure what process you need? Mention what the part has to <em>do</em> and we'll suggest a route. We do free DFM reviews on every quote.
              </p>
              <Link href="/services" className="brut-btn brut-btn--dark mt-4">See processes →</Link>
            </div>

            <dl className="brut-card divide-y-2 divide-ink p-0">
              {info.map((row) => (
                <div key={row.label} className="flex flex-col gap-1 p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{row.label}</dt>
                  <dd className="font-display text-lg font-bold leading-snug">
                    {row.href ? (
                      <a href={row.href} className="underline-offset-4 hover:underline">{row.value}</a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="brut-card !bg-mint p-6">
              <p className="font-mono text-xs uppercase tracking-widest">// sla</p>
              <p className="mt-2 font-display text-2xl font-extrabold leading-tight">
                We reply within <span className="bg-paper px-1">1 working day.</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
