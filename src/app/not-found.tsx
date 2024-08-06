'use client'

import Link from 'next/link'
import { TEXT_CONTENT } from '../components/constants'
import { useDispatch, useSelector } from 'react-redux'
import { reduxStore } from '../components/types'
import { useEffect } from 'react'
import { setTheme } from '../services/themeSlice'

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
        <Link href="/films?page=1" className={theme.color}>
          {TEXT_CONTENT.btnErrorHome}
        </Link>
      </div>
    </div>
  )
}
