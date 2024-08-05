'use client'

import { useEffect, useState } from 'react'
import { Search } from '../../components/search/search'
import { Results } from '../../components/results/results'
import { Provider } from 'react-redux'
import store from '../../services/store'
import { FilmResp } from '../../components/types'

export default function App({ results }: { results: FilmResp }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(localStorage.getItem('paul-theme') || 'light')
  }, [])

  return (
    <Provider store={store}>
      <div className={`root__wrapper ${theme}`} data-testid={theme}>
        <Search />
        <Results results={results} />
      </div>
    </Provider>
  )
}
