# CV Immersif 3D - Gregory Nicolle

**Expérience Interactive de CV en WebGL** - React, Three.js, Vite, GSAP

---

## Presentation

**CV Immersif** est une application web interactive qui presente le profil developpeur de Gregory Nicolle (artkabis) dans un environnement 3D immersif. Les recruteurs peuvent explorer les differentes sections du CV en scrollant, tout en interagissant avec la scene 3D.

### Sections du CV

| # | Section | Couleur | Description |
|---|---------|---------|-------------|
| 1 | **Boot** | Vert (#00ff00) | Introduction / Initialisation |
| 2 | **Identity** | Cyan (#00ffc8) | Profil developpeur |
| 3 | **Skills** | Violet (#8a2be2) | Competences techniques |
| 4 | **Experience** | Magenta (#ff00ff) | Parcours professionnel |
| 5 | **Projects** | Bleu (#00c8ff) | Projets en vedette |
| 6 | **Achievements** | Or (#ffd700) | Trophees et recompenses |
| 7 | **Lab** | Rose (#ff0080) | Playground interactif |
| 8 | **Contact** | Vert (#00ff7f) | Informations de contact |

---

## Fonctionnalites

### Navigation & UI

- **Scroll immersif** - Navigation fluide entre les 8 sections
- **Scene 3D temps reel** - Grille, etoiles, nebuleuse, anneaux
- **Post-processing cinematographique** - Bloom, aberration chromatique, vignette
- **Themes dynamiques** - Couleurs qui changent selon la section

### Easter Eggs

Des secrets sont caches dans l'application :

- **Konami Code** : Up Up Down Down Left Right Left Right B A
- **Taper "hire"** : Message special
- **Taper "coffee"** : Animation cafe
- **Taper "sudo"** : Mode admin
- **Cliquer 10x sur le logo** : Effet neon
- **Secouer la souris** : Effet glitch
- **Rester inactif 30s** : Message surprise

### Interactions

| Touche | Action |
|--------|--------|
| **Scroll** | Naviguer entre sections |
| **Clic** | Creer objets 3D |
| **G** | Inverser gravite |
| **A** | Mode attraction |
| **T** | Ralenti temporel |
| **R** | Afficher radar |
| **M** | Audio on/off |
| **C** | Nettoyer scene |
| **Espace** | Big Bang |
| **Ctrl+G** | Parametres graphiques |

---

## Stack Technique

| Technologie | Role |
|-------------|------|
| **React 18** | Components et hooks |
| **Vite** | Build et dev server |
| **Three.js** | Rendu 3D WebGL |
| **GSAP + ScrollTrigger** | Animations |
| **Rapier** | Physique (WASM) |
| **Web Audio API** | Audio procedural |

---

## Installation

```bash
# Installation des dependances
npm install

# Lancement en dev
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

---

## Structure du Projet

```
cv-immersive/
├── src/
│   ├── components/       # Composants React UI
│   │   ├── Card.jsx     # Carte de contenu CV
│   │   ├── EasterEggNotification.jsx
│   │   └── ...
│   ├── data/
│   │   ├── cv-data.json      # Donnees CV (editable)
│   │   ├── cvDataLoader.js   # Loader avec helpers
│   │   └── cvSections.js     # Sections legacy
│   ├── engines/          # Moteurs (audio, physique)
│   ├── utils/
│   │   └── EasterEggManager.js  # Gestion Easter Eggs
│   ├── styles/           # CSS modulaire
│   └── App.jsx           # Composant principal
├── index.html
├── package.json
└── vite.config.js
```

---

## Modification du CV

Pour mettre a jour votre CV, editez simplement le fichier `src/data/cv-data.json` :

```json
{
  "profile": {
    "name": "Gregory Nicolle",
    "title": "Full-Stack Engineer & Tech Lead",
    "experience": "10+ years"
  },
  "skills": {
    "categories": [...]
  },
  "projects": {
    "featured": [...]
  }
}
```

Les changements seront reflechis apres un rebuild.

---

## Auteur

**Gregory Nicolle** (artkabis)
- GitHub: [https://github.com/artkabis](https://github.com/artkabis)
- LinkedIn: [https://linkedin.com/in/artkabis](https://linkedin.com/in/artkabis)

---

## License

MIT License
