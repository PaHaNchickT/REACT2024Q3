import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { Search } from '../../components/search/search'
import { Results } from '../../components/results/results'

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
} as {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
})

export default function App() {
  let loadedThemeValue

  if (typeof window !== 'undefined') loadedThemeValue = localStorage.getItem('paul-theme')
  const [theme, setTheme] = useState(loadedThemeValue || 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`root__wrapper ${theme}`} data-testid={theme}>
        <Search />
        <Results />
      </div>
    </ThemeContext.Provider>
  )
}
