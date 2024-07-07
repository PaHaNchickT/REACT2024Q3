import { ChangeEvent, Component, ReactNode } from 'react'
import { GenObj } from '../types'
import LocalStorage from '../utils/localStorage'

export default class Search extends Component<GenObj, { [key: string]: string }> {
  localStorage = new LocalStorage()
  savedValue = this.localStorage.getValue()

  state = {
    value: this.savedValue,
  }

  constructor(props: GenObj) {
    super(props)
    this.buttonHandler = this.buttonHandler.bind(this)
  }

  inputHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
    this.localStorage.saveValue(event.target.value.trim())
  }

  buttonHandler(event: Event) {
    let value = this.state.value
    if ((event.target as HTMLInputElement).textContent === 'Reset Search') {
      value = ''
      this.localStorage.saveValue('')
    }

    if (typeof this.props.onClick === 'function') this.props.onClick(value)
    this.setState({ value: value.trim() })
  }

  render(): ReactNode {
    return (
      <div className="search__cont">
        <button onClick={(event) => this.buttonHandler(event as unknown as Event)}>Reset Search</button>
        <form className="search__panel-wrapper" onSubmit={(event) => event.preventDefault()}>
          <input type="text" value={this.state.value} onChange={(event) => this.inputHandler(event)} />
          <button type="submit" onClick={(event) => this.buttonHandler(event as unknown as Event)}>
            Search
          </button>
        </form>
        <button>Error</button>
      </div>
    )
  }
}
