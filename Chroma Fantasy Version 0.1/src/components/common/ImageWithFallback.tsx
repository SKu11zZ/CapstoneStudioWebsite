import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  lazy?: boolean;
};

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackLabel,
  lazy = true,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <span>{fallbackLabel ?? alt}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}
