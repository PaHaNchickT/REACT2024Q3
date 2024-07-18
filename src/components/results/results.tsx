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
import { useNavigate, useSearchParams } from 'react-router-dom'
import { setPage } from '../../services/searchSlice'
import { useEffect } from 'react'

export function Results() {
  const searchData = useSelector((state: reduxStore) => state.searchData.searchData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  dispatch(setPage({ page: searchParams.get('page') || '1' }))

  const { data = { items: [], total: 0, totalPages: 0 }, isFetching } = useGetFilmsQuery(
    `keyword=${searchData.value}&page=${searchData.page}`
  )

  const openDetails = (event: MouseEvent) => {
    if (detailsData.isClosed) return

    dispatch(
      setIsClosed({
        isClosed: true,
        filmId: +(event.currentTarget as HTMLDivElement).id,
      })
    )

    // navigate(`${location.pathname}&details=${filmId}`)
  }

  const closeDetails = () => {
    if (!detailsData.isClosed) return

    dispatch(
      setIsClosed({
        isClosed: false,
        filmId: 0,
      })
    )
    // navigate(location.pathname.split('&')[0])
  }

  useEffect(() => {
    navigate(`/films?page=${searchData.page}`)
  }, [])

  const films = data.items.map((film) => (
    <div
      className="results__item"
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
    </div>
  ))

  const pages = numberToArray(data.totalPages).map((page) => (
    <Pagination page={page} currentPage={searchData.page} key={page} />
  ))

  let resultsUI = (
    <div className="results__wrapper" onClick={closeDetails}>
      <div className="results__items">{films}</div>
      <ul className="pagination__cont">{pages}</ul>
    </div>
  )

  if (isFetching) {
    resultsUI = <Loader theme="default" />
  } else if (!data.items.length) {
    resultsUI = <NoResults />
  }

  return (
    <section className="results__cont">
      {resultsUI}
      {detailsData.isClosed && <Details />}
    </section>
  )
}
