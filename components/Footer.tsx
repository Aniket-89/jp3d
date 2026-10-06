import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import { PHONE, phoneHref } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-20 border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow">Project notes</p>
            <h3 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] md:text-5xl">
              Occasional notes <br />
              <span className="text-yellow">from Extrudia.</span>
            </h3>
            <p className="mt-4 max-w-md text-sm text-paper/70">
              Get updates from Extrudia by email.
            </p>
            <div className="mt-6 max-w-md">
              <NewsletterForm theme="dark" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <FooterCol title="Studio">
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterCol>
            <FooterCol title="Capabilities">
              <FooterLink href="/services#printing">3D Printing (FDM)</FooterLink>
              <FooterLink href="/services#prototyping">Rapid Prototyping</FooterLink>
              <FooterLink href="/services#laser">Laser Cutting & Engraving</FooterLink>
              <FooterLink href="/services#design">Product & CAD Design</FooterLink>
            </FooterCol>
            <FooterCol title="Reach us">
              <FooterLink href="mailto:hello.extrudia@gmail.com">hello.extrudia@gmail.com</FooterLink>
              {phoneHref ? <FooterLink href={phoneHref}>{PHONE}</FooterLink> : <li>Phone / WhatsApp: TODO</li>}
              <p className="font-mono text-xs text-paper/60 leading-relaxed">
                Sahibabad, Ghaziabad<br />
                Uttar Pradesh, India
              </p>
              <p className="max-w-xs text-xs text-paper/70">Local delivery across Ghaziabad, Noida, Greater Noida, and Delhi NCR. Shipping across India.</p>
            </FooterCol>
            <FooterCol title="More">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
              {/* TODO: Replace social placeholders with approved profile URLs. */}
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">LinkedIn</FooterLink>
            </FooterCol>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-6 text-xs text-paper/60 md:flex-row md:items-center">
          <p className="font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Extrudia · All layers reserved
          </p>
          <p className="font-mono">Delivery and shipping only</p>
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
