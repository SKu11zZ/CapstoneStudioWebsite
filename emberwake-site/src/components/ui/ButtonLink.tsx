type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function ButtonLink({ href, children, variant = "secondary", className = "" }: ButtonLinkProps) {
  const external = isExternal(href);
  return (
    <a
      className={`button-link button-link--${variant} ${className}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {children}
    </a>
  );
}
