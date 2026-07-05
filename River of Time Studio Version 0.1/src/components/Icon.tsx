type IconProps = {
  src: string;
  className?: string;
};

export function Icon({ src, className = "" }: IconProps) {
  return <img className={`icon ${className}`.trim()} src={src} alt="" aria-hidden="true" loading="lazy" />;
}
