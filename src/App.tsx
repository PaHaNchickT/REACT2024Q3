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
    if (searchString === '') {
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
      <>
        <Search onClick={this.buttonHandler} />
        <Results value={this.state.value} />
      </>
    )
  }
}

export default App
