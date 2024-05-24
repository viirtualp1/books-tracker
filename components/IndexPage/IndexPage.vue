<template>
  <div class="index-page">
    <div v-if="pending">Загрузка...</div>
    <div v-for="book in books" :key="book.id">
      {{ book.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBooks } from '@/utils/api'

const { data: books, pending } = await useAsyncData('books', getBooks)
</script>

<style lang="scss" src="./IndexPage.scss"></style>
