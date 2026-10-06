import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { PHONE, phoneHref, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact — Extrudia",
  description: "Get a quote for 3D printing, rapid prototyping, laser cutting, or product design in Sahibabad, Ghaziabad.",
};

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
            Send a file or sketch for 3D printing, rapid prototyping, laser cutting, or product design. Quote within 24 hours.
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
              <div className="flex flex-col gap-1 p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Email</dt>
                <dd className="font-display text-lg font-bold leading-snug"><a href="mailto:hello.extrudia@gmail.com" className="underline-offset-4 hover:underline">hello.extrudia@gmail.com</a></dd>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Phone / WhatsApp</dt>
                <dd className="font-display text-lg font-bold leading-snug">{phoneHref ? <a href={phoneHref}>{PHONE}</a> : "TODO"}</dd>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Location</dt>
                <dd className="font-display text-lg font-bold leading-snug">Sahibabad, Ghaziabad, UP, India</dd>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Service area</dt>
                <dd className="text-sm">Local delivery across Ghaziabad, Noida, Greater Noida, and Delhi NCR. Shipping across India.</dd>
              </div>
            </dl>

            <div className="brut-card !bg-mint p-6">
              <p className="font-mono text-xs uppercase tracking-widest">// quick contact</p>
              <p className="mt-2 font-display text-2xl font-extrabold leading-tight">
                Most small FDM prints ship in about 2 days; larger jobs confirmed in your quote.
              </p>
              {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="brut-btn mt-4">WhatsApp</a>}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
