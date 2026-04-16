<template>
  <section class="hero">
    <p class="hero-hello">Bonjour, je suis</p>
    <h1 class="hero-name"><span class="first">Nathan</span><span class="last">Delange</span></h1>
    <div class="hero-dev">
      <div class="hero-line"></div>
      <h2 class="hero-dev-txt">Développeur FrontEnd</h2>
      <div class="hero-line"></div>
    </div>
    <p class="hero-description">
      Je construis des expériences web qui allient performance et élégance. Passionné par les
      interfaces qui donnent l'impression que la technologie est invisible.
    </p>
    <div class="hero-actions">
      <button class="btn-primary">Voir mes projets</button>
      <button class="btn-ghost">Me contacter</button>
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
        <h3 class="stat-number cyan">∞</h3>
        <p class="stat-label">Curiosité</p>
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
  font-size: 16px;
  color: var(--white-40);
  margin-bottom: 10px;
  font-weight: 400;
}

.hero-name {
  font-size: 100px;
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
  font-size: 18px;
  color: var(--white-60);
  max-width: 600px;
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
  background: black;
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

.cyan {
  color: var(--cyan);
}

.stat-label {
  font-size: 12px;
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
</style>
