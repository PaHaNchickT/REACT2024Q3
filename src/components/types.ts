export type FilmObj = {
  nameOriginal: string
  nameEn: string | undefined
  nameRu: string
  posterUrlPreview: string
  year: number
  ratingImdb: number
  rating: number
  filmId: number
  kinopoiskId: number
  slogan: string
  description: string
  webUrl: string
  filmLength: string
  genres: { genre: string }[]
}
