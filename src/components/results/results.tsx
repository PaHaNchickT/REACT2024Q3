import { reduxStore } from '../types'
import { TEXT_CONTENT } from '../constants'

import './results.css'
import { Pagination } from '../pagination/pagination'
// import { useEffect, useState } from 'react'
// import { Details } from '../details/details'
// import { useNavigate } from 'react-router-dom'
import { NoResults } from '../no-results/no-results'
import { numberToArray } from '../../utils/numberToArray'
import { useGetFilmsQuery } from '../../services/API'
import { useSelector } from 'react-redux'
import { Loader } from '../loader/loader'

export function Results() {
  // const [showDetails, setShowDetails] = useState(false)
  // const [id, setId] = useState(0)
  // const navigate = useNavigate()

  const searchData = useSelector((state: reduxStore) => state.searchData.searchData)

  const { data = { items: [], total: 0, totalPages: 0 }, isFetching } = useGetFilmsQuery(
    `keyword=${searchData.value}&page=${searchData.page}`
  )

  const openDetails = (event: MouseEvent) => {
    console.log(event)
    // const filmId = +(event.currentTarget as HTMLDivElement).id
    // setId(filmId)
    // setShowDetails(true)
    // navigate(`${location.pathname}&details=${filmId}`)
  }

  const closeDetails = () => {
    console.log('closed')
    // if (!showDetails) return

    // setShowDetails(false)
    // navigate(location.pathname.split('&')[0])
  }

  // useEffect(() => {
  //   if (location.pathname.split('&')[1]) navigate(location.pathname.split('&')[0])
  // }, [])

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

  const pages = numberToArray(data.totalPages).map((page) => <Pagination page={page} key={page} />)

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

  return <section className="results__cont">{resultsUI}</section>

  // return (
  //   <section className="results__cont">
  //     {resultsUI}
  //     {showDetails && <Details id={id} onClick={closeDetails} />}
  //   </section>
  // )
}
