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
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function MyApp() {
  return <Outlet />
}
