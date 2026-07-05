import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const embers = Array.from({ length: 16 }, (_, index) => index);

export function EmberField() {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;

  return (
    <div className="ember-field" aria-hidden="true">
      {embers.map((ember) => (
        <span key={ember} className={`ember ember--${ember}`} />
      ))}
    </div>
  );
}
