import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { mockAPIempty, mockAPIfilmData, mockAPIstart } from '../test/__ mocks __/API-mocked'

import * as reduxHooks from 'react-redux'
import * as nextHooks from 'next/navigation'
import * as detailsActions from '../services/detailsSlice'

import App from '../pages/[films&page=id]'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Results } from '../components/results/results'
import React from 'react'
import { Details } from '../components/details/details'
import { Search } from '../components/search/search'
import { Selected } from '../components/selected-panel/selected-info'
import { API } from '../services/API'

jest.mock('react-redux')
jest.mock('next/navigation')
global.URL.createObjectURL = jest.fn()
jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn())

jest.spyOn(nextHooks, 'useRouter').mockImplementation(() => {
  const push = (value: string) => {
    window.history.pushState({}, '', new URL(`http://localhost/films?${value}`))
  }
  const output = Object.freeze({
    push,
  }) as AppRouterInstance
  return output
})

jest.spyOn(nextHooks, 'useSearchParams').mockImplementation(() => {
  const get = (value: string) => {
    if (value === 'page') return '1'
    return ''
  }
  const output = Object.freeze({
    get,
  }) as nextHooks.ReadonlyURLSearchParams
  return output
})

const fetchMocking = async (isClosed: boolean, isLoading: boolean, mock: object) => {
  jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({
    value: '',
    page: 1,
    selectedItems: [
      {
        kinopoiskId: 463634,
        imdbId: 'tt1270797',
        nameRu: null,
        nameEn: null,
        nameOriginal: null,
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
        ratingKinopoisk: null,
        ratingImdb: null,
        year: null,
        type: null,
        posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/463634.jpg',
        posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/463634.jpg',
      },
    ],
    isClosed: isClosed,
    filmId: 999,
  })

  jest.spyOn(React, 'useState').mockReturnValueOnce([isLoading, () => {}])
  jest.spyOn(React, 'useState').mockReturnValueOnce([mock, () => {}])
}

describe('Items list', () => {
  it('should render full layout correctly', () => {
    fetchMocking(false, false, mockAPIstart)

    expect(render(<App />)).toMatchSnapshot()
  })

  it('should render the specified number of items', () => {
    fetchMocking(false, false, mockAPIstart)

    render(<Results />)
    expect(screen.getAllByTestId('results__item')).toHaveLength(40)
  })

  it('should display an appropriate message if no items are present', () => {
    fetchMocking(false, false, mockAPIempty)

    render(<Results />)
    expect(screen.getByTestId('results__stub')).toBeInTheDocument()
  })
})

describe('Item', () => {
  it('should render the relevant item data', () => {
    fetchMocking(false, false, mockAPIstart)
    render(<Results />)

    const currentData = mockAPIstart.items[0]
    const item = screen.getAllByTestId('results__item')
    expect(item[0].children[0]).toHaveAttribute('src', currentData.posterUrlPreview)
    expect(item[0].children[1].children[0].textContent === `Title: ${currentData.nameOriginal}`).toBeTruthy()
    expect(item[0].children[1].children[1].textContent === `Year: ${currentData.year}`).toBeTruthy()
    expect(item[0].children[1].children[2].textContent === `IMDb: ${currentData.ratingImdb}`).toBeTruthy()
  })

  it("should update item component isClosed value after it's clicking", async () => {
    let isClosed = false
    fetchMocking(false, false, mockAPIstart)

    jest.spyOn(detailsActions, 'setIsClosed').mockImplementation((payload) => {
      payload.isClosed = true
      isClosed = true
      return { payload: { isClosed: isClosed }, type: 'detailsData/setIsClosed' }
    })
    render(<Results />)

    const item = screen.getAllByTestId('results__item')
    fireEvent.click(item[0])
    fireEvent.click(screen.getAllByTestId('checkbox')[0])

    expect(isClosed).toBeTruthy()
  })

  it("should render detailed item component after it's clicking", async () => {
    fetchMocking(true, false, mockAPIstart)

    render(<Results />)
    expect(screen.getByTestId('details__cont')).toBeInTheDocument()
  })
})

describe('Detailed item', () => {
  it('should display a loading indicator while fetching data', async () => {
    fetchMocking(true, true, mockAPIstart)

    render(<Results />)
    expect(screen.getAllByTestId('loader__wrapper')[0]).toBeInTheDocument()
  })

  it('should correctly display the detailed item data', async () => {
    fetchMocking(true, false, mockAPIfilmData)

    render(<Details closeDetails={() => {}} />)

    const details = screen.getByTestId('details__cont')
    const currentData = mockAPIfilmData.data

    expect(details.children[2].children[0].textContent === currentData.nameRu).toBeTruthy()
    expect(details.children[2].children[1].textContent === currentData.slogan).toBeTruthy()
    expect(details.children[3]).toHaveAttribute('src', currentData.posterUrlPreview)
    expect(details.children[4].children[1].textContent === 'No information').toBeTruthy()
    expect(details.children[6].children[1].textContent === 'No information').toBeTruthy()
    expect(details.children[7].children[1].textContent === 'No information').toBeTruthy()
    expect(details.children[8]).toHaveAttribute('href', currentData.webUrl)
  })
})

describe('Search', () => {
  it('should change url query after search button clicking', async () => {
    fetchMocking(false, false, mockAPIstart)

    render(<Search />)

    const input = screen.getByPlaceholderText('Type here to search...') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'false' } })
    fireEvent.click(screen.getByText('Search'))

    expect(location.search.split('&')[location.search.split('&').length - 2] === 'search=false').toBeTruthy()
  })

  it('should reset Search while clicking by home button', async () => {
    window.history.pushState({}, '', new URL('http://localhost/films?search=test&page=1'))

    fetchMocking(false, false, mockAPIstart)

    render(<App />)

    fireEvent.click(screen.getByText('Reset Search'))

    expect(window.location.search === '?search=test&page=1').toBeTruthy()
  })
})

describe('Theme', () => {
  it('should change app color scheme after theme button clicking', async () => {
    fetchMocking(false, false, mockAPIstart)

    render(<Search />)

    fireEvent.click(screen.getByTestId('search__theme-wrapper'))

    expect(screen.getByTestId('light')).toBeInTheDocument()
  })
})

describe('Selected items', () => {
  it('should render selected bar after checkbox clicked', async () => {
    fetchMocking(true, true, mockAPIstart)

    render(<Selected />)

    fireEvent.click(screen.getByTestId('selected-unselect-btn'))
    fireEvent.click(screen.getByTestId('selected-download-btn'))

    expect(screen.getByTestId('selected-bar')).toBeInTheDocument()
  })
})

describe('App errors', () => {
  it('should render error page when app is crashing', async () => {
    fetchMocking(false, false, mockAPIstart)

    render(<Results />)

    expect(screen.getByTestId('error-page__wrapper')).toBeInTheDocument()
  })
})

describe('API', () => {
  it('should return right response for "getFilms" request', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIstart)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    let output
    await API()
      .getFilms({ value: '', page: 1 })
      .then((resp) => {
        output = resp
      })

    expect(output).toEqual(mockAPIstart)
  })

  it('should return right response for "getFilm" request', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIfilmData)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    let output
    await API()
      .getFilm(999)
      .then((resp) => {
        output = resp
      })

    expect(output).toEqual(mockAPIfilmData)
  })
})
