import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { FeaturedGame } from "./components/FeaturedGame/FeaturedGame";
import { TechNotes } from "./components/TechNotes/TechNotes";
import { GamesGrid } from "./components/GamesGrid/GamesGrid";
import { CharacterArchive } from "./components/CharacterArchive/CharacterArchive";
import { PlaytestRecruitment } from "./components/PlaytestRecruitment/PlaytestRecruitment";
import { TeamSection } from "./components/TeamSection/TeamSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedGame />
        <TechNotes />
        <GamesGrid />
        <CharacterArchive />
        <PlaytestRecruitment />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
