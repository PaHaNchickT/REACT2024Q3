import './details.css'

export function Details(props: { id: string }) {
  return (
    <div className="details__cont">
      <p>{props.id}</p>
    </div>
  )
}
