import type { SiteContent } from "../../types/site";
import { links } from "../../data/links";
import { ButtonLink } from "../ui/ButtonLink";
import { CinematicFrame } from "../ui/CinematicFrame";

type FeaturedGameProps = {
  content: SiteContent;
};

export function FeaturedGame({ content }: FeaturedGameProps) {
  return (
    <section className="section-band featured" id="featured">
      <div className="section-grid section-grid--featured">
        <div>
          <p className="eyebrow">{content.featured.eyebrow}</p>
          <h2>{content.featured.title}</h2>
          <p className="mono-line">{content.featured.meta}</p>
          <blockquote>{content.featured.quote}</blockquote>
          <p className="body-copy">{content.featured.body}</p>
          <div className="highlight-list">
            {content.featured.highlights.map((highlight, index) => (
              <article key={highlight.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="button-row">
            <ButtonLink href={links.steamUrl} variant="primary">
              {content.hero.ctaWishlist}
            </ButtonLink>
            <ButtonLink href="#visuals">{content.featured.ctaTrailer}</ButtonLink>
          </div>
        </div>
        <div className="featured__media-stack">
          <CinematicFrame variant="video" label={content.featured.trailerLabel} meta="PROJECT LANTERN" isVideo />
          <CinematicFrame variant="image" label={content.featured.shotLabel} meta="CAPTURE PLACEHOLDER" />
        </div>
      </div>
    </section>
  );
}
