import { Search } from './components/search/search'
import { Results } from './components/results/results'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { TEXT_CONTENT } from './components/constants'

export function App() {
  // const navigate = useNavigate()

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
}
