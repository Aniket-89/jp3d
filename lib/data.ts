export type Service = {
  id: "printing" | "prototyping" | "laser" | "design";
  code: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  tone: "yellow" | "orange" | "mint" | "blue";
};

export const fdmMaterials = ["PLA", "PETG", "ABS", "TPU", "Nylon", "PLA-CF", "PETG-CF"];

export const services: Service[] = [
  {
    id: "printing",
    code: "01 · FDM",
    name: "3D Printing (FDM)",
    tagline: "Functional parts and early prototypes.",
    description: "FDM 3D printing on a Bambu Lab P2S.",
    details: [
      "Build volume up to 256 × 256 × 256 mm (TODO: confirm).",
      `Materials: ${fdmMaterials.join(", ")}.`,
      "CF filaments suit stiff, functional parts.",
    ],
    tone: "yellow",
  },
  {
    id: "prototyping",
    code: "02 · PROTOTYPING",
    name: "Rapid Prototyping",
    tagline: "Move from idea to testable object.",
    description: "Prototype iterations to help evaluate form, fit, and function.",
    details: ["Share a file or sketch to get started.", "Larger or multi-part jobs are confirmed in your quote."],
    tone: "orange",
  },
  {
    id: "laser",
    code: "03 · LASER",
    name: "Laser Cutting & Engraving",
    tagline: "Cut sheet materials and mark metal surfaces.",
    description: "Two Trees TTS-20 Pro diode laser.",
    details: [
      "Cutting: wood and opaque acrylic.",
      "Metal engraving and marking only; no metal cutting.",
      "Work area and maximum thickness: TODO.",
    ],
    tone: "mint",
  },
  {
    id: "design",
    code: "04 · DESIGN",
    name: "Product & CAD Design",
    tagline: "Turn a sketch into a print-ready model.",
    description: "Design support for ideas that need to become physical prototypes.",
    details: ["Sketch-to-print-ready 3D model.", "Design for manufacturability.", "Prototype iterations."],
    tone: "blue",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Upload a file or sketch",
    body: "Share a supported 3D or vector file, a link, or a sketch to start your project.",
  },
  {
    n: "02",
    title: "Get a quote in 24h",
    body: "We review your brief and send a quote within 24 hours.",
  },
  {
    n: "03",
    title: "We print/cut and check quality",
    body: "We make your prototype using the quoted process and check it before dispatch.",
  },
  {
    n: "04",
    title: "Delivery or shipping",
    body: "Delivery across Delhi NCR and tracked shipping across India.",
  },
];

export const whyUs = [
  {
    icon: "people",
    title: "Personal attention",
    body: "A small prototyping studio gives your brief direct attention.",
  },
  {
    icon: "clock",
    title: "Fast quotes",
    body: "Get a quote within 24 hours. Most small FDM prints ship in about 2 days; larger jobs are confirmed in your quote.",
  },
  {
    icon: "materials",
    title: "Material advice",
    body: "Get help choosing from the available FDM filaments for your prototype.",
  },
  {
    icon: "design",
    title: "Design help",
    body: "Get support with CAD design, design for manufacturability, and prototype iterations.",
  },
];

export type ProjectImage = {
  src?: string;
  alt: string;
  category: "Prints" | "Design";
  material?: string;
};

// TODO: Add project photos under /public/gallery/ and set each src to /gallery/<filename>.
export const projects: ProjectImage[] = [
  { alt: "3D print project photo slot 01", category: "Prints" },
  { alt: "3D print project photo slot 02", category: "Prints" },
  { alt: "3D print project photo slot 03", category: "Prints" },
  { alt: "3D print project photo slot 04", category: "Prints" },
  { alt: "3D print project photo slot 05", category: "Prints" },
  { alt: "3D print project photo slot 06", category: "Prints" },
  { alt: "3D print project photo slot 07", category: "Prints" },
  { alt: "3D print project photo slot 08", category: "Prints" },
  { alt: "3D print project photo slot 09", category: "Prints" },
  { alt: "3D print project photo slot 10", category: "Prints" },
  { alt: "3D print project photo slot 11", category: "Prints" },
  { alt: "3D print project photo slot 12", category: "Prints" },
  { alt: "Product and CAD design project photo slot 01", category: "Design" },
  { alt: "Product and CAD design project photo slot 02", category: "Design" },
  { alt: "Product and CAD design project photo slot 03", category: "Design" },
];
