import { usePathname, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { reduxStore } from '../types'
import Link from 'next/link'

export function Pagination(props: { page: number; loaderHandler: () => void }) {
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  let buttonClassname = 'pendingBtn'
  if (props.page === +searchParams.get('page')!) buttonClassname = 'activeBtn'

  return (
    <li>
      <Link
        href={`${pathname}?page=${props.page}${(searchParams.get('search') && `&search=${searchParams.get('search')}`) || ''}`}
        id={props.page.toString()}
        className={`${buttonClassname} ${theme.color}`}
        data-testid="pendingBtn"
        onClick={() => props.loaderHandler()}
      >
        {props.page}
      </Link>
    </li>
  )
}
