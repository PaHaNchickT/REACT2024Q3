import Link from 'next/link'
import { useContext } from 'react'
import { TEXT_CONTENT } from '../components/constants'
import { ThemeContext } from './[films&page=id]'

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
