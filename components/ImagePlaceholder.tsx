type Tone = "yellow" | "orange" | "mint" | "blue" | "rose" | "paper";

const toneBg: Record<Tone, string> = {
  yellow: "bg-yellow",
  orange: "bg-orange",
  mint: "bg-mint",
  blue: "bg-blue",
  rose: "bg-rose",
  paper: "bg-paper",
};

const patterns = {
  layers: "layer-lines",
  iso: "iso-grid",
  hex: "hex-infill",
} as const;

type Pattern = keyof typeof patterns;

interface Props {
  label?: string;
  caption?: string;
  tone?: Tone;
  pattern?: Pattern;
  aspect?: string;
  className?: string;
  rotate?: number;
}

export default function ImagePlaceholder({
  label = "PLACEHOLDER",
  caption,
  tone = "paper",
  pattern = "iso",
  aspect = "aspect-[4/3]",
  className = "",
  rotate = 0,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden border-[3px] border-ink shadow-[6px_6px_0_0_var(--color-ink)] ${aspect} ${toneBg[tone]} ${className}`}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <div className={`absolute inset-0 ${patterns[pattern]}`} aria-hidden />
      {/* corner crosshairs */}
      <Crosshair className="left-2 top-2" />
      <Crosshair className="right-2 top-2" />
      <Crosshair className="left-2 bottom-2" />
      <Crosshair className="right-2 bottom-2" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <div className="border-2 border-ink bg-paper px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] shadow-[2px_2px_0_0_var(--color-ink)]">
          {label}
        </div>
        {caption && <p className="max-w-[80%] font-display text-sm font-bold leading-tight">{caption}</p>}
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.3em] text-ink/40">
        IMG · 1 : 1
      </div>
    </div>
  );
}

function Crosshair({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-3 w-3 ${className}`}
      style={{
        background:
          "linear-gradient(currentColor, currentColor) center/100% 2px no-repeat, linear-gradient(currentColor, currentColor) center/2px 100% no-repeat",
        color: "#0a0a0a",
      }}
    />
  );
}
