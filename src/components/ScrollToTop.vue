<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.visible = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<template>
  <Transition name="fade">
    <button v-if="visible" @click="scrollToTop" class="scroll-to-top" aria-label="Retour en haut">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 15V5M10 5L5 10M10 5L15 10"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background: var(--violet);
  border: 1px solid var(--violet-border);
  border-radius: var(--radius-md);
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(123, 108, 255, 0.3);
}

.scroll-to-top:hover {
  background: var(--violet-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(123, 108, 255, 0.4);
}

.scroll-to-top:active {
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 425px) {
  .scroll-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }

  .scroll-to-top svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 320px) {
  .scroll-to-top {
    bottom: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
  }

  .scroll-to-top svg {
    width: 16px;
    height: 16px;
  }
}
</style>
