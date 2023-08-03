<template>
  <div>
    <header-component />
  </div>
  <main class="pt-[180px] md:pt-[80px]">
    <router-view />
  </main>
  <footer>
    <footer-component />
  </footer>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { useRoute, RouterView } from 'vue-router';

</script>