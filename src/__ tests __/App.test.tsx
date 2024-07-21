import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from '../App'
import { BrowserRouter } from 'react-router-dom'
import { mockAPIempty, mockAPIfilmData, mockAPIstart } from '../test/__ mocks __/API-mocked'
console.log(fireEvent, mockAPIfilmData)
// import { act } from 'react'
// import { Details } from '../components/details/details'
// import { Search } from '../components/search/search'

// import { UseQueryHookResult } from '@reduxjs/toolkit/dist/query/react/buildHooks'
// import {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
//   FetchBaseQueryMeta,
//   QueryDefinition,
// } from '@reduxjs/toolkit/query'
// import { FilmObj } from '../components/types'
import { Results } from '../components/results/results'

import * as reduxHooks from 'react-redux'
// import * as searchActions from '../services/searchSlice'
import * as detailsActions from '../services/detailsSlice'
import * as APIactions from '../services/API'
import { Details } from '../components/details/details'
import { Search } from '../components/search/search'

// const AppCalling = async (mock: object) => {
//   const mockJsonPromise = Promise.resolve(mock)
//   const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
//   global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     )
//   })
// }

jest.mock('react-redux')
global.URL.createObjectURL = jest.fn()
jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn())

const fetchMocking = async (mock: object, isClosed: boolean, isFetching: boolean, value = '') => {
  jest
    .spyOn(reduxHooks, 'useSelector')
    .mockReturnValue({ value: value, page: 1, selectedItems: [], isClosed: isClosed, filmId: 999 })
  jest.spyOn(APIactions, 'useGetFilmsQuery').mockReturnValue({ data: mock, isFetching: false, error: null } as never)
  jest
    .spyOn(APIactions, 'useGetFilmQuery')
    .mockReturnValue({ data: mockAPIfilmData.data, isFetching: isFetching } as never)
}

describe('Items list', () => {
  it('should render full layout correctly', async () => {
    fetchMocking(mockAPIstart, false, false)

    const component = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(component).toMatchSnapshot()
  })

  it('should render the specified number of items', async () => {
    fetchMocking(mockAPIstart, false, false)

    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    )

    expect(screen.getAllByTestId('results__item')).toHaveLength(40)
  })

  it('should display an appropriate message if no items are present', async () => {
    fetchMocking(mockAPIempty, false, false)

    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    )

    expect(screen.getByTestId('results__stub')).toBeInTheDocument()
  })
})

describe('Item', () => {
  it('should render the relevant item data', async () => {
    fetchMocking(mockAPIstart, false, false)

    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    )

    const currentData = mockAPIstart.items[0]
    const item = screen.getAllByTestId('results__item')
    expect(item[0].children[0]).toHaveAttribute('src', currentData.posterUrlPreview)
    expect(item[0].children[1].children[0].textContent === `Title: ${currentData.nameOriginal}`).toBeTruthy()
    expect(item[0].children[1].children[1].textContent === `Year: ${currentData.year}`).toBeTruthy()
    expect(item[0].children[1].children[2].textContent === `IMDb: ${currentData.ratingImdb}`).toBeTruthy()
  })

  it("should update item component isClosed value after it's clicking", async () => {
    let isClosed = false
    fetchMocking(mockAPIstart, false, false)

    jest.spyOn(detailsActions, 'setIsClosed').mockImplementation((payload) => {
      payload.isClosed = true
      isClosed = true
      return { payload: { isClosed: isClosed }, type: 'detailsData/setIsClosed' }
    })

    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    )

    const item = screen.getAllByTestId('results__item')
    fireEvent.click(item[0])

    expect(isClosed).toBeTruthy()
  })

  it("should render detailed item component after it's clicking", async () => {
    fetchMocking(mockAPIstart, true, false)

    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    )

    expect(screen.getByTestId('details__cont')).toBeInTheDocument()
  })
})

describe('Detailed item', () => {
  it('should display a loading indicator while fetching data', async () => {
    fetchMocking(mockAPIstart, false, true)

    render(
      <BrowserRouter>
        <Details closeDetails={() => {}} />
      </BrowserRouter>
    )

    expect(screen.getByTestId('loader__wrapper')).toBeInTheDocument()
  })

  it('should correctly display the detailed item data', async () => {
    fetchMocking(mockAPIstart, false, false)

    render(
      <BrowserRouter>
        <Details closeDetails={() => {}} />
      </BrowserRouter>
    )

    const details = screen.getByTestId('details__cont')
    const currentData = mockAPIfilmData.data

    expect(details.children[2].children[0].textContent === currentData.nameEn).toBeTruthy()
    expect(details.children[2].children[1].textContent === currentData.slogan).toBeTruthy()
    expect(details.children[3]).toHaveAttribute('src', currentData.posterUrlPreview)
    expect(details.children[4].children[1].textContent === currentData.year.toString()).toBeTruthy()
    expect(details.children[6].children[1].textContent === currentData.description).toBeTruthy()
    expect(details.children[7].children[1].textContent === currentData.filmLength).toBeTruthy()
    expect(details.children[8]).toHaveAttribute('href', currentData.webUrl)
  })

  it('should hide the details component after clicking the close button', async () => {
    let isClicked = true
    fetchMocking(mockAPIstart, false, false)

    render(
      <BrowserRouter>
        <Details
          closeDetails={() => {
            isClicked = false
          }}
        />
      </BrowserRouter>
    )

    const closeBtn = screen.getByTestId('details__cont').children[1]
    fireEvent.click(closeBtn)

    expect(isClicked).toBeFalsy()
  })
})

describe('Pagination', () => {
  it('should update URL query parameter when page changes', async () => {
    fetchMocking(mockAPIstart, false, false)

    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    )

    fireEvent.click(screen.getAllByTestId('pendingBtn')[1])

    expect(window.location.search === '?page=2').toBeTruthy()
  })
})

describe('Search', () => {
  it('should change url query after search button clicking', async () => {
    fetchMocking(mockAPIstart, false, false)

    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    )

    const input = screen.getByPlaceholderText('Type here to search...') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'RSS' } })
    fireEvent.click(screen.getByText('Search'))

    expect(window.location.search === '?search=RSS&page=1').toBeTruthy()
  })

  // it('should reset Search while clicking by home button', async () => {
  //   localStorage.setItem('paul-saved-value', 'test')

  //   await AppCalling(mockAPIstart)

  //   const searchBtn = screen.getByText('Reset Search')
  //   await act(async () => fireEvent.click(searchBtn))

  //   expect(localStorage.getItem('paul-saved-value') === '').toBeTruthy()
  // })
})

// describe('Error Boundary', () => {
//   it('should render error page when app is crashing', async () => {
//     await AppCalling({})

//     expect(screen.getByTestId('error__wrapper')).toBeInTheDocument()
//   })

//   it('should render error page when clicking on error button', async () => {
//     await AppCalling(mockAPIstart)

//     const mockJsonPromiseT = Promise.resolve({})
//     const mockFetchPromiseT = Promise.resolve({ json: () => mockJsonPromiseT })
//     global.fetch = jest.fn().mockImplementation(() => mockFetchPromiseT)

//     const erroBtn = screen.getByTestId('search__error-btn')
//     await act(async () => fireEvent.click(erroBtn))

//     expect(screen.getByTestId('error__wrapper')).toBeInTheDocument()
//   })

//   it('should render 404 page after wrong URL entering', async () => {
//     const mockJsonPromise = Promise.resolve(mockAPIstart)
//     const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
//     global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

//     window.history.pushState({}, '', new URL('http://localhost/test/test/test'))

//     await act(async () => {
//       render(
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       )
//     })

//     global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

//     await act(async () => {
//       render(
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       )
//     })

//     expect(location.href === 'http://localhost/error/2').toBeTruthy()
//   })
// })
