import { Component, ReactNode } from 'react'
import { FilmObj, GenObj } from '../types'
import API from '../utils/API'

export default class Results extends Component<GenObj, { [key: string]: string }> {
  API = new API()
  filmsArray = null

  constructor(props: GenObj) {
    super(props)
  }

  render(): ReactNode {
    console.log(this.props.value)
    const films = (this.props.value as FilmObj[]).map((film) => (
      <div className="results__item" key={crypto.randomUUID()}>
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
            {film.year}
          </p>
          <p className="results__item-imdb">
            <span>IMDb: </span>
            {film.ratingImdb || +film.rating || 'Unranked'}
          </p>
        </div>
      </div>
    ))
    return <div className="results__cont">{films}</div>
  }
}
