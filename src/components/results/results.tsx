import { FilmObj } from '../types'
import { TEXT_CONTENT } from '../constants'

import './results.css'
import { numberToArray } from '../utils/numberToArray'
import { Pagination } from '../pagination/paginatioin'

export function Results(props: { value: FilmObj[]; pages: number }) {
  const films = props.value.map((film) => (
    <div className="results__item" key={film.filmId || film.kinopoiskId}>
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

  const pages = numberToArray(props.pages).map((page) => <Pagination page={page} key={`page-${page}`} />)

  return (
    <section className="results__cont">
      <div className="results__items">{films}</div>
      <div className="pagination__cont">{pages}</div>
    </section>
  )
}
