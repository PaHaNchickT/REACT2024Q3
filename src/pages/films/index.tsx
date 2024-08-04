import { API } from '../../services/API'
import { Search } from '../../components/search/search'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Results } from '../../components/results/results'
import { FilmResp } from '../../components/types'
import { Loader } from '../../components/loader/loader'
import { Router } from 'next/router'

export const getServerSideProps = async (context: { query: { page?: string; search?: string } }) => {
  const data = await API().getFilms({ value: context.query.search || '', page: context.query.page || '1' })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { results: data },
  }
}

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
} as {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
})

const App = ({ results }: { results: FilmResp }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    <>
      <Search />
      {loading ? <Loader theme="default" /> : <Results results={results} />}
    </>
  )
}

export default App
