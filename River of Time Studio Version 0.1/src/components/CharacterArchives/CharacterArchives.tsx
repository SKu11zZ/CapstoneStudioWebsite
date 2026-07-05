import { characters } from "../../data/characters";
import { sectionCopies } from "../../data/siteContent";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { SectionHeading } from "../SectionHeading";

export function CharacterArchives() {
  return (
    <section className="page-section archive-section" id="characters">
      <SectionHeading copy={sectionCopies.characters} align="center" />
      <div className="characters-grid">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </section>
  );
}
