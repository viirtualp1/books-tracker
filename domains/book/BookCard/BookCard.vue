<template>
  <app-card class="book-card" :class="{ 'is-small': small }" @click="openModal">
    <template #prepend>
      <div class="book-card__info">
        <div class="book-card__info-tags">
          <v-chip
            v-if="isReading"
            class="book-card__card-tag"
            color="indigo"
            size="small"
          >
            Читаю сейчас
          </v-chip>
          <v-chip
            v-if="book.in_series"
            class="book-card__card-tag"
            color="success"
            size="small"
          >
            Входит в серию книг

            <v-tooltip activator="parent" location="top">
              {{ book.in_series }}
            </v-tooltip>
          </v-chip>
        </div>
        <div v-if="book.image" class="book-card__info-image">
          <img :src="book.image" :alt="book.name" loading="lazy" />
        </div>
      </div>
    </template>

    <div class="book-card__info">
      <div class="book-card__info-name">{{ book.name }}</div>
    </div>

    <template #footer>
      <div class="book-card__info">
        <div class="book-card__info-author">
          {{ book.author }}
        </div>

        <div class="book-card__info-progress">
          {{ bookProgress }}%

          <span> {{ book.page }} / {{ book.last_page }} </span>
        </div>
      </div>
    </template>
  </app-card>

  <book-modal v-model="isOpen" :book="book" />
</template>

<script setup lang="ts">
import type { BookData } from '@/types'
import { AppCard } from '@/domains/App'
import { BookModal } from '@/domains/book/'

const props = defineProps<{
  book: BookData
  isReading?: boolean
  small?: boolean
}>()

const isOpen = ref(false)

const bookProgress = computed(() => {
  const { page, last_page: lastPage } = props.book

  return String((page / lastPage) * 100).slice(0, 4)
})

function openModal() {
  isOpen.value = true
}
</script>

<style src="./BookCard.scss"></style>
