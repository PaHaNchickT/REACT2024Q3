import { reduxStore } from '../types'
import './pagination.css'
import { useSelector } from 'react-redux'

export function Pagination(props: { page: number }) {
  // const location = useLocation()

  const currentPage = useSelector((state: reduxStore) => state.searchData.searchData.page)

  let buttonClassname = 'pendingBtn'
  if (props.page === currentPage) buttonClassname = 'activeBtn'

  // let rootName = ''
  // if (location.pathname.split('/')[1] === 'search') rootName = 'search'

  const pagButtonHandler = () => {}

  return (
    <li onClick={pagButtonHandler} className={buttonClassname} data-testid="pendingBtn">
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
