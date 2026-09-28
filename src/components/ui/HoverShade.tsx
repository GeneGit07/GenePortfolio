export default function HoverShade() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/30"
    />
  );
}
