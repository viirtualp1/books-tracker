<template>
  <v-dialog
    class="book-modal"
    v-model="currentModelValue"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-card>
      <v-card-title class="book-modal__header">
        {{ book.name }}

        <v-spacer></v-spacer>

        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text></v-card-text>
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
