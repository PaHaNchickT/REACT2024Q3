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

  return (
    <div className={`selected-cont ${theme}`}>
      <p>
        <span>{selectedData.length.toString()}</span>items are selected
      </p>
      <div className="selected__buttons-cont">
        <button className={theme} onClick={() => dispatch(clearItemData())}>
          Unselect all
        </button>
        <a href={window.URL.createObjectURL(blob)} download={`${selectedData.length}_films`}>
          Download
        </a>
      </div>
    </div>
  )
}
