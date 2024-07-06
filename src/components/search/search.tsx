import { ChangeEvent, Component, ReactNode } from 'react'

export default class Search extends Component<{ name: string }, { [key: string]: string }> {
  state = {
    value: '',
  }

  constructor(props: { name: string }) {
    super(props)
    this.getData = this.getData.bind(this)
  }

  getData() {
    const value = this.state.value
    console.log(value)
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
