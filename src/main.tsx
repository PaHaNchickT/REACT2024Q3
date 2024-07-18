import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { App } from './App.tsx'
import './index.css'
import { ErrorPage } from './components/error-page/errorPage.tsx'
import { Provider } from 'react-redux'
import store from './services/store.ts'
import { Results } from './components/results/results.tsx'

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

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}
