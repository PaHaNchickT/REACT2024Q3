import { Link, useLocation } from 'react-router-dom'
import './pagination.css'

export function Pagination(props: {
  page: number
  value: string
  currentPage: number
  onClick: (value: string, page: number) => void
}) {
  const location = useLocation()

  let buttonClassname = 'pendingBtn'
  if (props.page === props.currentPage) buttonClassname = 'activeBtn'

  let rootName = ''
  if (location.pathname.split('/')[1] === 'search') rootName = 'search'

  return (
    <li>
      <Link
        to={`${rootName}/${props.page}`}
        onClick={() => {
          props.onClick(props.value, props.page)
        }}
        className={buttonClassname}
      >
        {props.page}
      </Link>
    </li>
  )
}
