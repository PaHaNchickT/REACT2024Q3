import { useSelector } from 'react-redux'
import { reduxStore } from '../types'
import { useSearchParams } from '@remix-run/react'

export function Pagination(props: { page: number }) {
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)
  const [searchParams] = useSearchParams()

  let buttonClassname = 'pendingBtn'
  if (props.page === +searchParams.get('page')!) buttonClassname = 'activeBtn'

  return (
    <li>
      <a
        href={`films?page=${props.page}${(searchParams.get('search') && `&search=${searchParams.get('search')}`) || ''}`}
        id={props.page.toString()}
        className={`${buttonClassname} ${theme.color}`}
        data-testid="pendingBtn"
      >
        {props.page}
      </a>
    </li>
  )
}
