import type { BookData } from '@/types'
import http from './http'
import { property } from 'lodash'

export function getBooks(): Promise<BookData[]> {
  return http.get('/books').then(property('data'))
}
