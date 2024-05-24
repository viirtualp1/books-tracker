import { property } from 'lodash'
import type { BookData } from '~/types'
import http from './http'

export function getBooks(): Promise<BookData[]> {
  return http
    .get('https://app.nocodb.com/api/v2/tables/m6efm7looiuu5jv/records')
    .then(property('data.list'))
}
