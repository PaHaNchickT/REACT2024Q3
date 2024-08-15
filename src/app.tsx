import { Link } from 'react-router-dom'

export function App() {
  return (
    <>
      <p>Main Page</p>
      <Link to="/controlled">Controlled</Link>
      <Link to="/uncontrolled">Uncontrolled</Link>
    </>
  )
}
