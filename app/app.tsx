import { useNavigate, useSearchParams } from '@remix-run/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Results } from 'src/components/results/results'
import { Search } from 'src/components/search/search'
import { FilmInfo, FilmResp, reduxStore } from 'src/components/types'
import { setTheme } from 'src/services/themeSlice'

export default function App({ data }: { data: { results: FilmResp; details?: FilmInfo } }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))
    if (!detailsData.isClosed) navigate(`/films?${(searchParams.toString() && searchParams.toString()) || 'page=1'}`)
  }, [])

  return (
    <div className={`root__wrapper ${theme.color}`} data-testid={theme.color}>
      <Search />
      <Results data={data} />
    </div>
  )
}
