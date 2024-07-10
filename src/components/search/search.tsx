import { ChangeEvent, Component } from 'react'
import { GenObj } from '../types'
import LocalStorage from '../utils/localStorage'
import { CLASS_NAMES, TEXT_CONTENT } from '../constants'

import './search.css'

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
  }

  buttonHandler(event: Event) {
    let value = this.state.value
    if ((event.target as HTMLInputElement).textContent === TEXT_CONTENT.btnHome) {
      value = ''
      this.localStorage.saveValue('')
    }

    if (typeof this.props.onClick === 'function') this.props.onClick(value)
    this.setState({ value: value.trim() })
    this.localStorage.saveValue(value.trim())
  }

  errorThrowing() {
    if (typeof this.props.onClick === 'function') this.props.onClick(TEXT_CONTENT.errorID)
  }

  render() {
    return (
      <div className={CLASS_NAMES.searchContMain}>
        <button onClick={(event) => this.buttonHandler(event as unknown as Event)}>{TEXT_CONTENT.btnHome}</button>
        <form className={CLASS_NAMES.searchPanelWrapper} onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            value={this.state.value}
            placeholder={TEXT_CONTENT.searchPH}
            onChange={(event) => this.inputHandler(event)}
          />
          <button type="submit" onClick={(event) => this.buttonHandler(event as unknown as Event)}>
            {TEXT_CONTENT.btnSearch}
          </button>
        </form>
        <button className={CLASS_NAMES.errorBtn} onClick={this.errorThrowing}>
          {TEXT_CONTENT.btnError}
        </button>
      </div>
    )
  }
}
