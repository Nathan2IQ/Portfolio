<script>
import VanillaTilt from 'vanilla-tilt'

export default {
  name: 'Services',
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 },
    )

    const mainService = document.querySelector('.main-service')
    const serviceItems = document.querySelectorAll('.service-item')

    if (mainService) {
      observer.observe(mainService)

      // Attendre que l'animation d'apparition soit terminée avant d'initialiser VanillaTilt
      setTimeout(() => {
        VanillaTilt.init(mainService, {
          max: 5,
          speed: 300,
          glare: true,
          'max-glare': 0.06,
          scale: 1.02,
          perspective: 2000,
          gyroscope: false,
        })
      }, 700) // Attendre la fin de l'animation fadeInScale (0.6s + 0.1s delay)
    }
    serviceItems.forEach((item) => observer.observe(item))
  },
  beforeUnmount() {
    // Nettoyer l'instance VanillaTilt
    const mainService = document.querySelector('.main-service')
    if (mainService && mainService.vanillaTilt) {
      mainService.vanillaTilt.destroy()
    }
  },
}
</script>

<template>
  <section id="services" class="services">
    <div class="service-header">
      <h2 class="service-label">Ce que je fais</h2>
      <div class="service-rule"></div>
    </div>

    <article class="main-service">
      <div class="service-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect
            x="2"
            y="5"
            width="18"
            height="12"
            rx="2"
            stroke="#a89dff"
            stroke-width="1.2"
          ></rect>
          <path
            d="M8 9l-3 2 3 2M14 9l3 2-3 2"
            stroke="#7b6cff"
            stroke-width="1.2"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <h3 class="service-name">Sites & Applications Web</h3>
      <p class="service-desc">
        Des interfaces propres et rapides, pensées pour vos utilisateurs.<br />
        Du site vitrine à l'application sur-mesure.
      </p>
    </article>
    <div class="service-list">
      <article class="service-item">
        <div class="service-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 6v10M11 16l4-4M11 16l-4-4"
              stroke="#a89dff"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              stroke="#7b6cff"
              stroke-width="1.2"
              opacity="0.6"
            ></path>
            <circle cx="11" cy="6" r="1.5" fill="#a89dff"></circle>
          </svg>
        </div>
        <h3 class="service-name">Refonte & Modernisation</h3>
        <p class="service-desc">
          Un projet existant qui mérite mieux ? Je prends en main la refonte technique ou visuelle,
          sans tout jeter.
        </p>
      </article>
      <article class="service-item">
        <div class="service-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M3 18c0-3 2-5 4.5-5.5M19 18c0-3-2-5-4.5-5.5"
              stroke="#0affe1"
              stroke-width="1.2"
              stroke-linecap="round"
            ></path>
            <circle cx="7" cy="7" r="3" stroke="#0affe1" stroke-width="1.2" opacity="0.7"></circle>
            <circle cx="15" cy="7" r="3" stroke="#0affe1" stroke-width="1.2" opacity="0.7"></circle>
            <path
              d="M9.5 9.5l3 3"
              stroke="#0affe1"
              stroke-width="1.2"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <h3 class="service-name">Conseil & Accompagnement</h3>
        <p class="service-desc">
          Vous avez un projet et pas encore de mots pour le décrire ? Je vous aide à créer, chiffrer
          et démarrer sereinement.
        </p>
      </article>
      <article class="service-item">
        <div class="service-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M12 3l-2 7h-4l9 9-2-8h4z"
              stroke="#ffd700"
              stroke-width="1.3"
              fill="#ffe135"
              opacity="0.7"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <h3 class="service-name">Optimisation & Performance</h3>
        <p class="service-desc">
          Votre site est lent ou pas assez visible ? J'analyse les points de friction et booste
          votre présence en ligne.
        </p>
      </article>
      <article class="service-item">
        <div class="service-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 17V9l7-5 7 5v8" stroke="#a89dff" stroke-width="1.2" fill="none"></path>
            <rect x="9" y="12" width="4" height="5" rx="0.5" fill="#7b6cff" opacity="0.5"></rect>
          </svg>
        </div>
        <h3 class="service-name">Maintenance & Support</h3>
        <p class="service-desc">
          Je peux aussi prendre en charge la maintenance de votre site ou application, pour que vous
          puissiez vous concentrer sur votre cœur de métier.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services {
  animation: fadeInUp 0.6s ease-out;
  padding: 80px 0;
}

.service-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
}

.service-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--white-25);
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.main-service {
  background: var(--violet-dim);
  border: 0.5px solid var(--violet);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  margin: 30px auto 50px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform-style: preserve-3d;
  will-change: transform;
  transition:
    border-color 0.3s ease,
    background 0.3s ease;
}

.main-service.visible {
  animation: fadeInOnly 0.6s ease-out forwards;
  animation-delay: 0.1s;
}

@keyframes fadeInOnly {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.main-service:hover {
  border-color: var(--violet-light);
}

/* Styles pour l'effet glare de VanillaTilt */
.main-service .js-tilt-glare {
  border-radius: var(--radius-lg);
}

/* Effet 3D sur les enfants du service principal */
.main-service .service-icon {
  transform: translateZ(20px);
}

.main-service .service-name {
  transform: translateZ(30px);
}

.main-service .service-desc {
  transform: translateZ(15px);
}

.service-rule {
  flex: 1;
  height: 0.5px;
  background: var(--border);
}

.service-list {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.service-item {
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  width: calc(50% - 20px);
  box-sizing: border-box;
  transition: all 0.2s ease-out;
  opacity: 0;
  transform: translateY(30px);
}

.service-item.visible {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-item.visible:nth-child(1) {
  animation-delay: 0.2s;
}

.service-item.visible:nth-child(2) {
  animation-delay: 0.3s;
}

.service-item.visible:nth-child(3) {
  animation-delay: 0.4s;
}

.service-item.visible:nth-child(4) {
  animation-delay: 0.5s;
}

.service-item:hover {
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
  transform: translateY(-4px) scaleY(1.02);
}

.service-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 20px;
  background: rgba(123, 108, 255, 0.12);
  border: 0.5px solid rgba(123, 108, 255, 0.22);
}

.service-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.service-desc {
  font-size: 18px;
  line-height: 1.7;
  color: var(--white-40);
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

@media (max-width: 425px) {
  .services {
    padding: 40px 0;
  }

  .main-service {
    width: 100%;
    padding: 24px 20px;
  }

  .service-list {
    flex-direction: column;
  }

  .service-item {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 320px) {
  .services {
    padding: 30px 0;
  }

  .service-header {
    margin-bottom: 24px;
  }

  .service-label {
    font-size: 11px;
  }

  .main-service {
    padding: 20px 16px;
    margin: 20px auto 32px;
  }

  .service-icon {
    width: 36px;
    height: 36px;
    margin-bottom: 14px;
  }

  .service-icon svg {
    width: 18px;
    height: 18px;
  }

  .service-name {
    font-size: 17px;
    margin-bottom: 8px;
  }

  .service-desc {
    font-size: 15px;
    line-height: 1.6;
  }

  .service-item {
    padding: 24px 20px;
    margin-bottom: 16px;
  }
}
</style>
