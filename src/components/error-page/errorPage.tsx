import { Link } from 'react-router-dom'
import { TEXT_CONTENT } from '../constants'
import './errorPage.css'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

export function ErrorPage() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="error-page__wrapper" data-testid="error-page__wrapper">
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
