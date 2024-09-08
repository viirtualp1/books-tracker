<template>
  <div class="app-page">
    <v-container>
      <v-row>
        <v-col cols="24" md="3">
          <v-row>
            <v-col
              v-for="(card, cardIdx) in cards"
              :key="cardIdx"
              cols="12"
              xl="6"
            >
              <app-card class="app-page__card">
                {{ card.text }}
              </app-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="24" md="6">
          <app-card>
            <div class="app-page__info">
              <div class="app-page__info-name">Темный лес</div>
              <div class="app-page__info-progress">90%</div>
            </div>
          </app-card>
        </v-col>
        <v-col cols="24" md="3">
          <v-row>
            <v-col
              v-for="(card, cardIdx) in cards2"
              :key="cardIdx"
              cols="12"
              xl="6"
            >
              <app-card>
                {{ card.text }}
              </app-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { getBooks } from '@/utils/api'
import { AppCard } from '@/domains/App'

const {
  data: books,
  status,
  error,
} = await useLazyAsyncData('books', getBooks, {
  default: () => [],
  server: false,
})

if (error.value) {
  console.error('Error while loading data')
}

const cards = [
  { text: 'Мой профиль' },
  { text: 'Новая книга' },
  { text: 'Библиотека' },
  { text: 'Каталог' },
]

const cards2 = [
  { text: 'Темный лес' },
  { text: 'Задача трех тел' },
  { text: 'Робинзон крузо' },
  { text: 'Голодные игры' },
]
</script>

<style lang="scss" src="./AppPage.scss"></style>
