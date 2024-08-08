import { FilmObj } from '../components/types'

export function itemsToArray(items: FilmObj[]) {
  const tempArray: number[] = []
  items.forEach((item) => {
    tempArray.push(item.kinopoiskId)
  })

  return tempArray
}
