// Icônes SVG minimalistes "ligne fine", dessinées à la main.
// Aucune dépendance externe — cohérent avec le principe
// "pas de librairie inutile" du projet YG Shooting.

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function PortfolioIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="3" y="4.5" width="18" height="14" rx="2.2" />
      <path d="M3 15.5l5-4.2 4 3 4.5-4.3L21 13.8" />
      <circle cx="8" cy="9" r="1.4" />
    </svg>
  );
}

export function ShootingIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M9 6.5l1.1-1.7a1.6 1.6 0 011.35-.8h1.1a1.6 1.6 0 011.35.8L15 6.5" />
      <rect x="3" y="6.5" width="18" height="12.5" rx="2.4" />
      <circle cx="12" cy="12.8" r="3.6" />
      <circle cx="17.6" cy="9.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SelectIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="3" y="4.5" width="14.5" height="14.5" rx="2.2" />
      <circle cx="8" cy="9.2" r="1.3" />
      <path d="M3 15.3l4.2-3.6 3.6 2.7 3-2.7 3.7 3.1" />
      <circle cx="19" cy="17" r="4" />
      <path d="M17.3 17l1.1 1.1 2.3-2.3" />
    </svg>
  );
}

export function DeliveryIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M12 3.3l7.8 4.2v9L12 20.7l-7.8-4.2v-9L12 3.3z" />
      <path d="M4.2 7.5L12 11.7l7.8-4.2" />
      <path d="M12 11.7v9" />
      <path d="M8 5.4l7.8 4.2" />
    </svg>
  );
}

export const iconMap = {
  portfolio: PortfolioIcon,
  shooting: ShootingIcon,
  select: SelectIcon,
  delivery: DeliveryIcon,
};
