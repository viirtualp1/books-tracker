import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { BookData } from '@/types'

interface ProfileData {
  name: string
  books: BookData[]
  currentBook: BookData | null
}

export const useUserStore = defineStore('user', () => {
  const profileStorage = useLocalStorage<ProfileData>('user', {
    name: '',
    books: [],
    currentBook: null,
  })

  const profile = ref(profileStorage.value)

  function setCurrentBook(book: BookData) {
    profile.value.currentBook = book
  }

  return {
    profile,
    setCurrentBook,
  }
})
