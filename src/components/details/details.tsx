import { Loader } from '../loader/loader'
import './details.css'
import { FilmObj, reduxStore } from '../types'
import { useGetFilmQuery } from '../../services/API'
import { useDispatch, useSelector } from 'react-redux'
import { setIsClosed } from '../../services/detailsSlice'

export function Details() {
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)
  const dispatch = useDispatch()

  const { data = {} as FilmObj, isFetching } = useGetFilmQuery(detailsData.filmId.toString())

  const closeDetails = () => {
    if (!detailsData.isClosed) return

    dispatch(
      setIsClosed({
        isClosed: false,
        filmId: 0,
      })
    )
    // navigate(location.pathname.split('&')[0])
  }

  let genres
  if (data.genres) genres = data.genres.map((genre) => <li key={genre.genre}>{genre.genre}</li>)

  let resultsUI = (
    <>
      <img
        className="details__bg"
        src={data.posterUrlPreview}
        alt={`${data.nameEn || data.nameOriginal || data.nameRu} cover`}
      />
      <div className="details__close" onClick={closeDetails}></div>
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
        <h3>Film length:</h3>
        <p>{`${data.filmLength} mins` || 'No information'}</p>
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
