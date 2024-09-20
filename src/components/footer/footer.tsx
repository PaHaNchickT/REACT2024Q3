import { useSelector } from 'react-redux'
import { reduxStore } from '../types'
import Link from 'next/link'

export function Footer() {
  const theme = useSelector((state: reduxStore) => state.themeData.themeData)

  return (
    <div className={`footer footer__${theme.color}`}>
      <p>Made by Pavel Terno</p>
      <p className="footer__year">2024</p>
      <Link href="https://ternopavel.ru/" target="_blank">
        More works here:
      </Link>
    </div>
  )
}
