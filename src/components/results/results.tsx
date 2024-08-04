import { FilmObj, FilmResp, reduxStore } from '../types'
import { TEXT_CONTENT } from '../constants'
import { Pagination } from '../pagination/pagination'
import { NoResults } from '../no-results/no-results'
import { numberToArray } from '../../utils/numberToArray'
import { useDispatch, useSelector } from 'react-redux'
import { setIsClosed } from '../../services/detailsSlice'
import { Details } from '../details/details'
import { setPage, setSearchValue } from '../../services/searchSlice'
import { ChangeEvent, useContext, MouseEvent } from 'react'
import { ErrorPage } from '../error-page/errorPage'
import { addItemData, removeItemData } from '../../services/selectedSlice'
import { Selected } from '../selected-panel/selected-info'
import { useSearchParams, usePathname } from 'next/navigation'
import { ThemeContext } from '../../pages/films'

export function Results(props: { results: FilmResp }) {
  const selectedItems: number[] = []
  const searchData = useSelector((state: reduxStore) => state.searchData.searchData)
  const detailsData = useSelector((state: reduxStore) => state.detailsData.detailsData)
  const selectedData = useSelector((state: reduxStore) => state.selectedData.selectedData)

  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // getting search and page info from URL
  if (pathname) {
    dispatch(setPage({ page: +searchParams.get('page')! || 1 }))
    dispatch(setSearchValue({ value: searchParams.get('search') || '' }))
  }

  // updating URL after switching search mode to on/off
  // useEffect(() => {
  //   if (pathname) {
  //     const params = new URLSearchParams(searchParams)
  //     if (searchData.value === '') {
  //       params.set('page', searchData.page.toString())
  //     } else {
  //       params.set('search', searchData.value)
  //       params.set('page', searchData.page.toString())
  //     }
  //     params.delete('details')

  //     router.push(params.toString() ? `films?${params.toString()}` : 'films')

  //     getData(searchData.value, searchData.page)
  //   }
  // }, [searchData, pathname])

  if (!props.results.items) return <ErrorPage />

  // function for open details section
  const openDetails = (event: MouseEvent) => {
    if (detailsData.isClosed || (event.target as HTMLElement).tagName === 'INPUT') return

    dispatch(
      setIsClosed({
        isClosed: true,
        filmId: +(event.currentTarget as HTMLDivElement).id,
      })
    )
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
    props.results.items.forEach((item: FilmObj) => {
      if (item.kinopoiskId === +(event.target as HTMLInputElement).name) targetItemData = item
    })

    if ((event.target as HTMLInputElement).checked) {
      dispatch(addItemData(targetItemData))
    } else {
      dispatch(removeItemData(targetItemData))
    }
  }

  props.results.items.forEach((defaultItem: FilmObj) => {
    selectedData.selectedItems.forEach((selectedItem) => {
      if (defaultItem === selectedItem) selectedItems.push(defaultItem.kinopoiskId)
    })
  })

  // rendering results UI
  const films = props.results.items.map((film: FilmObj) => (
    <div
      className={`results__item ${theme}`}
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
        className={theme}
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
        className={theme}
      ></input>
    </div>
  ))

  const pages = numberToArray(props.results.totalPages).map((page) => (
    <Pagination page={page} currentPage={searchData.page} key={page} />
  ))

  let resultsUI = (
    <div className="results__wrapper" onClick={(event) => closeDetails(event)}>
      <div className="results__items">{films}</div>
      <ul className="pagination__cont">{pages}</ul>
      {Boolean(selectedData.selectedItems.length) && <Selected />}
    </div>
  )

  if (!props.results.items.length) {
    resultsUI = <NoResults />
  }

  return (
    <section className="results__cont">
      {resultsUI}
      {detailsData.isClosed && <Details closeDetails={closeDetails} />}
    </section>
  )
}
