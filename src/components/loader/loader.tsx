import { Component, ReactNode } from 'react'
import { CLASS_NAMES } from '../constants'

import './loader.css'

export default class Loader extends Component<{ [key: string]: ReactNode }, { [key: string]: boolean }> {
  render() {
    return (
      <div className={CLASS_NAMES.loaderWrapper}>
        <div></div>
      </div>
    )
  }
}
