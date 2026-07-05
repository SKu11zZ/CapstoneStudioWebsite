import type { SiteContent } from "../../types/site";
import { links } from "../../data/links";
import { ButtonLink } from "../ui/ButtonLink";
import { CinematicFrame } from "../ui/CinematicFrame";
import { EmberField } from "../ui/EmberField";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero section-band" id="top">
      <EmberField />
      <div className="hero__frame">
        <div className="hero__copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>
            {content.hero.title}
            <span>{content.hero.zhTitle}</span>
          </h1>
          <p>{content.hero.subtitle}</p>
          <div className="hero__actions">
            <ButtonLink href="#featured" variant="secondary">
              {content.hero.start}
            </ButtonLink>
            <ButtonLink href={links.steamUrl} variant="primary">
              {content.hero.ctaWishlist}
            </ButtonLink>
            <ButtonLink href="#games">{content.hero.ctaGames}</ButtonLink>
            <ButtonLink href="#contact" variant="text">
              {content.hero.ctaDiscord}
            </ButtonLink>
          </div>
        </div>
        <aside className="hero__dossier" aria-label={content.hero.featuredTitle}>
          <CinematicFrame variant="hero" label={content.hero.featuredTitle} meta={content.hero.featuredTag} isVideo />
          <div className="hero__meta">
            {content.hero.featuredMeta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </div>
      <a className="scroll-cue" href="#featured">
        {content.hero.scroll}
      </a>
    </section>
  );
}
