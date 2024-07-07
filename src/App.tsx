// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Component, ReactNode } from 'react'
import Search from './components/search/search'
import Results from './components/results/results'
import { GenObj } from './components/types'
import API from './components/utils/API'

class App extends Component<GenObj, { [key: string]: string | boolean | string[] }> {
  API = new API()

  state = {
    value: [],
  }

  constructor(props: { [key: string]: string }) {
    super(props)

    this.buttonHandler = this.buttonHandler.bind(this)
  }

  async buttonHandler(value: string) {
    let temp = []
    if (value.trim() === '') {
      temp = (await ((await this.API.start()) as unknown as Response).json()).items
    } else {
      temp = (await ((await this.API.search(value)) as unknown as Response).json()).films
    }

    this.setState({ value: temp })
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
