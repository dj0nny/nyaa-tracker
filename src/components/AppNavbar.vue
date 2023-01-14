<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header
    class="navbar bg-primary text-primary-content flex justify-center items-center py-4"
  >
    <RouterLink
      :to="{ name: 'home' }"
      class="btn btn-ghost normal-case text-3xl"
    >
      Nyaa Tracker
    </RouterLink>
  </header>
</template>
