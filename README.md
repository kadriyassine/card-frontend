# 🃏 Card Game API

Ce projet Symfony propose une API RESTful permettant de générer une main aléatoire de cartes et de la trier selon des règles spécifiques.

---

## 🚀 Fonctionnalités

- Génération d'une main aléatoire de cartes (par défaut 10 cartes).
- Tri des cartes par couleur (ordre défini) puis par valeur.
- Utilisation d'Enums PHP 8.1+ pour les couleurs et les valeurs.
- API simple pour récupérer une main non triée et triée.
- Couverture de tests unitaires avec PHPUnit.

---

## 📦 Technologies

- **PHP 8.1+**
- **Symfony 6+**
- **PHPUnit** (tests unitaires)
- **Enums** pour typage strict et logique métier encapsulée

---

## 🏗 Architecture du projet

card-game-api/
│
├── src/
│ ├── Controller/
│ │ └── CardGameController.php # Routes & réponses JSON
│ │
│ ├── Entity/
│ │ └── Card.php # Entité “Card”
│ │
│ ├── Enum/
│ │ ├── CardColor.php # Enum des couleurs + ordre
│ │ └── CardValue.php # Enum des valeurs + ordre
│ │
│ └── Service/
│ └── CardGameService.php # Génération & tri de la main
│
├── tests/
│ └── Service/
│ └── CardGameServiceTest.php # Tests unitaires
│
├── config/ # Configurations Symfony (routes, services…)
├── public/ # Front controller (index.php)
├── composer.json # Dépendances PHP
└── README.md # Documentation du projet


- **SOLID** : chaque classe a une responsabilité unique.
- **DI (Dependency Injection)** : Symfony injecte `CardGameService` dans le contrôleur.
- **Enums** : encapsulent la logique de tri directement dans `CardColor` et `CardValue`.
- **Tests** : isolés sur le service métier, couvrant cas normaux et limites.

---

## 🔧 Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-utilisateur/card-game-api.git
   cd card-game-api
2. **Installer les dépendances**
   ```bash
    composer install
   ```
3. **Démarrer le serveur Symfony**
    ```bash
    symfony server:start
   ```
4. **Accéder à l’API**
   ```bash
    GET http://localhost:8000/api/cards/generate
    ```
5. **🧪 Lancer les tests**
   ```bash
   php bin/phpunit
   ```
📚 Exemple de réponse JSON
   ```json
      {
      "unsorted": [
      { "color": "Pique",    "value": "Roi" },
      { "color": "Carreaux", "value": "AS" },
      ...
      ],
      "sorted": [
      { "color": "Carreaux", "value": "AS" },
      { "color": "Carreaux", "value": "2" },
      ...
      ]
      }
   ```
---
# Bonnes pratiques respectées
- Respect des principes SOLID

- Typage fort et logique encodée dans les Enums

- Séparation des responsabilités

- Tests unitaires couvrant cas normaux et limites


# 🚧 Améliorations futures

- Ajouter des tests d’intégration ou end-to-end (ex. Cypress)

- Mise en place une gestion des utilisateurs et authentification

- Ajouter la persistance des mains via Doctrine (optionnel)

## Contact

Développé par Kadri Yassine  
GitHub : https://github.com/kadriyassine  
Email : yesine.kadri@gmail.com

---
Lien Demo: https://www.loom.com/share/d977b115b31546f2b5f3f4dc62203ebf?sid=3f4535c6-dc62-42e2-9952-8196ae3ea386
---
Merci d’utiliser ce projet !  
N’hésite pas à contribuer ou à poser des questions.








