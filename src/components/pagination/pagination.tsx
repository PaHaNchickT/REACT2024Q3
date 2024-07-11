import { Link } from 'react-router-dom'
import './pagination.css'

export function Pagination(props: { page: number; value: string; onClick: (value: string, page: number) => void }) {
  return (
    <li>
      <Link
        to={`search/${props.page}`}
        onClick={() => {
          props.onClick(props.value, props.page)
        }}
      >
        {props.page}
      </Link>
    </li>
  )
}
