import { Link, useLocation } from 'react-router-dom'
import './pagination.css'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

export function Pagination(props: { page: number; currentPage: number }) {
  const { theme } = useContext(ThemeContext)
  const location = useLocation()

  let buttonClassname = 'pendingBtn'
  if (props.page === +props.currentPage) buttonClassname = 'activeBtn'

  return (
    <li>
      <Link
        to={`${location.pathname}${location.search.split('page=')[0]}page=${props.page}`}
        id={props.page.toString()}
        className={`${buttonClassname} ${theme}`}
        data-testid="pendingBtn"
      >
        {props.page}
      </Link>
    </li>
  )
}
