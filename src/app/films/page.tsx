import { FilmResp } from '../../components/types'
import { API } from '../../services/API'
import App from '../app'

const getFilms = async (query: { page: string; search: string }) => {
  const data = await API().getFilms({ value: query.search, page: query.page })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return data
}

export default async function Page({ searchParams }: { searchParams: { page: string; search: string } }) {
  const results = (await getFilms({
    page: searchParams.page || '1',
    search: searchParams.search || '',
  })) as unknown as FilmResp

  return <App data={{ results: results }} />
}
