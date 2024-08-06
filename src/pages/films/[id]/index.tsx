import { useSelector } from 'react-redux'
import { API } from '../../../services/API'
import { FilmInfo, FilmResp, reduxStore } from '../../../components/types'
import { Search } from '../../../components/search/search'
import { Results } from '../../../components/results/results'

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
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)

  return (
    <div className={`root__wrapper ${theme.color}`}>
      <Search />
      <Results data={props} />
    </div>
  )
}

export default App
