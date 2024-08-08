import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import '../src/styles/global.css'
import '../src/components/error-page/errorPage.css'
import '../src/components/search/search.css'
import '../src/components/results/results.css'
import '../src/components/pagination/pagination.css'
import '../src/components/loader/loader.css'
import '../src/components/no-results/no-results.css'
import '../src/components/selected-panel/selected-info.css'
import '../src/components/error-boundary/errorBoundary.css'
import '../src/components/details/details.css'
import ErrorPage from 'src/components/error-page/errorPage'
import { Provider } from 'react-redux'
import store from 'src/services/store'
import { MetaFunction } from '@remix-run/node'
import { TEXT_CONTENT } from 'src/components/constants'

export const meta: MetaFunction = () => {
  return [{ title: TEXT_CONTENT.metaTitle }, { name: 'description', content: TEXT_CONTENT.metaDescr }]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>{children}</Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  return (
    <Provider store={store}>
      <ErrorPage />
    </Provider>
  )
}

export default function MyApp() {
  return <Outlet />
}
