<template>
  <footer class="footer">
    <p>&copy; 2026 Nathan Delange. All rights reserved.</p>
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
</style>
