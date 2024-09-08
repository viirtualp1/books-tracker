export enum GenreType {
  PSYCHOLOGY = 'psychology',
  FANTASTIC = 'fantastic',
}

export interface ChapterData {
  index: number
  name: string
  first_page: number
  last_page: number
}

export interface NoteData {
  page: number | null
  text: string
}

export enum BookState {
  IS_READING = 'is_reading',
  IS_FINISHED = 'is_finished',
  IS_ABANDONED = 'is_abandoned',
  IS_NEW = 'is_new',
  IS_WAITING = 'is_waiting',
}

export interface BookData {
  id: number
  author: string
  name: string
  description: string | null
  source: string | null
  image: string | null
  status: BookState
  page: number
  last_page: number
  genre: GenreType | null
  chapter: ChapterData | null
  in_series: string
  quotes: NoteData[]
  notes: NoteData[]
}
