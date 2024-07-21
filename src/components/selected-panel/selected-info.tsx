import { useDispatch, useSelector } from 'react-redux'
import './selected-info.css'
import { reduxStore } from '../types'
import { clearItemData } from '../../services/selectedSlice'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

export function Selected() {
  const selectedData = useSelector((state: reduxStore) => state.selectedData.selectedData)
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  const outputData = ['id;name;year;IMDb raiting;Kinopoisk raiting;project type;poster URL', '\n']

  selectedData.selectedItems.forEach((film) => {
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

  return (
    <div className={`selected-cont ${theme}`} data-family="selected-bar">
      <p data-family="selected-bar">
        <span data-family="selected-bar">{selectedData.selectedItems.length.toString()}</span>items are selected
      </p>
      <div className="selected__buttons-cont" data-family="selected-bar">
        <button className={theme} onClick={() => dispatch(clearItemData())} data-family="selected-bar">
          Unselect all
        </button>
        <a
          className={theme}
          href={window.URL.createObjectURL(blob)}
          download={`${selectedData.selectedItems.length}_films`}
          data-family="selected-bar"
        >
          Download
        </a>
      </div>
    </div>
  )
}
