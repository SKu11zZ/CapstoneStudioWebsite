import { contactContent } from "../../content/contact";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeader } from "../common/SectionHeader";
import "./ContactSection.css";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-section__inner reveal">
        <SectionHeader
          kicker={{ zh: "Last Page", en: "Last Page" }}
          title={contactContent.title}
          intro={contactContent.intro}
          align="center"
        />
        <div className="contact-list">
          {contactContent.links.map((link) => (
            <a href={link.href} key={link.label} aria-label={`${link.label}: ${link.value}`}>
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
