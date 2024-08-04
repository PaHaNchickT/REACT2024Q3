import { useContext } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ThemeContext } from '../../pages/films'

export function Pagination(props: { page: number; currentPage: number }) {
  const { theme } = useContext(ThemeContext)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  let buttonClassname = 'pendingBtn'
  if (props.page === +props.currentPage) buttonClassname = 'activeBtn'

  const onClick = () => {
    router.push(
      `${pathname}?page=${props.page}${(searchParams.get('search') && `&search=${searchParams.get('search')}`) || ''}`
    )
  }

  return (
    <li>
      <a
        onClick={onClick}
        id={props.page.toString()}
        className={`${buttonClassname} ${theme}`}
        data-testid="pendingBtn"
      >
        {props.page}
      </a>
    </li>
  )
}
