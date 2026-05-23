interface Props {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({ kicker, title, subtitle, align = "left" }: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {kicker && (
        <span className="brut-tag">
          <span className="h-2 w-2 bg-orange" />
          {kicker}
        </span>
      )}
      <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-ink-soft md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
