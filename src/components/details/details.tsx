import { Loader } from '../loader/loader'
import { FilmInfo, reduxStore } from '../types'
import { useSelector } from 'react-redux'
import { MouseEvent, useState } from 'react'

export function Details(props: { results?: FilmInfo; closeDetails: (event: MouseEvent<HTMLDivElement>) => void }) {
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const [loading, setLoading] = useState(true)

  if (!props.results || !props.results.data) return

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  let genres
  if (props.results.data.genres)
    genres = props.results.data.genres.map((genre) => <li key={genre.genre}>{genre.genre}</li>)

  let resultsUI = (
    <>
      <img
        className="details__bg"
        src={props.results.data.posterUrlPreview}
        alt={`${props.results.data.nameEn || props.results.data.nameOriginal || props.results.data.nameRu} cover`}
      />
      <div
        className={`details__close ${theme.color}`}
        data-testid="details__close"
        onClick={(event) => props.closeDetails(event)}
      ></div>
      <div className="details__title">
        <h2>{props.results.data.nameEn || props.results.data.nameOriginal || props.results.data.nameRu}</h2>
        <p>{props.results.data.slogan}</p>
      </div>
      <img
        className={`details__cover ${theme.color}`}
        src={props.results.data.posterUrlPreview}
        alt={`${props.results.data.nameEn || props.results.data.nameOriginal || props.results.data.nameRu} cover`}
        width="200px"
        height="300px"
      />
      <div className="details__year">
        <h3>Year:</h3>
        <p>{props.results.data.year || 'No information'}</p>
      </div>
      <div className="details__genres">
        <h3>Genres:</h3>
        <p>{genres}</p>
      </div>
      <div className="details__descr">
        <h3>Description:</h3>
        <p>{props.results.data.description || 'No information'}</p>
      </div>
      <div className="details__length">
        <h3>Film length (mins):</h3>
        <p>{props.results.data.filmLength || 'No information'}</p>
      </div>
      <a className={theme.color} href={props.results.data.webUrl} target="_blank">
        More details
      </a>
    </>
  )
  if (loading) resultsUI = <Loader theme="details" />

  return (
    <div className={`details__cont ${theme.color}`} data-testid="details__cont">
      {resultsUI}
    </div>
  )
}
