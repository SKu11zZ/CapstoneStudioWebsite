import type { ActionLink as ActionLinkType, Language } from "../../types";
import "./ActionLink.css";

type ActionLinkProps = {
  action: ActionLinkType;
  language: Language;
  className?: string;
};

export function ActionLink({ action, language, className = "" }: ActionLinkProps) {
  const variant = action.variant ?? "secondary";

  return (
    <a
      className={`action-link action-link--${variant} ${className}`.trim()}
      href={action.href}
      aria-label={action.label[language]}
    >
      {action.icon ? (
        <img src={action.icon} alt="" aria-hidden="true" loading="lazy" />
      ) : null}
      <span>{action.label[language]}</span>
    </a>
  );
}
