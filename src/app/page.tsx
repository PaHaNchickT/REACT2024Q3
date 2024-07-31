'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader } from '../components/loader/loader'

const Redirecting = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/films?page=1')
  }, [router])

  return <Loader theme="default" />
}

export default Redirecting
