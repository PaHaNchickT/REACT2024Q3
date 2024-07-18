import { useNavigate } from 'react-router-dom'
import './pagination.css'

export function Pagination(props: { page: number; currentPage: number }) {
  const navigate = useNavigate()

  let buttonClassname = 'pendingBtn'
  if (props.page === +props.currentPage) buttonClassname = 'activeBtn'

  return (
    <li
      id={props.page.toString()}
      onClick={(event) => navigate(`/films?page=${(event.target as HTMLElement).id}`)}
      className={buttonClassname}
      data-testid="pendingBtn"
    >
      {props.page}
    </li>
  )
}
