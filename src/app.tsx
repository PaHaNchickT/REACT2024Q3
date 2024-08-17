import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { reduxStore } from './components/types'
import { Table } from './components/table/table'

export function App() {
  const uncontrData = useSelector((state: reduxStore) => state.uncontrData.uncontrData)
  const contrData = useSelector((state: reduxStore) => state.contrData.contrData)

  return (
    <>
      <p>Main Page</p>
      <Link to="/uncontrolled">Uncontrolled</Link>
      <Link to="/controlled">Controlled</Link>
      <Table data={uncontrData} tableTitle="Uncontrolled Form Data" name="uncontrolled" />
      <Table data={contrData} tableTitle="Controlled Form Data" name="controlled" />
    </>
  )
}
