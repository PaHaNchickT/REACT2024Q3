import { Component, ReactNode } from 'react'
import { GenObj } from '../types'
import API from '../utils/API'

export default class Results extends Component<GenObj, { [key: string]: string }> {
  API = new API()
  filmsArray = null

  constructor(props: GenObj) {
    super(props)

    this.getData = this.getData.bind(this)
    this.getData()
  }

  async getData() {
    this.filmsArray = (await ((await this.API.start()) as unknown as Response).json()).items
    this.forceUpdate()
  }

  render(): ReactNode {
    if (!this.filmsArray) return

    let filmsArray: { nameOriginal: string; nameEn: string | undefined; nameRu: string; posterUrlPreview: string }[]
    if (this.props.value instanceof Array && !this.props.value.length) {
      filmsArray = this.filmsArray
    } else {
      filmsArray = this.props.value as {
        nameOriginal: string
        nameEn: string | undefined
        nameRu: string
        posterUrlPreview: string
      }[]
    }
    console.log(filmsArray, 'jopa')

    const films = filmsArray.map((film) => (
      <div>
        <img
          src={film.posterUrlPreview}
          alt={`${film.nameEn || film.nameOriginal || film.nameRu} cover`}
          width="200px"
          height="300px"
        />
        <p>{film.nameEn || film.nameOriginal}</p>
      </div>
    ))
    // console.log(this.props.value, this.filmsArray, 'jopa')
    return <div className="results__cont">{films}</div>
  }
}
