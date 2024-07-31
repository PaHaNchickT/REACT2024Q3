import Link from 'next/link'
import { useContext } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { ThemeContext } from '../../app/films/client'

export function Pagination(props: { page: number; currentPage: number }) {
  const { theme } = useContext(ThemeContext)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  let buttonClassname = 'pendingBtn'
  if (props.page === +props.currentPage) buttonClassname = 'activeBtn'

  return (
    <li>
      <Link
        href={`${pathname}?page=${props.page}${(searchParams.get('search') && `&search=${searchParams.get('search')}`) || ''}`}
        id={props.page.toString()}
        className={`${buttonClassname} ${theme}`}
        data-testid="pendingBtn"
      >
        {props.page}
      </Link>
    </li>
  )
}
