import { games } from "../../data/games";
import { sectionCopies } from "../../data/siteContent";
import { SectionHeading } from "../SectionHeading";
import { GameCard } from "../GameCard/GameCard";

export function GamesGrid() {
  return (
    <section className="page-section" id="games">
      <SectionHeading copy={sectionCopies.games} align="center" />
      <div className="games-grid">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </section>
  );
}
