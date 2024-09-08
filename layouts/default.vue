<template>
  <v-app>
    <app-header />
    <slot />
  </v-app>
</template>

<script setup lang="ts">
import { AppHeader } from '@/domains/App'
</script>
