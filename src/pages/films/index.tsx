import { useEffect, useState } from 'react'
import { Loader } from '../../components/loader/loader'
import { Router } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../services/themeSlice'
import { API } from '../../services/API'
import { FilmResp, reduxStore } from '../../components/types'
import { Search } from '../../components/search/search'
import { Results } from '../../components/results/results'
import { useRouter, useSearchParams } from 'next/navigation'

export const getServerSideProps = async (context: { query: { page?: string; search?: string } }) => {
  const results = await API().getFilms({ value: context.query.search || '', page: context.query.page || '1' })

  if (!results) {
    return {
      notFound: true,
    }
  }

  return {
    props: { results: results },
  }
}

const App = ({ results }: { results: FilmResp }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))
    router.push(`/films?${(searchParams.toString() && searchParams.toString()) || 'page=1'}`)

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
      {loading && !detailsData.isClosed ? <Loader theme="default" /> : <Results data={{ results: results }} />}
    </div>
  )
}

export default App
