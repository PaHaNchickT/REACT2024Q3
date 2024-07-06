import { Component, ReactNode } from 'react'
import { GenObj } from '../types'

export default class Results extends Component<GenObj, { [key: string]: string }> {
  constructor(props: GenObj) {
    super(props)
    this.getData = this.getData.bind(this)
  }

  getData() {}

  render(): ReactNode {
    return <div className="results__cont">hello {this.props.value as string}</div>
  }
}
