import type { SiteContent } from "../../types/site";
import { links } from "../../data/links";
import { ButtonLink } from "../ui/ButtonLink";
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
            <span className="hero__title-line">{content.hero.title}</span>
            <span className="hero__title-sub">{content.hero.zhTitle}</span>
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
      </div>
      <a className="scroll-cue" href="#featured">
        {content.hero.scroll}
      </a>
    </section>
  );
}
