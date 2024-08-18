import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { reduxStore } from './components/types'
import { Table } from './components/table/table'
import { TEXT_CONTENT } from './components/constants'

export function App() {
  const uncontrData = useSelector((state: reduxStore) => state.uncontrData.uncontrData)
  const contrData = useSelector((state: reduxStore) => state.contrData.contrData)

  return (
    <>
      <header>
        <Link to="/uncontrolled">{TEXT_CONTENT.uncontrTitle}</Link>
        <Link to="/controlled">{TEXT_CONTENT.contrTitle}</Link>
      </header>
      <main>
        <Table data={uncontrData} tableTitle="Uncontrolled Form Data" name="uncontrolled" />
        <Table data={contrData} tableTitle="Controlled Form Data" name="controlled" />
      </main>
    </>
  )
}
