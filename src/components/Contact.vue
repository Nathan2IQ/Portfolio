<script>
import ContactForm from './ContactForm.vue'

export default {
  components: {
    ContactForm,
  },
}
</script>

<template>
  <section class="contact">
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
  font-size: 12px;
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
</style>
