export type FilmObj = {
  nameOriginal: string
  nameEn?: string
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
  countries: { country: string }[]
  posterUrl: string
}

export type reduxStore = {
  searchData: { searchData: { value: string; page: number } }
  resultsData: {
    resultsData: {
      items: FilmObj[]
      total: number
      totalPages: number
    }
  }
  detailsData: {
    detailsData: {
      isClosed: boolean
      filmId: number
      filmData: FilmObj
    }
  }
  selectedData: {
    selectedData: FilmObj[]
  }
}
