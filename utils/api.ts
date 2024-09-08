import type { BookData } from '~/types'
import http from './http'
import { property } from 'lodash'

export function getBooks(): Promise<BookData[]> {
  return http.get('/books/v1/volumes?q=harry+potter').then(property('data'))
}

export function getBook(name: string) {
  return http.get('/books/v1/volumes')
}
