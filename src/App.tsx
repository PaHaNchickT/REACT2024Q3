// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Component, ReactNode } from 'react'
import Search from './components/search/search'
import Results from './components/results/results'
import { FilmObj, GenObj } from './components/types'
import API from './components/utils/API'
import LocalStorage from './components/utils/localStorage'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { TEXT_CONTENT } from './components/constants'

class App extends Component<GenObj, { [key: string]: FilmObj[] }> {
  API = new API()

  state = {
    value: [],
  }

  constructor(props: { [key: string]: string }) {
    super(props)

    this.buttonHandler = this.buttonHandler.bind(this)
  }

  async buttonHandler(value: string) {
    const searchString = value.trim()
    let temp = []
    if (searchString === TEXT_CONTENT.errorID) {
      temp = (await ((await this.API.fakeRequest()) as unknown as Response).json()).items
    } else if (searchString === '') {
      temp = (await ((await this.API.start()) as unknown as Response).json()).items
    } else {
      temp = (await ((await this.API.search(searchString)) as unknown as Response).json()).films
    }

    this.setState({ value: temp })
  }

  componentDidMount() {
    this.buttonHandler(new LocalStorage().getValue())
  }

  render(): ReactNode {
    return (
      <ErrorBoundary
        fallback={
          <div className="error__wrapper">
            <h2>Oops</h2>
            <div></div>
            <p>Something went wrong...</p>
          </div>
        }
      >
        <Search onClick={this.buttonHandler} />
        <Results value={this.state.value} />
      </ErrorBoundary>
    )
  }
}

export default App
