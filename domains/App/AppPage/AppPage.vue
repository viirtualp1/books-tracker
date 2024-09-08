<template>
  <v-main class="app-page">
    <v-container class="app-page__container">
      <v-row v-if="currentBook" class="app-page__row">
        <v-col cols="12">
          <app-card class="app-page__book">
            <template #prepend>
              <div class="app-page__info">
                <div class="app-page__info-tags">
                  <v-chip
                    class="app-page__card-tag"
                    color="indigo"
                    size="small"
                  >
                    Читаю сейчас
                  </v-chip>
                  <v-chip
                    class="app-page__card-tag"
                    color="success"
                    size="small"
                  >
                    Входит в серию книг
                  </v-chip>
                </div>
                <div v-if="currentBook.image" class="app-page__info-image">
                  <img
                    :src="currentBook.image"
                    :alt="currentBook.name"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </template>

            <div class="app-page__info">
              <div class="app-page__info-name">{{ currentBook.name }}</div>
            </div>

            <template #footer>
              <div class="app-page__info">
                <div class="app-page__info-author">
                  {{ currentBook.author }}
                </div>

                <div class="app-page__info-progress">
                  {{ currentBookProgress }}%

                  <span>
                    {{ currentBook.page }} / {{ currentBook.last_page }}
                  </span>
                </div>
              </div>
            </template>
          </app-card>
        </v-col>
      </v-row>

      <h2 class="app-page__recommendations">Рекомендуем</h2>

      <v-row>
        <v-col v-for="(book, bookIdx) in books" :key="bookIdx" cols="12" sm="4">
          <app-card @click="userStore.setCurrentBook(book)">
            {{ book.name }}
          </app-card>
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

const currentBookProgress = computed(() => {
  if (!currentBook.value) {
    return 0
  }

  const { page, last_page: lastPage } = currentBook.value

  return String((page / lastPage) * 100).slice(0, 4)
})
</script>

<style lang="scss" src="./AppPage.scss"></style>
