import type { MetaFunction } from '@remix-run/node'
import { useEffect } from 'react'
import { Loader } from 'src/components/loader/loader'
import { useNavigate } from '@remix-run/react'
import { TEXT_CONTENT } from 'src/components/constants'

export const meta: MetaFunction = () => {
  return [{ title: TEXT_CONTENT.metaTitle }, { name: 'description', content: TEXT_CONTENT.metaDescr }]
}

export default function Redirecting() {
  const navigate = useNavigate()

  useEffect(() => {
    const savedValue = localStorage.getItem('paul-saved-value')
    savedValue ? navigate(`/films?page=1&search=${savedValue}`) : navigate('/films?page=1')
  }, [])

  return <Loader theme="default" />
}
