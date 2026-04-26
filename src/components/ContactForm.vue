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
      touched: {
        name: false,
        email: false,
        message: false,
      },
    }
  },
  computed: {
    isEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(this.form.email)
    },
    isNameValid() {
      return this.form.name.trim().length >= 2
    },
    isMessageValid() {
      return this.form.message.trim().length >= 10
    },
    isFormValid() {
      return this.isNameValid && this.isEmailValid && this.isMessageValid
    },
  },
  methods: {
    markAsTouched(field) {
      this.touched[field] = true
    },
    async handleSubmit() {
      // Marquer tous les champs comme touchés
      Object.keys(this.touched).forEach((key) => {
        this.touched[key] = true
      })

      if (!this.isFormValid) return

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
          this.touched = { name: false, email: false, message: false }
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
    <div class="form-group">
      <input
        v-model="form.name"
        type="text"
        placeholder="Nom"
        required
        @blur="markAsTouched('name')"
        :class="{ invalid: touched.name && !isNameValid, valid: touched.name && isNameValid }"
      />
      <span v-if="touched.name && !isNameValid" class="field-error">
        Le nom doit contenir au moins 2 caractères
      </span>
    </div>

    <div class="form-group">
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
        @blur="markAsTouched('email')"
        :class="{ invalid: touched.email && !isEmailValid, valid: touched.email && isEmailValid }"
      />
      <span v-if="touched.email && !isEmailValid" class="field-error">
        Veuillez entrer un email valide
      </span>
    </div>

    <div class="form-group">
      <textarea
        v-model="form.message"
        placeholder="Message"
        required
        @blur="markAsTouched('message')"
        :class="{
          invalid: touched.message && !isMessageValid,
          valid: touched.message && isMessageValid,
        }"
      ></textarea>
      <span v-if="touched.message && !isMessageValid" class="field-error">
        Le message doit contenir au moins 10 caractères
      </span>
    </div>

    <!-- Honeypot -->
    <input v-model="form._gotcha" type="text" style="display: none" />

    <button :disabled="loading || !isFormValid">
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

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-error {
  font-size: 12px;
  color: #ff6b6b;
  padding-left: 4px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

input.valid,
textarea.valid {
  border-color: var(--cyan-border);
}

input.invalid,
textarea.invalid {
  border-color: rgba(255, 107, 107, 0.4);
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

@media (max-width: 320px) {
  .contact-form {
    gap: 12px;
  }

  input,
  textarea {
    padding: 12px 14px;
    font-size: 14px;
  }

  textarea {
    min-height: 100px;
  }

  button {
    padding: 12px 24px;
    font-size: 14px;
    margin-top: 4px;
  }

  .field-error,
  .success,
  .error {
    font-size: 11px;
    padding: 6px 10px;
  }
}
</style>
