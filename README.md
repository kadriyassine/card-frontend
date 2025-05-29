
# Jeu de cartes - Frontend React + TypeScript

---

## Description

Cette application React affiche une main de cartes non triée et triée, récupérée depuis une API REST.  
Le projet utilise TypeScript pour un typage strict et des tests unitaires pour garantir la fiabilité.

---

## Fonctionnalités principales

- Chargement asynchrone des cartes via API
- Affichage clair des cartes (non triées / triées)
- Gestion des états de chargement et d’erreur
- Tests unitaires avec couverture

---

## Technologies utilisées

- React 19
- TypeScript 5.x
- Vite (outil de build rapide)
- Vitest (framework de test)
- Testing Library (tests centrés utilisateur)
- TailwindCSS (pour le style, optionnel)

---

## Installation

1. Cloner le dépôt
```bash
git clone https://github.com/kadriyassine/card-frontend
cd card-frontend
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer l’URL de l’API dans `.env` (optionnel, par défaut localhost:8000)
```
VITE_API_URL=http://localhost:8000
```

---

## Scripts disponibles

- `npm run dev` : démarre le serveur de développement Vite
- `npm run build` : compile le projet pour la production
- `npm run preview` : prévisualise la version buildée
- `npm run lint` : lance ESLint pour vérifier la qualité du code
- `npm run test` : lance les tests unitaires en mode watch avec Vitest
- `npm run test:coverage` : lance les tests et génère un rapport de couverture

---

## Structure du projet

```
src/
├── components/
│   ├── Card/             # Composant affichage d’une carte
│   ├── CardHand/         # Composant affichage d’une main de cartes
│   └── ...
├── services/
│   └── api.ts            # Fonctions d’appel à l’API
├── types.ts              # Types TypeScript globaux
├── App.tsx               # Composant principal de l’application
├── main.tsx              # Point d’entrée React
└── ...
```

---

## Types TypeScript

Les interfaces principales sont définies dans `src/types.ts` :

```ts
interface Card {
  color: 'Carreaux' | 'Cœur' | 'Pique' | 'Trèfle';
  value: string;
}

interface ApiResponse {
  unsorted: Card[];
  sorted: Card[];
}
```

---

## Tests unitaires

- Écrits avec Vitest + Testing Library
- Ciblent les composants clés : `App`, `Card`, `CardHand`
- Testent le rendu, le chargement, la gestion d’erreur et les interactions
- Utilisent les bonnes pratiques React (ex : `act()`, mocks API)

Pour lancer les tests :

```bash
npm run test
```

Pour générer un rapport de couverture :

```bash
npm run test:coverage
```

---

## Bonnes pratiques appliquées

- **Typage strict avec TypeScript** pour éviter les erreurs en développement
- **Séparation des responsabilités** : chaque composant fait une chose et la fait bien
- **Gestion claire des états** : loading, erreur, données chargées
- **Tests unitaires exhaustifs** garantissant la stabilité et la non-régression
- **Utilisation de hooks React** (`useState`, `useEffect`) pour gérer la logique de façon idiomatique
- **Modularité et réutilisabilité** des composants
- **Respect des règles React pour les tests** (wrapping dans `act()`)

---

## Améliorations futures

- Ajouter des tests d’intégration ou end-to-end (ex. Cypress)
- Ajouter gestion des utilisateurs / authentification
- Rendre l’interface responsive et accessible
- Optimiser les performances pour de grandes mains de cartes

---

## Contact

Développé par [Ton Nom]  
GitHub : [ton-github]  
Email : [ton-email]

---

Merci d’utiliser ce projet !  
N’hésite pas à contribuer ou à poser des questions.
