# Portfolio d’Amina Gaddour

Portfolio one-page bilingue présentant mon parcours, mes compétences et mes projets en développement logiciel, intelligence artificielle.

## Stack

- React 19 et Vite 8
- Framer Motion
- React Icons
- CSS responsive personnalisé

## Fonctionnalités

- Français et anglais avec préférence mémorisée
- Thèmes clair et sombre
- Navigation responsive et suivi de la section active
- Mise en page testée du mobile 320 px aux grands écrans desktop
- Filtres de projets, animations accessibles et téléchargement du CV
- Liens vers les dépôts GitHub des projets disponibles

## Développement

```bash
npm install
npm run dev
```

## Validation et build

```bash
npm run lint
npm run test
npm run build
npm run preview
```

## Structure

```text
public/                 Images, certificats et CV
src/components/         Sections et composants React
src/data/               Contenu du portfolio et traductions
src/hooks/              Gestion du thème et de la langue
src/styles/             Styles globaux et responsive design
.github/workflows/      Validation continue
```

## Déploiement GitHub Pages

Vite utilise le chemin de base `/Software-Engineering-Portfolio/`. Le build produit dans `dist/` est compatible avec :

https://amina-gaddour.github.io/Software-Engineering-Portfolio/

La CI valide les pull requests avec `npm ci`, `npm run lint`, `npm run test` et `npm run build`. Sur chaque push vers `main`, le workflow GitHub Pages exécute les mêmes validations avant toute publication.

## Sécurité frontend

Ce dépôt ne doit contenir aucun secret. Toutes les variables préfixées par `VITE_` sont intégrées au bundle et deviennent publiques dans le navigateur. Une clé privée destinée à une API doit être conservée dans un backend ou une fonction serverless, jamais dans React. Le fichier `.env.example` ne contient que de la documentation et des valeurs fictives.

Le portfolio publie volontairement les coordonnées professionnelles, la localisation générale et le CV présents dans `src/data/portfolioData.js` et `public/`.
