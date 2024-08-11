import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { mockAPIempty, mockAPIerror, mockAPIfilmData, mockAPIstart } from '../test/__ mocks __/API-mocked'

import * as reduxHooks from 'react-redux'
import * as detailsActions from '../services/detailsSlice'

import React, { ReactNode } from 'react'
import { Details } from '../components/details/details'
import { Selected } from '../components/selected-panel/selected-info'
import { Results } from '../components/results/results'
import { Search } from '../components/search/search'
import { API } from '../services/API'

jest.mock('react-redux')
global.URL.createObjectURL = jest.fn()
jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn())

export const searchInput = ''
export const mockSubmitFn = jest.fn()
export const mockUseLoaderDataFn = jest.fn()
export const mockUseActionData = jest.fn().mockReturnValue({})
export const mockUseLocationFn = jest.fn().mockReturnValue({ pathname: '' })
export const mockUseNavigateFn = jest.fn().mockReturnValue(jest.fn())
export const mockUseNavigationFn = jest.fn().mockReturnValue({
  state: 'idle',
  location: {},
})
export const mockUseMatchesFn = jest.fn()
export const mockUseFetchersFn = jest.fn().mockReturnValue([
  {
    state: 'idle',
    submit: mockSubmitFn,
    Form: ({ children }: { children: object }) => <>{children}</>,
  },
])
export const mockSearchParamFn = jest.fn()
export const mockUseSearchParamsFn = jest
  .fn()
  .mockReturnValue([{ get: () => searchInput, entries: () => [] }, mockSearchParamFn])
export const mockUseFetcherFn = jest.fn().mockReturnValue({
  state: 'idle',
  submit: mockSubmitFn,
  Form: ({ children }: { children: object }) => <>{children}</>,
})
export const mockUseOutletContextFn = jest.fn()

jest.mock('@remix-run/react', () => ({
  Link: (props: { children: object }) => <>{props.children}</>,
  NavLink: (props: { children: object }) => <>{props.children}</>,
  Await: (props: { children: (props: object) => object; resolve: object }) => {
    if (!props) return null
    return <>{props.children(props.resolve)}</>
  },
  Form: (props: { method: string; action: string; children: ReactNode }) => (
    <form method={props.method} action={props.action}>
      {props.children}
    </form>
  ),
  useActionData: () => mockUseActionData(),
  useFetcher: () => mockUseFetcherFn(),
  useFetchers: () => mockUseFetchersFn(),
  useLoaderData: () => mockUseLoaderDataFn(),
  useMatches: () => mockUseMatchesFn(),
  useNavigate: () => mockUseNavigateFn(),
  useNavigation: () => mockUseNavigationFn(),
  useLocation: () => mockUseLocationFn(),
  useSearchParams: () => mockUseSearchParamsFn(),
  useOutletContext: () => mockUseOutletContextFn(),
  useParams: () => ({}),
}))

const fetchMocking = async (isClosed: boolean) => {
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
    color: 'light',
  })
}

describe('Items list', () => {
  it('should render the specified number of items', () => {
    fetchMocking(false)

    render(<Results data={{ results: mockAPIstart }} />)
    expect(screen.getAllByTestId('results__item')).toHaveLength(40)
  })

  it('should display an appropriate message if no items are present', () => {
    fetchMocking(false)

    render(<Results data={{ results: mockAPIempty }} />)
    expect(screen.getByTestId('results__stub')).toBeInTheDocument()
  })
})

describe('Item', () => {
  it('should render the relevant item data', () => {
    fetchMocking(false)
    render(<Results data={{ results: mockAPIstart }} />)

    const currentData = mockAPIstart.items[0]
    const item = screen.getAllByTestId('results__item')
    expect(item[0].children[0]).toHaveAttribute('src', currentData.posterUrlPreview)
    expect(item[0].children[1].children[0].textContent === `Title: ${currentData.nameOriginal}`).toBeTruthy()
    expect(item[0].children[1].children[1].textContent === `Year: ${currentData.year}`).toBeTruthy()
    expect(item[0].children[1].children[2].textContent === `IMDb: ${currentData.ratingImdb}`).toBeTruthy()
  })

  it("should update item component isClosed value after it's clicking", async () => {
    let isClosed = false
    fetchMocking(false)

    jest.spyOn(detailsActions, 'setIsClosed').mockImplementation((payload) => {
      payload.isClosed = true
      isClosed = true
      return { payload: { isClosed: isClosed }, type: 'detailsData/setIsClosed' }
    })
    render(<Results data={{ results: mockAPIstart }} />)

    const item = screen.getAllByTestId('results__item')
    fireEvent.click(item[0])
    fireEvent.click(screen.getAllByTestId('checkbox')[0])

    expect(isClosed).toBeTruthy()
  })

  it("should render detailed item component after it's clicking", async () => {
    fetchMocking(true)

    render(<Results data={{ results: mockAPIstart, details: mockAPIfilmData }} />)
    expect(screen.getByTestId('details__cont')).toBeInTheDocument()
  })
})

describe('Detailed item', () => {
  it('should correctly display the detailed item data', async () => {
    fetchMocking(true)
    jest.spyOn(React, 'useState').mockReturnValueOnce([false, () => {}])

    render(<Details results={mockAPIfilmData} closeDetails={() => {}} />)

    const details = screen.getByTestId('details__cont')
    fireEvent.click(screen.getByTestId('details__close'))
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

describe('Pagination', () => {
  it('should update URL query parameter when page changes', async () => {
    fetchMocking(false)

    render(<Results data={{ results: mockAPIstart }} />)
    fireEvent.click(screen.getAllByTestId('pendingBtn')[1])

    expect(location.search === '').toBeTruthy()
  })
})

describe('Search', () => {
  it('should change url query after search button clicking', async () => {
    fetchMocking(false)

    render(<Search />)

    const input = screen.getByPlaceholderText('Type here to search...') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'RSS' } })
    fireEvent.click(screen.getByText('Search'))

    expect(location.search === '').toBeTruthy()
  })

  it('should reset Search while clicking by home button', async () => {
    window.history.pushState({}, '', new URL('http://localhost/films?search=test&page=1'))
    fetchMocking(false)

    render(<Search />)
    fireEvent.click(screen.getByText('Reset Search'))

    expect(location.search === '?search=test&page=1').toBeTruthy()
  })
})

describe('Theme', () => {
  it('should change app color scheme after theme button clicking', async () => {
    fetchMocking(false)

    render(<Search />)
    fireEvent.click(screen.getByTestId('search__theme-wrapper'))

    expect(screen.getByTestId('light')).toBeInTheDocument()
  })
})

describe('Selected items', () => {
  it('should render selected bar after checkbox clicked', async () => {
    fetchMocking(true)

    render(<Selected />)

    fireEvent.click(screen.getByTestId('selected-unselect-btn'))
    fireEvent.click(screen.getByTestId('selected-download-btn'))

    expect(screen.getByTestId('selected-bar')).toBeInTheDocument()
  })
})

describe('App errors', () => {
  it('should render error page when app is crashing', async () => {
    fetchMocking(false)
    render(<Results data={{ results: mockAPIerror }} />)

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
      .getFilms({ value: '', page: '1' })
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
      .getFilm('999')
      .then((resp) => {
        output = resp
      })

    expect(output).toEqual(mockAPIfilmData)
  })
})
