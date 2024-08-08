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

  const data = await API().getFilms({
    value: url.searchParams.get('search') || '',
    page: url.searchParams.get('page') || '1',
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return data
}

export default function Page() {
  const results = useLoaderData<typeof loader>() as unknown as FilmResp

  return (
    <Provider store={store}>
      <App data={{ results: results }} />
    </Provider>
  )
}

// import type { LoaderFunctionArgs } from '@remix-run/node' // or cloudflare/deno
// { params }: LoaderFunctionArgs
