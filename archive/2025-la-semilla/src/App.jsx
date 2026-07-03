import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VerseSection from "./components/VerseSection";
import About from "./components/About";
import Info from "./components/Info";
import Activities from "./components/Activities";
import Gallery from "./components/Gallery";
import AseoItems from "./components/AseoItems";
import Payment from "./components/Payment";
import Reglamento from "./components/Reglamento";
import FinalCTA from "./components/FinalCTA";
import content from "./content/content.json";
import aboutMarkdown from "./content/about.md?raw";
import { Icon } from "@iconify/react/dist/iconify.js";
function App() {
  // Sitio fijo en modo oscuro
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen font-body bg-gray-950 text-gray-100 selection:bg-emerald-500/30">
      <Navbar site={content.site} navbar={content.navbar} />
      <main>
        <Hero data={content.hero} />
        <VerseSection verse={content.verse} />
        <About aboutJson={content.about} aboutMarkdown={aboutMarkdown} />
        <Info info={content.info} />
        <Reglamento reglamento={content.reglamento} />
        <AseoItems aseo={content.aseo} />
        <Gallery gallery={content.gallery} />
        <Activities activities={content.activities} />
        <Payment />
        <FinalCTA data={content.ctaFinal} />
      </main>
      <footer className="py-10 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Camp La Semilla. Todos los derechos
          reservados.
        </p>
      </footer>
      <a
        href="https://drive.google.com/drive/folders/1Es36_ZpMAw_oiEU0SjVdg_BmKmxeuelx?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-emerald-600 active:scale-95 transition-all text-sm z-50 flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:bg-emerald-500/40 after:rounded-xl after:blur-lg after:animate-pulse"
      >
        <Icon icon="mdi:link" className="inline-block mr-2 text-xl" />
        Galería: La Semilla
      </a>
    </div>
  );
}

export default App;
