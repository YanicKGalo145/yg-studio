# YG Studio

Hub central de l'écosystème numérique Y-G. Cette application ne fait qu'une
seule chose : présenter les applications Y-G existantes (Portfolio, YG
Shooting, YG Select, YG Delivery) dans une interface premium cohérente avec
leur identité visuelle, et permettre d'y accéder en un clic.

**YG Studio est totalement indépendante.** Elle ne modifie, n'appelle et ne
dépend d'aucun fichier, base de données ou configuration des autres projets
Y-G. Aucune clé Supabase, aucune authentification : ce n'est qu'un portail
de liens.

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm run dev
```

L'application démarre sur `http://localhost:5173` (ou le premier port
disponible).

## Modifier les URL des applications

Tout se passe dans **un seul fichier** :

```
src/data/apps.js
```

Chaque application y est définie ainsi :

```js
{
  id: "shooting",
  number: "02",
  name: "YG Shooting",
  description: "Découvrez et commandez les services de shooting à distance.",
  cta: "OUVRIR",
  url: "https://yg-shooting-v1.netlify.app",
  status: "active",       // "active" | "soon" | "maintenance"
  icon: "shooting",        // voir src/components/Icons.jsx
}
```

- Pour changer une URL : modifier le champ `url`.
- Pour ajouter une 5ᵉ application : ajouter un nouvel objet au tableau
  (et éventuellement une nouvelle icône dans `src/components/Icons.jsx`).
- Pour marquer une application "Bientôt disponible" : passer `status` à
  `"soon"` (ou `"maintenance"`). La carte devient alors non-cliquable et
  affiche un badge au lieu du bouton.

## Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`. Cette commande a été testée
et fonctionne sans erreur.

## Déploiement sur Netlify

1. Créer un nouveau site Netlify (glisser-déposer le dossier `dist/`, ou
   connecter le dépôt Git).
2. Si déploiement via Git :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Le fichier `public/_redirects` est déjà configuré pour le routage SPA.
4. Ne rien déployer d'autre : YG Studio n'a aucun besoin de variables
   d'environnement ni de base de données.

## Structure du projet

```
src/
├── components/
│   ├── Header.jsx      → marque "YG Studio"
│   ├── Hero.jsx         → section d'introduction
│   ├── AppCard.jsx      → carte individuelle d'une application
│   ├── AppsGrid.jsx     → grille des 4 (ou +) applications
│   ├── Footer.jsx       → pied de page
│   └── Icons.jsx        → icônes SVG faites main (aucune dépendance)
├── data/
│   └── apps.js           → configuration centrale (LE fichier à éditer)
├── App.jsx
├── main.jsx
└── styles.css             → design system (tokens repris de YG Shooting)
```

## Design system

Les tokens visuels (couleurs, typographies, rayons, animations) sont repris
à l'identique de YG Shooting pour garantir une cohérence de marque Y-G :

- **Or** : `#c9a86a` (principal) / `#ead19a` (clair, premium)
- **Fond** : `#09090a` avec glow radial `#191713`
- **Panneaux** : `#101012`
- **Texte** : `#f5f2ec` / atténué `#aaa7a0`
- **Typo** : Outfit (titres) + Plus Jakarta Sans (texte courant)
- **Rayons** : 18px (cartes), 14px (boutons), 999px (pilules)

## Ce qu'il reste à fournir (optionnel)

- Un favicon / logo Y-G officiel (aucun logo n'existait dans YG Shooting au
  moment de l'analyse — la marque est donc en texte pour l'instant, comme
  dans les autres apps).
- L'URL de YG Delivery a été utilisée telle que fournie
  (`https://yg-delivery.netlify.app`) — à confirmer si l'app n'est pas
  encore réellement en ligne, auquel cas il vaut mieux passer son `status`
  à `"soon"` dans `src/data/apps.js`.
