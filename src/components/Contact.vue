<script>
import ContactForm from './ContactForm.vue'

export default {
  components: {
    ContactForm,
  },
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact-header">
      <h2 class="contact-label">Travaillons Ensemble</h2>
      <div class="contact-rule"></div>
    </div>
    <div class="contact-content">
      <div class="contact-left">
        <h2>Un projet en tête ?</h2>
        <p>
          Que ce soit une idée floue ou un cahier des charges précis, parlons-en. Je réponds en
          moins de 24 heures.
        </p>
      </div>
      <div class="contact-link">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 72px 0;
}

.contact-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
}

.contact-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--white-25);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  white-space: nowrap;
}

.contact-rule {
  flex: 1;
  height: 0.5px;
  background: var(--border);
}

.contact-content {
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  display: flex;
  align-items: center;
  justify-content: space-beetween;
  gap: 32px;
}

.contact-left h2 {
  font-size: 36px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.contact-left p {
  font-size: 18px;
  font-weight: 400;
  color: var(--white-40);
  line-height: 1.6;
  max-width: 360px;
}

.contact-link {
  flex: 1;
  display: flex;
  justify-content: end;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-link {
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 425px) {
  .contact {
    padding: 40px 0;
  }

  .contact-content {
    padding: 24px 20px;
  }

  .contact-left h2 {
    font-size: 28px;
  }

  .contact-left p {
    font-size: 16px;
    max-width: 100%;
  }

  .contact-form {
    width: 100%;
  }
}

@media (max-width: 320px) {
  .contact {
    padding: 30px 0;
  }

  .contact-header {
    margin-bottom: 24px;
  }

  .contact-label {
    font-size: 11px;
  }

  .contact-content {
    padding: 20px 16px;
    gap: 24px;
  }

  .contact-left h2 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .contact-left p {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
