import { Search } from './components/search/search'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { TEXT_CONTENT } from './components/constants'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { Results } from './components/results/results'

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
} as {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
})

export function App() {
  const [theme, setTheme] = useState(localStorage.getItem('paul-theme') || 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
        <div className={`root__wrapper ${theme}`} data-testid={theme}>
          <Search />
          <Results />
        </div>
      </ErrorBoundary>
    </ThemeContext.Provider>
  )
}
