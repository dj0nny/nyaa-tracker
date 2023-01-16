<script setup lang="ts">
import getNyaaFeed from '@/api';
import { onMounted, ref } from 'vue';
import TorrentTable from '@/components/TorrentTable.vue';
import type { ITorrent } from '@/interfaces';

const feed = ref<ITorrent[]>([]);

onMounted(async () => {
  feed.value = await getNyaaFeed();
});
</script>

<template>
  <TorrentTable v-if="feed" :feed="feed"> </TorrentTable>
</template>
