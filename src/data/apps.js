// =========================================
// CONFIGURATION CENTRALE DES APPLICATIONS Y-G
// =========================================
// C'est le SEUL endroit à modifier pour changer une URL,
// une description, un statut ou ajouter une 5e application.
//
// status possibles : "active" | "soon" | "maintenance"

export const apps = [
  {
    id: "portfolio",
    number: "01",
    name: "Portfolio",
    description: "Découvrez mon univers créatif et mes réalisations.",
    cta: "VISITER",
    url: "https://yanickgalo.netlify.app",
    status: "active",
    icon: "portfolio",
  },
  {
    id: "shooting",
    number: "02",
    name: "YG Shooting",
    description:
      "Découvrez et commandez les services de shooting à distance.",
    cta: "OUVRIR",
    url: "https://yg-shooting-v1.netlify.app",
    status: "active",
    icon: "shooting",
  },
  {
    id: "select",
    number: "03",
    name: "YG Select",
    description: "Sélectionnez facilement vos photos dans votre galerie.",
    cta: "OUVRIR",
    url: "https://yg-select.netlify.app",
    status: "active",
    icon: "select",
  },
  {
    id: "delivery",
    number: "04",
    name: "YG Delivery",
    description: "Recevez et consultez vos livraisons numériques.",
    cta: "OUVRIR",
    url: "https://yg-delivery.netlify.app",
    status: "active",
    icon: "delivery",
  },
];
