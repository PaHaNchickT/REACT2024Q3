import { FilmInfo, FilmObj, FilmResp, reduxStore } from '../types'
import { TEXT_CONTENT } from '../constants'
import { Pagination } from '../pagination/pagination'
import { NoResults } from '../no-results/no-results'
import { numberToArray } from '../../utils/numberToArray'
import { useDispatch, useSelector } from 'react-redux'
import { setIsClosed } from '../../services/detailsSlice'
import { Details } from '../details/details'
import { ChangeEvent, MouseEvent, SetStateAction, useState } from 'react'
import { addItemData, removeItemData } from '../../services/selectedSlice'
import { Selected } from '../selected-panel/selected-info'
import { itemsToArray } from '../../utils/itemsToArray'
import ErrorPage from '../../app/not-found'
import { API } from '../../services/API'
import { Loader } from '../loader/loader'

export function Results(props: {
  data: { results: FilmResp; details?: FilmInfo }
  loaderHandler: () => void
  isLoading: boolean
}) {
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)
  const selectedData = useSelector((state: reduxStore) => state.selectedData.selectedData)
  const selectedItems: number[] = itemsToArray(selectedData.selectedItems)

  const [clientData, setClientData] = useState({})
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  if (!props.data.results.items) return <ErrorPage />

  // function for open details section
  const openDetails = async (event: MouseEvent) => {
    if (detailsData.isClosed || (event.target as HTMLElement).tagName === 'INPUT') return

    dispatch(
      setIsClosed({
        isClosed: true,
        filmId: +(event.currentTarget as HTMLDivElement).id,
      })
    )

    setLoading(true)
    const data = await API().getFilm(event.currentTarget.id)
    setLoading(false)
    setClientData(data as unknown as SetStateAction<{ kinopoiskId: number }>)
  }

  // function for close details section
  const closeDetails = (event: MouseEvent<HTMLDivElement>) => {
    if (
      !detailsData.isClosed ||
      (event.target as HTMLInputElement).tagName === 'INPUT' ||
      (event.target as HTMLInputElement).dataset.family === 'selected-bar'
    )
      return

    dispatch(
      setIsClosed({
        isClosed: false,
        filmId: 0,
      })
    )
  }

  // function for open/closing selected bar
  const checkboxHandling = (event: ChangeEvent) => {
    let targetItemData
    props.data.results.items.forEach((item: FilmObj) => {
      if (item.kinopoiskId === +(event.target as HTMLInputElement).name) targetItemData = item
    })

    if ((event.target as HTMLInputElement).checked) {
      dispatch(addItemData(targetItemData))
    } else {
      dispatch(removeItemData(targetItemData))
    }
  }

  props.data.results.items.forEach((defaultItem: FilmObj) => {
    selectedData.selectedItems.forEach((selectedItem) => {
      if (defaultItem === selectedItem) selectedItems.push(defaultItem.kinopoiskId)
    })
  })

  // rendering results UI
  const films = props.data.results.items.map((film: FilmObj) => (
    <div
      className={`results__item ${theme.color}`}
      data-testid="results__item"
      key={film.kinopoiskId}
      id={film.kinopoiskId.toString()}
      onClick={(event) => openDetails(event as unknown as MouseEvent)}
    >
      <img
        src={film.posterUrlPreview}
        alt={`${film.nameEn || film.nameOriginal || film.nameRu} cover`}
        width="200px"
        height="300px"
        className={theme.color}
      />
      <div className="results__item-info">
        <p className="results__item-name">
          <span>Title: </span>
          {film.nameEn || film.nameOriginal || film.nameRu}
        </p>
        <p className="results__item-year">
          <span>Year: </span>
          {+film.year || TEXT_CONTENT.itemYearStub}
        </p>
        <p className="results__item-raiting">
          <span>IMDb: </span>
          {film.ratingImdb || +film.rating || TEXT_CONTENT.itemRaitingStub}
        </p>
      </div>
      <input
        type="checkbox"
        data-testid="checkbox"
        name={film.kinopoiskId.toString()}
        onChange={(event) => checkboxHandling(event)}
        checked={selectedItems.includes(film.kinopoiskId)}
        className={theme.color}
      ></input>
    </div>
  ))

  const pages = numberToArray(props.data.results.totalPages).map((page) => (
    <Pagination page={page} key={page} loaderHandler={props.loaderHandler} />
  ))

  let resultsUI = (
    <div className="results__wrapper" onClick={(event) => closeDetails(event)}>
      <div className="results__items">{films}</div>
      <ul className="pagination__cont">{pages}</ul>
      {Boolean(selectedData.selectedItems.length) && <Selected />}
    </div>
  )

  if (props.isLoading) resultsUI = <Loader theme="default" />

  if (!props.data.results.items.length) resultsUI = <NoResults />

  return (
    <section className="results__cont">
      {resultsUI}
      {detailsData.isClosed && (
        <Details results={clientData as FilmInfo} isLoading={loading} closeDetails={closeDetails} />
      )}
    </section>
  )
}
