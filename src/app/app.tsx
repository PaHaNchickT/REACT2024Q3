'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter, useSearchParams } from 'next/navigation'
import { FilmInfo, FilmResp, reduxStore } from '../components/types'
import { setTheme } from '../services/themeSlice'
import Controller from './controller'

export default function App({ data }: { data: { results: FilmResp; details?: FilmInfo } }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('paul-theme') || 'light'))
    if (!detailsData.isClosed) router.push(`/films?${searchParams.toString() || 'page=1'}`)
  }, [])

  return <Controller data={data} />
}
