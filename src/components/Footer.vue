<template>
  <footer class="footer">
    <p>&copy; 2026 Nathan Delange. Tous droits réservés.</p>
    <a href="mailto:delange.dev@gmail.com">delange.dev@gmail.com</a>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 0.5px solid var(--border);
  margin-bottom: 32px;
}

.footer p {
  font-size: 12px;
  color: var(--white-25);
}

.footer a {
  font-size: 12px;
  color: var(--white-25);
  text-decoration: none;
  transition: color 0.2s;
}

.footer a:hover {
  color: var(--white);
}

@media (max-width: 600px) {
  .footer {
    flex-direction: column-reverse;
    gap: 20px;
    text-align: center;
  }
}

@media (max-width: 320px) {
  .footer {
    padding: 20px 0;
    margin-bottom: 24px;
    gap: 14px;
  }

  .footer p,
  .footer a {
    font-size: 11px;
  }
}
</style>
