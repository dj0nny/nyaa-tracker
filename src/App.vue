<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavbar from './components/AppNavbar.vue';
</script>

<template>
  <AppNavbar />
  <main class="container mx-auto my-10">
    <RouterView />
  </main>
</template>
