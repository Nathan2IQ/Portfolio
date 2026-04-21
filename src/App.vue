<script setup>
import { RouterView } from 'vue-router'
import ColorBends from '@/components/ColorBends.vue'
import '@/assets/ColorBends.css'
</script>

<template>
  <div class="app-wrapper">
    <ColorBends
      class="background-animation"
      :colors="['#4A1942', '#1E3A8A', '#065F46', '#7C2D12', '#1F2937', '#581C87']"
      :rotation="90"
      :speed="0.2"
      :scale="1.3"
      :frequency="1.2"
      :warpStrength="1.2"
      :mouseInfluence="0"
      :noise="0.08"
      :parallax="0"
      :iterations="3"
      :intensity="1"
      :bandWidth="4"
      :transparent="false"
      :autoRotate="0.5"
    />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  opacity: 0.3;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
}
</style>
