import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from '../App'
import { BrowserRouter } from 'react-router-dom'
import { mockAPIempty, mockAPIstart } from '../test/__ mocks __/API-start'
import { act } from 'react'

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
  // it('should display a loading indicator while fetching data', () => {
  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )
  //   expect(true).toBeTruthy()
  //   // const heading = screen.getByRole('heading')
  //   // expect(heading).toBeInTheDocument()
  // })
  // it('should correctly display the detailed item data', () => {
  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )
  //   expect(true).toBeTruthy()
  //   // const heading = screen.getByRole('heading')
  //   // expect(heading).toBeInTheDocument()
  // })
  // it('should hide the component after clicking the close button', () => {
  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )
  //   expect(true).toBeTruthy()
  //   // const heading = screen.getByRole('heading')
  //   // expect(heading).toBeInTheDocument()
  // })
  // it('should update URL query parameter when page changes', () => {
  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )
  //   expect(true).toBeTruthy()
  //   // const heading = screen.getByRole('heading')
  //   // expect(heading).toBeInTheDocument()
  // })
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
