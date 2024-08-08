import { useEffect, useState } from 'react'
import { TEXT_CONTENT } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { reduxStore } from '../types'
import { setTheme } from '../../services/themeSlice'
import { setIsClosed } from '../../services/detailsSlice'
import { useNavigate, useSearchParams } from '@remix-run/react'

export function Search() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const [inputValue, setInputValue] = useState('')
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)

  const searchButtonHandler = () => {
    if (inputValue !== '') {
      localStorage.setItem('paul-saved-value', inputValue)

      params.set('search', inputValue)
      params.set('page', '1')
      params.delete('details')
      navigate(params.toString() ? `films?${params.toString()}` : 'films')

      dispatch(
        setIsClosed({
          isClosed: false,
          filmId: 0,
        })
      )
    }
  }

  const resetSearch = () => {
    localStorage.removeItem('paul-saved-value')

    if (!searchParams.get('search') && searchParams.get('page') === '1') return
    navigate('/films?page=1')

    dispatch(
      setIsClosed({
        isClosed: false,
        filmId: 0,
      })
    )
  }

  const themeSwapping = () => {
    if (theme.color === 'light') {
      dispatch(setTheme('dark'))
      localStorage.setItem('paul-theme', 'dark')
    } else {
      dispatch(setTheme('light'))
      localStorage.setItem('paul-theme', 'light')
    }
  }

  useEffect(() => {
    setInputValue(searchParams.get('search') || '')
  }, [searchParams])

  return (
    <div className="search__cont">
      <button className={theme.color} onClick={resetSearch}>
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
        <button className={theme.color} type="submit" onClick={searchButtonHandler}>
          {TEXT_CONTENT.btnSearch}
        </button>
      </form>
      <div
        className={`search__theme-wrapper ${theme.color}`}
        data-testid="search__theme-wrapper"
        onClick={themeSwapping}
      >
        <div className={`search__theme-btn ${theme.color}`} data-testid={theme.color || 'light'}></div>
      </div>
    </div>
  )
}
