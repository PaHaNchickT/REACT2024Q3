import { Link, useRouteError } from 'react-router-dom'
import { TEXT_CONTENT } from '../constants'
import './errorPage.css'
import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export function ErrorPage() {
  const [savedValue, setSavedValue] = useLocalStorage('')
  const error = useRouteError()
  console.log(error)

  useEffect(() => {
    setSavedValue('')
  }, [])

  return (
    <div className="error-page__wrapper" key={savedValue}>
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <Link to="/1">{TEXT_CONTENT.btnErrorHome}</Link>
      </div>
    </div>
  )
}
