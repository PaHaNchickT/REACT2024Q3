import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../../services/API'
import { FilmInfo, FilmResp, reduxStore } from '../../../components/types'
import { Search } from '../../../components/search/search'
import { Results } from '../../../components/results/results'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { setTheme } from '../../../services/themeSlice'

export const getServerSideProps = async (context: {
  query: { page?: string; search?: string }
  params: { id: string }
}) => {
  const results = await API().getFilms({ value: context.query.search || '', page: context.query.page || '1' })
  const details = await API().getFilm(context.params.id)

  if (!results || !details) {
    return {
      notFound: true,
    }
  }

  return {
    props: { results: results, details: details },
  }
}

const App = (props: { results: FilmResp; details: FilmInfo }) => {
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
    <div className={`root__wrapper ${theme.color}`}>
      <Search />
      <Results data={props} />
    </div>
  )
}

export default App
