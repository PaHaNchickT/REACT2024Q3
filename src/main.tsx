import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { ErrorPage } from './components/error-page/errorPage.tsx'
import { Provider } from 'react-redux'
import store from './services/store.ts'
import ErrorBoundary from './components/error-boundary/errorBoundary.tsx'
import { ControlledForm } from './components/controlled-form/controlledForm.tsx'
import { UncontrolledForm } from './components/uncontrolled-form/uncontrolledForm.tsx'
import { App } from './app.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'controlled',
    element: <ControlledForm />,
  },
  {
    path: 'uncontrolled',
    element: <UncontrolledForm />,
  },
])

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ErrorBoundary>
    </React.StrictMode>
  )
}
