# 🌐 Portfolio Nathan Delange

Portfolio personnel développé avec Vue.js, présentant mes services, projets et compétences en développement frontend.

**Site :** [nathandelange.com](https://nathandelange.com)

---

## 🚀 **Démarrage Rapide**

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvre automatiquement [http://localhost:5173](http://localhost:5173)

### Build Production

```bash
npm run build
```

Les fichiers optimisés sont dans `dist/`

### Prévisualiser le Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📚 **Documentation Complète**

- **[CHECKLIST.md](CHECKLIST.md)** → Checklist étape par étape pour le déploiement
- **[GUIDE-IMAGES.md](GUIDE-IMAGES.md)** → Comment créer l'image Open Graph et les favicons
- **[DEPLOIEMENT-OVH.md](DEPLOIEMENT-OVH.md)** → Guide complet pour déployer sur OVH
- **[OPTIMISATIONS.md](OPTIMISATIONS.md)** → Récapitulatif des optimisations SEO/performance
- **[DEPLOIEMENT.md](DEPLOIEMENT.md)** → Autres options (Vercel, Netlify, GitHub Pages)

---

## 🛠️ **Stack Technique**

- **Framework :** Vue 3.5.31
- **Build Tool :** Vite 8.0.3
- **Routing :** Vue Router 5.0.4
- **Animations :** Vanilla Tilt 1.8.1
- **Formulaire :** Formspree
- **Fonts :** Google Fonts (Syne, JetBrains Mono)

---

## 📂 **Structure du Projet**

```
portfolio/
├── public/               # Assets statiques
│   ├── favicon.ico
│   ├── og-image.jpg     # À créer
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/          # CSS globaux
│   ├── components/      # Composants Vue
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── Services.vue
│   │   ├── Projects.vue
│   │   ├── Contact.vue
│   │   ├── ContactForm.vue
│   │   ├── Footer.vue
│   │   └── ScrollToTop.vue
│   ├── router/          # Configuration Vue Router
│   ├── views/           # Pages
│   ├── App.vue
│   └── main.js
├── index.html           # HTML principal avec meta SEO
├── vite.config.js       # Configuration Vite optimisée
├── .htaccess            # Configuration Apache (pour OVH)
└── package.json
```

---

## ✨ **Fonctionnalités**

- ✅ Navigation fluide avec ancres (#services, #projets, #contact)
- ✅ Animations au scroll avec IntersectionObserver
- ✅ Effet 3D sur la carte service principale (Vanilla Tilt)
- ✅ Formulaire de contact avec validation en temps réel
- ✅ Bouton "Retour en haut" animé
- ✅ Loading spinner sur les liens externes
- ✅ Design responsive (desktop, tablette, mobile, 320px)
- ✅ SEO optimisé (meta tags, Open Graph, Twitter Cards, Structured Data)
- ✅ PWA ready (manifest.json)
- ✅ Performance optimisée (code splitting, fonts optimisées, cache)

---

## 🎯 **Optimisations Implémentées**

### SEO

- Meta tags complets (description, keywords, author, robots)
- Open Graph et Twitter Cards
- Structured Data JSON-LD (Schema.org Person & WebSite)
- Sitemap XML et robots.txt
- URL canonique

### Performance

- Code splitting (vendor chunks séparés)
- Fonts optimisées (uniquement Syne + JetBrains Mono)
- Minification avec esbuild
- CSS code splitting
- Compression Gzip via .htaccess
- Cache optimisé (1 an pour assets, 0 pour HTML)

### Accessibilité

- Attributs ARIA (navigation, labels)
- Rôles sémantiques (banner, navigation)
- Contraste des couleurs optimisé

---

## 🌈 **Palette de Couleurs**

```css
--violet: #7b6cff /* Primaire */ --cyan: #0affe1 /* Secondaire */ --bg: #08080f /* Fond */
  --white: #ffffff /* Texte */ --border: #18181e /* Bordures */;
```

---

## 📱 **Responsive**

Breakpoints :

- Desktop : > 1024px
- Tablette : 768px
- Mobile : 425px
- Petit mobile : 320px

---

## 🔧 **Configuration Avancée**

### Environnement de développement recommandé

**IDE :**

- [VS Code](https://code.visualstudio.com/)
- Extension : [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

**Browser DevTools :**

- [Vue.js DevTools (Chrome)](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Vue.js DevTools (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

---

## 🚀 **Déploiement**

### Option 1 : OVH (Recommandé pour ce projet)

Voir [DEPLOIEMENT-OVH.md](DEPLOIEMENT-OVH.md) pour le guide complet.

**Résumé :**

1. Build le projet : `npm run build`
2. Upload le contenu de `dist/` via FTP vers `/www/`
3. Active le SSL Let's Encrypt
4. Décommente la redirection HTTPS dans `.htaccess`

### Option 2 : Vercel / Netlify

Voir [DEPLOIEMENT.md](DEPLOIEMENT.md)

---

## 📊 **Performance Cible**

**Lighthouse Score :**

- Performance : > 90
- SEO : > 95
- Accessibility : > 90
- Best Practices : > 90

**Bundle Size (après build) :**

- vendor-vue.js : ~85 KB (Vue + Router)
- vendor-tilt.js : ~9 KB (Vanilla Tilt)
- CSS : ~20 KB
- Total : < 200 KB (gzippé)

---

## 🔗 **Liens Utiles**

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/)

---

## 📄 **Licence**

© 2026 Nathan Delange - Tous droits réservés

---

## 🆘 **Support**

Pour toute question ou problème :

- 📧 Email : delange.dev@gmail.com
- 🌐 Site : [nathandelange.com](https://nathandelange.com)

---

✨ **Développé avec passion et café ☕**
