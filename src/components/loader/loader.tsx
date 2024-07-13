import './loader.css'

export function Loader(props: { theme: string }) {
  return (
    <div className={`loader__wrapper loader__${props.theme}`}>
      <div></div>
    </div>
  )
}
