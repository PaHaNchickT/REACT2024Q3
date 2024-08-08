import type { MetaFunction } from '@remix-run/node'
import { useEffect } from 'react'
import { Loader } from 'src/components/loader/loader'
import { useNavigate } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Kinomania' },
    { name: 'description', content: 'Here you can find information about favorite movies and tv series' },
  ]
}

export default function Redirecting() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('paul-saved-value')) {
      navigate(`/films?page=1&search=${localStorage.getItem('paul-saved-value')}`)
    } else {
      navigate('/films?page=1')
    }
  }, [])

  return <Loader theme="default" />
}
