import { useDispatch, useSelector } from 'react-redux'
import './selected-info.css'
import { reduxStore } from '../types'
import { clearItemData } from '../../services/selectedSlice'

export function Selected() {
  const selectedData = useSelector((state: reduxStore) => state.selectedData.selectedData)
  const dispatch = useDispatch()

  const download = () => {
    const outputData = ['id;name;year;IMDb raiting;Kinopoisk raiting;project type;poster URL', '\n']

    selectedData.forEach((film) => {
      const tempData = [
        `${film.kinopoiskId}`,
        film.nameEn || film.nameOriginal || film.nameRu || 'No information',
        `${film.year}` || 'No information',
        `${film.ratingImdb}` || 'No information',
        `${film.ratingKinopoisk}` || 'No information',
        `${film.type}` || 'No information',
        film.posterUrl,
      ]
      outputData.push(tempData.join(';'), '\n')
    })

    const blob = new Blob([...outputData], { type: 'text/csv;charset=utf-8' })
    const link = document.createElement('a')

    link.href = window.URL.createObjectURL(blob)
    link.download = `${selectedData.length}_films`
    link.click()
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
