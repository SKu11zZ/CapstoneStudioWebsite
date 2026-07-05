import { mediaGallery } from "../../data/siteContent";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import "./MediaGallery.css";

export function MediaGallery() {
  const { language } = useLanguage();

  return (
    <section className="media-gallery section" id="media">
      <SectionHeading copy={mediaGallery.section} language={language} align="center" />
      <div className="media-gallery__grid">
        {mediaGallery.items.map((item, index) => (
          <article className="media-card" key={item.code}>
            <div className={`media-card__visual media-card__visual--${index + 1}`}>
              <span className="media-card__reticle" />
              <span className="media-card__horizon" />
            </div>
            <div className="media-card__body">
              <span>{item.code}</span>
              <strong>{item.title[language]}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
