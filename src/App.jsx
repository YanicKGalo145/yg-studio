import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AppsGrid from "./components/AppsGrid.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page">
      <div className="shell">
        <Header />
        <Hero />
        <AppsGrid />
        <Footer />
      </div>
    </div>
  );
}
