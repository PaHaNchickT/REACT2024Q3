'use client'

import { useEffect } from 'react'
import { Search } from '../../components/search/search'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '../../services/store'
import { FilmResp, reduxStore } from '../../components/types'
import { setTheme } from '../../services/themeSlice'
import dynamic from 'next/dynamic'
import { Loader } from '../../components/loader/loader'

const Results = dynamic(() => import('../../components/results/results').then((module) => module.Results), {
  ssr: false,
  loading: () => <Loader theme="default" />,
})

export default function App({ results }: { results: FilmResp }) {
  const dispatch = useDispatch()
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))
  }, [])

  return (
    <Provider store={store}>
      <div className={`root__wrapper ${theme.color}`} data-testid={theme.color}>
        <Search />
        <Results results={results} />
      </div>
    </Provider>
  )
}
