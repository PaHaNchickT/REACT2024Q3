import { useState } from 'react'
import { TEXT_CONTENT } from '../constants'

import './search.css'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setPage, setSearchValue } from '../../services/searchSlice'
import { reduxStore } from '../types'

export function Search() {
  const searchValue = useSelector((state: reduxStore) => state.searchData.searchData.value)
  const [inputValue, setInputValue] = useState(searchValue)
  // const navigate = useNavigate()

  const dispatch = useDispatch()

  const searchButtonHandler = () => {
    dispatch(
      setSearchValue({
        value: inputValue,
      })
    )
    // let tempValue = value

    // tempValue === '' ? navigate('/1') : navigate(`/search/1`)
  }

  const resetSearch = () => {
    setInputValue('')
    dispatch(
      setSearchValue({
        value: '',
      })
    )
    dispatch(
      setPage({
        page: 1,
      })
    )
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
      <button className="search__error-btn" data-testid="search__error-btn">
        {TEXT_CONTENT.btnError}
      </button>
    </div>
  )
}
