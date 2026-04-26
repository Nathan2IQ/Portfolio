# ✅ Checklist Déploiement - nathandelange.com

Guide ultra-rapide pour déployer ton portfolio sur OVH.

---

## 📋 **Étape par étape**

### **1. Créer les images** (15 min)

- [ ] **Open Graph** : Crée `og-image.jpg` sur [Canva](https://canva.com) ou [Favicon.io](https://favicon.io)
  - Dimensions : 1200 x 630px
  - Contenu : "Nathan Delange - Développeur Frontend"
  - Place dans `public/og-image.jpg`
  - 📖 **Voir détails :** [GUIDE-IMAGES.md](GUIDE-IMAGES.md)

- [ ] **Favicons** : Génère sur [Favicon.io](https://favicon.io)
  - Entre "D" ou "ND", choisis les couleurs
  - Télécharge le ZIP
  - Copie tous les `.ico` et `.png` dans `public/`
  - 📖 **Voir détails :** [GUIDE-IMAGES.md](GUIDE-IMAGES.md)

---

### **2. Build le projet** (1 min)

```bash
npm run build
```

✅ Vérifie que `dist/` contient bien tous les fichiers (index.html, assets/, og-image.jpg, etc.)

---

### **3. Commander l'hébergement OVH** (10 min)

- [ ] Va sur [ovh.com](https://www.ovhcloud.com/fr/hosting/)
- [ ] Commande **Hébergement Web Perso** (2-3€/mois)
- [ ] Commande le domaine **nathandelange.com** (~10€/an)
- [ ] Active le **SSL Let's Encrypt gratuit** dans l'espace client
- [ ] 📖 **Voir détails :** [DEPLOIEMENT-OVH.md](DEPLOIEMENT-OVH.md)

---

### **4. Upload le site via FTP** (5 min)

#### Option A : FileZilla (interface graphique)

- [ ] Télécharge [FileZilla](https://filezilla-project.org/)
- [ ] Récupère tes identifiants FTP dans ton espace client OVH
- [ ] Connecte-toi (Hôte, Login, Mot de passe, Port 21)
- [ ] Upload **tout le contenu de `dist/`** vers `/www/`
  - ⚠️ Pas le dossier `dist/` lui-même, juste son contenu !
- [ ] 📖 **Voir détails :** [DEPLOIEMENT-OVH.md](DEPLOIEMENT-OVH.md)

#### Option B : Ligne de commande

```powershell
# Avec WinSCP ou lftp
# Voir DEPLOIEMENT-OVH.md pour les commandes
```

---

### **5. Activer HTTPS** (2 min)

Une fois le SSL activé sur OVH (attendre 15-30 min) :

- [ ] Ouvre le fichier `.htaccess`
- [ ] Décommente ces lignes (en bas du fichier) :

```apache
# Forcer HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

- [ ] Upload le `.htaccess` modifié sur le serveur (écrase l'ancien)

---

### **6. Tester le site** (5 min)

- [ ] Visite `https://nathandelange.com` (attends 5-10 min si juste uploadé)
- [ ] Vérifie :
  - ✅ HTTPS actif (cadenas vert)
  - ✅ Navigation fonctionne (#services, #projets, #contact)
  - ✅ Projets externes s'ouvrent
  - ✅ Formulaire fonctionne
  - ✅ Animations se déclenchent
  - ✅ Favicon visible dans l'onglet

- [ ] Teste les fichiers SEO :
  - `https://nathandelange.com/robots.txt` → Doit afficher le contenu
  - `https://nathandelange.com/sitemap.xml` → Doit afficher le XML

- [ ] Console navigateur (F12) : Pas d'erreurs 404

---

### **7. Google Search Console** (5 min)

- [ ] Va sur [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Ajoute la propriété `nathandelange.com`
- [ ] Vérifie avec le fichier HTML ou la meta tag
- [ ] Soumets le sitemap : `https://nathandelange.com/sitemap.xml`
- [ ] Demande l'indexation de la page d'accueil

---

### **8. Validation finale** (10 min)

- [ ] **Lighthouse audit** (Chrome DevTools → Lighthouse)
  - Cible : Performance > 90, SEO > 95, Accessibility > 90

- [ ] **PageSpeed Insights** : [pagespeed.web.dev](https://pagespeed.web.dev/)
  - Teste desktop et mobile

- [ ] **Open Graph** : [opengraph.xyz](https://www.opengraph.xyz/)
  - Vérifie que l'image og-image.jpg s'affiche

- [ ] **W3C Validator** : [validator.w3.org](https://validator.w3.org/)
  - Vérifie qu'il n'y a pas d'erreurs HTML

- [ ] **Test mobile** : Ouvre sur ton téléphone

---

## 🎯 **Checklist Finale**

Coche tout avant de dire "c'est fini" :

- [ ] og-image.jpg créée et uploadée
- [ ] Favicons créés et uploadés (tous les .png et .ico)
- [ ] Site uploadé sur OVH dans `/www/`
- [ ] HTTPS activé et redirection forcée
- [ ] `robots.txt`, `sitemap.xml`, `manifest.json` accessibles
- [ ] Google Search Console configuré
- [ ] Lighthouse > 90 en performance
- [ ] Test mobile réussi
- [ ] Formulaire de contact testé et fonctionnel
- [ ] Pas d'erreurs dans la console

---

## 📚 **Fichiers de référence**

- [GUIDE-IMAGES.md](GUIDE-IMAGES.md) → Comment créer og-image et favicons
- [DEPLOIEMENT-OVH.md](DEPLOIEMENT-OVH.md) → Guide complet OVH (FTP, SSL, troubleshooting)
- [OPTIMISATIONS.md](OPTIMISATIONS.md) → Récapitulatif des optimisations SEO/performance
- [DEPLOIEMENT.md](DEPLOIEMENT.md) → Autres options d'hébergement (Vercel, Netlify, GitHub Pages)

---

## ⏱️ **Temps estimé total**

- Images : **15 min**
- Build : **1 min**
- Commander OVH : **10 min**
- Upload FTP : **5 min**
- Config SSL : **2 min**
- Tests : **5 min**
- Google Search Console : **5 min**
- Validation : **10 min**

**Total : ~50 min** 🚀

---

## 🆘 **Problème ?**

**Le site ne s'affiche pas :**
→ Vérifie que `index.html` est dans `/www/`, pas dans `/www/dist/`

**Erreur 500 :**
→ Renomme `.htaccess` en `.htaccess.bak` temporairement pour tester

**HTTPS pas actif :**
→ Attends 30 min que le SSL se génère chez OVH

**Favicons pas visibles :**
→ Vide le cache (Ctrl+Shift+R) ou teste en navigation privée

**Open Graph image pas visible sur Facebook :**
→ Cache Facebook : [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)

---

## 🎉 **Mises à jour futures**

Pour mettre à jour le site après des modifications :

```bash
# 1. Modifie le code
# 2. Build
npm run build

# 3. Upload le contenu de dist/ via FTP (écrase les anciens fichiers)
```

**💡 Automatiser :** Crée un script PowerShell (voir [DEPLOIEMENT-OVH.md](DEPLOIEMENT-OVH.md))

---

✅ **C'est parti ! Bon déploiement !**
