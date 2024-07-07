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
    this.defaultSearch = this.defaultSearch.bind(this)
  }

  buttonHandler() {
    if (typeof this.props.onClick === 'function') this.props.onClick(this.state.value)
  }

  inputHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
    this.localStorage.saveValue(event.target.value)
  }

  defaultSearch() {
    if (typeof this.props.onClick === 'function') this.props.onClick('')
    this.setState({ value: '' })
    this.localStorage.saveValue('')
  }

  render(): ReactNode {
    return (
      <div className="search__cont">
        <button onClick={this.defaultSearch}>Reset Search</button>
        <form className="search__panel-wrapper" onSubmit={(event) => event.preventDefault()}>
          <input type="text" value={this.state.value} onChange={(event) => this.inputHandler(event)} />
          <button type="submit" onClick={this.buttonHandler}>
            Search
          </button>
        </form>
        <button>Error</button>
      </div>
    )
  }
}
