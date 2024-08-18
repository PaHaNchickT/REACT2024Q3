import { Link } from 'react-router-dom'
import { TEXT_CONTENT } from '../constants'
import './errorPage.css'

export function ErrorPage() {
  return (
    <div className="error-page__wrapper" data-testid="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <Link to="/">{TEXT_CONTENT.btnErrorHome}</Link>
      </div>
    </div>
  )
}
