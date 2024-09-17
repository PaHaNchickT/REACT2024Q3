import { useSearchParams } from 'next/navigation'

export function NoResults() {
  const searchParams = useSearchParams()

  return (
    <div className="results__stub" data-testid="results__stub">
      <h2>{`No results for "${searchParams.get('search')}"`}</h2>
    </div>
  )
}
