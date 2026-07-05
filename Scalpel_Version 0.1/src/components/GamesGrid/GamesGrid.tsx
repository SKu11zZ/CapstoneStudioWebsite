import { gamesSection } from "../../data/siteContent";
import { games } from "../../data/games";
import { useLanguage } from "../../i18n/LanguageContext";
import { GameCard } from "../GameCard/GameCard";
import { SectionHeading } from "../ui/SectionHeading";
import "./GamesGrid.css";

export function GamesGrid() {
  const { language } = useLanguage();

  return (
    <section className="games section" id="games">
      <SectionHeading copy={gamesSection} language={language} />
      <div className="games__grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} language={language} />
        ))}
      </div>
    </section>
  );
}
