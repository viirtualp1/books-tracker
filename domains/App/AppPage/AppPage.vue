<template>
  <v-main class="app-page">
    <v-container class="app-page__container">
      <v-row v-if="currentBook" class="app-page__row">
        <v-col cols="12">
          <book-card :book="currentBook" is-reading />
        </v-col>
      </v-row>

      <h2 class="app-page__recommendations">Рекомендуем</h2>

      <v-row>
        <v-col v-for="(book, bookIdx) in books" :key="bookIdx" cols="12" sm="4">
          <book-card
            :book="book"
            @click="userStore.setCurrentBook(book)"
            small
          />
        </v-col>
      </v-row>
    </v-container>

    <v-bottom-navigation grow>
      <v-btn value="profile">
        <v-icon>mdi-account</v-icon>

        <span>Профиль</span>
      </v-btn>

      <v-btn value="nearby" variant="tonal" color="teal">
        <v-icon>mdi-plus</v-icon>

        <span>Новая книга</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-magnify</v-icon>

        <span>Каталог</span>
      </v-btn>
    </v-bottom-navigation>
  </v-main>
</template>

<script setup lang="ts">
// import { getBooks } from '@/utils/api'
import { AppCard } from '@/domains/App'
import { useUserStore } from '@/store/user'
import type { BookData } from '@/types'
import { books } from '@/utils/mock'
import BookCard from '~/domains/book/BookCard/BookCard.vue'

// const {
//   data: books,
//   status,
//   error,
// } = await useLazyAsyncData('books', getBooks, {
//   default: () => [],
//   server: false,
// })
//
// if (error.value) {
//   console.error('Error while loading data')
// }

const userStore = useUserStore()

const currentBook = computed<BookData | null>(() => {
  return userStore.profile.currentBook
})
</script>

<style lang="scss" src="./AppPage.scss"></style>
