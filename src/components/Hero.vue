<template>
  <section id="hero" class="hero">
    <p class="hero-hello">Bonjour, je suis</p>
    <h1 class="hero-name"><span class="first">Nathan</span><span class="last">Delange</span></h1>
    <div class="hero-dev">
      <div class="hero-line"></div>
      <h2 class="hero-dev-txt">Développeur FrontEnd</h2>
      <div class="hero-line"></div>
    </div>
    <p class="hero-description">
      Je construis des expériences web qui allient performance et élégance.<br />
      Passionné par les interfaces qui donnent l'impression<br />
      que la technologie est invisible.
    </p>
    <div class="hero-actions">
      <a href="#projets"><button class="btn-primary">Voir mes projets</button></a>
      <a href="#contact"><button class="btn-ghost">Me contacter</button></a>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <h3 class="stat-number">14</h3>
        <p class="stat-label">Projets réalisés</p>
      </div>
      <div class="stat-item">
        <h3 class="stat-number">2</h3>
        <p class="stat-label">Années d'expérience</p>
      </div>
      <div class="stat-item">
        <h3 class="stat-number">100%</h3>
        <p class="stat-label">Optimisé utilisateur</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  animation: fadeInUp 1s ease-out both;
  padding: 120px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-hello {
  font-size: 18px;
  color: var(--white-40);
  margin-bottom: 10px;
  font-weight: 400;
}

.hero-name {
  font-size: 120px;
  font-weight: 800;
  line-height: 0.95;
  margin-bottom: 36px;
  font-stretch: extra-condensed;
  letter-spacing: -0.02em;
  transform: scaleY(0.9) scaleX(1.4);
}

.hero-name .first {
  color: var(--white);
}

.hero-name .last {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--violet);
}

.hero-dev {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-line {
  width: 24px;
  height: 1px;
  background: var(--violet);
}

.hero-dev-txt {
  font-size: 14px;
  font-weight: 500;
  color: var(--violet-light);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-description {
  font-size: 20px;
  color: var(--white-60);
  max-width: 60%;
  margin-bottom: 48px;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 72px;
}

.hero-actions a {
  text-decoration: none;
}

.btn-primary {
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
  transition: all 0.6s ease;
}

.btn-primary:hover {
  background: var(--bg-card-hover);
  border: var(--violet) 1px solid;
}

.btn-ghost {
  background: transparent;
  border: 0.5px solid var(--white-25);
  border-radius: var(--radius-md);
  padding: 14px 30px;
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 400;
  color: var(--white-40);
  cursor: pointer;
  scale: 1;
  transition: all 0.4s ease;
}

.btn-ghost:hover {
  border-color: var(--white);
  color: var(--white-60);
}

.hero-stats {
  display: flex;
  gap: 0;
  border: 0.5px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  width: 100%;
  max-width: 600px;
}

.stat-item {
  flex: 1;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--bg-card);
  border-right: 0.5px solid var(--border);
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  font-size: 28px;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 14px;
  font-weight: 400;
  color: var(--white-40);
  letter-spacing: 0.02em;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .hero-name {
    font-size: 80px;
  }
}

@media (max-width: 768px) {
  .hero-hello {
    font-size: 16px;
  }

  .hero-name {
    font-size: 60px;
  }

  .hero-description {
    max-width: 90%;
    font-size: 18px;
  }
}

@media (max-width: 425px) {
  .hero {
    padding: 60px 0 40px;
  }

  .hero-name {
    font-size: 40px;
  }

  .hero-description {
    font-size: 16px;
    width: 100%;
  }

  br {
    display: none;
  }

  .hero-actions {
    flex-direction: column;
    gap: 12px;
  }

  .btn-ghost {
    padding: 14px 24px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 0;
  }

  .stat-item {
    border-right: none;
    border-bottom: 0.5px solid var(--border);
  }
}

@media (max-width: 320px) {
  .hero {
    padding: 40px 0 30px;
  }

  .hero-hello {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .hero-name {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .hero-dev-txt {
    font-size: 11px;
  }

  .hero-line {
    width: 18px;
  }

  .hero-description {
    font-size: 14px;
    margin-bottom: 32px;
  }

  .hero-actions {
    gap: 10px;
    margin-bottom: 48px;
  }

  .btn-primary,
  .btn-ghost {
    padding: 12px 20px;
    font-size: 14px;
  }

  .stat-item {
    padding: 18px 16px;
  }

  .stat-number {
    font-size: 24px;
  }

  .stat-label {
    font-size: 12px;
  }

  .stat-item:last-child {
    border-bottom: none;
  }
}
</style>
