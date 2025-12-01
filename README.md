# Lydia Automation — Framework de Tests Mobile UI & API

# Objectif du test technique

Ce projet répond au test demandé :

Créer un framework d’automatisation complet (Mobile UI + API)
avec Page Object Model, Gherkin, TypeScript et deux rapports HTML séparés.
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

# Lancer les tests Mobile UI

# Installer les dépendances
npm install

# Lancer les tests Appium + WebdriverIO
npm test

# Générer le rapport HTML Mobile
npm run report


# PARTIE 2 — Tests API

 # Stack technique

-Mocha (Test runner)
-Chai (Assertions)
-Axios (HTTP client)
-TypeScript
-Rapport Allure API

# Endpoints automatisés (ReqRes API)

  POST /users – Création d’un utilisateur
  GET /users/2 – Récupération d’un utilisateur existant

Les tests incluent :
-Status codes
-Validation du corps de réponse
-Vérification stricte des champs

# Structure du projet API

api/
  config/apiClient.ts        → Wrapper axios
  tests/reqres.spec.ts       → Tests GET + POST


# Lancer les tests API
npm run test:api

# Générer le rapport API
npm run report:api

# Rapports HTML (Allure)

Deux rapports séparés :
| Partie | Commande             | Dossier       |
| ------ | -------------------- | ------------- |
| UI     | `npm run report`     | `reports/ui`  |
| API    | `npm run report:api` | `reports/api` |

# Scripts utiles

"test": "npx wdio run wdio.conf.js",
"test:api": "tsx node_modules/mocha/bin/mocha.js api/tests/**/*.ts",
"report": "allure generate allure-results --clean && allure open",
"report:api": "allure generate allure-results-api --clean && allure open"

# gitignore inclus
-node_modules
-APK
-Allure results
-dist / build
-Logs Appium
-Fichiers système

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

  
