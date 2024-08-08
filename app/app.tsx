import { useSearchParams } from '@remix-run/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Results } from 'src/components/results/results'
import { Search } from 'src/components/search/search'
import { FilmInfo, FilmResp, reduxStore } from 'src/components/types'
import { setTheme } from 'src/services/themeSlice'

export default function App({ data }: { data: { results: FilmResp; details?: FilmInfo } }) {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))

    if (!detailsData.isClosed) {
      const searchValue = searchParams.get('search')
      setSearchParams(`page=${searchParams.get('page') || '1'}${(searchValue && `&search=${searchValue}`) || ''}`)
    }
  }, [])

  return (
    <div className={`root__wrapper ${theme.color}`} data-testid={theme.color}>
      <Search />
      <Results data={data} />
    </div>
  )
}
