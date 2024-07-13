import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { App } from '../App'
import { BrowserRouter } from 'react-router-dom'

test('demo', () => {
  expect(true).toBe(true)
})

// test('Renders the main page', () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   )
//   expect(true).toBeTruthy()
// })

describe('Main Page', () => {
  it('should render the main page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    expect(true).toBeTruthy()
    // const heading = screen.getByRole('heading')
    // expect(heading).toBeInTheDocument()
  })
})
