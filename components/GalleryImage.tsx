import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
};

export default function GalleryImage({ src, alt }: Props) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-paper">
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 grid place-items-center bg-paper p-4 text-center"
        >
          <span className="border-2 border-ink/30 px-4 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
            Add project photo
          </span>
        </div>
      )}
    </div>
  );
}
