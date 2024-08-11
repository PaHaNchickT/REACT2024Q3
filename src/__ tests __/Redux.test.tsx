import detailsDataSliceReducer, { setIsClosed, setFilmData } from '../services/detailsSlice'
import selectedDataSliceReducer, { addItemData, removeItemData, clearItemData } from '../services/selectedSlice'
import themeDataSliceReducer, { setTheme } from '../services/themeSlice'

describe('Redux detailsDataSlice', () => {
  it('should shange isClosed and filmId values with "setIsClosed" action', () => {
    const action = { type: setIsClosed.type, payload: { isClosed: true, filmId: null } }
    const result = detailsDataSliceReducer(
      {
        detailsData: {
          isClosed: false,
          filmId: 0,
          filmData: { kinopoiskId: 0 },
        },
      },
      action
    )

    expect(result.detailsData).toEqual({ isClosed: true, filmId: 0, filmData: { kinopoiskId: 0 } })
  })

  it('should shange filmData value with "setFilmData" action', () => {
    const action = { type: setFilmData.type, payload: { isClosed: true, filmId: 999, filmData: { kinopoiskId: 999 } } }
    const result = detailsDataSliceReducer(
      {
        detailsData: {
          isClosed: false,
          filmId: 0,
          filmData: { kinopoiskId: 0 },
        },
      },
      action
    )

    expect(result.detailsData.filmData.kinopoiskId).toBe(999)
  })
})

describe('Redux selectedDataSlice', () => {
  it('should add item data with "addItemData" action', () => {
    const action = { type: addItemData.type, payload: { kinopoiskId: 999 } }
    const result = selectedDataSliceReducer(
      {
        selectedData: {
          selectedItems: [],
        },
      },
      action
    )

    expect(result.selectedData.selectedItems[0].kinopoiskId).toBe(999)
  })

  it('should remove item data with "removeItemData" action', () => {
    const action = {
      type: removeItemData.type,
      payload: {
        kinopoiskId: 463634,
        nameRu: 'Тест',
        nameEn: 'Test',
        nameOriginal: 'Testy Test',
        countries: [
          {
            country: 'США',
          },
          {
            country: 'Китай',
          },
        ],
        genres: [
          {
            genre: 'триллер',
          },
          {
            genre: 'фантастика',
          },
          {
            genre: 'боевик',
          },
          {
            genre: 'ужасы',
          },
        ],
        rating: 999,
        ratingKinopoisk: 999,
        ratingImdb: 999,
        year: 2014,
        type: 'FILM',
        posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/463634.jpg',
        posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/463634.jpg',
      },
    }
    const result = selectedDataSliceReducer(
      {
        selectedData: {
          selectedItems: [
            {
              kinopoiskId: 463634,
              nameRu: 'Тест',
              nameEn: 'Test',
              nameOriginal: 'Testy Test',
              countries: [
                {
                  country: 'США',
                },
                {
                  country: 'Китай',
                },
              ],
              genres: [
                {
                  genre: 'триллер',
                },
                {
                  genre: 'фантастика',
                },
                {
                  genre: 'боевик',
                },
                {
                  genre: 'ужасы',
                },
              ],
              rating: 999,
              ratingKinopoisk: 999,
              ratingImdb: 999,
              year: 2014,
              type: 'FILM',
              posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/463634.jpg',
              posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/463634.jpg',
            },
          ],
        },
      },
      action
    )

    expect(result.selectedData.selectedItems).toHaveLength(0)
  })

  it('should clear items with "clearItemData" action', () => {
    const action = {
      type: clearItemData.type,
    }
    const result = selectedDataSliceReducer(
      {
        selectedData: {
          selectedItems: [
            {
              kinopoiskId: 463634,
              nameRu: 'Тест',
              nameEn: 'Test',
              nameOriginal: 'Testy Test',
              countries: [
                {
                  country: 'США',
                },
                {
                  country: 'Китай',
                },
              ],
              genres: [
                {
                  genre: 'триллер',
                },
                {
                  genre: 'фантастика',
                },
                {
                  genre: 'боевик',
                },
                {
                  genre: 'ужасы',
                },
              ],
              rating: 999,
              ratingKinopoisk: 999,
              ratingImdb: 999,
              year: 2014,
              type: 'FILM',
              posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/463634.jpg',
              posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/463634.jpg',
            },
          ],
        },
      },
      action
    )

    expect(result.selectedData.selectedItems).toHaveLength(0)
  })
})

describe('Redux themeDataSlice', () => {
  it('should shange color with "setTheme" action', () => {
    const action = { type: setTheme.type, payload: 'dark' }
    const result = themeDataSliceReducer(
      {
        themeData: {
          color: 'light',
        },
      },
      action
    )

    expect(result.themeData).toEqual({ color: 'dark' })
  })
})
