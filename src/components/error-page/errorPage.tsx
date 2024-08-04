import Link from 'next/link'
import { TEXT_CONTENT } from '../constants'
import { useContext } from 'react'
import { ThemeContext } from '../../pages/films'

export function ErrorPage() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="error-page__wrapper" data-testid="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <Link href="/" className={theme}>
          {TEXT_CONTENT.btnErrorHome}
        </Link>
      </div>
    </div>
  )
}
