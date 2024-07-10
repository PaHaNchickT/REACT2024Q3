import { Component } from 'react'
import { FilmObj, GenObj } from '../types'
import API from '../utils/API'
import { CLASS_NAMES, TEXT_CONTENT } from '../constants'

import './results.css'

export default class Results extends Component<GenObj, { [key: string]: string }> {
  API = new API()
  filmsArray = null

  constructor(props: GenObj) {
    super(props)
  }

  render() {
    const films = (this.props.value as FilmObj[]).map((film) => (
      <div className={CLASS_NAMES.resultsItem} key={film.kinopoiskId}>
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
