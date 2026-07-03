import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Info from "./components/Info";
import Reglamento from "./components/Reglamento";
import AseoItems from "./components/AseoItems";
import Precampamento from "./components/Precampamento";
import Payment from "./components/Payment";
import Gallery from "./components/Gallery";
import Activities from "./components/Activities";
import FinalCTA from "./components/FinalCTA";
import content from "./content/content.json";

function App() {
  return (
    <div
      style={{
        background: "#0a0a0f",
        color: "#f5ede0",
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Hero data={content.hero} />
      <About data={content.about} />
      <Info data={content.info} />
      <Reglamento data={content.reglamento} />
      <AseoItems data={content.aseo} />
      <Precampamento data={content.precampamento} />
      <Payment data={content.payment} />
      <Gallery data={content.gallery} />
      <Activities data={content.activities} />
      <FinalCTA data={content.ctaFinal} />
    </div>
  );
}

export default App;
