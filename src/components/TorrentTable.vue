<script setup lang="ts">
import type { ITorrent } from '@/interfaces';

defineProps<{
  feed: ITorrent[];
}>();
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Title</th>
          <th>Size</th>
          <th>Date</th>
          <th>Seeders</th>
          <th>Leechers</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(torrent, index) in feed" :key="index">
          <td>{{ torrent.title }}</td>
          <td>{{ torrent.size }}</td>
          <td>{{ torrent.pubDate }}</td>
          <td class="text-green-500">{{ torrent.seeders }}</td>
          <td class="text-red-500">{{ torrent.leechers }}</td>
          <td>
            <a :href="torrent.link" class="btn btn-primary mr-2">Download</a>
            <a :href="torrent.guid" target="_blank" class="btn btn-accent">
              Details
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
