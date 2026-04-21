<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Adeline Chague',
          description:
            "Création d'un site internet pour une écrivaine, avec un design épuré et une navigation intuitive pour mettre en valeur ses œuvres et son univers.",
          link: 'https://adeline-chague-l5hslhbo0-nathan2iqs-projects.vercel.app/',
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
}
</script>

<template>
  <section class="projects">
    <div class="project-header">
      <h2 class="project-label">Projets Récents</h2>
      <div class="project-rule"></div>
    </div>
    <div class="project-list">
      <article v-for="project in projects" :key="project.id" class="project-item">
        <a :href="project.link" target="_blank">
          <div class="project-icon" v-html="project.icon"></div>
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <div class="project-stack">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>
        </a>
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
  font-size: 12px;
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
}

.project-item:hover {
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
  transform: translateY(-4px);
}

.project-item a {
  text-decoration: none;
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

.project-item h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.01em;
  margin-bottom: 10px;
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
</style>
