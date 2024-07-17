import { setPage } from '../../services/searchSlice'
import { reduxStore } from '../types'
import './pagination.css'
import { useDispatch, useSelector } from 'react-redux'

export function Pagination(props: { page: number }) {
  // const location = useLocation()
  const dispatch = useDispatch()

  const currentPage = useSelector((state: reduxStore) => state.searchData.searchData.page)

  let buttonClassname = 'pendingBtn'
  if (props.page === +currentPage) buttonClassname = 'activeBtn'

  // let rootName = ''
  // if (location.pathname.split('/')[1] === 'search') rootName = 'search'

  const changePage = (event: Event) => {
    dispatch(
      setPage({
        page: (event.target as HTMLElement).id,
      })
    )
  }

  return (
    <li
      id={props.page.toString()}
      onClick={(event) => changePage(event as unknown as Event)}
      className={buttonClassname}
      data-testid="pendingBtn"
    >
      {props.page}
    </li>
  )

  // return (
  //   <li>
  //     <Link
  //       to={`${rootName}/${props.page}`}
  //       onClick={() => {
  //         props.onClick(props.value, props.page)
  //       }}
  //       className={buttonClassname}
  //       data-testid="pendingBtn"
  //     >
  //       {props.page}
  //     </Link>
  //   </li>
  // )
}
