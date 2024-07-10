import { SetStateAction, useEffect, useState } from 'react'
import { Search } from './components/search/search'
import { Results } from './components/results/results'
import { FilmObj } from './components/types'
import { API } from './components/utils/API'
import { LocalStorage } from './components/utils/localStorage'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { CLASS_NAMES, TEXT_CONTENT } from './components/constants'
import { Loader } from './components/loader/loader'

export function App() {
  const [value, setValue] = useState([])
  const [isLoading, setLoading] = useState(true)

  const buttonHandler = async (value: string) => {
    setLoading(true)

    const searchString = value.trim()
    let tempValue = []
    if (searchString === TEXT_CONTENT.errorID) {
      tempValue = ((await API().fakeRequest()) as unknown as { items: FilmObj[] }).items
    } else if (searchString === '') {
      tempValue = ((await API().start()) as unknown as { items: FilmObj[] }).items
    } else {
      tempValue = ((await API().search(searchString)) as unknown as { films: FilmObj[] }).films
    }

    setLoading(false)
    setValue(tempValue as SetStateAction<never[]>)
  }

  useEffect(() => {
    buttonHandler(LocalStorage().getValue())
  }, [])

  let resultsUI = <Results value={value} />
  if (isLoading) resultsUI = <Loader />

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
      <Search onClick={buttonHandler} />
      {resultsUI}
    </ErrorBoundary>
  )
}
