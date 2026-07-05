import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { FloatingProgressNav } from "./components/FloatingProgressNav/FloatingProgressNav";
import { Hero } from "./components/Hero/Hero";
import { FeaturedGame } from "./components/FeaturedGame/FeaturedGame";
import { AboutStudio } from "./components/AboutStudio/AboutStudio";
import { GamesGrid } from "./components/GamesGrid/GamesGrid";
import { DevlogSection } from "./components/DevlogSection/DevlogSection";
import { TeamSection } from "./components/TeamSection/TeamSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import { useLanguage } from "./i18n/LanguageContext";
import { seo } from "./data/siteContent";

export default function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = seo.title[language];

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    description?.setAttribute("content", seo.description[language]);
  }, [language]);

  return (
    <div className="site-shell">
      <Header />
      <FloatingProgressNav />
      <main>
        <Hero />
        <FeaturedGame />
        <AboutStudio />
        <GamesGrid />
        <DevlogSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
