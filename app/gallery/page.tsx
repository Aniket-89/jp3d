import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Extrudia",
  description: "Project photos from Extrudia's 3D printing, prototyping, laser, and product design work.",
};

export default function GalleryPage() {
  return (
    <>
      <header className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="brut-tag">/ gallery /</span>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
            Work in <br />
            <span className="text-orange">progress.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Project photos will appear here as they are added.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <GalleryGrid />
      </section>
    </>
  );
}
