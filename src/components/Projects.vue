<script>
export default {
  name: 'Projects',
  data() {
    return {
      loadingProject: null,
      projects: [
        {
          id: 1,
          name: 'Adeline Chague',
          description:
            "Création d'un site internet pour une autrice, avec un design épuré et une navigation intuitive pour mettre en valeur ses œuvres et son univers.",
          link: 'https://adelinechague.fr',
          stack: ['React'],
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" stroke="#a89dff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
          id: 2,
          name: 'Les Petits Plats',
          description:
            'Ce site internet permet de voir la liste des recettes, de chercher une recette spécifique selon différents critères, et d’afficher la recette voulue.',
          link: 'https://les-petits-plats-plum.vercel.app/',
          stack: ['Next.js'],
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 4v16" stroke="#ff6b6b" stroke-width="1.3" stroke-linecap="round"/><path d="M6 4v6M8 4v6M10 4v6" stroke="#ff6b6b" stroke-width="1.2" stroke-linecap="round"/><path d="M16 4v16" stroke="#ff8787" stroke-width="1.3" stroke-linecap="round"/><path d="M14 4h4v3l-2 1z" fill="#ff8787" opacity="0.4"/></svg>`,
        },
        {
          id: 3,
          name: 'Nina Carducci Portfolio',
          description:
            'Mon travail sur ce projet à été de référencer ce site sur les moteurs de recherche, d’améliorer le référencement naturel et le SEO.',
          link: 'https://ninacarducci-github-io-six.vercel.app/',
          stack: ['SEO'],
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#4ecdc4" stroke-width="1.3"/><path d="m21 21-4-4" stroke="#4ecdc4" stroke-width="1.5" stroke-linecap="round"/><path d="M8 11h6M11 8v6" stroke="#4ecdc4" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/></svg>`,
        },
      ],
    }
  },
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

    const projectItems = document.querySelectorAll('.project-item')
    projectItems.forEach((item) => observer.observe(item))
  },
  methods: {
    handleClick(projectId, link) {
      this.loadingProject = projectId
      // Simuler un petit délai avant d'ouvrir le lien
      setTimeout(() => {
        window.open(link, '_blank', 'noopener,noreferrer')
        // Reset après l'ouverture
        setTimeout(() => {
          this.loadingProject = null
        }, 500)
      }, 300)
    },
  },
}
</script>

<template>
  <section id="projets" class="projects">
    <div class="project-header">
      <h2 class="project-label">Projets Récents</h2>
      <div class="project-rule"></div>
    </div>
    <div class="project-list">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-item"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="project-link" @click="handleClick(project.id, project.link)">
          <div class="project-icon" v-html="project.icon"></div>
          <div class="project-title">
            <h2>{{ project.name }}</h2>
            <!-- Loader ou icône externe -->
            <svg
              v-if="loadingProject === project.id"
              class="loading-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
              <path
                d="M8 2a6 6 0 0 1 6 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <svg
              v-else
              class="external-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 3H3.5C3.22386 3 3 3.22386 3 3.5V12.5C3 12.7761 3.22386 13 3.5 13H12.5C12.7761 13 13 12.7761 13 12.5V10M10 3H13M13 3V6M13 3L7 9"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p>{{ project.description }}</p>
          <div class="project-stack">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 72px 0;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
}

.project-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--white-25);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  white-space: nowrap;
}

.project-rule {
  flex: 1;
  height: 0.5px;
  background: var(--border);
}

.project-list {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.project-item {
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  transform: translateY(30px);
}

.project-item.visible {
  animation: fadeInUp 0.6s ease-out forwards;
}

.project-item.visible:nth-child(1) {
  animation-delay: 0s;
}

.project-item.visible:nth-child(2) {
  animation-delay: 0.15s;
}

.project-item.visible:nth-child(3) {
  animation-delay: 0.3s;
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

.project-item:hover {
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
  transform: translateY(-4px) scaleY(1.02);
}

.project-link {
  text-decoration: none;
  cursor: pointer;
}

.project-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: rgba(123, 108, 255, 0.08);
  border: 0.5px solid rgba(123, 108, 255, 0.15);
}

.project-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.project-item h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.01em;
  margin-bottom: 0;
}

.external-icon {
  color: var(--white-40);
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.3s ease;
}

.project-item:hover .external-icon {
  opacity: 1;
  transform: translateX(0);
}

.loading-icon {
  color: var(--violet);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.project-item p {
  font-size: 18px;
  line-height: 1.65;
  color: var(--white-40);
  flex: 1;
  margin-bottom: 10px;
}

.project-stack {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.project-stack span {
  font-size: 11px;
  font-weight: 400;
  color: var(--white-25);
  border: 0.5px solid var(--white-12);
  border-radius: 4px;
  padding: 4px 9px;
}

@media (max-width: 768px) {
  .project-list {
    flex-direction: column;
  }
}

@media (max-width: 425px) {
  .projects {
    padding: 40px 0;
  }
}

@media (max-width: 320px) {
  .projects {
    padding: 30px 0;
  }

  .project-header {
    margin-bottom: 24px;
  }

  .project-label {
    font-size: 11px;
  }

  .project-item {
    padding: 20px 18px;
  }

  .project-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
  }

  .project-icon svg {
    width: 20px;
    height: 20px;
  }

  .project-item h2 {
    font-size: 17px;
    margin-bottom: 8px;
  }

  .project-item p {
    font-size: 15px;
    line-height: 1.55;
    margin-bottom: 8px;
  }

  .project-stack span {
    font-size: 10px;
    padding: 3px 7px;
  }
}
</style>
