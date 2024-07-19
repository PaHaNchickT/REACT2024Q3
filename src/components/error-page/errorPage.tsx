import { Link, useRouteError } from 'react-router-dom'
import { TEXT_CONTENT } from '../constants'
import './errorPage.css'

export function ErrorPage() {
  const error = useRouteError()
  if (error) console.log(error)

  return (
    <div className="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <Link to="/">{TEXT_CONTENT.btnErrorHome}</Link>
      </div>
    </div>
  )
}
