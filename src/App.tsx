import { Component, ReactNode } from 'react'
import Search from './components/search/search'
import Results from './components/results/results'
import { FilmObj, GenObj } from './components/types'
import API from './components/utils/API'
import LocalStorage from './components/utils/localStorage'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { CLASS_NAMES, TEXT_CONTENT } from './components/constants'
import Loader from './components/loader/loader'

class App extends Component<GenObj, { [key: string]: FilmObj[] | boolean }> {
  API = new API()

  state = {
    value: [],
    isLoading: true,
  }

  constructor(props: { [key: string]: string }) {
    super(props)

    this.buttonHandler = this.buttonHandler.bind(this)
  }

  async buttonHandler(value: string) {
    this.setState({ isLoading: true })

    const searchString = value.trim()
    let temp = []
    if (searchString === TEXT_CONTENT.errorID) {
      temp = (await ((await this.API.fakeRequest()) as unknown as Response).json()).items
    } else if (searchString === '') {
      temp = (await ((await this.API.start()) as unknown as Response).json()).items
    } else {
      temp = (await ((await this.API.search(searchString)) as unknown as Response).json()).films
    }

    this.setState({ isLoading: false })
    this.setState({ value: temp })
  }

  componentDidMount() {
    this.buttonHandler(new LocalStorage().getValue())
  }

  render(): ReactNode {
    let resultsUI = <Results value={this.state.value} />
    if (this.state.isLoading) {
      resultsUI = <Loader />
    }

    return (
      <ErrorBoundary
        fallback={
          <div className={CLASS_NAMES.errorWrapper}>
            <div className={CLASS_NAMES.errorCont}>
              <h2>{TEXT_CONTENT.errorTitle}</h2>
              <div></div>
              <p>{TEXT_CONTENT.errorText}</p>
            </div>
          </div>
        }
      >
        <Search onClick={this.buttonHandler} />
        {resultsUI}
      </ErrorBoundary>
    )
  }
}

export default App
