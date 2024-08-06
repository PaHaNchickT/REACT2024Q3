'use client'

import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from '../components/search/search'
import { Loader } from '../components/loader/loader'
import { FilmInfo, FilmResp, reduxStore } from '../components/types'
import { setTheme } from '../services/themeSlice'
import store from '../services/store'

const Results = dynamic(() => import('../components/results/results').then((module) => module.Results), {
  ssr: false,
  loading: () => <Loader theme="default" />,
})

export default function App({ data }: { data: { results: FilmResp; details?: FilmInfo } }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))
    if (!detailsData.isClosed) router.push(`/films?${(searchParams.toString() && searchParams.toString()) || 'page=1'}`)
  }, [])

  return (
    <Provider store={store}>
      <div className={`root__wrapper ${theme.color}`} data-testid={theme.color}>
        <Search />
        <Results data={data} />
      </div>
    </Provider>
  )
}
