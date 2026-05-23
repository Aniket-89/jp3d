import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-20 border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow">// stay in the loop</p>
            <h3 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] md:text-5xl">
              Get one print-shop dispatch <br />
              <span className="text-yellow">a month.</span> No fluff.
            </h3>
            <p className="mt-4 max-w-md text-sm text-paper/70">
              New materials, machine upgrades, customer builds, the occasional behind-the-scenes timelapse. Unsubscribe in one click.
            </p>
            <div className="mt-6 max-w-md">
              <NewsletterForm theme="dark" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol title="Studio">
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterCol>
            <FooterCol title="Capabilities">
              <FooterLink href="/services#fdm">FDM</FooterLink>
              <FooterLink href="/services#sla">SLA / Resin</FooterLink>
              <FooterLink href="/services#sls">SLS / Nylon</FooterLink>
              <FooterLink href="/services#post">Post-processing</FooterLink>
            </FooterCol>
            <FooterCol title="Reach us">
              <FooterLink href="mailto:hello@jp3dprints.com">hello@jp3dprints.com</FooterLink>
              <FooterLink href="tel:+10000000000">+1 (000) 000-0000</FooterLink>
              <p className="font-mono text-xs text-paper/60 leading-relaxed">
                123 Maker Lane<br />
                Studio Unit 04<br />
                Anywhere, EARTH
              </p>
            </FooterCol>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-6 text-xs text-paper/60 md:flex-row md:items-center">
          <p className="font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} JP 3D Prints · All layers reserved
          </p>
          <p className="font-mono">
            Built · Layer 247/247 · 100%{" "}
            <span className="ml-1 inline-block h-2 w-12 align-middle border border-paper/40">
              <span className="block h-full w-full bg-yellow" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow">{title}</p>
      <ul className="mt-3 flex flex-col gap-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="underline-offset-4 hover:underline hover:text-yellow">
        {children}
      </Link>
    </li>
  );
}
