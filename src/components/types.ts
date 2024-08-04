export type FilmObj = {
  countries: { country: string }[]
  description?: string
  filmId?: number
  filmLength?: string
  genres: { genre: string }[]
  kinopoiskId: number
  nameEn?: string
  nameOriginal?: string
  nameRu?: string
  posterUrl: string
  posterUrlPreview: string
  rating: number
  ratingImdb?: number
  ratingKinopoisk?: number
  slogan?: string
  type: string
  webUrl?: string
  year: number
  imdbId?: string
}

export type FilmResp = {
  items: FilmObj[]
  total: number
  totalPages: number
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
    selectedData: { selectedItems: FilmObj[] }
  }
  themeData: {
    themeData: { color: string }
  }
}

export type FilmInfo = {
  data: FilmObj
  externalId: { imdbId: string }
}
