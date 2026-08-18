export default function PixelImg({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt=""
      draggable={false}
      className={`pointer-events-none select-none [image-rendering:pixelated] ${className ?? ""}`}
    />
  );
}
