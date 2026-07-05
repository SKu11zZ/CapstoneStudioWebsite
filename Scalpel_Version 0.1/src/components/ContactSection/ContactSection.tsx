import { contactSection } from "../../data/siteContent";
import { contactLinks } from "../../data/contact";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import "./ContactSection.css";

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section className="contact section" id="contact">
      <div className="contact__intro">
        <SectionHeading copy={contactSection.section} language={language} />
        <a className="contact__mail" href="mailto:contact@scalpelstudio.games">
          <img src="/assets/icons/paper-plane-white.png" alt="" aria-hidden="true" />
          <span>{contactSection.cta[language]}</span>
        </a>
      </div>

      <div className="contact__grid">
        {contactLinks.map((link) => (
          <a className="contact-card" href={link.href} key={link.id}>
            <span>{link.label}</span>
            <strong>{link.value[language]}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
