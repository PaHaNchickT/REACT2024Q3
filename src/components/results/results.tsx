import { FilmObj } from '../types'
import { CLASS_NAMES, TEXT_CONTENT } from '../constants'

import './results.css'

export function Results(props: { value: FilmObj[] }) {
  const films = props.value.map((film) => (
    <div className={CLASS_NAMES.resultsItem} key={film.filmId || film.kinopoiskId}>
      <img
        src={film.posterUrlPreview}
        alt={`${film.nameEn || film.nameOriginal || film.nameRu} cover`}
        width="200px"
        height="300px"
      />
      <div className={CLASS_NAMES.resultsItemInfo}>
        <p className={CLASS_NAMES.resultsItemName}>
          <span>Title: </span>
          {film.nameEn || film.nameOriginal || film.nameRu}
        </p>
        <p className={CLASS_NAMES.resultsItemYear}>
          <span>Year: </span>
          {+film.year || TEXT_CONTENT.itemYearStub}
        </p>
        <p className={CLASS_NAMES.resultsItemRaiting}>
          <span>IMDb: </span>
          {film.ratingImdb || +film.rating || TEXT_CONTENT.itemRaitingStub}
        </p>
      </div>
    </div>
  ))

  return <div className={CLASS_NAMES.resultsContMain}>{films}</div>
}
