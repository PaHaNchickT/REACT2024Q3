import Link from 'next/link'
// import './pagination.css'
import { useContext } from 'react'
import { ThemeContext } from '../../pages/[films&page=id]'
import { usePathname, useSearchParams } from 'next/navigation'

export function Pagination(props: { page: number; currentPage: number }) {
  const { theme } = useContext(ThemeContext)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  let buttonClassname = 'pendingBtn'
  if (props.page === +props.currentPage) buttonClassname = 'activeBtn'

  return (
    <li>
      <Link
        href={`${pathname}?page=${props.page}&${searchParams.toString().split('page=')[1].split('&')[1] || ''}`}
        id={props.page.toString()}
        className={`${buttonClassname} ${theme}`}
        data-testid="pendingBtn"
      >
        {props.page}
      </Link>
    </li>
  )
}
