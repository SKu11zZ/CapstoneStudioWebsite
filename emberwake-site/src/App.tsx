import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PageProgress } from "./components/layout/PageProgress";
import { Hero } from "./components/sections/Hero";
import { FeaturedGame } from "./components/sections/FeaturedGame";
import { GamesSection } from "./components/sections/GamesSection";
import { StudioSection } from "./components/sections/StudioSection";
import { TeamSection } from "./components/sections/TeamSection";
import { VisualsSection } from "./components/sections/VisualsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { TimelineSection } from "./components/sections/TimelineSection";
import { content } from "./data/content";
import { games } from "./data/games";
import { team } from "./data/team";
import { mediaItems } from "./data/media";
import { timeline } from "./data/timeline";
import { useLanguage } from "./hooks/useLanguage";

export function App() {
  const { lang, setLang } = useLanguage(content);
  const t = content[lang];

  return (
    <>
      <Header lang={lang} onLangChange={setLang} content={t} />
      <PageProgress content={t} />
      <main>
        <Hero content={t} />
        <FeaturedGame content={t} />
        <GamesSection content={t} games={games[lang]} />
        <StudioSection content={t} />
        <TeamSection content={t} members={team[lang]} />
        <VisualsSection content={t} items={mediaItems[lang]} />
        <TimelineSection content={t} items={timeline[lang]} />
        <ContactSection content={t} />
      </main>
      <Footer lang={lang} onLangChange={setLang} content={t} />
    </>
  );
}
