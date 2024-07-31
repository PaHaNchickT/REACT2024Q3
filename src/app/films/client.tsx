'use client'

import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Search } from '../../components/search/search'
import { Results } from '../../components/results/results'
import { Provider } from 'react-redux'
import store from '../../services/store'

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
} as {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
})

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(localStorage.getItem('paul-theme') || 'light')
  }, [])

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`root__wrapper ${theme}`} data-testid={theme}>
          <Search />
          <Results />
        </div>
      </ThemeContext.Provider>
    </Provider>
  )
}
