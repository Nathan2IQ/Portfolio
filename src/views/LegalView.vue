<template>
  <div class="legal-container">
    <div class="legal-content">
      <h1>Mentions Légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p><strong>Nom :</strong> Nathan Delange</p>
        <p><strong>Email :</strong> delange.dev@gmail.com</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p><strong>Hébergeur :</strong> OVH SAS</p>
        <p><strong>Siège social :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
        <p><strong>Téléphone :</strong> 1007</p>
        <p>
          <strong>Site web :</strong>
          <a href="https://www.ovh.com" target="_blank" rel="noopener">www.ovh.com</a>
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble de ce site relève de la législation française et internationale sur le droit
          d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les informations recueillies via le formulaire de contact sont destinées uniquement à
          répondre à vos demandes. Elles ne sont ni vendues ni partagées avec des tiers.
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
          de vos données personnelles.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>Ce site n'utilise pas de cookies de tracking ou de publicité.</p>
      </section>

      <div class="back-home">
        <router-link to="/" class="home-button"> ← Retour à l'accueil </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.legal-container {
  min-height: 100vh;
  padding: 65px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
}

.legal-content {
  color: var(--white);
}

.legal-content h1 {
  font-size: 48px;
  margin-bottom: 48px;
  color: var(--white);
}

.legal-content h2 {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 16px;
  color: var(--white);
}

.legal-content section {
  margin-bottom: 32px;
}

.legal-content p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--white-75);
  margin-bottom: 12px;
}

.legal-content strong {
  color: var(--white);
}

.back-home {
  margin-top: 48px;
  margin-bottom: 24px;
  text-align: center;
}

.home-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  color: var(--white);
  background: transparent;
  border: 1px solid var(--white-25);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.home-button:hover {
  background: var(--white-10);
  border-color: var(--white);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .legal-container {
    padding: 100px 20px 40px;
  }

  .legal-content h1 {
    font-size: 36px;
    margin-bottom: 32px;
  }

  .legal-content h2 {
    font-size: 20px;
  }

  .back-home {
    margin-top: 40px;
  }
}

@media (max-width: 320px) {
  .legal-content h1 {
    font-size: 28px;
  }

  .legal-content h2 {
    font-size: 18px;
  }

  .legal-content p {
    font-size: 14px;
  }

  .home-button {
    font-size: 14px;
    padding: 10px 20px;
  }
}
</style>
