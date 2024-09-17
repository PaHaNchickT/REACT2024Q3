import { FilmInfo, FilmResp } from '../../../components/types'
import { API } from '../../../services/API'
import App from '../../app'
import { getFilms } from '../page'

export function generateStaticParams() {
  return [{ slug: ['id'] }]
}

export const getFilm = async (id: string) => {
  const data = await API().getFilm(id)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return data
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { page: string; search: string }
}) {
  const results = (await getFilms({
    page: searchParams.page || '1',
    search: searchParams.search || '',
  })) as unknown as FilmResp

  const details = (await getFilm(params.id)) as unknown as FilmInfo

  return <App data={{ results: results, details: details }} />
}
