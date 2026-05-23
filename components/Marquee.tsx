interface Props {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = "" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden border-y-[3px] border-ink bg-ink py-4 ${className}`}>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pr-12">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl font-extrabold uppercase tracking-tight text-paper md:text-5xl">
            {item}
            <span className="text-yellow" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
