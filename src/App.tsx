import { Search } from './components/search/search'
import ErrorBoundary from './components/error-boundary/errorBoundary'
import { TEXT_CONTENT } from './components/constants'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme: string) => {
    console.log(theme)
  },
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
          <Outlet />
        </div>
      </ErrorBoundary>
    </ThemeContext.Provider>
  )
}
