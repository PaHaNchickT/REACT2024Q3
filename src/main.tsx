import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { App } from './App.tsx'
import './index.css'
import { ErrorPage } from './components/error-page/errorPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'search/:pagenumber',
        element: <App />,
      },
      {
        path: ':pagenumber',
        element: <App />,
      },
      {
        path: 'search/:pagenumber/:id',
        element: <App />,
      },
    ],
  },
  {
    path: 'search',
    element: <Navigate to="/" />,
  },
])

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
