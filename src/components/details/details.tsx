import { Loader } from '../loader/loader'
import './details.css'
import { FilmObj, reduxStore } from '../types'
import { useGetFilmQuery } from '../../services/API'
import { useSelector } from 'react-redux'

export function Details(props: { closeDetails: () => void }) {
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)

  const { data = {} as FilmObj, isFetching } = useGetFilmQuery(detailsData.filmId.toString())

  let genres
  if (data.genres) genres = data.genres.map((genre) => <li key={genre.genre}>{genre.genre}</li>)

  let resultsUI = (
    <>
      <img
        className="details__bg"
        src={data.posterUrlPreview}
        alt={`${data.nameEn || data.nameOriginal || data.nameRu} cover`}
      />
      <div className="details__close" onClick={props.closeDetails}></div>
      <div className="details__title">
        <h2>{data.nameEn || data.nameOriginal || data.nameRu}</h2>
        <p>{data.slogan}</p>
      </div>
      <img
        className="details__cover"
        src={data.posterUrlPreview}
        alt={`${data.nameEn || data.nameOriginal || data.nameRu} cover`}
        width="200px"
        height="300px"
      />
      <div className="details__year">
        <h3>Year:</h3>
        <p>{data.year || 'No information'}</p>
      </div>
      <div className="details__genres">
        <h3>Genres:</h3>
        <p>{genres}</p>
      </div>
      <div className="details__descr">
        <h3>Description:</h3>
        <p>{data.description || 'No information'}</p>
      </div>
      <div className="details__length">
        <h3>Film length (mins):</h3>
        <p>{data.filmLength || 'No information'}</p>
      </div>
      <a href={data.webUrl} target="_blank">
        More details
      </a>
    </>
  )
  if (isFetching) resultsUI = <Loader theme="details" />

  return (
    <div className="details__cont" data-testid="details__cont">
      {resultsUI}
    </div>
  )
}
