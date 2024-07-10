import { Component } from 'react'
import Search from './components/search/search'
import Results from './components/results/results'
import { FilmObj } from './components/types'
import { API } from './components/utils/API'
import { LocalStorage } from './components/utils/localStorage'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { CLASS_NAMES, TEXT_CONTENT } from './components/constants'
import { Loader } from './components/loader/loader'

class App extends Component<Record<string, string>, { value: FilmObj[]; isLoading: boolean }> {
  API = API()

  state = {
    value: [],
    isLoading: true,
  }

  constructor(props: Record<string, string>) {
    super(props)

    this.buttonHandler = this.buttonHandler.bind(this)
  }

  async buttonHandler(value: string) {
    this.setState({ isLoading: true })

    const searchString = value.trim()
    let temp = []
    if (searchString === TEXT_CONTENT.errorID) {
      temp = ((await this.API.fakeRequest()) as unknown as { items: FilmObj[] }).items
    } else if (searchString === '') {
      temp = ((await this.API.start()) as unknown as { items: FilmObj[] }).items
    } else {
      temp = ((await this.API.search(searchString)) as unknown as { films: FilmObj[] }).films
    }

    this.setState({ isLoading: false })
    this.setState({ value: temp })
  }

  componentDidMount() {
    this.buttonHandler(LocalStorage().getValue())
  }

  render() {
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
