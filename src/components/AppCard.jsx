import { iconMap } from "./Icons.jsx";

export default function AppCard({ app, index }) {
  const Icon = iconMap[app.icon];
  const isActive = app.status === "active";

  const cardContent = (
    <>
      <div className="app-card-top">
        <span className="app-card-number">{app.number}</span>
        {Icon && (
          <span className="app-card-icon">
            <Icon />
          </span>
        )}
      </div>

      <h3 className="app-card-name">{app.name}</h3>
      <p className="app-card-desc">{app.description}</p>

      <div className="app-card-bottom">
        {isActive ? (
          <span className="app-card-cta">
            {app.cta}
            <span className="app-card-arrow" aria-hidden="true">
              →
            </span>
          </span>
        ) : (
          <span className="app-card-badge">
            {app.status === "maintenance"
              ? "Maintenance"
              : "Bientôt disponible"}
          </span>
        )}
      </div>
    </>
  );

  const style = { "--delay": `${index * 0.08}s` };

  if (!isActive) {
    return (
      <div className="app-card is-disabled reveal" style={style}>
        {cardContent}
      </div>
    );
  }

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="app-card reveal"
      style={style}
      aria-label={`${app.cta} — ${app.name}`}
    >
      {cardContent}
    </a>
  );
}
