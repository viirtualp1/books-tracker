import { BookState, GenreType, type BookData } from '@/types'

import ThreeBodyProblemsImage from '@/assets/images/three-body-problems.jpg'
import DarkForestImage from 'assets/images/dark-forest.webp'

export const books: BookData[] = [
  {
    id: 1,
    author: 'Лю Цысинь',
    name: 'Задача трех тел',
    in_series: 'Воспоминания о прошлом Земли',
    description:
      'Роман в жанре твёрдой научной фантастики китайского писателя Лю Цысиня, опубликованный в 2008 году; продолжение романа «Задача трёх тел». Является второй частью трилогии автора «Воспоминания о прошлом Земли». Сюжет, охватывающий временной период в 200 лет, описывает подготовку человечества к отражению инопланетного вторжения. Роман был положительно оценен критикой и читателями',
    source: '',
    image: ThreeBodyProblemsImage,
    status: BookState.IS_NEW,
    page: 30,
    last_page: 640,
    genre: GenreType.FANTASTIC,
    chapter: null,
    quotes: [],
    notes: [],
  },
  {
    id: 1,
    author: 'Лю Цысинь',
    name: 'Темный лес',
    in_series: 'Воспоминания о прошлом Земли',
    description:
      'Роман китайского писателя-фантаста Лю Цысиня в жанре научной фантастики. Является первой частью трилогии автора «Воспоминания о прошлом Земли», но китайские читатели в целом воспринимают трилогию по названию первого романа.',
    source: '',
    image: DarkForestImage,
    status: BookState.IS_NEW,
    page: 50,
    last_page: 640,
    genre: GenreType.FANTASTIC,
    chapter: null,
    quotes: [],
    notes: [],
  },
]
