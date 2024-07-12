import { useEffect, useState } from 'react'
import { Loader } from '../loader/loader'
import './details.css'
import { API } from '../utils/API'
import { FilmObj } from '../types'

export function Details(props: { id: number }) {
  const [isLoading, setLoading] = useState(true)
  const [filmInfo, setFilmInfo] = useState({} as FilmObj)

  const getData = async () => {
    setLoading(true)

    const request = (await API().getFilmInfo(props.id)) as unknown as { data: FilmObj }
    setFilmInfo(request.data)

    console.log(request.data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  let genres
  if (filmInfo.genres) genres = filmInfo.genres.map((genre) => <li>{genre.genre}</li>)

  let resultsUI = (
    <div className="details__cont">
      <img
        className="details__bg"
        src={filmInfo.posterUrlPreview}
        alt={`${filmInfo.nameEn || filmInfo.nameOriginal || filmInfo.nameRu} cover`}
      />
      <div className="details__close"></div>
      <div className="details__title">
        <h2>{filmInfo.nameEn || filmInfo.nameOriginal || filmInfo.nameRu}</h2>
        <p>{filmInfo.slogan}</p>
      </div>
      <img
        className="details__cover"
        src={filmInfo.posterUrlPreview}
        alt={`${filmInfo.nameEn || filmInfo.nameOriginal || filmInfo.nameRu} cover`}
        width="200px"
        height="300px"
      />
      <div className="details__year">
        <h3>Year:</h3>
        <p>{filmInfo.year}</p>
      </div>
      <div className="details__genres">
        <h3>Genres:</h3>
        <p>{genres}</p>
      </div>
      <div className="details__descr">
        <h3>Description:</h3>
        <p>{filmInfo.description}</p>
      </div>
      <div className="details__length">
        <h3>Film length:</h3>
        <p>{filmInfo.filmLength}</p>
      </div>
      <a href={filmInfo.webUrl} target="_blank">
        More details
      </a>
    </div>
  )
  if (isLoading) resultsUI = <Loader />

  return resultsUI
}
