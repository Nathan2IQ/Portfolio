# 🌐 Guide Déploiement OVH - nathandelange.com

Guide complet pour héberger ton portfolio sur OVH.

## 📋 Prérequis

- [ ] Compte OVH créé
- [ ] Domaine `nathandelange.com` acheté (sur OVH ou ailleurs)
- [ ] Accès FTP ou SSH à ton hébergement
- [ ] Portfolio builé (`npm run build`)

---

## 🛒 **Étape 1 : Choisir l'hébergement OVH**

### Options OVH recommandées :

#### **Option A : Hébergement Web Perso (2-3€/mois)**

✅ **RECOMMANDÉ pour ton portfolio**

- 100 Go de stockage
- 1 site web
- PHP, base de données (pas nécessaire pour ton cas)
- Certificat SSL Let's Encrypt **GRATUIT** inclus
- **Parfait pour un site statique Vue.js**

#### Option B : VPS (à partir de 3,50€/mois)

- Plus de contrôle (accès root)
- Configuration manuelle requise (Nginx, SSL, etc.)
- **Overkill pour un simple portfolio**
- Choisir seulement si tu veux apprendre la gestion serveur

**→ Pour commencer, prends l'hébergement Web Perso !**

---

## 🌍 **Étape 2 : Commander/configurer le domaine**

### Si tu achètes le domaine sur OVH :

1. **Va sur [ovh.com/fr/domaines](https://www.ovhcloud.com/fr/domains/)**
2. **Cherche** `nathandelange.com`
3. **Vérifie la disponibilité** (~8-15€/an pour un .com)
4. **Ajoute au panier** avec l'hébergement Web
5. **Passe commande**

### Si tu as déjà le domaine ailleurs :

1. **Transfère vers OVH** (optionnel)
2. **Ou pointe les DNS** vers les serveurs OVH :
   ```
   DNS1: dns200.anycast.me
   DNS2: ns200.anycast.me
   ```

---

## 🔧 **Étape 3 : Configuration de l'hébergement**

### Activer le SSL (HTTPS)

1. **Connecte-toi** à ton [espace client OVH](https://www.ovh.com/manager/)
2. **Va dans** `Web Cloud` → `Hébergements` → Ton hébergement
3. **Onglet** `Multisite`
4. **Sélectionne** `nathandelange.com`
5. **Coche** "Certificat SSL" → **SSL Gratuit (Let's Encrypt)**
6. **Active** → Attends 15-30 minutes pour la génération

### Forcer HTTPS

Une fois le SSL actif, ton fichier `.htaccess` (déjà créé) va forcer le HTTPS.

Il suffit de décommenter ces lignes dans `.htaccess` :

```apache
# Forcer HTTPS (décommenter après avoir configuré SSL)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

---

## 📤 **Étape 4 : Uploader le site (FTP)**

### Option A : FileZilla (Interface graphique, plus simple)

#### 1. Télécharge FileZilla

- [filezilla-project.org](https://filezilla-project.org/)
- Gratuit et multiplateforme

#### 2. Récupère tes identifiants FTP

- **Espace client OVH** → `Hébergements` → Ton hébergement
- **Onglet** `FTP-SSH`
- **Note :**
  - Serveur FTP : `ftp.cluster0XX.hosting.ovh.net` (exemple)
  - Login FTP : `ton-login`
  - Mot de passe : (celui que tu as défini)
  - Port : `21` (FTP) ou `22` (SFTP, plus sécurisé)

#### 3. Connecte-toi avec FileZilla

```
Hôte : ftp.ton-serveur.hosting.ovh.net
Utilisateur : ton-login-ftp
Mot de passe : ton-mot-de-passe
Port : 21
```

#### 4. Upload ton site

- **À gauche** : Navigue vers `C:\Perso\Portfolio\dist\`
- **À droite** : Navigue vers `/www/` (racine de ton site)
- **Sélectionne TOUT** le contenu de `dist/`
- **Glisse-dépose** vers le dossier `/www/`

**⚠️ IMPORTANT :**

- Upload le **CONTENU** de `dist/`, **PAS le dossier `dist/` lui-même**
- À la fin, dans `/www/`, tu dois voir :
  ```
  /www/
    ├── index.html
    ├── favicon.ico
    ├── og-image.jpg (quand tu l'auras créé)
    ├── manifest.json
    ├── robots.txt
    ├── sitemap.xml
    ├── .htaccess
    └── assets/
        ├── index-XXX.js
        ├── index-XXX.css
        └── vendor-XXX.js
  ```

### Option B : Ligne de commande (PowerShell/Terminal)

Si tu préfères la ligne de commande (plus rapide) :

```powershell
# Avec WinSCP (Windows)
# Ou avec lftp (Linux/Mac)

# Install lftp sur Windows (avec Chocolatey)
choco install lftp

# Puis :
lftp -u ton-login,ton-mot-de-passe ftp.ton-serveur.hosting.ovh.net
cd /www
mirror -R dist/ .
exit
```

---

## 🧪 **Étape 5 : Tester le déploiement**

### Vérifications :

1. **Visite** `https://nathandelange.com` (attends 5-10 min après l'upload)
2. **Vérifie que :**
   - ✅ Le site s'affiche correctement
   - ✅ HTTPS est actif (cadenas dans la barre d'adresse)
   - ✅ Les liens de navigation fonctionnent
   - ✅ Les projets externes s'ouvrent
   - ✅ Le formulaire fonctionne (Formspree)
   - ✅ Les animations se déclenchent

3. **Vérifie les fichiers SEO :**
   - `https://nathandelange.com/robots.txt` → Doit afficher le contenu
   - `https://nathandelange.com/sitemap.xml` → Doit afficher le XML
   - `https://nathandelange.com/manifest.json` → Doit afficher le JSON

4. **Ouvre la console du navigateur** (F12)
   - Pas d'erreurs 404
   - Tous les assets chargent correctement

---

## 🔄 **Étape 6 : Mises à jour futures**

### Workflow pour mettre à jour le site :

```bash
# 1. Fais tes modifications dans le code
# 2. Build le projet
npm run build

# 3. Upload le contenu de dist/ via FTP
# (avec FileZilla ou en ligne de commande)
```

**💡 Automatiser avec un script PowerShell :**

Crée un fichier `deploy.ps1` :

```powershell
# deploy.ps1
Write-Host "🏗️ Building..." -ForegroundColor Cyan
npm run build

Write-Host "📤 Uploading to OVH..." -ForegroundColor Cyan
# Utilise WinSCP ou lftp pour l'upload automatique
# Exemple avec WinSCP :
# winscp.com /command "open ftp://ton-login:ton-pass@ftp.serveur.ovh.net" "synchronize remote C:\Perso\Portfolio\dist /www" "exit"

Write-Host "✅ Deployment complete!" -ForegroundColor Green
```

Puis :

```bash
.\deploy.ps1
```

---

## 📊 **Étape 7 : Google Search Console**

### Soumettre ton site à Google :

1. **Va sur** [search.google.com/search-console](https://search.google.com/search-console)
2. **Ajoute une propriété** : `nathandelange.com`
3. **Méthode de vérification** :
   - **Option 1 (recommandé)** : Upload du fichier HTML dans `/www/`
   - **Option 2** : Ajoute la meta tag dans `<head>`
4. **Soumets le sitemap** : `https://nathandelange.com/sitemap.xml`
5. **Demande l'indexation** de la page d'accueil

---

## 🎯 **Étape 8 : Optimisations OVH**

### Activer la mise en cache OVH

OVH propose une option **CDN** (payante, mais pas nécessaire pour un portfolio).

Les optimisations dans ton `.htaccess` suffisent amplement.

### Vérifier la compression

**Teste si Gzip est actif :**

1. Va sur [giftofspeed.com/gzip-test/](https://www.giftofspeed.com/gzip-test/)
2. Entre `https://nathandelange.com`
3. Vérifie que "GZIP is enabled" ✅

Si pas actif, vérifie que :

- Le fichier `.htaccess` est bien uploadé dans `/www/`
- Le module `mod_deflate` est activé (normalement oui chez OVH)

---

## 🚨 **Troubleshooting OVH**

### Le site n'apparaît pas

**Causes possibles :**

1. DNS pas encore propagés (attends 24-48h max)
2. Fichiers uploadés au mauvais endroit → Vérifie que `index.html` est dans `/www/`
3. SSL pas encore généré → Attends 30 min, réessaye

**Solution :**

```bash
# Teste avec l'IP directe du serveur
# Trouve l'IP dans ton espace client OVH
ping nathandelange.com
```

### Erreur 500 Internal Server Error

**Causes :**

- `.htaccess` mal configuré
- Module Apache manquant

**Solution :**

1. Renomme `.htaccess` en `.htaccess.bak` temporairement
2. Si le site fonctionne, le problème vient du `.htaccess`
3. Supprime progressivement les sections jusqu'à trouver le coupable

### Les routes Vue Router ne fonctionnent pas

**Symptôme :** Erreur 404 lors du rafraîchissement de la page

**Cause :** Le `.htaccess` n'est pas pris en compte

**Solution :**
Vérifie que dans ton `.htaccess` cette section est présente :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

### Les fichiers ne se mettent pas à jour

**Cause :** Cache du navigateur ou CDN OVH

**Solution :**

1. Vide le cache du navigateur (Ctrl+Shift+R)
2. Attends 5-10 minutes
3. Teste en navigation privée

---

## 📧 **Support OVH**

**Si problème technique :**

- **Email :** [support@ovh.com](mailto:support@ovh.com)
- **Téléphone :** 1007 (depuis un poste OVH)
- **Forum :** [community.ovh.com](https://community.ovh.com)
- **Manager :** Créer un ticket dans l'espace client

---

## 📋 **Checklist finale OVH**

Avant de dire "c'est terminé" :

- [ ] Domaine `nathandelange.com` configuré et pointant vers OVH
- [ ] SSL Let's Encrypt activé et fonctionnel (HTTPS)
- [ ] Site uploadé dans `/www/` (contenu de `dist/`)
- [ ] `.htaccess` présent et actif
- [ ] `robots.txt`, `sitemap.xml`, `manifest.json` accessibles
- [ ] og-image.jpg créée et uploadée
- [ ] Favicons créés et uploadés
- [ ] Site accessible via `https://nathandelange.com`
- [ ] Navigation et formulaire fonctionnels
- [ ] Google Search Console configuré et sitemap soumis
- [ ] Test Lighthouse > 90 en performance
- [ ] Cache et compression Gzip actifs

---

## 💡 **Ressources OVH**

- [Guide hébergement web OVH](https://docs.ovh.com/fr/hosting/)
- [Configurer SSL OVH](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)
- [FTP OVH](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/)

---

🎉 **Bon courage pour le déploiement ! Si tu as des questions ou blocages, n'hésite pas !**
