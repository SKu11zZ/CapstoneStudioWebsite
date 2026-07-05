import type { SiteContent } from "../../types/site";

type MobileMenuProps = {
  content: SiteContent;
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ content, open, onClose }: MobileMenuProps) {
  return (
    <div className="mobile-menu" data-open={open ? "true" : "false"} aria-hidden={!open}>
      <nav aria-label={content.a11y.nav}>
        {content.nav.map((item) => (
          <a href={item.href} key={item.id} onClick={onClose}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
