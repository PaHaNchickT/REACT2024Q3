import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Provider } from 'react-redux'
import { FilmResp } from 'src/components/types'
import { API } from 'src/services/API'
import store from 'src/services/store'
import App from '~/app'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)

  const results = await API().getFilms({
    value: url.searchParams.get('search') || '',
    page: url.searchParams.get('page') || '1',
  })
  const details = await API().getFilm(url.searchParams.get('details') || '9999')

  if (!results || !details) {
    return {
      notFound: true,
    }
  }

  return { results: results, details: details }
}

export default function Page() {
  const data = useLoaderData<typeof loader>() as unknown as { results: FilmResp }

  return (
    <Provider store={store}>
      <App data={data} />
    </Provider>
  )
}
