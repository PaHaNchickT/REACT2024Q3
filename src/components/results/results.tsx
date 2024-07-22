import { reduxStore } from '../types'
import { TEXT_CONTENT } from '../constants'

import './results.css'
import { Pagination } from '../pagination/pagination'
import { NoResults } from '../no-results/no-results'
import { numberToArray } from '../../utils/numberToArray'
import { useGetFilmsQuery } from '../../services/API'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../loader/loader'
import { setIsClosed } from '../../services/detailsSlice'
import { Details } from '../details/details'
import { useSearchParams } from 'react-router-dom'
import { setPage, setSearchValue } from '../../services/searchSlice'
import { ChangeEvent, useContext, useEffect, MouseEvent } from 'react'
import { ErrorPage } from '../error-page/errorPage'
import { addItemData, removeItemData } from '../../services/selectedSlice'
import { Selected } from '../selected-panel/selected-info'
import { ThemeContext } from '../../App'
import { setResultsData } from '../../services/resultsSlice'

export function Results() {
  const selectedItems: number[] = []
  const searchData = useSelector((state: reduxStore) => state.searchData.searchData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)
  const selectedData = useSelector((state: reduxStore) => state.selectedData.selectedData)
  const [searchParams, setSearchParams] = useSearchParams()
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  dispatch(setPage({ page: searchParams.get('page') || 1 }))
  dispatch(setSearchValue({ value: searchParams.get('search') || '' }))

  const {
    data = { items: [], total: 0, totalPages: 0 },
    isFetching,
    error,
  } = useGetFilmsQuery(`keyword=${searchData.value}&page=${searchData.page}`)

  if (error) console.log(error)

  dispatch(setResultsData(data))

  const openDetails = (event: MouseEvent) => {
    if (detailsData.isClosed || (event.target as HTMLElement).tagName === 'INPUT') return

    dispatch(
      setIsClosed({
        isClosed: true,
        filmId: +(event.currentTarget as HTMLDivElement).id,
      })
    )

    setSearchParams(
      Object.assign(Object.fromEntries(searchParams), {
        page: searchData.page.toString(),
        details: (event.currentTarget as HTMLDivElement).id,
      })
    )
  }

  const closeDetails = (event: MouseEvent<HTMLDivElement>) => {
    if (
      !detailsData.isClosed ||
      (event.target as HTMLInputElement).tagName === 'INPUT' ||
      (event.target as HTMLInputElement).dataset.family === 'selected-bar'
    )
      return

    dispatch(
      setIsClosed({
        isClosed: false,
        filmId: 0,
      })
    )

    setSearchParams(
      Object.fromEntries(Object.entries(Object.fromEntries(searchParams)).filter(([key]) => key !== 'details'))
    )
  }

  const checkboxHandling = (event: ChangeEvent) => {
    let targetItemData
    data.items.forEach((item) => {
      if (item.kinopoiskId === +(event.target as HTMLInputElement).name) targetItemData = item
    })

    if ((event.target as HTMLInputElement).checked) {
      dispatch(addItemData(targetItemData))
    } else {
      dispatch(removeItemData(targetItemData))
    }
  }

  data.items.forEach((defaultItem) => {
    selectedData.selectedItems.forEach((selectedItem) => {
      if (defaultItem === selectedItem) selectedItems.push(defaultItem.kinopoiskId)
    })
  })

  useEffect(() => {
    let queryParams

    if (searchData.value === '') {
      queryParams = {
        page: searchData.page.toString(),
      }
    } else {
      queryParams = { search: searchData.value, page: searchData.page.toString() }
    }

    setSearchParams(queryParams)
  }, [searchData.value])

  const films = data.items.map((film) => (
    <div
      className={`results__item ${theme}`}
      data-testid="results__item"
      key={film.kinopoiskId}
      id={film.kinopoiskId.toString()}
      onClick={(event) => openDetails(event as unknown as MouseEvent)}
    >
      <img
        src={film.posterUrlPreview}
        alt={`${film.nameEn || film.nameOriginal || film.nameRu} cover`}
        width="200px"
        height="300px"
        className={theme}
      />
      <div className="results__item-info">
        <p className="results__item-name">
          <span>Title: </span>
          {film.nameEn || film.nameOriginal || film.nameRu}
        </p>
        <p className="results__item-year">
          <span>Year: </span>
          {+film.year || TEXT_CONTENT.itemYearStub}
        </p>
        <p className="results__item-raiting">
          <span>IMDb: </span>
          {film.ratingImdb || +film.rating || TEXT_CONTENT.itemRaitingStub}
        </p>
      </div>
      <input
        type="checkbox"
        data-testid="checkbox"
        name={film.kinopoiskId.toString()}
        onChange={(event) => checkboxHandling(event)}
        checked={selectedItems.includes(film.kinopoiskId)}
      ></input>
    </div>
  ))

  const pages = numberToArray(data.totalPages).map((page) => (
    <Pagination page={page} currentPage={searchData.page} key={page} />
  ))

  let resultsUI = (
    <div className="results__wrapper" onClick={(event) => closeDetails(event)}>
      <div className="results__items">{films}</div>
      <ul className="pagination__cont">{pages}</ul>
      {Boolean(selectedData.selectedItems.length) && <Selected />}
    </div>
  )

  if (isFetching) {
    resultsUI = <Loader theme="default" />
  } else if (error) {
    resultsUI = <ErrorPage />
  } else if (!data.items.length) {
    resultsUI = <NoResults />
  }

  return (
    <section className="results__cont">
      {resultsUI}
      {detailsData.isClosed && <Details closeDetails={closeDetails} />}
    </section>
  )
}
