import type { AppProps } from 'next/app'
import store from '../services/store'
import { Provider } from 'react-redux'

import '../styles/global.css'
import '../styles/errorPage.css'
import '../components/search/search.css'
import '../components/results/results.css'
import '../components/pagination/pagination.css'
import '../components/loader/loader.css'
import '../components/no-results/no-results.css'
import '../components/selected-panel/selected-info.css'
import '../components/error-boundary/errorBoundary.css'
import '../components/details/details.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
