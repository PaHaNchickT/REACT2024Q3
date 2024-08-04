import searchDataSliceReducer, { setSearchValue, setPage } from '../services/searchSlice'
import detailsDataSliceReducer, { setIsClosed, setFilmData } from '../services/detailsSlice'
import selectedDataSliceReducer, { addItemData, removeItemData, clearItemData } from '../services/selectedSlice'

describe('Redux store', () => {
  it('should shange search value with "setSearchValue" action', () => {
    const action = { type: setSearchValue.type, payload: { value: 'test' } }
    const result = searchDataSliceReducer({ searchData: { value: '', page: 1 } }, action)

    expect(result.searchData.value).toBe('test')
  })

  it('should shange search page with "setPage" action', () => {
    const action = { type: setPage.type, payload: { page: 2 } }
    const result = searchDataSliceReducer({ searchData: { value: '', page: 1 } }, action)

    expect(result.searchData.page).toBe(2)
  })
})

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
