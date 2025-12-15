
- Éviter la duplication : respecter le principe **DRY**.
- Éviter les fichiers de plus de 300 lignes.
- Préférer les **composants petits, cohérents et purement fonctionnels**.
- Toutes les nouvelles fonctionnalités doivent être modulaires et isolées.

---

# 2. Règles Tailwind CSS

- Toujours utiliser **Tailwind** pour le style.
- Jamais de CSS inline (sauf cas exceptionnel, non généré par défaut).
- Pas de fichiers `.css` sauf pour variables globales ou resets.
- Utiliser **classnames** ou équivalent pour les classes conditionnelles.
- Utiliser les **design tokens Tailwind** (spacing, typography, shadow, radius).
- Règles d’organisation Tailwind :
  - Structure : `layout → spacing → typography → colors → states → custom`
  - Exemple : `flex items-center justify-between gap-4 p-4 text-sm text-gray-600 bg-white shadow-md hover:bg-gray-50`

---

# 3. UI/UX Design — Standards à respecter

### Ligne directrice générale
Le design doit être :
- **simple**
- **clair**
- **lisible**
- **cohérent**
- conforme aux principes UI/UX modernes

### Règles UI
- Utiliser un **spacing généreux** (Tailwind `p-4`, `p-6`, `space-y-4`, etc.).
- Utiliser une **typographie hiérarchisée** (`text-2xl`, `text-lg`, `text-base`, etc.).
- Les composants doivent être :
  - espacés
  - alignés correctement
  - responsives (mobile-first)

### Règles UX
- Les actions dangereuses doivent être confirmées.
- Le feedback utilisateur est obligatoire :
  - loaders
  - skeletons
  - messages de succès/erreur
- Chaque interaction doit être compréhensible sans documentation.
- Utiliser des **états visuels** :
  - `hover:`
  - `active:`
  - `disabled:`

### Accessibilité
- Contrast ratio correct.
- Boutons suffisamment grands (`h-10` min).
- Labels obligatoires pour les inputs.
- ARIA si besoin.

---

# 4. Naming Conventions

### Fichiers & dossiers
- Dossiers : **kebab-case**
- Composants React/Vue : **PascalCase**
- Hooks : **useSomething**
- Fonctions utilitaires : **camelCase**
- Types/Interfaces : **PascalCase**

### Variables
- Toujours des noms descriptifs.
- Jamais de noms comme `data1` / `test` / `foo`.

---

# 5. TypeScript (si présent)

- Pas de `any`.
- Tous les composants doivent être typés.
- Les appels API doivent avoir des types explicites.
- Préférer les **types** plutôt que **interfaces** sauf pour les objets étendus.

---

# 6. API & Services

- Toutes les requêtes doivent passer par une instance Axios configurée.
- Jamais d’URL écrites en dur dans des composants.
- Le service doit gérer :
  - erreurs
  - validation minimale
  - transformation des données

---

# 7. Code Quality Rules

- Respecter les principes :
  - **SOLID**
  - **DRY**
  - **KISS**
  - **Open/Closed**

- Commentaires utilisés uniquement quand nécessaire, pas pour compenser un mauvais code.
- Toujours préférer la clarté à l’optimisation prématurée.

---

# 8. Composants UI communs

Créer ou réutiliser des composants communs pour :
- Buttons
- Modals
- Cards
- Form fields
- Layouts

Les composants communs doivent :
- être simples
- être génériques
- supporter les états (`loading`, `disabled`)
- permettre l’extension via props

---

# 9. Git & Commits

- Utiliser le format **Conventional Commits** :
  - `feat:`
  - `fix:`
  - `chore:`
  - `refactor:`
  - `style:`
  - `docs:`

---

# 10. Règles AI (important)

- Toujours respecter les règles ci-dessus **avant toute autre considération**.
- Toujours générer du code propre, modulaire et scalable.
- Ne jamais ignorer Tailwind.
- Ne jamais proposer des solutions non structurées.
- Toujours expliquer brièvement la logique quand une solution technique est proposée.

---

# Fin des règles
L’IA doit appliquer strictement ces directives à chaque interaction dans ce projet.
