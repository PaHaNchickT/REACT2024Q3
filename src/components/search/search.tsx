import { useContext, useState } from 'react'
import { TEXT_CONTENT } from '../constants'

import './search.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../services/searchSlice'
import { reduxStore } from '../types'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../App'

export function Search() {
  const searchValue = useSelector((state: reduxStore) => state.searchData.searchData.value)
  const [inputValue, setInputValue] = useState(searchValue)
  const { theme, setTheme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const searchButtonHandler = () => {
    dispatch(
      setSearchValue({
        value: inputValue,
      })
    )
  }

  const resetSearch = () => {
    if (searchValue === '') return
    navigate('/')
  }

  const themeSwapping = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    console.log(theme)
  }

  return (
    <div className="search__cont">
      <button onClick={resetSearch}>{TEXT_CONTENT.btnHome}</button>
      <form className="search__panel-wrapper" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          value={inputValue}
          placeholder={TEXT_CONTENT.searchPH}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
        />
        <button type="submit" onClick={searchButtonHandler}>
          {TEXT_CONTENT.btnSearch}
        </button>
      </form>
      <div className="search__theme-wrapper" data-testid="search__theme-wrapper" onClick={themeSwapping}>
        <div className="search__theme-btn">Theme</div>
      </div>
    </div>
  )
}
