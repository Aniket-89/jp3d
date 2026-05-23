export type PrintTech = {
  id: "fdm" | "sla" | "sls";
  code: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  materials: string[];
  useCases: string[];
  tone: "yellow" | "orange" | "mint";
};

// NOTE: Numbers below reflect typical capabilities for the listed machines.
// Replace with your studio's actual hardware before going live.
export const techs: PrintTech[] = [
  {
    id: "fdm",
    code: "001 · FDM",
    name: "Fused Deposition Modeling",
    tagline: "Workhorse for functional prototypes and large parts.",
    description:
      "Molten thermoplastic, deposited layer by layer. The right call when you need strong, affordable parts in everyday engineering plastics — fast.",
    highlights: [
      "Build volume up to 300 × 300 × 600 mm",
      "Layer height 0.1 – 0.3 mm",
      "Engineering plastics (PETG, PA, PC) supported",
    ],
    specs: [
      { label: "Build volume", value: "300 × 300 × 600 mm" },
      { label: "Layer height", value: "0.1 – 0.3 mm" },
      { label: "Tolerance", value: "± 0.2 mm" },
      { label: "Lead time", value: "From 48 hours" },
    ],
    materials: ["PLA", "PETG", "ABS", "ASA", "Nylon (PA)", "PC", "TPU 95A"],
    useCases: [
      "Functional prototypes",
      "Jigs & fixtures",
      "Cosplay / props",
      "Architectural models",
      "Replacement parts",
    ],
    tone: "yellow",
  },
  {
    id: "sla",
    code: "002 · SLA",
    name: "Stereolithography / Resin",
    tagline: "Sharp detail, surgical finish, dental-grade tolerances.",
    description:
      "Photopolymer resin cured by laser. Pick this when the part has to look like the render — smooth surfaces, tiny features, microscopic layer lines.",
    highlights: [
      "Layer heights down to 25 microns",
      "Castable, tough, flexible & bio-compatible resins",
      "Surface finish ready to paint",
    ],
    specs: [
      { label: "Build volume", value: "192 × 120 × 245 mm" },
      { label: "Layer height", value: "0.025 – 0.1 mm" },
      { label: "Tolerance", value: "± 0.1 mm" },
      { label: "Lead time", value: "From 72 hours" },
    ],
    materials: ["Standard Clear", "Tough 2000", "Flexible 80A", "Castable Wax", "High Temp", "Dental LT"],
    useCases: [
      "Jewelry masters",
      "Dental & medical models",
      "Miniatures & figurines",
      "Optical components",
      "Show-quality prototypes",
    ],
    tone: "orange",
  },
  {
    id: "sls",
    code: "003 · SLS",
    name: "Selective Laser Sintering / Nylon",
    tagline: "Production-grade nylon parts. No supports, no apologies.",
    description:
      "Nylon powder sintered by laser. The closest a printed part gets to an injection-molded one — isotropic strength, complex geometry, batchable.",
    highlights: [
      "Isotropic mechanical properties",
      "Complex geometries without support material",
      "Production-ready surface and durability",
    ],
    specs: [
      { label: "Build volume", value: "165 × 165 × 300 mm" },
      { label: "Layer height", value: "0.1 mm" },
      { label: "Tolerance", value: "± 0.3 mm" },
      { label: "Lead time", value: "From 5 days" },
    ],
    materials: ["PA12 Nylon", "PA11 Nylon", "PA12 Glass-Filled", "TPU 70A"],
    useCases: [
      "Low-volume production",
      "Living hinges & snaps",
      "Drone & RC parts",
      "End-use enclosures",
      "Lattice / generative geometry",
    ],
    tone: "mint",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Upload your file",
    body: "STL, STEP, OBJ, 3MF — drop it in or share a link. We accept basically anything CAD spits out.",
  },
  {
    n: "02",
    title: "Get a quote in 24h",
    body: "We review feasibility, suggest the right process & material, and send a fixed price with a delivery date.",
  },
  {
    n: "03",
    title: "We print & QC",
    body: "Your part goes onto the right machine, gets inspected, post-processed and packed.",
  },
  {
    n: "04",
    title: "Ship or pickup",
    body: "Tracked shipping anywhere, or come by the studio and watch the last layer go down.",
  },
];

export const whyUs = [
  {
    icon: "calipers",
    title: "Engineer-grade tolerances",
    body: "Every order is inspected with calipers and a checklist before it leaves the studio. No surprises.",
  },
  {
    icon: "clock",
    title: "Built for speed",
    body: "FDM prototypes in 48 hours, resin masters in 72, nylon production runs in under a week.",
  },
  {
    icon: "stack",
    title: "Three processes, one studio",
    body: "FDM, SLA and SLS under one roof. We'll pick the right one for the part instead of forcing yours into ours.",
  },
  {
    icon: "leaf",
    title: "Lower-waste workflow",
    body: "Resin reclaim, powder recycling, and we'll take back PLA scrap to grind back into filament.",
  },
];

export const projects = [
  { title: "Drone arm v3", category: "SLS · PA12", caption: "Topology-optimized carrier for a quad" },
  { title: "Brand-loyalty mug", category: "SLA · Standard", caption: "Mascot maquette for a coffee shop" },
  { title: "Robot gripper", category: "FDM · PETG", caption: "Custom finger plates, batch of 12" },
  { title: "Lamp shade", category: "FDM · PLA", caption: "Generative lattice, 480 mm tall" },
  { title: "Dental aligner model", category: "SLA · Dental LT", caption: "Clear arch for a partner clinic" },
  { title: "Bike pedal cleat", category: "SLS · PA12-GF", caption: "Reinforced for repeated load" },
];

export const faqs = [
  {
    q: "What file formats do you accept?",
    a: "STL, STEP/STP, OBJ, 3MF and SLDPRT. STEP is preferred for engineering parts because it preserves units and features.",
  },
  {
    q: "How much does a print cost?",
    a: "Cost is driven by volume, material and process. A small FDM bracket can be under $15, while a large multi-part nylon assembly may run several hundred. Upload your file for a fixed quote in 24 hours.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Mutual NDAs are routine — send us yours or use ours. All files are stored in a private, access-controlled workspace.",
  },
  {
    q: "Can you help me design the part?",
    a: "Absolutely. We do DFM reviews on every quote, and offer paid design support if you only have a sketch or a problem to solve.",
  },
  {
    q: "What about painting, dyeing, or assembly?",
    a: "We post-process in-house: sanding, vapor smoothing (ABS), bead blasting (SLS), dyeing (nylon), priming, and painting. Multi-part assemblies welcome.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — via DHL or UPS. Customs paperwork is handled on our end; delivery is typically 2–5 business days.",
  },
];

export const stats = [
  { value: "48h", label: "Prototype lead time" },
  { value: "30+", label: "Materials in stock" },
  { value: "1.2k", label: "Parts printed in 2025" },
  { value: "± 0.1mm", label: "Best tolerance" },
];
