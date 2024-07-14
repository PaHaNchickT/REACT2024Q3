import { FilmObj } from '../types'
import { TEXT_CONTENT } from '../constants'

import './results.css'
import { Pagination } from '../pagination/pagination'
import { useEffect, useState } from 'react'
import { Details } from '../details/details'
import { useNavigate } from 'react-router-dom'
import { NoResults } from '../no-results/no-results'
import { numberToArray } from '../../utils/numberToArray'

export function Results(props: {
  filmsArr: FilmObj[]
  value: string
  pages: number
  currentPage: number
  onClick: (value: string, page: number) => void
}) {
  const [showDetails, setShowDetails] = useState(false)
  const [id, setId] = useState(0)
  const navigate = useNavigate()

  const buttonHandler = (event: MouseEvent) => {
    const filmId = +(event.currentTarget as HTMLDivElement).id
    setId(filmId)

    setShowDetails(true)
    navigate(`${location.pathname}&details=${filmId}`)
  }

  const closeDetails = () => {
    if (!showDetails) return

    setShowDetails(false)
    navigate(location.pathname.split('&')[0])
  }

  useEffect(() => {
    if (location.pathname.split('&')[1]) navigate(location.pathname.split('&')[0])
  }, [])

  const films = props.filmsArr.map((film, index) => (
    <div
      className="results__item"
      data-testid="results__item"
      key={`${film.filmId || film.kinopoiskId}${index}`}
      id={(film.filmId || film.kinopoiskId).toString()}
      onClick={(event) => buttonHandler(event as unknown as MouseEvent)}
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

  const pages = numberToArray(props.pages).map((page) => (
    <Pagination
      page={page}
      key={`page-${page}`}
      value={props.value}
      currentPage={props.currentPage}
      onClick={props.onClick}
    />
  ))

  let resultsUI = (
    <div className="results__wrapper" onClick={closeDetails}>
      <div className="results__items">{films}</div>
      <ul className="pagination__cont">{pages}</ul>
    </div>
  )
  if (!props.filmsArr.length) {
    resultsUI = <NoResults value={props.value} />
  }

  return (
    <section className="results__cont">
      {resultsUI}
      {showDetails && <Details id={id} onClick={closeDetails} />}
    </section>
  )
}
