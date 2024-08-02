import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// import { fireEvent, render, screen } from '@testing-library/react'
import { mockAPIstart } from '../test/__ mocks __/API-mocked'
// import { mockAPIempty, mockAPIfilmData, mockAPIstart } from '../test/__ mocks __/API-mocked'
// import { Results } from '../components/results/results'

import * as reduxHooks from 'react-redux'
import * as nextHooks from 'next/navigation'
// import * as detailsActions from '../services/detailsSlice'
// import * as APIactions from '../services/API'
// import { Search } from '../components/search/search'
// import ErrorBoundary from '../components/error-boundary/errorBoundary'
import App from '../pages/[films&page=id]'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Results } from '../components/results/results'
import React from 'react'

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
  })
}

describe('Items list', () => {
  it('should render full layout correctly', async () => {
    fetchMocking(false)

    const component = render(<App />)
    expect(component).toMatchSnapshot()
  })

  it('should render the specified number of items', async () => {
    const realUseState = React.useState
    jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(false as unknown))
    jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(mockAPIstart as unknown))

    fetchMocking(false)

    render(<Results />)

    expect(screen.getAllByTestId('results__item')).toHaveLength(40)
  })

  it('should display an appropriate message if no items are present', async () => {
    const realUseState = React.useState
    jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(false as unknown))

    fetchMocking(false)

    render(<Results />)

    expect(screen.getByTestId('results__stub')).toBeInTheDocument()
  })
})

// describe('Item', () => {
//   it('should render the relevant item data', async () => {
//     fetchMocking(mockAPIstart, false, false)

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     const currentData = mockAPIstart.items[0]
//     const item = screen.getAllByTestId('results__item')
//     expect(item[0].children[0]).toHaveAttribute('src', currentData.posterUrlPreview)
//     expect(item[0].children[1].children[0].textContent === `Title: ${currentData.nameOriginal}`).toBeTruthy()
//     expect(item[0].children[1].children[1].textContent === `Year: ${currentData.year}`).toBeTruthy()
//     expect(item[0].children[1].children[2].textContent === `IMDb: ${currentData.ratingImdb}`).toBeTruthy()
//   })

//   it("should update item component isClosed value after it's clicking", async () => {
//     let isClosed = false
//     fetchMocking(mockAPIstart, false, false)

//     jest.spyOn(detailsActions, 'setIsClosed').mockImplementation((payload) => {
//       payload.isClosed = true
//       isClosed = true
//       return { payload: { isClosed: isClosed }, type: 'detailsData/setIsClosed' }
//     })

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     const item = screen.getAllByTestId('results__item')
//     fireEvent.click(item[0])

//     expect(isClosed).toBeTruthy()
//   })

//   it("should render detailed item component after it's clicking", async () => {
//     fetchMocking(mockAPIstart, true, false)

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     expect(screen.getByTestId('details__cont')).toBeInTheDocument()
//   })
// })

// describe('Detailed item', () => {
//   it('should display a loading indicator while fetching data', async () => {
//     fetchMocking(mockAPIstart, true, true)

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     expect(screen.getByTestId('loader__wrapper')).toBeInTheDocument()
//   })

//   it('should correctly display the detailed item data', async () => {
//     fetchMocking(mockAPIstart, true, false)

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     const details = screen.getByTestId('details__cont')
//     const currentData = mockAPIfilmData.data

//     expect(details.children[2].children[0].textContent === currentData.nameRu).toBeTruthy()
//     expect(details.children[2].children[1].textContent === currentData.slogan).toBeTruthy()
//     expect(details.children[3]).toHaveAttribute('src', currentData.posterUrlPreview)
//     expect(details.children[4].children[1].textContent === 'No information').toBeTruthy()
//     expect(details.children[6].children[1].textContent === 'No information').toBeTruthy()
//     expect(details.children[7].children[1].textContent === 'No information').toBeTruthy()
//     expect(details.children[8]).toHaveAttribute('href', currentData.webUrl)
//   })

//   it('should hide the details component after clicking the close button', async () => {
//     fetchMocking(mockAPIstart, true, false)

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     const closeBtn = screen.getByTestId('details__cont').children[1]
//     fireEvent.click(closeBtn)

//     expect(screen.getByTestId('details__cont')).toBeInTheDocument()
//   })
// })

// describe('Pagination', () => {
//   it('should update URL query parameter when page changes', async () => {
//     fetchMocking(mockAPIstart, false, false)

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     fireEvent.click(screen.getAllByTestId('pendingBtn')[1])

//     expect(window.location.search === '?page=2').toBeTruthy()
//   })
// })

// describe('Search', () => {
//   it('should change url query after search button clicking', async () => {
//     fetchMocking(mockAPIstart, false, false)

//     render(
//       <BrowserRouter>
//         <Search />
//       </BrowserRouter>
//     )

//     const input = screen.getByPlaceholderText('Type here to search...') as HTMLInputElement

//     fireEvent.change(input, { target: { value: 'RSS' } })
//     fireEvent.click(screen.getByText('Search'))

//     expect(window.location.search === '?search=RSS&page=1').toBeTruthy()
//   })

//   it('should reset Search while clicking by home button', async () => {
//     window.history.pushState({}, '', new URL('http://localhost/films?search=test&page=2'))

//     fetchMocking(mockAPIstart, false, false)

//     render(
//       <BrowserRouter>
//         <App />
//         <Results />
//       </BrowserRouter>
//     )

//     fireEvent.click(screen.getByText('Reset Search'))

//     expect(window.location.search === '?page=1').toBeTruthy()
//   })
// })

// describe('Theme', () => {
//   it('should change app color scheme after theme button clicking', async () => {
//     fetchMocking(mockAPIstart, false, false)

//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     )

//     fireEvent.click(screen.getByTestId('search__theme-wrapper'))

//     expect(screen.getByTestId('dark')).toBeInTheDocument()
//   })
// })

// describe('Selected items', () => {
//   it('should render selected bar after checkbox clicked', async () => {
//     fetchMocking(mockAPIstart, false, false)

//     render(
//       <BrowserRouter>
//         <Results />
//       </BrowserRouter>
//     )

//     fireEvent.click(screen.getAllByTestId('checkbox')[0])
//     fireEvent.click(screen.getByTestId('selected-unselect-btn'))
//     fireEvent.click(screen.getByTestId('selected-download-btn'))

//     expect(screen.getByTestId('selected-bar')).toBeInTheDocument()
//   })
// })

// //main loader

describe('App errors', () => {
  // test
  // it('should render error page when response contains error', async () => {
  //   const realUseState = React.useState
  //   jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(['stub data', () => {}]))
  //   fetchMocking(mockAPIstart, false, false)
  //   render(<Results />)
  //   expect(screen.getByTestId('error-page__wrapper')).toBeInTheDocument()
  // })
  //   it('should render error page when app is crashing', async () => {
  //     jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({
  //       value: '',
  //       page: 1,
  //       selectedItems: [],
  //     })
  //     render(
  //       <BrowserRouter>
  //         <App />
  //         <Results />
  //       </BrowserRouter>
  //     )
  //     expect(screen.getByTestId('error-page__wrapper')).toBeInTheDocument()
  //   })
  //   it('should render error boundary page when app is crashing', async () => {
  //     const ThrowError = () => {
  //       throw new Error('Test')
  //     }
  //     render(
  //       <ErrorBoundary fallback={<div className="error-page__wrapper" data-testid="error-page__wrapper"></div>}>
  //         <ThrowError />
  //       </ErrorBoundary>
  //     )
  //     expect(screen.getByTestId('error-page__wrapper')).toBeInTheDocument()
  //   })
})

it('test', () => {
  expect(true).toBeTruthy()
})
