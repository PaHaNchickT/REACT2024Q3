import { useSelector } from 'react-redux'
import { reduxStore } from '../types'

export function NoResults() {
  const currentValue = useSelector((state: reduxStore) => state.searchData.searchData.value)

  return (
    <div className="results__stub" data-testid="results__stub">
      <h2>{`No results for "${currentValue}"`}</h2>
    </div>
  )
}
