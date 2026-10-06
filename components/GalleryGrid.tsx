"use client";

import { useState } from "react";
import GalleryImage from "@/components/GalleryImage";
import { projects } from "@/lib/data";

const categories = ["Prints", "Design"] as const;
type Category = (typeof categories)[number];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Prints");
  const visibleProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div role="tablist" aria-label="Gallery category" className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`brut-btn ${activeCategory === category ? "" : "brut-btn--ghost"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <figure key={project.alt} className="brut-card group !p-0 overflow-hidden">
            <GalleryImage src={project.src} alt={project.alt} />
            {project.material && (
              <figcaption className="border-t-[3px] border-ink bg-paper px-4 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
                {project.material}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </>
  );
}
