import './no-results.css'

export function NoResults(props: { value: string }) {
  return (
    <div className="results__stub" data-testid="results__stub">
      <h2>{`No results for "${props.value}"`}</h2>
    </div>
  )
}
