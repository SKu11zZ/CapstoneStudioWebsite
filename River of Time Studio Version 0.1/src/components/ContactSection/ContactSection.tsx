import { contact } from "../../data/contact";
import { sectionCopies } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section className="page-section contact-section" id="contact">
      <SectionHeading copy={sectionCopies.contact} />
      <div className="contact-layout">
        <div className="contact-note">
          <p>{contact.note[language]}</p>
        </div>
        <div className="contact-grid">
          {contact.methods.map((method) => (
            <a className="contact-card" href={method.href} key={`${method.label}-${method.href}`} aria-label={`${method.label}: ${method.value[language]}`}>
              <Icon src={method.icon} />
              <span>{method.label}</span>
              <strong>{method.value[language]}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
