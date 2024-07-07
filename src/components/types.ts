type GenFunc = (value: string) => void

export type GenObj = { [key: string]: string | boolean | object[] | GenFunc }

export type FilmObj = {
  nameOriginal: string
  nameEn: string | undefined
  nameRu: string
  posterUrlPreview: string
  year: number
  ratingImdb: number
  rating: number
}
