import { useEffect } from "react";
import { CharacterArchives } from "./components/CharacterArchives/CharacterArchives";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { FeaturedProject } from "./components/FeaturedProject/FeaturedProject";
import { Footer } from "./components/Footer/Footer";
import { GamesGrid } from "./components/GamesGrid/GamesGrid";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { PlayerRecruitment } from "./components/PlayerRecruitment/PlayerRecruitment";
import { TeamSection } from "./components/TeamSection/TeamSection";
import { TechNotes } from "./components/TechNotes/TechNotes";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("main > section");
    sections.forEach((section) => section.classList.add("reveal-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <TechNotes />
        <GamesGrid />
        <CharacterArchives />
        <PlayerRecruitment />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
