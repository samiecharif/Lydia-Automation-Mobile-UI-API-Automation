# Lydia Automation — Framework de Tests Mobile UI & API

Ce projet inclut :

- Tests Mobile UI (WebdriverIO + Appium + Cucumber + POM)
- Tests API (Mocha + Chai + Axios)
- Deux rapports HTML distincts (UI et API)
- Architecture maintenable et prête pour une CI

#  PARTIE 1 — Tests Mobile UI
# Scénario automatisé

-Lancer l'application.
Faire défiler le carrousel (sans utiliser « Skip »).
-Rechercher “Lydia”.
-Faire défiler jusqu'à la ville “Lydia” et fermer le popup.
-Changer la langue du site en Français.
-Faire défiler jusqu’en bas de la page.
-Cliquer sur “Crésus” et vérifier la navigation.

# Stack technique

-WebdriverIO 8
-Appium 2 
-Cucumber 
-TypeScript
-Page Object Model 
-Allure Report

# Structure du projet Mobile

mobile/
│
├── apps/           # APK et assets mobiles
├── features/       # Scénarios Gherkin
├── pages/          # Page Object Model
├── steps/          # Définition des steps Cucumber
└── utils/          # Fonctions utilitaires

# Lancer les tests Mobile
npm run test

# Générer le rapport HTML Mobile
npm run report

Le rapport Allure s’ouvrira automatiquement.

# PARTIE 2 — Tests API
# Scénario automatisé

| Méthode  | Endpoint     | Description                   |
| -------- | ------------ | ----------------------------- |
| **POST** | `/users`     | Création d'un utilisateur     |
| **GET**  | `/users/:id` | Récupération d’un utilisateur |

Assertions implémentées :

- Code HTTP
- Validation du corps JSON
- Types des champs
- Conditions (existence, non nullité…)

 # Stack technique

-Mocha (Test runner)
-Chai (Assertions)
-Axios (HTTP client)
-TypeScript
-Rapport Allure API

# Structure du projet API

api/
│
├── config/      # Client axios, URLs, helpers
├── helpers/     # Fonctions utilitaires API
└── tests/       # Tests Mocha/Chai en TypeScript

# Lancer les tests API
npm run test:api

# Générer le rapport API
npm run report:api

# Générer le rapport API
npm run report:api

# Scripts disponibles
| Script               | Description            |
| -------------------- | ---------------------- |
| `npm run test`       | Exécuter les tests UI  |
| `npm run report`     | Générer le rapport UI  |
| `npm run test:api`   | Exécuter les tests API |
| `npm run report:api` | Générer le rapport API |

# Installation de l’environnement
# Prérequis
-Node.js 18+
-Java JDK
-Android SDK + ADB
-Appium 2.x
-Un émulateur Android actif

# Organisation du dépôt

lydia-automation/
│
├── mobile/               # Tests Mobile UI
├── api/                  # Tests API
├── reports/              # Sortie des rapports HTML
├── tsconfig.api.json     # Config TypeScript API
├── tsconfig.mobile.json  # Config TypeScript Mobile
├── package.json          # Scripts + dépendances
└── wdio.conf.js          # Configuration WebdriverIO

# Livrables fournis
- Framework UI complet
- Framework API complet
- Rapport HTML UI
- Rapport HTML API
- Architecture POM + Gherkin
- TypeScript sur les deux frameworks

  
