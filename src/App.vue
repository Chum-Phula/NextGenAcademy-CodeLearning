<template>
  <nav-bar v-if="showShell" />
  <router-view />
  <site-footer v-if="showShell" />
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
const showShell = computed(() => !route.meta?.hideShell)


// Re-run AOS animations whenever the route changes
watch(
  () => route.fullPath,
  () => {
    requestAnimationFrame(() => {
      if (window.AOS) {
        window.AOS.refreshHard()
      }
    })
  },
  { immediate: true }
)
</script>
