import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './forms.css'
import { ErrorPage } from './components/error-page/errorPage.tsx'
import { Provider } from 'react-redux'
import store from './services/store.ts'
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
    errorElement: <ErrorPage />,
  },
  {
    path: 'uncontrolled',
    element: <UncontrolledForm />,
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
