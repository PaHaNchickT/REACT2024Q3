import { API } from '../../services/API'
import { Search } from '../../components/search/search'
import { useEffect, useState } from 'react'
import { Results } from '../../components/results/results'
import { FilmResp, reduxStore } from '../../components/types'
import { Loader } from '../../components/loader/loader'
import { Router } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../services/themeSlice'

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

const App = ({ results }: { results: FilmResp }) => {
  const dispatch = useDispatch()
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))

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
    <div className={`root__wrapper ${theme.color}`}>
      <Search />
      {loading ? <Loader theme="default" /> : <Results results={results} />}
    </div>
  )
}

export default App
