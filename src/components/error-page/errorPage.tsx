import { Link, useRouteError } from 'react-router-dom'
import { TEXT_CONTENT } from '../constants'
import './errorPage.css'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

export function ErrorPage() {
  const { theme } = useContext(ThemeContext)

  const error = useRouteError()
  if (error) console.log(error)

  if (!document.body.className) document.body.className = theme

  return (
    <div className="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <Link to="/" className={theme}>
          {TEXT_CONTENT.btnErrorHome}
        </Link>
      </div>
    </div>
  )
}
