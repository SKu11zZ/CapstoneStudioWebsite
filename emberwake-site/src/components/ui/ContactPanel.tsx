import { FormEvent, useState } from "react";
import type { SiteContent } from "../../types/site";
import { links, mailtoContact } from "../../data/links";
import { ButtonLink } from "./ButtonLink";

type ContactPanelProps = {
  content: SiteContent;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactPanel({ content }: ContactPanelProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const value = email.trim();
    if (!value) {
      setMessage(content.contact.emptyEmail);
      return;
    }
    if (!isValidEmail(value)) {
      setMessage(content.contact.invalidEmail);
      return;
    }
    setMessage(content.contact.comingSoon);
  };

  return (
    <div className="contact-console">
      <div className="contact-console__links">
        <a href={mailtoContact}>
          <img className="icon-img" src="/icons/message-white.png" alt="" aria-hidden="true" />
          <span>{content.contact.email}</span>
          <strong>{links.contactEmail}</strong>
        </a>
        <ButtonLink href={links.pressKitUrl}>
          <img className="icon-img" src="/icons/safety-certificate-white.png" alt="" aria-hidden="true" />
          {content.contact.pressKit}
        </ButtonLink>
        <ButtonLink href={links.discordUrl}>
          <img className="icon-img" src="/icons/link-white.png" alt="" aria-hidden="true" />
          {content.hero.ctaDiscord}
        </ButtonLink>
        <ButtonLink href={links.steamUrl}>
          <img className="icon-img" src="/icons/developer-white.png" alt="" aria-hidden="true" />
          {content.hero.ctaWishlist}
        </ButtonLink>
      </div>
      <form className="contact-console__form" onSubmit={onSubmit}>
        <h3>{content.contact.subscribeTitle}</h3>
        <label>
          <span>{content.contact.emailPlaceholder}</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-label={content.contact.emailPlaceholder}
            placeholder={content.contact.emailPlaceholder}
          />
        </label>
        <button type="submit">
          <img className="icon-img" src="/icons/paper-plane-white.png" alt="" aria-hidden="true" />
          {content.contact.subscribe}
        </button>
        <p aria-live="polite">{message}</p>
      </form>
    </div>
  );
}
