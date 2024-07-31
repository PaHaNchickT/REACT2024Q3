import { useContext, useEffect, useState } from 'react'
import { TEXT_CONTENT } from '../constants'
import { useSearchParams, useRouter } from 'next/navigation'
import { ThemeContext } from '../../app/films/client'

export function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = new URLSearchParams(searchParams)
  const [inputValue, setInputValue] = useState('')
  const { theme, setTheme } = useContext(ThemeContext)

  const searchButtonHandler = () => {
    if (inputValue !== '') {
      params.set('search', inputValue)
      params.set('page', '1')
      params.delete('details')
      router.push(params.toString() ? `films?${params.toString()}` : 'films')
    }
  }

  const resetSearch = () => {
    if (!searchParams.get('search') && searchParams.get('page') === '1') return
    router.push('/films?page=1')
  }

  const themeSwapping = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('paul-theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('paul-theme', 'light')
    }
  }

  useEffect(() => {
    setInputValue(searchParams.get('search') || '')
  }, [searchParams])

  return (
    <div className="search__cont">
      <button className={theme} onClick={resetSearch}>
        {TEXT_CONTENT.btnHome}
      </button>
      <form className="search__panel-wrapper" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          value={inputValue}
          placeholder={TEXT_CONTENT.searchPH}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
        />
        <button className={theme} type="submit" onClick={searchButtonHandler}>
          {TEXT_CONTENT.btnSearch}
        </button>
      </form>
      <div className={`search__theme-wrapper ${theme}`} data-testid="search__theme-wrapper" onClick={themeSwapping}>
        <div className={`search__theme-btn ${theme}`}></div>
      </div>
    </div>
  )
}
