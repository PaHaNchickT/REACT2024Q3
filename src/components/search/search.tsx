import { ChangeEvent, Component, ReactNode } from 'react'
import { GenObj } from '../types'

export default class Search extends Component<GenObj, { [key: string]: string }> {
  state = {
    value: '',
  }

  constructor(props: GenObj) {
    super(props)
    this.getData = this.getData.bind(this)
  }

  getData() {
    if (typeof this.props.onChange === 'function') this.props.onChange(this.state.value)
  }

  getValue(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
  }

  render(): ReactNode {
    return (
      <div className="search__cont">
        <input type="text" onChange={(event) => this.getValue(event)} />
        <button onClick={this.getData}>Search</button>
      </div>
    )
  }
}
