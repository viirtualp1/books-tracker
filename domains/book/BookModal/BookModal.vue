<template>
  <v-dialog
    v-model="currentModelValue"
    transition="dialog-bottom-transition"
    class="book-modal"
    :max-width="1000"
  >
    <v-card>
      <v-card-title class="book-modal__header">
        {{ book.name }}

        <v-spacer></v-spacer>

        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="book-modal__content">
        <div class="book-modal__description">
          <strong>Описание</strong>

          {{ book.description }}
        </div>

        <div v-if="book.image" class="book-modal__image">
          <img :src="book.image" :alt="book.name" loading="lazy" width="400" />
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { BookData } from '@/types'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: boolean
  book: BookData
}>()

const emit = defineEmits<{
  (e: 'update:model-value'): void
}>()

const currentModelValue = useVModel(props, 'modelValue', emit)

function close() {
  currentModelValue.value = false
}
</script>

<style src="./BookModal.scss"></style>
