import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { reduxStore } from '../types'
import { TEXT_CONTENT } from '../constants'
import { setTheme } from 'src/services/themeSlice'

export default function ErrorPage() {
  const dispatch = useDispatch()
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))
  }, [])

  return (
    <div className={`error-page__wrapper root__wrapper ${theme.color}`} data-testid="error-page__wrapper">
      <div className="error-page__cont">
        <h2>{TEXT_CONTENT.errorPageTitle}</h2>
        <div></div>
        <p>{TEXT_CONTENT.errorPageText}</p>
        <a href="/films?page=1" className={theme.color}>
          {TEXT_CONTENT.btnErrorHome}
        </a>
      </div>
    </div>
  )
}
