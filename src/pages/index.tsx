import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Loader } from '../components/loader/loader'

const Redirecting = () => {
  const router = useRouter()

  useEffect(() => {
    const savedValue = localStorage.getItem('paul-saved-value')
    savedValue ? router.push(`/films?page=1&search=${savedValue}`) : router.push('/films?page=1')
  }, [router])

  return <Loader theme="default" />
}

export default Redirecting
