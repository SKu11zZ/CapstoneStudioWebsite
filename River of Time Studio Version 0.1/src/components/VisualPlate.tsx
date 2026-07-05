type VisualPlateProps = {
  label: string;
  variant: string;
  className?: string;
  portrait?: boolean;
};

export function VisualPlate({ label, variant, className = "", portrait = false }: VisualPlateProps) {
  return (
    <div
      className={`visual-plate visual-${variant} ${portrait ? "visual-portrait" : ""} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span className="visual-map" aria-hidden="true" />
      <span className="visual-river" aria-hidden="true" />
      <span className="visual-starfield" aria-hidden="true" />
      <span className="visual-frame" aria-hidden="true" />
    </div>
  );
}
