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
    <div className="selected-cont">
      <p>
        <span>{selectedData.length.toString()}</span>items are selected
      </p>
      <div className="selected__buttons-cont">
        <button onClick={() => dispatch(clearItemData())}>Unselect all</button>
        <button onClick={download}>Download</button>
      </div>
    </div>
  )
}
