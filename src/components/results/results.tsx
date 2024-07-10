import { Component } from 'react'
import { FilmObj } from '../types'
import { API } from '../utils/API'
import { CLASS_NAMES, TEXT_CONTENT } from '../constants'

import './results.css'

export default class Results extends Component<{ value: FilmObj[] }, { [key: string]: string }> {
  API = API()
  filmsArray = null

  constructor(props: { value: FilmObj[] }) {
    super(props)
  }

  render() {
    const films = this.props.value.map((film) => (
      <div className={CLASS_NAMES.resultsItem} key={film.filmId}>
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
}
