<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        _gotcha: '',
      },
      loading: false,
      success: false,
      error: false,
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true
      this.success = false
      this.error = false

      try {
        const response = await fetch('https://formspree.io/f/mgorlqyw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        })

        if (response.ok) {
          this.success = true
          this.form = { name: '', email: '', message: '', _gotcha: '' }
        } else {
          this.error = true
        }
      } catch {
        this.error = true
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <input v-model="form.name" type="text" placeholder="Nom" required />
    <input v-model="form.email" type="email" placeholder="Email" required />
    <textarea v-model="form.message" placeholder="Message" required></textarea>

    <!-- Honeypot -->
    <input v-model="form._gotcha" type="text" style="display: none" />

    <button :disabled="loading">
      {{ loading ? 'Envoi...' : 'Envoyer' }}
    </button>

    <!-- Message de confirmation -->
    <p v-if="success" class="success">Message envoyé ✔</p>
    <p v-if="error" class="error">Une erreur est survenue ❌</p>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 80%;
}

input,
textarea {
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  font-family: var(--font-display);
  font-size: 16px;
  color: var(--white);
  transition: all 0.3s ease;
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: var(--white-40);
}

input:focus,
textarea:focus {
  border-color: var(--violet);
  background: var(--bg-card-hover);
}

input:hover,
textarea:hover {
  border-color: var(--border-hover);
}

textarea {
  min-height: 120px;
  resize: vertical;
  font-family: var(--font-display);
  line-height: 1.5;
}

button {
  background: var(--violet);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 14px 32px;
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;
  margin-top: 6px;
}

button:hover:not(:disabled) {
  background: var(--bg-card-hover);
  border-color: var(--violet);
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.success {
  color: var(--cyan);
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  padding: 8px 12px;
  background: var(--cyan-dim);
  border: 0.5px solid var(--cyan-border);
  border-radius: var(--radius-sm);
  text-align: center;
}

.error {
  color: #ff6b6b;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  padding: 8px 12px;
  background: rgba(255, 107, 107, 0.08);
  border: 0.5px solid rgba(255, 107, 107, 0.25);
  border-radius: var(--radius-sm);
  text-align: center;
}
</style>
