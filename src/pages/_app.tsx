import type { AppProps } from 'next/app'
import store from '../services/store'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
