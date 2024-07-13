import { SetStateAction, useEffect, useState } from 'react'
import { Search } from './components/search/search'
import { Results } from './components/results/results'
import { FilmObj } from './components/types'
import { API } from './components/utils/API'
import { LocalStorage } from './components/utils/localStorage'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { TEXT_CONTENT } from './components/constants'
import { Loader } from './components/loader/loader'
import { useLocation, useNavigate } from 'react-router-dom'

export function App() {
  const [filmsArr, setFilmsArr] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [pages, setPages] = useState(0)
  const [value, setValue] = useState(LocalStorage().getValue())
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const navigate = useNavigate()

  const buttonHandler = async (value: string, page: number) => {
    setLoading(true)
    setValue(value)
    setCurrentPage(page)

    const searchString = value.trim()
    let tempArr = []
    let tempPages = 0
    if (searchString === TEXT_CONTENT.errorID) {
      tempArr = ((await API().fakeRequest()) as unknown as { items: FilmObj[] }).items
    } else if (searchString === '') {
      const request = (await API().start(page)) as unknown as { items: FilmObj[]; totalPages: number }
      tempArr = request.items
      tempPages = request.totalPages
    } else {
      const request = (await API().search(searchString, page)) as unknown as {
        films: FilmObj[]
        searchFilmsCountResult: number
      }
      tempArr = request.films
      tempPages = Math.ceil(request.searchFilmsCountResult / 20)
    }

    setLoading(false)
    setFilmsArr(tempArr as SetStateAction<never[]>)
    setPages(tempPages)

    if (page > tempPages) {
      const pathNameArr = location.pathname.split('/')

      navigate(`${pathNameArr.slice(0, pathNameArr.length - 1).join('/')}/${tempPages}`)
      buttonHandler(value, tempPages)
    }
  }

  useEffect(() => {
    const pathNameArr = location.pathname.split('/')

    if (location.pathname === '/' || pathNameArr.length > 3) {
      navigate('1')
      LocalStorage().saveValue('')
      buttonHandler('', 1)
      //root page redirecting
    }

    if (
      (pathNameArr.length === 2 && (+pathNameArr[1] === 0 || +pathNameArr[1].split('&')[0] === 0)) ||
      (pathNameArr.length === 3 && (+pathNameArr[2] === 0 || +pathNameArr[2].split('&')[0] === 0))
    ) {
      navigate(`${pathNameArr.splice(0, pathNameArr.length - 1).join('/')}/1`)
      buttonHandler(LocalStorage().getValue(), 1)
      //zero pages for main and search
    }

    if (pathNameArr.length === 2 && (+pathNameArr[1].split('&')[0] || +pathNameArr[1])) {
      buttonHandler(LocalStorage().getValue(), +pathNameArr[1].split('&')[0] || +pathNameArr[1])
      //main page URL editing
    } else if (pathNameArr.length === 3) {
      buttonHandler(LocalStorage().getValue(), +pathNameArr[2].split('&')[0] || +pathNameArr[2])
      //search page URL editing
    } else {
      throw new Error('Not found')
      // 404 page redirecting
    }
  }, [])

  let resultsUI = (
    <Results filmsArr={filmsArr} pages={pages} currentPage={currentPage} value={value} onClick={buttonHandler} />
  )
  if (isLoading) resultsUI = <Loader theme="default" />

  return (
    <ErrorBoundary
      fallback={
        <div className="error__wrapper">
          <div className="error__cont">
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
