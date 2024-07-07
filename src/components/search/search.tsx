import { ChangeEvent, Component, ReactNode } from 'react'
import { GenObj } from '../types'
import LocalStorage from '../utils/localStorage'
import { CLASS_NAMES, TEXT_CONTENT } from '../constants'

export default class Search extends Component<GenObj, { [key: string]: string }> {
  localStorage = new LocalStorage()
  savedValue = this.localStorage.getValue()

  state = {
    value: this.savedValue,
  }

  constructor(props: GenObj) {
    super(props)
    this.buttonHandler = this.buttonHandler.bind(this)
    this.errorThrowing = this.errorThrowing.bind(this)
  }

  inputHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
    this.localStorage.saveValue(event.target.value.trim())
  }

  buttonHandler(event: Event) {
    let value = this.state.value
    if ((event.target as HTMLInputElement).textContent === TEXT_CONTENT.btnHome) {
      value = ''
      this.localStorage.saveValue('')
    }

    if (typeof this.props.onClick === 'function') this.props.onClick(value)
    this.setState({ value: value.trim() })
  }

  errorThrowing() {
    if (typeof this.props.onClick === 'function') this.props.onClick(TEXT_CONTENT.errorID)
  }

  render(): ReactNode {
    return (
      <div className={CLASS_NAMES.searchContMain}>
        <button onClick={(event) => this.buttonHandler(event as unknown as Event)}>{TEXT_CONTENT.btnHome}</button>
        <form className={CLASS_NAMES.searchPanelWrapper} onSubmit={(event) => event.preventDefault()}>
          <input type="text" value={this.state.value} onChange={(event) => this.inputHandler(event)} />
          <button type="submit" onClick={(event) => this.buttonHandler(event as unknown as Event)}>
            {TEXT_CONTENT.btnSearch}
          </button>
        </form>
        <button onClick={this.errorThrowing}>{TEXT_CONTENT.btnError}</button>
      </div>
    )
  }
}
