'use client'

import '../styles/global.css'
import '../components/search/search.css'
import '../components/results/results.css'
import '../components/pagination/pagination.css'
import '../components/loader/loader.css'
import '../components/no-results/no-results.css'
import '../components/selected-panel/selected-info.css'
import '../components/error-page/errorPage.css'
import '../components/error-boundary/errorBoundary.css'
import '../components/details/details.css'
import { Provider } from 'react-redux'
import store from '../services/store'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
