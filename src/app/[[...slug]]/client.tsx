'use client'

import dynamic from 'next/dynamic'
import { Provider } from 'react-redux'
import store from '../../services/store'
import { ErrorPage } from '../../components/error-page/errorPage'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Results } from '../../components/results/results'

const App = dynamic(() => import('../../App').then((module) => module.App), { ssr: false })

const router = createBrowserRouter([
  {
    path: 'films',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Results />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="films" />,
    errorElement: <ErrorPage />,
  },
])

export function ClientOnly() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
