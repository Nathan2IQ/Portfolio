<template>
  <header>
    <div class="name__wrapper">
      <h1>delange.dev</h1>
    </div>
    <nav>
      <ul>
        <li><a href="/about">Services</a></li>
        <li><a href="/projects">Projets</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="nav__badge">
      <div class="nav__badge--dot"></div>
      Disponible
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: var(--serif);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 0.5px solid var(--border);
}

h1 {
  font-size: 16px;
  color: var(--white);
}

span {
  color: var(--violet);
}

ul {
  display: flex;
  gap: 32px;
}

li {
  list-style: none;
}

a {
  position: relative;
  font-size: 14px;
  color: var(--white-60);
  text-decoration: none;
  padding: 4px 0;
}

a:hover {
  color: var(--white);
  transition: color 0.5s ease;
}

.nav__badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--cyan-dim);
  border: 0.5px solid var(--cyan-border);
  border-radius: var(--radius-pill);
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--cyan);
  letter-spacing: 0.04em;
}

.nav__badge--dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--cyan);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
