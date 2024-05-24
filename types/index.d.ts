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

export interface BookStateData {
  is_reading: boolean
  is_finished: boolean
  is_abandoned: boolean
  is_new: boolean
  is_waiting: boolean
}

export interface BookData {
  id: number
  author: string
  name: string
  description: string | null
  source: string | null
  image: string | null
  state: BookStateData
  page: number
  last_page: number
  genre: GenreType | null
  chapter: ChapterData
  quotes: NoteData[]
  notes: NoteData[]
}
