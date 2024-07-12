import { FilmObj } from '../types'
import { TEXT_CONTENT } from '../constants'

import './results.css'
import { numberToArray } from '../utils/numberToArray'
import { Pagination } from '../pagination/pagination'
import { useState } from 'react'
import { Details } from '../details/details'

export function Results(props: {
  filmsArr: FilmObj[]
  value: string
  pages: number
  currentPage: number
  onClick: (value: string, page: number) => void
}) {
  const [showDetails, setShowDetails] = useState(false)
  const [id, setId] = useState(0)

  const buttonHandler = (event: MouseEvent) => {
    setId(+(event.currentTarget as HTMLDivElement).id)
    setShowDetails(true)
  }

  const closeDetails = () => {
    if (showDetails) setShowDetails(false)
  }

  const films = props.filmsArr.map((film) => (
    <div
      className="results__item"
      key={film.filmId || film.kinopoiskId}
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

  return (
    <section className="results__cont">
      <div className="results__wrapper" onClick={closeDetails}>
        <div className="results__items">{films}</div>
        <ul className="pagination__cont">{pages}</ul>
      </div>
      {showDetails && <Details id={id} onClick={closeDetails} />}
    </section>
  )
}
