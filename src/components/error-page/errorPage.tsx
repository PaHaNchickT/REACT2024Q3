import { useRouteError } from 'react-router-dom'
import { TEXT_CONTENT } from '../constants'
import './errorPage.css'

export function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  return (
    <div className="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
      </div>
    </div>
  )
}
