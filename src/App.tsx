import { Search } from './components/search/search'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { TEXT_CONTENT } from './components/constants'
import { Outlet } from 'react-router-dom'

export function App() {
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
      <Outlet />
    </ErrorBoundary>
  )
}
