import { SetStateAction, useEffect, useState } from 'react'

export function useLocalStorage(savedValue: string) {
  const getValue = () => {
    const storage = localStorage.getItem('paul-saved-value')

    if (storage) return storage
    return savedValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    localStorage.setItem('paul-saved-value', value)
  }, [value])

  const output = [value, setValue] as unknown as [string, React.Dispatch<SetStateAction<string>>]
  return output
}
