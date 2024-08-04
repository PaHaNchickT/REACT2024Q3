import Link from 'next/link'
import { TEXT_CONTENT } from '../constants'
import { useSelector } from 'react-redux'
import { reduxStore } from '../types'

export function ErrorPage() {
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)

  return (
    <div className="error-page__wrapper" data-testid="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <Link href="/" className={theme.color}>
          {TEXT_CONTENT.btnErrorHome}
        </Link>
      </div>
    </div>
  )
}
