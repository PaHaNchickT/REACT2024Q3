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
    const films = (this.props.value as FilmObj[]).map((film) => (
      <div className="results__item" key={crypto.randomUUID()}>
        <img
          src={film.posterUrlPreview}
          alt={`${film.nameEn || film.nameOriginal || film.nameRu} cover`}
          width="200px"
          height="300px"
        />
        <p>{film.nameEn || film.nameOriginal || film.nameRu}</p>
      </div>
    ))
    return <div className="results__cont">{films}</div>
  }
}
