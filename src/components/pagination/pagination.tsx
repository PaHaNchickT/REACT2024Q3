import { useSearchParams } from 'react-router-dom'
import './pagination.css'

export function Pagination(props: { page: number; currentPage: number }) {
  const [searchParams, setSearchParams] = useSearchParams()

  let buttonClassname = 'pendingBtn'
  if (props.page === +props.currentPage) buttonClassname = 'activeBtn'

  return (
    <li
      id={props.page.toString()}
      onClick={(event) =>
        setSearchParams(
          Object.assign(Object.fromEntries(searchParams), {
            page: (event.target as HTMLElement).id,
          })
        )
      }
      className={buttonClassname}
      data-testid="pendingBtn"
    >
      {props.page}
    </li>
  )
}
