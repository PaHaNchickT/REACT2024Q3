import { useSelector } from 'react-redux'
import { reduxStore } from '../types'

export function CountryOpts() {
  const countries = useSelector((state: reduxStore) => state.countries.countries)
  const options = countries.map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ))

  return options
}
