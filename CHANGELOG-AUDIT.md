# Changelog — Corrections Audit Vague 1
Monument Paul Biya — Site officiel
Date : 1er juillet 2026

## 🔴 Corrections critiques (bloquantes)

- **Build de production réparé.** 60 imports d'images vers `src/assets/` pointaient vers des fichiers
  absents du dépôt Git (Index.tsx : 7, Histoire.tsx : 7, Boutique.tsx : 53). Le site ne pouvait pas être
  déployé. `npm run build` échouait → passe désormais.
- **14 placeholders temporaires** créés pour Accueil/Histoire (`src/assets/*.jpg`), à remplacer par les
  photos réelles fournies par le client (mêmes noms de fichiers = aucune modification de code nécessaire
  au remplacement).
- **53 images produits Boutique** remplacées par des cartes vectorielles (icône + motif géométrique aux
  couleurs nationales), en lieu et place de photos inexistantes — aucune dépiction de personne réelle.

## 🎨 Identité visuelle

- Refonte complète des tokens de couleur (`src/index.css`, `tailwind.config.ts`) sur la charte officielle
  du drapeau camerounais : Vert #007A33, Rouge #CE1126, Jaune #FCD116, Or #C9A227.
- Header : couleurs jaunes codées en dur remplacées par les tokens `national-*`.
- ~14 fichiers pages/composants : conversion systématique de la famille bleu/sky (utilisée sans cohérence
  sur 100% des pages) vers la famille verte nationale (`emerald-*` + accents `national-*`).
- Correction de 7 nuances Tailwind invalides dans Histoire.tsx (`blue-450`, `blue-720`, `blue-890`...
  n'existent pas dans la palette standard = rendu silencieusement cassé).

## 🛠️ Fonctionnel

- Formulaire de Contact : aucune logique de soumission n'existait. Ajout de validation (nom/email/message
  requis, format email), état contrôlé, et déclenchement d'un email pré-rempli vers
  info@monumentpaulbiya.cm (solution transitoire — un vrai backend est recommandé, voir notes).
- Boutique : bouton "Ajouter au panier" sans effet → état de panier fonctionnel avec compteur flottant et
  retour visuel par produit.
- Liens réseaux sociaux du Header (href="#") → liens réels avec target="_blank" sécurisé
  (rel="noopener noreferrer") — URLs provisoires à confirmer avec le client.

## ⚠️ Points en attente (prochaines vagues)

- 152 références /lovable-uploads/... à travers le site dépendent du CDN externe Lovable (dossier local
  vide) — un filet de sécurité visuel a été ajouté (Lot 2), mais la vraie solution reste de rapatrier ces
  fichiers dans le dépôt.
- 12 images Unsplash génériques (Restaurant, Éducation, Accueil) à remplacer par de vraies photos.
- Contenu chiffré (PIB, statistiques) non sourcé — à référencer (INS Cameroun, Banque Mondiale, PRC).

---

# Lot 2 — Corrections complémentaires (même session)

## Visite Virtuelle 360° — intégration technique réelle
- Nouveau composant `src/components/Panorama360.tsx` basé sur **Pannellum** (chargé via CDN pour ne pas
  alourdir le bundle applicatif — voir `index.html`).
- Remplace le bloc statique factice de `Visite.tsx` par une visionneuse fonctionnelle : navigation
  souris/tactile, boussole, points d'intérêt cliquables, multi-scènes (Entrée → Hall).
- **Panoramas de démonstration** (images libres de Pannellum) en attente des vraies prises de vue du
  Monument — remplacement par simple changement de `imageUrl`, aucune autre modification de code requise.
- Bandeau "Version de démonstration technique" affiché à l'utilisateur pour ne jamais induire en erreur
  sur l'authenticité des scènes actuelles.

## Performance — code-splitting par route
- `App.tsx` : toutes les pages passent en `React.lazy()` + `Suspense`.
- **Bundle initial réduit de 47%** : 712 Ko → 341 Ko (190 Ko → 109 Ko gzip). L'avertissement Vite de
  dépassement de seuil (500 Ko) a disparu.
- Chaque page se télécharge désormais à la demande (14 chunks indépendants, 0.6 à 76 Ko chacun).

## Robustesse des images externes
- `src/lib/imageFallback.ts` : filet de sécurité global qui intercepte les échecs de chargement des
  152 images `/lovable-uploads/...` et les remplace par un visuel de repli aux couleurs institutionnelles
  (au lieu de l'icône "image cassée" du navigateur). Activé dans `main.tsx`.
- Ne résout pas le problème de fond (souveraineté des assets) mais élimine l'impact visuel immédiat.

## SEO / Réseaux sociaux
- Image Open Graph par défaut de Lovable (`lovable.dev/opengraph-image...`) remplacée par un visuel
  institutionnel généré (`public/og-image.jpg`, couleurs nationales).
- Meta description enrichie avec les mots-clés stratégiques (visite virtuelle 360°, Sangmélima).
- `<title>` optimisé pour le référencement.

## Qualité de code
- 0 erreur ESLint introduite par ces corrections (Panorama360.tsx entièrement typé, sans `any`).
- Build de production validé après chaque modification.

---

# Lot 3 — Cybersécurité (Axe 4)

## Dépendances
- **20 vulnérabilités détectées** (10 hautes, 8 modérées, 2 faibles) via `npm audit`, dont une faille
  haute sévérité de type Path Traversal (Rollup) et un risque XSS (PostCSS).
- **16 corrigées automatiquement** sans rupture (`npm audit fix`).
- **4 restantes (3 modérées, 1 haute)** nécessitent une montée de version majeure de Vite (5→8+),
  jugée trop risquée à appliquer sans supervision humaine (breaking change potentiel sur toute la
  chaîne de build). La vulnérabilité restante concerne uniquement le **serveur de développement local**
  (`npm run dev`) — elle n'affecte pas le site publié en production. Recommandation : planifier cette
  montée de version lors d'une fenêtre de maintenance dédiée, avec tests de non-régression complets.
- Effet de bord détecté et corrigé : `npm audit fix` a cassé la compatibilité ESLint/typescript-eslint
  (crash de l'outil de lint) — mis à jour vers les dernières versions compatibles.

## En-têtes de sécurité
- Ajout d'une **Content-Security-Policy** dans `index.html`, calibrée strictement sur les domaines
  réellement appelés par le site (Google Fonts, Pannellum/jsDelivr, Unsplash) — aucun joker générique.
- Ajout de `referrer-policy: strict-origin-when-cross-origin`.
- **Limite technique documentée** : `frame-ancestors` et `X-Frame-Options` ne sont pas applicables via
  balise `<meta>` (restriction du spec W3C) — nécessitent une configuration serveur. À demander au
  support Lovable, ou à mettre en place lors d'une éventuelle migration d'hébergement.

## Vérifications complémentaires
- Aucun secret/clé API en dur dans le code source (recherche exhaustive).
- `.env` correctement exclu du dépôt Git (déjà en place).

## Recommandations non implémentées (nécessitent un backend, hors périmètre actuel)
- Rate limiting sur le formulaire de contact (protection anti-spam/déni de service).
- Validation et sanitisation côté serveur des soumissions (actuellement client-side uniquement).
- HTTPS strict (HSTS) — dépend de la configuration d'hébergement Lovable, à vérifier.

