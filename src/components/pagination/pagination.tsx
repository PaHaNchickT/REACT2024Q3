import { Link } from 'react-router-dom'
import './pagination.css'

export function Pagination(props: {
  page: number
  value: string
  currentPage: number
  onClick: (value: string, page: number) => void
}) {
  let buttonClassname = 'pendingBtn'
  if (props.page === props.currentPage) buttonClassname = 'activeBtn'

  return (
    <li>
      <Link
        to={`search/${props.page}`}
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
