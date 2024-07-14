import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from '../App'
import { BrowserRouter } from 'react-router-dom'
import { mockAPIempty, mockAPIfilmData, mockAPIstart } from '../test/__ mocks __/API-start'
import { act } from 'react'
import { Details } from '../components/details/details'

// screen.debug()

describe('Items list', () => {
  it('should render the specified number of items', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIstart)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    expect(screen.getAllByTestId('results__item')).toHaveLength(40)
  })

  it('should display an appropriate message if no items are present', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIempty)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    expect(screen.getByTestId('results__stub')).toBeInTheDocument()
  })
})

describe('Item', () => {
  it('should render the relevant item data', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIstart)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    const currentData = mockAPIstart.items[0]
    const item = screen.getAllByTestId('results__item')

    expect(item[0].children[0]).toHaveAttribute('src', currentData.posterUrlPreview)
    expect(item[0].children[1].children[0].textContent === `Title: ${currentData.nameOriginal}`).toBeTruthy()
    expect(item[0].children[1].children[1].textContent === `Year: ${currentData.year}`).toBeTruthy()
    expect(item[0].children[1].children[2].textContent === `IMDb: ${currentData.ratingImdb}`).toBeTruthy()
  })

  it("should render detailed item component after it's clicking", async () => {
    //error here
    const mockJsonPromise = Promise.resolve(mockAPIstart)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    const item = screen.getAllByTestId('results__item')
    fireEvent.click(item[0])

    expect(screen.getByTestId('details__cont')).toBeInTheDocument()
  })

  it('should triggers an additional API call to fetch detailed information after item clicking', async () => {
    //error here
    const mockJsonPromise = Promise.resolve(mockAPIstart)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    const item = screen.getAllByTestId('results__item')
    fireEvent.click(item[0])

    expect(global.fetch).toHaveBeenCalledTimes(2)
  })
})

describe('Detailed item', () => {
  it('should display a loading indicator while fetching data', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIstart)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    const item = screen.getAllByTestId('results__item')
    fireEvent.click(item[0])

    expect(screen.getByTestId('loader__wrapper')).toBeInTheDocument()
  })

  it('should correctly display the detailed item data', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIfilmData)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <Details id={430} onClick={() => {}} />
        </BrowserRouter>
      )
    })

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
    let isClicked = false
    const mockJsonPromise = Promise.resolve(mockAPIfilmData)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <Details
            id={430}
            onClick={() => {
              isClicked = true
            }}
          />
        </BrowserRouter>
      )
    })

    const closeBtn = screen.getByTestId('details__cont').children[1]
    fireEvent.click(closeBtn)

    expect(isClicked).toBeTruthy()
  })
})

describe('Pagination', () => {
  it('should update URL query parameter when page changes', async () => {
    const mockJsonPromise = Promise.resolve(mockAPIstart)
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    const item = screen.getAllByTestId('pendingBtn')
    await act(async () => fireEvent.click(item[0]))

    expect(+window.location.pathname.split('/')[1] === 1).toBeTruthy()
  })
})

describe('Search', () => {
  // it('should save the entered value to the local storage after clicking the Search button', () => {
  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )
  //   expect(true).toBeTruthy()
  //   // const heading = screen.getByRole('heading')
  //   // expect(heading).toBeInTheDocument()
  // })
  // it('should retrieve the value from the local storage upon component mounting', () => {
  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )
  //   expect(true).toBeTruthy()
  //   // const heading = screen.getByRole('heading')
  //   // expect(heading).toBeInTheDocument()
  // })
})

describe('Error Boundary', () => {
  it('should render error page when app is crashing', async () => {
    const mockJsonPromise = Promise.resolve({})
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })

    expect(screen.getByTestId('error__wrapper')).toBeInTheDocument()
  })
})
