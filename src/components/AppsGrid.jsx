import { apps } from "../data/apps.js";
import AppCard from "./AppCard.jsx";

export default function AppsGrid() {
  return (
    <section className="section apps-section">
      <div className="apps-heading reveal">
        <p className="eyebrow">Explorez</p>
        <h2>Mes applications</h2>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </section>
  );
}
