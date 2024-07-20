import { useDispatch, useSelector } from 'react-redux'
import './selected-info.css'
import { reduxStore } from '../types'
import { clearItemData } from '../../services/selectedSlice'

export function Selected() {
  const selectedData = useSelector((state: reduxStore) => state.selectedData.selectedData)
  const dispatch = useDispatch()

  const download = () => {
    console.log('download')
  }

  return (
    <div className={`selected-cont`}>
      <p>{`${selectedData.length} items are selected`}</p>
      <button onClick={() => dispatch(clearItemData())}>Unselect all</button>
      <button onClick={download}>Download</button>
    </div>
  )
}
