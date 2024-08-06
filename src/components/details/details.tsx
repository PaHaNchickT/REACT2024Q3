import { Loader } from '../loader/loader'
import { FilmInfo, reduxStore } from '../types'
import { useSelector } from 'react-redux'
import { MouseEvent, useState, useEffect } from 'react'
import { API } from '../../services/API'

export function Details(props: { closeDetails: (event: MouseEvent<HTMLDivElement>) => void }) {
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState({ data: {}, externalId: { imdbId: '' } } as FilmInfo)

  const getData = async () => {
    setLoading(true)
    const response = (await API().getFilm(detailsData.filmId)) as unknown as FilmInfo
    setResults(response)
    setLoading(false)
  }

  let genres
  if (results.data.genres) genres = results.data.genres.map((genre) => <li key={genre.genre}>{genre.genre}</li>)

  let resultsUI = (
    <>
      <img
        className="details__bg"
        src={results.data.posterUrlPreview}
        alt={`${results.data.nameEn || results.data.nameOriginal || results.data.nameRu} cover`}
      />
      <div className={`details__close ${theme.color}`} onClick={(event) => props.closeDetails(event)}></div>
      <div className="details__title">
        <h2>{results.data.nameEn || results.data.nameOriginal || results.data.nameRu}</h2>
        <p>{results.data.slogan}</p>
      </div>
      <img
        className={`details__cover ${theme.color}`}
        src={results.data.posterUrlPreview}
        alt={`${results.data.nameEn || results.data.nameOriginal || results.data.nameRu} cover`}
        width="200px"
        height="300px"
      />
      <div className="details__year">
        <h3>Year:</h3>
        <p>{results.data.year || 'No information'}</p>
      </div>
      <div className="details__genres">
        <h3>Genres:</h3>
        <p>{genres}</p>
      </div>
      <div className="details__descr">
        <h3>Description:</h3>
        <p>{results.data.description || 'No information'}</p>
      </div>
      <div className="details__length">
        <h3>Film length (mins):</h3>
        <p>{results.data.filmLength || 'No information'}</p>
      </div>
      <a className={theme.color} href={results.data.webUrl} target="_blank">
        More details
      </a>
    </>
  )
  if (loading) resultsUI = <Loader theme="details" />

  useEffect(() => {
    getData()
  }, [detailsData])

  return (
    <div className={`details__cont ${theme.color}`} data-testid="details__cont">
      {resultsUI}
    </div>
  )
}
