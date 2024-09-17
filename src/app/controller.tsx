'use client'

import { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { Search } from '../components/search/search'
import { Loader } from '../components/loader/loader'
import { FilmInfo, FilmResp, reduxStore } from '../components/types'
import store from '../services/store'

const Results = dynamic(() => import('../components/results/results').then((module) => module.Results), {
  ssr: false,
  loading: () => <Loader theme="default" />,
})

export default function Controller({ data }: { data: { results: FilmResp; details?: FilmInfo } }) {
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)

  const [loading, setLoading] = useState(false)

  const loaderHandler = () => setLoading(true)

  useEffect(() => {
    setLoading(false)
  }, [data.results])

  return (
    <Provider store={store}>
      <div className={`root__wrapper ${theme.color}`} data-testid={theme.color}>
        <Search loaderHandler={loaderHandler} />
        <Results data={data} loaderHandler={loaderHandler} isLoading={loading} />
      </div>
    </Provider>
  )
}
