import Link from 'next/link'
// import './errorPage.css'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { TEXT_CONTENT } from '../components/constants'

export default function ErrorPage() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="error-page__wrapper" data-testid="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <Link href="/films?page=1" className={theme}>
          {TEXT_CONTENT.btnErrorHome}
        </Link>
      </div>
    </div>
  )
}
