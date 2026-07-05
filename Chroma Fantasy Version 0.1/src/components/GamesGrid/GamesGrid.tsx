import { games } from "../../content/games";
import { GameCard } from "../GameCard/GameCard";
import { SectionHeader } from "../common/SectionHeader";
import "./GamesGrid.css";

export function GamesGrid() {
  return (
    <section className="section games-grid-section" id="games" aria-labelledby="games-title">
      <div className="section-inner">
        <SectionHeader
          kicker={{ zh: "World Catalogue", en: "World Catalogue" }}
          title={{ zh: "游戏列表", en: "Games" }}
          intro={{
            zh: "每个项目都从角色、地点和一段未完成的情绪开始",
            en: "Every project begins with characters, places, and an unfinished feeling",
          }}
        />
        <div className="games-grid">
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
