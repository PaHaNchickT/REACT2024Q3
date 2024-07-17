// import { SetStateAction, useEffect, useState } from 'react'
import { Search } from './components/search/search'
import { Results } from './components/results/results'
// import { FilmObj, reduxStore } from './components/types'
// import { API } from './utils/API'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { TEXT_CONTENT } from './components/constants'
// import { Loader } from './components/loader/loader'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { useGetFilmsQuery } from './services/API'
// import { setResultsData } from './services/resultsSlice'

export function App() {
  // const [filmsArr, setFilmsArr] = useState([])
  // const [isLoading, setLoading] = useState(true)
  // const [pages, setPages] = useState(0)
  // const [currentPage, setCurrentPage] = useState(1)
  // const location = useLocation()
  // const navigate = useNavigate()

  // const buttonHandler = async (value: string, page: number) => {
  //   // setLoading(true)
  //   // setValue(value)
  //   // setCurrentPage(page)
  //   // const searchString = value.trim()
  //   // let request
  //   // if (searchString === TEXT_CONTENT.errorID) {
  //   //   request = (await API().fakeRequest()) as unknown as { items: FilmObj[]; totalPages: number }
  //   // } else if (searchString === '') {
  //   //   request = (await API().start(page)) as unknown as { items: FilmObj[]; totalPages: number }
  //   // } else {
  //   //   request = (await API().search(searchString, page)) as unknown as { items: FilmObj[]; totalPages: number }
  //   // }
  //   // setLoading(false)
  //   // setFilmsArr(request.items as SetStateAction<never[]>)
  //   // setPages(request.totalPages)
  //   // if (page > request.totalPages && request.totalPages !== 0) {
  //   //   const pathNameArr = location.pathname.split('/')
  //   //   navigate(`${pathNameArr.slice(0, pathNameArr.length - 1).join('/')}/${request.totalPages}`)
  //   //   buttonHandler(value, request.totalPages)
  //   // }
  // }

  // useEffect(() => {
  //   const pathNameArr = location.pathname.split('/')

  //   if (location.pathname === '/' || pathNameArr.length > 3) {
  //     navigate('1')
  //     setSavedValue('')
  //     buttonHandler('', 1)
  //     //root page redirecting
  //   }

  //   if (pathNameArr.length === 3 && !savedValue && +pathNameArr[2]) {
  //     navigate(`/${pathNameArr[2]}`)
  //     buttonHandler('', +pathNameArr[2])
  //     //page redirecting when on home page user tries to enter search in URL
  //   } else if (pathNameArr.length === 2 && savedValue && +pathNameArr[1]) {
  //     navigate(`/${pathNameArr[1]}`)
  //     setSavedValue('')
  //     buttonHandler('', +pathNameArr[1])
  //     //page redirecting when on search page user tries to delete search from URL
  //   }

  //   if (
  //     (pathNameArr.length === 2 && (+pathNameArr[1] === 0 || +pathNameArr[1].split('&')[0] === 0)) ||
  //     (pathNameArr.length === 3 && (+pathNameArr[2] === 0 || +pathNameArr[2].split('&')[0] === 0))
  //   ) {
  //     navigate(`${pathNameArr.splice(0, pathNameArr.length - 1).join('/')}/1`)
  //     buttonHandler(savedValue as string, 1)
  //     //zero pages for main and search
  //   } else if (pathNameArr.length === 2 && (+pathNameArr[1].split('&')[0] || +pathNameArr[1])) {
  //     buttonHandler(savedValue as string, +pathNameArr[1].split('&')[0] || +pathNameArr[1])
  //     //main page URL editing
  //   } else if (pathNameArr.length === 3 && (+pathNameArr[2].split('&')[0] || +pathNameArr[2])) {
  //     buttonHandler(savedValue as string, +pathNameArr[2].split('&')[0] || +pathNameArr[2])
  //     //search page URL editing
  //   } else if (pathNameArr.length === 3 && !+pathNameArr[2]) {
  //     navigate('error/404')
  //     // 404 page redirecting in wrond page number
  //   } else {
  //     navigate('error/404')
  //     // 404 page redirecting in all other cases
  //   }
  // }, [])

  return (
    <ErrorBoundary
      fallback={
        <div className="error__wrapper" data-testid="error__wrapper">
          <div className="error__cont">
            <h2>{TEXT_CONTENT.errorTitle}</h2>
            <div></div>
            <p>{TEXT_CONTENT.errorText}</p>
          </div>
        </div>
      }
    >
      <Search />
      <Results />
    </ErrorBoundary>
  )

  // return (
  //   <ErrorBoundary
  //     fallback={
  //       <div className="error__wrapper" data-testid="error__wrapper">
  //         <div className="error__cont">
  //           <h2>{TEXT_CONTENT.errorTitle}</h2>
  //           <div></div>
  //           <p>{TEXT_CONTENT.errorText}</p>
  //         </div>
  //       </div>
  //     }
  //   >
  //     <Search initialValue={savedValue} onClick={buttonHandler} />
  //     {resultsUI}
  //   </ErrorBoundary>
  // )
}

//
// Обновление состояния:
// const dispatch = useDispatch()
// dispatch(setSearchValue(value)), где value - то, что нужно сохранить
//
// Обращение к состоянию:
// const searchString = useSelector((state) => state.searchString.searchString)
